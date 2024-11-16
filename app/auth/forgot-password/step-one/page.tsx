import LogInNavigator from "@/components/registration/LogInNavigator";
import VerifyEmail from "@/components/registration/VerifyEmail";
import FormButton from "@/components/ui/FormButton";
import Link from "next/link";
export default function StepOne() {
    return (
        <div className="flex flex-col">
            <LogInNavigator currentStep={2} />
            <VerifyEmail/>

            <Link href= "/auth/forgot-password/step-two">
                <FormButton ButtonText="Verify" className="mt-20 py-4 lg:mt-12 lg:w-[417px]"/>
            </Link>
        </div>
    )
}