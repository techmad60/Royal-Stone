import InvestmentNavigator from "@/components/Investments/InvestmentNavigator";
import { TbTargetArrow } from "react-icons/tb";
import Icon from "@/components/ui/Icon";
import StatRow from "@/components/ui/StatRow";
import Button from "@/components/ui/Button";
const annualSavings = [
  { label: "Fixed Savings", href: "/main/savings" },
  { label: "Annual Rent Savings", href: "/main/savings/annual-savings" },
];

export default function AnnualSavings() {
  return (
    <div className="lg:flex lg:gap-10 xl:gap-36">
      <div>
        <InvestmentNavigator currentStep={1} steps={annualSavings} />
        <div className="flex gap-4 items-center mt-8">
            <Icon
            icon={<TbTargetArrow className="text-color-one text-2xl" />}
            containerSize="w-[41.1px] h-[41.1px]"
            />
            <div>
            <p className="text-base text-color-zero font-semibold">
                Annual Rent Savings
            </p>
            <p className="text-color-one text-xs">ONGOING</p>
            </div>
        </div>
        <div className="bg-light-grey shadow-sm p-6 rounded-common h-[73px] mt-4 lg:w-[350px] xl:w-[500px]">
            <div className="bg-white shadow-sm h-[15px] rounded-[20px] relative">
            <div className="bg-color-two h-[5px] rounded-[30px] my-auto absolute inset-0 mx-1">
                <div className="bg-color-one h-[5px] rounded-[30px] w-[150px]"></div>
            </div>
            </div>
            <p className="text-color-one text-sm mt-2">$120 saved out of $370</p>
        </div>
        <hr className="my-4"/>
        <section className="flex gap-12 bg-light-grey shadow-sm rounded-[10px] p-4">
            <div className="flex flex-col gap-6">
                <div>
                    <p className="text-base font-semibold text-color-zero">
                    $120
                    </p>
                    <p className="text-xs text-[rgba(15,28,57,0.7)]">
                    Total Saved
                    </p>
                </div>
                <div>
                    <p className="text-base font-semibold text-color-zero">35%</p>
                    <p className="text-xs text-[rgba(15,28,57,0.7)]">Progress Percentage</p>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <div>
                    <p className="text-base font-semibold text-color-zero">
                    $250
                    </p>
                    <p className="text-xs text-[rgba(15,28,57,0.7)]">
                    Amount Left
                    </p>
                </div>
                <div>
                    <p className="text-base font-semibold text-color-zero">12</p>
                    <p className="text-xs text-[rgba(15,28,57,0.7)]">Payments Completed</p>
                </div>
            </div>
        </section>
      </div>
      
      <div>
        <section className="flex flex-col mt-4 bg-light-grey rounded-[10px] px-4 shadow-sm lg:w-[350px] xl:w-[471px]">
                <StatRow label="Duration Type" value="Weekly" valueClass="text-color-six text-sm" />
                <StatRow label="Next Payout Date" value="21/9/2024" valueClass="text-color-six text-sm" isLast={true}/>
        </section>
        <Button ButtonText="Make Payment" className="w-full py-3 mt-5"/>
      </div>
     
    </div>
  );
}
