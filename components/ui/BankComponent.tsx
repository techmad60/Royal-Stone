import Icon from "./Icon";
import { ReactNode } from "react";

interface BankProps {
  bankName: string;
  bankImage?: ReactNode; // Optional bank image
  style?: string; // Custom styles
  accNumber?: number; // Optional account number
  accName?: string; // Optional account name
  icon?: ReactNode; // Optional action icon
  flexStyling?: string; // Styling for the flex container
  textStyle?: string; // Styling for text
  onClick?: () => void; // Click handler
  showIcon?: boolean; // Flag to control Icon visibility
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
  onClick,
  showIcon = true, // Default to true
}: BankProps) {
  return (
    <section
      className={`bg-light-grey rounded-[20px] shadow-sm flex items-start justify-between w-[168px] h-[86px] p-3 cursor-pointer ${style}`}
      onClick={onClick}
    >
      <div>
        <div className={flexStyling}>
          {showIcon && ( // Conditionally render the Icon component
            <Icon icon={bankImage} containerSize="w-[24px] h-[24px]" />
          )}
          <p className={`text-color-zero text-sm font-medium ${textStyle}`}>
            {bankName}
          </p>
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
