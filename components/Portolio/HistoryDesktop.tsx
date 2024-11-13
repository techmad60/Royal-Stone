import { IoIosArrowForward } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import Link from "next/link";
import Icon from "../ui/Icon";

const transactions = [
  {
    description: "Investment Wallet Funding",
    amount: "$20",
    date: "Sept 9, 2024",
    time: "9:12 AM",
    status: "Successful",
    link: "/portfolio/details",
  },
  {
    description: "Investment Wallet Funding",
    amount: "$20",
    date: "Sept 9, 2024",
    time: "9:12 AM",
    status: "Successful",
    link: "/portfolio/details",
  },
  {
    description: "Investment Wallet Funding",
    amount: "$20",
    date: "Sept 9, 2024",
    time: "9:12 AM",
    status: "Successful",
    link: "/portfolio/details",
  },
  {
    description: "Investment Wallet Funding",
    amount: "$20",
    date: "Sept 9, 2024",
    time: "9:12 AM",
    status: "Successful",
    link: "/portfolio/details",
  },
  // Add more transactions as needed
];

export default function HistoryDesktop() {
  return (
    <div>
      {transactions.map((transaction, index) => (
        <section key={index} className="grid grid-cols-7 px-3 mr-8 border-b py-4 my-4">
          <div className="flex items-center gap-3 col-span-2">
            <Icon icon={<GoPlus className="text-color-one" />} />
            <p className="text-sm text-color-zero">{transaction.description}</p>
          </div>
          <p className="text-sm text-color-zero">{transaction.amount}</p>
          <p className="text-sm text-color-zero col-span-2">
            {transaction.date} | {transaction.time}
          </p>
          <p className="text-sm text-color-one">{transaction.status}</p>
          <Link href={transaction.link} className="flex items-center justify-center border rounded-[20px] gap-2 w-[78px] h-[22px]">
            <p className="text-xs text-color-form">View</p>
            <IoIosArrowForward className="text-color-form text-sm" />
          </Link>
        </section>
      ))}
    </div>
  );
}
