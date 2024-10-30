//app/about-us/page.tsx
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { montsy } from "../fonts/fonts";
import { poppins } from "../fonts/fonts";
import Image from "next/image";
import DownloadApp from "@/components/ui/DownloadApp";


export default function AboutUs() {
    return (
        <div className={`${montsy.className} flex flex-col`}>
            <Header/>
            <main>
                {/* About Us Hero Section */}
                <section className="flex flex-col items-center justify-center text-center py-8  lg:text-start lg:flex-row lg:px-16 lg:py-[4rem] lg:gap-16 m-auto xl:gap-28">
                {/* Text and Button Section */}
                    <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
                        <h1 className={`text-color-zero font-semibold px-12 text-xl my-4 lg:px-0 lg:text-4xl lg:w-[29.4375rem] ${poppins.className}`}>
                        Who We Are...
                        </h1>
                        {/* Responsive Hero Image */}
                        <Image 
                        src="/images/about-hero-img.svg" 
                        alt="About Us Hero Image"
                        className="my-4 lg:hidden" 
                        width={180} 
                        height={126.37} 
                        />

                        <p className="text-sm text-color-zero px-8 py-4 sm:px-28 md:px-32 lg:px-0 lg:w-[425px] lg:text-xl xl:w-[559px]">
                        Proin quam varius facilisis urna. Viverra at vitae lacus at ut volutpat. Amet commodo venenatis in congue. Sit eget nullam nunc neque nulla venenatis. Felis ornare nulla eros dolor viverra quis odio or
                        </p>
                    </div>

                    {/* Large Screen Hero Image */}
                    <div className="hidden lg:flex">
                        <Image 
                        src="/images/about-hero-img.svg"
                        alt="About Us Hero Image"
                        width={500}
                        height={56}
                        />
                    </div>
                </section>

                {/*Our Story Section */}
                <section className="flex flex-col bg-white items-start justify-center text-center py-8  lg:text-start lg:flex-row-reverse lg:px-16 lg:py-[4rem] lg:gap-16 m-auto xl:gap-28">
                {/* Text and Button Section */}
                    <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
                        <h1 className={`text-color-zero font-semibold px-12 text-xl my-4 lg:px-0 lg:text-4xl lg:w-[29.4375rem] ${poppins.className}`}>
                        Our Story...
                        </h1>
                        {/* Responsive Dashboard Image */}
                        <Image 
                        src="/images/dashboard.svg" 
                        alt="Dashboard Image"
                        className="my-4 lg:hidden" 
                        width={180} 
                        height={126.37} 
                        />
                        <p className="text-sm text-color-zero px-8 py-4 sm:px-28 md:px-32 lg:px-0 lg:w-[425px] lg:text-xl xl:w-[559px]">
                        Vivamus in turpis leo nisi. Dictum in non eros potenti. Nulla senectus tincidunt gravida vel lectus. Aenean elit amet semper lacinia arcu id massa. Purus ut turpis nisl aliquam tellus. Vel ridiculus tristique ornare tristique. Risus enim imperdiet accumsan cras sit mauris. At et amet integer in eget suspendisse. Dictum aliquet nunc morbi tristique nec. Ut ultricies porta arcu nam sed. Nulla ac nunc nec natoque velit egestas. Posuere mattis pellentesque ut nisi lectus ultrices risus mauris sem. Eget parturient sit tristique nulla eget lacus imperdiet adipiscing. Commodo tortor arcu nec enim duis. Tincidunt cursus egestas nibh sollicitudin dolor accumsan. Lectus tristiqu
                        </p>
                    </div>

                    {/* Large Screen Dashboard Image */}
                    <div className="hidden lg:flex">
                        <Image 
                        src="/images/dashboard.svg"
                        alt="Dashboard Image"
                        width={500}
                        height={56}
                        />
                    </div>
                </section>

                {/*Our Mission Section */}
                <section className="flex flex-col bg-color-two items-start justify-center text-center py-8  lg:text-start lg:flex-row lg:px-16 lg:py-[4rem] lg:gap-16 m-auto xl:gap-28">
                {/* Text and Button Section */}
                    <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
                        <h1 className={`text-color-zero font-semibold px-12 text-xl my-4 lg:px-0 lg:text-4xl lg:w-[29.4375rem] ${poppins.className}`}>
                        Our Mission & Vision...
                        </h1>
                        {/* Responsive Fund Wallet Image */}
                        <Image 
                        src="/images/fund-wallet.svg" 
                        alt="Fund Wallet Image"
                        className="my-4 lg:hidden" 
                        width={180} 
                        height={126.37} 
                        />
                        <p className="text-sm text-color-zero px-8 py-4 sm:px-28 md:px-32 lg:px-0 lg:w-[425px] lg:text-xl xl:w-[559px]">
                        Vivamus in turpis leo nisi. Dictum in non eros potenti. Nulla senectus tincidunt gravida vel lectus. Aenean elit amet semper lacinia arcu id massa. Purus ut turpis nisl aliquam tellus. Vel ridiculus tristique ornare tristique. Risus enim imperdiet accumsan cras sit mauris. At et amet integer in eget suspendisse. Dictum aliquet nunc morbi tristique nec. Ut ultricies porta arcu nam sed. Nulla ac nunc nec natoque velit egestas. Posuere mattis pellentesque ut nisi lectus ultrices risus mauris sem. Eget parturient sit tristique nulla eget lacus imperdiet adipiscing. Commodo tortor arcu nec enim duis. Tincidunt cursus egestas nibh sollicitudin dolor accumsan. Lectus tristiqu
                        </p>
                    </div>

                    {/* Large Screen Fund Wallet Image */}
                    <div className="hidden lg:flex">
                        <Image 
                        src="/images/fund-wallet.svg"
                        alt="Fund Wallet Image"
                        width={500}
                        height={56}
                        />
                    </div>
                </section>
                <section className="flex flex-col justify-center items-center bg-color-two py-16">
                    <DownloadApp />
                </section>
            </main>
            <Footer/>
        </div>
    )
}