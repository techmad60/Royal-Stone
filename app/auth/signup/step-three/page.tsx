//signup/step-three/page.tsx
"use client";
import { useState } from "react";
import StepNavigator from "@/components/registration/SignUpNavigator";
import FormButton from "@/components/ui/FormButton";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

export default function StepThree() {
  const [isArrowUp, setIsArrowUp] = useState(true);

  // Toggle the state
  const handleArrowClick = () => {
    setIsArrowUp(!isArrowUp);
  };
  return (
    <div className="flex flex-col">
      <StepNavigator currentStep={3} />
      <div className="flex items-center justify-between max-w-[535px]">
        <h1 className="text-colour-five text-base mt-8 lg:text-[18px]">
          Complete Setup
        </h1>
        <Link
          href="/dashboard"
          className="flex items-center justify-center text-sm text-white text-center mt-8 bg-color-one rounded-xl hover:bg-green-700 w-[71px] h-[26px]"
        >
          Skip
        </Link>
      </div>
      <form className={`flex flex-col mt-8 space-y-8 max-w-[535px]`}>
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="text-color-form text-sm">Gender</label>
          <div className="relative">
            <input
              type="text"
              required
              autoFocus
              className="rounded-sm border-b border-slate-200 placeholder:text-colour-five w-full"
              placeholder="Male"
            />
            <button
              className="absolute inset-y-0 right-3 flex items-center hover:text-green-700"
              onClick={handleArrowClick}
            >
              {isArrowUp ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="text-color-form text-sm">Username</label>
          <input
            type="name"
            name="name"
            required
            className="rounded-sm border-b border-slate-200 placeholder:text-colour-five"
            placeholder="Kola Osin"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-color-form text-sm">Country</label>
          <div className="relative">
            <input
              type="text"
              required
              autoFocus
              className="rounded-sm border-b border-slate-200 placeholder:text-colour-five w-full"
              placeholder="Nigeria"
            />
            <button
              className="absolute inset-y-0 right-3 flex items-center hover:text-green-700"
              onClick={handleArrowClick}
            >
              {isArrowUp ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-color-form text-sm">State</label>
          <div className="relative">
            <input
              type="text"
              required
              autoFocus
              className="rounded-sm border-b border-slate-200 placeholder:text-colour-five w-full"
              placeholder="Lagos"
            />
            <button
              className="absolute inset-y-0 right-3 flex items-center hover:text-green-700"
              onClick={handleArrowClick}
            >
              {isArrowUp ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col gap-2">
          <label className="text-color-form text-sm">Address</label>
          <input
            type="text"
            name="text"
            required
            className="rounded-sm border-b border-slate-200 placeholder:text-colour-five"
            placeholder="31 Olorunjare Street, Pako-Akoka"
          />
        </div>
      </form>
      <Link href="/auth/dashboard">
          <FormButton ButtonText="Proceed" className="py-3 mt-20" />
      </Link>
      
    </div>
  );
}
