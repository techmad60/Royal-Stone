"use client";
import { useState, useEffect } from "react";
import { Country, State } from "country-state-city";
import { ICountry, IState } from "country-state-city";
import Navigator from "@/components/ui/Navigator";
import Button from "@/components/ui/Button";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const signupSteps = [
  { label: "Create Account", href: "/auth/signup" },
  { label: "With Mail", href: "/auth/signup/with-mail" },
  { label: "Verify Email", href: "/auth/signup/with-mail/verify-mail" },
  { label: "Complete Setup", href: "/auth/signup/with-mail/verify-mail/complete-setup" },
];

type ArrowStates = "gender" | "country" | "state";

export default function CompleteSetup() {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [states, setStates] = useState<IState[]>([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [isArrowUpStates, setIsArrowUpStates] = useState<Record<ArrowStates, boolean>>({
    gender: true,
    country: true,
    state: true,
  });

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

  const handleArrowClick = (field: ArrowStates) => {
    setIsArrowUpStates((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
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
      <form className="flex flex-col mt-8 space-y-8 lg:w-[420px] xl:w-[535px]">
        {/* Gender */}
        <div className="flex flex-col gap-2">
          <label className="text-color-form text-sm">Gender</label>
          <div className="relative">
            <input
              type="text"
              required
              autoFocus
              className="rounded-sm border-b border-slate-200 text-colour-five w-full"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center hover:text-green-700"
              onClick={() => handleArrowClick("gender")}
            >
              {isArrowUpStates.gender ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
          </div>
        </div>

        {/* Country */}
        <div className="flex flex-col gap-2">
          <label className="text-color-form text-sm">Country</label>
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="rounded-sm border-b border-slate-200 text-colour-five w-full"
          >
            <option value="" disabled>
              Select Country
            </option>
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
          >
            <option value="" disabled>
              Select State
            </option>
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
            name="text"
            required
            className="rounded-sm border-b border-slate-200 text-colour-five"
          />
        </div>

        <Button
          type="submit"
          ButtonText="Proceed"
          className="py-3 mt-20 w-full lg:w-[417px] xl:w-[535px]"
        />
      </form>
    </div>
  );
}
