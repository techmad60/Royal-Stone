import { TbTargetArrow } from "react-icons/tb";
import { BsFileBarGraphFill } from "react-icons/bs";
import CardComponentFive from "@/components/ui/CardComponentFive";
import CardVerification from "@/components/ui/CardVerification";


export default function Dashboard() {
  return (
    <div className="flex flex-col space-y-4 lg:pr-8">
      <p className="text-lg text-color-form py-4">Welcome, Kolawole! 👋🏻 </p>
      <div className="flex gap-4 pb-3">
        <CardComponentFive icon={<TbTargetArrow className="text-sm lg:text-base"/>} label="Total Savings Target" number={0}/>
        <CardComponentFive icon={<BsFileBarGraphFill className="text-sm lg:text-base"/>} label="Total Investments Made" number={0}/>
      </div>

      <div className="border-t flex-col space-y-4 py-6">
        <CardVerification icon="/images/bank.svg" label="Bank Information" status="Not Set" showArrow="flex" showSwitch="hidden"/>
        <CardVerification icon="/images/kyc.svg" label="KYC" status="Not Set" showArrow="flex" showSwitch="hidden"/>
        <CardVerification icon="/images/kin.svg" label="Next of Kin" status="Not Set" showArrow="flex" showSwitch="hidden"/>
        <CardVerification icon="/images/biometrics.svg" label="Enable Biometrics" status="Not Set" showArrow="hidden" showSwitch="flex"/>
      </div>
     
    </div>

  );
}
