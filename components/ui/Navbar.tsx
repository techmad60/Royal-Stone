// Navbar Component
'use client'
import {useState, useEffect} from 'react';
import Link from "next/link";
import Image from "next/image";
import { FaTimes, FaBars } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

export default function Navbar () {
    
    const [isNavOpen, setIsNavOpen] = useState(false);
    useEffect(() => {
        // Add or remove a class to the body and html to disable/enable scrolling
        const body = document.body;
        const html = document.documentElement;
    
        if (isNavOpen) {
          body.style.overflow = 'hidden';
          html.style.overflow = 'hidden';
        } else {
          body.style.overflow = 'visible';
          html.style.overflow = 'visible';
        }
        // Clean up the effect on component unmount
        return () => {
          body.style.overflow = 'visible';
          html.style.overflow = 'visible';
        };
    }, [isNavOpen])
 
    //Toggle Nav
  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  //Check if Link is Active
  const pathname = usePathname()
  const isActiveLink = (href: string) => pathname === href;



  return (
    <nav className={`lg:flex justify-between lg:self-center items-center`}>
        <div className="flex justify-between items-center">
            <div className="flex">
                <Image 
                className="logo lg:w-[120px]"
                src={"/images/logo.svg"}
                alt="Royal-Stone Logo"
                width={100}
                height={100}/>
            </div>
            <div className="cursor-pointer lg:hidden" onClick={handleToggleNav}>
            <FaBars className='text-black font-bold text-xl'/>
            </div>
        </div>

        {isNavOpen && (
            <div
            className="fixed top-0 left-0 w-[25vw] min-h-screen bg-black opacity-50 z-50 lg:hidden"
            onClick={handleToggleNav} 
            />
        )}
        <div className={`bg-color-three absolute top-0 right-0 h-screen flex flex-col items-center p-4 w-3/4 z-40 lg:w-auto lg:flex-row lg:static lg:h-auto lg:bg-transparent lg:p-0 ${isNavOpen ? 'fixed' : 'hidden lg:flex'} `}>
           <button onClick={handleToggleNav} className="lg:hidden">
            <FaTimes size={24} className='text-color-zero'/>
            </button>
            <div className="flex flex-col text-color-zero my-12 text-center text-sm font-medium leading-[3.75rem]  lg:flex-row lg:text-sm lg:my-4 lg:gap-8 xl:gap-20">
                <div className='flex flex-col lg:flex-row items-center justify-between lg:space-x-5 lg:text-sm xl:space-x-12'>
                    
                    <Link href="/" className={`${isActiveLink('/') ? 'border-b border-color-zero ' : ''} hover:text-blue-800 hover:border-blue-800 transition duration-150 hover:ease-in`}>
                        Home
                    </Link>
                    <Link href="/about-us" className={`${isActiveLink('/about-us') ? 'text-color-six border-b border-color-zero' : ''} hover:text-blue-800 hover:border-blue-800 transition duration-150 hover:ease-in`}>
                        About Us
                    </Link>
                    <Link href="/contact-us" className={`${isActiveLink('/contact-us') ? 'text-color-six border-b border-color-zero' : ''} hover:text-blue-800 hover:border-blue-800 duration-150 hover:ease-in`}>
                        Contact Us
                    </Link>
                    <Link href="/privacy-policy" className={`${isActiveLink('/privacy-policy') ? 'text-color-six border-b border-color-zero' : ''} hover:text-blue-800 hover:border-blue-800 duration-150 hover:ease-in`}>
                        Privacy Policy
                    </Link>
                    <Link href="/tos" className={`${isActiveLink('/tos') ? 'text-color-six border-b border-color-zero' : ''} hover:text-blue-800 hover:border-blue-800 duration-150 hover:ease-in`}>
                        Terms Of Service
                    </Link>
                </div>
            
                <div className="flex flex-col space-y-6 mt-12  lg:flex lg:flex-row lg:space-x-4 lg:space-y-0 lg:items-center lg:mt-0 rounded-md text-center">
                    <Link href="/login" className="text-color-one bg-white rounded-md border border-color-one transition duration-150 hover:text-green-700 hover:border-green-700 hover:ease-in font-medium lg:px-4 lg:py-2  lg:text-sm ">
                    Login
                    </Link>
                    
                    <Link href="/signup" className=" text-color-three bg-color-one transition duration-150 hover:ease-in font-medium rounded-md hover:bg-green-700 lg:text-sm lg:p-3">
                    Get Started
                    </Link>
                </div>
            </div>
        </div>
    </nav>
  )
}