import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";
import ToggleSwitch from "../ui/ToogleSwitch";

interface CardFiveProps {
  icon: string;
  label: string;
  status: string;
  statusClass?: string; // New prop for dynamic styling
  showArrow: string;
  showSwitch?: string;
  href: string;
  onClick?: () => void;
}

export default function CardVerification({
  icon,
  label,
  status,
  statusClass,
  showArrow,
  showSwitch,
  href,
  onClick,
}: CardFiveProps) {
  return (
    <section
      className={`flex justify-between items-center bg-light-grey hover:bg-slate-100 duration-300 cursor-pointer rounded-common p-4 xl:w-[765px] ${href}`}
      onClick={onClick}
    >
      <div className="flex gap-4">
        <div className="flex justify-center items-center">
          <Image src={icon} alt="icon" width={33} height={33} />
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-medium text-color-zero lg:text-base">
            {label}
          </p>
          {/* Apply the dynamic class to the status text */}
          <p className={`text-sm text-color-form ${statusClass}`}>{status}</p>
        </div>
      </div>
      <div className="flex items-center">
        <MdArrowForwardIos className={`text-color-zero flex-shrink-0 ${showArrow}`} />
        <ToggleSwitch showSwitch={`${showSwitch}`} />
      </div>
    </section>
  );
}
