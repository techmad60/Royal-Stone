import { useEffect } from "react";
import Button from "@/components/ui/Button";

interface TransactionProcessedProps {
  onClose: () => void;
}

export default function TransactionProcessed({ onClose }: TransactionProcessedProps) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-lg font-semibold text-color-zero">Confirm Trade</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            X
          </button>
        </div>

        {/* Trade Summary Section */}
        <div className="mt-4 space-y-4">
          <div className="flex justify-between text-sm">
            <p className="text-color-form">Trade Type:</p>
            <p className="text-color-zero font-medium">Stock Buy</p>
          </div>
          <div className="flex justify-between text-sm">
            <p className="text-color-form">Amount:</p>
            <p className="text-color-zero font-medium">$200</p>
          </div>
          <div className="flex justify-between text-sm">
            <p className="text-color-form">Units:</p>
            <p className="text-color-zero font-medium">0.4157</p>
          </div>
          <div className="flex justify-between text-sm">
            <p className="text-color-form">Email:</p>
            <p className="text-color-zero font-medium">SamJoneson@gmail.com</p>
          </div>
        </div>

        {/* Confirm or Cancel Buttons */}
        <div className="flex justify-between mt-6">
            <div onClick={onClose}>
                <Button  ButtonText="Back" className="bg-gray-300 w-[120px]" />
            </div>
        </div>
      </div>
    </div>
  );
}
