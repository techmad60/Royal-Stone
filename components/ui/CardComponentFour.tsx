import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";

export default function CardComponentFour({ icon = "", text = "", className = "" }) {
    return (
        <div
            className={`flex items-start p-4 justify-start bg-[#FCFCFC] hover:bg-slate-100 duration-300 h-[110px] rounded-common border border-slate-100 lg:justify-between ${className}`}
        >
            <section className="flex flex-col items-start">
                <Image 
                    className="flex-shrink-0"
                    src={icon}
                    alt={`${text} Icon`}
                    width={30}
                    height={30}
                />
                <p className="font-medium text-color-zero text-sm">Continue with {text}</p>
            </section>
            <MdArrowForwardIos className="text-slate-500 flex-shrink-0" />
        </div>
    );
}
