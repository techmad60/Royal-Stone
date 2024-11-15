import { ReactNode } from "react";
import Icon from "../ui/Icon";
import { MdKeyboardArrowRight } from "react-icons/md";

interface SettingsProps{
    settingIcon: ReactNode
    setting: string,
    settingText: string,
}

export default function AccountSettings ({settingIcon, setting, settingText}:SettingsProps) {
    return (
        <section className="flex justify-between items-center bg-light-grey p-4 shadow-sm rounded-common lg:w-[200px] lg:h-[133px] lg:items-start">
            <div className="flex gap-2 lg:gap-3 lg:flex-col">
                <Icon icon={settingIcon} containerSize="w-[39.6px] h-[39.6px] rounded-[14.85px]"/>
                <div>
                    <p className="text-sm text-color-zero font-medium">{setting}</p>
                    <p className="text-xs text-color-form">{settingText}</p>
                </div>
            </div>

            <div>
                <MdKeyboardArrowRight className="text-xl" />
            </div>
        </section>
    )
}