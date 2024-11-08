"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import StockNavigator from "@/components/stocks/StockNavigator";
import Button from "@/components/ui/Button";
import BuyModal from "@/components/stocks/BuyModal";

export default function TradeStock() {
    const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);

    const handleOpenBuyModal = () => {
        setIsBuyModalOpen(true);
    };

    return (
        <div>
            <StockNavigator currentStep={2} />
            <div className="flex items-center gap-4 border-b py-2 mt-4">
                <Link href="/main/stocks/stock-details" className="text-color-form border-r pr-4 text-sm">Cancel</Link>
                <p className="text-color-zero font-semibold text-lg">Trade Stock</p>
            </div>
            <div className="flex items-center gap-4 my-4 border-b pb-4">
                <Image src="/images/stocks/spotify.svg" alt="Spotify Logo" width={47} height={47} />
                <div>
                    <p className="text-color-zero font-semibold text-sm">Spotify Technology SA</p>
                    <p className="text-color-form text-sm">SPOT</p>
                </div>
            </div>

            <form className="flex flex-col mt-4 space-y-6">
                {/* Trade Amount */}
                <div className="flex flex-col gap-2">
                    <label className="text-color-form text-sm">What amount do you want to trade?</label>
                    <input
                        type="text"
                        required
                        className="rounded-sm border-b border-slate-200 placeholder:text-color-zero py-2"
                        placeholder="$200,000"
                    />
                </div>

                {/* Amount of Units */}
                <div className="flex flex-col gap-2">
                    <label className="text-color-form text-sm">Amount of Units</label>
                    <input
                        type="number"
                        required
                        className="rounded-sm border-b border-slate-200 placeholder:text-color-zero py-2"
                        placeholder="0.4157"
                    />
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-2">
                    <label className="text-color-form text-sm">What&apos;s your email address?</label>
                    <input
                        type="email"
                        required
                        className="rounded-sm border-b border-slate-200 placeholder:text-color-zero py-2"
                        placeholder="SamJoneson@gmail.com"
                    />
                </div>

                {/* Phone Number */}
                <div className="flex flex-col gap-2">
                    <label className="text-color-form text-sm">Phone Number</label>
                    <input
                        type="tel"
                        required
                        className="rounded-sm border-b border-slate-200 placeholder:text-color-zero py-2"
                        placeholder="+234 8103763064"
                    />
                </div>
            </form>

            <div className="mt-8 w-full">
                <p className="text-color-form text-sm">Do you want to buy or sell?</p>
                <div className="flex items-center gap-4 w-full justify-between mt-4">
                    {/* Buy and Sell buttons trigger the Buy Modal */}
                    <div onClick={handleOpenBuyModal} >
                        <Button ButtonText="Buy" className="bg-color-one w-[168px]" />
                    </div>
                    <div onClick={handleOpenBuyModal} >
                        <Button ButtonText="Sell" className="bg-color-six w-[168px]" />
                    </div>
                </div>
            </div>

            {/* Render BuyModal when isBuyModalOpen is true */}
            {isBuyModalOpen && (
                <BuyModal onClose={() => setIsBuyModalOpen(false)} />
            )}
        </div>
    );
}
