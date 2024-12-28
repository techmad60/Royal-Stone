import React, { Suspense } from "react";
import ResetPassword from "@/components/Registration/ResetPassword";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPassword />
    </Suspense>
  );
}
