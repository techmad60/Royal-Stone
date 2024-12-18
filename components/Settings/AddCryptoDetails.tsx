import { useState } from "react";
import Navigator from "../ui/Navigator";
import Button from "../ui/Button";
import BankAdded from "./BankAdded";

export default function AddCryptoDetails() {
  const BankStepsMobile = [
    { label: "Settings", href: "/main/settings" },
    { label: "Bank Info", href: "/main/settings" },
    { label: "Add Crypto Information", href: "/main/settings" },
  ];
  const BankStepsDesktop = [
    { label: "Bank Info", href: "/main/settings" },
    { label: "Add Crypto Wallet", href: "/main/settings" },
  ];

  const [bankAddedOpen, setIsBankAddedOpen] = useState(false);
  const [formData, setFormData] = useState({
    network: "",
    walletAddress: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission

    // Validate required fields
    if (!formData.network || !formData.walletAddress) {
      alert("Please fill in all required fields.");
      return;
    }

  // If all fields are valid, open the modal
    setIsBankAddedOpen(true);
  };

  return (
    <div className="flex flex-col bg-white lg:mr-8">
      {/* Mobile Navigator */}
      <div className="lg:hidden">
        <Navigator currentStep={2} steps={BankStepsMobile} />
      </div>
      <div className="flex flex-col justify-between my-6 w-full lg:my-0 lg:mt-[85px] lg:border-b lg:pb-4">
        <h1 className="text-color-zero text-base font-semibold ">
          Add Crypto Information
        </h1>
        <p className="text-color-form text-sm mt-2 lg:hidden">Provide your wallet details</p>
      </div>
      {/* Desktop Navigator */}
      <div className="hidden lg:flex">
        <Navigator currentStep={1} steps={BankStepsDesktop} />
      </div>
      <p className="text-color-form text-sm my-4 hidden lg:flex">Provide your wallet details</p>
      <form
        className="flex flex-col space-y-8 lg:w-[300px] xl:w-[430px] 2xlg:w-[500px]"
        onSubmit={handleFormSubmit} // Attach the submit handler
      >
        {/* Network */}
        <div className="flex flex-col gap-2">
          <label className="text-color-form text-sm">Network</label>
          <input
            type="text"
            name="network"
            value={formData.network}
            onChange={handleChange}
            required
            className="rounded-sm border-b border-slate-200 text-color-zero"
            placeholder="TRC-20"
          />
        </div>

        {/* Wallet Address */}
        <div className="flex flex-col gap-2">
          <label className="text-color-form text-sm">Wallet Address</label>
          <input
            type="text"
            name="walletAddress"
            value={formData.walletAddress}
            onChange={handleChange}
            required
            className="rounded-sm border-b border-slate-200 text-color-zero"
            placeholder="Babhauixxyanal1225616711sdjcjssa"
          />
        </div>

        <Button
          ButtonText={"Save"}
          className={`py-3 lg:w-[300px] xl:w-[430px] 2xlg:w-[500px] bg-color-one hover:bg-green-700`}
          type="submit" // Keep this as 'submit'
        />
      </form>
      {bankAddedOpen && (
        <BankAdded onClose={() => setIsBankAddedOpen(false)} textMessage="Crypto Informaton Added"/>
      )}
    </div>
  );
}
