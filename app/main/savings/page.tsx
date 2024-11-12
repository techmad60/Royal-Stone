import Image from "next/image";
import { TbTargetArrow } from "react-icons/tb";
import { IoIosSend } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import CardComponentFive from "@/components/ui/CardComponentFive";
import Icon from "@/components/ui/Icon";

export default function Stocks() {
  return (
    <div className="flex flex-col pb-4 lg:mr-8">
      <div className="xl:flex items-end xl:my-4">
        <div className="flex gap-4 mt-4 xl:mt-0">
          <CardComponentFive icon={<Image src="/images/empty-wallet.svg" height={14} width={14} alt="Empty Wallet Icon"/>} label="Total Savings Target" number={`$0.00`} classname="text-base font-semibold lg:font-extrabold lg:text-[32px]" width="lg:w-[378px] xl:w-[355px]"/>
          <CardComponentFive icon={<Image src="/images/ledger.svg" height={14} width={14} alt="Ledger Icon"/>} label="Total Investments Made" number={`$0.00`} classname="text-base font-semibold lg:font-extrabold lg:text-[32px]" width="lg:w-[378px] xl:w-[355px]"/>
        </div>

        <section className={`flex bg-light-grey shadow-sm rounded-common p-4 my-4 justify-between lg:w-[382px] lg:mx-auto xl:my-0 xl:w-fit xl:gap-4 xl:h-[103px] xl:justify-center xl:items-center`}>
          <div className="flex items-center text-color-one gap-2 xl:flex-col">
            <Icon icon={<IoIosSend/>}/> 
            <p className="text-xs whitespace-nowrap">Withdraw</p>
          </div>

          <div className="flex items-center text-color-one gap-2 xl:flex-col">
            <Icon icon={<TbTargetArrow/>}/>
            <p className="text-xs whitespace-nowrap">Create Savings</p>
          </div>

          <div className="flex items-center text-color-one gap-2 xl:flex-col">
            <Icon icon={<GoPlus/>}/>
            <p className="text-xs whitespace-nowrap">Fund Wallet</p>
          </div>
        </section>
      </div>
      

      <hr className=""/>

      <div className="flex flex-col items-center justify-center space-y-2 bg-light-grey rounded-common h-[92px] shadow-sm my-4">
        <Icon icon={<TbTargetArrow className="text-color-one"/>}/>
        <p className="text-sm text-[#0F1C39B2]">No Savings Target History</p>
      </div>
      
       
    </div>
    

  );
}
