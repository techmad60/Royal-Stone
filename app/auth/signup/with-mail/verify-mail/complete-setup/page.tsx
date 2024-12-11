"use client";
import { useState, useEffect } from "react";
import { Country, State } from "country-state-city";
import { ICountry, IState } from "country-state-city";
import Navigator from "@/components/ui/Navigator";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const signupSteps = [
  { label: "Create Account", href: "/auth/signup" },
  { label: "With Mail", href: "/auth/signup/with-mail" },
  { label: "Verify Email", href: "/auth/signup/with-mail/verify-mail" },
  { label: "Complete Setup", href: "/auth/signup/with-mail/verify-mail/complete-setup" },
];

export default function CompleteSetup() {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [states, setStates] = useState<IState[]>([]);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [gender, setGender] = useState("");
  const [username, setUsername] = useState(""); // New state for username
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Fetch countries on component mount
  useEffect(() => {
    const fetchedCountries = Country.getAllCountries();
    setCountries(fetchedCountries);
  }, []);

  // Fetch states when a country is selected
  useEffect(() => {
    if (selectedCountry) {
      const fetchedStates = State.getStatesOfCountry(selectedCountry);
      setStates(fetchedStates);
    }
  }, [selectedCountry]);
// Retrieve access token from localStorage
useEffect(() => {
  try {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setAccessToken(token);
      console.log("Access token retrieved:", token);
    } else {
      console.warn("Access token not found in localStorage.");
    }
  } catch (error) {
    console.error("Error accessing localStorage:", error);
  }
}, []);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Validate the form fields
    if (!gender || !username || !selectedCountry || !selectedState || !address) {
      alert("Please fill all fields before submitting.");
      return;
    }

    // Prepare the data for the API request
    const requestData = {
      gender,
      username,
      country: selectedCountry,
      state: selectedState,
      address,
    };

    try {
      const response = await fetch("https://api-royal-stone.softwebdigital.com/api/account/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error("Failed to update the profile");
      }

      const result = await response.json();
      setLoading(false);
      router.push(`/auth/auth-dashboard`)
      console.log("Response data:", result);
    } catch (error: unknown) {
      setLoading(false);
      if (error instanceof Error) {
        alert("Error updating profile: " + error.message);
        console.error("Error:", error);
      } else {
        alert("An unexpected error occurred.");
        console.error("Unexpected error:", error);
      }
    }
  };

  return (
    <div className="flex flex-col">
      <Navigator currentStep={3} steps={signupSteps} />
      <div className="flex items-center justify-between lg:w-[417px] xl:w-[535px]">
        <h1 className="text-colour-five text-base mt-8 lg:text-[18px]">
          Complete Setup
        </h1>
        <Link
          href="/auth/auth-dashboard"
          className="flex items-center justify-center text-sm text-white text-center mt-8 bg-color-one rounded-xl duration-300 hover:bg-green-700 w-[71px] h-[26px]"
        >
          Skip
        </Link>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col mt-8 space-y-8 lg:w-[420px] xl:w-[535px]">
        {/* Gender */}
        <div className="flex flex-col gap-2">
          <label className="text-color-form text-sm">Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="rounded-sm border-b border-slate-200 text-colour-five w-full"
            required
          >
            <option value="" disabled>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* Username */}
        <div className="flex flex-col gap-2">
          <label className="text-color-form text-sm">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="rounded-sm border-b border-slate-200 text-colour-five"
            required
          />
        </div>

        {/* Country */}
        <div className="flex flex-col gap-2">
          <label className="text-color-form text-sm">Country</label>
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="rounded-sm border-b border-slate-200 text-colour-five w-full"
            required
          >
            <option value="" disabled>Select Country</option>
            {countries.map((country) => (
              <option key={country.isoCode} value={country.isoCode}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        {/* State */}
        <div className="flex flex-col gap-2">
          <label className="text-color-form text-sm">State</label>
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="rounded-sm border-b border-slate-200 text-colour-five w-full"
            disabled={!states.length}
            required
          >
            <option value="" disabled>Select State</option>
            {states.map((state) => (
              <option key={state.isoCode} value={state.isoCode}>
                {state.name}
              </option>
            ))}
          </select>
        </div>

        {/* Address */}
        <div className="flex flex-col gap-2">
          <label className="text-color-form text-sm">Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="rounded-sm border-b border-slate-200 text-colour-five"
          />
        </div>

        <Button
          type="submit"
          ButtonText={loading ? "Processing" : "Process"}
          className="py-3 mt-20 w-full lg:w-[417px] xl:w-[535px]"
        />
      </form>
    </div>
  );
}
