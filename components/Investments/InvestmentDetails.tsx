"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import useProductStore from "@/store/productStore"; // Import Zustand store
import Navigator from "@/components/ui/Navigator";
import Image from "next/image";
import Button from "@/components/ui/Button";
import BankComponent from "@/components/ui/BankComponent";
import InvestPreview from "@/components/Investments/InvestmentPreview";
import BankTransfer from "@/components/Investments/BankTransfer";
import WalletTransfer from "./WalletTransfer";
import CardTransfer from "./CardTransfer";
import ReceiptModal from "./Receipt";
import InvestmentProcessed from "@/components/Investments/InvestmentProcessed";

import CircleToggle from "@/components/ui/CircleToggle";
import { BiSolidBank } from "react-icons/bi";
import { IoWallet } from "react-icons/io5";
import { BsFillWalletFill } from "react-icons/bs";

export default function InvestmentDetails() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [investPreviewOpen, setIsInvestPreviewOpen] = useState(false);
  const [bankTransferOpen, setIsBankTransferOpen] = useState(false);
  const [walletTransferOpen, setIsWalletTransferOpen] = useState(false);
  const [cardTransferOpen, setIsCardTransferOpen] = useState(false);
  const [investmentProcessedOpen, setIsInvestmentProcessedOpen] =
    useState(false);
  const [receiptOpen, setIsReceiptOpen] = useState(false);
  const { products, fetchProducts, error } = useProductStore();
  const [noOfUnits, setNoOfUnits] = useState("");
  const [amount, setAmount] = useState("");
  const [formError, setFormError] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    string | null
  >(null);

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, [products, fetchProducts]);

  const product = products.find((product) => product.id === id);

  if (error)
    return <p className="text-red-500">Failed to load product details.</p>;
  if (!product) return <p>No product found.</p>;

  const investmentDetails = [
    { label: "Investments", href: "/main/investments" },
    { label: "Make Investment", href: "/main/investments/create-investment" },
    {
      label: "Investment Product",
      href: `/main/investments/create-investment/investment-product?id=${encodeURIComponent(
        product.id
      )}`, // Pass id here
    },
    {
      label: "Investment Details",
      href: "/main/investments/create-investment/investment-product/investment-details",
    },
  ];
  const validateInputs = () => {
    const units = Number(noOfUnits);
    const totalAmount = Number(amount);
  
    if (!units || !totalAmount) {
      return { isValid: false, error: "Please fill in all required fields." };
    }
  
    if (isNaN(units) || isNaN(totalAmount)) {
      return { isValid: false, error: "Invalid input. Please enter numeric values." };
    }
  
    if (units > product.availableUnits) {
      return {
        isValid: false,
        error: `You cannot invest in more than ${product.availableUnits} units.`,
      };
    }
  
    if (!selectedPaymentMethod) {
      return { isValid: false, error: "Please select a payment method to proceed." };
    }
  
    return { isValid: true, error: "" };
  };
  

  const openInvestPreview = () => {
    const { isValid, error } = validateInputs();
    if (!isValid) {
      setFormError(error);
      return;
    }
  
    setFormError("");
    setIsInvestPreviewOpen(true);
  };
  

  // Update the amount whenever the number of units is changed
  const handleNoOfUnitsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const units = e.target.value;
    setNoOfUnits(units);

    // Calculate the amount based on units and costPerUnit
    if (units && !isNaN(Number(units))) {
      const calculatedAmount = Number(units) * product.costPerUnit;
      setAmount(calculatedAmount.toString());
    } else {
      setAmount("");
    }
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputAmount = e.target.value;
    setAmount(inputAmount);

    // Calculate units based on the input amount and costPerUnit
    if (inputAmount && !isNaN(Number(inputAmount))) {
      const calculatedUnits = Number(inputAmount) / product.costPerUnit;
      setNoOfUnits(calculatedUnits.toString());
    } else {
      setNoOfUnits("");
    }
  };
  
  //Make Investment Click
  const handleMakeInvestmentClick = () => {
  const { isValid, error } = validateInputs();
  if (!isValid) {
    setFormError(error);
    return;
  }

  if (selectedPaymentMethod === "bank") {
    setIsInvestPreviewOpen(false);
    setIsBankTransferOpen(true);
  } else if (selectedPaymentMethod === "wallet") {
    setIsInvestPreviewOpen(false);
    setIsWalletTransferOpen(true);
  }
  else {
    setIsInvestPreviewOpen(false);
    setIsCardTransferOpen(true);
  }
};

  const handleShowEvidenceClick = () => {
    if (setIsBankTransferOpen) {
        setIsBankTransferOpen(false)
    }
    if (setIsCardTransferOpen) {
        setIsCardTransferOpen(false);
    }
    if (setIsWalletTransferOpen)(
        setIsWalletTransferOpen(false)
    )
    setIsReceiptOpen(true);
  };

  const handlePaymentSelection = (method: string) => {
    setSelectedPaymentMethod(method);
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
            onChange={handleNoOfUnitsChange}
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
              onChange={handleAmountChange}
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
              style={
                selectedPaymentMethod === "bank"
                  ? "bg-[rgba(228,255,226,1)]"
                  : "h-[110px]"
              }
              bankImage={<BiSolidBank className="text-color-one" />}
              bankName="Pay Via Bank Transfer"
              textStyle={
                selectedPaymentMethod === "bank"
                  ? "text-[rgba(65,148,68,1)]"
                  : "text-sm font-medium whitespace-wrap"
              }
              icon={
                <CircleToggle
                  isClicked={selectedPaymentMethod === "bank"}
                  onClick={() => handlePaymentSelection("bank")}
                />
              }
            />
            <BankComponent
              style={
                selectedPaymentMethod === "wallet"
                  ? "bg-[rgba(228,255,226,1)]"
                  : "h-[110px]"
              }
              bankImage={<IoWallet className="text-color-one" />}
              bankName="Pay via Wallet"
              textStyle={
                selectedPaymentMethod === "wallet"
                  ? "text-[rgba(65,148,68,1)]"
                  : "text-sm font-medium whitespace-wrap"
              }
              icon={
                <CircleToggle
                  isClicked={selectedPaymentMethod === "wallet"}
                  onClick={() => handlePaymentSelection("wallet")}
                />
              }
            />
            <BankComponent
              style={
                selectedPaymentMethod === "card"
                  ? "bg-[rgba(228,255,226,1)]"
                  : "h-[110px]"
              }
              bankImage={<BsFillWalletFill className="text-color-one" />}
              bankName="Pay via Card"
              textStyle={
                selectedPaymentMethod === "card"
                  ? "text-[rgba(65,148,68,1)]"
                  : "text-sm font-medium whitespace-wrap"
              }
              icon={
                <CircleToggle
                  isClicked={selectedPaymentMethod === "card"}
                  onClick={() => handlePaymentSelection("card")}
                />
              }
            />
          </div>
        </div>
        {/* Error message */}
        {formError && <p className="text-red-500 text-sm">{formError}</p>}
        {/* Proceed Button */}
        <Button
          type="submit" // Triggers the form submission
          ButtonText="Proceed"
          className="py-3 mt-12 w-full lg:w-[528px]"
          disabled={false} // Ensure the button is enabled, as the logic checks validity
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
      {bankTransferOpen && (
        <BankTransfer
          onClose={() => setIsBankTransferOpen(false)}
          onProceed={handleShowEvidenceClick}
          productId={product.id}
          noOfUnits={noOfUnits} 
          amount={amount}
        />
      )}
      {walletTransferOpen && (
        <WalletTransfer
          onClose={() => setIsWalletTransferOpen(false)}
          onProceed={handleShowEvidenceClick}
          amount={amount}
        />
      )}
      {cardTransferOpen && (
        <CardTransfer
          onClose={() => setIsCardTransferOpen(false)}
          onProceed={handleShowEvidenceClick}
          amount={amount}
        />
      )}
       {receiptOpen && (
        <ReceiptModal
          onClose={() => setIsReceiptOpen(false)}
        //   onConfirm={() => setIsInvestPreviewOpen}
        />
      )}
      {investmentProcessedOpen && (
        <InvestmentProcessed
          onClose={() => setIsInvestmentProcessedOpen(false)}
          onConfirm={() => setIsReceiptOpen(true)}
        />
      )}
     
    </div>
  );
}
