// Footer Component
import Image from 'next/image';
import { FaFacebookF, FaApple, FaGooglePlay} from 'react-icons/fa';
import { FaXTwitter, FaYoutube} from "react-icons/fa6";
import { PiLinkedinLogoFill, PiInstagramLogoThin } from "react-icons/pi";
import Link from 'next/link';


export default function Footer ({margin = ""}){
    return (
        <footer className={`bg-color-two text-color-zero pt-8 px-16 flex flex-col lg:justify-center lg:items-center ${margin}`}>
            <nav className="flex flex-col justify-start items-start mb-12 space-y-12 py-8 sm:grid grid-cols-2 sm:space-y-0 sm:gap-8 lg:flex lg:flex-row lg:space-y-0 lg:gap-[14rem] xl:gap-[9rem]" aria-label="footer-nav">
                
                {/* Logo Section */}
                <section className="flex flex-col space-y-4 justify-start items-start flex-shrink-0">
                    <Image src={"/images/logo.svg"} alt="Royal-Stone Logo" width={170} height={170}/>
                </section>

                {/* Contact Section */}
                <section className="flex flex-col space-y-4 justify-start items-start">
                    <p className={`text-center text-[1.375rem] font-medium  whitespace-nowrap`}>Contact Us</p>
                    <ul className="flex flex-col gap-2">
                        <Link href="/" className="hover:text-green-500 duration-300">Home</Link>
                        <Link href="/about" className="hover:text-green-500 duration-300">About</Link>
                        <Link href="/contact-us" className="hover:text-green-500 duration-300">Contact us</Link>
                        <Link href="/faqs" className="hover:text-green-500 duration-300">FAQs</Link>
                    </ul>
                </section>

                {/* Policies Section */}
                <section className="flex flex-col space-y-4 justify-start items-start">
                    <p className={`text-center text-[1.375rem] font-medium  whitespace-nowrap`}>Policies</p>
                    <ul className="flex flex-col gap-2 ">
                        <Link href="/terms-of-service" className='whitespace-nowrap hover:text-green-500 duration-300'>Terms of Services</Link>
                        <Link href="/privacy-policy" className='hover:text-green-500 duration-300'>Privacy Policy</Link>
                    </ul>
                </section>

                {/* More From Dubai */}
                {/* <section className="flex flex-col space-y-4 justify-start items-start">
                    <p className={`text-center text-[1.375rem] font-medium  whitespace-nowrap`}>More from Dutiful</p>
                    <ul className="">
                        <Link href="/jobs" className='hover:text-green-500 duration-300'>Royal Stone jobs</Link>
                    </ul>
                </section> */}
            </nav>

            <div className='flex flex-col border-t border-b border-green-700 gap-12 pt-16 pb-8 lg:mx-12 lg:gap-[20rem] lg:flex-row xl:gap-[30rem]'>
            {/* Socials Section */}
                <section className="flex flex-col ">
                    <nav className="flex flex-col gap-4 lg:flex-row">
                        <p className='font-medium whitespace-nowrap'>Follow us</p>
                        <ul className="flex space-x-8 ">
                            <li><a href="" className="text-2xl hover:text-green-500 duration-300"><FaFacebookF/></a></li>
                            <li><a href="" className="text-2xl hover:text-green-500 duration-300"><PiInstagramLogoThin/></a></li>
                            <li><a href="" className="text-2xl hover:text-green-500 duration-300"><FaXTwitter/></a></li>
                            <li><a href="" className="text-2xl hover:text-green-500 duration-300"><FaYoutube/></a></li>
                            <li><a href="" className="text-2xl hover:text-green-500 duration-300"><PiLinkedinLogoFill/></a></li>
                           
                        </ul>
                    </nav>
                </section>

            {/*Download section*/}
                <section className="flex flex-col">
                    <nav className="flex flex-col gap-6 lg:flex-row">
                    <p className='font-medium whitespace-nowrap'>Download the app</p>
                        <ul className="flex space-x-6">
                            <li><a href="" className="text-2xl hover:text-green-500 duration-300"><FaApple/></a></li>
                            <li><a href="" className="text-2xl hover:text-green-500 duration-300"><FaGooglePlay/></a></li>
                        </ul>
                    </nav>
                </section>
            </div>
             
            {/* Copyright Section */}
            <div className='flex flex-col justify-center items-center gap-24 my-12 lg:flex-row self-center'>
                <p>©  2024 Royal Stone®</p>
               
            </div>
        </footer>
    )
}