//app/forgot-password/page.tsx
import Navigator from "@/components/ui/Navigator";
import FormButton from "@/components/ui/FormButton";
import Link from "next/link";

const loginSteps = [
    { label: "Sign in with", href: "/auth/login" },
    { label: "With Email", href: "/auth/login/with-mail" },
    { label: "Forgot Password", href: "/auth/login/with-mail/forgot-password" },
  ];
export default function ForgotPassword() {
  return (
    <div className="flex flex-col max-w-[33.5rem]">
        <Navigator currentStep={2} steps={loginSteps}/>
        
        <form className={`flex flex-col mt-8 space-y-2`}>
            <p className="text-sm text-color-form mt-2">
            Kindly provide your email address
                </p>
            {/* Email*/}
            <div className="flex flex-col ">
                <input
                    type="email"
                    name="email"
                    required
                    className="rounded-sm border-b border-slate-200 placeholder:text-colour-five"
                    placeholder="kolawole-osin@gmail.com"
                />
            </div>
        </form>
        <Link href="/auth/login/with-mail/forgot-password/verify-email">
            <FormButton ButtonText="Proceed" className="py-3 mt-24 lg:mt-16"/>
        </Link>
    </div>
  );
}
