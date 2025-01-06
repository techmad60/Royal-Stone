"use client";
import ProfileSettings from "@/components/Settings/Profile/ProfileSetting";
import ChangePassword from "@/components/Settings/Security/ChangePassword";
import SecuritySettings from "@/components/Settings/Security/SecuritySetting";
import VerifyOtpSetting from "@/components/Settings/Security/VerifyOtp";
import AccountSettings from "@/components/Settings/ui/AccountSettings";
import Icon from "@/components/ui/Icon";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import useBankCryptoStore from "@/store/bankCryptoStore";
import useUserStore, { useLoadFullName } from "@/store/userStore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BiSolidBank, BiSupport } from "react-icons/bi";
import { BsPersonCheck } from "react-icons/bs";
import { FaQuestionCircle } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbPencil } from "react-icons/tb";
// import AddPayment from "./Bank/AddPaymentMethod";
import FAQs from "@/components/Settings/Faqs/FaqsSettings";
import Kyc from "@/components/Settings/Kyc/KycSettings";
import NextofKin from "@/components/Settings/Kyc/NextofKin";
import ValidID from "@/components/Settings/Kyc/ValidId";
import Support from "@/components/Settings/Support/SupportSetting";
import AddBankDetails from "./Bank/AddBankDetails";
import AddCryptoDetails from "./Bank/AddCryptoDetails";
import BankSetting from "./Bank/BankSettings";

