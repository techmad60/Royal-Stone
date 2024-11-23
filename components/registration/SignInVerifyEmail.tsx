"use client";

import { useState, useEffect } from "react";
import Navigator from "@/components/ui/Navigator";
import Button from "@/components/ui/Button";
import { useRouter, useSearchParams } from "next/navigation";

const loginSteps = [
  { label: "Sign in", href: "/auth/login" },
  { label: "With email", href: "/auth/login/with-mail" },
  { label: "Forgot Password", href: "/auth/login/with-mail/forgot-password" },
];

export default function VerifyMail() {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [resendLoading, setResendLoading] = useState(false);
  const [resendStatus, setResendStatus] = useState<string | null>(null);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const emailParam = searchParams?.get("email");
    if (!emailParam) {
      setError("Email is required to verify your account.");
    } else {
      setEmail(emailParam);
    }
  }, [searchParams]);

  const handleResendOtp = async () => {
    if (!email) {
      setError("Email is missing. Cannot resend OTP.");
      return;
    }

    setResendLoading(true);
    setResendStatus(null);

    try {
      const response = await fetch(
       "https://api-royal-stone.softwebdigital.com/api/auth/request-verification?email=${encodeURIComponent(email)}",
        { method: "GET" }
      );

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.message || "Failed to resend OTP.");
      }

      setResendStatus("OTP sent successfully to your email.");
    } catch (err: unknown) {
      setResendStatus(
        err instanceof Error ? err.message : "An unexpected error occurred."
      );
    } finally {
      setResendLoading(false);
    }
  };

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return; // Allow only digits
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const fullOtp = otp.join("");
    if (fullOtp.length < 6) {
      setError("Please enter a valid 6-digit OTP.");
      return;
    }

    if (!email) {
      setError("Email is missing. Cannot proceed.");
      return;
    }

    // Redirect to the reset password page with OTP and email
    router.push(
      `/auth/login/with-mail/forgot-password/verify-email/reset-password?email=${encodeURIComponent(
        email
      )}&otp=${encodeURIComponent(fullOtp)}`
    );
  };

  return (
    <div className="flex flex-col">
      <Navigator currentStep={2} steps={loginSteps} />
      <section className="flex flex-col max-w-[417px]">
        <h1 className="text-colour-five text-base mt-8 lg:text-[18px]">
          Verify Email
        </h1>
        <p className="text-sm text-color-form mt-2">
          Kindly input the OTP sent to <strong>{email}</strong> to verify your account and complete
          your password change.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col w-full">
          <section className="flex items-center gap-2 w-full bg-light-grey rounded-[10px] h-[70px] space-x-4 justify-between px-6 mt-8 border border-slate-100">
            {otp.map((value, index) => (
              <div
                key={index}
                className="w-[28.3px] h-[28.3px] transform rotate-45 overflow-hidden flex items-center justify-center border-2 border-slate-200 rounded-[9px]"
              >
                <input
                  type="text"
                  id={`otp-${index}`}
                  value={value}
                  onChange={(e) => handleChange(e.target.value, index)}
                  className="w-full h-full transform -rotate-45 text-center outline-none border-none bg-transparent text-color-zero"
                  maxLength={1}
                />
              </div>
            ))}
          </section>

          {error && <p className="text-red-500 text-xs mt-4">{error}</p>}

          <p className="text-slate-400 text-xs mt-8">
            Didn&apos;t get the email?{" "}
            <button
              onClick={handleResendOtp}
              className="text-color-one duration-300 hover:text-green-700"
              disabled={resendLoading}
            >
              {resendLoading ? "Resending..." : "Resend"}
            </button>
          </p>
          {resendStatus && (
            <p
              className={`text-xs mt-2 ${
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
            ButtonText="Verify"
            className="py-3 mt-12 w-full lg:w-[417px]"
          />
        </form>
      </section>
    </div>
  );
}
