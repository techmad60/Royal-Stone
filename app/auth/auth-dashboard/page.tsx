"use client";
import { useEffect, useState } from "react";
import { TbTargetArrow } from "react-icons/tb";
import { BsFileBarGraphFill } from "react-icons/bs";
import { BsPersonCheck } from "react-icons/bs";
import { BiSolidBank } from "react-icons/bi";
import { IoPeople } from "react-icons/io5";
import { LuScanFace } from "react-icons/lu";
import CardComponentFive from "@/components/ui/CardComponentFive";
import CardVerification from "@/components/AuthDashboard/CardVerification";
import BankInformation from "@/components/AuthDashboard/BankInformation";
import AddBankInformation from "@/components/AuthDashboard/AddBank";
import KycInformation from "@/components/AuthDashboard/KycInformation";

// import Image from "next/image";

export default function Dashboard() {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState(""); // New state for userId
  const [openBankInfo, setIsOpenBankInfo] = useState(false);
  const [openAddBankInfo, setIsOpenAddBankInfo] = useState(false);
  const [isBankInfoProvided, setIsBankInfoProvided] = useState(false);
  const [openKycInfo, setIsOpenKycInfo] = useState(false);

  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    const savedUserId = localStorage.getItem("userId");

    if (savedName) setUserName(savedName);
    if (savedUserId) {
      setUserId(savedUserId);

      // Retrieve the bank info status for this specific user
      const savedBankStatus = localStorage.getItem(
        `isBankInfoProvided-${savedUserId}`
      );
      if (savedBankStatus === "true") {
        setIsBankInfoProvided(true);
      }
    }
  }, []);

  // Save the `isBankInfoProvided` state to localStorage with userId
  useEffect(() => {
    if (userId) {
      localStorage.setItem(
        `isBankInfoProvided-${userId}`,
        String(isBankInfoProvided)
      );
    }
  }, [isBankInfoProvided, userId]);

  // Open Bank Information modal
  const handleOpenBankInfo = () => {
    if (!isBankInfoProvided) {
      setIsOpenBankInfo(true);
    }
  };

  // Open Add Bank Information modal
  const handleOpenAddBankInfo = () => {
    setIsOpenBankInfo(false);
    setIsOpenAddBankInfo(true);
  };

  // Handle successful save of bank details
  // Dashboard Component
  const handleBankInfoSaved = (status: boolean) => {
    setIsBankInfoProvided(status); // Update bank info state
    setIsOpenAddBankInfo(false); // Close the modal
  };

  const handleOpenKycInfo = () => {
    setIsOpenKycInfo(true);
  };

  return (
    <div className="flex flex-col space-y-4 lg:pr-8">
      <p className="text-lg text-color-form py-4 lg:text-start">
        Welcome, {userName || "Guest"}! 👋🏻
      </p>
      <div className="flex gap-4 pb-3 sm:justify-center lg:justify-start">
        <CardComponentFive
          icon={<TbTargetArrow className="text-sm lg:text-base" />}
          label="Total Savings Target"
          number={`0`}
          width="sm:w-[300px] lg:w-[378px]"
        />
        <CardComponentFive
          icon={<BsFileBarGraphFill className="text-sm lg:text-base" />}
          label="Total Investments Made"
          number={`0`}
          width="sm:w-[300px] lg:w-[378px]"
        />
      </div>

      <div className="border-t flex-col space-y-4 py-6">
        {/* Bank Information Card */}
        <CardVerification
          iconImg={<BiSolidBank className="text-xl text-color-one" />}
          label="Bank Information"
          status={isBankInfoProvided ? "Provided" : "Not Set"}
          statusClass={
            isBankInfoProvided ? "text-color-one" : "text-color-form"
          } // Dynamically set the class for text color
          showArrow={isBankInfoProvided ? "hidden" : "flex"} // Hide arrow if provided
          showSwitch="hidden"
          href=""
          onClick={isBankInfoProvided ? undefined : handleOpenBankInfo} // Disable onClick if provided
        />
        <CardVerification
          iconImg={<BsPersonCheck className="text-xl text-color-one" />}
          label="KYC"
          status="Not Set"
          showArrow="flex"
          showSwitch="hidden"
          href=""
          onClick={handleOpenKycInfo}
        />
        <CardVerification
          iconImg={<IoPeople className="text-xl text-color-one" />}
          label="Next of Kin"
          status="Not Set"
          showArrow="flex"
          showSwitch="hidden"
          href=""
        />
        <CardVerification
          iconImg={<LuScanFace className="text-xl text-color-one" />}
          label="Enable Biometrics"
          status="Not Set"
          showArrow="hidden"
          showSwitch="flex"
          href=""
        />
      </div>

      {/* Modals */}
      {openBankInfo && (
        <BankInformation
          onClose={() => setIsOpenBankInfo(false)}
          onAdd={handleOpenAddBankInfo}
        />
      )}

      {openAddBankInfo && (
        <AddBankInformation
          onClose={() => setIsOpenAddBankInfo(false)}
          onSave={(status: boolean) => handleBankInfoSaved(status)} // New handler passed to modal
        />
      )}

      {openKycInfo && (
        <KycInformation
          onClose={() => setIsOpenKycInfo(false)}
        />
      )}
    </div>
  );
}
