// Main Component
import Image from "next/image";
import { poppins } from "../../app/fonts/fonts";
import AppStoreButton from "../ui/AppStoreButton";
import GooglePlayButton from "../ui/GooglePlayButton";
import DownloadApp from "../ui/DownloadApp";
export default function Main () {
    return (
        <main className="">
         {/* Hero Section */}
         <section className="flex flex-col items-center justify-center text-center py-8  lg:text-start lg:flex-row lg:px-16 lg:py-[4rem] lg:gap-16 m-auto xl:gap-28">
          {/* Text and Button Section */}
           <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
                <h1 className={`text-color-zero font-semibold px-12 text-xl my-4 lg:px-0 lg:text-4xl lg:w-[29.4375rem] ${poppins.className}`}>
                Accumsan urna quis at fau cibus magna Facilisi.
                </h1>
                {/* Responsive Hero Image */}
                <Image 
                src="/images/hero-img.svg" 
                alt="Hero Image"
                className="my-4 lg:hidden" 
                width={180} 
                height={126.37} 
                />

                <p className="text-sm text-color-zero px-8 py-4 sm:px-28 md:px-32 lg:px-0 lg:w-[425px] lg:text-xl xl:w-[559px]">
                Proin quam varius facilisis urna. Viverra at vitae lacus at ut volutpat. Amet commodo venenatis in congue. Sit eget nullam nunc neque nulla venenatis. Felis ornare nulla eros dolor viverra quis odio or
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <AppStoreButton textColor="text-white" backgroundColor="bg-color-four"/>
                    <GooglePlayButton textColor="text-white" backgroundColor="bg-color-four"/>
                </div>
            </div>

            {/* Large Screen Hero Image */}
            <div className="hidden lg:flex">
                <Image 
                src="/images/hero-img.svg"
                alt="Hero Image"
                width={500}
                height={56}
                />
            </div>
        </section>
        
        {/* Our Services Section */}
        <section className="flex flex-col justify-center items-center py-16 bg-white">
            <div className="flex flex-col justify-center items-center my-8">
                <h2 className={`text-color-zero text-xl font-semibold lg:text-3xl ${poppins.className}`}>Our Services</h2>
                <p className="font-light text-sm text-color-zero text-center leading-4 lg:text-xl my-4 w-[300px] sm:w-[400px] lg:w-[600px] xl:w-[557px]">Proin quam varius facilisis urna. Viverra at vitae lacus at ut volutpat. Amet commodo venenatis in congue. Sit eget nullam nunc neque nulla venenatis. Felis ornare nulla eros dolor viverra quis odio or</p>
            </div>

            <section className="flex flex-col justify-center items-end p-4 md:flex-row gap-8 lg:p-0 lg:gap-12 xl:gap-32">
                <Image 
                src={"/images/dashboard.svg"}
                alt="App Dashboard"
                className="sm:w-[350px] lg:w-[450px] xl:w-[592.87px] self-center"
                width={200}
                height={185.28}
                />
                <div className="flex flex-col space-y-8 justify-center items-center mt-12">
                    {/* Make an Investment */}
                    <section className="flex flex-col justify-center items-center bg-color-three p-8 rounded-lg text-center sm:w-[370px] lg:w-[450px] lg:justify-start lg:items-start">
                        <Image 
                            src={"/images/make-investment.svg"}
                            alt="Make Investment Icon"
                            width={45.36}
                            height={45.36}
                        />
                        <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
                            <h3 className={`font-semibold text-color-zero px-8 mt-4 lg:px-0 lg:text-lg ${poppins.className}`}>Make an Investment</h3>
                            <p className="font-light text-sm text-color-zero leading-4 my-2 lg:text-start">Proin quam varius facilisis urna. Viverra at vitae lacus at ut volutpat. Amet commodo venenatis in congue. Sit eget nullam nunc neque nulla venenatis. Felis ornare nulla eros dolor viverra quis odio or</p>
                        </div>
                    </section>

                    {/* Create a Savings Target */}
                    <section className="flex flex-col justify-center items-center bg-color-three p-8 rounded-lg text-center sm:w-[370px] lg:w-[450px] lg:justify-start lg:items-start">
                        <Image 
                            src={"/images/make-savings.svg"}
                            alt="Make Savings Icon"
                            width={45.36}
                            height={45.36}
                        />
                        <div className="flex flex-col justify-center items-center lg:w-[350px] lg:justify-start lg:items-start">
                            <h3 className={`font-semibold text-color-zero px-8 mt-4 lg:px-0 lg:text-lg ${poppins.className}`}>Create a Savings Target</h3>
                            <p className="font-light text-sm text-color-zero leading-4 my-2 lg:text-start">Proin quam varius facilisis urna. Viverra at vitae lacus at ut volutpat. Amet commodo venenatis in congue. Sit eget nullam nunc neque nulla venenatis. Felis ornare nulla eros dolor viverra quis odio or</p>
                        </div>
                    </section>

                    {/* Invest In Stocks */}
                    <section className="flex flex-col justify-center items-center bg-color-three px-8 rounded-lg text-center sm:w-[370px] lg:w-[450px] lg:justify-start lg:items-start">
                        <Image 
                            src={"/images/buy-stocks.svg"}
                            alt="Invest In Stocks Icon"
                            width={45.36}
                            height={45.36}
                        />
                        <div className="flex flex-col justify-center items-center lg:w-[350px] lg:justify-start lg:items-start">
                            <h3 className={`font-semibold text-color-zero px-8 mt-4 lg:px-0 lg:text-lg ${poppins.className}`}>Invest In Stocks</h3>
                            <p className="font-light text-sm text-color-zero leading-4 my-2 lg:text-start">Proin quam varius facilisis urna. Viverra at vitae lacus at ut volutpat. Amet commodo venenatis in congue. Sit eget nullam nunc neque nulla venenatis. Felis ornare nulla eros dolor viverra quis odio or</p>
                        </div>
                    </section>
                </div>
            </section>
        </section>

        {/*How to get started Section*/}
        <section className="flex flex-col justify-center items-center bg-color-two py-16">
            <div className="flex flex-col justify-center items-center">
                <h2 className={`text-color-zero text-xl font-semibold lg:text-3xl ${poppins.className}`}>How To Get Started</h2>
            </div>

            <section className="flex flex-col justify-center items-center p-4 mt-8 md:flex-row-reverse md:mt-20  gap-8 lg:p-0 lg:gap-12 xl:gap-32">
                <Image 
                    src={"/images/fund-wallet.svg"}
                    alt="App Dashboard"
                    className="sm:w-[350px] lg:w-[450px] xl:w-[592.87px] self-center"
                    width={200}
                    height={185.28}
                />

                <div className="flex flex-col space-y-20 justify-center items-center mt-12">

                    {/* Download Mobile App */}
                    <section className="flex justify-start items-start px-8 rounded-lg text-center gap-4 sm:w-[370px] lg:w-[450px]">
                        <div className="relative">
                            <Image 
                                src={"/images/download-ma.svg"}
                                alt="Download Mobile App Icon"
                                width={150}
                                height={150}
                                className="icon"
                            />
                            <div className="absolute transform -translate-x-1/ h-[350px] w-[1px] left-[20px] bg-gray-200 md:left-[22px] lg:left-[30px]"></div>
                        </div>
                        
                        <div className="flex flex-col justify-start items-start">
                            <h3 className={`font-semibold text-color-zero mt-3 ${poppins.className}`}>Download the Mobile App</h3>
                            <p className="font-light text-sm text-color-zero leading-4 my-2 text-start">Proin quam varius facilisis urna. Viverra at vitae lacus at ut volutpat. Amet commodo venenatis in congue.</p>
                        </div>
                    </section>

                    {/* Create an Account */}
                    <section className="flex justify-start items-start px-8 rounded-lg text-center gap-4 sm:w-[370px] lg:w-[450px]">
                        <div className="relative">
                            <Image 
                                src={"/images/create-account.svg"}
                                alt="Create Account Icon"
                                width={150}
                                height={150}
                                className="icon"
                            />
                        
                        </div>
                        
                        <div className="flex flex-col justify-start items-start">
                            <h3 className={`font-semibold text-color-zero mt-3 ${poppins.className}`}>Create an Account</h3>
                            <p className="font-light text-sm text-color-zero leading-4 my-2 text-start">Proin quam varius facilisis urna. Viverra at vitae lacus at ut volutpat. Amet commodo venenatis in congue.</p>
                        </div>
                    </section>

                    {/* Make your first transaction */}
                    <section className="flex justify-start items-start px-8 rounded-lg text-center gap-4 sm:w-[370px] lg:w-[450px]">
                        <div className="relative">
                            <Image 
                                src={"/images/first-transaction.svg"}
                                alt="First Transaction Icon"
                                width={150}
                                height={150}
                            />
                        </div>
                        
                        <div className="flex flex-col justify-start items-start">
                            <h3 className={`font-semibold text-color-zero text-start mt-3 ${poppins.className}`}>Make your First Transaction</h3>
                            <p className="font-light text-sm text-color-zero leading-4 my-2 text-start">Proin quam varius facilisis urna. Viverra at vitae lacus at ut volutpat. Amet commodo venenatis in congue.</p>
                        </div>
                    </section>
                </div> 
            </section>
        </section>

        {/*Why Royal Stone Is The Best*/}
        <section className="flex flex-col justify-center items-center bg-white xl:px-16">
           
            <section className="flex flex-col justify-center items-center p-4 py-12 gap-8 lg:py-12 lg:grid lg:grid-cols-2 lg:p-0 xl:gap-24">
                <div className="flex flex-col justify-center items-center">
                    <h2 className={`text-color-zero text-xl font-semibold lg:text-3xl ${poppins.className}`}>Why Royal Stone Is The Best</h2>
                    <p className="font-light text-sm text-color-zero text-center leading-4 lg:text-xl my-4 w-[300px] sm:w-[400px] lg:w-[450px] xl:w-[557px]">Proin quam varius facilisis urna. Viverra at vitae lacus at ut volutpat. Amet commodo venenatis in congue. Sit eget nullam nunc neque nulla venenatis. Felis ornare nulla eros dolor viverra quis odio or</p>
                </div>

                <div className="flex flex-col space-y-4 justify-center items-center md:grid grid-cols-2 md:gap-6 md:space-y-0 lg:gap-4 xl:gap-8">

                    {/* Fast Transactions */}
                    <section className="flex flex-col justify-center items-center bg-color-three p-5 border  rounded-lg text-center shadow-md w-[220px] lg:w-auto xl:p-8">
                        <Image 
                            src={"/images/fast-transaction.svg"}
                            alt="Fast Transactions Icon"
                            width={45.36}
                            height={45.36}
                            className="icon"
                        />
                        
                        <p className="font-semibold text-lg text-color-zero leading-4 my-4">Fast Transactions</p>
                    </section>

                    {/* Easy Configuration */}
                    <section className="flex flex-col justify-center items-center bg-color-three p-5 border  rounded-lg text-center shadow-md w-[220px] lg:w-auto xl:p-8">
                        <Image 
                            src={"/images/easy-config.svg"}
                            alt="Easy Configuration Icon"
                            width={45.36}
                            height={45.36}
                            className="icon"
                        />
                        
                        <p className="font-semibold text-lg text-color-zero leading-4 my-4 whitespace-nowrap">Easy Configuration</p>
                    </section>

                    {/* Secure Platform */}
                    <section className="flex flex-col justify-center items-center bg-color-three p-5 border  rounded-lg text-center shadow-md w-[220px] lg:w-auto xl:p-8">
                        <Image 
                            src={"/images/secure-platform.svg"}
                            alt="Secure Platform Icon"
                            width={45.36}
                            height={45.36}
                            className="icon"
                        />
                        
                        <p className="font-semibold text-lg text-color-zero leading-4 my-4">Secure Platform</p>
                    </section>

                    {/* Easy to Use */}
                    <section className="flex flex-col justify-center items-center bg-color-three p-5 border  rounded-lg text-center shadow-md w-[220px] lg:w-auto xl:p-8">
                        <Image 
                            src={"/images/easy-use.svg"}
                            alt="Easy to Use Icon"
                            width={45.36}
                            height={45.36}
                            className="icon"
                        />
                        
                        <p className="font-semibold text-lg text-color-zero leading-4 my-4">Easy to Use</p>
                    </section>
                </div> 
            </section>
        </section>

        {/*Our Latest Products Section*/}
        <section className="flex flex-col justify-center items-center bg-color-two py-16">
            <div className="flex flex-col justify-center items-center">
                <h2 className={`text-color-zero text-xl font-semibold lg:text-3xl ${poppins.className}`}>
                    Our Latest Products
                </h2>
            </div>
            
            <div className="flex gap-4 px-4 mt-12 lg:px-16 overflow-x-scroll">
                {/* Product one */}
                <section className="flex flex-col justify-start items-start flex-shrink-0">
                    <Image 
                        src={"/images/potato.svg"}
                        alt="Potato Image"
                        className="lg:w-[300px]"
                        width={200}
                        height={185.28}
                    />

                    <div className="flex flex-col justify-start items-start mt-2">    
                        <div className="flex flex-col justify-start items-start">
                            <p className="font-semibold text-sm text-color-zero leading-4 my-2 text-start">Sweet Potatoes</p>
                            <p>500 Units. <span className="text-green-700">Available</span></p>
                        </div>
                    </div> 
                </section>

                {/* Product two */}
                <section className="flex flex-col justify-start items-start flex-shrink-0">
                    <Image 
                        src={"/images/potato.svg"}
                        alt="Potato Image"
                        className="lg:w-[300px]"
                        width={200}
                        height={185.28}
                    />

                    <div className="flex flex-col justify-start items-start mt-2">    
                        <div className="flex flex-col justify-start items-start">
                            <p className="font-semibold text-sm text-color-zero leading-4 my-2 text-start">Sweet Potatoes</p>
                            <p>500 Units. <span className="text-green-700">Available</span></p>
                        </div>
                    </div> 
                </section>

                {/* Product three */}
                <section className="flex flex-col justify-start items-start flex-shrink-0">
                    <Image 
                        src={"/images/potato.svg"}
                        alt="Potato Image"
                        className="lg:w-[300px]"
                        width={200}
                        height={185.28}
                    />

                    <div className="flex flex-col justify-start items-start mt-2">    
                        <div className="flex flex-col justify-start items-start">
                            <p className="font-semibold text-sm text-color-zero leading-4 my-2 text-start">Sweet Potatoes</p>
                            <p>500 Units. <span className="text-green-700">Available</span></p>
                        </div>
                    </div> 
                </section>

                {/* Product four */}
                <section className="flex flex-col justify-start items-start flex-shrink-0">
                    <Image 
                        src={"/images/potato.svg"}
                        alt="Potato Image"
                        className="lg:w-[300px]"
                        width={200}
                        height={185.28}
                    />

                    <div className="flex flex-col justify-start items-start mt-2">    
                        <div className="flex flex-col justify-start items-start">
                            <p className="font-semibold text-sm text-color-zero leading-4 my-2 text-start">Sweet Potatoes</p>
                            <p>500 Units. <span className="text-green-700">Available</span></p>
                        </div>
                    </div> 
                </section>
            </div>
        </section>

        <section className="flex flex-col justify-center items-center bg-color-two py-16">
            <DownloadApp />
        </section>
      </main>
    )
}