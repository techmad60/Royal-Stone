import Navigator from "@/components/ui/Navigator";
import VerifyEmail from "@/components/registration/VerifyEmail";
import FormButton from "@/components/ui/FormButton";
import Link from "next/link";
const loginSteps = [
    { label: "Sign in with", href: "/auth/login" },
    { label: "With Email", href: "/auth/login/with-mail" },
    { label: "Forgot Password", href: "/auth/login/with-mail/forgot-password" },
  ];
export default function VerifyEmailPage() {
    return (
        <div className="flex flex-col">
            <Navigator currentStep={2} steps={loginSteps}/>
            <VerifyEmail/>

            <Link href= "/auth/login/with-mail/forgot-password/verify-email/reset-password">
                <FormButton ButtonText="Verify" className="mt-20 py-4 lg:mt-12 lg:w-[417px]"/>
            </Link>
        </div>
    )
}