// Main Component
import Image from "next/image";
import { poppins } from "../../app/fonts/fonts";
import AppStoreButton from "../ui/AppStoreButton";
import GooglePlayButton from "../ui/GooglePlayButton";
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
                    <AppStoreButton />
                    <GooglePlayButton />
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
        <section className="flex flex-col justify-center items-center my-16 bg-white">
            <div className="flex flex-col justify-center items-center my-8">
                <h2 className={`text-color-zero text-xl font-semibold lg:text-3xl ${poppins.className}`}>Our Services</h2>
                <p className="font-light text-sm text-color-zero text-center leading-4 lg:text-xl my-4 w-[300px] sm:w-[400px] lg:w-[600px] xl:w-[557px]">Proin quam varius facilisis urna. Viverra at vitae lacus at ut volutpat. Amet commodo venenatis in congue. Sit eget nullam nunc neque nulla venenatis. Felis ornare nulla eros dolor viverra quis odio or</p>
            </div>

            <section className="flex flex-col justify-center items-center p-4 lg:flex-row gap-8 lg:p-0 lg:gap-12 xl:gap-32">
                <Image 
                src={"/images/dashboard.svg"}
                alt="App Dashboard"
                className="sm:w-[350px] lg:w-[450px] xl:w-[592.87px]"
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
                    <section className="flex flex-col justify-center items-center bg-color-three p-8 rounded-lg text-center sm:w-[370px] lg:w-[450px] lg:justify-start lg:items-start">
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
          
          {/* Get Discovered */}
          {/* <section className="flex flex-col justify-center items-center">
            <Image 
              src={"/images/feature-2.svg"}
              alt="Illustration"
              className="lg:w-[900px] xl:w-[1200px]"
              width={200}
              height={185.28}
            />
          </section> */}

         {/* Accept and sell appointments */}
         {/* <section className="flex flex-col justify-center items-center sm:flex-row gap-12 my-8 lg:gap-2 xl:gap-32">
            <Image 
              src={"/images/features-3.svg"}
              alt="Illustration"
              className="lg:w-[450px] xl:w-[521px]"
              width={200}
              height={185.28}
            />
            <div className="flex flex-col justify-center items-center text-center lg:text-start lg:items-start">
              <h2 className={`font-semibold text-color-two lg:text-4xl`}>Accept and sell appointments</h2>
              <p className="font-light text-sm text-color-one w-[16.875625rem] leading-4 my-2 lg:text-xl lg:w-[450px] xl:w-[557px]">Let customers book their own appointment or consultation. Start accepting payments for appointments through your booking page.</p>
            </div>
          </section> */}
        </section>
      </main>
    )
}