"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TbTargetArrow } from "react-icons/tb";
import { BsFileBarGraphFill } from "react-icons/bs";
import { BsPersonCheck } from "react-icons/bs";
import { BiSolidBank } from "react-icons/bi";
import { LuScanFace } from "react-icons/lu";
import CardComponentFive from "@/components/ui/CardComponentFive";
import CardVerification from "@/components/AuthDashboard/CardVerification";
import AddBankInformation from "@/components/AuthDashboard/AddBank";
import KycInformation from "@/components/AuthDashboard/KycInformation";
import ValidIdInformation from "@/components/AuthDashboard/ValidID";
import NextOfKinInformation from "@/components/AuthDashboard/NextOfKin";
import ProfilePictureInformation from "@/components/AuthDashboard/ProfilePicture";
import useUserStore from "@/store/userStore";
import { useLoadFullName } from "@/store/userStore";
import { useKycStore } from "@/store/kycStore";

export default function AuthDashboard() {
  const fullName = useUserStore((state) => state.fullName);
  useLoadFullName();
  const router = useRouter(); // Initialize useRouter
  // Zustand store hooks
  const {
    isBankInfoProvided,
    setIsBankInfoProvided,
    isValidIdProvided,
    setIsValidIdProvided,
    isNextOfKinProvided,
    setIsNextOfKinProvided,
    isProfilePictureProvided,
    setIsProfilePictureProvided,
    isAddBankInfoModalOpen,
    setIsAddBankInfoModalOpen,
    isKycModalOpen,
    setIsKycModalOpen,
    isValidIdModalOpen,
    setIsValidIdModalOpen,
    isNextOfKinModalOpen,
    setIsNextOfKinModalOpen,
    isProfilePictureModalOpen,
    setIsProfilePictureModalOpen,
    isKycProvided,
  } = useKycStore();

  const [userId, setUserId] = useState(""); // New state for userId


  useEffect(() => {
    const savedUserId = localStorage.getItem("userId");

    if (savedUserId) {
      setUserId(savedUserId);

      const statuses = [
        {
          key: `isBankInfoProvided-${savedUserId}`,
          setter: setIsBankInfoProvided,
        },
        { key: `isValidIdProvided-${savedUserId}`, setter: setIsValidIdProvided },
        {
          key: `isNextOfKinProvided-${savedUserId}`,
          setter: setIsNextOfKinProvided,
        },
        {
          key: `isProfilePictureProvided-${savedUserId}`,
          setter: setIsProfilePictureProvided,
        },
      ];

      statuses.forEach(({ key, setter }) => {
        const status = localStorage.getItem(key);
        setter(status === "Provided" || status === "true");
      });
    } else {
      // Clear previous states if no userId is found
      setIsBankInfoProvided(false);
      setIsValidIdProvided(false);
      setIsNextOfKinProvided(false);
      setIsProfilePictureProvided(false);
    }
  }, [
    setIsBankInfoProvided,
    setIsNextOfKinProvided,
    setIsProfilePictureProvided,
    setIsValidIdProvided,
  ]);

useEffect(() => {
  if (userId) {
    // Store `isBankInfoProvided` as a boolean value in string format ("true" or "false")
    localStorage.setItem(
      `isBankInfoProvided-${userId}`,
      String(isBankInfoProvided)
    );
    // Store `isValidIdProvided` as a boolean value in string format ("true" or "false")
    localStorage.setItem(
      `isValidIdProvided-${userId}`,
      String(isValidIdProvided)
    );
    // Store `isNextOfKinProvided` as a boolean value in string format ("true" or "false")
    localStorage.setItem(
      `isNextOfKinProvided-${userId}`,
      String(isNextOfKinProvided)
    );
    // Store `isProfilePictureProvided` as a boolean value in string format ("true" or "false")
    localStorage.setItem(
      `isProfilePictureProvided-${userId}`,
      String(isProfilePictureProvided)
    );
  }
}, [
  isBankInfoProvided,
  isValidIdProvided,
  isNextOfKinProvided,
  isProfilePictureProvided,
  userId,
]);


  useEffect(() => {
    if (isKycProvided && isKycModalOpen) {
      setIsKycModalOpen(false);
    }
  }, [isKycProvided, isKycModalOpen, setIsKycModalOpen]);

  // Navigate to /main/dashboard if BankInfo and KYC are provided
  useEffect(() => {
    const userId = localStorage.getItem("userId");
  
    if (userId && isBankInfoProvided && isKycProvided) {
      router.push("/main/dashboard");
    }
  }, [isBankInfoProvided, isKycProvided, router]);
  

  const handleOpenAddBankInfo = () => setIsAddBankInfoModalOpen(true);
  const handleBankInfoSaved = (status: boolean) => {
    setIsBankInfoProvided(status);
    setIsAddBankInfoModalOpen(false);
  };

  const handleOpenKycInfo = () => setIsKycModalOpen(true);
  const handleOpenValidIdInfo = () => setIsValidIdModalOpen(true);
  const handleOpenNextOfKinInfo = () => setIsNextOfKinModalOpen(true);
  const handleOpenProfilePictureInfo = () => setIsProfilePictureModalOpen(true);

  const handleKyc = () => {
    setIsValidIdProvided(true);
    const userId = localStorage.getItem("userId");
    if (userId) {
      localStorage.setItem(`isValidIdProvided-${userId}`, "Provided");
    }
  };
  const handleNextOfKinProvided = () => {
    setIsNextOfKinProvided(true);
    const userId = localStorage.getItem("userId");
    if (userId) {
      localStorage.setItem(`isNextOfKinProvided-${userId}`, "Provided");
    }
  };
  const handleProfilePictureProvided = () => {
    setIsProfilePictureProvided(true);
    const userId = localStorage.getItem("userId");
    if (userId) {
      localStorage.setItem(`isProfilePictureProvided-${userId}`, "Provided");
    }
  };
  const capitalizeFirstLetter = (name: string): string => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  };

  return (
    <div className="flex flex-col lg:pr-8">
      <p className="text-lg text-color-form py-4 lg:text-start">
        Welcome, {fullName ? capitalizeFirstLetter(fullName) : "Guest"}! 👋🏻
      </p>
      <div className="flex gap-4 pb-3 my-4 sm:justify-center lg:justify-start">
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
          }
          showArrow={isBankInfoProvided ? "hidden" : "flex"}
          showSwitch="hidden"
          onClick={isBankInfoProvided ? undefined : handleOpenAddBankInfo}
          style={
            isBankInfoProvided ? "hover:bg-light-grey" : "hover:bg-slate-100"
          }
        />

        {/* KYC Card */}
        <CardVerification
          iconImg={<BsPersonCheck className="text-xl text-color-one" />}
          label="KYC"
          status={isKycProvided ? "Provided" : "Not Set"}
          statusClass={isKycProvided ? "text-color-one" : "text-color-form"}
          showArrow={isKycProvided ? "hidden" : "flex"}
          showSwitch="hidden"
          onClick={isKycProvided ? undefined : handleOpenKycInfo}
          style={isKycProvided ? "hover:bg-light-grey" : "hover:bg-slate-100"}
        />

        {/* Biometrics Card */}
        <CardVerification
          iconImg={<LuScanFace className="text-xl text-color-one" />}
          label="Enable Biometrics"
          status="Not Set"
          showArrow="hidden"
          showSwitch="flex"
        />
      </div>

      {isAddBankInfoModalOpen && (
        <AddBankInformation
          onClose={() => setIsAddBankInfoModalOpen(false)}
          onSave={handleBankInfoSaved}
        />
      )}
      {isKycModalOpen && (
        <KycInformation
          onClickNextOfKin={handleOpenNextOfKinInfo}
          onClickValidId={handleOpenValidIdInfo}
          onClickProfilePicture={handleOpenProfilePictureInfo}
          onClose={() => setIsKycModalOpen(false)}
        />
      )}
      {isValidIdModalOpen && (
        <ValidIdInformation
          onClose={() => setIsValidIdModalOpen(false)}
          onValidIdStatus={handleKyc}
        />
      )}
      {isNextOfKinModalOpen && (
        <NextOfKinInformation
          onClose={() => setIsNextOfKinModalOpen(false)}
          onNextOfKinStatus={handleNextOfKinProvided}
        />
      )}
      {isProfilePictureModalOpen && (
        <ProfilePictureInformation
          onClose={() => setIsProfilePictureModalOpen(false)}
          onProfilePictureStatus={handleProfilePictureProvided}
        />
      )}
    </div>
  );
}
