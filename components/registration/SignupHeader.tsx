import Link from "next/link";
import Image from "next/image";
export default function SignUpHeader() {
    return (
        <div className="flex flex-col space-y-4">
            <Link href="/" className="flex">
                <Image 
                    className="logo lg:hidden"
                    src={"/images/logo.svg"}
                    alt="Royal-Stone Logo"
                    width={106.75}
                    height={20}
                />
            </Link>
            <h1 className="font-semibold text-base text-color-zero border-y py-4 lg:border-y-0 lg:border-b lg:text-[22px]">Create a Royal Stone Account</h1>
        </div>
    )
}