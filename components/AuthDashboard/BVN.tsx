import { useEffect } from "react";
import Button from "../ui/Button";


interface BvnInfoProps {
  onClose: () => void;
}

export default function BvnInformation({ onClose }: BvnInfoProps) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-[#D9D9D9A6] flex items-end lg:items-center justify-end lg:justify-center z-50">
      <div className="flex flex-col bg-white rounded-t-[15px] w-full h-[260px] sm:h-[320px] lg:rounded-[20px] lg:max-w-[421px] lg:h-[260px]">
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
            BVN Details
          </p>
        </div>
        <form className={`flex flex-col p-4 mt-6 space-y-8 sm:p-8 lg:p-4`}>
        {/* Name */}
        <div className="flex flex-col gap-2 ">
          <label className="text-color-form text-sm">Provide your BVN</label>
          <input
            type="name"
            name="name"
            required
            className="rounded-sm border-b border-slate-200 placeholder:text-sm placeholder:text-color-zero"
            placeholder="1120 101 0101"
          />
        </div>
        
        <Button ButtonText="Finish" className="py-3" />
      </form>
      </div>
    </div>
  );
}
