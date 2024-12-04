import { useState, useEffect } from "react";
import Icon from "../ui/Icon";
import Button from "@/components/ui/Button";
import StatRow from "../ui/StatRow";

interface MyComponentProps {
  onClose: () => void;
  onProceed: () => void;
  amount: string;
  productId: string;
  noOfUnits: string;
}

export default function BankTransfer({
  onClose,
  onProceed,
  amount,
  // productId,
  // noOfUnits,
}: MyComponentProps) {
  const [timeLeft, setTimeLeft] = useState(3600); // 3600 seconds = 1 hour
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Countdown logic
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onClose(); // Automatically close the modal when the timer reaches 0
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return {
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(remainingSeconds).padStart(2, "0"),
    };
  };

  const { minutes, seconds } = formatTime(timeLeft);

  // const handleInvestmentSubmit = async () => {
  //   setLoading(true);
  //   setError(null);

  //   try {
  //     // Call the investment API using fetch
  //     const response = await fetch(
  //       "https://api-royal-stone.softwebdigital.com/api/investment",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json", // Make sure the request is sent as JSON
  //         },
  //         body: JSON.stringify({
  //           productID: productId, // Send product ID
  //           slot: noOfUnits, // Send number of units
  //         }),
  //       }
  //     );

  //     // Check if the response is successful (status code 200-299)
  //     if (!response.ok) {
  //       throw new Error("Failed to process the investment.");
  //     }

  //     // Parse the response JSON
  //     const data = await response.json();

  //     console.log("Investment successful:", data);

  //     // On success, proceed with the investment
  //     onProceed(); // Proceed with the next step (e.g., show success screen)
  //   } catch (err) {
  //     console.error("Error processing investment:", err);
  //     setError("An error occurred while processing your investment.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="fixed inset-0 flex bg-[#D9D9D9A6] items-end lg:items-center justify-end lg:justify-center z-50">
      <div className="bg-white flex flex-col rounded-[20px] h-[599px] w-full lg:max-w-[621px] lg:h-[585px]">
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
            Make Investment
          </p>
        </div>
        <p className="text-color-form text-sm mx-4 py-4">
          You are required to make a bank transfer of ${amount} to the details
          provided within an hour to proceed with your investment payment
        </p>
        <section className="flex flex-col justify-center items-center rounded-[10px] h-[91px] space-y-4 shadow-sm mx-4 text-sm lg:p-5 lg:w-[572px]">
          <p className="text-color-form">Timer</p>
          <div className="flex justify-center items-center space-x-4">
            <Icon
              icon={
                <p className="text-sm font-medium text-color-six">
                  {minutes[0]}
                </p>
              }
            />
            <Icon
              icon={
                <p className="text-sm font-medium text-color-six">
                  {minutes[1]}
                </p>
              }
            />
            <Icon
              icon={<p className="text-sm font-medium text-color-six">:</p>}
            />
            <Icon
              icon={
                <p className="text-sm font-medium text-color-six">
                  {seconds[0]}
                </p>
              }
            />
            <Icon
              icon={
                <p className="text-sm font-medium text-color-six">
                  {seconds[1]}
                </p>
              }
            />
          </div>
        </section>
        <section className="flex flex-col mt-4 bg-light-grey mx-6 rounded-[10px] px-4 shadow-sm">
          <StatRow
            label="Amount"
            value={`$${amount}`}
            valueClass="text-color-six text-sm"
          />
          <StatRow
            label="Bank Name"
            value="Wema Bank"
            valueClass="text-color-six text-sm"
          />
          <StatRow
            label="Account Number"
            value="3102991190"
            valueClass="text-color-six text-sm"
            showCopyIcon
          />
          <StatRow
            label="Account Name"
            value="Admin Checkout-Royal"
            valueClass="text-color-six text-sm"
            isLast={true}
          />
        </section>
        <hr className="mt-8" />
        <div className="mt-12 mx-6 lg:mt-8">
          <Button
            ButtonText={"I have made the transfer"}
            className="bg-color-one w-full"
            onClick={onProceed}
          />
        </div>
      </div>
    </div>
  );
}
