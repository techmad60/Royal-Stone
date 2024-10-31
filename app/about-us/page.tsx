//app/about-us/page.tsx
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Image from "next/image";
import DownloadApp from "@/components/ui/DownloadApp";


export default function AboutUs() {
    return (
        <div className={` flex flex-col`}>
            <Header/>
            <main>
                {/* Hero Section */}
                <section className="flex flex-col items-center justify-center text-center pt-24 lg:text-start lg:flex-row lg:px-36 lg:pt-[4rem] lg:gap-4 xl:gap-6 m-auto xl:px-96">
                {/* Text and Button Section */}
                    <div className="flex flex-col justify-start items-start text-start px-4 space-y-6 lg:px-0">
                        <h1 className={`text-color-zero leading-[34.72px] font-extrabold text-[28px] lg:text-[39px] lg:leading-[48.36px]`}>
                        Who we are
                        </h1>
                        <p className="text-sm w-[345px] font-normal text-colour-five lg:px-0 lg:w-[475px] lg:leading-[28px] lg:text-base xl:w-[567px]">
                        Vivamus in turpis leo nisi. Dictum in non eros potenti. Nulla senectus tincidunt gravida vel lectus. Aenean elit amet semper lacinia arcu id massa. Purus ut turpis nisl aliquam tellus. Vel ridiculus tristique ornare tristique. Risus enim imperdiet accumsan cras sit mauris. At et amet integer in eget suspendisse. Dictum aliquet nunc morbi tristique nec. Ut ultricies porta arcu nam sed. Nulla ac nunc nec natoque velit egestas. Posuere mattis pellentesque ut nisi lectus ultrices risus mauris sem. Eget parturient sit tristique nulla eget la </p>
                    </div>

                    {/*Hero Image */}
                    <Image 
                    src="/images/about-hero-img.svg"
                    alt="About Hero Image"
                    width={345}
                    height={437.36}
                    className="lg:w-[400px] xl:w-[592px] xl:h-[554px] mt-8"
                    />
                </section>

                {/*Our Story Section */}
                <section className="flex flex-col items-center justify-center text-center bg-white pt-12 lg:text-start lg:flex-row-reverse lg:px-36 lg:pt-[4rem] lg:gap-16 xl:gap-44 m-auto xl:px-96">
                {/* Text and Button Section */}
                    <div className="flex flex-col justify-start items-start text-start px-4 space-y-6 lg:px-0">
                        <h1 className={`text-color-zero leading-[34.72px] font-extrabold text-[28px]`}>
                        Our Story
                        </h1>
                        <p className="text-sm w-[345px] font-normal text-colour-five lg:px-0 lg:w-[490px] lg:leading-[28px] lg:text-base xl:w-[663px]">
                        Vivamus in turpis leo nisi. Dictum in non eros potenti. Nulla senectus tincidunt gravida vel lectus. Aenean elit amet semper lacinia arcu id massa. Purus ut turpis nisl aliquam tellus. Vel ridiculus tristique ornare tristique. Risus enim imperdiet accumsan cras sit mauris. At et amet integer in eget suspendisse. Dictum aliquet nunc morbi tristique nec. Ut ultricies porta arcu nam sed. Nulla ac nunc nec natoque velit egestas. Posuere mattis pellentesque ut nisi lectus ultrices risus mauris sem. Eget parturient sit tristique nulla eget lacus imperdiet adipiscing. Commodo tortor arcu nec enim duis. Tincidunt cursus egestas nibh sollicitudin dolor accumsan. Lectus tristiqu </p>
                    </div>
                     
                    {/* Responsive Dashboard Image  */}
                    <Image 
                        src={"/images/dashboard.svg"}
                        alt="App Dashboard"
                        className="sm:w-[350px] lg:w-[472px] mt-16"
                        width={345}
                        height={430}
                    />
                </section>

                {/*Our Mission Section */}
                <section className="flex flex-col items-center justify-center text-center bg-color-two pt-12 lg:text-start lg:flex-row  lg:px-36 lg:pt-[4rem] lg:gap-12 xl:gap-32 m-auto xl:px-96">
                {/* Text and Button Section */}
                    <div className="flex flex-col justify-start items-start text-start px-4 space-y-6 lg:px-0">
                        <h1 className={`text-color-zero leading-[34.72px] font-extrabold text-[28px]`}>
                        Our Mission & Vision
                        </h1>
                        <p className="text-sm w-[345px] font-normal text-colour-five lg:px-0 lg:w-[460px] lg:leading-[28px] lg:text-base xl:w-[663px]">
                        Vivamus in turpis leo nisi. Dictum in non eros potenti. Nulla senectus tincidunt gravida vel lectus. Aenean elit amet semper lacinia arcu id massa. Purus ut turpis nisl aliquam tellus. Vel ridiculus tristique ornare tristique. Risus enim imperdiet accumsan cras sit mauris. At et amet integer in eget suspendisse. Dictum aliquet nunc morbi tristique nec. Ut ultricies porta arcu nam sed. Nulla ac nunc nec natoque velit egestas. Posuere mattis pellentesque ut nisi lectus ultrices risus mauris sem. Eget parturient sit tristique nulla eget lacus imperdiet adipiscing. Commodo tortor arcu nec enim duis. Tincidunt cursus egestas nibh sollicitudin dolor accumsan. Lectus tristiqu</p>
                    </div>
                     
                    {/* Responsive Fund Wallet Image  */}
                    <Image 
                        src={"/images/fund-wallet.svg"}
                        alt="Fund wallet Image"
                        className="sm:w-[345px] lg:w-[390px] mt-16"
                        width={345}
                        height={430}
                    />
                </section>
                
                <DownloadApp />
                
            </main>
            <Footer/>
        </div>
    )
}