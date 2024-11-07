
import Image from "next/image";
import TextToggle from "@/components/ui/TextToggle";
import StatRow from "@/components/ui/StatRow";
import StockNavigator from "@/components/stocks/StockNavigator";
import Button from "@/components/ui/Button";
export default function StockDetails () {
    return (
        <div>
            <StockNavigator currentStep={1} />
            <div className="flex flex-col gap-4 h-screen lg:grid grid-cols-2 lg:pr-8 lg:mt-12 lg:gap-12 xl:gap-24">   
                <section className="">
                    <div className="flex items-center gap-2 mt-12 lg:mt-0">
                        <Image src={"/images/stocks/spotify.svg"} width={47} height={47} alt="spotify logo"/>
                        <div>
                            <p className="text-base text-colour-five font-semibold">Spotify Technology SA</p>
                            <p className="text-xs text-[#6B738599]">SPOT</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between border-b py-4 lg:mx-8">
                        <p className="text-color-one font-medium lg:text-[20px] lg:font-bold">+2.21%</p>
                        <p className="text-color-six font-medium lg:text-[20px] lg:font-bold">$290.19</p>
                    </div>
                    <div className="lg:mx-8">
                        <TextToggle />
                    </div>
                </section>
                <div className="h-screen flex flex-col">
                    <section className="flex flex-col bg-light-grey rounded-[10px] px-4 shadow-sm">
                        <StatRow label="Price per units" value="$300.67" valueClass="text-color-six text-sm" />
                        <StatRow label="Naira Conversion" value="N481,072" valueClass="text-color-six text-sm" />
                        <StatRow label="Minimum Units" value="0.001" valueClass="text-color-six text-sm" isLast={true}/>
                    </section>
                    <Button ButtonText="Trade Stock" className="w-full self-end justify-self-end mt-auto lg:mt-4" />
                </div>
            </div>
        </div>
        
    )
}