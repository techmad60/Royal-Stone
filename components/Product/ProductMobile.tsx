// import Image from "next/imag3";
import { MdArrowForwardIos } from "react-icons/md";
import { useRouter } from "next/navigation";

interface Product {
  id: string;
  name: string;
  availableUnits: number;
  description: string;
  images: string[];
}

export default function ProductMobile({ products }: { products: Product[] }) {
  const router = useRouter();

  // Pass `productId` as a parameter to the function
  const viewProduct = (productId: string) => {
    router.push(`/products/details?id=${encodeURIComponent(productId)}`);
  };

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
            className="rounded-md"
          />
          <div className="flex flex-col space-y-1 w-full">
            <p className="text-[10px] text-color-one">
              {product.availableUnits} Units Available
            </p>
            <p className="text-sm">{product.description}</p>
            <div className="flex items-center justify-between">
              <button
                onClick={() => viewProduct(product.id)} // Pass the current product's ID
                className="flex items-center justify-center text-xs text-color-one font-semibold bg-light-grey shadow-sm w-[57px] h-[22px] rounded-common"
              >
                Invest
              </button>
              <MdArrowForwardIos className="text-sm text-color-form font-semibold" />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
