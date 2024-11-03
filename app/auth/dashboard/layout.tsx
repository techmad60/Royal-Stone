//app/dashboard/layout.tsx
import Prompt from "@/components/registration/Prompt";
import AuthHeader from "@/components/registration/AuthHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col bg-white">
      <div className="p-4 lg:grid grid-cols-2 lg:p-0 gap-12">
        <div>
          <Prompt prompt="1,000+ users are making smart investment choices. Why not be one of them? 🤔"/>
        </div>
        <div className="flex flex-col">
          <AuthHeader title="Dashboard"/>
          {children} {/* Ensure children are rendered here */}
        </div>
      </div>
    </div>
  );
}

