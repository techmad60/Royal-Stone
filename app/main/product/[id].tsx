"use client";
import { useSearchParams } from "next/navigation";

const ProductDetails = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id"); // Retrieve the "id" from search params

  return <div>Product Details Page for ID: {id}</div>;
};

export default ProductDetails;
