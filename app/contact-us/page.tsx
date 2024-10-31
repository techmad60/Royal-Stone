//app/contact-us/page.tsx
import Image from "next/image";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import FormButton from "@/components/ui/FormButton";
import DownloadApp from "@/components/ui/DownloadApp";

export default function ContactUs() {
    return (
        <div className={`flex flex-col`}>
            <Header/>
            <main className="flex flex-col justify-center items-center">
                <section className="text-center mt-16 lg:mt-28">
                    <h1 className={`text-color-zero font-extrabold text-[28px] lg:text-[39px]`}>Contact Us</h1>
                    <p className="text-sm text-colour-five text-center">Need our help? Feel free to reach out to us</p>
                </section>

                {/*Contact Us Section */}
                <section className="flex flex-col justify-center items-center py-8 bg-white w-full my-12 md:px-16">
                    <div className="flex flex-col justify-center items-center gap-6 lg:flex-row mx-4 w-full">
                        {/* Chat on Whatsapp */}
                        <section className="flex flex-col justify-start items-start bg-color-three border p-8 rounded-[25px] w-[345px] lg:w-[285px] xl:w-[345px]">
                            <Image 
                                src={"/images/whatsapp-icon.svg"}
                                alt="Whats App Icon"
                                width={45.36}
                                height={45.36}
                            />
                            <div className="flex flex-col justify-start items-start ">
                                <h3 className={`font-semibold text-color-zero mt-4 lg:text-lg whitespace-nowrap `}>Chat with Us on Whatsapp</h3>
                                <a href="tel:+2349010201223" className="font-light hover:text-green-500 duration-300 text-sm text-color-zero leading-4 my-2 lg:text-start">09010201223</a>
                            </div>
                        </section>
                        

                        {/* Call us over the Phone */}     
                        <section className="flex flex-col justify-start items-start bg-color-three border p-8 rounded-[25px] w-[345px] lg:w-[285px] xl:w-[400px]">
                            <Image 
                                src={"/images/phone-icon.svg"}
                                alt="Phone Icon"
                                width={45.36}
                                height={45.36}
                            />
                            <div className="flex flex-col justify-start items-start ">
                                <h3 className={`font-semibold text-color-zero mt-4 lg:text-lg `}>Call us over the Phone</h3>
                                <a href="tel:+2349010201223" className="font-light hover:text-green-500 duration-300 text-sm text-color-zero leading-4 my-2 lg:text-start">09010201223</a>
                            </div>
                        </section>
                    
                        {/* Send us a Mail */}
                        <section className="flex flex-col justify-start items-start bg-color-three border p-8 rounded-[25px] w-[345px] lg:w-[285px] xl:w-[400px]">
                            <Image 
                                src={"/images/mail-icon.svg"}
                                alt="Mail Icon"
                                width={45.36}
                                height={45.36}
                            />
                            <div className="flex flex-col justify-start items-start ">
                                <h3 className={`font-semibold text-color-zero mt-4 lg:text-lg `}>Send us a Mail</h3>
                                <a href="mailto:Support@royalstone.com" className="font-light hover:text-green-500 duration-300 text-sm text-color-zero leading-4 my-2 lg:text-start">Support@royalstone.com</a>
                            </div>
                        </section> 
                    </div>

                    {/* Contact Us Form*/}
                    <section className="px-4 w-full my-4 flex flex-col lg:max-w-4xl xl:max-w-[74rem]">
                        <h2 className={`text-color-zero font-semibold text-lg mt-8 border-t border-slate-200 pt-8 lg:text-[22px]`}>Want to fill a form instead?</h2>
                        <form  className={`flex flex-col justify-between mt-4 gap-8 mb-6 md:flex-row`}>
                            <div className="flex flex-col gap-8 w-full">
                                {/* Name */}
                                <div className="flex flex-col gap-2 w-full border-b border-slate-200">
                                    <label className="text-color-form text-sm">Full Name</label>
                                    <input 
                                    type="name" 
                                    name="name" 
                                    required 
                                    className="rounded-sm  h-[40px] placeholder:text-black"
                                    placeholder="Kolawole Osindeinde"/>
                                </div>
                                
                                {/* Phone Number */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-color-form text-sm">Phone Number</label>
                                    <input 
                                    type="tel" 
                                    required 
                                    className="rounded-sm border-b border-slate-200 h-[40px] placeholder:text-black"
                                    placeholder="+234 8103763064"/>
                                </div>
                            </div>
                            
                            <div className="flex flex-col gap-8 w-full">
                                {/* Email */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-color-form text-sm">Email</label>
                                    <input 
                                    type="email" 
                                    name="email" 
                                    required 
                                    className="rounded-sm border-b border-slate-200 h-[40px] placeholder:text-black"
                                    placeholder="kola-osin@gmail.com"/>
                                </div>

                                {/* Message */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-color-form text-sm">Message</label>
                                    <textarea 
                                    name="message" 
                                    rows={2} 
                                    required 
                                    className="rounded-sm border-b border-slate-200 w-full placeholder:text-xs"
                                    placeholder=""
                                    ></textarea>
                                </div>
                            </div>
                        </form>
                        <FormButton ButtonText="Send Message"/>
                    </section>
                </section>
            </main>
            <DownloadApp />
            <Footer/>
        </div>
    )
}