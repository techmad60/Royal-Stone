// import Image from "next/image";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";

interface Product {
  id: string;
  name: string
  availableUnits: number;
  description: string;
  images: string[];
  link: string;
}

export default function ProductMobile({ products }: { products: Product[] }) {
  return (
    <div>
      {products.map((product) => (
        <section
          key={product.id}
          className="flex items-center gap-2 bg-light-grey rounded-common p-2 shadow-sm mt-4 lg:hidden"
        >
          <img
            src={product.images[0] || "/placeholder-image.png"}
            alt={product.name}
            width={50}
            height={50}
          />
          <div className="flex flex-col space-y-1 w-full">
            <p className="text-[10px] text-color-one">
              {product.availableUnits} Units Available
            </p>
            <p className="text-sm">{product.description}</p>
            <div className="flex items-center justify-between">
              <Link
                href={product.link || "/main/product/product-details"}
                className="flex items-center justify-center text-xs text-color-one font-semibold bg-light-grey shadow-sm w-[57px] h-[22px] rounded-common"
              >
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
