import Button from "../ui/Button";
import SettingsNavigator from "./SettingsNavigator";

const Kinsteps = [
    { label: "Settings", href: "/main/settings" },
    { label: "KYC", href: "/main/settings" },
    { label: "BVN", href: "/main/settings" },
];

export default function BvnSettings() {
  return (
    <div>
     
     <SettingsNavigator currentStep={2} steps={Kinsteps} classname="lg:hidden"/>
      <h1 className="text-color-zero text-base font-semibold mt-6">
      KYC
      <p className="mt-8">BVN</p>
      </h1>
      <form className={`flex flex-col mt-6 space-y-8 lg:w-[300px] xl:w-[486px]`}>
        {/* Name */}
        <div className="flex flex-col gap-2 ">
          <label className="text-color-form text-sm">Provide your BVN</label>
          <input
            type="name"
            name="name"
            required
            className="rounded-sm border-b border-slate-200 placeholder:text-sm placeholder:text-color-zero"
            placeholder="1120 101 0101"
          />
        </div>
        
        <Button ButtonText="Finish" className="py-3 lg:w-[300px] xl:w-[486px]" />
      </form>
    </div>
  );
}
