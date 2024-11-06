import ProductNavigator from "@/components/ui/ProductNavigator"
import Image from "next/image"
import { MdLocationOn } from "react-icons/md";
import TextToggle from "@/components/ui/TextToggle";
import Button from "@/components/ui/Button";

// Reusable StatRow Component
const StatRow = ({ label = "", value = "", valueClass = "" }) => (
    <div className="flex items-center justify-between border-b py-4 lg:border-dashed">
      <p className="text-color-form text-sm">{label}</p>
      <p className={valueClass}>{value}</p>
    </div>
  );
export default function ProductDetails() {
    return (
        <div>
            <ProductNavigator currentStep={1} />
            {/* Small Screen */}
            <section className="flex overflow-scroll gap-2 my-4 lg:hidden ">
                <div className="w-[110px] h-[111px] flex-shrink-0 col-span-2 row-span-2">
                    <Image src={"/images/potato-3.svg"} alt="product-details" width={110} height={111} className=""/>
                </div>
                <div className="w-[110px] h-[111px] flex-shrink-0">
                    <Image src={"/images/potato-3.svg"} alt="product-details" width={110} height={111}/>
                </div>
                <div className="w-[110px] h-[111px] flex-shrink-0">
                    <Image src={"/images/potato-3.svg"} alt="product-details" width={110} height={111}/>
                </div>
                <div className="w-[110px] h-[111px] flex-shrink-0">
                    <Image src={"/images/potato-3.svg"} alt="product-details" width={110} height={111}/>
                </div>
                <div className="w-[110px] h-[111px] flex-shrink-0">
                    <Image src={"/images/potato-3.svg"} alt="product-details" width={110} height={111}/>
                </div>
            </section>

            {/* Large Screen */}
            <section className="hidden overflow-scroll my-4 lg:grid grid-cols-4 gap-x-2">
                <div className="col-span-2">
                    <Image src={"/images/potato-0.png"} alt="product-details" width={549} height={337} className=""/>
                </div>
                <div className="grid grid-cols-2 col-span-2 gap-x-2">
                    <Image src={"/images/potato-small.png"} alt="product-details" width={315} height={166} className=""/>
                    <Image src={"/images/potato-small.png"} alt="product-details" width={315} height={166} className=""/>
                    <Image src={"/images/potato-small.png"} alt="product-details" width={315} height={166} className=""/>
                    <Image src={"/images/potato-small.png"} alt="product-details" width={315} height={166} className=""/>
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
                        <StatRow label="Status" value="ACTIVE" valueClass="text-color-one text-sm" />
                        <StatRow label="Total Units" value="1000 Units" valueClass="text-color-six text-sm" />
                        <StatRow label="Available Units" value="500 Units" valueClass="text-color-six text-sm" />
                        <StatRow label="Cost Per Unit" value="$2,000/units" valueClass="text-color-six text-sm" />
                        <StatRow label="ROI" value="32%" valueClass="text-color-six text-sm" />
                    </section>
                    <Button ButtonText="Invest" className="w-full mt-8"/>
                </div>
            </div>
        </div>

    )
}
