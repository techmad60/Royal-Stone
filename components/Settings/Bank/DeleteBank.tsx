import useBankCryptoStore from "@/store/bankCryptoStore";
import { useEffect, useState } from "react";
import { BiSolidBank } from "react-icons/bi";
import { FaBitcoin } from "react-icons/fa"; // For Crypto Icon
import Button from "../../ui/Button";
import Icon from "../../ui/Icon";

interface DeleteBankProps {
  onClose?: () => void;
}

export default function DeleteBank({ onClose }: DeleteBankProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const {
    selectedBankId,
    selectedCryptoId,
    bankDetails,
    cryptoWallets,
    selectedType, // Get selectedType from store
    deleteBank,
    deleteWallet,
  } = useBankCryptoStore();

  const selectedBank = bankDetails.find((bank) => bank.id === selectedBankId);
  const selectedCrypto = cryptoWallets.find(
    (wallet) => wallet.id === selectedCryptoId
  );
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null); // State for feedback message

  const handleDelete = () => {
    if (selectedType === "bank" && selectedBank) {
      deleteBank(selectedBank.id);
      setFeedbackMessage("Bank Account deleted successfully!");
    } else if (selectedType === "crypto" && selectedCrypto) {
      deleteWallet(selectedCrypto.id);
      setFeedbackMessage("Crypto Wallet deleted successfully!");
    }
    
    // Close the modal after 2 seconds
    setTimeout(() => {
      onClose && onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 flex bg-[#D9D9D9A6] items-end lg:items-center justify-end lg:justify-center z-50">
      <div className="flex flex-col bg-white rounded-t-[15px] w-full h-[335px] lg:rounded-[20px] lg:max-w-[621px] lg:h-[348px]">
        <div className="flex justify-center items-center mt-4 lg:hidden">
          <hr className="w-[51px] h-[5px] rounded-[40px] bg-[#D9D9D9]" />
        </div>
        <div className="flex items-center border-b w-full pb-2 p-4">
          <p
            onClick={onClose}
            className="text-color-form text-sm cursor-pointer"
          >
            Cancel
          </p>
          <p className="text-color-zero font-semibold text-lg mx-auto relative right-4">
            Delete Account
          </p>
        </div>

        <p className="text-color-form text-sm my-1 p-4">
          Do you want to delete the following details?
        </p>

        {/* Render the dynamic content based on the selected account */}
        {selectedType === "bank" && selectedBank ? (
          <>
            <section className="bg-light-grey rounded-common shadow-sm h-[84px] py-2 flex flex-col space-y-4 mx-4">
              <div className="flex pl-4 items-center gap-3">
                <Icon icon={<BiSolidBank className="text-color-one                                           "/>} containerSize="w-[16px] h-[16px]" />
                <p className="text-sm font-medium text-color-zero">{selectedBank.bankName}</p>
              </div>
              <div className="flex items-center gap-4 pl-4">
                <p className="text-color-form text-sm border-r pr-4">
                  {selectedBank.accountNumber}
                </p>
                <p className="text-color-form text-sm">
                  {selectedBank.accountName}
                </p>
              </div>
            </section>
          </>
        ) : selectedType === "crypto" && selectedCrypto ? (
          <>
            <section className="bg-light-grey rounded-common shadow-sm h-[84px] py-2 flex flex-col space-y-4 mx-4">
              <div className="flex pl-4 items-center gap-3">
                <Icon
                  icon={<FaBitcoin className="text-color-one"/>}
                  containerSize="w-[16px] h-[16px]"
                />
                <p className="text-sm font-medium text-color-zero">{selectedCrypto.networkID.name}</p>
              </div>
              <div className="flex items-center gap-4 pl-4">
                <p className="text-color-form text-sm border-r pr-4">
                  {selectedCrypto.address}
                </p>
              </div>
            </section>
          </>
        ) : (
          <p className="text-color-form text-sm p-4">No account selected</p>
        )}
        {/* Render the feedback message if it exists */}
        {feedbackMessage && (
          <div className="text-green-500 font-semibold text-center p-4">
            {feedbackMessage}
          </div>
        )}
        <div className="mt-12 m-4 lg:mt-8">
          <Button ButtonText="Delete" className="py-3 w-full lg:w-full" onClick={handleDelete} />
        </div>
      </div>
    </div>
  );
}
