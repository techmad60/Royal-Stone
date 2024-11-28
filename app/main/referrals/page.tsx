
import { BsPeopleFill } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";
import Icon from "@/components/ui/Icon";
import CardComponentFive from "@/components/ui/CardComponentFive";
import Button from "@/components/ui/Button";
import ReferralList from "@/components/Referral/Referrals";
import ReferredDesktopList from "@/components/Referral/ReferralDesktop";


export default function Referrals() {
    return (
        <div>
            <div className="lg:flex lg:w-full items-end lg:my-6 lg:gap-12 lg:pr-8">
                <div className="lg:space-y-4 lg:border-r lg:pr-16">
                    <div className="flex flex-col justify-center items-center my-6 gap-4 lg:justify-start lg:items-start lg:my-0">
                        <Icon icon={<BsPeopleFill className="text-color-one text-3xl" />} containerSize="w-[49.5px] h-[49.5px]" iconSize="w-[30px] h-[30px]"/>
                        <p className="text-color-zero text-sm text-center font-semibold lg:text-start ">Earn N500 on each transaction performed by a friend referred by you</p>
                    </div>

                    <section className="bg-light-grey rounded-common shadow-sm p-6 space-y-4 my-6 lg:bg-transparent lg:shadow-none lg:my-0 lg:p-0">
                        <div className="flex justify-between items-center lg:bg-light-grey lg:p-6 lg:shadow-sm lg:rounded-[35px] ">
                            <div>
                                <p className="text-sm text-[#6B7385] hidden lg:flex">Referral code</p>
                                <p className="font-bold text-[#0F1C39B2] text-sm lg:font-semibold lg:text-base">KO-124RS1</p>
                            </div>
                            
                            <Button
                                ResponsiveText={
                                    <>
                                        <span className="hidden lg:inline">Copy Code</span>
                                        <span className="inline lg:hidden">Copy Referral Code</span>
                                    </>
                                }
                                className="rounded-[30px] bg-color-one text-xs font-medium w-[143px] h-[26px] flex items-center lg:w-[132px] lg:h-[40px] lg:rounded-[22px]"
                            />

                        </div>
                        <hr className="bg-[#F2F2F2] lg:hidden"/>
                        {/* Hidden on large screen */}
                        <CardComponentFive icon={<AiFillDollarCircle />} label="$30.00" number="Your Earnings" classname="text-xs font-normal" textSize="text-base font-semibold" width="w-full lg:hidden"/>
                    </section>
                </div>
                
                {/* Displayed on Large Screen */}
                <CardComponentFive icon={<AiFillDollarCircle />} label="$30.00" number="Your Earnings" classname="text-xs font-normal lg:tet-base" textSize="text-base font-semibold lg:text-2xl lg:font-extrabold" width="hidden lg:flex w-[605px]"/>
            </div>
            
           
           <hr />
           <div>
                <p className="text-base font-semibold text-color-zero py-5">Referral List (4)</p>
                <div className="lg:hidden">
                    <ReferralList/>
                </div>
                <div className="hidden lg:grid">
                    <ReferredDesktopList/>
                </div>  
           </div>
        </div>
    )
}