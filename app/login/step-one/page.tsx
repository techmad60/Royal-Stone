//app/login/step-one/page.tsx
"use client";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import LogInNavigator from "@/components/registration/LogInNavigator";
import FormButton from "@/components/ui/FormButton";
import Link from "next/link";

export default function StepOne() {
  const [showPassword, setShowPassword] = useState(false);

  //Toggle Password Visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col max-w-[33.5rem]">
      <LogInNavigator currentStep={1} />
      {/* Step One Content Here */}
      <form className={`flex flex-col mt-8 space-y-8`}>
         {/* Email */}
         <div className="flex flex-col gap-2">
          <label className="text-color-form text-sm">Email</label>
          <input
            type="email"
            name="email"
            required
            className="rounded-sm border-b border-slate-200 placeholder:text-colour-five"
            placeholder="kola-osin@gmail.com"
          />
        </div>
        {/* Password */}
        <div className="flex flex-col gap-2">
          <label className="text-color-form text-sm">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              className="rounded-sm border-b border-slate-200 w-full placeholder:text-colour-five"
              placeholder="How much is money?"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-3 flex hover:text-color-one "
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
        <Link href="/forgot-password" className="text-end text-sm text-color-one hover:text-green-700">Forgot Password?</Link>
        {/* Sign in Button */}
        <Link href="/dashboard">
          <FormButton ButtonText="Sign in" className="py-3 mt-4" />
        </Link>
      </form>
        <p className="text-slate-400 text-sm text-center mt-8">
            Don&apos;t have an account? <span className="font-semibold text-color-one duration-300 hover:text-green-700">
                <Link href="/signup">Sign up</Link>
            </span>
        </p>
    </div>
  );
}
