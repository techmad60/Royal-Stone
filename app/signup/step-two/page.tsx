// pages/signup/step-two.tsx
import StepNavigator from "@/components/registration/StepNavigator";

export default function StepTwo() {
    return (
        <div className="flex flex-col">
            <StepNavigator currentStep={2} />
            {/* Step Two Content Here */}
            
        </div>
    );
}
