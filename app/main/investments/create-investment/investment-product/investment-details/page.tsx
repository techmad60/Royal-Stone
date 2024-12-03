import React, { Suspense } from "react";
import InvestmentDetails from "@/components/Investments/InvestmentDetails";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InvestmentDetails/>
    </Suspense>
  );
}
