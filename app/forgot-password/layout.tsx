//app/forgot-password/layout.tsx
import Prompt from "@/components/registration/Prompt";
import AuthHeader from "@/components/registration/AuthHeader";

export default function ForgetPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col bg-white">
      <div className="p-4 lg:grid grid-cols-2 lg:p-0 gap-12">
        <div>
          <Prompt prompt="Welcome back! 1,000+ users are already on the path to smart investing. Ready to take the next step? 🤔"/>
        </div>
        <div className="flex flex-col">
          <AuthHeader title="Forgot Password"/>
          {children} {/* Ensure children are rendered here */}
        </div>
      </div>
    </div>
  );
}

