import Icon from "./Icon";
import { ReactNode } from "react";

interface BankProps {
  bankName: string;
  bankImage: ReactNode;
  style?: string;
  accNumber?: number;
  accName?: string;
  icon?: ReactNode;
  flexStyling?: string;
  textStyle?: string;
  onClick?: () => void; // Added onClick prop
}

export default function BankComponent({
  bankName,
  bankImage,
  accNumber,
  accName,
  flexStyling,
  style,
  icon,
  textStyle,
  onClick, // Destructuring onClick
}: BankProps) {
  return (
    <section
      className={`bg-light-grey rounded-[20px] shadow-sm flex items-start justify-between w-[168px] h-[86px] p-3 cursor-pointer ${style}`}
      onClick={onClick} // Handle click
    >
      <div>
        <div className={flexStyling}>
          <Icon icon={bankImage} containerSize="w-[24px] h-[24px]" />
          <p className={`text-color-zero text-sm font-medium ${textStyle}`}>{bankName}</p>
        </div>
        <div className="space-y-1 mt-1">
          <p className="text-xs text-color-form">{accNumber}</p>
          <p className="text-xs text-color-form">{accName}</p>
        </div>
      </div>
      <div>{icon}</div>
    </section>
  );
}
