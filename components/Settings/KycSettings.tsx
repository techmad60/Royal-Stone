import SettingsNavigator from "./SettingsNavigator";
import { MdKeyboardArrowRight } from "react-icons/md";
import Icon from "../ui/Icon";
import { BsPersonCheck } from "react-icons/bs";
import { IoPeople } from "react-icons/io5";
import { BiSolidBank } from "react-icons/bi";
import { FaRegImage } from "react-icons/fa6";

const kycSteps = [
    { label: "Settings", href: "/main/settings" },
    { label: "kyc", href: "/main/settings" },
];

// 
export default function Kyc () {
    return (
        <div>
            <SettingsNavigator currentStep={1} steps={kycSteps}/>
            <h1 className="text-color-zero text-base font-semibold my-4">KYC</h1>
            <div className="flex flex-col space-y-4">
                <section className="flex justify-between items-center bg-light-grey p-4 shadow-sm rounded-common lg:w-[361px] xl:w-[520px]">
                    <div className="flex gap-4 lg:gap-3">
                        <Icon icon={<BsPersonCheck className="text-color-one text-lg" />} containerSize="w-[39.6px] h-[39.6px] rounded-[14.85px]"/>
                        <div>
                            <p className="text-sm text-color-zero font-medium">Valid Identification</p>
                            <p className="text-xs text-color-form">Not Provided</p>
                        </div>
                    </div>
                    <MdKeyboardArrowRight className= "text-2xl"/>
                </section>

                <section className="flex justify-between items-center bg-light-grey p-4 shadow-sm rounded-common lg:w-[361px] xl:w-[520px]">
                    <div className="flex gap-4 lg:gap-3">
                        <Icon icon={<IoPeople className="text-color-one text-lg" />} containerSize="w-[39.6px] h-[39.6px] rounded-[14.85px]"/>
                        <div>
                            <p className="text-sm text-color-zero font-medium">Next of Kin</p>
                            <p className="text-xs text-color-form">Not Provided</p>
                        </div>
                    </div>
                    <MdKeyboardArrowRight className= "text-2xl"/>
                </section>

                <section className="flex justify-between items-center bg-light-grey p-4 shadow-sm rounded-common lg:w-[361px] xl:w-[520px]">
                    <div className="flex gap-4 lg:gap-3">
                        <Icon icon={<FaRegImage className="text-color-one text-lg" />} containerSize="w-[39.6px] h-[39.6px] rounded-[14.85px]"/>
                        <div>
                            <p className="text-sm text-color-zero font-medium">Profile Picture</p>
                            <p className="text-xs text-color-form">Not Provided</p>
                        </div>
                    </div>
                    <MdKeyboardArrowRight className= "text-2xl"/>
                </section>
                <section className="flex justify-between items-center bg-light-grey p-4 shadow-sm rounded-common lg:w-[361px] xl:w-[520px]">
                    <div className="flex gap-4 lg:gap-3">
                        <Icon icon={<BiSolidBank className="text-color-one text-lg" />} containerSize="w-[39.6px] h-[39.6px] rounded-[14.85px]"/>
                        <div>
                            <p className="text-sm text-color-zero font-medium">BVN</p>
                            <p className="text-xs text-color-form">Not Provided</p>
                        </div>
                    </div>
                    <MdKeyboardArrowRight className= "text-2xl"/>
                </section>
            </div>
            
        </div>
    )
}