import { useEffect } from "react";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { LiaTimesSolid } from "react-icons/lia";
interface InvestmentProcessedProps {
  onClose: () => void;
  onConfirm: () => void;
}

export default function InvestmentProcessed({ onClose , onConfirm}: InvestmentProcessedProps) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 flex bg-[#D9D9D9A6] bg-opacity-50 z-50 items-end justify-center lg:items-start lg:justify-end lg:bg-transparent">
      <div className="bg-color-one flex flex-col space-y-4 w-full max-w-md p-4 lg:mt-20 lg:rounded-2xl lg:mr-8">
        {/* Modal Header */}
        <div className="flex justify-between items-center relative">
          <div className="absolute -bottom-1">
            <Image src="/images/process-trade.svg" alt="Process Trade logo" width={57} height={57} />
          </div>
          <button onClick={onClose} className="ml-auto">
            <LiaTimesSolid className="text-[rgba(255,255,255,1)]"/>
          </button>
        </div>
         <p className="text-sm font-medium text-[rgba(255,255,255,1)]">Your Investment has been created successfully</p>   
        <div onClick={onConfirm} className="text-center flex justify-center items-center bg-[rgba(255,255,255,0.1)] rounded-[8px] border border-[rgba(255,255,255,0.1)]">
          <Button ButtonText="View transaction details" className="bg-transparent shadow-none hover:bg-transparent" />
        </div>
      </div>
    </div>
  );
}