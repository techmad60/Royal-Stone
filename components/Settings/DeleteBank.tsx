import { useEffect } from "react";
import Image from "next/image";
import Icon from "../ui/Icon";
import FormButton from "../ui/FormButton";

interface DeleteBankProps {
  onClose: () => void;
 
}

export default function DeleteBank({ onClose}: DeleteBankProps) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 flex bg-[#D9D9D9A6] items-end lg:items-center justify-end lg:justify-center z-50">
            <div className="flex flex-col bg-white rounded-t-[15px] w-full h-[335px] lg:rounded-[20px] lg:max-w-[621px] lg:h-[348px]">
                <div className="flex justify-center items-center mt-4 lg:hidden">
                    <hr className="w-[51px] h-[5px] rounded-[40px] bg-[#D9D9D9]" />
                </div>
                <div className="flex items-center border-b w-full pb-2 p-4">
                    <p onClick={onClose} className="text-color-form text-sm cursor-pointer">
                        Cancel
                    </p>
                    <p className="text-color-zero font-semibold text-lg mx-auto relative right-4">Delete Bank Account</p>
                </div>
                
                <p className="text-color-form text-sm my-1 p-4">Do you want to delete the following bank details?</p>

                <section className="bg-light-grey rounded-common shadow-sm h-[84px] py-2 flex flex-col space-y-4 lg:hidden">
                    <div className="flex pl-4 items-center gap-3">
                        <Icon icon={<Image src="/images/banks/citi-bank.svg" height={14} width={14} alt="Opay Logo"/>} containerSize="w-[16px] h-[16px]"/>
                        <p className="text-sm font-medium text-color-zero">GTBank</p>
                    </div>
                    <div className="flex items-center gap-4 pl-4">
                        <p className="text-color-form text-sm border-r pr-4">9019111278</p>
                        <p className="text-color-form text-sm">Cooper Winterwind</p>
                    </div>
                </section>
                
                <div className="hidden lg:grid h-[348px]">
                    <div className="grid grid-cols-6 m-4 bg-light-grey p-3 rounded-[15px] shadow-sm">
                        <p className="text-sm text-[rgba(15,28,57,0.5)] col-span-2">Bank</p>
                        <p className="text-sm text-[rgba(15,28,57,0.5)] col-span-2">
                        Account Number
                        </p>
                        <p className="text-sm text-[rgba(15,28,57,0.5)] col-span-2">
                        Account Name
                        </p>
                    </div>
                    <section className="grid grid-cols-6 px-3 py-4 mx-4">
                        <div className="flex gap-2 col-span-2">
                            <Icon icon={<Image
                            src="/images/banks/opay.svg"
                            height={15}
                            width={15}
                            alt="Opay Logo"
                        />}/>
                            <p className="text-sm text-color-zero col-span-2">Opay</p>
                        </div>
                        <p className="text-sm col-span-2">9019111278</p>
                        <div className="flex justify-between col-span-2">
                            <p className="text-sm text-color-zero col-span-2">Osindeinde Kolawole</p>
                            
                        </div>  
                    </section>
                    <hr />
                </div>
                
                <div className="mt-12 m-4 lg:mt-4" onClick={onClose}>
                        <FormButton ButtonText="Delete" className="py-3 w-full lg:w-full"/>
                    </div>
            </div>
        </div>
  );
}
