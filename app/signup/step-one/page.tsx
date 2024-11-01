// pages/signup/step-one.tsx
import StepNavigator from "@/components/registration/StepNavigator";

export default function StepOne() {
    return (
        <div className="flex flex-col">
            <StepNavigator currentStep={1} />
            {/* Step One Content Here */}
        </div>
    );
}
