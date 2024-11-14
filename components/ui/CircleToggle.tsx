"use client"
import { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";

export default function CircleToggle() {
  // State to manage click and toggle color/checkmark
  const [isClicked, setIsClicked] = useState(false);

  // Toggle click state on circle click
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      onClick={handleClick}
      className={`flex items-center justify-center w-[18px] h-[18px] rounded-full cursor-pointer
                  ${isClicked ? "border-color-one" : "border-slate-500"} border`}
    >
      {isClicked && <FaCircleCheck size={12} className="text-color-one" />}
    </div>
  );
}
