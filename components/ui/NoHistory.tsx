import { ReactNode } from "react";


interface NoHistoryProps {
    icon?: ReactNode;
    text?: string;
    classname? : string;
    width?: string;
}
export default function NoHistory ({icon, text, classname, width}: NoHistoryProps) {
    return (
        <div className={`flex flex-col justify-center items-center space-y-4 my-8 py-6 shadow-sm bg-light-grey rounded-common w-full pr-8 ${width}`}>
            <div
            className={`w-7 h-7 shadow-sm flex items-center justify-center transform rotate-45 rounded-[9px] bg-white"
            }`}
            >
                <span className="text-color-one transform -rotate-45">{icon}</span>
            </div>
            <p className={`text-sm text-color-form ${classname}`}>{text}</p>
        </div>
    )
}
