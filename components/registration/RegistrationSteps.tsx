import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";

// Define the type for each step
type Step = {
    label: string;
    href: string;
};

// Define props with steps as an array of Step objects
interface RegistrationStepsProps {
    steps: Step[];
}

export default function RegistrationSteps({ steps }: RegistrationStepsProps) {
    return (
        <div className="flex items-center space-x-2">
            {steps.map((step, index) => (
                <div key={index} className="flex items-center space-x-2">
                    <Link
                        href={step.href}
                        className="text-xs text-color-one hover:text-green-700 border-b border-color-one"
                    >
                        {step.label}
                    </Link>
                    {/* Show arrow only if it's not the last step */}
                    {index < steps.length - 1 && <MdArrowForwardIos className="text-slate-500 flex-shrink-0" />}
                </div>
            ))}
        </div>
    );
}
