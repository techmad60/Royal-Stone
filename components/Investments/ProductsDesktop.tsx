import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import Image from "next/image";

export default function ProductsDesktop () {
    return (
        <div className="mr-8 my-6 hidden lg:grid">
            <div className="grid grid-cols-8 bg-light-grey p-3 rounded-[15px] mb-4">
                    <p className="text-sm text-[rgba(15,28,57,0.5)] col-span-3">Product Image & Name</p>
                    <p className="text-sm text-[rgba(15,28,57,0.5)]">Amount</p>
                    <p className="text-sm text-[rgba(15,28,57,0.5)]">ROI</p>
                    <p className="text-sm text-[rgba(15,28,57,0.5)]">Status</p>
                    <p className="text-sm text-[rgba(15,28,57,0.5)]">Maturity Date</p>
                    <p className="text-sm text-[rgba(15,28,57,0.5)]">Actions</p>
            </div>
            <div className="grid grid-cols-8 px-3 py-4  border-b">
                    <div className="flex gap-2 col-span-3">
                        <Image src="/images/potato-2.svg" height={40} width={40} alt="Product"/>
                        <p className="text-sm text-color-zero">Gravida imperdiet imperdiet lacinia commodo enim volutpat.</p>
                    </div>
                    <p className="text-sm text-color-zero">$200</p>
                    <p className="text-sm text-color-zero">10% ($20)</p>
                    <p className="text-sm text-color-one">ONGOING</p>
                    <p className="text-sm text-color-zero">22/9/2025</p>
                    <Link href="" className="flex border p-3 rounded-[20px] items-center gap-2 w-[80px] h-[22px] text-xs font-medium hover:text-green-700 duration-300  text-color-form">
                        <p className="text-xs">View</p>
                        <MdArrowForwardIos className="text-xs flex-shrink-0"/>
                    </Link>
            </div>
            <div className="grid grid-cols-8 px-3 py-4  border-b">
                    <div className="flex gap-2 col-span-3">
                        <Image src="/images/potato-2.svg" height={40} width={40} alt="Product"/>
                        <p className="text-sm text-color-zero">Gravida imperdiet imperdiet lacinia commodo enim volutpat.</p>
                    </div>
                    <p className="text-sm text-color-zero">$200</p>
                    <p className="text-sm text-color-zero">10% ($20)</p>
                    <p className="text-sm text-color-one">ONGOING</p>
                    <p className="text-sm text-color-zero">22/9/2025</p>
                    <Link href="" className="flex border p-3 rounded-[20px] items-center gap-2 w-[80px] h-[22px] text-xs font-medium hover:text-green-700 duration-300  text-color-form">
                        <p className="text-xs">View</p>
                        <MdArrowForwardIos className="text-xs flex-shrink-0"/>
                    </Link>
            </div>
            <div className="grid grid-cols-8 px-3 py-4 ">
                    <div className="flex gap-2 col-span-3">
                        <Image src="/images/potato-2.svg" height={40} width={40} alt="Product"/>
                        <p className="text-sm text-color-zero">Gravida imperdiet imperdiet lacinia commodo enim volutpat.</p>
                    </div>
                    <p className="text-sm text-color-zero">$200</p>
                    <p className="text-sm text-color-zero">10% ($20)</p>
                    <p className="text-sm text-color-one">ONGOING</p>
                    <p className="text-sm text-color-zero">22/9/2025</p>
                    <Link href="" className="flex border p-3 rounded-[20px] items-center gap-2 w-[80px] h-[22px] text-xs font-medium hover:text-green-700 duration-300  text-color-form">
                        <p className="text-xs">View</p>
                        <MdArrowForwardIos className="text-xs flex-shrink-0"/>
                    </Link>
            </div>
        </div>
    )
}