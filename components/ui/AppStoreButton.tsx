//App Store Button
import {FaApple} from "react-icons/fa";

export default function AppStoreButton() {
    return (
        <button className="flex items-center gap-2 bg-color-four rounded-lg p-2 text-white">
            <FaApple className="text-xl" size={38.76}/>
            <div className="flex flex-col self-start justify-self-start items-start">
                <p className="text-sm">Download on the</p>
                <p className="text-xl font-semibold">App Store</p>
            </div>   
        </button>
    )
}