"use client"
import { useState } from "react";
import SettingsNavigator from "./SettingsNavigator";
import { MdKeyboardArrowRight } from "react-icons/md";
import Icon from "../ui/Icon";
import { BsPersonCheck } from "react-icons/bs";
import { IoPeople } from "react-icons/io5";
import { BiSolidBank } from "react-icons/bi";
import { FaRegImage } from "react-icons/fa6";
import Button from "../ui/Button";

const kycSteps = [
    { label: "Settings", href: "/main/settings" },
    { label: "KYC", href: "/main/settings" },
];
interface KycProps {
    onNavigatetoValidID: () => void;
    onNavigatetoNextofKin: () => void;
    onNavigatetoBvn: () => void;
}
export default function Kyc ({onNavigatetoValidID, onNavigatetoNextofKin, onNavigatetoBvn}:KycProps) {
    const [showVerified, setShowVerified] = useState(false); 
    return (
        <div>
            <SettingsNavigator currentStep={1} steps={kycSteps}/>
            <h1 className="text-color-zero text-base font-semibold my-4">KYC</h1>
            {showVerified ? (
                <div className="flex flex-col space-y-4">
                    <section className="flex justify-between items-center bg-light-grey p-4 shadow-sm rounded-common cursor-pointer lg:w-[361px] xl:w-[520px]" onClick={onNavigatetoValidID}>
                        <div className="flex gap-4 lg:gap-3">
                            <Icon icon={<BsPersonCheck className="text-color-one text-lg" />} containerSize="w-[39.6px] h-[39.6px] rounded-[14.85px]"/>
                            <div>
                                <p className="text-sm text-color-zero font-medium">Valid Identification</p>
                                <p className="text-xs text-color-form">Not Provided</p>
                            </div>
                        </div>
                        <MdKeyboardArrowRight className= "text-2xl"/>
                    </section>

                    <section className="flex justify-between items-center bg-light-grey p-4 shadow-sm rounded-common cursor-pointer lg:w-[361px] xl:w-[520px]" onClick={onNavigatetoNextofKin}>
                        <div className="flex gap-4 lg:gap-3">
                            <Icon icon={<IoPeople className="text-color-one text-lg" />} containerSize="w-[39.6px] h-[39.6px] rounded-[14.85px]"/>
                            <div>
                                <p className="text-sm text-color-zero font-medium">Next of Kin</p>
                                <p className="text-xs text-color-form">Not Provided</p>
                            </div>
                        </div>
                        <MdKeyboardArrowRight className= "text-2xl"/>
                    </section>

                    <section className="flex justify-between items-center bg-light-grey p-4 shadow-sm rounded-common cursor-pointer lg:w-[361px] xl:w-[520px]">
                        <div className="flex gap-4 lg:gap-3">
                            <Icon icon={<FaRegImage className="text-color-one text-lg" />} containerSize="w-[39.6px] h-[39.6px] rounded-[14.85px]"/>
                            <div>
                                <p className="text-sm text-color-zero font-medium">Profile Picture</p>
                                <p className="text-xs text-color-form">Not Provided</p>
                            </div>
                        </div>
                        <MdKeyboardArrowRight className= "text-2xl"/>
                    </section>
                    <section className="flex justify-between items-center bg-light-grey p-4 shadow-sm rounded-common cursor-pointer lg:w-[361px] xl:w-[520px]" onClick={onNavigatetoBvn}>
                        <div className="flex gap-4 lg:gap-3">
                            <Icon icon={<BiSolidBank className="text-color-one text-lg" />} containerSize="w-[39.6px] h-[39.6px] rounded-[14.85px]"/>
                            <div>
                                <p className="text-sm text-color-zero font-medium">BVN</p>
                                <p className="text-xs text-color-form">Not Provided</p>
                            </div>
                        </div>
                        <MdKeyboardArrowRight className= "text-2xl"/>
                    </section>
                    <div onClick={() => setShowVerified(false)}>
                        <Button ButtonText="With Verification" className="mx-auto" />
                    </div>
                </div>
            ): (
                <div className="flex flex-col space-y-4">
                    <section className="flex justify-between items-center bg-light-grey p-4 shadow-sm rounded-common lg:w-[361px] xl:w-[520px]">
                        <div className="flex gap-4 lg:gap-3">
                            <Icon icon={<BsPersonCheck className="text-color-one text-lg" />} containerSize="w-[39.6px] h-[39.6px] rounded-[14.85px]"/>
                            <div>
                                <p className="text-sm text-color-zero font-medium">Valid Identification</p>
                                <p className="text-xs text-color-one">Provided</p>
                            </div>
                        </div>
                        <MdKeyboardArrowRight className= "text-2xl"/>
                    </section>

                    <section className="flex justify-between items-center bg-light-grey p-4 shadow-sm rounded-common lg:w-[361px] xl:w-[520px]">
                        <div className="flex gap-4 lg:gap-3">
                            <Icon icon={<IoPeople className="text-color-one text-lg" />} containerSize="w-[39.6px] h-[39.6px] rounded-[14.85px]"/>
                            <div>
                                <p className="text-sm text-color-zero font-medium">Next of Kin</p>
                                <p className="text-xs text-color-one">Provided</p>
                            </div>
                        </div>
                        <MdKeyboardArrowRight className= "text-2xl"/>
                    </section>

                    <section className="flex justify-between items-center bg-light-grey p-4 shadow-sm rounded-common lg:w-[361px] xl:w-[520px]">
                        <div className="flex gap-4 lg:gap-3">
                            <Icon icon={<FaRegImage className="text-color-one text-lg" />} containerSize="w-[39.6px] h-[39.6px] rounded-[14.85px]"/>
                            <div>
                                <p className="text-sm text-color-zero font-medium">Profile Picture</p>
                                <p className="text-xs text-color-one">Provided</p>
                            </div>
                        </div>
                        <MdKeyboardArrowRight className= "text-2xl"/>
                    </section>
                    <section className="flex justify-between items-center bg-light-grey p-4 shadow-sm rounded-common lg:w-[361px] xl:w-[520px]">
                        <div className="flex gap-4 lg:gap-3">
                            <Icon icon={<BiSolidBank className="text-color-one text-lg" />} containerSize="w-[39.6px] h-[39.6px] rounded-[14.85px]"/>
                            <div>
                                <p className="text-sm text-color-zero font-medium">BVN</p>
                                <p className="text-xs text-color-one">Provided</p>
                            </div>
                        </div>
                        <MdKeyboardArrowRight className= "text-2xl"/>
                    </section>
                    <div onClick={() => setShowVerified(true)}>
                        <Button ButtonText="Without Verification" className="mx-auto" />
                    </div>
                </div>
            )}
        </div>
    )
}