export default function SettingsParent() {
  const isDesktop = useMediaQuery("(min-width: 1024px)"); // true if screen width is 1024px or larger

  const [activeSetting, setActiveSetting] = useState<string | null>(
    isDesktop ? "Profile" : null
  );
  const [parentSetting, setParentSetting] = useState<string | null>(null); // Track the parent setting

  const [deleteBankOpen, setIsDeleteBankOpen] =  useState(false);
  
  const setSelectedType = useBankCryptoStore((state) => state.setSelectedType);
  const setSelectedBankId = useBankCryptoStore(
    (state) => state.setSelectedBankId
  );
  const setSelectedCryptoId = useBankCryptoStore(
    (state) => state.setSelectedCryptoId
  );
  const fullName = useUserStore((state) => state.fullName);
  useLoadFullName();

  useEffect(() => {
    // Set activeSetting to "Profile" if on desktop
    if (isDesktop && !activeSetting) {
      setActiveSetting("Profile");
    }
  }, [isDesktop, activeSetting]);

  const handleSettingClick = (
    setting: string,
    parent: string | null = null
  ) => {
    setActiveSetting(setting);
    setParentSetting(parent);
  };
  const router = useRouter();

//   const onNavigateToDelete = (id: string, type: "bank" | "crypto") => {
//     setIsDeleteBankOpen(false);
//     if (type === "bank") {
//         setSelectedBankId(id); // Set the selected bank ID
//     } else {
//         setSelectedCryptoId(id); // Set the selected crypto ID
//     }
//     setSelectedType(type); // Set the type (bank or crypto)
// };


  const handleDeleteAccount = async () => {
    const confirmation = confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );
    if (!confirmation) return;

    // Retrieve the token from local storage
    const token = localStorage.getItem("accessToken"); // Replace "authToken" with your actual key if different

    if (!token) {
      alert("User is not authenticated. Please log in again.");
      return;
    }

    try {
      const response = await fetch(
        "https://api-royal-stone.softwebdigital.com/api/account/profile",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        alert("Your account has been deleted successfully.");
        // Navigate to login or appropriate page
        router.push("/auth/login");
      } else {
        const errorData = await response.json();
        console.error("Error deleting account:", errorData);
        alert(
          errorData?.message || "Failed to delete account. Please try again."
        );
      }
    } catch (error) {
      console.error("Network error:", error);
      alert(
        "An error occurred. Please check your internet connection and try again."
      );
    }
  };
  const capitalizeFirstLetter = (name: string): string => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  };

  return (
    <div className="">
      {/* Account Settings and Profile Settings */}
      <div className="lg:grid grid-cols-2 gap-4 xl:gap-16">
        <div
          className={`${
            activeSetting && !isDesktop ? "hidden" : "lg:border-r lg:pr-20"
          }`}
        >
          <div>
            <div className="relative flex justify-start mt-8">
              <div className="transform rotate-45 w-10 h-10 rounded-[16.66px]">
                <Image
                  src="/images/user-2.svg"
                  height={40}
                  width={40}
                  alt="User Image"
                  className="transform -rotate-45"
                />
              </div>
              <div className="absolute inset-y-0 w-10 h-10 flex justify-center items-center bg-[rgba(0,0,0,0.2)] transform rotate-45 rounded-[16.66px]">
                <TbPencil className="text-white transform -rotate-45" />
              </div>
            </div>
            <p className="text-color-zero font-medium tracking-tight mt-4">
              {fullName ? capitalizeFirstLetter(fullName) : "Guest"}
            </p>
            <hr className="my-4" />
          </div>
          <div
            className={`${"space-y-4 lg:grid grid-cols-2 grid-rows-3 lg:mt-4 lg:space-y-0 lg:gap-x-20 lg:gap-y-2 xl:gap-x-8 xl:gap-y-8"}`}
          >
            <div
              className={`cursor-pointer rounded-common duration-150 lg:w-[180px] lg:h-[133px] lg:items-start xl:w-[195px] 2xlg:w-[235px] ${
                activeSetting === "Profile"
                  ? "bg-color-two hover:bg-color-two"
                  : "bg-light-grey hover:bg-slate-100"
              }`}
              onClick={() => handleSettingClick("Profile")}
            >
              <AccountSettings
                settingIcon={
                  <IoPerson className="text-color-one text-2xl lg:text-lg" />
                }
                setting="Profile settings"
                settingText="Update information about yourself."
                navigate={<MdKeyboardArrowRight className="text-xl" />}
                containerStyle="bg-transparent items-center lg:w-[180px] lg:h-[133px] lg:items-start xl:w-[195px] 2xlg:w-[235px]"
              />
            </div>

            <div
              className={`cursor-pointer rounded-common duration-150 lg:w-[180px] lg:h-[133px] lg:items-start xl:w-[195px] 2xlg:w-[235px] ${
                activeSetting === "Security Setting" ||
                parentSetting === "Security Setting"
                  ? "bg-color-two hover:bg-color-two"
                  : "bg-light-grey hover:bg-slate-100"
              }`}
              onClick={() => handleSettingClick("Security Setting")}
            >
              <AccountSettings
                settingIcon={
                  <IoIosLock className="text-color-one text-2xl lg:text-lg" />
                }
                setting="Security settings"
                settingText="Keep your accounts secure."
                navigate={<MdKeyboardArrowRight className="text-xl" />}
                containerStyle="bg-transparent items-center lg:w-[180px] lg:h-[133px] lg:items-start xl:w-[195px] 2xlg:w-[235px]"
              />
            </div>

            <div
              className={`cursor-pointer rounded-common duration-150 lg:w-[180px] lg:h-[133px] lg:items-start xl:w-[195px] 2xlg:w-[235px] ${
                activeSetting === "Bank Setting" ||
                parentSetting === "Bank Setting"
                  ? "bg-color-two hover:bg-color-two"
                  : "bg-light-grey hover:bg-slate-100"
              }`}
              onClick={() => handleSettingClick("Bank Setting")}
            >
              <AccountSettings
                settingIcon={
                  <BiSolidBank className="text-color-one text-2xl lg:text-lg" />
                }
                setting="Bank Information"
                settingText="Update your bank Information."
                navigate={<MdKeyboardArrowRight className="text-xl" />}
                containerStyle="bg-transparent items-center lg:w-[180px] lg:h-[133px] lg:items-start xl:w-[195px] 2xlg:w-[235px]"
              />
            </div>
            <div
              className={`cursor-pointer rounded-common duration-150 lg:w-[180px] lg:h-[133px] lg:items-start xl:w-[195px] 2xlg:w-[235px] ${
                activeSetting === "Support Setting"
                  ? "bg-color-two hover:bg-color-two"
                  : "bg-light-grey hover:bg-slate-100"
              }`}
              onClick={() => handleSettingClick("Support Setting")}
            >
              <AccountSettings
                settingIcon={
                  <BiSupport className="text-color-one text-2xl lg:text-lg" />
                }
                setting="Support"
                settingText="Mollis nulla in felis vulputate in ut diam."
                navigate={<MdKeyboardArrowRight className="text-xl" />}
                containerStyle="bg-transparent items-center lg:w-[180px] lg:h-[133px] lg:items-start xl:w-[195px] 2xlg:w-[235px]"
              />
            </div>

            <div
              className={`cursor-pointer rounded-common duration-150 lg:w-[180px] lg:h-[133px] lg:items-start xl:w-[195px] 2xlg:w-[235px] ${
                activeSetting === "FAQs Setting"
                  ? "bg-color-two hover:bg-color-two"
                  : "bg-light-grey hover:bg-slate-100"
              }`}
              onClick={() => handleSettingClick("FAQs Setting")}
            >
              <AccountSettings
                settingIcon={
                  <FaQuestionCircle className="text-color-one text-2xl lg:text-lg" />
                }
                setting="FAQs"
                settingText="Ultricies ut felis sit vitae sed eget erat."
                navigate={<MdKeyboardArrowRight className="text-xl" />}
                containerStyle="bg-transparent items-center lg:w-[180px] lg:h-[133px] lg:items-start xl:w-[195px] 2xlg:w-[235px]"
              />
            </div>
            <div
              className={`cursor-pointer rounded-common duration-150 lg:w-[180px] lg:h-[133px] lg:items-start xl:w-[195px] 2xlg:w-[235px] ${
                activeSetting === "Kyc Setting" ||
                parentSetting === "Kyc Setting"
                  ? "bg-color-two hover:bg-color-two"
                  : "bg-light-grey hover:bg-slate-100"
              }`}
              onClick={() => handleSettingClick("Kyc Setting")}
            >
              <AccountSettings
                settingIcon={
                  <BsPersonCheck className="text-color-one text-2xl lg:text-lg" />
                }
                setting="KYC"
                settingText="Update your KYC info."
                navigate={<MdKeyboardArrowRight className="text-xl" />}
                containerStyle="bg-transparent items-center lg:w-[180px] lg:h-[133px] lg:items-start xl:w-[195px] 2xlg:w-[235px]"
              />
            </div>
          </div>
          {/* Delete Account Button */}
          <section
            className="flex bg-light-grey cursor-pointer hover:bg-slate-100 duration-300 p-4 shadow-sm rounded-common w-[167.5px] mt-4"
            onClick={handleDeleteAccount}
          >
            <div className="flex  items-center gap-2 lg:gap-4">
              <Icon
                icon={<RiDeleteBin6Line className="text-sm text-red-500" />}
                containerSize="w-[24px] h-[24px] rounded-[9px]"
              />
              <div>
                <p className="text-sm text-color-zero tracking-tight">
                  Delete Account
                </p>
              </div>
            </div>
          </section>
        </div>
        {/* Main Content */}
        <div>
          {activeSetting === "Profile" && <ProfileSettings />}
          {activeSetting === "Security Setting" && (
            <SecuritySettings
              onVerifyClick={() =>
                handleSettingClick("Verify Otp", "Security Setting")
              }
            />
          )}
          {activeSetting === "Verify Otp" && (
            <VerifyOtpSetting
              onNavigateToChangePassword={() =>
                handleSettingClick("Change Password", "Security Setting")
              }
            />
          )}
          {/* Add additional setting components if necessary */}
          {activeSetting === "Change Password" && <ChangePassword />}
          {activeSetting === "Bank Setting" && (
            <BankSetting
              onNavigateToAddBankDetails={() =>
                handleSettingClick("Add Bank Details", "Bank Setting")
              }
              onNavigateToAddCryptoDetails={() =>
                handleSettingClick("Add Crypto Details", "Bank Setting")
              }
              // onNavigateToDeleteBank={(bankId: string) => onNavigateToDelete(bankId, "bank")}
              // onNavigateToDeleteCrypto={(cryptoId: string) =>
              //     onNavigateToDelete(cryptoId, "crypto")
              // }
            />
          )}
          {/* {activeSetting === "New Bank" && (
            <AddBank
              onNavigateToAddBankDetails={() =>
                handleSettingClick("Add Bank Details", "Bank Setting")
              }
              onNavigateToAddCryptoDetails={() =>
                handleSettingClick("Add Crypto Details", "Bank Setting")
              }
            />
          )} */}
          {activeSetting === "Add Bank Details" && <AddBankDetails />}
          {activeSetting === "Add Crypto Details" && <AddCryptoDetails />}

          {/* {deleteBankOpen && (
            <DeleteBank onClose={() => setIsDeleteBankOpen(false)} />
          )} */}

          {/* Rejected */}
          {/* <BankSetting
              onNavigatetoCreateAddBank={() => handleSettingClick("New Bank", "Bank Setting")}
              onNavigatetoDeleteBank={() => setIsDeleteBankOpen(true)}
            /> */}
          {activeSetting === "Support Setting" && <Support />}
          {activeSetting === "FAQs Setting" && <FAQs />}
          {activeSetting === "Kyc Setting" && (
            <Kyc
              onNavigatetoValidID={() =>
                handleSettingClick("Valid ID", "Kyc Setting")
              }
              onNavigatetoNextofKin={() =>
                handleSettingClick("Next of Kin", "Kyc Setting")
              }
              // onNavigatetoBvn={() => handleSettingClick("BVN")}
            />
          )}
          {activeSetting === "Valid ID" && <ValidID />}
          {activeSetting === "Next of Kin" && <NextofKin />}
        </div>
      </div>
    </div>
  );
}
