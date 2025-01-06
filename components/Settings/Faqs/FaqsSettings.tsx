import SettingsNavigator from "../ui/SettingsNavigator";
import Faqs from "../../ui/FaqsUi";


const faqsSteps = [
    { label: "Settings", href: "/main/settings" },
    { label: "FAQs", href: "/main/settings" },
];

export default function FAQs () {
    return (
        <div>
            <SettingsNavigator currentStep={1} steps={faqsSteps}/>
            <h1 className="text-color-zero text-base font-semibold my-4">Frequently Asked Questions</h1>
            <Faqs/>
        </div>
    )
}