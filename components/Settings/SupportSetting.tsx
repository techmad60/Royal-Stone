import SettingsNavigator from "./SettingsNavigator";
import { IoIosMail } from "react-icons/io";
import { FaWhatsappSquare } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import Icon from "../ui/Icon";

const supportSteps = [
    { label: "Settings", href: "/main/settings" },
    { label: "Support", href: "/main/settings" },
];

// 
export default function Support () {
    return (
        <div>
            <SettingsNavigator currentStep={1} steps={supportSteps}/>
            <h1 className="text-color-zero text-base font-semibold my-4">Support</h1>
            <div className="flex flex-col space-y-4">
                <section className="flex justify-between items-center bg-light-grey p-4 shadow-sm rounded-common lg:w-[361px] xl:w-[520px]">
                    <div className="flex gap-4 lg:gap-3">
                        <Icon icon={<FaWhatsappSquare className="text-color-one text-lg" />} containerSize="w-[39.6px] h-[39.6px] rounded-[14.85px]"/>
                        <div>
                            <p className="text-sm text-color-zero font-medium">Chat with us on whatsapp</p>
                            <p className="text-xs text-color-form">09010201223</p>
                        </div>
                    </div>
                </section>
                <section className="flex justify-between items-center bg-light-grey p-4 shadow-sm rounded-common lg:w-[361px] xl:w-[520px]">
                    <div className="flex gap-4 lg:gap-3">
                        <Icon icon={<BsFillTelephoneFill className="text-color-one text-lg" />} containerSize="w-[39.6px] h-[39.6px] rounded-[14.85px]"/>
                        <div>
                            <p className="text-sm text-color-zero font-medium">Call an Agent</p>
                            <p className="text-xs text-color-form">09010201223</p>
                        </div>
                    </div>
                </section>
                <section className="flex justify-between items-center bg-light-grey p-4 shadow-sm rounded-common lg:w-[361px] xl:w-[520px]">
                    <div className="flex gap-4 lg:gap-3">
                        <Icon icon={<IoIosMail className="text-color-one text-lg" />} containerSize="w-[39.6px] h-[39.6px] rounded-[14.85px]"/>
                        <div>
                            <p className="text-sm text-color-zero font-medium">Send a Mail</p>
                            <p className="text-xs text-color-form">Support@royalstone.com</p>
                        </div>
                    </div>
                </section>
            </div>
            
        </div>
    )
}