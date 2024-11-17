"use client"
import SettingsNavigator from "./SettingsNavigator";
import Button from "../ui/Button";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegImage } from "react-icons/fa6";
import NoHistory from "../ui/NoHistory";

const validIdSteps = [
    { label: "Settings", href: "/main/settings" },
    { label: "KYC", href: "/main/settings" },
    { label: "Valid Identification", href: "/main/settings" },
];

export default function ValidID () {
    return (
        <div className="mr-8">
            <SettingsNavigator currentStep={1} steps={validIdSteps}/>
            <h1 className="text-color-zero text-base font-semibold my-4">Valid Identification</h1>
            <div>
                <div className="flex flex-col gap-1">
                    <p className="text-color-form text-sm">ID type</p>
                    <div className="relative border-b border-slate-200">
                        <input
                        type="text"
                        required
                        className="rounded-sm  placeholder:text-color-zero placeholder:text-sm py-1"
                        placeholder="International Passport"
                        />
                        <div className="absolute top-3 right-3">
                            <IoIosArrowDown />
                        </div>
                   </div>
                </div>
              
            </div>
            <section className="mt-8">
                <p className="text-color-form text-sm">Provide a picture of the ID</p>
                <NoHistory icon ={<FaRegImage className="text-color-one"/>} text="Tap to Upload Image" classname="text-color-one"/>
                <hr /> 
            </section>
           
            <Button ButtonText="Finish" className="w-full mt-4"/>
        </div>
    )
}