"use client";
import InvestmentProcessed from "@/components/Investments/Processed/InvestmentProcessed";
import HistoryDesktop from "@/components/Portolio/HistoryDesktop";
import Button from "@/components/ui/Button";
import CardComponentFive from "@/components/ui/CardComponentFive";
import Icon from "@/components/ui/Icon";
import Loading from "@/components/ui/Loading";
import NoHistory from "@/components/ui/NoHistory";
// import useProductStore from "@/store/productStore";
import InvestmentDesktop from "@/components/Investments/ui/InvestmentDesktop";
import InvestmentMobile from "@/components/Investments/ui/InvestmentMobile";
import useInvestmentStore from "@/store/investmentStore";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BsFileBarGraphFill } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { IoIosSend } from "react-icons/io";

export default function Investment() {
  // const { products, fetchProducts, isLoading, error } = useProductStore();
  const { fetchInvestments, investments, isLoading, error } = useInvestmentStore();
  const searchParams = useSearchParams();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const success = searchParams.get("success");
    if (success === "true") {
      setShowAlert(true);

      // Remove the "success" parameter from the URL
      const params = new URLSearchParams(searchParams.toString());
      params.delete("success");
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.replaceState(null, "", newUrl);
    }
  }, [searchParams])

  useEffect(() => {
    fetchInvestments("investment-purchase"); // Fetch products when the component is mounted
  }, [fetchInvestments]);
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
              className="text-xs whitespace-nowrap hover:text-green-400 duration-150 "
            >
              Withdraw
            </Link>
          </div>
          <div className="flex items-center justify-center text-color-one gap-1 lg:flex-col ">
            <Icon icon={<BsFileBarGraphFill />} />
            <Link
              href="/main/investments/make-investment"
              className="text-xs whitespace-nowrap hover:text-green-400 duration-150"
            >
              Make Investment
            </Link>
          </div>
          <div className="flex items-center justify-center text-color-one gap-1 lg:flex-col">
            <Icon icon={<GoPlus />} />
            <Link
              href="/main/investments/fund-wallet"
              className="text-xs whitespace-nowrap hover:text-green-400 duration-150"
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
            {isLoading ? (
              <div>
                <Loading />
              </div>
            ) : error ? (
              <p className="text-red-500">
                Failed to load products. Please try again later.
              </p>
            ) : (
              <>
                <InvestmentMobile investments={investments}/>
                <InvestmentDesktop investments={investments}/>
              </>
            )}
            <hr className="lg:hidden mt-8"/>
            <hr className="mr-8 hidden lg:flex"/>
            <div className="flex justify-between my-4 lg:mr-8">
              <p className="text-base font-semibold text-color-zero">
                Recent Transactions
              </p>
              <Link
                href="/main/investments/investment-history"
                className="text-sm text-color-one"
              >
                View All
              </Link>
            </div>
            <div className="hidden lg:grid">
              <HistoryDesktop />
            </div>

            <div className="lg:hidden">
              <section>
                <p className="text-color-form text-sm">Today</p>
                <hr className="my-3" />
                <section className="flex justify-between items-center bg-light-grey p-4 shadow-sm rounded-common mt-2 lg:w-[361px] xl:w-[520px]">
                  <div className="flex gap-4 lg:gap-3">
                    <Icon
                      icon={<GoPlus className="text-color-one text-lg" />}
                      containerSize="w-[39.6px] h-[39.6px] rounded-[14.85px]"
                    />
                    <div>
                      <p className="text-sm text-color-zero font-medium">
                        Wallet Funding
                      </p>
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
                <hr className="my-3" />
                <section className="flex justify-between items-center bg-light-grey p-4 shadow-sm rounded-common lg:w-[361px] xl:w-[520px]">
                  <div className="flex gap-4 lg:gap-3">
                    <Icon
                      icon={
                        <BsFileBarGraphFill className="text-color-one text-lg" />
                      }
                      containerSize="w-[39.6px] h-[39.6px] rounded-[14.85px]"
                    />
                    <div>
                      <p className="text-sm text-color-zero font-medium">
                        Investment Purchase
                      </p>
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
      {showAlert && <InvestmentProcessed onClose={() => setShowAlert(false)} />}
    </div>
  );
}
