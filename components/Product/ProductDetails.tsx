"use client"
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import useProductStore from "@/store/productStore"; // Import your Zustand store
import Navigator from "@/components/ui/Navigator";
import Image from "next/image";
import { MdLocationOn } from "react-icons/md";
import TextToggle from "@/components/ui/TextToggle";
import Button from "@/components/ui/Button";
import StatRow from "@/components/ui/StatRow";

const steps = {
  investment: [
    { label: "Investments", href: "/main/investments" },
    { label: "Create Investment", href: "/main/investments/create-investment" },
    {
      label: "Investment Product",
      href: "/main/investments/create-investment/investment-product",
    },
  ],
  product: [
    { label: "Products", href: "/main/product" },
    { label: "Product details", href: "/main/product/product-details" },
    { label: "Images", href: "/main/product/product-details/images" },
  ],
};

export default function ProductDetailsPage({
  type,
}: {
  type: "investment" | "product";
}) {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const router = useRouter();

  // Use Zustand store to manage product details
  const { products, fetchProducts, error } = useProductStore();

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts(); // Fetch products if not already fetched
    }
  }, [products, fetchProducts]);

  const product = products.find((product) => product.id === id);

  if (error)
    return (
      <p className="text-red-500">
        Failed to load product details. Please try again later.
      </p>
    );
  if (!product) return <p>No product found.</p>;

  // Unified navigation logic for the Invest button
  const handleInvestClick = () => {
    router.push(
      `/main/investments/create-investment/investment-details?id=${encodeURIComponent(
        product.id
      )}`
    );
  };

  return (
    <div>
      <Navigator
        currentStep={type === "investment" ? 2 : 1}
        steps={steps[type]}
      />

      {/* Small Screen */}
      <section className="flex overflow-scroll gap-2 my-4 sm:hidden ">
        <div className="w-[110px] h-[111px] flex-shrink-0 col-span-2 row-span-2">
          <Image
            src={"/images/potato-3.svg"}
            alt="product-details"
            width={110}
            height={111}
            className=""
          />
        </div>
        <div className="w-[110px] h-[111px] flex-shrink-0">
          <Image
            src={"/images/potato-3.svg"}
            alt="product-details"
            width={110}
            height={111}
          />
        </div>
        <div className="w-[110px] h-[111px] flex-shrink-0">
          <Image
            src={"/images/potato-3.svg"}
            alt="product-details"
            width={110}
            height={111}
          />
        </div>
        <div className="w-[110px] h-[111px] flex-shrink-0">
          <Image
            src={"/images/potato-3.svg"}
            alt="product-details"
            width={110}
            height={111}
          />
        </div>
        <div className="w-[110px] h-[111px] flex-shrink-0">
          <Image
            src={"/images/potato-3.svg"}
            alt="product-details"
            width={110}
            height={111}
          />
        </div>
      </section>

      {/* Large Screen */}
      <section className="hidden overflow-scroll my-4 sm:grid grid-cols-4 gap-x-2">
        <div className="col-span-2">
          <Image
            src={"/images/potato-0.png"}
            alt="product-details"
            width={549}
            height={337}
            className=""
          />
        </div>
        <div className="grid grid-cols-2 col-span-2 gap-x-2">
          <Image
            src={"/images/potato-small.png"}
            alt="product-details"
            width={315}
            height={166}
            className=""
          />
          <Image
            src={"/images/potato-small.png"}
            alt="product-details"
            width={315}
            height={166}
            className=""
          />
          <Image
            src={"/images/potato-small.png"}
            alt="product-details"
            width={315}
            height={166}
            className=""
          />
          <Image
            src={"/images/potato-small.png"}
            alt="product-details"
            width={315}
            height={166}
            className=""
          />
        </div>
      </section>

      <div className="flex flex-col lg:grid grid-cols-2 lg:gap-12 lg:pr-8 lg:mt-8">
        <section>
          <h1 className="text-lg font-bold text-color-zero lg:text-[22px]">
            {product.name}
          </h1>
          <div className="flex items-center gap-2 py-2 border-b">
            <MdLocationOn className="text-color-form" />
            <p className="text-color-form text-sm">Sokoto, Nigeria</p>
          </div>
          <TextToggle />
        </section>

        <div>
          <section className="flex flex-col bg-light-grey rounded-[10px] px-4 shadow-sm">
            <StatRow
              label="Status"
              value={product.status.toUpperCase()}
              valueClass="text-color-one text-sm"
            />
            <StatRow
              label="Total Units"
              value={`${product.totalUnits} Units`}
              valueClass="text-color-six text-sm"
            />
            <StatRow
              label="Available Units"
              value={`${product.availableUnits} Units`}
              valueClass="text-color-six text-sm"
            />
            <StatRow
              label="Cost Per Unit"
              value={`$${product.costPerUnit}/unit`}
              valueClass="text-color-six text-sm"
            />
            <StatRow
              label="ROI"
              value={`${product.ROI.value}%`}
              valueClass="text-color-six text-sm"
              isLast={true}
            />
          </section>
          <Button
            ButtonText="Invest"
            className="w-full mt-8"
            onClick={handleInvestClick}
          />
        </div>
      </div>
    </div>
  );
}
