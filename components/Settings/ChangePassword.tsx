import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Button from "../ui/FormButton";
import SettingsNavigator from "./SettingsNavigator";
export default function ChangePassword() {
  const [showPassword, setShowPassword] = useState(false);
  //Toggle Password Visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
    const changePassword = [
      { label: "Settings", href: "/main/settings" },
      { label: "Security Settings", href: "/main/settings" },
      { label: "Change Password", href: "/main/settings" },
     ];
  return (
    <div>
      <h1 className="text-color-zero text-base font-semibold mt-24 hidden lg:flex">Security</h1>
      <div className="lg:mt-12">
        <SettingsNavigator  currentStep={2} steps={changePassword}/>
        <div className="mt-8">
            <p className="text-base font-medium text-color-zero">Change Password</p>
            <p className="text-sm text-color-form">Provide your new password</p>
        </div>
      </div>
      <form className={`flex flex-col mt-8 space-y-8 max-w-[486px]`}>
        {/*Change Password */}
       
        {/* Password */}
        <div className="flex flex-col gap-2">
          <label className="text-color-form text-sm">New Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              className="text-sm rounded-sm border-b border-slate-200 w-full placeholder:text-color-zero"
              placeholder="KolaBimBaba"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-3 flex hover:text-color-one "
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col gap-2">
          <label className="text-color-form text-sm">Confirm Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              className="text-sm rounded-sm border-b border-slate-200 w-full placeholder:text-color-zero"
              placeholder="KolaBimBaba"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-3 flex hover:text-color-one "
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
        <Button ButtonText="Save" className="py-3 lg:w-[340px] xl:w-[486px]"/>
      </form>
    </div>
  );
}
