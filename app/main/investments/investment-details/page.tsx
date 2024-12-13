import Navigator from "@/components/ui/Navigator";
import Image from "next/image";
import Icon from "@/components/ui/Icon";
// For Profile Settings
const detailsSteps = [
    { label: "Investments", href: "/main/investments" },
    { label: "Pharetra diam vitae duis vash aliquet", href: "/main/investments/investment-details" },
  ];
export default function InvestmentDetails () {
    return (
        <div>
            <Navigator currentStep={1} steps={detailsSteps}/>
            <div className="flex justify-between lg:mr-8">
                <div className="flex flex-col py-2 space-y-2">
                    <p className="text-base font-medium text-color-zero">Pharetra diam vitae duis vash aliquet</p>
                    <p className="text-color-one text-sm">ONGOING</p>
                </div>
                <section className="hidden lg:flex gap-4 items-center justify-between bg-light-grey p-4 rounded-[10px] shadow-sm">
                    <div className="flex items-center justify-cente gap-2">
                        <Icon icon={<p className="text-sm text-color-six">52</p>} containerSize="w-[28.3px] h-[28.3px]"/>
                        <p className="text-color-six text-sm">Days</p>
                    </div>
                    <div className="flex items-center justify-cente gap-2">
                        <Icon icon={<p className="text-sm text-color-six">17</p>} containerSize="w-[28.3px] h-[28.3px]"/>
                        <p className="text-color-six text-sm">Hrs</p>
                    </div>
                
                    <div className="flex items-center justify-cente gap-2">
                        <Icon icon={<p className="text-sm text-color-six">59</p>} containerSize="w-[28.3px] h-[28.3px]"/>
                        <p className="text-color-six text-sm">Mins</p>
                    </div>
                    <div className="flex items-center justify-cente gap-2">
                        <Icon icon={<p className="text-sm text-color-six">59</p>} containerSize="w-[28.3px] h-[28.3px]"/>
                        <p className="text-color-six text-sm">Secs</p>
                    </div>
                </section>
            </div>
            
            
            <div className="overflow-x-scroll hide-scrollbar flex gap-2 my-4">
                <Image src="/images/potato-2.svg" width={110} height={111} alt="potatoes" className="flex-shrink-0 lg:w-[231px] lg:h-[148px] lg:bg-lime-500 lg:rounded-xl"/>
                <Image src="/images/potato-2.svg" width={110} height={111} alt="potatoes" className="flex-shrink-0 lg:w-[231px] lg:h-[148px] lg:bg-lime-500 lg:rounded-xl"/>
                <Image src="/images/potato-2.svg" width={110} height={111} alt="potatoes" className="flex-shrink-0 lg:w-[231px] lg:h-[148px] lg:bg-lime-500 lg:rounded-xl"/>
                <Image src="/images/potato-2.svg" width={110} height={111} alt="potatoes" className="flex-shrink-0 lg:w-[231px] lg:h-[148px] lg:bg-lime-500 lg:rounded-xl"/>
                <Image src="/images/potato-2.svg" width={110} height={111} alt="potatoes" className="flex-shrink-0 lg:w-[231px] lg:h-[148px] lg:bg-lime-500 lg:rounded-xl"/>
                <Image src="/images/potato-2.svg" width={110} height={111} alt="potatoes" className="flex-shrink-0 lg:w-[231px] lg:h-[148px] lg:bg-lime-500 lg:rounded-xl"/>
            </div>

            <section className="flex gap-4 items-center justify-between bg-light-grey p-4 rounded-[10px] shadow-sm lg:hidden">
                <div className="flex items-center justify-cente gap-2">
                    <Icon icon={<p className="text-sm text-color-six">52</p>} containerSize="w-[28.3px] h-[28.3px]"/>
                    <p className="text-color-six text-sm">Days</p>
                </div>
                <div className="flex items-center justify-cente gap-2">
                    <Icon icon={<p className="text-sm text-color-six">17</p>} containerSize="w-[28.3px] h-[28.3px]"/>
                    <p className="text-color-six text-sm">Hrs</p>
                </div>
               
                <div className="flex items-center justify-cente gap-2">
                    <Icon icon={<p className="text-sm text-color-six">59</p>} containerSize="w-[28.3px] h-[28.3px]"/>
                    <p className="text-color-six text-sm">Mins</p>
                </div>
                <div className="flex items-center justify-cente gap-2">
                    <Icon icon={<p className="text-sm text-color-six">59</p>} containerSize="w-[28.3px] h-[28.3px]"/>
                    <p className="text-color-six text-sm">Secs</p>
                </div>
            </section>
            <hr className="my-4"/>
            <div className="lg:flex lg:gap-8">
                <section className="flex gap-12  bg-light-grey shadow-sm rounded-[10px] p-6 lg:gap-20 lg:w-[372px] xl:w-[572px]">
                    <div className="flex flex-col gap-6">
                        <div>
                            <p className="text-base font-semibold">$210</p>
                            <p className="text-xs">Amount Invested</p>
                        </div>
                        <div>
                            <p className="text-base font-semibold">$10</p>
                            <p className="text-xs"> Price Per Slot</p>
                        </div>
                        <div>
                            <p className="text-base font-semibold">$63</p>
                            <p className="text-xs">Total Returns</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div>
                            <p className="text-base font-semibold">21</p>
                            <p className="text-xs">Slots Purchased</p>
                        </div>
                        <div>
                            <p className="text-base font-semibold">30%</p>
                            <p className="text-xs"> Expected ROI</p>
                        </div>
                    </div>
                </section>
                <section className="p-6 bg-light-grey shadow-sm mt-4 space-y-4 flex flex-col justify-center lg:mt-0 lg:w-[340px] lg:h-[98px] xl:w-[522px]">
                    <div className="flex justify-between items-center">
                        <p className="text-sm text-color-form">Date Purchased</p>
                        <p className="text-sm text-color-six">21/5/2024</p>
                    </div>
                    <hr />
                    <div className="flex justify-between items-center">
                        <p className="text-sm text-color-form">Maturity Date</p>
                        <p className="text-sm text-color-six">21/5/2025</p>
                    </div>
                </section>
            </div>
            
        </div>
    )
}