"use client"
import { useState } from "react";
import Navigator from "@/components/ui/Navigator";
import TransactionList from "@/components/Portolio/HistoryMobile";
import HistoryDesktop from "@/components/Portolio/HistoryDesktop";
import InvestmentHistoryModal from "@/components/Investments/InvestmentHistoryModal";


const historySteps = [
    { label: "Investments", href: "/main/investments" },
    { label: "Investments", href: "/main/investments/investment-history" },
  ];
export default function InvestmentHistory () {
    const [isInvestmentHistoryModalOpen, setIsInvestmentHistoryModalOpen] = useState(false);

    const handleIsInvestmentHistoryModalOpen = () => {
        setIsInvestmentHistoryModalOpen(true)
    }

    return (
        <div>
            <Navigator  currentStep={1} steps={historySteps}/>
            <div className="mt-6">
                <TransactionList onProceed = {handleIsInvestmentHistoryModalOpen}/>
            </div>
            <div className="hidden lg:grid">
                <HistoryDesktop onProceed = {handleIsInvestmentHistoryModalOpen}/>
            </div>
            {/* Conditionally render the TradeModal */}
         
            {isInvestmentHistoryModalOpen &&(
                <InvestmentHistoryModal onClose={() =>setIsInvestmentHistoryModalOpen(false)}/>
            )}
           
        </div>
    )
}