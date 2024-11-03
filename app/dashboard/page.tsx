import Link from "next/link";
import Image from "next/image";
import MainPageNavbar from "@/components/ui/MainPageNavbar";
export default function Dashboard() {
  return (
    <div className="flex flex-col space-y-4 lg:pr-8">
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
      <MainPageNavbar/>
    </div>

  );
}
