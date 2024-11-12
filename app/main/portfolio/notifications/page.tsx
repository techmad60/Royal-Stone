import { FaBell } from "react-icons/fa";
import PortfolioNavigator from "@/components/Portolio/PortfolioNavigator"
export default function Navigation () {
    return (
        <div>
            <PortfolioNavigator currentStep={1}/>
            <p className="font-semibold text-base my-4">Notifications</p>
            <div className="flex flex-col justify-center items-center space-y-4 my-8 py-6 shadow-sm bg-light-grey rounded-common w-full pr-8">
        <div
          className={`w-7 h-7 shadow-sm flex items-center justify-center transform rotate-45 rounded-[9px] bg-white"
          }`}
        >
          <span className="text-color-one transform -rotate-45"><FaBell /> {/* Counter-rotate icon */}</span>
        </div>
        <p className="text-sm text-color-form">You have no notifications</p>
      </div>
        </div>
    )
}