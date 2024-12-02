"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import useProductStore from "@/store/productStore"; // Import Zustand store
import Navigator from "@/components/ui/Navigator";
import Image from "next/image";
import Button from "@/components/ui/Button";
import BankComponent from "@/components/ui/BankComponent";
import InvestPreview from "@/components/Investments/InvestmentPreview";
import MakeInvestment from "@/components/Investments/MakeInvestment";
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

export default function InvestmenttDetails() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [investPreviewOpen, setIsInvestPreviewOpen] = useState(false);
  const [makeInvestmentOpen, setIsMakeInvestmentOpen] = useState(false);
  const [investmentProcessedOpen, setIsInvestmentProcessedOpen] =
    useState(false);
  const { products, fetchProducts, error } = useProductStore();
  const [noOfUnits, setNoOfUnits] = useState("");
  const [amount, setAmount] = useState("");
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, [products, fetchProducts]);

  const product = products.find((product) => product.id === id);

  if (error)
    return <p className="text-red-500">Failed to load product details.</p>;
  if (!product) return <p>No product found.</p>;

  const openInvestPreview = () => {
    // Convert inputs to numbers
    const units = Number(noOfUnits);
    const totalAmount = Number(amount);
    if (!units || !totalAmount) {
      setFormError("Please fill in all required fields.");
      return;
    }
    if (isNaN(units) || isNaN(totalAmount)) {
      setFormError("Invalid input. Please enter numeric values.");
      return;
    }
    setFormError("");
    setIsInvestPreviewOpen(true);
  };


  const handleMakeInvestmentClick = () => {
    setIsInvestPreviewOpen(false);
    setIsMakeInvestmentOpen(true);
  };

  const handleInvestmentProcessedClick = () => {
    setIsMakeInvestmentOpen(false);
    setIsInvestmentProcessedOpen(true);
  };

  return (
    <div>
      <Navigator currentStep={3} steps={investmentDetails} />

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
          <p className="text-sm text-color-zero">{product.name}</p>
          <p className="text-color-six text-sm">{product.ROI.value}% ROI</p>
        </div>
      </div>
      <hr />
      <form
        className="flex flex-col space-y-4 mt-2"
        onSubmit={(e) => {
          e.preventDefault(); // Prevent default form submission
          openInvestPreview(); // Call your preview function
        }}
      >
        {/* Amount of Units */}
        <div className="flex flex-col gap-1 ">
          <label className="text-color-form text-sm">No of Units</label>
          <input
            value={noOfUnits}
            onChange={(e) => setNoOfUnits(e.target.value)}
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
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              className="rounded-sm placeholder:text-color-zero placeholder:text-sm py-2"
              placeholder={`$${product.costPerUnit}`}
            />
            <div className="absolute top-3 right-3">
              <p className="text-color-six text-sm">
                ${product.costPerUnit}/unit
              </p>
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
              bankName="Pay Via Bank Transfer"
              textStyle="text-sm font-medium whitespace-wrap"
              icon={<CircleToggle />}
            />
            <BankComponent
              style="h-[110px]"
              bankImage={<IoWallet className="text-color-one" />}
              bankName="Pay via Wallet"
              textStyle="text-sm font-medium whitespace-wrap"
              icon={<CircleToggle />}
            />
            <BankComponent
              style="h-[110px]"
              bankImage={<BsFillWalletFill className="text-color-one" />}
              bankName="Pay via Card"
              textStyle="text-sm font-medium whitespace-wrap"
              icon={<CircleToggle />}
            />
          </div>
        </div>

        {/* Proceed Button */}
        <Button
          type="submit" // Triggers the form submission
          ButtonText="Proceed"
          className="py-3 mt-12 w-full lg:w-[528px]"
        />
      </form>

      {investPreviewOpen && (
        <InvestPreview
          onClose={() => setIsInvestPreviewOpen(false)}
          onProceed={handleMakeInvestmentClick}
          noOfUnits={noOfUnits}
          amount={amount}
          product={product}
        />
      )}
      {makeInvestmentOpen && (
        <MakeInvestment
          onClose={() => setIsMakeInvestmentOpen(false)}
          onProceed={handleInvestmentProcessedClick}
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
