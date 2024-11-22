"use client";
import { useState, useEffect } from "react";
import Navigator from "@/components/ui/Navigator";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const signupSteps = [
  { label: "Create Account", href: "/auth/signup" },
  { label: "With Email", href: "/auth/signup/with-mail" },
  { label: "Verify Email", href: "/auth/signup/with-mail/verify-mail" },
];

export default function VerifyMail() {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
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
      setError("Email is missing. Cannot verify OTP.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        "https://api-royal-stone.softwebdigital.com/api/auth/verify-account",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            verificationCode: fullOtp,
          }),
        }
      );

      const result = await response.json();
      setLoading(false);

      if (!response.ok) {
        const errorMessage = result.message || "OTP verification failed.";
        throw new Error(errorMessage);
      }

      console.log("OTP verified successfully:", result);
      router.push("/main/dashboard");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred.");
      }
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col">
      <Navigator currentStep={2} steps={signupSteps} />
      <section className="flex flex-col max-w-[417px]">
        <h1 className="text-colour-five text-base mt-8 lg:text-[18px]">
          Verify Email
        </h1>
        <p className="text-sm text-color-form mt-2">
          Kindly input the OTP that has been sent to <strong>{email}</strong> to verify your
          account and complete the signup process.
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

          {error && (
            <p className="text-red-500 text-xs mt-4 text-center">{error}</p>
          )}

          <p className="text-slate-400 text-xs mt-8">
            Didn&apos;t get any email?{" "}
            <span className="text-color-one duration-300 hover:text-green-700">
              <Link href="/">Resend</Link>
            </span>
          </p>
          <Button
            type="submit"
            ButtonText={loading ? "Verifying..." : "Verify"}
            className="py-3 mt-8 w-full lg:w-[417px]"
            disabled={loading}
          />
        </form>
      </section>
    </div>
  );
}
