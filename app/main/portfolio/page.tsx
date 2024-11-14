"use client";
import { useState } from "react";
import { FaClock } from "react-icons/fa6";
import { IoIosSend, IoIosArrowForward } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import Image from "next/image";
import CardComponentFive from "@/components/ui/CardComponentFive";
import NoHistory from "@/components/ui/NoHistory";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import HistoryMobile from "@/components/Portolio/HistoryMobile";
import HistoryDesktop from "@/components/Portolio/HistoryDesktop";
import Link from "next/link";


export default function Portfolio() {
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
          className={`flex bg-light-grey shadow-sm rounded-common p-4 my-4 justify-center mx-auto gap-8 lg:gap-16 lg:w-[382px] xl:my-0 lg:h-[103px]`}
        >
          <div className="flex items-center text-color-one gap-2 lg:border-r lg:pr-16">
            <Icon icon={<IoIosSend />} />
            <Link href="/main/portfolio/withdraw-funds" className="text-xs whitespace-nowrap">Withdraw</Link>
          </div>
          <div className="flex items-center text-color-one gap-2">
            <Icon icon={<GoPlus />} />
            <Link href="/main/portfolio/fund-wallet" className="text-xs whitespace-nowrap">Fund Wallet</Link>
          </div>
        </section> 
      </div>

      <hr />
      {showNotifications ? (
        <div className="lg:mr-8">
          <NoHistory
            icon={<FaClock />}
            text="No transactions have been performed yet"
          />
          <div onClick={() => setShowNotifications(false)}>
            <Button ButtonText="With notifications" className="mx-auto" />
          </div>
        </div>
      ) : (
        <div>
          <div>
            <div className="flex justify-between my-4 lg:mr-8">
              <h1 className="text-base font-semibold lg:text-xl">Recent Transactions</h1>
              <p className="flex items-center text-color-one text-xs">
                View all{" "}
                <span>
                  <IoIosArrowForward className="lg:hidden"/>
                </span>
              </p>
            </div>

           <div className="lg:hidden">
                <HistoryMobile/>
            </div>

            <div className="hidden lg:grid">
                <HistoryDesktop/>
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
