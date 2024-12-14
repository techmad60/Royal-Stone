"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { IoPerson, IoPeople } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";
import { TbPencil } from "react-icons/tb";
import { BiSolidBank, BiSupport } from "react-icons/bi";
import { FaQuestionCircle } from "react-icons/fa";
import { BsPersonCheck } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import Icon from "@/components/ui/Icon";
import AccountSettings from "@/components/Settings/AccountSettings";
import ProfileSettings from "@/components/Settings/ProfileSetting";
import VerifyEmailSetting from "@/components/Settings/VerifyEmail";
import SecuritySettings from "@/components/Settings/SecuritySetting";
import ChangePassword from "@/components/Settings/ChangePassword";
import BankSetting from "@/components/Settings/BankSettings";
import NewBank from "@/components/Settings/NewBank";
import DeleteBank from "@/components/Settings/DeleteBank";
import Support from "@/components/Settings/SupportSetting";
import FAQs from "@/components/Settings/FaqsSettings";
import Kyc from "@/components/Settings/KycSettings";
import ValidID from "@/components/Settings/ValidId";
import NextofKin from "@/components/Settings/NextofKin";
import Bvn from "@/components/Settings/Bvn";


export default function SettingsPage() {
  const isDesktop = useMediaQuery("(min-width: 1024px)"); // true if screen width is 1024px or larger
  const [activeSetting, setActiveSetting] = useState<string | null>(
    isDesktop ? "Profile" : null
  );

  useEffect(() => {
    // Set activeSetting to "Profile" if on desktop
    if (isDesktop && !activeSetting) {
      setActiveSetting("Profile");
    }
  }, [isDesktop, activeSetting]);

  const handleSettingClick = (setting: string) => {
    setActiveSetting(setting);
  };

  const [deleteBankOpen, setIsDeleteBankOpen] = useState(false);
  const router = useRouter()

  const handleDeleteAccount = async () => {
    const confirmation = confirm("Are you sure you want to delete your account? This action cannot be undone.");
    if (!confirmation) return;
  
    // Retrieve the token from local storage
    const token = localStorage.getItem("accessToken"); // Replace "authToken" with your actual key if different
  
    if (!token) {
      alert("User is not authenticated. Please log in again.");
      return;
    }
  
    try {
      const response = await fetch('https://api-royal-stone.softwebdigital.com/api/account/profile', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
  
      if (response.ok) {
        alert("Your account has been deleted successfully.");
        // Navigate to login or appropriate page
        router.push("/auth/login");
      } else {
        const errorData = await response.json();
        console.error("Error deleting account:", errorData);
        alert(errorData?.message || "Failed to delete account. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("An error occurred. Please check your internet connection and try again.");
    }
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
            <p className="text-color-zero text-sm font-medium mt-4">
              Cooper Winterwind
            </p>
            <hr className="my-4" />
          </div>
          <div
            className={`${"space-y-4 lg:grid grid-cols-2 grid-rows-3 lg:mt-4 lg:space-y-0 lg:gap-x-20 lg:gap-y-2 xl:gap-x-8 xl:gap-y-8"}`}
          >
            <div
              className={`cursor-pointer rounded-common hover:bg-slate-100 duration-150 lg:w-[180px] lg:h-[133px] lg:items-start xl:w-[195px] 2xlg:w-[235px] ${
                activeSetting === "Profile" ? "bg-color-two" : "bg-light-grey"
              }`}
              onClick={() => handleSettingClick("Profile")}
            >
              <AccountSettings
                settingIcon={
                  <IoPerson className="text-color-one text-2xl lg:text-lg" />
                }
                setting="Profile settings"
                settingText="Update information about yourself."
                navigate={<MdKeyboardArrowRight className="text-xl"/>}
              />
            </div>

            <div
              className={`cursor-pointer rounded-common hover:bg-slate-100 duration-150 lg:w-[180px] lg:h-[133px] lg:items-start xl:w-[195px] 2xlg:w-[235px] ${
                activeSetting === "Security Setting"
                  ? "bg-color-two"
                  : "bg-light-grey"
              }`}
              onClick={() => handleSettingClick("Security Setting")}
            >
              <AccountSettings
                settingIcon={
                  <IoIosLock className="text-color-one text-2xl lg:text-lg" />
                }
                setting="Security settings"
                settingText="Turpis ultrices quis vestibulum gravida"
                navigate={<MdKeyboardArrowRight className="text-xl"/>}
              />
            </div>

            <div
              className={`cursor-pointer rounded-common hover:bg-slate-100 duration-150 lg:w-[180px] lg:h-[133px] lg:items-start xl:w-[195px] 2xlg:w-[235px] ${
                activeSetting === "Bank Setting"
                  ? "bg-color-two"
                  : "bg-light-grey"
              }`}
              onClick={() => handleSettingClick("Bank Setting")}
            >
              <AccountSettings
                settingIcon={
                  <BiSolidBank className="text-color-one text-2xl lg:text-lg" />
                }
                setting="Bank Information"
                settingText="Id at quis sed posuere magna vel"
                navigate={<MdKeyboardArrowRight className="text-xl"/>}
              />
            </div>

            <AccountSettings
              settingIcon={
                <IoPeople className="text-color-one text-2xl lg:text-lg" />
              }
              setting="Referrals"
              settingText="Sit ultricies in lorem cursus. In vitae"
              navigate={<MdKeyboardArrowRight className="text-xl"/>}
            />
            <div
              className={`cursor-pointer rounded-common hover:bg-slate-100 duration-150 lg:w-[180px] lg:h-[133px] lg:items-start xl:w-[195px] 2xlg:w-[235px] ${
                activeSetting === "Support Setting" ? "bg-color-two" : "bg-light-grey"
              }`}
              onClick={() => handleSettingClick("Support Setting")}
            >
              <AccountSettings
                settingIcon={
                  <BiSupport className="text-color-one text-2xl lg:text-lg" />
                }
                setting="Support"
                settingText="Mollis nulla in felis vulputate in ut diam."
                navigate={<MdKeyboardArrowRight className="text-xl"/>}
              />
            </div>
            
            <div
              className={`cursor-pointer rounded-common hover:bg-slate-100 duration-150 lg:w-[180px] lg:h-[133px] lg:items-start xl:w-[195px] 2xlg:w-[235px] ${
                activeSetting === "FAQs Setting" ? "bg-color-two" : "bg-light-grey"
              }`}
              onClick={() => handleSettingClick("FAQs Setting")}
            >
                <AccountSettings
                settingIcon={
                    <FaQuestionCircle className="text-color-one text-2xl lg:text-lg" />
                }
                setting="FAQs"
                settingText="Ultricies ut felis sit vitae sed eget erat."
                navigate={<MdKeyboardArrowRight className="text-xl"/>}
                />
            </div>
            <div
              className={`cursor-pointer rounded-common hover:bg-slate-100 duration-150 lg:w-[180px] lg:h-[133px] lg:items-start xl:w-[195px] 2xlg:w-[235px] ${
                activeSetting === "Kyc Setting" ? "bg-color-two" : "bg-light-grey"
              }`}
              onClick={() => handleSettingClick("Kyc Setting")}
            >
                <AccountSettings
                settingIcon={
                    <BsPersonCheck className="text-color-one text-2xl lg:text-lg" />
                }
                setting="KYC"
                settingText="Luctus turpis amet neque ultrices in"
                navigate={<MdKeyboardArrowRight className="text-xl"/>}
                />
            </div>
           
          </div>
          {/* Delete Account Button */}
          <section className="flex bg-light-grey cursor-pointer hover:bg-slate-100 duration-300 p-4 shadow-sm rounded-common w-[167.5px] mt-4" onClick={handleDeleteAccount}>
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
              onVerifyClick={() => handleSettingClick("Verify Email")}
            />
          )}
          {activeSetting === "Verify Email" && (
            <VerifyEmailSetting
              onNavigateToChangePassword={() =>
                handleSettingClick("Change Password")
              }
            />
          )}
          {/* Add additional setting components if necessary */}
          {activeSetting === "Change Password" && <ChangePassword />}
          {activeSetting === "Bank Setting" && (
            <BankSetting
              onNavigatetoCreateNewBank={() => handleSettingClick("New Bank")}
              onNavigatetoDeleteBank={() => setIsDeleteBankOpen(true)}
            />
          )}
          {activeSetting === "New Bank" && <NewBank />}
          {deleteBankOpen && (
            <DeleteBank onClose={() => setIsDeleteBankOpen(false)} />
          )}
          {activeSetting === "Support Setting" && <Support />}
          {activeSetting === "FAQs Setting" && <FAQs />}
          {activeSetting === "Kyc Setting" && (
            <Kyc 
            onNavigatetoValidID={() => handleSettingClick("Valid ID")}
            onNavigatetoNextofKin={() => handleSettingClick("Next of Kin")}
            onNavigatetoBvn={() => handleSettingClick("BVN")}/>
          )}
          {activeSetting === "Valid ID" && <ValidID />}
          {activeSetting === "Next of Kin" && <NextofKin/>}
          {activeSetting === "BVN" && <Bvn/>}
        </div>
      </div>
    </div>
  );
}
