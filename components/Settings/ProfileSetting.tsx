import { IoIosArrowDown } from "react-icons/io";
import Button from "../ui/Button";
import SettingsNavigator from "./SettingsNavigator";

// For Profile Settings
const profileSteps = [
    { label: "Settings", href: "/main/settings" },
    { label: "Profile Settings", href: "/main/settings/profile" },
];

export default function ProfileSettings() {
  return (
    <div>
     
     <SettingsNavigator currentStep={1} steps={profileSteps} />
      <h1 className="text-color-zero text-base font-semibold mt-6">
        Profile Settings
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
          <label className="text-color-form text-sm">Username</label>
          <input
            type="name"
            name="name"
            required
            className="rounded-sm border-b border-slate-200 placeholder:text-sm placeholder:text-color-zero"
            placeholder="kola-osin"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-color-form text-sm">Country</label>
          <div className="relative border-b border-slate-200">
            <input
              type="text"
              required
              className="rounded-sm  placeholder:text-color-zero placeholder:text-sm py-1"
              placeholder="Nigeria"
            />
            <div className="absolute top-3 right-3 ">
              <IoIosArrowDown />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-color-form text-sm">State</label>
          <div className="relative border-b border-slate-200">
            <input
              type="text"
              required
              className="rounded-sm  placeholder:text-color-zero placeholder:text-sm py-1"
              placeholder="Lagos"
            />
            <div className="absolute top-3 right-3">
              <IoIosArrowDown />
            </div>
          </div>
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
        
        <Button ButtonText="Create Account" className="py-3 lg:w-[300px] xl:w-[486px]" />
      </form>
    </div>
  );
}
