//app/signup/verify-mail/page.tsx
import Navigator from "@/components/ui/Navigator";
import VerifyEmail from "@/components/registration/VerifyEmail";
import Button from "@/components/ui/Button";
import Link from "next/link";

const signupSteps = [
    { label: "Create Account", href: "/auth/signup" },
    { label: "With Email", href: "/auth/signup/with-mail" },
    { label: "Verify Email", href: "/auth/signup/with-mail/verify-mail" },
  ];

export default function VerifyMail() {
  return (
    <div className="flex flex-col">
      <Navigator currentStep={2} steps={signupSteps}/>
      {/* Step Two Content Here */}
      <VerifyEmail  />
      <Link href="/auth/signup/with-mail/verify-mail/complete-setup">
          <Button ButtonText="Verify" className="py-3 mt-8 w-full lg:w-[417px]"/>
      </Link>
      
    </div>
  );
}
