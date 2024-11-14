import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "../ui/Icon";

interface TransactionDetailsProps {
  onClose: () => void;
}

export default function TransactionDetails({ onClose}: TransactionDetailsProps) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 flex bg-[#D9D9D9A6] items-end lg:items-center justify-end lg:justify-center z-50">
            <div className="flex flex-col bg-white rounded-t-[15px] w-full h-[365px] lg:rounded-[20px] lg:max-w-[621px] lg:h-[348px]">
                <div className="flex justify-center items-center mt-4 lg:hidden">
                    <hr className="w-[51px] h-[5px] rounded-[40px] bg-[#D9D9D9]" />
                </div>
                <div className="flex items-center border-b w-full pb-2 p-4">
                    <Link onClick={onClose} href="/main/stocks/stock-details" className="text-color-form text-sm">
                        Cancel
                    </Link>
                    <p className="text-color-zero font-semibold text-lg mx-auto relative right-4">Transaction Details</p>
                </div>

                <div className="flex items-center gap-4 my-1 p-4">
                    <Icon icon={<Image src="/images/banks/zelle.svg" height={24} width={24} alt="Zelle Logo"/>} containerSize="w-[41px] h-[41px]"/>
                    <div>
                        <p className="text-color-zero font-medium text-sm lg:text-base">Investment Wallet Funding</p>
                        <p className="text-color-form text-sm">Zelle Funding - <span className="text-color-one">SUCCESSFUL</span></p>
                    </div>
                </div>

                <section className="self-center grid grid-cols-2 bg-light-grey rounded-[10px] shadow-sm mx-6 mt-4 p-[15px] text-sm w-[345px] h-[147px] lg:p-5 lg:w-[572px] lg:h-[155px]">
                    <div className="flex flex-col space-y-8">
                        <div className="flex flex-col">
                            <p className="text-color-form">Amount</p>
                            <p className="text-color-six">$200</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-color-form">Transaction Date</p>
                            <p className="text-color-six">22/9/2024</p>
                        </div>
                        
                    </div>
                    <div className="flex flex-col space-y-8">
                        <div className="flex flex-col">
                            <p className="text-color-form">Transaction ID</p>
                            <p className="text-color-six">#891919919ID</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-color-form">Transaction Time</p>
                            <p className="text-color-six">11:04 AM</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
  );
}
