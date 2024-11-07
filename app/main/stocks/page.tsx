//import SearchUI from "@/components/stocks/SearchUI";
import StockListMobile from "@/components/stocks/StocksMobile";
import StockDesktopList from "@/components/stocks/StocksDesktop";
//import Link from "next/link";
// import Image from "next/image";
// import { MdOutlineArrowForwardIos } from "react-icons/md";
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
