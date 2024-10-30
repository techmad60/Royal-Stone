//app/contact-us/page.tsx
import Image from "next/image";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { montsy, poppins } from "../fonts/fonts";
import FormButton from "@/components/ui/FormButton";
import DownloadApp from "@/components/ui/DownloadApp";
export default function ContactUs() {
    return (
        <div className={`${montsy.className} flex flex-col`}>
            <Header/>
            <main className="flex flex-col justify-center items-center">
                <section className="text-center mt-8">
                    <h1 className={`${poppins.className}text-color-zero font-semibold px-12 text-xl my-4 lg:px-0 lg:text-4xl`}>Contact Us</h1>
                    <p className="font-light text-sm text-color-zero text-center leading-4 lg:text-xl my-4 w-[300px] sm:w-[400px] lg:w-[600px] xl:w-[557px]">Need our help? Feel free to reach out to us</p>
                </section>

                {/*Contact Us Section */}
                <section className="flex flex-col justify-center items-center py-16 bg-white w-full my-12">
                    <div className="flex flex-col gap-6 lg:flex-row">
                        {/* Chat on Whatsapp */}
                        <section className="flex flex-col justify-center items-center bg-color-three p-8 shadow-md rounded-lg text-center sm:w-[300px] lg:justify-start lg:items-start">
                            <Image 
                                src={"/images/whatsapp-icon.svg"}
                                alt="Whats App Icon"
                                width={45.36}
                                height={45.36}
                            />
                            <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
                                <h3 className={`font-semibold text-color-zero mt-4 lg:text-lg whitespace-nowrap ${poppins.className}`}>Chat with Us on Whatsapp</h3>
                                <a href="tel:+2349010201223" className="font-light hover:text-green-500 duration-300 text-sm text-color-zero leading-4 my-2 lg:text-start">09010201223</a>
                            </div>
                        </section>
                        

                        {/* Call us over the Phone */}     
                        <section className="flex flex-col justify-center items-center bg-color-three p-8 shadow-md rounded-lg text-center sm:w-[300px] lg:justify-start lg:items-start">
                            <Image 
                                src={"/images/phone-icon.svg"}
                                alt="Phone Icon"
                                width={45.36}
                                height={45.36}
                            />
                            <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
                                <h3 className={`font-semibold text-color-zero mt-4 lg:text-lg ${poppins.className}`}>Call us over the Phone</h3>
                                <a href="tel:+2349010201223" className="font-light hover:text-green-500 duration-300 text-sm text-color-zero leading-4 my-2 lg:text-start">09010201223</a>
                            </div>
                        </section>
                    
                        {/* Send us a Mail */}
                        <section className="flex flex-col justify-center items-center bg-color-three p-8 shadow-md rounded-lg text-center sm:w-[300px] lg:justify-start lg:items-start">
                            <Image 
                                src={"/images/mail-icon.svg"}
                                alt="Mail Icon"
                                width={45.36}
                                height={45.36}
                            />
                            <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
                                <h3 className={`font-semibold text-color-zero mt-4 lg:text-lg ${poppins.className}`}>Send us a Mail</h3>
                                <a href="mailto:Support@royalstone.com" className="font-light hover:text-green-500 duration-300 text-sm text-color-zero leading-4 my-2 lg:text-start">Support@royalstone.com</a>
                            </div>
                        </section> 
                    </div>

                    {/* Contact Us Form*/}
                    <section className="w-full max-w-[486px]">
                        <h2 className={`text-color-zero text-xl text-center font-semibold lg:text-3xl mt-16 ${poppins.className}`}>Want to fill a form?</h2>
                        <form  className={`flex flex-col justify-center px-6 mt-12 mb-6 space-y-8`}>
                            {/* Name */}
                            <div className="flex flex-col gap-2">
                                <label className="text-color-zero">Full Name</label>
                                <input 
                                type="name" 
                                name="name" 
                                required 
                                autoFocus 
                                className="rounded-sm border h-[56px] border-color-zero bg-color-ten p-2"/>
                            </div>
                            
                            {/* Phone Number */}
                            <div className="flex flex-col gap-2">
                                <label className="text-color-zero">Phone Number</label>
                                <input 
                                type="tel" 
                                required 
                                autoFocus 
                                className="rounded-sm border h-[56px] border-color-zero bg-color-ten p-2"/>
                            </div>
                            
                            {/* Email */}
                            <div className="flex flex-col gap-2">
                                <label className="text-color-five">Email</label>
                                <input 
                                type="email" 
                                name="email" 
                                required 
                                autoFocus 
                                className="rounded-sm border h-[56px] border-color-zero bg-color-ten p-2"/>
                            </div>

                            {/* Message */}
                            <div className="flex flex-col gap-2">
                                <label className="text-color-zero">Message</label>
                                <textarea 
                                name="message" 
                                rows={5} 
                                required 
                                className="rounded-sm border border-color-zero bg-color-ten p-2 w-full"
                                placeholder="Write your message here..."
                                ></textarea>
                            </div>
                            <FormButton ButtonText="Send Message"/>
                        </form>
                    </section>
                </section>
                <section className="flex flex-col justify-center items-center bg-color-two py-16">
                    <DownloadApp />
                </section>
            </main>
            <Footer/>
        </div>
    )
}