import { poppins } from "@/app/fonts/fonts";
import AppStoreButton from "./AppStoreButton";
import GooglePlayButton from "./GooglePlayButton";

export default function DownloadApp() {
    return (
        <div className="flex flex-col justify-center items-center bg-green-700 text-center w-[350px] h-[350px] p-4 rounded-lg sm:w-[450px] sm:p-6 md:w-[550px] md:p-8 lg:w-[850px] lg:p-10 xl:w-[1000px] xl:p-12">
            <h2 className={`text-white text-xl font-bold px-6 lg:text-4xl lg:px-12 ${poppins.className}`}>Start putting your money in the right places</h2>
            <div className="flex flex-col justify-center items-center gap-4 mt-16 sm:flex-row">
                <AppStoreButton textColor="text-green-700" backgroundColor="bg-white" />
                <GooglePlayButton textColor="text-green-700" backgroundColor="bg-white" />
            </div>
        </div>
    )
}