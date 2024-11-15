import {IoIosLock } from "react-icons/io";
import SettingsNavigator from "./SettingsNavigator";
import Icon from "../ui/Icon";
import { MdKeyboardArrowRight } from "react-icons/md";
import ToggleSwitch from "../ui/ToogleSwitch";

// For Profile Settings
const securitySteps = [
    { label: "Settings", href: "/main/settings" },
    { label: "Security Settings", href: "/main/settings" },
];

export default function SecuritySettings() {
  return (
    <div>
     
        <SettingsNavigator currentStep={1} steps={securitySteps} />
        <h1 className="text-color-zero text-base font-semibold mt-6">
            Security
        </h1>
        <div className="flex flex-col space-y-4 mt-6">
            <section className="flex justify-between items-center bg-light-grey p-4 shadow-sm rounded-common lg:w-[350px] lg:h-[67px] xl:w-[520px]">
                <div className="flex gap-2 lg:gap-3">
                    <Icon icon={<IoIosLock className="text-color-one text-2xl lg:text-lg"/>} containerSize="w-[39.6px] h-[39.6px] rounded-[14.85px]"/>
                    <div>
                        <p className="text-sm text-color-zero font-medium">Change Password</p>
                        <p className="text-xs text-color-form">Egestas netus nisi elementum in</p>
                    </div>
                </div>

                <div>
                    <MdKeyboardArrowRight className="text-xl" />
                </div>
            </section>
            <section className="flex justify-between items-center bg-light-grey p-4 shadow-sm rounded-common lg:w-[350px] lg:h-[67px] xl:w-[520px]">
                <div className="flex gap-2 lg:gap-3">
                    <Icon icon={<p className="flex justify-self-center self-center leading-none text-color-one text-sm">****</p>} containerSize="w-[39.6px] h-[39.6px] rounded-[14.85px]"/>
                    <div>
                        <p className="text-sm text-color-zero font-medium">2FA</p>
                        <p className="text-xs text-color-form">Egestas netus nisi elementum in</p>
                    </div>
                </div>

                <div>
                    <ToggleSwitch/>
                </div>
            </section>
        </div>
        
    </div>
  );
}
