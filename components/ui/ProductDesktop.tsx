import Image from "next/image";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";

const productData = [
  {
    id: 1,
    name: "Gravida imperdiet imperdiet lacinia commodo enim volutpat.",
    units: "1,200",
    status: "ACTIVE",
    imageSrc: "/images/potato-2.svg",
  },
  {
    id: 2,
    name: "Amet feugiat nibh vestibulum vestibulum ultrices volutpat.",
    units: "800",
    status: "ACTIVE",
    imageSrc: "/images/potato-2.svg",
  },
  // Add more products as needed
];

export default function ProductGrid() {
  return (
    <div>
        <div className="hidden lg:grid grid-cols-6 items-center bg-light-grey rounded-common py-4 px-8 shadow-sm mt-4">
            <p className="text-xs text-slate-400 col-span-3">Product Image & Name</p>
            <p className="text-xs text-slate-400">Units Available</p>
            <p className="text-xs text-slate-400">Status</p>
            <p className="text-xs text-slate-400">Actions</p>
        </div>
        <div>
            {productData.map((product) => (
            <section
                key={product.id}
                className="hidden lg:grid grid-cols-6 items-center my-4 mx-8 py-4 border-b"
            >
                <div className="flex items-center col-span-3 gap-2">
                <Image
                    src={product.imageSrc}
                    alt={`product-${product.id}`}
                    width={40}
                    height={40}
                />
                <p className="text-sm text-color-zero pr-4">{product.name}</p>
                </div>

                <div>
                <p className="text-sm text-color-zero">{product.units}</p>
                </div>

                <div>
                <p className="text-sm text-color-one">{product.status}</p>
                </div>

                <div className="flex gap-2">
                <Link
                    href="/main/product/product-details"
                    className="text-xs text-color-one rounded-[20px] shadow-sm bg-light-grey font-semibold hover:bg-green-700 hover:text-white duration-300 h-[22px] w-[57px] flex items-center justify-center"
                >
                    Invest
                </Link>
                <Link
                    href="/main/product/product-details"
                    className="text-xs font-medium hover:text-green-700 duration-300 flex items-center text-color-form"
                >
                    View <MdArrowForwardIos />
                </Link>
                </div>
            </section>
            ))}
        </div>
    </div>
  );
}
