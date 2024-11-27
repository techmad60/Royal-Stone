import { useEffect } from "react";
import CardVerification from "./CardVerification";
import { BiSolidBank } from "react-icons/bi";
import { IoPeople } from "react-icons/io5";
import { BsPersonCheck } from "react-icons/bs";
import { FaRegImage } from "react-icons/fa6";

interface KycInformationProps {
  onClose: () => void;
  onClickValidId: () => void;
  onClickNextOfKin: () => void;
  onClickBvn: () => void;
}

export default function KycInformation({ onClose, onClickValidId, onClickNextOfKin, onClickBvn }: KycInformationProps) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 flex bg-[#D9D9D9A6] items-end lg:items-center justify-end lg:justify-center z-50">
      <div className="flex flex-col bg-white rounded-t-[15px] w-full h-[430px] sm:h-[500px] lg:rounded-[20px] lg:max-w-[621px] lg:h-[430px]">
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
            Kyc Information
          </p>
        </div>
        <div className="border-t flex-col space-y-3 p-4 sm:p-8 lg:p-4">
          {/* Bank Information Card */}

          <CardVerification
            iconImg={<BsPersonCheck className="text-xl text-color-one" />}
            label="Valid Identification"
            status="Not Set"
            showArrow="flex"
            showSwitch="hidden"
            style="xl:w-auto"
            onClick={onClickValidId}
          />
          <CardVerification
            iconImg={<IoPeople className="text-xl text-color-one" />}
            label="Next of Kin"
            status="Not Set"
            showArrow="flex"
            showSwitch="hidden"
            style="xl:w-auto"
            onClick={onClickNextOfKin}
          />
          <CardVerification
            iconImg={<FaRegImage className="text-xl text-color-one" />}
            label="Profile Picture"
            status="Not Set"
            showArrow="flex"
            showSwitch="hidden"
            style="xl:w-auto"
          />
          
          <CardVerification
            iconImg={<BiSolidBank className="text-xl text-color-one" />}
            label="BVN"
            status="Not Set" // Dynamically set the class for text color
            showArrow="flex" // Hide arrow if provided
            showSwitch="hidden"
            style="xl:w-auto"
            onClick={onClickBvn}
          />
        </div>
      </div>
    </div>
  );
}
