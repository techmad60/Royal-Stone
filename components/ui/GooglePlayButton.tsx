//Google Play Button
import Image from "next/image";
export default function GooglePlayButton({textColor = "", backgroundColor = ""}) {
    return (
        <button className={`${backgroundColor} ${textColor} flex items-center justify-center gap-2 rounded-lg p-2`}>
            <Image 
                src={"/images/google-play-icon.svg"} 
                alt="Google Play Icon" 
                width={38.76} 
                height={38.76}
            />
            <div className="flex flex-col self-start justify-self-start items-start">
                <p className="text-sm lg:text-lg xl:text-xl">Download on the</p>
                <p className="text-sm lg:text-lg xl:text-xl font-semibold">Play Store</p>
            </div>   
        </button>
    )
}