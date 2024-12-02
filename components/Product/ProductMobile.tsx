import { MdArrowForwardIos } from "react-icons/md";
import { useRouter } from "next/navigation";

interface Product {
  id: string;
  name: string;
  availableUnits: number;
  description: string;
  images: string[];
}

export default function ProductMobile({
  products,
  navigateTo = "product",
}: {
  products: Product[];
  navigateTo?: "product" | "investment";
}) {
  const router = useRouter();

  const handleNavigation = (productId: string) => {
    const basePath =
      navigateTo === "investment"
        ? "/main/investments/create-investment/investment-product"
        : "/main/product/product-details";
    router.push(`${basePath}?id=${encodeURIComponent(productId)}`);
  };

  return (
    <div>
      {products.map((product) => (
        <section
          key={product.id}
          className="flex items-center gap-2 bg-light-grey rounded-common p-2 shadow-sm mt-4 lg:hidden cursor-pointer"
          onClick={() => handleNavigation(product.id)}
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
            <p className="text-sm">
              {product.description?.length > 50
                ? `${product.description.substring(0, 50)}...`
                : product.description || "No description available"}
            </p>
            <div className="flex items-center justify-between">
              <button
                className="flex items-center justify-center text-xs text-color-one font-semibold bg-light-grey shadow-sm w-[57px] h-[22px] rounded-common"
                aria-label={`Invest in ${product.name}`}
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
