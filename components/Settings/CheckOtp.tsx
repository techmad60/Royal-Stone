import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../ui/Button";

interface CheckOtpProps {
  onClose: () => void;
  onVerify: () => void;
}

export default function CheckOtp({ onClose, onVerify }: CheckOtpProps) {
  const [loading, setLoading] = useState(false); // Loading state
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // Error handling
  const router = useRouter();

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleVerify = async () => {
    setLoading(true);
    setErrorMessage(null); // Reset error message
  
    try {
      // Retrieve token from local storage
      const token = localStorage.getItem("accessToken");
  
      if (!token) {
        throw new Error("Access token is missing. Please log in again.");
      }

  
      const response = await fetch(
        "https://api-royal-stone.softwebdigital.com/api/account/request-password-update",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include the access token
          },
        }
      );
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error("API Error Response:", errorData);
        throw new Error(errorData.message || "Failed to send OTP. Please try again.");
      }

      if (response.status === 401) {
        router.push("/auth/login")
      }
  
      // Handle success
      const data = await response.json();
      console.log("OTP Request Successful:", data);
  
      // Navigate or take further action
      onVerify(); // Navigate to "Change Password"
      onClose(); // Close modal
    } catch (error: unknown) { // Use `unknown` to type the error
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <div className="fixed inset-0 flex bg-[#D9D9D9A6] items-end lg:items-center justify-end lg:justify-center z-50">
      <div className="flex flex-col bg-white rounded-t-[15px] w-full h-[335px] lg:rounded-[20px] lg:max-w-[433px] lg:h-[276px]">
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
            Change Password
          </p>
        </div>

        <div className="flex items-center gap-4 my-1 p-4">
          <p className="text-color-form text-sm">
            To reset your password kindly verify with an OTP that will be sent
            to your email.
          </p>
        </div>

        {/* Display error message */}
        {errorMessage && (
          <p className="text-red-500 text-center text-sm">{errorMessage}</p>
        )}

        <div className="mt-12 m-4">
          <Button
            ButtonText={loading ? "Sending OTP..." : "Verify"}
            className="py-3 w-full lg:w-full"
            onClick={handleVerify}
            disabled={loading} // Disable button during loading
          />
        </div>
      </div>
    </div>
  );
}
