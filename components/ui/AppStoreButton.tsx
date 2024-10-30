//App Store Button
import {FaApple} from "react-icons/fa";

export default function AppStoreButton({textColor = "", backgroundColor = ""}) {
    return (
        <button className={`${backgroundColor} ${textColor} flex items-center justify-center gap-2 rounded-lg p-2`}>
            <FaApple className="text-xl" size={38.76}/>
            <div className="flex flex-col self-start justify-self-start items-start">
                <p className="text-sm lg:text-lg xl:text-xl">Download on the</p>
                <p className="text-sm lg:text-lg xl:text-xl font-semibold">App Store</p>
            </div>   
        </button>
    )
}