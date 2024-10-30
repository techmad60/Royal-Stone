//Google Play Button
import Image from "next/image";
export default function GooglePlayButton({textColor = "", backgroundColor = ""}) {
    return (
        <button className={`${backgroundColor} ${textColor} flex items-center justify-center gap-2 rounded-[9.69px] p-2 w-[166.69px] h-[62.02px] lg:w-[172px] lg:h-[64px]`}>
            <Image 
                src={"/images/google-play-icon.svg"} 
                alt="Google Play Icon" 
                width={38.76} 
                height={38.76}
                className="w-[40px] h-[40px]"
            />
            <div className="flex flex-col self-start justify-self-start items-start bg-[rgba(36,34,47,1)]">
                <p className="text-[12.6px]">Get it on</p>
                <p className="text-[15.51px] font-bold">Google Play</p>
            </div>   
        </button>
    )
}