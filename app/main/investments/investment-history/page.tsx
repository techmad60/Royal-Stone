import InvestmentNavigator from "@/components/Investments/InvestmentNavigator";
import TransactionList from "@/components/Portolio/HistoryMobile";
import HistoryDesktop from "@/components/Portolio/HistoryDesktop";

const historySteps = [
    { label: "Investments", href: "/main/investments" },
    { label: "Investments", href: "/main/investments/investment-history" },
  ];
export default function InvestmentHistory () {
    return (
        <div>
            <InvestmentNavigator  currentStep={1} steps={historySteps}/>
            <div className="mt-6">
                <TransactionList/>
            </div>
            <div className="hidden lg:grid">
                <HistoryDesktop/>
            </div>
           
            
           
        </div>
    )
}