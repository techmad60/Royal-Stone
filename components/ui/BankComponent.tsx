
import Icon from "./Icon";
import CircleToggle from "./CircleToggle";
import { ReactNode } from "react";

interface bankProps{
    bankName: string;
    bankImage: ReactNode;
    style?: string;
    accNumber?: number;
    accName?: string;
    flexStyling?: string,

}
export default function BankComponent ({bankName, bankImage, accNumber, accName, flexStyling, style}:bankProps) {
    return (
        <section className={`bg-light-grey rounded-[20px] shadow-sm flex items-start justify-between w-[168px] h-[86px] p-3 ${style}`}>
            <div className="">
                <div className={`space-y-2 ${flexStyling}`}>
                    <Icon icon={bankImage} containerSize="w-[24px] h-[24px]"/>
                    <p className="text-color-zero text-sm font-medium">{bankName}</p>
                </div>
                <div className="space-y-2 mt-2">
                    <p className="text-xs text-color-form">{accNumber}</p>
                    <p className="text-xs text-color-form">{accName}</p>
                </div>
            </div>
            
            <div>
                <CircleToggle />
            </div>
        </section>
    )
}   