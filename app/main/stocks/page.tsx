
import StockListMobile from "@/components/Stocks/StocksMobile";
import StockDesktopList from "@/components/Stocks/StocksDesktop";

export default function Stocks() {
  return (
    <div className="flex flex-col pb-4 lg:pr-8 h-screen">
       <div className="lg:hidden">
            <StockListMobile />
       </div>
       
        <div className="hidden lg:flex flex-col">
            <StockDesktopList />
        </div>
    </div>
    

  );
}
