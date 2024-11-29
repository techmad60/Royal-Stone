"use client";
import { useState, useEffect } from "react";
import ProductMobile from "@/components/Product/ProductMobile";
import ProductDesktop from "@/components/Product/ProductDesktop";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";


export default function Products() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setIsError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://api-royal-stone.softwebdigital.com/api/products?page=${currentPage}`
        );
        const productData = await response.json();
        if (productData.status) {
          setProducts(productData.data.data);
          setCurrentPage(productData.data.currentPage);
          setTotalPages(productData.data.totalPages);
        }
        setIsLoading(false)
      } catch (error) {
        setIsError(true)
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
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
