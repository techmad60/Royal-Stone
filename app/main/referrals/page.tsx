//import Image from "next/image";
import { BsPeopleFill } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";
import Icon from "@/components/ui/Icon";
import CardComponentFive from "@/components/ui/CardComponentFive";
import Button from "@/components/ui/Button";
import ReferralList from "@/components/Referral/Referrals";
export default function Referrals() {
    return (
        <div>
            <div className="flex flex-col justify-center items-center my-6 gap-4">
                <Icon icon={<BsPeopleFill className="text-color-one text-3xl" />} containerSize="w-[49.5px] h-[49.5px]" iconSize="w-[30px] h-[30px]"/>
                <p className="text-color-zero text-sm text-center font-semibold">Earn N500 on each transaction performed by a friend referred by you</p>
            </div>

            <section className="bg-light-grey rounded-common shadow-sm p-6 space-y-4 my-6">
                <div className="flex justify-between items-center">
                    <p className="font-bold text-[#0F1C39B2] text-sm">KO-124RS1</p>
                    <Button ButtonText="Copy Referral Code" className="rounded-[12px] bg-color-one text-xs font-medium w-[143px] h-[26px] flex items-center"/>
                </div>
                <hr className="bg-[#F2F2F2]"/>
                <CardComponentFive icon={<AiFillDollarCircle />} label="$30.00" number="Your Earnings" classname="text-xs font-normal" textSize="text-base font-semibold" width="w-full"/>
            </section>
           
           <hr />
           <div>
                <p className="text-base font-semibold text-color-zero py-5">Referral List(4)</p>
                <ReferralList/>
           </div>
        </div>
    )
}