"use client"
import { useEffect } from "react";
import Navigator from "@/components/ui/Navigator";
import ProductMobile from "@/components/Product/ProductMobile";
import ProductDesktop from "@/components/Product/ProductDesktop";
import useProductStore from "@/store/productStore";
import PaginationComponent from "@/components/ui/PaginationComponent";


const createInvestment = [
  { label: "Investments", href: "/main/investments" },
  { label: "Make Investment", href: "/main/investments/create-investment" },
];
export default function CreateInvestment() {
  const { products, fetchProducts, isLoading, error } = useProductStore();
  
   useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  
  return (
    <div className="lg:h-screen">
      <Navigator currentStep={1} steps={createInvestment} />
      <div className="space-y-2 mt-4">
        <h1 className="text-base font-semibold text-color-zero">
          Create Investment
        </h1>
        <p className="text-color-form text-sm">Select an Investment Product</p>
      </div>
      {isLoading ? (
        <p>Loading products...</p>
      ) : error ? (
        <p className="text-red-500">
          Failed to load products. Please try again later.
        </p>
      ) : (
        <>
          <ProductMobile products={products} navigateTo="investment"/>
          <ProductDesktop products={products} showViewButton={false} navigateTo="investment"/>
        </>
      )}
      <PaginationComponent/>
    </div>
  );
}
