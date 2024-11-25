"use client";
import { useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import { LiaTimesSolid } from "react-icons/lia";
import { GoHomeFill } from "react-icons/go";
import { TbPackages, TbTargetArrow } from "react-icons/tb";
import { RiMouseFill, RiStockLine } from "react-icons/ri";
import { BsFileBarGraphFill, BsPeopleFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import NavLink from "@/components/ui/MainPageNavLink";

interface MainPageNavbarProps {
    isNavOpen: boolean;
    toggleNav: () => void;
  }
export default function MainPageNavbar({ isNavOpen, toggleNav }: MainPageNavbarProps) {
  

  // Prevent scrolling when navbar is open
  useEffect(() => {
    if (isNavOpen) {
        document.body.classList.add('overflow-hidden');
    } else {
        document.body.classList.remove('overflow-hidden');
    }

    // Cleanup function to remove class on unmount
    return () => document.body.classList.remove('overflow-hidden');
}, [isNavOpen]);

 

  return (
    
    <>
        {isNavOpen && (
            <div
            className="fixed top-0 right-0 w-[25vw] min-h-screen bg-black opacity-50 z-50 lg:hidden"
            onClick={toggleNav} 
            />
        )}
        <div className={`flex z-50 flex-col bg-light-grey absolute min-h-screen top-0 left-0 p-4 space-y-8 w-3/4 lg:w-[230px] lg:static lg:px-8 border-r border-slate-200 xl:w-[268px] ${isNavOpen ? 'fixed' : 'hidden lg:flex'}`}>
            <button className="flex justify-center lg:hidden" onClick={toggleNav}>
                <LiaTimesSolid className='text-color-zero'/>
            </button>
            {/* Logo Img */}
            <Link href="/" className="flex border-b border-slate-200 pb-3">
                <Image
                className="logo"
                src={"/images/logo.svg"}
                alt="Royal-Stone Logo" 
                width={117.43}
                height={22}
                />
            </Link>
            <nav>
                <ul>
                    <li className="flex flex-col gap-6">
                        <NavLink
                        href="/main/dashboard"
                        icon={<GoHomeFill/>}
                        label="Dashboard"
                        
                        />
                        <NavLink
                        href="/main/product"
                        icon={<TbPackages />}
                    label="Product"
                    />
                    <NavLink
                    href="/main/portfolio"
                    icon={<RiMouseFill />}
                    label="Portfolio"
                    />
                    <NavLink
                    href="/main/stocks"
                    icon={<RiStockLine />}
                    label="Stocks"
                    />
                    <NavLink
                    href="/main/savings"
                    icon={<TbTargetArrow />}
                    label="Fixed Savings"
                    />
                    <NavLink
                    href="/main/investments"
                    icon={<BsFileBarGraphFill />}
                    label="Investments"
                    />
                    <NavLink
                    href="/main/referrals"
                    icon={<BsPeopleFill />}
                    label="Referrals"
                    />
                    <NavLink
                    href="/main/transaction-history"
                    icon={<FaClock />}
                    label="Transaction History"
                    />

                    <NavLink
                    href="/main/settings"
                    icon={<IoMdSettings />}
                    label="Settings"
                    />
                </li>
                <hr className="my-6"/>
                <li>
                    <NavLink
                        href="/auth/login"
                        icon={<FiLogOut />}
                        label="Log Out"
                        />
                </li>
            </ul>
           
          </nav>
        </div>
     
      
    </>
  );
}
