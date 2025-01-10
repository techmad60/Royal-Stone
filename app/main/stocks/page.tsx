import StockDesktopList from "@/components/Stocks_temp/StocksDesktop";
import StockListMobile from "@/components/Stocks_temp/StocksMobile";


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
