import { useEffect } from "react";
import { FaRegImage } from "react-icons/fa";
import NoHistory from "../ui/NoHistory";

interface ReceiptModalProps {
  onClose: () => void;
}

export default function ReceiptModal({ onClose }: ReceiptModalProps) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 flex bg-[#D9D9D9A6] items-end lg:items-center justify-end lg:justify-center z-50">
      <div className="flex flex-col bg-white rounded-t-[15px] w-full h-[426px] lg:rounded-[20px] lg:max-w-[621px] lg:h-[401px]">
        <div className="flex justify-center items-center mt-4 lg:hidden">
          <hr className="w-[51px] h-[5px] rounded-[40px] bg-[#D9D9D9]" />
        </div>
        <div className="flex items-center border-b w-full pb-2 p-4">
          <p
            onClick={onClose}
            className="text-color-form text-sm cursor-pointer"
          >
            Back
          </p>
          <p className="text-color-zero font-semibold text-lg mx-auto relative right-4">
            Upload Proof
          </p>
        </div>
        <p className="text-color-form text-sm mx-4 py-4">
          Kindly provide a screenshot of the tranasction
        </p>

        <section className="mt-2 mx-4 flex justify-center items-center">
          <NoHistory
            icon={<FaRegImage className="text-color-one text-[22px]"/>}
            text="Tap to Upload Image"
            classname="text-color-one text-sm font-medium"
            height="h-[145px]"
            iconSize="w-[39.6px] h-[39.6px]"
          />
          <hr />
        </section>
      </div>
    </div>
  );
}
