import Image from "next/image";
import { useEffect } from "react";
import { BsFileBarGraphFill } from "react-icons/bs";
import Icon from "../../ui/Icon";

interface InvestmentHistoryProps {
  onClose: () => void;
}

export default function InvestmentHistoryModal({ onClose}: InvestmentHistoryProps) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []); 

  return (
    <div className="fixed inset-0 flex bg-[#D9D9D9A6] items-end lg:items-center justify-end lg:justify-center z-50">
            <div className="flex flex-col bg-white rounded-t-[15px] w-full h-[598px] lg:rounded-[20px] lg:max-w-[621px] lg:h-[560px]">
                <div className="flex justify-center items-center mt-4 lg:hidden">
                    <hr className="w-[51px] h-[5px] rounded-[40px] bg-[#D9D9D9]" />
                </div>
                <div className="flex items-center border-b w-full pb-2 p-4">
                    <p onClick={onClose} className="text-color-form text-sm cursor-pointer">
                        Cancel
                    </p>
                    <p className="text-color-zero font-semibold text-lg mx-auto relative right-4">Investment History Details</p>
                </div>

                <div className="flex items-center gap-4 my-1 p-4">
                    <Icon icon={<BsFileBarGraphFill className="text-color-one text-2xl" />} containerSize="w-[41px] h-[41px]"/>
                    <div className="flex flex-col gap-1">
                        <p className="text-color-zero font-medium text-sm lg:text-base">Pharetra diam vitae duis vash aliquet</p>
                        <p className="text-color-six text-sm">32% ROI -<span className="text-color-one">SUCCESSFUL</span></p>
                    </div>
                </div>

                <section className="self-center grid grid-cols-2 bg-light-grey rounded-[10px] shadow-sm mx-6 mt-4 p-[15px] text-sm w-[345px] h-[218px] lg:p-5 lg:w-[572px] lg:h-[228px]">
                    <div className="flex flex-col space-y-8">
                        <div className="flex flex-col">
                            <p className="text-color-form">Amount</p>
                            <p className="text-color-six">N200,000</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-color-form">Transaction Date</p>
                            <p className="text-color-six">22/9/2024</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-color-form">No. of units</p>
                            <p className="text-color-six">100</p>
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
                        <div className="flex flex-col">
                            <p className="text-color-form">Cost Per Unit</p>
                            <p className="text-color-six">N2000/Units</p>
                        </div>
                    </div>
                </section>
                <section className="flex gap-2 bg-light-grey shadow-sm p-3 rounded-common m-4 lg:gap-4">
                    <div className="flex-shrink-0">
                        <Image
                        src="/images/potato-2.svg"
                        height={77}
                        width={77}
                        alt="Potato image"
                        />
                    </div>
                    <div className="w-full">
                        <div className="flex justify-between items-center  lg:gap-20">
                            <div className="flex flex-col gap-1">
                                <p className="text-color-one text-[0.625rem]">ONGOING</p>
                                <p className="text-sm text-colour-five">
                                Pharetra diam vitae duis vash aliquet
                                </p>
                            </div>
                            <div>
                                <p className="text-xs text-color-zero font-medium">
                                N210,000
                                </p>
                                <p className="text-[0.625rem] text-color-one tracking-tight whitespace-nowrap">
                                ROI:10% (N21,000)
                                </p>
                            </div>
                        </div>
                        <hr className="my-1" />
                        <p className="text-[0.625rem] text-[rgba(151,156,169,1)]">
                        MATURITY DATE: 22/9/2025
                        </p>
                    </div>
                </section>
            </div>
        </div>
  );
}
