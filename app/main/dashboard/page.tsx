import Link from "next/link";
import { TbTargetArrow } from "react-icons/tb";
import { BsFileBarGraphFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa6";
import { MdArrowForwardIos } from "react-icons/md";
import CardComponentFive from "@/components/ui/CardComponentFive";
import Button from "@/components/ui/Button";
import ProductMobile from "@/components/ui/ProductMobile";
import ProductDesktop from "@/components/ui/ProductDesktop";

export default function Dashboard() {
  return (
    <div className="flex flex-col lg:pr-8">
      <p className="text-base text-color-form py-4">Welcome, Kolawole! 👋🏻 </p>
      <div className="flex gap-4 pb-6 border-b">
        <CardComponentFive icon={<TbTargetArrow className="text-base"/>} label="Total Savings Target" number={0}/>
        <CardComponentFive icon={<BsFileBarGraphFill className="text-base"/>} label="Total Investments Made" number={0}/>
      </div>

      <div className="flex flex-col justify-center items-center space-y-4 my-8 py-6 shadow-sm bg-light-grey rounded-common lg:w-[765px]">
        <div
          className={`w-7 h-7 shadow-sm flex items-center justify-center transform rotate-45 rounded-[9px] bg-white"
          }`}
        >
          <span className="text-color-one transform -rotate-45"><FaClock/> {/* Counter-rotate icon */}</span>
        </div>
        <p className="text-sm text-color-form">No transactions have been performed yet</p>
        <Button ButtonText="Perform a transaction" className="py-3 self-center w-[200px] lg:w-[200px]"/>
      </div>

      <div className="flex flex-col border-t py-6">
        <div className="flex justify-between items-center">
          <p className="text-base font-semibold text-color-zero lg:text-lg">Recommended Products</p>
          <Link href = "/main/product" className="flex items-center justify-between text-color-one gap-1 hover:text-green-700 duration-300">
          <p className="text-xs lg:text-sm">View all</p>
          <MdArrowForwardIos className="text-xs lg:hidden"/>
          </Link>
        </div>
        <ProductMobile/>
        <ProductDesktop/>
      </div>
    </div>

  );
}
