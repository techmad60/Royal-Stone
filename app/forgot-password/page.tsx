//app/forgot-password/page.tsx
import LogInNavigator from "@/components/registration/LogInNavigator";
import FormButton from "@/components/ui/FormButton";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <div className="flex flex-col max-w-[33.5rem]">
        <LogInNavigator currentStep={2} />
        
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
        <Link href="/forgot-password/step-one">
            <FormButton ButtonText="Proceed" className="py-3 mt-24 lg:mt-16"/>
        </Link>
    </div>
  );
}
