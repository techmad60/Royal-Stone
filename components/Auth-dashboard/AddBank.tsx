"use client";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import { IoIosArrowDown } from "react-icons/io";

interface AddBankInformationProps {
  onClose: () => void;
}

interface Bank {
  name: string;
  code: string;
  logo: string;
}

export default function AddBankInformation({
  onClose,
}: AddBankInformationProps) {
  const [userName, setUserName] = useState("");
  const [banks, setBanks] = useState<Bank[]>([]);
  const [selectedBank, setSelectedBank] = useState<Bank | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Added for arrow rotation

  // Fetch banks from API
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

    // Prevent background scroll when modal is open
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

  // Handle Dropdown Toggle
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
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
          <form className="flex flex-col px-4">
            <div className="flex flex-col space-y-4">
              {/* Bank Selection */}
              <div className="flex flex-col gap-1">
                <label className="text-color-form text-sm">Bank</label>
                <div className="flex gap-2 items-center border-b pb-3 relative mt-2">
                  {selectedBank && (
                    <img
                      src={selectedBank.logo}
                      alt={`${selectedBank.name} Logo`}
                      className="w-8 h-8"
                    />
                  )}
                  <div className="relative w-full">
                    <select
                      className="appearance-none w-full text-sm border-none pr-8 focus:outline-none"
                      onChange={handleBankSelection}
                      onClick={toggleDropdown} // Toggle dropdown state on click
                      onBlur={() => setIsDropdownOpen(false)} // Close on blur
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
                      required
                      className="rounded-sm placeholder:text-color-zero placeholder:text-sm"
                      placeholder="2010100191"
                    />
                    <div>
                      <p className="text-sm text-color-one border-b border-color-one leading-none">
                        {userName}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button ButtonText="Save" className="py-3 w-full mt-12 lg:w-full" />
          </form>
        </div>
      </div>
    </div>
  );
}
