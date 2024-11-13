//app/dashboard/layout.tsx
"use client"
import { useState } from "react";
import AuthHeader from "@/components/registration/AuthHeader";
import MainPageNavbar from "@/components/ui/MainPageNavbar";

export default function AuthDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen((prev) => !prev);
  return (
    <div className="flex flex-col bg-white">
     
      <div className={`p-4 lg:grid lg:p-0 lg:grid-cols-3 xl:grid-cols-5`}>
        <MainPageNavbar isNavOpen={isNavOpen} toggleNav={toggleNav} />
        {/* Item 2 */}
        <div className="flex flex-col lg:col-span-2 xl:col-span-4">
          <AuthHeader title="Dashboard" toggleNav={toggleNav}/>
          {children} {/* Ensure children are rendered here */}
        </div>
      </div>
    </div>
  );
}
