import { useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";



interface MyComponentProps {
    onClose: () => void; // Explicitly defining onClose as a function with no parameters and no return type
}

export default function TradeModal({ onClose}: MyComponentProps) {
    // Disable background scroll when modal opens and re-enable it when it closes
  useEffect(() => {
    // Add class to disable scroll
    document.body.style.overflow = "hidden";
    
    // Remove class on cleanup (when modal unmounts)
    return () => {
      document.body.style.overflow = "";
    };

    
  }, []);
  

  return (
    <div className="fixed inset-0 flex bg-[#D9D9D9A6] items-center justify-center z-50">
        <div className="flex flex-col bg-white rounded-[20px] w-full max-w-[621px] h-[484px]">
            {/* Trade form contents */}
            <div className="flex items-center border-b w-full pb-2 p-4">
                <Link onClick={onClose } href="/main/stocks/stock-details" className="text-color-form text-sm">Cancel</Link>
                <p className="text-color-zero font-semibold text-lg mx-auto">Preview</p>
            </div>
            <p className="text-color-form text-sm m-6">Confirm these details of your transaction</p>
            <div className="flex items-center gap-4 my-4 border-b pb-4 m-6">
                <Image src="/images/stocks/spotify.svg" alt="Spotify Logo" width={47} height={47} />
                <div>
                    <p className="text-color-zero font-semibold text-sm lg:text-base lg:font-medium">Spotify Technology SA</p>
                    <p className="text-color-six text-sm">SPOT</p>
                </div>
            </div>
            <section className="self-center grid grid-cols-2 bg-light-grey rounded-[10px] text-sm p-5 w-[572px] h-[167px] shadow-sm">
                <div className="space-y-4">
                    <div className="">
                        <p className="text-color-form">Trade Type</p>
                        <p className="text-color-six">Stock Buy</p>
                    </div>
                    <div>
                        <p className="text-color-form">Amount</p>
                        <p className="text-color-six">$200</p>
                    </div>

                   
                </div>

                <div className="space-y-4"> 
                    <div>
                        <p className="text-color-form">Email Address</p>
                        <p className="text-color-six">SamJoneson@gmail.com</p>
                    </div>
                    <div>
                        <p className="text-color-form">Amount of units</p>
                        <p className="text-color-six">0.4157</p>
                    </div>
                    
                </div>
                
            </section>
           <hr className="mt-2"/>
            <div className="mt-8 mx-6">
                <Button ButtonText="Proceed" className="bg-color-one w-full"/>
            </div>
        </div>
    </div>
  );
}
