import React, { Suspense } from "react";
import VerifyMail from "@/components/registration/SignInVerifyEmail";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyMail />
    </Suspense>
  );
}
