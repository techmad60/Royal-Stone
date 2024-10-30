"use client"
import { useState } from "react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { montsy, poppins } from "../fonts/fonts";
import DownloadApp from "@/components/ui/DownloadApp";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export default function Faqs() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "How can I contact royal Stone?",
            answer: "You can contact us via our WhatsApp number or email address",
        },
        {
            question: "How can I contact royal Stone?",
            answer: "You can contact us via our WhatsApp number or email address",
        },
        {
            question: "How can I contact royal Stone?",
            answer: "You can contact us via our WhatsApp number or email address",
        },
        {
            question: "How can I contact royal Stone?",
            answer: "You can contact us via our WhatsApp number or email address",
        },
        {
            question: "How can I contact royal Stone?",
            answer: "You can contact us via our WhatsApp number or email address",
        },
        {
            question: "How can I contact royal Stone?",
            answer: "You can contact us via our WhatsApp number or email address",
        },
        {
            question: "How can I contact royal Stone?",
            answer: "You can contact us via our WhatsApp number or email address",
        },
        {
            question: "How can I contact royal Stone?",
            answer: "You can contact us via our WhatsApp number or email address",
        },
        {
            question: "How can I contact royal Stone?",
            answer: "You can contact us via our WhatsApp number or email address",
        },
        {
            question: "How can I contact royal Stone?",
            answer: "You can contact us via our WhatsApp number or email address",
        },
        // Additional FAQ items here
    ];

    return (
        <div className={`${montsy.className} flex flex-col`}>
            <Header/>
            <main className="flex flex-col justify-center items-center">
                <section className="flex flex-col justify-center items-center text-center mt-8 ">
                    <h1 className={`${poppins.className} text-color-zero font-semibold px-12 text-xl my-4 lg:text-4xl`}>Frequently Asked Questions</h1>
                    <p className="font-light text-sm text-color-zero text-center leading-4 lg:text-xl my-4 w-[300px] sm:w-[400px] lg:w-[600px] xl:w-[557px]">Anything you need to know about Royal Stone?</p>
                </section>

                <section className="flex flex-col justify-center items-center py-16 bg-white w-full my-12">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {faqs.map((faq, index) => (
                            <section 
                                key={index} 
                                className="flex flex-col bg-color-three p-8 shadow-md w-[300px] justify-start items-start self-start"
                                onClick={() => toggleAccordion(index)}
                            >
                                <div className="flex justify-between items-start w-full cursor-pointer">
                                    <h3 className={`font-semibold text-color-zero ${poppins.className} text-sm pr-4`}>
                                        {faq.question}
                                    </h3>
                                    {openIndex === index ? (
                                        <IoIosArrowUp className="flex-shrink-0" />
                                    ) : (
                                        <IoIosArrowDown className="flex-shrink-0" />
                                    )}
                                </div>
                                {openIndex === index && (
                                    <p className="font-light text-sm text-color-zero leading-4 my-2 lg:text-start transition-all duration-300">
                                        {faq.answer}
                                    </p>
                                )}
                            </section>
                        ))}
                    </div>
                </section>
                <section className="flex flex-col justify-center items-center bg-color-two py-16">
                    <DownloadApp />
                </section>
            </main>
            <Footer/>
        </div>
    );
}
