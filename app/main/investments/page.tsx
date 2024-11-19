"use client";
import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { BsFileBarGraphFill } from "react-icons/bs";
import Image from "next/image";
import CardComponentFive from "@/components/ui/CardComponentFive";
import NoHistory from "@/components/ui/NoHistory";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import Link from "next/link";
import ProductsMobile from "@/components/Investments/ProductsMobile";
import ProductsDesktop from "@/components/Investments/ProductsDesktop";
import HistoryDesktop from "@/components/Portolio/HistoryDesktop";



export default function Investment() {
  const [showNotifications, setShowNotifications] = useState(false);
  return (
    <div>
      <div className="lg:mr-8 lg:gap-4 xl:flex items-end lg:mb-6 ">
        <div className="flex gap-4 mt-4">
          <CardComponentFive
            icon={
              <Image
                src="/images/empty-wallet.svg"
                height={14}
                width={14}
                alt="Empty Wallet Icon"
              />
            }
            label="Available Cash"
            number={`$0.00`}
            classname="text-base font-semibold lg:font-extrabold lg:text-[32px]"
            width="lg:w-[378px] xl:w-[355px]"
          />
          <CardComponentFive
            icon={
              <Image
                src="/images/ledger.svg"
                height={14}
                width={14}
                alt="Ledger Icon"
              />
            }
            label="Ledger Balance"
            number={`$0.00`}
            classname="text-base font-semibold lg:font-extrabold lg:text-[32px]"
            width="lg:w-[378px] xl:w-[355px]"
          />
        </div>
        <section
          className={`flex bg-light-grey shadow-sm rounded-common p-4 my-4 justify-center mx-auto gap-2 lg:gap-12 lg:w-[382px] xl:my-0 lg:h-[103px]`}
        >
          <div className="flex items-center justify-center text-color-one gap-1 lg:flex-col ">
            <Icon icon={<IoIosSend />} />
            <Link
              href="/main/investments/withdraw-funds"
              className="text-xs whitespace-nowrap"
            >
              Withdraw
            </Link>
          </div>
          <div className="flex items-center justify-center text-color-one gap-1 lg:flex-col ">
            <Icon icon={<BsFileBarGraphFill />} />
            <Link href="/main/investments/create-investment" className="text-xs whitespace-nowrap">
              Create Investment
            </Link>
          </div>
          <div className="flex items-center justify-center text-color-one gap-1 lg:flex-col">
            <Icon icon={<GoPlus />} />
            <Link
              href="/main/investments/fund-wallet"
              className="text-xs whitespace-nowrap"
            >
              Fund Wallet
            </Link>
          </div>
        </section>
      </div>

      <hr />
      {showNotifications ? (
        <div className="lg:mr-8">
          <NoHistory
            icon={<BsFileBarGraphFill />}
            text="No Investment History"
          />
          <div onClick={() => setShowNotifications(false)}>
            <Button ButtonText="With notifications" className="mx-auto" />
          </div>
        </div>
      ) : (
        <div>
          <div>
            <h1 className="text-base font-semibold mt-2 lg:text-xl">
              All Investments
            </h1>
           <ProductsMobile/>
           <ProductsDesktop />
          
            <hr />
            <div className="flex justify-between my-4 lg:mr-8">
              <p className="text-base font-semibold text-color-zero">
                Recent Transactions
              </p>
              <Link href="/main/investments/investment-history" className="text-sm text-color-one">View All</Link>
            </div>
            <div className="hidden lg:grid">
                <HistoryDesktop/>
            </div>
          
            <div className="lg:hidden">
                <section>
                    <p className="text-color-form text-sm">Today</p>
                    <hr className="my-3"/>
                    <section className="flex justify-between items-center bg-light-grey p-4 shadow-sm rounded-common mt-2 lg:w-[361px] xl:w-[520px]">
                        <div className="flex gap-4 lg:gap-3">
                            <Icon icon={<GoPlus className="text-color-one text-lg" />} containerSize="w-[39.6px] h-[39.6px] rounded-[14.85px]"/>
                            <div>
                                <p className="text-sm text-color-zero font-medium">Wallet Funding</p>
                                <p className="text-xs text-color-one">Completed</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-color-six">$20</p>
                            <p className="text-slate-400 text-xs">11:04 AM</p>
                        </div>
                    </section>
                </section>
                <section className="my-5">
                    <p className="text-color-form text-sm">September 11th, 2024</p>
                    <hr className="my-3"/>
                    <section className="flex justify-between items-center bg-light-grey p-4 shadow-sm rounded-common lg:w-[361px] xl:w-[520px]">
                        <div className="flex gap-4 lg:gap-3">
                            <Icon icon={<BsFileBarGraphFill className="text-color-one text-lg" />} containerSize="w-[39.6px] h-[39.6px] rounded-[14.85px]"/>
                            <div>
                                <p className="text-sm text-color-zero font-medium">Investment Purchase</p>
                                <p className="text-xs text-color-one">Successful</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-color-six">$20</p>
                            <p className="text-slate-400 text-xs">11:04 AM</p>
                        </div>
                    </section>
                </section>
            </div>
          </div>

          <div onClick={() => setShowNotifications(true)}>
            <Button ButtonText="Without notifications" className="mx-auto" />
          </div>
        </div>
      )}
    </div>
  );
}
