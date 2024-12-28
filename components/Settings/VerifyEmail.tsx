import { useState, useEffect } from "react";;
import Navigator from "../ui/Navigator";
import Button from "../ui/Button";

interface VerifyEmailProps {
    onNavigateToChangePassword: () => void;
}

// Navigation Steps
const verifyEmail = [
  { label: "Security", href: "/main/settings" },
  { label: "Change Password", href: "/main/settings" },
];

export default function VerifyEmailSetting({
    onNavigateToChangePassword,
  }: VerifyEmailProps) {
    const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [resendLoading, setResendLoading] = useState(false);
    const [resendStatus, setResendStatus] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);
  
    useEffect(() => {
      const savedEmail = localStorage.getItem("email");
      if (savedEmail) {
        setEmail(savedEmail);
      }
    }, []);
  
    const handleChange = (value: string, index: number) => {
      const newOtp = [...otp];
      if (value === "") {
        newOtp[index] = "";
        setOtp(newOtp);
        if (index > 0) {
          const prevInput = document.getElementById(`otp-${index - 1}`);
          prevInput?.focus();
        }
      } else {
        if (value.length <= 1) {
          newOtp[index] = value;
          setOtp(newOtp);
          if (value && index < otp.length - 1) {
            const nextInput = document.getElementById(`otp-${index + 1}`);
            nextInput?.focus();
          }
        }
      }
    };
    const token = localStorage.getItem("accessToken");
    const handleResendEmail = async () => {
      setResendLoading(true);
      setResendStatus(null);
      try {
        // const token = localStorage.getItem("accessToken");
        if (!token) throw new Error("Access token missing. Please log in again.");
  
        const response = await fetch(
          "https://api-royal-stone.softwebdigital.com/api/account/request-password-update",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to resend OTP.");
        }
  
        setResendStatus("OTP sent successfully.");
      }catch (error: unknown) { // Use `unknown` to type the error
        if (error instanceof Error) {
          setResendStatus(error.message);
        } else {
          setError("An unexpected error occurred.");
        }
      } finally {
        setResendLoading(false);
      }
    };
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setError(null);
  
      const fullOtp = otp.join("");
      if (fullOtp.length < 6) {
        setError("Please enter a valid 6-digit OTP.");
        setLoading(false);
        return;
      }
  
      try {
        const response = await fetch(
          "https://api-royal-stone.softwebdigital.com/api/account/verify-password-update-otp",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ otp: fullOtp }),
          }
        );
  
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "OTP verification failed.");
        }
  
        // OTP is verified successfully
        onNavigateToChangePassword(); // Navigate to the next step
      } catch (error: unknown) { // Use `unknown` to type the error
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unexpected error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <div>
        <div className="flex flex-col">
          <Navigator currentStep={1} steps={verifyEmail} classname="lg:flex" />
          <section className="flex flex-col max-w-[417px]">
            <h1 className="text-colour-five text-base mt-8 lg:text-[18px]">
              Verify Email
            </h1>
            <p className="text-sm text-color-form mt-2">
              Kindly input the OTP sent to{" "}
              <span className="font-semibold">{email || "your email"}</span> to
              verify your account and complete the signup process.
            </p>
            <form className="flex flex-col w-full" onSubmit={handleSubmit}>
              <section className="flex items-center gap-2 w-full bg-light-grey rounded-[10px] h-[70px] space-x-4 justify-between px-6 mt-8 border border-slate-100">
                {otp.map((value, index) => (
                  <div
                    key={index}
                    className="w-[28.3px] h-[28.3px] transform rotate-45 overflow-hidden flex items-center justify-center border-2 border-slate-200 rounded-[9px]"
                  >
                    <input
                      type="number"
                      id={`otp-${index}`}
                      value={value}
                      onChange={(e) => handleChange(e.target.value, index)}
                      className="w-full h-full transform -rotate-45 text-center outline-none border-none bg-transparent text-color-zero"
                      maxLength={1}
                    />
                  </div>
                ))}
              </section>
  
              {error && (
                <p className="text-red-500 text-xs mt-4 text-start">{error}</p>
              )}
  
              <p className="text-slate-400 text-xs mt-8">
                Didn&apos;t get any email?{" "}
                <button
                  onClick={handleResendEmail}
                  className="text-color-one duration-300 hover:text-green-700"
                  disabled={resendLoading}
                >
                  {resendLoading ? "Resending..." : "Resend"}
                </button>
              </p>
              {resendStatus && (
                <p
                  className={`text-xs mt-2 text-start ${
                    resendStatus.includes("successfully")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {resendStatus}
                </p>
              )}
  
              <Button
                type="submit"
                ButtonText={loading ? "Verifying..." : "Verify"}
                className="py-3 mt-8 w-full lg:w-[417px]"
                disabled={loading}
              />
            </form>
          </section>
        </div>
      </div>
    );
  }
  
