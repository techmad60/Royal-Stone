import Image from "next/image";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";

const productData = [
  {
    id: 1,
    unitsAvailable: "500 Units Available",
    description: "Pharetra diam vitae duis vash aliquet",
    imageSrc: "/images/potato-2.svg",
  },
  {
    id: 2,
    unitsAvailable: "500 Units Available",
    description: "Pharetra diam vitae duis vash aliquet",
    imageSrc: "/images/potato-2.svg",
  },
  // Add more products as needed
];

export default function ProductList() {
  return (
    <div>
      {productData.map((product) => (
        <section
          key={product.id}
          className="flex items-center gap-2 bg-light-grey rounded-common p-2 shadow-sm mt-4 lg:hidden"
        >
          <Image src={product.imageSrc} alt={`product-${product.id}`} width={77} height={77} />
          <div className="flex flex-col space-y-1">
            <p className="text-[10px] text-color-one">{product.unitsAvailable}</p>
            <p className="text-sm">{product.description}</p>
            <div className="flex items-center justify-between">
              <Link href="/main/product" className="text-xs text-color-one font-semibold bg-light-grey shadow-sm w-[57px] h-[22px] rounded-common">
                Invest
              </Link>
              <MdArrowForwardIos className="text-sm text-color-form font-semibold" />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
