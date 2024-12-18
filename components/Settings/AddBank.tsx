
import { BsFileBarGraphFill } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
import Navigator from "../ui/Navigator";
import AccountSettings from "./AccountSettings";
import { MdKeyboardArrowRight } from "react-icons/md";

interface AddBank {
  onNavigateToAddBankDetails: () => void;
  onNavigateToAddCryptoDetails: () => void;
}

export default function AddBank({onNavigateToAddBankDetails, onNavigateToAddCryptoDetails}: AddBank) {
  const BankStepsMobile = [
    { label: "Settings", href: "/main/settings" },
    { label: "Bank Info", href: "/main/settings" },
  ];
  const BankStepsDesktop = [
    { label: "Bank Info", href: "/main/settings" },
    { label: "Add Bank Details", href: "/main/settings" },
  ];

  return (
    <div className="flex flex-col bg-white lg:mr-8">
      {/* Mobile Navigator */}
      <div className="lg:hidden">
        <Navigator currentStep={1} steps={BankStepsMobile} />
      </div>
      <div className="flex justify-between my-6 w-full lg:my-0 lg:mt-[85px] lg:border-b lg:pb-4">
        <h1 className="text-color-zero text-base font-semibold ">
          Bank Information
        </h1>
      </div>
      {/* Desktop Navigator */}
      <div className="hidden lg:flex">
        <Navigator currentStep={1} steps={BankStepsDesktop} />
      </div>

      <div>
        <p className="text-color-form text-sm tracking-tight lg:my-4">Select Type</p>
        <div className="flex gap-2 mt-2 cursor-pointer lg:mt-0">
          <AccountSettings
            containerStyle="bg-[#FCFCFC] w-[168px] h-[110px] hover:bg-slate-100 duration-150"
            iconSize="w-[24px] h-[24px] rounded-[9px]"
            settingIcon={<BsFileBarGraphFill className="text-color-one" />}
            setting="Add Bank"
            settingText="Account Details"
            settingsTextStyle="text-sm text-color-zero font-medium tracking-tight"
            navigate={<MdKeyboardArrowRight className="text-[#7A7D8F] text-xl" />}
            flexStyle="flex-col"
            onClick={onNavigateToAddBankDetails}
            
          />
          <AccountSettings
            containerStyle="bg-[#FCFCFC] items-start w-[168px] h-[110px] hover:bg-slate-100 duration-150"
            iconSize="w-[24px] h-[24px] rounded-[9px]"
            settingIcon={<TbTargetArrow className="text-color-one" />}
            setting="Add Crypto"
            settingText="Wallet Address"
            settingsTextStyle="text-sm text-color-zero font-medium tracking-tight"
            navigate={<MdKeyboardArrowRight className="text-[#7A7D8F] text-xl" />}
            flexStyle="flex-col"
            onClick={onNavigateToAddCryptoDetails}
          />
        </div>
      </div>
    </div>
  );
}
