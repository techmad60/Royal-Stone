
import AppStoreButton from "./AppStoreButton";
import GooglePlayButton from "./GooglePlayButton";

export default function DownloadApp() {
    return (
        <div className="flex flex-col justify-center w-full h-[191px] items-center bg-color-one text-center rounded-[20px] lg:max-w-4xl xl:max-w-[76rem]">
            <h2 className={`text-white text-[22px] w-[312px] font-extrabold`}>Start putting your money in the right places</h2>
            <div className="flex justify-center items-center gap-2 mt-8">
                <AppStoreButton textColor="text-color-one" backgroundColor="bg-white" width="w-152.19px" height="h-56.63px"  lgWidth="" lgHeight="" />
                <GooglePlayButton textColor="text-color-one" backgroundColor="bg-white" width="w-152.19px" height="h-56.63px"  lgWidth="" lgHeight="" />
            </div>
        </div>
    )
}