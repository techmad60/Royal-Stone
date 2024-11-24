"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Navigator from "@/components/ui/Navigator";
import CheckBox from "@/components/ui/Checkedbox";
import EmptyBox from "@/components/ui/UncheckedBox";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const signupSteps = [
  { label: "Create Account", href: "/auth/signup" },
  { label: "With Email", href: "/auth/signup/with-mail" },
];

export default function SignupWithMail() {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    referralCode: "",
  });
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Toggle Password Visibility
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  // Toggle the checkbox state
  const toggleCheckbox = () => setIsChecked(!isChecked);

  // Handle form field updates
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Clear previous errors
    setPasswordError(null);
    setEmailError(null);
  
    // Check for empty fields manually
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.phone
    ) {
      setError("All fields are required.");
      return;
    }
  
    // Password validation regex
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      setPasswordError(
        "Password must be at least 8 characters long and include an uppercase letter, a number, and a special character."
      );
      return;
    }
  
    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
  
    if (!isChecked) {
      setError("You must accept the terms and conditions.");
      return;
    }
  
    setError(null);
    setLoading(true);
  
    try {
      // Step 1: Register the user
      const registrationResponse = await fetch(
        "https://api-royal-stone.softwebdigital.com/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
            fullName: formData.name,
            phone: formData.phone,
            referralCode: formData.referralCode || undefined, // optional field
          }),
        }
      );
  
      const registrationResult = await registrationResponse.json();
  
      if (!registrationResponse.ok) {
        throw new Error(registrationResult.message || "Registration failed");
      }
      // Save tokens in localStorage
    const { accessToken, refreshToken } = registrationResult.data;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    console.log("Tokens stored successfully:", { accessToken, refreshToken });
  
      // Step 2: Trigger email verification
      const verificationResponse = await fetch(
        `https://api-royal-stone.softwebdigital.com/api/auth/request-verification?email=${encodeURIComponent(
          formData.email
        )}`,
        {
          method: "GET",
        }
      );
  
      const verificationResult = await verificationResponse.json();
  
      if (!verificationResponse.ok) {
        throw new Error(
          verificationResult.message || "Failed to send verification email"
        );
      }
  
      console.log("Verification email sent:", verificationResult);
  
      // Navigate to the verification page with the email as a query parameter
      router.push(`/auth/signup/with-mail/verify-mail?email=${encodeURIComponent(formData.email)}`);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="flex flex-col">
      <Navigator currentStep={1} steps={signupSteps} />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col mt-8 space-y-8 lg:w-[417px] xl:w-[33.5rem]"
      >
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="text-color-form text-sm">Full Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="rounded-sm border-b border-slate-200 text-colour-five"
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-2">
          <label className="text-color-form text-sm">Phone Number</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="rounded-sm border-b border-slate-200 text-colour-five"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <label className="text-color-form text-sm">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="rounded-sm border-b border-slate-200 w-full text-colour-five"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-3 flex hover:text-color-one"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {passwordError && (
              <p className="text-red-500 text-xs mt-1 text-start">
                {passwordError}
              </p>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-color-form text-sm">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="rounded-sm border-b border-slate-200 text-colour-five"
          />
          {emailError && (
            <p className="text-red-500 text-xs mt-1 text-start">{emailError}</p>
          )}
        </div>

        {/* Referral Code */}
        <div className="flex flex-col gap-2">
          <label className="text-color-form text-sm">
            Referral Code (Optional)
          </label>
          <input
            type="text"
            name="referralCode"
            value={formData.referralCode}
            onChange={handleChange}
            className="rounded-sm border-b border-slate-200 text-colour-five"
          />
        </div>

        {/* Terms & Conditions */}
        <div className="flex items-start gap-2">
          <div onClick={toggleCheckbox} className="cursor-pointer">
            {isChecked ? <CheckBox /> : <EmptyBox />}
          </div>
          <p className="text-sm text-color-form">
            Accept{" "}
            <span className="cursor-pointer pb-[0.02rem] border-b hover:text-color-one">
              terms & conditions.
            </span>
          </p>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}

        {/* Submit Button */}
        <Button
          type="submit"
          ButtonText={loading ? "Creating Account..." : "Create Account"}
          className="py-3 w-full mt-2 lg:w-[417px] xl:w-[536px]"
          disabled={loading}
        />
      </form>
      <p className="text-slate-400 text-center mt-8 lg:w-[417px] xl:w-[536px]">
        Already have an account?{" "}
        <span className="font-semibold text-color-one duration-300 hover:text-green-700">
          <Link href="/auth/login">Sign in</Link>
        </span>
      </p>
    </div>
  );
}
