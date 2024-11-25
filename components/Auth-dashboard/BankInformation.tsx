import { useEffect } from "react";
import Button from "../ui/Button";
import { BiSolidBank } from "react-icons/bi";

interface BankInformationProps {
  onClose: () => void;
  onAdd: () => void;
}

export default function BankInformation({ onClose, onAdd }: BankInformationProps) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 flex bg-[#D9D9D9A6] items-end lg:items-center justify-end lg:justify-center z-50">
      <div className="flex flex-col bg-white rounded-t-[15px] w-full h-[335px] lg:rounded-[20px] lg:max-w-[621px] lg:h-[348px]">
        <div className="flex justify-center items-center mt-4 lg:hidden">
          <hr className="w-[51px] h-[5px] rounded-[40px] bg-[#D9D9D9]" />
        </div>
        <div className="flex items-center border-b w-full pb-2 p-4 sm:p-8 lg:p-4">
          <p
            onClick={onClose}
            className="text-color-form text-sm cursor-pointer"
          >
            Cancel
          </p>
          <p className="text-color-zero font-semibold text-lg mx-auto relative right-4">
            Bank Information
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center space-y-4 my-8 py-6 shadow-sm bg-light-grey rounded-common w-full lg:w-[430px]">
            <div
              className={`w-7 h-7 shadow-sm flex items-center justify-center transform rotate-45 rounded-[9px] bg-white"
                }`}
            >
              <span className="text-color-one transform -rotate-45">
                <BiSolidBank />
              </span>
            </div>
            <p className="text-sm text-color-form">
              You have not added any bank information
            </p>
            <Button
              ButtonText="Add Bank Account"
              className="w-[200px] rounded-[12px] h-[35px] flex justify-center items-center"
              onClick={onAdd}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
