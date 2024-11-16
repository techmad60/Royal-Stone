import { useEffect } from "react";
import Button from "../ui/Button";

interface CheckOtpProps {
    onClose: () => void;
    onVerify: () => void;
  }
export default function CheckOtp({onClose, onVerify}:CheckOtpProps) {

    // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleVerify = () => {
    onClose(); // Close modal
    onVerify(); // Navigate to "Change Password"
  };
    return (
        <div className="fixed inset-0 flex bg-[#D9D9D9A6] items-end lg:items-center justify-end lg:justify-center z-50">
            <div className="flex flex-col bg-white rounded-t-[15px] w-full h-[335px] lg:rounded-[20px] lg:max-w-[433px] lg:h-[276px]">
                <div className="flex justify-center items-center mt-4 lg:hidden">
                    <hr className="w-[51px] h-[5px] rounded-[40px] bg-[#D9D9D9]" />
                </div>
                <div className="flex items-center border-b w-full pb-2 p-4">
                    <p onClick={onClose} className="text-color-form text-sm cursor-pointer">
                        Cancel
                    </p>
                    <p className="text-color-zero font-semibold text-lg mx-auto relative right-4">Change Password</p>
                </div>

                <div className="flex items-center gap-4 my-1 p-4">
                    <p className="text-color-form text-sm">To reset your password kindly verify with an OTP that will be sent to your email</p>
                </div>

                <div className="mt-12 m-4" onClick={handleVerify}>
                        <Button ButtonText="Verify" className="py-3 w-full lg:w-full"/>
                    </div>
            </div>
        </div>
    )
}