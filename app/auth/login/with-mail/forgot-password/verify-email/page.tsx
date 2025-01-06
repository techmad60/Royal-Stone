import React, { Suspense } from "react";
import Loading from "@/components/ui/Loading";
import VerifyMail from "@/components/Registration/SignInVerifyEmail";

export default function Page() {
  return (
    <Suspense fallback={<div><Loading/></div>}>
      <VerifyMail />
    </Suspense>
  );
}
