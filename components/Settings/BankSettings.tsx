"use client";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { BiSolidBank } from "react-icons/bi";
import BankComponent from "../ui/BankComponent";
import BankComponentDesktop from "../ui/BankComponentDesktop";
import SettingsNavigator from "./SettingsNavigator";
import { RiDeleteBin5Fill } from "react-icons/ri";
// For Profile Settings
const bankSteps = [
  { label: "Settings", href: "/main/settings" },
  { label: "Bank Info", href: "/main/settings" },
];
interface BankSettingProps {
  onNavigatetoCreateNewBank: () => void;
  onNavigatetoDeleteBank: () => void;
}
export default function BankSetting({
  onNavigatetoCreateNewBank, onNavigatetoDeleteBank
}: BankSettingProps) {
  const [showBankDetails, setShowBankDetails] = useState(false);
  return (
    <div className="lg:mr-8">
      <div className="lg:hidden">
        <SettingsNavigator currentStep={1} steps={bankSteps} />
      </div>
      <div className="flex justify-between my-6">
        <h1 className="text-color-zero text-base font-semibold">
          Bank Information
        </h1>
        <div onClick={onNavigatetoCreateNewBank}>
            <Button
            ButtonText="Add Bank Account"
            className="py-3 rounded-[12px] w-[125px] h-[30px] items-center justify-center text-xs tracking-tight hidden lg:flex"
            />
        </div>
      
      </div>

      {showBankDetails ? (
        <div className="lg:mr-8">
          <div className="flex flex-col justify-center items-center space-y-4 my-8 py-6 shadow-sm bg-light-grey rounded-common w-full">
            <div
              className={`w-7 h-7 shadow-sm flex items-center justify-center transform rotate-45 rounded-[9px] bg-white"
                }`}
            >
              <span className="text-color-one transform -rotate-45">
                <BiSolidBank />
              </span>
            </div>
            <p className="text-sm text-color-form">
              You have not added any bank information
            </p>
            <Button
              ButtonText="Add Bank Account"
              className="w-[200px] rounded-[12px] h-[35px] flex justify-center items-center"
            />
          </div>

          <div onClick={() => setShowBankDetails(false)}>
            <Button ButtonText="With Bank Details" className="mx-auto" />
          </div>
        </div>
      ) : (
        <div>
          <div className="lg:hidden">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 py-4 lg:hidden">
              <BankComponent
                bankImage={
                  <Image
                    src="/images/banks/opay.svg"
                    height={15}
                    width={15}
                    alt="Opay Logo"
                  />
                }
                bankName="Opay"
                accNumber={9019111278}
                accName="Osindeinde Kolawole"
                style="h-[105px]"
                flexStyling="flex gap-2 space-y-0"
                icon={<RiDeleteBin5Fill className="text-red-500 cursor-pointer" onClick={onNavigatetoDeleteBank} />}
              />
              <BankComponent
                bankImage={
                  <Image
                    src="/images/banks/gt-bank.svg"
                    height={15}
                    width={15}
                    alt="GT bank Logo"
                  />
                }
                bankName="GTBank"
                accNumber={2219111278}
                accName="Osindeinde Kolawole"
                style="h-[105px] bg-color-two"
                flexStyling="flex gap-2 space-y-0"
                icon={<RiDeleteBin5Fill className="text-red-500 cursor-pointer" onClick={onNavigatetoDeleteBank} />}
              />
              <BankComponent
                bankImage={
                  <Image
                    src="/images/banks/opay.svg"
                    height={15}
                    width={15}
                    alt="Opay Logo"
                  />
                }
                bankName="Opay"
                accNumber={7100192289}
                accName="Osindeinde Kolawole"
                style="h-[105px]"
                flexStyling="flex gap-2 space-y-0"
                icon={<RiDeleteBin5Fill className="text-red-500 cursor-pointer" onClick={onNavigatetoDeleteBank} />}
              />
            </div>
            <div className="my-4 lg:hidden" onClick={onNavigatetoDeleteBank}>
              <Button
                ButtonText="Add Bank Account"
                className="py-3 rounded-[12px] w-[125px] h-[30px] flex items-center justify-center text-xs tracking-tight"
              />
            </div>
          </div>

          <div className="hidden lg:grid">
            <div className="grid grid-cols-5 bg-light-grey p-3 rounded-[15px] shadow-sm">
                <p className="text-sm text-[rgba(15,28,57,0.5)]">Bank</p>
                <p className="text-sm text-[rgba(15,28,57,0.5)] col-span-2">
                Account Number
                </p>
                <p className="text-sm text-[rgba(15,28,57,0.5)] col-span-2">
                Account Name
                </p>
            </div>
            <BankComponentDesktop
              bankImage={
                <Image
                  src="/images/banks/opay.svg"
                  height={15}
                  width={15}
                  alt="Opay Logo"
                />
              }
              bankName="Opay"
              accountNum={9019111278}
              accountName="Osindeinde Kolawole"
              onNavigatetoDeleteBank={onNavigatetoDeleteBank}
              
            />
            <hr />
            <BankComponentDesktop
              bankImage={
                <Image
                  src="/images/banks/gt-bank.svg"
                  height={15}
                  width={15}
                  alt="Opay Logo"
                />
              }
              bankName="Opay"
              accountNum={9019111278}
              accountName="Osindeinde Kolawole"
              onNavigatetoDeleteBank={onNavigatetoDeleteBank}
            />
            <hr />
            <BankComponentDesktop
              bankImage={
                <Image
                  src="/images/banks/opay.svg"
                  height={15}
                  width={15}
                  alt="Opay Logo"
                />
              }
              bankName="Opay"
              accountNum={9019111278}
              accountName="Osindeinde Kolawole"
              onNavigatetoDeleteBank={onNavigatetoDeleteBank}
            />
          </div>
          <hr />
          <div onClick={() => setShowBankDetails(true)}>
            <Button
              ButtonText="Without Bank Details"
              className="mx-auto mt-8"
            />
          </div>
        </div>
      )}
    </div>
  );
}
