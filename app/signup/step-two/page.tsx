//app/signup/step-two/page.tsx
import SignUpNavigator from "@/components/registration/SignUpNavigator";
import VerifyEmail from "@/components/registration/VerifyEmail";


export default function StepTwo() {
  return (
    <div className="flex flex-col">
      <SignUpNavigator currentStep={2} />
      {/* Step Two Content Here */}
      <VerifyEmail href="/signup/step-three" />
    </div>
  );
}
