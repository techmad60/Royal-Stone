import { useEffect } from "react";
import Image from "next/image";
import Icon from "../ui/Icon";
import { IoIosArrowDown } from "react-icons/io";
import FormButton from "../ui/FormButton";
import SettingsNavigator from "./SettingsNavigator";

// interface NewBankProps {
//   onClose: () => void;
// }

export default function NewBank() {
  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const newBankSteps = [
    { label: "Settings", href: "/main/settings" },
    { label: "Bank Info", href: "/main/settings" },
    { label: "Add Bank Details", href: "/main/settings" },
  ];

  return (
    <div className="flex flex-col bg-white lg:mr-8">
      <div className="">
        <SettingsNavigator currentStep={2} steps={newBankSteps}/>
        <p className="text-color-zero font-semibold text-lg mt-6">
        Add Bank Details
        </p>
        <p className="text-color-form text-sm my-4">
          Provide your bank account details
        </p>
      </div>

      <form className="flex flex-col space-y-4 ">
        {/* Trade Amount */}
        <div className="flex flex-col gap-1">
          <label className="text-color-form text-sm">Bank</label>
          <div className="flex justify-between py-2 border-b border-slate-200">
            <div className="flex gap-2">
              <p className="text-sm font-medium text-color-zero">GTBank</p>
              <Icon
                icon={
                  <Image
                    src="/images/banks/gt-bank.svg"
                    height={14}
                    width={14}
                    alt="Zelle Logo"
                  />
                }
                containerSize="w-[16px] h-[16px]"
              />
            </div>

            <div className=" ">
              <IoIosArrowDown />
            </div>
          </div>
        </div>
        {/* Trade Amount */}
        <div className="flex flex-col gap-1">
          <label className="text-color-form text-sm">Account Number</label>
          <div className="relative border-b border-slate-200 ">
            <div className="flex justify-between py-2">
              <input
                type="text"
                required
                className="rounded-sm  placeholder:text-color-zero placeholder:text-sm"
                placeholder="2010100191"
              />
              <div className="">
                <p className="text-sm text-color-one border-b border-color-one leading-none">
                  Osindeinde Kolawole
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="mt-12 lg:mt-8">
        <FormButton ButtonText="Save" className="py-3 w-full lg:w-full" />
      </div>
    </div>
  );
}
