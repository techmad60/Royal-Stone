//app/forgot-password/step-two/page.tsx
"use client"
import { useState } from "react";
import LogInNavigator from "@/components/registration/LogInNavigator";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import FormButton from "@/components/ui/FormButton";                
import Link from "next/link";

export default function StepTwo() {
  const [showPassword, setShowPassword] = useState(false);

  //Toggle Password Visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col">
      <LogInNavigator currentStep={2} />
      <h1 className="text-colour-five text-base mt-8 lg:text-[18px]">Reset Password</h1>
      <p className="text-sm text-color-form mt-2">
        Proovide your new password
      </p>
      <form className={`flex flex-col mt-8 space-y-8 max-w-[33.5rem]`}>
        {/*New Password */}
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

        {/*Confirm Password */}
        <div className="flex flex-col gap-2">
          <label className="text-color-form text-sm">Confirm Password</label>
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
      </form>
      <Link href="/forgot-password/step-three">
        <FormButton ButtonText="Proceed" className="py-3 mt-24 lg:mt-16"/>
      </Link>
    </div>
  );
}
