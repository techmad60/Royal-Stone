// "use client";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { BiSolidBank } from "react-icons/bi";
import BankHeader from "../ui/BankHeader";
import BankComponent from "../ui/BankComponent";
import BankComponentDesktop from "../ui/BankComponentDesktop";
import Navigator from "../ui/Navigator";

import { RiDeleteBin5Fill } from "react-icons/ri";
// For Bank Settings
const bankSteps = [
  { label: "Settings", href: "/main/settings" },
  { label: "Bank Info", href: "/main/settings" },
];
interface BankSettingProps {
  onNavigatetoCreateAddBank: () => void;
  onNavigatetoDeleteBank: () => void;
}
export default function BankSetting({
  onNavigatetoCreateAddBank,
  onNavigatetoDeleteBank,
}: BankSettingProps) {
  const [showBankDetails, setShowBankDetails] = useState(false);
  const [activeTab, setActiveTab] = useState<"bank" | "crypto">("bank"); // Default is Bank Account
  return (
    <div className="lg:mr-8">
      <div className="lg:hidden">
        <Navigator currentStep={1} steps={bankSteps} />
      </div>
      {showBankDetails ? (
        <div>
          <div className="flex justify-between my-6 w-full lg:mt-[85px] lg:border-b lg:pb-4">
            <h1 className="text-color-zero text-base font-semibold ">
              Bank Information
            </h1>
          </div>

          <div className="">
            <div className="flex flex-col justify-center items-center space-y-4  py-6 shadow-sm bg-light-grey rounded-common w-full">
              <div
                className={`w-7 h-7 shadow-sm flex items-center justify-center transform rotate-45 rounded-[9px] bg-white`}
              >
                <span className="text-color-one transform -rotate-45">
                  <BiSolidBank />
                </span>
              </div>
              <p className="text-sm text-color-form">
                You have not added any bank information
              </p>
              <Button
                ButtonText="Add Bank Account/Wallet Address"
                className="w-[254px] rounded-[16px] h-[35px] flex tracking-tighter justify-center items-center"
                onClick={onNavigatetoCreateAddBank}
              />
            </div>
          </div>

          <Button
            ButtonText="With Bank Details"
            className="mx-auto mt-8"
            onClick={() => setShowBankDetails(false)}
          />
        </div>
      ) : (
        <div>
          <div>
            <div className="flex justify-between my-6 w-full lg:mt-[85px] lg:border-b lg:pb-4">
              <h1 className="text-color-zero text-base font-semibold ">
                Bank Information
              </h1>
              <div onClick={onNavigatetoCreateAddBank}>
                <Button
                  ButtonText="Add Bank Account"
                  className="py-3 rounded-[12px] w-[125px] h-[30px] items-center justify-center text-xs tracking-tight hidden lg:flex"
                />
              </div>
            </div>
            <div className="flex gap-4 border-b mb-4">
              <p
                className={`text-xs duration-300 pb-6 cursor-pointer ${
                  activeTab === "bank"
                    ? "text-color-one hover:text-color-one border-b-[3px] border-color-one font-semibold"
                    : "text-color-form hover:text-green-400"
                }`}
                onClick={() => setActiveTab("bank")}
              >
                Bank Account
              </p>
              <p
                className={`text-xs duration-300 cursor-pointer ${
                  activeTab === "crypto"
                    ? "text-color-one hover:text-color-one border-b-[3px] border-color-one font-semibold"
                    : "text-color-form hover:text-green-400"
                }`}
                onClick={() => setActiveTab("crypto")}
              >
                Crypto Wallet
              </p>
            </div>

            {/* Bank Account Details */}
            {activeTab === "bank" && (
              <div id="Bank Details">
                <div className="lg:hidden">
                  <div className="grid grid-cols-2 grid-rows-2 gap-4 pb-4 lg:hidden">
                    <BankComponent
                      bankImage={
                        <Image
                          src="/images/banks/citi-bank.svg"
                          height={15}
                          width={15}
                          alt="Citi Logo"
                        />
                      }
                      bankName="Citi"
                      accNumber={9019111278}
                      accName="Cooper WinterWind"
                      style="h-[105px]"
                      flexStyling="flex gap-2 space-y-0"
                      icon={
                        <RiDeleteBin5Fill
                          className="text-red-500 cursor-pointer"
                          onClick={onNavigatetoDeleteBank}
                        />
                      }
                    />
                    <BankComponent
                      bankImage={
                        <Image
                          src="/images/banks/citi-bank.svg"
                          height={15}
                          width={15}
                          alt="GT bank Logo"
                        />
                      }
                      bankName="Citi"
                      accNumber={2219111278}
                      accName="Cooper WinterWind"
                      style="h-[105px] bg-color-two"
                      flexStyling="flex gap-2 space-y-0"
                      icon={
                        <RiDeleteBin5Fill
                          className="text-red-500 cursor-pointer"
                          onClick={onNavigatetoDeleteBank}
                        />
                      }
                    />
                    <BankComponent
                      bankImage={
                        <Image
                          src="/images/banks/citi-bank.svg"
                          height={15}
                          width={15}
                          alt="Citi Logo"
                        />
                      }
                      bankName="Citi"
                      accNumber={7100192289}
                      accName="Cooper WinterWind"
                      style="h-[105px]"
                      flexStyling="flex gap-2 space-y-0"
                      icon={
                        <RiDeleteBin5Fill
                          className="text-red-500 cursor-pointer"
                          onClick={onNavigatetoDeleteBank}
                        />
                      }
                    />
                  </div>
                  <div
                    className="my-4 lg:hidden"
                    onClick={onNavigatetoDeleteBank}
                  >
                    <Button
                      ButtonText="Add Bank Account"
                      className="py-3 rounded-[12px] w-[125px] h-[30px] flex items-center justify-center text-xs tracking-tight"
                    />
                  </div>
                </div>

                <div className="hidden lg:grid">
                  <BankHeader
                    header="Bank"
                    number="Account Number"
                    name="Account Name"
                  />
                  <BankComponentDesktop
                    bankImage={
                      <Image
                        src="/images/banks/citi-bank.svg"
                        height={15}
                        width={15}
                        alt="Citi Logo"
                      />
                    }
                    bankName="Citi"
                    accountNum={9019111278}
                    accountName="Cooper WinterWind"
                    onNavigatetoDeleteBank={onNavigatetoDeleteBank}
                  />
                  <hr />
                  <BankComponentDesktop
                    bankImage={
                      <Image
                        src="/images/banks/citi-bank.svg"
                        height={15}
                        width={15}
                        alt="Citi Logo"
                      />
                    }
                    bankName="Citi"
                    accountNum={9019111278}
                    accountName="Cooper WinterWind"
                    onNavigatetoDeleteBank={onNavigatetoDeleteBank}
                  />
                  <hr />
                  <BankComponentDesktop
                    bankImage={
                      <Image
                        src="/images/banks/citi-bank.svg"
                        height={15}
                        width={15}
                        alt="Citi Logo"
                      />
                    }
                    bankName="Citi"
                    accountNum={9019111278}
                    accountName="Cooper WinterWind"
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
            {/* Crypto Wallet Details */}
            {activeTab === "crypto" && (
              <div id="Crypto-Details">
                <div className="lg:hidden">
                  <div className="flex flex-col gap-4 pb-4 lg:hidden">
                    <BankComponent
                      bankName="babhauixxyanal1225616711sdjcjssa"
                      accName="TRC-20"
                      style="h-[79px] w-full items-center"
                      flexStyling="flex gap-2 space-y-0"
                      icon={
                        <RiDeleteBin5Fill
                          className="text-red-500 cursor-pointer"
                          onClick={onNavigatetoDeleteBank}
                        />
                      }
                      showIcon={false}
                    />
                    <BankComponent
                      bankName="babhauixxyanal1225616711sdjcjssa"
                      accName="TRC-20"
                      style="h-[79px] w-full items-center"
                      flexStyling="flex gap-2 space-y-0"
                      icon={
                        <RiDeleteBin5Fill
                          className="text-red-500 cursor-pointer"
                          onClick={onNavigatetoDeleteBank}
                        />
                      }
                      showIcon={false}
                    />
                    <BankComponent
                      bankName="babhauixxyanal1225616711sdjcjssa"
                      accName="TRC-20"
                      style="h-[79px] w-full items-center"
                      flexStyling="flex gap-2 space-y-0"
                      icon={
                        <RiDeleteBin5Fill
                          className="text-red-500 cursor-pointer"
                          onClick={onNavigatetoDeleteBank}
                        />
                      }
                      showIcon={false}
                    />
                  </div>
                </div>
                <div className="hidden lg:grid">
                  <BankHeader
                    header="Network"
                    number="Wallet Address"
                    name=""
                  />
                  <BankComponentDesktop
                    bankName="TRC-20"
                    accountNum="babhauixxyanal1225616711sdjcjssa"
                    onNavigatetoDeleteBank={onNavigatetoDeleteBank}
                    showIcon = {false}
                  />
                  <hr />
                  <BankComponentDesktop
                    bankName="TRC-20"
                    accountNum="babhauixxyanal1225616711sdjcjssa"
                    onNavigatetoDeleteBank={onNavigatetoDeleteBank}
                    showIcon = {false}
                  />
                  <hr />
                  <BankComponentDesktop
                    bankName="TRC-20"
                    accountNum="babhauixxyanal1225616711sdjcjssa"
                    onNavigatetoDeleteBank={onNavigatetoDeleteBank}
                    showIcon = {false}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
