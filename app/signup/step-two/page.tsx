//app/signup/step-two/page.tsx
import StepNavigator from "@/components/registration/StepNavigator";
import Link from "next/link";
import FormButton from "@/components/ui/FormButton";


export default function StepTwo() {
  return (
    <div className="flex flex-col">
      <StepNavigator currentStep={2} />
      {/* Step Two Content Here */}
      <section className="flex flex-col max-w-[417px]">
        <h1 className="text-colour-five text-base mt-8 lg:text-[18px]">Verify Email</h1>
        <p className="text-sm text-color-form mt-2">
          Kindly input the OTP that has been sent to “kola-osin@gmail.com” to
          verify your account and complete your password change
        </p>
        {/* Input Fields For OTP */}
        <form className="flex items-center gap-2 bg-[rgba(252,252,252,1)] w-full rounded-[10px] h-[70px] space-x-4 justify-between px-6 mt-8 border border-slate-100">
            <div className="w-[28.3px] h-[28.3px] transform rotate-45 overflow-hidden flex items-center justify-center border-2 border-slate-200 rounded-[9px]">
                <input
                type="text"
                placeholder= "1"
                className ="w-full h-full transform -rotate-45 text-center outline-none border-none placeholder:text-color-zero"
                />
            </div>
            <div className="w-[28.3px] h-[28.3px] transform rotate-45 overflow-hidden flex items-center justify-center border-2 border-slate-200 rounded-[9px]">
                <input
                type="text"
                placeholder="1"
                className ="w-full h-full transform -rotate-45 text-center outline-none border-none placeholder:text-color-zero"
                />
            </div>
            <div className="w-[28.3px] h-[28.3px] transform rotate-45 overflow-hidden flex items-center justify-center border-2 border-slate-200 rounded-[9px]">
                <input
                type="text"
                placeholder="1"
                className ="w-full h-full transform -rotate-45 text-center outline-none border-none placeholder:text-color-zero"
                />
            </div>
            <div className="w-[28.3px] h-[28.3px] transform rotate-45 overflow-hidden flex items-center justify-center border-2 border-slate-200 rounded-[9px]">
                <input
                type="text"
                placeholder="1"
                className ="w-full h-full transform -rotate-45 text-center outline-none border-none placeholder:text-color-zero"
                />
            </div>
            <div className="w-[28.3px] h-[28.3px] transform rotate-45 overflow-hidden flex items-center justify-center border-2 border-slate-200 rounded-[9px]">
                <input
                type="text"
                placeholder="1"
                className ="w-full h-full transform -rotate-45 text-center outline-none border-none placeholder:text-color-zero"
                />
            </div>
            <div className="w-[28.3px] h-[28.3px] transform rotate-45 overflow-hidden flex items-center justify-center border-2 border-slate-200 rounded-[9px]">
                <input
                type="text"
                placeholder="1"
                className ="w-full h-full transform -rotate-45 text-center outline-none border-none placeholder:text-color-zero"
                />
            </div>
        </form>
        <p className="text-slate-400 text-xs mt-8 ">
            Didn&apos;t get any email? <span className="text-color-one duration-300 hover:text-green-700">
                <Link href="/">Resend</Link>
            </span>
        </p>
        <Link href="/signup/step-three">
            <FormButton ButtonText="Verify" className="mt-20 py-4 lg:mt-12"/>
        </Link>
      </section>
    </div>
  );
}
