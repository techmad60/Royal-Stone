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
          className={`flex bg-light-grey shadow-sm rounded-common p-4 my-4 justify-center mx-auto gap-2 lg:gap-12 lg:w-[382px] xl:my-0 lg:h-[103px]`}
        >
          <div className="flex items-center justify-center text-color-one gap-1 lg:flex-col ">
            <Icon icon={<IoIosSend />} />
            <Link
              href="/main/portfolio/withdraw-funds"
              className="text-xs whitespace-nowrap"
            >
              Withdraw
            </Link>
          </div>
          <div className="flex items-center justify-center text-color-one gap-1 lg:flex-col ">
            <Icon icon={<BsFileBarGraphFill />} />
            <Link href="/main/investment" className="text-xs whitespace-nowrap">
              Create Investment
            </Link>
          </div>
          <div className="flex items-center justify-center text-color-one gap-1 lg:flex-col">
            <Icon icon={<GoPlus />} />
            <Link
              href="/main/portfolio/fund-wallet"
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
            <div className="flex-col space-y-3 py-4">
              <section className="flex gap-2 bg-light-grey shadow-sm p-3 rounded-common">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/potato-2.svg"
                    height={77}
                    width={77}
                    alt="Potato image"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-1">
                      <p className="text-color-one text-[0.625rem]">ONGOING</p>
                      <p className="text-sm text-colour-five">
                        Pharetra diam vitae duis vash aliquet
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-color-zero font-medium">
                        $210
                      </p>
                      <p className="text-[0.625rem] text-color-one tracking-tight whitespace-nowrap">
                        ROI:10% ($21)
                      </p>
                    </div>
                  </div>
                  <hr className="my-1" />
                  <p className="text-[0.625rem] text-[rgba(151,156,169,1)]">
                    MATURITY DATE: 22/9/2025
                  </p>
                </div>
              </section>
              <section className="flex gap-2 bg-light-grey shadow-sm p-3 rounded-common">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/potato-2.svg"
                    height={77}
                    width={77}
                    alt="Potato image"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-1">
                      <p className="text-color-one text-[0.625rem]">ONGOING</p>
                      <p className="text-sm text-colour-five">
                        Pharetra diam vitae duis vash aliquet
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-color-zero font-medium">
                        $210
                      </p>
                      <p className="text-[0.625rem] text-color-one tracking-tight whitespace-nowrap">
                        ROI:10% ($21)
                      </p>
                    </div>
                  </div>
                  <hr className="my-1" />
                  <p className="text-[0.625rem] text-[rgba(151,156,169,1)]">
                    MATURITY DATE: 22/9/2025
                  </p>
                </div>
              </section>
              <section className="flex gap-2 bg-light-grey shadow-sm p-3 rounded-common">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/potato-2.svg"
                    height={77}
                    width={77}
                    alt="Potato image"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-1">
                      <p className="text-color-one text-[0.625rem]">ONGOING</p>
                      <p className="text-sm text-colour-five">
                        Pharetra diam vitae duis vash aliquet
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-color-zero font-medium">
                        $210
                      </p>
                      <p className="text-[0.625rem] text-color-one tracking-tight whitespace-nowrap">
                        ROI:10% ($21)
                      </p>
                    </div>
                  </div>
                  <hr className="my-1" />
                  <p className="text-[0.625rem] text-[rgba(151,156,169,1)]">
                    MATURITY DATE: 22/9/2025
                  </p>
                </div>
              </section>
            </div>
            <hr />
            <div className="flex justify-between my-4">
              <p className="text-base font-semibold text-color-zero">
                Recent Transactions
              </p>
              <p className="text-sm text-color-one">View All</p>
            </div>
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

          <div onClick={() => setShowNotifications(true)}>
            <Button ButtonText="Without notifications" className="mx-auto" />
          </div>
        </div>
      )}
    </div>
  );
}
