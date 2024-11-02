//app/signup/step-one/page.tsx
"use client";
import { useState } from "react";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import StepNavigator from "@/components/registration/StepNavigator";
import CheckBox from "@/components/ui/Checkedbox";
import EmptyBox from "@/components/ui/UncheckedBox";
import FormButton from "@/components/ui/FormButton";
import Link from "next/link";

export default function StepOne() {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  //Toggle Password Visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Toggle the checkbox state
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="flex flex-col">
      <StepNavigator currentStep={1} />
      {/* Step One Content Here */}
      <form className={`flex flex-col mt-8 space-y-8 max-w-[33.5rem]`}>
        {/* Name */}
        <div className="flex flex-col gap-2 ">
          <label className="text-color-form text-sm">Full Name</label>
          <input
            type="name"
            name="name"
            required
            className="rounded-sm border-b border-slate-200 placeholder:text-colour-five"
            placeholder="Kolawole Osindeinde"
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-2">
          <label className="text-color-form text-sm">Phone Number</label>
          <input
            type="tel"
            required
            className="rounded-sm border-b border-slate-200 placeholder:text-colour-five"
            placeholder="+234 8103763064"
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

        {/* Phone Number */}
        <div className="flex flex-col gap-2">
          <label className="text-color-form text-sm">
            Referral Code (Optional)
          </label>
          <input
            type="number"
            className="rounded-sm border-b border-slate-200 placeholder:text-colour-five"
            placeholder=""
          />
        </div>

        <div className="flex items-start gap-2 pt-5">
          {/* Toggle between EmptyBox and CheckBox based on state */}
          <div onClick={toggleCheckbox} className="cursor-pointer">
            {isChecked ? <CheckBox /> : <EmptyBox />}
          </div>
          <p className="text-sm text-color-form ">
            Accept <span className="cursor-pointer pb-[0.02rem] border-b hover:text-color-one">
            terms & conditions.
            </span>
          </p>
        </div>
        <Link href="/signup/step-two">
          <FormButton ButtonText="Create Account" className="py-3" />
        </Link>
      </form>
        <p className="text-slate-400 text-center mt-8">
            Already have an account?<span className="font-semibold text-color-one duration-300 hover:text-green-700">
                <Link href="/login">Sign in</Link>
            </span>
        </p>
    </div>
  );
}
