"use client"
import { useState } from "react";
import { FaClock } from "react-icons/fa6";
import { IoIosSend, IoIosArrowForward } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import Image from "next/image";
import CardComponentFive from "@/components/ui/CardComponentFive";
import NoHistory from "@/components/ui/NoHistory";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";

export default function Portfolio() {
    const [showNotifications, setShowNotifications] = useState(false);
    return (
        <div>
            <div className="flex gap-4 mt-4 xl:mt-0">
                <CardComponentFive icon={<Image src="/images/empty-wallet.svg" height={14} width={14} alt="Empty Wallet Icon"/>} label="Available Cash" number={`$0.00`} classname="text-base font-semibold lg:font-extrabold lg:text-[32px]" width="lg:w-[378px] xl:w-[355px]"/>
                <CardComponentFive icon={<Image src="/images/ledger.svg" height={14} width={14} alt="Ledger Icon"/>} label="Ledger Balance" number={`$0.00`} classname="text-base font-semibold lg:font-extrabold lg:text-[32px]" width="lg:w-[378px] xl:w-[355px]"/>
            </div>
            <section className={`flex bg-light-grey shadow-sm rounded-common p-4 my-4 justify-center gap-8 lg:w-[382px] lg:mx-auto xl:my-0 xl:w-fit xl:gap-4 xl:h-[103px] xl:justify-center xl:items-center`}>
                <div className="flex items-center text-color-one gap-2 xl:flex-col">
                    <Icon icon={<IoIosSend/>}/> 
                    <p className="text-xs whitespace-nowrap">Withdraw</p>
                </div>
                <div className="flex items-center text-color-one gap-2 xl:flex-col">
                    <Icon icon={<GoPlus/>}/>
                    <p className="text-xs whitespace-nowrap">Fund Wallet</p>
                </div>
            </section>
            <hr/>
            {showNotifications ? (
                <div>
                    <NoHistory icon={<FaClock/>} text="No transactions have been performed yet"/>
                    <div onClick={() => setShowNotifications(false)}>
                        <Button
                            ButtonText="With notifications"
                            className="mx-auto" 
                        />
                    </div>
                </div>
              
            ): (
                <div>
                    <div>
                        <div className="flex justify-between my-4">
                            <h1 className="text-base font-semibold">Recent Transactions</h1>
                            <p className="flex items-center text-color-one text-xs">View all <span><IoIosArrowForward/></span></p>
                        </div>
                       
                        <section>
                            <div>
                                <p className="text-sm text-color-form">Today</p>
                                <hr/>
                            </div>
                            <section>

                            </section>
                        </section>
                    </div>

                    <div onClick={() => setShowNotifications(true)}>
                        <Button
                            ButtonText="Without notifications"
                            className="mx-auto" 
                        />
                    </div>
                </div>
            )}
            
        </div>
    )
}