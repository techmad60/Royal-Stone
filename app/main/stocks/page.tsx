import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import StockList from "@/components/stocks/StocksMobile";

export default function Dashboard() {
  return (
    <div className="flex flex-col pb-4 lg:pr-8 h-screen">
        <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-2 rounded-[9px] w-[218px] h-[35px] bg-[#E2E2E240] p-4">
                <CiSearch className="text-[#6B738599]"/>
                <input type="text" placeholder="Search for stocks" className="text-xs rounded-[9px]  placeholder:text-[#6B738599] bg-transparent"/>
            </div>

            <p className="text-xs whitespace-nowrap text-color-one hover:text-green-700 border-b border-color-one hover:border-green-700">View Stocks History</p>
        </div>
        
        <StockList />
        <StockList />
        <section className="flex items-center justify-between bg-light-grey shadow-sm p-3 rounded-common mt-4">
            <div className="flex items-center gap-2">
                <Image src="/images/stocks/tesco.svg" height={47} width={47} alt="tesca logo"/>
                <div>
                    <p className="text-sm text-color-five font-medium">Tesco PLC</p>
                    <p className="text-xs text-[#6B738599]">TSCO</p>
                </div>
            </div>
            <div>
                <p className="text-color-one font-medium">+2.21%</p>
                <p className="text-color-six font-medium">$290.19</p>
            </div>
        </section>

        <section className="flex items-center justify-between bg-light-grey shadow-sm p-3 rounded-common mt-4">
            <div className="flex items-center gap-2">
                <Image src="/images/stocks/spotify.svg" height={47} width={47} alt="spotify logo"/>
                <div>
                    <p className="text-sm text-color-five font-medium">Spotify Technology SA</p>
                    <p className="text-xs text-[#6B738599]">SPOT</p>
                </div>
            </div>
            <div>
                <p className="text-color-one font-medium">+2.21%</p>
                <p className="text-color-six font-medium">$290.19</p>
            </div>
        </section>
        <section className="flex items-center justify-between bg-light-grey shadow-sm p-3 rounded-common mt-4">
            <div className="flex items-center gap-2">
                <Image src="/images/stocks/air-bnb.svg" height={47} width={47} alt="Air bnb logo"/>
                <div>
                    <p className="text-sm text-color-five font-medium">Airbnb</p>
                    <p className="text-xs text-[#6B738599]">ABNB</p>
                </div>
            </div>
            <div>
                <p className="text-color-one font-medium">+2.21%</p>
                <p className="text-color-six font-medium">$290.19</p>
            </div>
        </section>
        <section className="flex items-center justify-between bg-light-grey shadow-sm p-3 rounded-common mt-4">
            <div className="flex items-center gap-2">
                <Image src="/images/stocks/shopify.svg" height={47} width={47} alt="tesca logo"/>
                <div>
                    <p className="text-sm text-color-five font-medium">Shopify Inc</p>
                    <p className="text-xs text-[#6B738599]">SHOP</p>
                </div>
            </div>
            <div>
                <p className="text-color-one font-medium">+2.21%</p>
                <p className="text-color-six font-medium">$290.19</p>
            </div>
        </section>
       
    </div>
    

  );
}
