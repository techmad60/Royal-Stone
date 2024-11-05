// components/LogInNavigator.tsx
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";

const steps = [
    { label: "Products", href: "/main/product" },
    { label: "Product details", href: "/main/product/product-details" },
    { label: "Images", href: "/main/product/product-details/images" },
];

export default function ProductNavigator({ currentStep }: { currentStep: number }) {
    return (
        <div className="flex items-center space-x-2 mt-4 overflow-x-scroll">
            {steps.slice(0, currentStep + 1).map((step, index) => (
                <div key={index} className="flex items-center space-x-2">
                    <Link
                        href={step.href}
                        className={`text-xs border-b duration-300 whitespace-nowrap ${
                            index === currentStep
                                ? "text-green-700 border-green-700"
                                : "text-color-one border-color-one"
                        }`}
                    >
                        {step.label}
                    </Link>
                    {index < currentStep && (
                        <MdArrowForwardIos className="text-slate-500 flex-shrink-0" />
                    )}
                </div>
            ))}
        </div>
    );
}