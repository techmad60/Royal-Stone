import { IoFilter } from "react-icons/io5";
import { GoPlus, } from "react-icons/go";
import { IoIosSend } from "react-icons/io";
import { BsFileBarGraphFill } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
import Icon from "@/components/ui/Icon";


export default function TransactionHistory() {
    return (
        <div className="">
            <div className="flex justify-between py-3">
                <p className="text-color-form text-sm">Today</p>
                <div className="flex flex-row-reverse items-center gap-2">
                    <p className="text-sm border-b leading-none border-color-one text-color-one">Filter</p>
                    <span><IoFilter className="text-color-one"/></span>
                </div>
            </div>
            <hr />
            <section className="flex my-6 items-end bg-light-grey p-4 shadow-sm rounded-common justify-between">
                <div className="flex gap-4">
                    <Icon icon={<GoPlus className="text-2xl text-color-one"/>} containerSize="w-[39.6px] h-[39.6px] rounded-[14.85px]"/>
                    <div>
                        <p className="text-sm text-color-zero font-medium tracking-tight">Savings Wallet Funding</p>
                        <p className="text-xs text-[rgba(255,165,0,1)]">Pending</p>
                    </div>
                </div>
                
                <div className="">
                    <p className="text-sm text-[rgba(107,115,133,1)] text-color-six font-semibold">$20</p>
                    <p className="text-xs text-[rgba(107,115,133,0.7)] tracking-tight">11:04 AM</p>
                </div>
            </section>

            <section className="flex my-6 items-end bg-light-grey p-4 shadow-sm rounded-common justify-between">
                <div className="flex gap-4">
                    <Icon icon={<IoIosSend className="text-2xl text-color-one"/>} containerSize="w-[39.6px] h-[39.6px] rounded-[14.85px]"/>
                    <div>
                        <p className="text-sm text-color-zero font-medium tracking-tight">Investment Fund Withdrawal</p>
                        <p className="text-xs text-color-one">Successful</p>
                    </div>
                </div>
                
                <div className="">
                    <p className="text-sm text-[rgba(107,115,133,1)] text-color-six font-semibold">-$7</p>
                    <p className="text-xs text-[rgba(107,115,133,0.7)] tracking-tight">9:12 AM</p>
                </div>
            </section>
            <div className="flex justify-between py-3">
                <p className="text-color-form text-sm">Yesterday, 12/9/2024</p>
            </div>
            <hr />
            <section className="flex my-6 items-end bg-light-grey p-4 shadow-sm rounded-common justify-between">
                <div className="flex gap-4">
                    <Icon icon={<GoPlus className="text-2xl text-color-one"/>} containerSize="w-[39.6px] h-[39.6px] rounded-[14.85px]"/>
                    <div>
                        <p className="text-sm text-color-zero font-medium tracking-tight">Savings Wallet Funding</p>
                        <p className="text-xs text-color-one">Successful</p>
                    </div>
                </div>
                
                <div className="">
                    <p className="text-sm text-[rgba(107,115,133,1)] text-color-six font-semibold">$20</p>
                    <p className="text-xs text-[rgba(107,115,133,0.7)] tracking-tight">11:04 AM</p>
                </div>
            </section>
            <section className="flex my-6 items-end bg-light-grey p-4 shadow-sm rounded-common justify-between">
                <div className="flex gap-4">
                    <Icon icon={<IoIosSend className="text-2xl text-color-one"/>} containerSize="w-[39.6px] h-[39.6px] rounded-[14.85px]"/>
                    <div>
                        <p className="text-sm text-color-zero font-medium tracking-tight">Investment Fund Withdrawal</p>
                        <p className="text-xs text-color-one">Successful</p>
                    </div>
                </div>
                
                <div className="">
                    <p className="text-sm text-[rgba(107,115,133,1)] text-color-six font-semibold">$20</p>
                    <p className="text-xs text-[rgba(107,115,133,0.7)] tracking-tight">11:04 AM</p>
                </div>
            </section>
            <section className="flex my-6 items-end bg-light-grey p-4 shadow-sm rounded-common justify-between">
                <div className="flex gap-4">
                    <Icon icon={<BsFileBarGraphFill className="text-2xl text-color-one"/>} containerSize="w-[39.6px] h-[39.6px] rounded-[14.85px]"/>
                    <div>
                        <p className="text-sm text-color-zero font-medium tracking-tight">Investment Purchase</p>
                        <p className="text-xs text-color-one">Successful</p>
                    </div>
                </div>
                
                <div className="">
                    <p className="text-sm text-[rgba(107,115,133,1)] text-color-six font-semibold">$63</p>
                    <p className="text-xs text-[rgba(107,115,133,0.7)] tracking-tight">11:04 AM</p>
                </div>
            </section>
            <section className="flex my-6 items-end bg-light-grey p-4 shadow-sm rounded-common justify-between">
                <div className="flex gap-4">
                    <Icon icon={<TbTargetArrow className="text-2xl text-color-one"/>} containerSize="w-[39.6px] h-[39.6px] rounded-[14.85px]"/>
                    <div>
                        <p className="text-sm text-color-zero font-medium tracking-tight">New Laptop Savings</p>
                        <p className="text-xs text-color-one">Savings Payment - Successful</p>
                    </div>
                </div>
                
                <div className="">
                    <p className="text-sm text-[rgba(107,115,133,1)] text-color-six font-semibold">$20</p>
                    <p className="text-xs text-[rgba(107,115,133,0.7)] tracking-tight">11:04 AM</p>
                </div>
            </section>
            <section className="flex my-6 items-end bg-light-grey p-4 shadow-sm rounded-common justify-between">
                <div className="flex gap-4">
                    <Icon icon={<TbTargetArrow className="text-2xl text-color-one"/>} containerSize="w-[39.6px] h-[39.6px] rounded-[14.85px]"/>
                    <div>
                        <p className="text-sm text-color-zero font-medium tracking-tight">New Laptop Savings</p>
                        <p className="text-xs text-red-500">Savings Payment - Failed</p>
                    </div>
                </div>
                
                <div className="">
                    <p className="text-sm text-[rgba(107,115,133,1)] text-color-six font-semibold">$20</p>
                    <p className="text-xs text-[rgba(107,115,133,0.7)] tracking-tight">11:04 AM</p>
                </div>
            </section>
        </div>
    )
}