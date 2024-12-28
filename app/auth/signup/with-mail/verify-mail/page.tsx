import React, { Suspense } from "react";
import VerifyMail from "@/components/Registration/VerifyEmail";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyMail />
    </Suspense>
  );
}
