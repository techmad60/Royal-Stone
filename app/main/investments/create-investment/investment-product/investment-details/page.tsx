"use client";
import { useState } from "react";
import InvestmentNavigator from "@/components/Investments/InvestmentNavigator";
import Image from "next/image";
import Button from "@/components/ui/Button";
import BankComponent from "@/components/ui/BankComponent";
import InvestPreview from "@/components/Investments/InvestmentPreview";
import InvestmentProcessed from "@/components/Investments/InvestmentProcessed";
import CircleToggle from "@/components/ui/CircleToggle";
import { BiSolidBank } from "react-icons/bi";
import { IoWallet } from "react-icons/io5";
import { BsFillWalletFill } from "react-icons/bs";

const investmentDetails = [
  { label: "Investments", href: "/main/investments" },
  { label: "Create Investment", href: "/main/investments/create-investment" },
  {
    label: "Investment Product",
    href: "/main/investments/create-investment/investment-product",
  },
  {
    label: "Investment Details",
    href: "/main/investments/create-investment/investment-product/investment-details",
  },
];

export default function ProductDetails() {
  const [investPreviewOpen, setIsInvestPreviewOpen] = useState(false);
  
  const [investmentProcessedOpen, setIsInvestmentProcessedOpen] = useState(false);

 
  const openInvestPreview = () => {
    setIsInvestPreviewOpen(true);
  };

  // Function to open TransactionDetails and close TransactionProcessed
  const handleViewDetailsClick = () => {
    setIsInvestPreviewOpen(false);
    setIsInvestmentProcessedOpen(true);
  };
  return (
    <div>
      <InvestmentNavigator currentStep={3} steps={investmentDetails} />

      <p className="text-color-zero mt-2 text-base font-semibold py-2 lg:text-lg">
        Make Investment
      </p>
      <div className="flex gap-2 border-b py-3 lg:hidden">
        <Image
          src="/images/potato-2.svg"
          width={39}
          height={39}
          alt="Product"
        />
        <div className="flex-col">
          <p className="text-sm text-color-zero">Pharetra diam vitae duis vash aliquet</p>
          <p className="text-color-six tet-sm">32% ROI</p>
        </div>
      </div>
      <hr />
      <form className="flex flex-col space-y-4 mt-2">
        {/* Amount of Units */}
        <div className="flex flex-col gap-1 ">
          <label className="text-color-form text-sm">No of Units</label>
          <input
            type="number"
            required
            className="rounded-sm border-b border-slate-200 placeholder:text-color-zero placeholder:text-sm py-2 lg:w-[528px]"
            placeholder="100"
          />
        </div>
        {/* Trade Amount */}
        <div className="flex flex-col gap-1">
          <label className="text-color-form text-sm">Amount</label>
          <div className="relative border-b border-slate-200 lg:w-[528px]">
            <input
              type="text"
              required
              className="rounded-sm  placeholder:text-color-zero placeholder:text-sm py-2"
              placeholder="$3,500"
            />
            <div className="absolute top-3 right-3 ">
              <p className="text-color-six text-sm ">$35/units</p>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="flex flex-col gap-1 border-b lg:w-[528px]">
          <label className="text-color-form text-sm">
            Select your preferred payment method
          </label>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 py-4 lg:flex">
            <BankComponent
              style="h-[110px]"
              bankImage={<BiSolidBank className="text-color-one" />}
              bankName="Pay Via
                        Bank Transfer"
                textStyle="text-sm font-medium whitespace-wrap"
                icon={<CircleToggle/>}
            />
            <BankComponent
              style="h-[110px]"
              bankImage={<IoWallet className="text-color-one" />}
              bankName="Pay via Wallet"
              textStyle="text-sm font-medium whitespace-wrap"
              icon={<CircleToggle/>}
            />
            <BankComponent
              style="h-[110px]"
              bankImage={<BsFillWalletFill className="text-color-one" />}
              bankName="Pay via Card"
              textStyle="text-sm font-medium whitespace-wrap"
              icon={<CircleToggle/>}
            />
          </div>
        </div>
        <div onClick={openInvestPreview}>
          <Button
            ButtonText="Proceed"
            className="py-3 mt-12 w-full lg:w-[528px]"
          />
        </div>
      </form>
      {investPreviewOpen && (
        <InvestPreview
          onClose={() => setIsInvestPreviewOpen(false)}
          onProceed={handleViewDetailsClick}
        />
      )}
      {investmentProcessedOpen && (
        <InvestmentProcessed
          onClose={() => setIsInvestmentProcessedOpen(false)}
          onConfirm={() => setIsInvestPreviewOpen}
        />
      )}
    </div>
  );
}
