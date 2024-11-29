// import Image from "next/image";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";

interface Product {
  id: string;
  name: string;
  availableUnits: number;
  status: string;
  images: string[];
  link: string;
}

export default function ProductDesktop({ products }: { products: Product[] }) {
  return (
    <div>
      <div className="hidden lg:grid grid-cols-6 items-center bg-light-grey rounded-common py-4 px-8 shadow-sm mt-4">
        <p className="text-xs text-slate-400 col-span-3">
          Product Image & Name
        </p>
        <p className="text-xs text-slate-400">Units Available</p>
        <p className="text-xs text-slate-400">Status</p>
        <p className="text-xs text-slate-400">Actions</p>
      </div>
      <div>
        {products.map((product) => (
          <section
            key={product.id}
            className="hidden lg:grid grid-cols-6 items-center my-4 mx-8 py-4 border-b"
          >
            <div className="flex items-center col-span-3 gap-2">
              <div className="">
                <img
                  src={product.images[0] || "/placeholder-image.png"}
                  alt={product.name}
                  width={40}
                  height={40}
                />
              </div>

              <p className="text-sm text-color-zero pr-4">{product.name}</p>
            </div>
            <div>
              <p className="text-sm text-color-zero">
                {product.availableUnits}
              </p>
            </div>
            <div>
              <p className="text-sm text-color-one">{product.status}</p>
            </div>
            <div className="flex gap-2">
              <Link
                href={`/main/product/product-details/${product.id}`}
                className="text-xs text-color-one rounded-[20px] shadow-sm bg-light-grey font-semibold hover:bg-green-700 hover:text-white duration-300 h-[22px] w-[57px] flex items-center justify-center"
              >
                Invest
              </Link>
              <Link
                href={`/main/product/product-details/${product.id}`}
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
