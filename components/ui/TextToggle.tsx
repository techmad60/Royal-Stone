"use client"
import { useState, useEffect } from "react";

export default function TextToggle() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Adjust based on `lg` breakpoint
    };

    // Set initial screen size and add resize listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = () => setIsExpanded((prev) => !prev);

  return (
    <div className="py-4">
      <p className="text-color-form text-sm leading-[25px] lg:leading-[29px]">
        {isExpanded || isLargeScreen
          ? "Habitasse cursus quis ac vitae eu. Adip isc ing odio sagittis sit leo nunc quis ac vitae eu. Adip isc ing odio libero sagittis sit leo nunc Habitasse cursus quis ac vitae eu. Adip isc ing odio sagittis sit leo nunc quis ac vitae eu. Adip isc ing odio libero sagittis sit leo nunc..."
          : "Habitasse cursus quis ac vitae eu. Adip isc ing odio sagittis sit leo nunc... "}
        
        {/* Toggle option for small screens only */}
        {!isLargeScreen && (
          <span
            className="text-color-one border- border-color-one cursor-pointer"
            onClick={handleToggle}
          >
            {isExpanded ? "Show Less" : "Show More"}
          </span>
        )}
      </p>
    </div>
  );
}
