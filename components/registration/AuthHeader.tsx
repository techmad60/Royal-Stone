"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";

interface AuthHeaderProps {
  title?: string;
  toggleNav?: () => void; 
  grid?: string;
}

export default function AuthHeader({ title = "", toggleNav, grid = "" }: AuthHeaderProps) {
  const pathname = usePathname();
  const showNav = pathname.includes("/main/dashboard") || pathname.includes("/main/product") || pathname.includes("/auth/auth-dashboard"); // Adjust path if different

  return (
    <div className={`flex flex-col space-y-4 lg:pr-8 ${grid}`}>
      {/* Logo Img */}
      <Link href="/" className="flex">
        <Image
          className="logo lg:hidden"
          src={"/images/logo.svg"}
          alt="Royal-Stone Logo"
          width={106.75}
          height={20}
        />
      </Link>
      <div className="flex justify-between items-center border-y py-4 lg:border-y-0 lg:border-b">
        <div className="flex gap-4 items-center">
            {showNav && (
                <FaBars className="lg:hidden" onClick={toggleNav} />
            )}
          <h1 className="font-semibold text-base text-color-zero lg:text-[22px]">
            {title}
          </h1> 
        </div>
        {/* User and Notification Img - Show only on the dashboard page */}
        {showNav && (
          <div className="flex gap-1">
              <Image
              src={"/images/user.svg"}
              alt="User Image"
              width={24}
              height={24}
              className=""
              />
              <Image
              src={"/images/notification.svg"}
              alt="Notification Image"
              width={24}
              height={24}
              />
          </div>
        )}
      </div>
    </div>
  );
}
