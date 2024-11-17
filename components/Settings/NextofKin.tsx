import Button from "../ui/Button";
import SettingsNavigator from "./SettingsNavigator";

const Kinsteps = [
    { label: "Settings", href: "/main/settings" },
    { label: "KYC", href: "/main/settings" },
    { label: "Next of Kin", href: "/main/settings" },
];

export default function NextofKinSettings() {
  return (
    <div>
     
     <SettingsNavigator currentStep={2} steps={Kinsteps} classname="lg:hidden"/>
      <h1 className="text-color-zero text-base font-semibold mt-6">
      Next of Kin
      </h1>
      <form className={`flex flex-col mt-6 space-y-8 lg:w-[300px] xl:w-[486px]`}>
        {/* Name */}
        <div className="flex flex-col gap-2 ">
          <label className="text-color-form text-sm">Full Name</label>
          <input
            type="name"
            name="name"
            required
            className="rounded-sm border-b border-slate-200 placeholder:text-sm placeholder:text-color-zero"
            placeholder="Kolawole Osindeinde"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-color-form text-sm">Email</label>
          <input
            type="email"
            name="email"
            required
            className="rounded-sm border-b border-slate-200 placeholder:text-sm placeholder:text-color-zero"
            placeholder="kola-osin@gmail.com"
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-2">
          <label className="text-color-form text-sm">Phone Number</label>
          <input
            type="tel"
            required
            className="rounded-sm border-b border-slate-200 placeholder:text-sm placeholder:text-color-zero"
            placeholder="+234 8103763064"
          />
        </div>

        <div className="flex flex-col gap-2 ">
          <label className="text-color-form text-sm">Address</label>
          <input
            type="name"
            name="name"
            required
            className="rounded-sm border-b border-slate-200 placeholder:text-sm placeholder:text-color-zero"
            placeholder="31 Olorunjare Street, Pako-Akoka"
          />
        </div>
        
        <Button ButtonText="Finish" className="py-3 lg:w-[300px] xl:w-[486px]" />
      </form>
    </div>
  );
}
