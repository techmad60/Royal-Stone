// Main Component
import Image from "next/image";
import AppStoreButton from "../ui/AppStoreButton";
import GooglePlayButton from "../ui/GooglePlayButton";
import DownloadApp from "../ui/DownloadApp";
export default function Main () {
    return (
        <main className="z-10">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center text-center pt-20 lg:text-start lg:flex-row lg:px-36 lg:py-[4rem] lg:gap-4 xl:gap-0 m-auto xl:px-96">
               {/* Text and Button Section */}
                <div className="flex flex-col justify-start items-start text-start px-4 space-y-6 lg:px-0">
                    <h1 className={`text-color-zero leading-[34.72px] font-extrabold text-[28px] w-[347px] lg:px-0 lg:text-[39px] lg:w-[500px] lg:leading-[48.36px] xl:w-[520px]`}>
                    Accumsan urna quis at fau cibus magna Facilisi.
                    </h1>
                    <p className="text-sm w-[345px] font-normal text-colour-five lg:px-0 lg:w-[425px] lg:leading-[28px] lg:text-base xl:w-[644px]">
                    Proin quam varius facilisis urna. Viverra at vitae lacus at ut volutpat. Amet commodo venenatis in congue. Sit eget nullam nunc neque nulla venenatis. Felis ornare nulla eros dolor viverra quis odio or
                    </p>
                    <div className="flex gap-4 pt-6">
                        <AppStoreButton textColor="text-white" backgroundColor="bg-color-four"/>
                        <GooglePlayButton textColor="text-white" backgroundColor="bg-color-four"/>
                    </div>
                </div>

                {/*Hero Image */}
                <Image 
                src="/images/hero-img.svg"
                alt="Hero Image"
                width={345}
                height={437.36}
                className="lg:w-[400px] xl:w-[579px] xl:h-[734px] mt-8"
                />
            </section>
        
            {/* Our Services Section */}
            <section className="flex flex-col justify-start items-start bg-white py-12 px-4 sm:justify-center sm:items-center lg:flex-row lg:gap-8 xl:gap-12 xl:pb-0">
                <div className="flex flex-col justify-center">
                    <div className="flex flex-col justify-start items-start">
                        <h2 className={`text-color-zero text-[22px] font-extrabold whitespace-nowrap lg:text-lg-base`}>Our Services</h2>
                        <p className="text-sm text-colour-five leading-base w-[345px] my-2 text-start sm:w-[400px] lg:text-base xl:w-[482px]">Proin quam varius facilisis urna. Viverra at vitae lacus at ut volutpat. Amet commodo venenatis in congue. Sit eget nullam nunc neque nulla venenatis. Felis ornare nulla eros dolor viverra quis odio or</p>
                    </div>
                    <Image 
                        src={"/images/dashboard.svg"}
                        alt="App Dashboard"
                        className="mt-20 sm:w-[350px] lg:w-[472px]"
                        width={345}
                        height={430}
                    />
                </div>

                <div className="flex flex-col space-y-6 justify-center items-center mt-12 lg:mt-0 lg:border-l lg:pl-12 xl:pl-20">
                    {/* Make an Investment */}
                    <section className="flex flex-col justify-start items-start border border-slate-100 bg-color-three p-4 rounded-[25px] w-[345px] h-[275px] sm:w-[370px] xl:w-[450px]">
                        <Image 
                            src={"/images/make-investment.svg"}
                            alt="Make Investment Icon"
                            width={35.36}
                            height={35.36}
                        />
                        <div className="flex flex-col justify-start items-start">
                            <h3 className={`font-semibold text-[18px] text-color-zero mt-4`}>Make an Investment</h3>
                            <p className="text-sm leading-base text-colour-five">Proin quam varius facilisis urna. Viverra at vitae lacus at ut volutpat. Amet commodo venenatis in congue. Sit eget nullam nunc neque nulla venenatis. Felis ornare nulla eros dolor viverra quis odio or</p>
                        </div>
                    </section>

                    {/* Create a Savings Target */}
                    <section className="flex flex-col justify-start items-start border border-slate-100 bg-color-three p-4 rounded-[25px] w-[345px] h-[275px] sm:w-[370px] xl:w-[450px]">
                        <Image 
                            src={"/images/make-savings.svg"}
                            alt="Make Savings Icon"
                            width={35.36}
                            height={35.36}
                        />
                        <div className="flex flex-col justify-start items-start">
                            <h3 className={`font-semibold text-[18px] text-color-zero mt-4`}>Create a savings Target</h3>
                            <p className="text-sm leading-base text-colour-five">Proin quam varius facilisis urna. Viverra at vitae lacus at ut volutpat. Amet commodo venenatis in congue. Sit eget nullam nunc neque nulla venenatis. Felis ornare nulla eros dolor viverra quis odio or</p>
                        </div>
                    </section>

                    {/* Invest In Stocks */}
                    <section className="flex flex-col justify-start items-start border border-slate-100 bg-color-three p-4 rounded-[25px] w-[345px] h-[275px] sm:w-[370px] xl:w-[450px]">
                        <Image 
                            src={"/images/buy-stocks.svg"}
                            alt="Buy Stocks Icon"
                            width={35.36}
                            height={35.36}
                        />
                        <div className="flex flex-col justify-start items-start">
                            <h3 className={`font-semibold text-[18px] text-color-zero mt-4`}>Invest in Stocks</h3>
                            <p className="text-sm leading-base text-colour-five">Proin quam varius facilisis urna. Viverra at vitae lacus at ut volutpat. Amet commodo venenatis in congue. Sit eget nullam nunc neque nulla venenatis. Felis ornare nulla eros dolor viverra quis odio or</p>
                        </div>
                    </section>
                </div>
            </section>
            

            {/*How to get started Section*/}
            <section className="flex flex-col justify-start items-start bg-color-two py-16 lg:justify-center lg:items-start lg:flex-row lg:gap-4 lg:pb-0 xl:gap-64">
                <div className="flex flex-col justify-start items-start px-4">
                    <h2 className={`text-color-zero text-[22px] font-extrabold whitespace-nowrap lg:text-lg-base`}>How To Get Started</h2>
                    {/* Download Mobile App */}
                    <div className="flex flex-col space-y-4 mt-8 sm:space-y-12 lg:space-y-8">
                        <section className="flex justify-start items-start rounded-lg gap-4">
                            <div className="relative flex flex-col items-center flex-shrink-0">
                                <Image 
                                    src={"/images/download-ma.svg"}
                                    alt="Download Mobile App Icon"
                                    width={35.36}
                                    height={35.36}
                                    className="icon"
                                />
                                <div className="absolute mt-9 bg-gray-200 h-[255px] w-[1px]"></div>
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <h3 className={`font-semibold text-base text-color-zero lg:text-lg`}>Download the Mobile App</h3>
                                <p className="font-light text-sm text-colour-five leading-base my-2 text-start lg:w-[370px]">Proin quam varius facilisis urna. Viverra at vitae lacus at ut volutpat. Amet commodo venenatis in congue.</p>
                            </div>
                        </section>

                        {/* Create an Account */}
                        <section className="flex justify-start items-start rounded-lg gap-4">
                            <div className="relative flex flex-col flex-shrink-0">
                              <Image 
                                    src={"/images/create-account.svg"}
                                    alt="Create Account Icon"
                                    width={35.36}
                                    height={35.36}
                                    className=""
                                />
                            </div>
                            
                            <div className="flex flex-col justify-start items-start">
                                <h3 className={`font-semibold text-color-zero lg:text-lg`}>Create an Account</h3>
                                <p className="font-light text-sm text-colour-five leading-base my-2 text-start lg:w-[370px]">Proin quam varius facilisis urna. Viverra at vitae lacus at ut volutpat. Amet commodo venenatis in congue.</p>
                            </div>
                        </section>

                        {/* Make your first transaction */}
                        <section className="flex justify-start items-start rounded-lg gap-4">
                            <div className="relative flex flex-col flex-shrink-0">
                                <Image 
                                    src={"/images/first-transaction.svg"}
                                    alt="First Transaction Icon"
                                    width={35.36}
                                    height={35.36}
                                />
                            </div>
                            
                            <div className="flex flex-col justify-start items-start">
                                <h3 className={`font-semibold text-color-zero text-start mt-3 lg:text-lg`}>Make your First Transaction</h3>
                                <p className="font-light text-sm text-colour-five leading-base my-2 text-start lg:w-[370px]">Proin quam varius facilisis urna. Viverra at vitae lacus at ut volutpat. Amet commodo venenatis in congue.</p>
                            </div>
                        </section>
                    </div>     
                </div> 

                {/* Fund Wallet Mobile Image */}
                <Image 
                    src={"/images/fund-wallet-full.svg"}
                    alt="Fund-Wallet"
                    className="self-center mt-8 lg:hidden"
                    width={345}
                    height={185.28}
                />
                {/* Fund Wallet Destop Image */}
                <Image 
                    src={"/images/fund-wallet.svg"}
                    alt="Fund-Wallet"
                    className="hidden lg:flex"
                    width={472}
                    height={668}
                />
            
            </section>

            {/*Why Royal Stone Is The Best*/}
            <section className="flex flex-col justify-start items-start py-16 bg-white sm:justify-center sm:items-center">
                <section className="flex flex-col justify-start items-start px-4 sm:px-0 lg:flex-row lg:gap-8 xl:gap-40">
                    <div className="flex flex-col justify-start items-start">
                        <h2 className={`text-color-zero font-extrabold text-[22px] w-[345px] lg:text-lg-base`}>Why Royal Stone Is The Best Choice</h2>
                        <p className="text-sm text-colour-five leading-base my-4 w-[345px] xl:w-[487px]">Proin quam varius facilisis urna. Viverra at vitae lacus at ut volutpat. Amet commodo venenatis in congue</p>
                    </div>

                    <div className="flex flex-col space-y-4 justify-center items-center my-4 lg:grid lg:grid-cols-2 lg:my-0 lg:space-y-0 lg:gap-4">
                        {/* Fast Transactions */}
                        <section className="flex flex-col justify-center items-center bg-color-three p-4 border rounded-[29.34px] text-center w-[345px] h-[94px] lg:w-[257px]">
                            <Image 
                                src={"/images/fast-transaction.svg"}
                                alt="Fast Transactions Icon"
                                width={35.36}
                                height={35.36}
                                className="icon"
                            />
                            
                            <p className="font-medium text-base text-color-zero leading-4 my-4 text-center">Fast Transactions</p>
                        </section>

                        {/* Easy Configuration */}
                        <section className="flex flex-col justify-center items-center bg-color-three p-4 border rounded-[29.34px] text-center w-[345px] h-[94px] lg:w-[257px]">
                            <Image 
                                src={"/images/easy-config.svg"}
                                alt="Easy Configuration Icon"
                                width={35.36}
                                height={35.36}
                                className="icon"
                            />
                            
                            <p className="font-medium text-base text-color-zero leading-4 my-4 text-center">Easy Configuration</p>
                        </section>

                        {/* Secure Platform */}
                        <section className="flex flex-col justify-center items-center bg-color-three p-4 border rounded-[29.34px] text-center w-[345px] h-[94px] lg:w-[257px]">
                            <Image 
                                src={"/images/secure-platform.svg"}
                                alt="Secure Platform Icon"
                                width={35.36}
                                height={35.36}
                                className="icon"
                            />
                            
                            <p className="font-medium text-base text-color-zero leading-4 my-4 text-center">Secure Platform</p>
                        </section>

                        {/* Easy to Use */}
                        <section className="flex flex-col justify-center items-center bg-color-three p-4 border rounded-[29.34px] text-center w-[345px] h-[94px] lg:w-[257px]">
                            <Image 
                                src={"/images/easy-use.svg"}
                                alt="Easy to Use Icon"
                                width={35.36}
                                height={35.36}
                                className="icon"
                            />
                            
                            <p className="font-medium text-base text-color-zero leading-4 my-4 text-center">Easy To Use</p>
                        </section>
                    </div> 
                </section>
            </section>

            {/*Our Latest Products Section*/}
            <section className="flex flex-col justify-center items-center bg-color-two py-16">
                <div className="flex flex-col justify-center items-center">
                    <h2 className={`text-color-zero font-extrabold text-[22px] lg:text-lg-base`}>
                        Our Latest Investment Products
                    </h2>
                </div>
                
                <div className="flex gap-4 px-4 mt-12 lg:px-16 overflow-x-scroll">
                    {/* Product one */}
                    <section className="flex flex-col justify-start items-start flex-shrink-0">
                        <Image 
                            src={"/images/potato.svg"}
                            alt="Potato Image"
                            className="lg:w-[291px]"
                            width={252}
                            height={172}
                        />

                        <div className="flex flex-col justify-start items-start mt-2">    
                            <div className="flex flex-col justify-start items-start">
                                <p className="font-medium text-base text-color-zero leading-4 my-2 text-start">Sweet Potatoes</p>
                                <p className="text-sm text-color-unit">500 Units. <span className="text-green-700 text-sm">Available</span></p>
                            </div>
                        </div> 
                    </section>

                    {/* Product Two */}
                    <section className="flex flex-col justify-start items-start flex-shrink-0">
                        <Image 
                            src={"/images/potato.svg"}
                            alt="Potato Image"
                            className="lg:w-[291px]"
                            width={252}
                            height={172}
                        />

                        <div className="flex flex-col justify-start items-start mt-2">    
                            <div className="flex flex-col justify-start items-start">
                                <p className="font-medium text-base text-color-zero leading-4 my-2 text-start">Sweet Potatoes</p>
                                <p className="text-sm text-color-unit">500 Units. <span className="text-green-700 text-sm">Available</span></p>
                            </div>
                        </div> 
                    </section>

                    {/* Product three */}
                    <section className="flex flex-col justify-start items-start flex-shrink-0">
                        <Image 
                            src={"/images/potato.svg"}
                            alt="Potato Image"
                            className="lg:w-[291px]"
                            width={252}
                            height={172}
                        />

                        <div className="flex flex-col justify-start items-start mt-2">    
                            <div className="flex flex-col justify-start items-start">
                                <p className="font-medium text-base text-color-zero leading-4 my-2 text-start">Sweet Potatoes</p>
                                <p className="text-sm text-color-unit">500 Units. <span className="text-green-700 text-sm">Available</span></p>
                            </div>
                        </div> 
                    </section>

                    {/* Product four */}
                    <section className="flex flex-col justify-start items-start flex-shrink-0">
                        <Image 
                            src={"/images/potato.svg"}
                            alt="Potato Image"
                            className="lg:w-[291px]"
                            width={252}
                            height={172}
                        />

                        <div className="flex flex-col justify-start items-start mt-2">    
                            <div className="flex flex-col justify-start items-start">
                                <p className="font-medium text-base text-color-zero leading-4 my-2 text-start">Sweet Potatoes</p>
                                <p className="text-sm text-color-unit">500 Units. <span className="text-green-700 text-sm">Available</span></p>
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