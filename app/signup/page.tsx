//app/signup/page.tsx
import Image from "next/image";
import Link from "next/link";
export default function SignUp() {
    return (
        <div>
            <Link href="/" className="flex" >
                <Image 
                className="logo lg:w-[120px]"
                src={"/images/logo.svg"}
                alt="Royal-Stone Logo"
                width={106.75}
                height={20}/>
            </Link>
        </div>
        
    )
}