import Image from "next/image";
import Icon from "./Icon";
import CircleToggle from "./CircleToggle";
import { ReactNode } from "react";

interface bankProps{
    bankName: string;
    bankImage: ReactNode;
    style?: string;
}
export default function BankComponent ({bankName, bankImage, style}:bankProps) {
    return (
        <section className={`bg-light-grey rounded-[20px] shadow-sm flex items-start justify-between w-[168px] h-[86px] p-4 ${style}`}>
            <div className="space-y-2">
                <Icon icon={bankImage} containerSize="w-[24px] h-[24px]"/>
                <p className="text-color-zero text-sm font-medium">{bankName}</p>
            </div>
            <div>
                <CircleToggle />
            </div>
        </section>
    )
}   