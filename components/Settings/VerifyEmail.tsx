import SettingsNavigator from "./SettingsNavigator";
import Button from "../ui/Button";
import VerifyEmail from "../registration/VerifyEmail";

interface VerifyEmailProps {
    onNavigateToChangePassword: () => void;
}
// For verifyEmail Settings
const verifyEmail = [
    { label: "Settings", href: "/main/settings" },
    { label: "Security", href: "/main/settings" },
    { label: "Change Password", href: "/main/settings" },
];

export default function VerifyEmailSetting ({ onNavigateToChangePassword }: VerifyEmailProps) {
    
    return (
        <div>
            {<SettingsNavigator currentStep={2} steps={verifyEmail} classname="lg:flex"/>}
            <VerifyEmail/>
            <div onClick={onNavigateToChangePassword}>
                <Button ButtonText="Verify" className="py-3 mt-12 w-full lg:w-[417px]"/>
            </div> 
        </div>
       
    )
}