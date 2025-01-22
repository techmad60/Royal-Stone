"use client";
import AllHistoryDesktop from "@/components/Investments/History/AllHistoryDesktop";
import AllHistoryMobile from "@/components/Investments/History/AllHistoryMobile";
import Loading from "@/components/ui/Loading";
import Navigator from "@/components/ui/Navigator";
import PaginationComponent from "@/components/ui/PaginationComponent";
import useInvestmentStore from "@/store/investmentStore";
import { useEffect } from "react";

const historySteps = [
  { label: "Investments", href: "/main/investments" },
  {
    label: "Investments History",
    href: "/main/investments/investment-history",
  },
];
export default function InvestmentHistory() {
  const { fetchInvestments, investments, isLoading, error, currentPage, totalPages, setCurrentPage} =
    useInvestmentStore();

  useEffect(() => {
    fetchInvestments("", currentPage);
  }, [fetchInvestments, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page); // Update the page in the product store
  };

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 mt-6">
        <p>Oops! Something went wrong.</p>
        {error && (
          <p>
            {typeof error === "string"
              ? error
              : error.message || "Unable to fetch investments at the moment."}
          </p>
        )}
      </div>
    );
  }
  return (
    <div>
      <Navigator currentStep={1} steps={historySteps} />
      <h1 className="text-base font-semibold mt-6 pb-2 lg:text-xl">
        Investments History
      </h1>
      <hr className="hidden lg:flex" />

      {/* ALL Investments History */}
      <>
        <AllHistoryDesktop investments={investments} />
        <AllHistoryMobile investments={investments} />
        {investments.length > 0 &&  <PaginationComponent
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />}
       
      </>
    </div>
  );
}
