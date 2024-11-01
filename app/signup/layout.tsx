import Prompt from "@/components/registration/Prompt";
import SignUpHeader from "@/components/registration/SignupHeader";

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col bg-white">
      <div className="p-4 lg:grid grid-cols-2 lg:p-0 gap-8">
        <div>
          <Prompt />
        </div>
        <div className="flex flex-col">
          <SignUpHeader />
          {children} {/* Ensure children are rendered here */}
        </div>
      </div>
    </div>
  );
}

//   import Image from "next/image";
// import Link from "next/link";
// import CardComponentFour from "@/components/ui/CardComponentFour";
// import Prompt from "@/components/registration/Prompt";
// import SignUpHeader from "@/components/registration/SignupHeader";

// export default function SignUp() {
//     return (
//         <div className="lg:grid grid-cols-2 gap-8">
//             <Prompt />
//             <section className="flex flex-col p-4 space-y-6 lg:px-8">
//                <SignUpHeader />
//                 <section className="flex flex-col space-y-4">
//                     <div className="grid grid-cols-2 gap-2">
//                         {/* Signup with Email */}
//                         <CardComponentFour icon="/images/mail-icon.svg" textStart="Continue" textEnd="Email" href="/signup/step-one" className="lg:h-[83px]"/>

//                         {/* Signup with Google */}
//                         <CardComponentFour icon="/images/google-icon.svg" textStart="Continue" textEnd="Google" className="lg:h-[83px]"/>

//                         {/* Signup with Apple (full width across both columns) */}
//                         <CardComponentFour icon="/images/apple-icon.svg" textStart="Continue" textEnd="Apple" className="col-span-2 justify-between h-[83px]" />
//                     </div>
//                 </section>
//                 <p className="text-slate-400 lg:border-t lg:pt-4">
//                     Already have an account? <span className="font-semibold text-color-one duration-300 hover:text-green-700">
//                         <Link href="/login">Sign in</Link>
//                     </span>
//                 </p>
//             </section>
//         </div>

//     );
// }
