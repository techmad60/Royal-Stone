//Google Play Button
import Image from "next/image";
export default function GooglePlayButton() {
    return (
        <button className="flex items-center gap-2 bg-color-four rounded-lg p-2 text-white">
        <Image 
            src={"/images/google-play-icon.svg"} 
            alt="Google Play Icon" 
            width={38.76} 
            height={38.76}
        />
        <div className="flex flex-col self-start justify-self-start items-start">
            <p className="text-sm">Download on the</p>
            <p className="text-xl font-semibold">Play Store</p>
        </div>   
    </button>
    )
}