
import { useEffect } from "react";
import Icon from "../ui/Icon";
import Button from "@/components/ui/Button";
import StatRow from "../ui/StatRow";

interface MyComponentProps {
  onClose: () => void;
  onProceed: () => void;
}

export default function MakeInvestment({
  onClose,
  onProceed,
}: MyComponentProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 flex bg-[#D9D9D9A6] items-end lg:items-center justify-end lg:justify-center  z-50">
      <div className="bg-white flex flex-col rounded-[20px] h-[599px] w-full lg:max-w-[621px] lg:h-[484px]">
        <div className="flex justify-center items-center mt-4 lg:hidden">
          <hr className="w-[51px] h-[5px] rounded-[40px] bg-[#D9D9D9]" />
        </div>
        <div className="flex items-center border-b w-full pb-2 p-4">
          <p
            onClick={onClose}
            className="text-color-form text-sm cursor-pointer"
          >
            Cancel
          </p>
          <p className="text-color-zero font-semibold text-lg mx-auto relative right-4">
            Make Investment
          </p>
        </div>
        <p className="text-color-form text-sm mx-4 py-4">
          You are required to make a bank transfer of N200,000 to the details
          provided within an hour to proceed with your investment payment
        </p>
        <section className="flex flex-col justify-center items-center rounded-[10px] h-[91px] space-y-4 shadow-sm mx-4 text-sm  lg:p-5 lg:w-[572px] lg:h-[167px]">
          <p className="text-color-form">Timer</p>
          <div className="flex justify-center items-center space-x-4">
            <Icon icon={<p className="text-sm font-medium text-color-six">5</p>}/>
            <Icon icon={<p className="text-sm font-medium text-color-six">1</p>}/>
            <Icon icon={<p className="text-sm font-medium text-color-six">:</p>}/>
            <Icon icon={<p className="text-sm font-medium text-color-six">1</p>}/>
            <Icon icon={<p className="text-sm font-medium text-color-six">9</p>}/>
          </div>
        </section>
        <section className="flex flex-col mt-4 bg-light-grey mx-6 rounded-[10px] px-4 shadow-sm">
            <StatRow label="Amount" value="N20,000.00" valueClass="text-color-six text-sm" />
            <StatRow label="Bank Name" value="Wema Bank" valueClass="text-color-six text-sm" />
            <StatRow label="Account Number" value="3102991190" valueClass="text-color-six text-sm" />
            <StatRow label="Account Name" value="Admin Checkout-Royal" valueClass="text-color-six text-sm" isLast={true}/>
            </section>
        <div onClick={onProceed} className="mt-8 mx-6">
          <Button ButtonText="Proceed" className="bg-color-one w-full" />
        </div>
      </div>
    </div>
  );
}
