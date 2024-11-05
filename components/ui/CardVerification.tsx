interface CardFiveProps {
    icon: string; // Update icon to ReactNode instead of IconType
    label: string;
    status: string;
    showArrow: string;
    showSwitch: string,
}
import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";
import ToggleSwitch from "./ToogleSwitch";
export default function CardVerification({icon, label, status, showArrow, showSwitch}: CardFiveProps) {
    return (
        <section className="flex justify-between items-center bg-light-grey hover:bg-slate-100 duration-300 cursor-pointer rounded-common p-4 lg:w-[765px]">
            <div className="flex gap-4">
                <div className="flex justify-center items-center">
                    <Image src={icon} alt="icon" width={33} height={33}/>
                </div>
                <div className="flex flex-col">
                    <p className="text-sm font-medium text-color-zero lg:text-base">{label}</p>
                    <p className="text-sm text-color-form">{status}</p>
                </div>
            </div> 
            <div className="flex items-center">
                <MdArrowForwardIos className={`text-color-zero flex-shrink-0 ${showArrow}`}/>
                <ToggleSwitch showSwitch={`${showSwitch}`}/>
            </div>
           
       </section>
    )
}