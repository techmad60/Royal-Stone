import InvestmentNavigator from "@/components/Investments/InvestmentNavigator";
import ProductList from "@/components/ui/ProductMobile";
import ProductGrid from "@/components/ui/ProductDesktop";
import Pagination from "@/components/ui/Pagination";


const createInvestment = [
    { label: "Investments", href: "/main/investments" },
    { label: "Create Investment", href: "/main/investments/create-investment" },
];
export default function CreateInvestment() {

    return (
        <div className="lg:h-screen">
            <InvestmentNavigator currentStep={1} steps={createInvestment}/>
            <div className="space-y-2 mt-4">
                <h1 className="text-base font-semibold text-color-zero">Create Investment</h1>
                <p className="text-color-form text-sm">Select an Investment Product</p>
            </div>
           
            <ProductList />
            <ProductGrid />
            <Pagination/>
        </div>
    )
}