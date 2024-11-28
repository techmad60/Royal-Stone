"use client";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import { IoIosArrowDown } from "react-icons/io";

interface AddBankInformationProps {
  onClose: () => void;
  onSave: (status: boolean) => void;
}

interface Bank {
  name: string;
  code: string;
  logo: string;
}

export default function AddBankInformation({
  onClose,
  onSave
}: AddBankInformationProps) {
  const [userName, setUserName] = useState("");
  const [banks, setBanks] = useState<Bank[]>([]);
  const [selectedBank, setSelectedBank] = useState<Bank | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [accountNumber, setAccountNumber] = useState(""); // Added state for account number
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Added for arrow rotation

  // Fetch banks from API
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

  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const response = await fetch("https://nigerianbanks.xyz");
        const data = await response.json();
        setBanks(data);
      } catch (error) {
        console.error("Error fetching banks:", error);
      }
    };

    fetchBanks();

    // Load saved user name and prevent background scrolling
    const savedName = localStorage.getItem("userName");
    if (savedName) {
      setUserName(savedName);
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Handle Bank Selection
  const handleBankSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCode = event.target.value;
    const bank = banks.find((b) => b.code === selectedCode);
    setSelectedBank(bank || null);
  };

  // Handle Account Number Input
  const handleAccountNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccountNumber(event.target.value);
  };

  // Handle Dropdown Toggle
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Handle Form Submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent default form behavior

    if (!selectedBank || !accountNumber) {
      alert("Please select a bank and enter an account number.");
      return;
    }

    const payload = {
      bankName: selectedBank.name,
      bankCode: selectedBank.code,
      accountNumber: accountNumber,
    };

    try {
      const response = await fetch( "https://api-royal-stone.softwebdigital.com/api/bank", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Bank details saved successfully!");
        onSave(true); 
        onClose(); // Close the modal after success
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message || "Failed to save bank details."}`);
      }
    } catch (error) {
      console.error("Error saving bank details:", error);
      alert("An error occurred while saving bank details.");
    }
  };

  return (
    <div className="fixed inset-0 flex bg-[#D9D9D9A6] items-end lg:items-center justify-end lg:justify-center z-50">
      <div className="flex flex-col bg-white rounded-t-[15px] w-full h-[400px] lg:rounded-[20px] lg:max-w-[621px] lg:h-[400px]">
        <div className="flex items-center border-b w-full pb-2 p-4">
          <p
            onClick={onClose}
            className="text-color-form text-sm cursor-pointer"
          >
            Cancel
          </p>
          <p className="text-color-zero font-semibold text-lg mx-auto relative right-4">
            Add Bank Details
          </p>
        </div>
        <div className="flex flex-col bg-white">
          <p className="text-color-form text-sm p-4">
            Provide your bank account details
          </p>
          <form className="flex flex-col px-4" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-4">
              {/* Bank Selection */}
              <div className="flex flex-col gap-1">
                <label className="text-color-form text-sm">Bank</label>
                <div className="flex gap-2 items-center border-b pb-3 relative mt-2">
                  <div className="relative w-full">
                    <select
                      className="appearance-none w-full text-sm border-none pr-8 focus:outline-none"
                      onChange={handleBankSelection}
                      onClick={toggleDropdown}
                      onBlur={() => setIsDropdownOpen(false)}
                      required
                    >
                      <option value="">Select a bank</option>
                      {banks.map((bank) => (
                        <option key={bank.code} value={bank.code}>
                          {bank.name}
                        </option>
                      ))}
                    </select>
                    <span
                      className={`absolute inset-y-0 right-0 flex items-center pointer-events-none transition-transform ${
                        isDropdownOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <IoIosArrowDown />
                    </span>
                  </div>
                </div>
              </div>
              {/* Account Number */}
              <div className="flex flex-col gap-1">
                <label className="text-color-form text-sm">
                  Account Number
                </label>
                <div className="relative border-b border-slate-200">
                  <div className="flex justify-between py-2">
                    <input
                      type="text"
                      value={accountNumber}
                      onChange={handleAccountNumberChange}
                      required
                      className="outline-none rounded-sm placeholder:text-sm w-[300px] placeholder:text-slate-400 text-colour-five"
                      placeholder="2010100191"
                    />
                    <div>
                      <p className="text-sm text-color-one border-b border-color-one leading-none">
                        {userName || "User Name"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button
              ButtonText="Save"
              className="py-3 w-full mt-12 lg:w-full"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
