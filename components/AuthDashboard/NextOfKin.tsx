import { useEffect } from "react";
import Button from "../ui/Button";


interface NextOfKinInfoProps {
  onClose: () => void;
}

export default function NextOfKinInformation({ onClose }: NextOfKinInfoProps) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-[#D9D9D9A6] flex items-end lg:items-center justify-end lg:justify-center z-50">
      <div className="flex flex-col bg-white rounded-t-[15px] w-full h-[510px] sm:h-[580px] lg:rounded-[20px] lg:max-w-[621px] lg:h-[500px]">
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
            Next of Kin
          </p>
        </div>
        <form
          className={`flex flex-col mt-6 space-y-8 p-4 sm:p-8 lg:p-4`}
        >
          {/* Name */}
          <div className="flex flex-col gap-2 ">
            <label className="text-color-form text-sm">Full Name</label>
            <input
              type="name"
              name="name"
              required
              className="rounded-sm border-b border-slate-200 placeholder:text-sm placeholder:text-color-zero"
             
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-color-form text-sm">Email</label>
            <input
              type="email"
              name="email"
              required
              className="rounded-sm border-b border-slate-200 placeholder:text-sm placeholder:text-color-zero"
              
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-2">
            <label className="text-color-form text-sm">Phone Number</label>
            <input
              type="tel"
              required
              className="rounded-sm border-b border-slate-200 placeholder:text-sm placeholder:text-color-zero"
              
            />
          </div>

          <div className="flex flex-col gap-2 ">
            <label className="text-color-form text-sm">Address</label>
            <input
              type="name"
              name="name"
              required
              className="rounded-sm border-b border-slate-200 placeholder:text-sm placeholder:text-color-zero"
             
            />
          </div>

          <Button
            ButtonText="Finish"
            className="py-3"
          />
        </form>
      </div>
    </div>
  );
}
