import LogInNavigator from "@/components/registration/LogInNavigator";
import VerifyEmail from "@/components/registration/VerifyEmail";
export default function StepOne() {
    return (
        <div className="flex flex-col">
            <LogInNavigator currentStep={2} />
            <VerifyEmail />
        </div>
    )
}