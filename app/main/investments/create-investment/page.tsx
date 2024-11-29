"use client"
import { useEffect } from "react";
import InvestmentNavigator from "@/components/Investments/InvestmentNavigator";
import ProductMobile from "@/components/Product/ProductMobile";
import ProductDesktop from "@/components/Product/ProductDesktop";
import Pagination from "@/components/ui/Pagination";
import useProductStore from "@/store/productStore";


const createInvestment = [
  { label: "Investments", href: "/main/investments" },
  { label: "Create Investment", href: "/main/investments/create-investment" },
];
export default function CreateInvestment() {
  const { products, fetchProducts, isLoading, error } = useProductStore();
  
   useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="lg:h-screen">
      <InvestmentNavigator currentStep={1} steps={createInvestment} />
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
          <ProductMobile products={products} />
          <ProductDesktop products={products} />
        </>
      )}
      <Pagination />
    </div>
  );
}
