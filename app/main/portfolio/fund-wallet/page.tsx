import { IoIosArrowUp } from "react-icons/io";
import FundWallet from "@/components/Portolio/FundWalletNavigator";
import Icon from "@/components/ui/Icon";
import Image from "next/image";
import FormButton from "@/components/ui/FormButton";
import CircleToggle from "@/components/ui/CircleToggle";
import BankComponent from "@/components/ui/BankComponent";

export default function FundWalletPage() {
    return (
        <div>
            <FundWallet currentStep={1}/>

            <p className="text-color-zero text-base font-semibold py-4">Fund Wallet</p>
            <form className="flex flex-col space-y-4 mt-2">
                {/* Trade Amount */}
                <div className="flex flex-col gap-1">
                    <label className="text-color-form text-sm">Select Wallet</label>
                    <div className="relative border-b border-slate-200">
                        <input
                            type="text"
                            required
                            className="rounded-sm  placeholder:text-color-zero placeholder:text-sm py-2"
                            placeholder="Investment"
                        />
                        <div className="absolute top-3 right-3 ">
                            <IoIosArrowUp />
                        </div>
                    </div>
                   
                </div>

                {/* Amount of Units */}
                <div className="flex flex-col gap-1">
                    <label className="text-color-form text-sm">What amount do you want to fund?</label>
                    <input
                        type="number"
                        required
                        className="rounded-sm border-b border-slate-200 placeholder:text-color-zero placeholder:text-sm py-2"
                        placeholder="$200"
                    />
                </div>

                {/* Payment Method */}
                <div className="flex flex-col gap-1 border-b">
                    <label className="text-color-form text-sm">Select a preferred funding method</label>
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 py-4">
                        <BankComponent bankImage={<Image src="/images/banks/pay-pal.svg" height={15} width={15} alt="Pay-Pal Logo"/>} bankName="PayPal"/>
                        <BankComponent bankImage={<Image src="/images/banks/zelle.svg" height={15} width={15} alt="Zelle Logo"/>} bankName="Zelle" style="bg-color-two"/>
                        <BankComponent bankImage={<Image src="/images/banks/square-cash.svg" height={15} width={15} alt="Pay-Pal Logo"/>} bankName="Cash App"/>
                    </div>
                </div>
                
                <FormButton ButtonText="Fund Wallet" className="py-3"/>
            </form>
        </div>
    )
}