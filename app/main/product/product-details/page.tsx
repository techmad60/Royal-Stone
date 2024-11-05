import ProductNavigator from "@/components/ui/ProductNavigator"
import Image from "next/image"
import { MdLocationOn } from "react-icons/md";
import TextToggle from "@/components/ui/TextToggle";
import Button from "@/components/ui/Button";
export default function ProductDetails() {
    return (
        <div>
            <ProductNavigator currentStep={1} />
            <section className="flex overflow-scroll gap-2 my-4">
                <div className="w-[110px] h-[111px] flex-shrink-0">
                    <Image src={"/images/potato-2.svg"} alt="product-details" width={110} height={111}/>
                </div>
                <div className="w-[110px] h-[111px] flex-shrink-0">
                    <Image src={"/images/potato-2.svg"} alt="product-details" width={110} height={111}/>
                </div>
                <div className="w-[110px] h-[111px] flex-shrink-0">
                    <Image src={"/images/potato-2.svg"} alt="product-details" width={110} height={111}/>
                </div>
                <div className="w-[110px] h-[111px] flex-shrink-0">
                    <Image src={"/images/potato-2.svg"} alt="product-details" width={110} height={111}/>
                </div>
                <div className="w-[110px] h-[111px] flex-shrink-0">
                    <Image src={"/images/potato-2.svg"} alt="product-details" width={110} height={111}/>
                </div>
            </section>
            
            <div className="flex flex-col lg:grid grid-cols-2 lg:gap-12 lg:pr-8 lg:mt-8">
                <section>
                    <h1 className="text-lg font-bold text-color-zero lg:text-[22px]">Pharetra diam vitae duis vash aliquet</h1>
                    <div className="flex items-center gap-2 py-2 border-b">
                        <MdLocationOn className="text-color-form"/>
                        <p className="text-color-form text-sm">Sokoto, Nigeria</p>
                    </div>
                    <TextToggle />
                </section>
                <div>
                    <section className="flex flex-col bg-light-grey rounded-[10px] px-4 shadow-sm">
                        <div className="flex items-center justify-between border-b py-4 lg:border-dashed">
                            <p className="text-color-form text-sm">Status</p>
                            <p className="text-color-one text-sm">ACTIVE</p>
                        </div>
                        <div className="flex items-center justify-between border-b py-4 lg:border-dashed">
                            <p className="text-color-form text-sm">Total Units</p>
                            <p className="text-color-six text-sm">500 Units</p>
                        </div>
                        <div className="flex items-center justify-between border-b py-4 lg:border-dashed">
                            <p className="text-color-form text-sm">Cost Per Unit</p>
                            <p className="text-color-six text-sm">$2,000/units</p>
                        </div>
                        <div className="flex items-center justify-between py-4 lg:border-dashed">
                            <p className="text-color-form text-sm">ROI</p>
                            <p className="text-color-six text-sm">32%</p>
                        </div>
                    </section>
                    <Button ButtonText="Invest" className="w-full mt-8"/>
                </div>
            </div>
        </div>

    )
}
