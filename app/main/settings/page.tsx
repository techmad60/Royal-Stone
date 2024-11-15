import { IoPerson } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";
import Image from "next/image";
import { TbPencil } from "react-icons/tb";
import { BiSolidBank } from "react-icons/bi";
import { IoPeople } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import AccountSettings from "@/components/Settings/AccountSettings";
import { FaQuestionCircle } from "react-icons/fa";
import { BsPersonCheck } from "react-icons/bs";
import Icon from "@/components/ui/Icon";
import { RiDeleteBin6Line } from "react-icons/ri";
export default function SettingsPage() {
  return (
    <div>
        <div>
            <div className="relative flex justify-start mt-8">
                <div className="transform rotate-45 w-10 h-10 rounded-[16.66px]">
                    <Image
                    src="/images/user-2.svg"
                    height={40}
                    width={40}
                    alt="User Image"
                    className="transform -rotate-45 "
                    />
                </div>
                
                <div className="absolute inset-y-0 bg bg-[rgba(0,0,0,0.2)] w-10 h-10 flex justify-center items-center transform rotate-45 rounded-[16.66px]">
                    <TbPencil className="text-white transform -rotate-45"/>
                </div>
            </div>
            <p className="text-color-zero text-sm font-medium mt-4">Kolawole Osindeinde</p>
        </div>
        <hr className="my-4"/>

        <div className=" flex flex-col space-y-4">
            <AccountSettings settingIcon={<IoPerson className="text-color-one text-2xl"/>} setting="Profile settings" settingText="Egestas netus nisi elementum in"/>
            <AccountSettings settingIcon={<IoIosLock className="text-color-one text-2xl"/>} setting="Security settings" settingText="Turpis ultrices quis vestibulum gravida"/>
            <AccountSettings settingIcon={<BiSolidBank className="text-color-one text-2xl"/>} setting="Bank Information" settingText="Id at quis sed posuere magna vel"/>
            <AccountSettings settingIcon={<IoPeople className="text-color-one text-2xl"/>} setting="Referrals" settingText="Sit ultricies in lorem cursus. In vitae"/>
            <AccountSettings settingIcon={<BiSupport className="text-color-one text-2xl"/>} setting="Support" settingText="Mollis nulla in felis vulputate in ut diam."/>
            <AccountSettings settingIcon={<FaQuestionCircle className="text-color-one text-2xl"/>} setting="FAQs" settingText="Ultricies ut felis sit vitae sed eget erat."/>
            <AccountSettings settingIcon={<BsPersonCheck className="text-color-one text-2xl"/>} setting="KYC" settingText="Luctus turpis amet neque ultrices in"/>
            <section className="flex bg-light-grey p-4 shadow-sm rounded-common w-[167.5px]">
                <div className="flex items-center gap-2 lg:gap-4">
                    <Icon icon={<RiDeleteBin6Line className="text-sm text-red-500"/>} containerSize="w-[24px] h-[24px] rounded-[9px]"/>
                    <div>
                        <p className="text-sm text-color-zero tracking-tight">Delete Account</p>
                    </div>
                </div>
        </section>
        </div>
    </div>
  );
}
