"use client"
import { TbTargetArrow } from "react-icons/tb";
import { BsFileBarGraphFill } from "react-icons/bs";
import CardComponentFive from "@/components/ui/CardComponentFive";
import CardVerification from "@/components/ui/CardVerification";
import { useEffect, useState } from "react";


export default function Dashboard() {
  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    if (savedName) {
      setUserName(savedName);
    }
  }, []);
  const [userName, setUserName] = useState("");

  return (
    <div className="flex flex-col space-y-4 lg:pr-8">
      <p className="text-lg text-color-form py-4 lg:text-start">Welcome, {userName || "Guest"}! 👋🏻 </p>
      <div className="flex gap-4 pb-3 sm:justify-center lg:justify-start">
        <CardComponentFive icon={<TbTargetArrow className="text-sm lg:text-base"/>} label="Total Savings Target" number={`0`} width="sm:w-[300px] lg:w-[378px]"/>
        <CardComponentFive icon={<BsFileBarGraphFill className="text-sm lg:text-base"/>} label="Total Investments Made" number={`0`} width="sm:w-[300px] lg:w-[378px]"/>
      </div>

      <div className="border-t flex-col space-y-4 py-6">
        <CardVerification icon="/images/bank.svg" label="Bank Information" status="Not Set" showArrow="flex" showSwitch="hidden"/>
        <CardVerification icon="/images/kyc.svg" label="KYC" status="Not Set" showArrow="flex" showSwitch="hidden"/>
        <CardVerification icon="/images/kin.svg" label="Next of Kin" status="Not Set" showArrow="flex" showSwitch="hidden"/>
        <CardVerification icon="/images/biometrics.svg" label="Enable Biometrics" status="Not Set" showArrow="hidden" showSwitch="flex"/>
      </div>
    </div>

  );
}
