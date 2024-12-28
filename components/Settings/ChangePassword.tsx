import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Button from "../ui/Button";
import SettingsNavigator from "./SettingsNavigator";

export default function ChangePassword() {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const validatePassword = (value: string) => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W_]).{8,}$/;
    if (!passwordRegex.test(value)) {
      return "Password must be at least 8 characters long, include uppercase, lowercase, a number, and a special character.";
    }
    return null;
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setPasswordError(validatePassword(value));
  };

  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (passwordError) {
      setError(passwordError);
      return;
    }

    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const token = localStorage.getItem("accessToken");
      if (!token) throw new Error("Access token missing. Please log in again.");

      const response = await fetch(
        "https://api-royal-stone.softwebdigital.com/api/account/update-password",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            password,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Password update failed.");
      }

      // Success
      setSuccessMessage("Password updated successfully!");
    } catch (error: unknown) { // Use `unknown` to type the error
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  const changePassword = [
    { label: "Settings", href: "/main/settings" },
    { label: "Security Settings", href: "/main/settings" },
    { label: "Change Password", href: "/main/settings" },
  ];

  return (
    <div>
      <h1 className="text-color-zero text-base font-semibold mt-24 hidden lg:flex">
        Security
      </h1>
      <div className="lg:mt-12">
        <SettingsNavigator currentStep={2} steps={changePassword} />
        <div className="mt-8">
          <p className="text-base font-medium text-color-zero">Change Password</p>
          <p className="text-sm text-color-form">Provide your new password</p>
        </div>
      </div>
      <form className={`flex flex-col mt-8 space-y-8 max-w-[486px]`} onSubmit={handlePasswordUpdate}>
        {/* New Password */}
        <div className="flex flex-col gap-2">
          <label className="text-color-form text-sm">New Password</label>
          <div className="relative">
            <input
              type={showNewPassword ? "text" : "password"}
              value={password}
              onChange={(e) => handlePasswordChange(e.target.value)}
              required
              className="text-sm rounded-sm border-b border-slate-200 w-full placeholder:text-color-zero"
              placeholder="Enter new password"
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute inset-y-0 right-3 flex hover:text-color-one"
            >
              {showNewPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {passwordError && (
            <p className="text-xs text-red-500 mt-1">{passwordError}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col gap-2">
          <label className="text-color-form text-sm">Confirm Password</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="text-sm rounded-sm border-b border-slate-200 w-full placeholder:text-color-zero"
              placeholder="Re-enter new password"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-3 flex hover:text-color-one"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {confirmPassword && confirmPassword !== password && (
            <p className="text-xs text-red-500 mt-1">Passwords do not match.</p>
          )}
        </div>

        <Button
          ButtonText={loading ? "Updating..." : "Save"}
          className="py-3 lg:w-[340px] xl:w-[486px]"
          disabled={
            !password ||
            !confirmPassword ||
            password !== confirmPassword ||
            !!passwordError ||
            loading
          }
        />

        {error && <p className="text-xs text-red-500 mt-2">{error}</p>}
        {successMessage && <p className="text-xs text-green-500 mt-2">{successMessage}</p>}
      </form>
    </div>
  );
}
