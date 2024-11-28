"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  icon: React.ReactNode; // Update icon to ReactNode instead of IconType
  label: string;
}

export default function NavLink({ href, icon, label }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`flex items-center gap-2 ${
        isActive ? "text-color-one" : "text-slate-400 hover:text-green-400"
      } duration-150`}
    >
      <div
        className={`w-7 h-7 shadow-sm flex items-center justify-center transform rotate-45 rounded-[9px] ${
          isActive ? "bg-color-two" : "bg-white"
        }`}
      >
        <span className="transform -rotate-45">{icon}</span> {/* Counter-rotate icon */}
      </div>
      <p className="text-sm duration-300">{label}</p>
    </Link>
  );
}
