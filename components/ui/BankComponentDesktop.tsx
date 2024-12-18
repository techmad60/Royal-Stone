import Icon from "./Icon";
import { ReactNode } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";

interface BankComponent {
    bankImage? : ReactNode;
    bankName: string;
    accountNum?: number | string;
    accountName?: string;
    showIcon?: boolean; // Flag to control Icon visibility
    onNavigatetoDeleteBank?: () => void;

}
export default function BankComponentDesktop ({bankImage, bankName, accountNum, accountName, onNavigatetoDeleteBank, showIcon = true,}:BankComponent) {
    return (
        <section className="grid grid-cols-5 px-3 py-5">
            <div className="flex gap-2">
                {showIcon && (
                    <Icon icon={bankImage}/>
                )}
                <p className="text-sm text-color-zero">{bankName}</p>
            </div>
            <p className="text-sm col-span-2">{accountNum}</p>
            <div className="flex justify-between col-span-2">
                <p className="text-sm text-color-zero">{accountName}</p>
                <RiDeleteBin5Fill className="text-red-500 cursor-pointer" onClick={onNavigatetoDeleteBank}/>
            </div>  
        </section>
    )
}   