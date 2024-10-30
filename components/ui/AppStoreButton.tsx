//App Store Button
import {FaApple} from "react-icons/fa";

export default function AppStoreButton({textColor = "", backgroundColor = ""}) {
    return (
        <button className={`${backgroundColor} ${textColor} flex items-center justify-center gap-2 rounded-[9.69px] p-2 w-[166.69px] h-[62.02px] lg:w-[172px] lg:h-[64px]`}>
            <FaApple className="w-[40px] h-[40px]"/>
            <div className="flex flex-col self-start justify-self-start items-start bg-[rgba(36,34,47,1)]">
                <p className="text-[12.6px] lg:text-[13px]">Download on the</p>
                <p className="text-[15.51px] lg:text-[16px] font-bold">App Store</p>
            </div>   
    </button>
    )
}