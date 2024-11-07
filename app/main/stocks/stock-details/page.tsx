
import Image from "next/image";
import TextToggle from "@/components/ui/TextToggle";
import StatRow from "@/components/ui/StatRow";
import StockNavigator from "@/components/stocks/StockNavigator";
export default function StockDetails () {
    return (
        <div>
            <StockNavigator currentStep={1} />
            <section>
                <div className="flex items-center gap-2 mt-8">
                    <Image src={"/images/stocks/spotify.svg"} width={47} height={47} alt="spotify logo"/>
                    <div>
                    <p className="text-base text-colour-five font-semibold">Spotify Technology SA</p>
                        <p className="text-xs text-[#6B738599]">SPOT</p>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-color-one font-medium">+2.21%</p>
                    <p className="text-color-six font-medium">$290.19</p>
                </div>
                <TextToggle />
            </section>
            <section className="flex flex-col bg-light-grey rounded-[10px] px-4 shadow-sm">
                <StatRow label="Price per units" value="$300.67" valueClass="text-color-six text-sm" />
                <StatRow label="Naira Conversion" value="N481,072" valueClass="text-color-six text-sm" />
                <StatRow label="Minimum Units" value="0.001" valueClass="text-color-six text-sm" />
            </section>
        </div>
        
    )
}