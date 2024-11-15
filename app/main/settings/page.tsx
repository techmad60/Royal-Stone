"use client";
import { useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { IoPerson, IoPeople } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";
import { TbPencil } from "react-icons/tb";
import { BiSolidBank, BiSupport } from "react-icons/bi";
import { FaQuestionCircle } from "react-icons/fa";
import { BsPersonCheck } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import Image from "next/image";
import AccountSettings from "@/components/Settings/AccountSettings";
import ProfileSettings from "@/components/Settings/ProfileSetting";
import Icon from "@/components/ui/Icon";

export default function SettingsPage() {
  const isDesktop = useMediaQuery("(min-width: 1024px)"); // true if screen width is 1024px or larger
  const [activeSetting, setActiveSetting] = useState<string | null>(null);

  const handleSettingClick = (setting: string) => {
    if (!isDesktop) {
      // On mobile, toggle the selected setting to display only the active component
      setActiveSetting(setting === activeSetting ? null : setting);
    }
  };

  return (
    <div className="">
      {/* Account Settings and Profile Settings */}
        <div className="lg:grid grid-cols-2 gap-4 xl:gap-16">
          <div className={`${
                activeSetting && !isDesktop
                  ? "hidden"
                  : "lg:border-r lg:pr-20"
              }`}>
            <div >
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
                Kolawole Osindeinde
              </p>
              <hr className="my-4" />
            </div>
            <div
              className={`${"space-y-4 lg:grid grid-cols-2 grid-rows-3 lg:mt-4 lg:space-y-0 lg:gap-x-20 lg:gap-y-2 xl:gap-x-8 xl:gap-y-8"
              }`}
            >
              <div onClick={() => handleSettingClick("Profile")}>
                <AccountSettings
                  settingIcon={
                    <IoPerson className="text-color-one text-2xl lg:text-lg" />
                  }
                  setting="Profile settings"
                  settingText="Egestas netus nisi elementum in"
                />
              </div>
              <AccountSettings
                settingIcon={
                  <IoIosLock className="text-color-one text-2xl lg:text-lg" />
                }
                setting="Security settings"
                settingText="Turpis ultrices quis vestibulum gravida"
              />
              <AccountSettings
                settingIcon={
                  <BiSolidBank className="text-color-one text-2xl lg:text-lg" />
                }
                setting="Bank Information"
                settingText="Id at quis sed posuere magna vel"
              />
              <AccountSettings
                settingIcon={
                  <IoPeople className="text-color-one text-2xl lg:text-lg" />
                }
                setting="Referrals"
                settingText="Sit ultricies in lorem cursus. In vitae"
              />
              <AccountSettings
                settingIcon={
                  <BiSupport className="text-color-one text-2xl lg:text-lg" />
                }
                setting="Support"
                settingText="Mollis nulla in felis vulputate in ut diam."
              />
              <AccountSettings
                settingIcon={
                  <FaQuestionCircle className="text-color-one text-2xl lg:text-lg" />
                }
                setting="FAQs"
                settingText="Ultricies ut felis sit vitae sed eget erat."
              />
              <AccountSettings
                settingIcon={
                  <BsPersonCheck className="text-color-one text-2xl lg:text-lg" />
                }
                setting="KYC"
                settingText="Luctus turpis amet neque ultrices in"
              />
            </div>
            {/* Delete Account Button */}
            <section className="flex bg-light-grey p-4 shadow-sm rounded-common w-[167.5px] mt-4">
              <div className="flex items-center gap-2 lg:gap-4">
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
          {/* ProfileSettings Component */}
          {activeSetting === "Profile" || isDesktop ? (
            <div className="">
              <ProfileSettings />
            </div>
          ) : null}
        </div>
      </div>
  );
}
