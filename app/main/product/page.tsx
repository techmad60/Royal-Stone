"use client";
import { useEffect } from "react";
import useProductStore from "@/store/productStore"; // Import your Zustand store
import ProductMobile from "@/components/Product/ProductMobile";
import ProductDesktop from "@/components/Product/ProductDesktop";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

export default function Products() {
  // Use Zustand store to manage products, loading, and errors
  const { products, fetchProducts, isLoading, error, currentPage, totalPages, setCurrentPage } = useProductStore();

  useEffect(() => {
    fetchProducts(); // Fetch products when the component is mounted
  }, [fetchProducts]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1); // Directly set the new page number
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1); // Directly set the new page number
    }
  };

  return (
    <div className="flex flex-col pb-4 lg:pr-8 h-screen">
      <p className="text-sm text-color-form py-4">All Available Products</p>
      {isLoading ? (
        <p>Loading products...</p>
      ) : error ? (
        <p className="text-red-500">Failed to load products. Please try again later.</p>
      ) : (
        <>
          <ProductMobile products={products} />
          <ProductDesktop products={products} />
        </>
      )}

      <div className="hidden lg:flex items-center justify-center gap-4 mt-auto">
        <p className="text-sm text-slate-400">
          Page {currentPage} of {totalPages}
        </p>
        <div className="flex items-center gap-2">
          <button
            className={`w-[22px] h-[22px] rounded-[4px] border shadow-sm flex items-center justify-center pl-1 ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <MdArrowBackIos className="text-color-form" />
          </button>
          <button
            className={`w-[22px] h-[22px] rounded-[4px] border shadow-sm flex items-center justify-center ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <MdArrowForwardIos className="text-color-form" />
          </button>
        </div>
      </div>
    </div>
  );
}
