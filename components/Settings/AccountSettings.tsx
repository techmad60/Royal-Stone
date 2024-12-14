import { ReactNode } from "react";
import Icon from "../ui/Icon";

interface SettingsProps{
    settingIcon: ReactNode
    setting: string,
    settingText: string,
    navigate?: ReactNode,
}

export default function AccountSettings ({settingIcon, setting, settingText, navigate}:SettingsProps) {
    return (
        <section className="flex justify-between items-center bg-transparent p-4 shadow-sm rounded-common lg:w-[180px] lg:h-[133px] lg:items-start xl:w-[195px] 2xlg:w-[235px]">
            <div className="flex gap-2 lg:gap-3 lg:flex-col">
                <Icon icon={settingIcon} containerSize="w-[39.6px] h-[39.6px] rounded-[14.85px]"/>
                <div>
                    <p className="text-sm text-color-zero font-medium">{setting}</p>
                    <p className="text-xs text-color-form">{settingText}</p>
                </div>
            </div>

            <div>
                {navigate}
            </div>
        </section>
    )
}