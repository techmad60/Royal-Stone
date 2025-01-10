"use client";
import ProductDesktop from "@/components/Product/ProductDesktop";
import ProductMobile from "@/components/Product/ProductMobile";
import Button from "@/components/ui/Button";
import CardComponentFive from "@/components/ui/CardComponentFive";
import Loading from "@/components/ui/Loading";
import { useKycStore } from "@/store/kycStore";
import useProductStore from "@/store/productStore";
import useUserStore, { useLoadFullName } from "@/store/userStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BsFileBarGraphFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa6";
import { MdArrowForwardIos } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";


export default function Dashboard() {
  const fullName = useUserStore((state) => state.fullName);
  useLoadFullName();
  const { products, fetchProducts, isLoading, error } = useProductStore();
  const capitalizeFirstLetter = (name: string): string => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  };
  const router = useRouter();
  const {isBankProvided, isKycProvided} = useKycStore()
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fullName = localStorage.getItem("fullName");

    if (fullName !== null) {
      // The 'fullName' exists in localStorage
      console.log("Full name found:", fullName);
    } else {
      // The 'fullName' does not exist in localStorage
      console.log("Full name not found in localStorage.");
    }

    fetchProducts();
  }, [fetchProducts]);

  // Navigate to /auth/auth-dashboard if BankInfo and KYC are not provided
  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (userId && !isBankProvided && !isKycProvided) {
      setLoading(true); // Show loading UI immediately
      setTimeout(() => {
        router.push("/auth/auth-dashboard"); // Redirect after 2 seconds
      }, 2000); // 2 seconds delay
    } else {
      setLoading(false); // Hide loading UI immediately if conditions are not met
    }
  }, [isBankProvided, isKycProvided, router]);

  if (loading) {
    return (
      <div><Loading/></div>
    )
  }

  return (
    <div className="flex flex-col lg:p-0 lg:pr-8">
      <p className="text-base text-color-form py-4">
      Welcome, {fullName ? capitalizeFirstLetter(fullName) : "Guest"}! 👋🏻
      </p>
      <div className="flex gap-4 pb-6 border-b">
        <CardComponentFive
          icon={<TbTargetArrow className="text-base" />}
          label="Total Savings Target"
          number={`0`}
          width="sm:w-[300px] lg:w-[378px]"
        />
        <CardComponentFive
          icon={<BsFileBarGraphFill className="text-base" />}
          label="Total Investments Made"
          number={`0`}
          width="sm:w-[300px] lg:w-[378px]"
        />
      </div>

      <div className="flex flex-col justify-center items-center space-y-4 my-8 py-6 shadow-sm bg-light-grey rounded-common lg:w-[765px]">
        <div
          className={`w-7 h-7 shadow-sm flex items-center justify-center transform rotate-45 rounded-[9px] bg-white"`}
        >
          <span className="text-color-one transform -rotate-45">
            <FaClock /> {/* Counter-rotate icon */}
          </span>
        </div>
        <p className="text-sm text-color-form">
          No transactions have been performed yet
        </p>
        <Button
          ButtonText="Perform a transaction"
          className="py-3 self-center w-[200px] lg:w-[200px]"
        />
      </div>

      <div className="flex flex-col border-t py-6">
        <div className="flex justify-between items-center">
          <p className="text-base font-semibold text-color-zero lg:text-lg">
            Recommended Products
          </p>
          <Link
            href="/main/product"
            className="flex items-center justify-between text-color-one gap-1 hover:text-green-700 duration-300"
          >
            <p className="text-xs lg:text-sm">View all</p>
            <MdArrowForwardIos className="text-xs lg:hidden" />
          </Link>
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
      </div>
    </div>
  );
}
