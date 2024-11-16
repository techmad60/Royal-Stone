//app/signup/step-two/page.tsx
import SignUpNavigator from "@/components/registration/SignUpNavigator";
import VerifyEmail from "@/components/registration/VerifyEmail";
import Button from "@/components/ui/Button";
import Link from "next/link";


export default function StepTwo() {
  return (
    <div className="flex flex-col">
      <SignUpNavigator currentStep={2} />
      {/* Step Two Content Here */}
      <VerifyEmail  />
      <Link href="/auth/signup/step-three">
          <Button ButtonText="Verify" className="py-3 w-full"/>
      </Link>
      
    </div>
  );
}
