interface ProgressCardProps {
    title: string;
    currentAmount: number;
    goalAmount: number;
    status: string;
  }
  
  export default function ProgressBarDesktop({
    title,
    currentAmount,
    goalAmount,
    status,
  }: ProgressCardProps) {
    // Calculate percentage
    const percentage = Math.round((currentAmount / goalAmount) * 100);
    const statusTextColor =
      status.toLowerCase() === "completed" ? "text-color-six" : "text-color-one";
  
    return (
      <div>
        <div className="lg:grid grid-cols-9 p-3 mr-8">
          <p className="text-sm text-color-zero col-span-2">{title}</p>
          <p className="text-sm text-color-zero">{currentAmount}</p>
  
          {/* Progress Bar Section */}
          <div className="col-span-2 flex items-center gap-2 lg:w-[220px]">
            {/* Progress Bar */}
            <div className="flex-1 bg-white shadow-sm h-[14px] rounded-[20px] relative">
              <div className="bg-color-two h-[5px] rounded-[30px] absolute inset-y-0 left-1 right-1 top-1 -bottom-1">
                <div
                  className="bg-color-one h-[5px] rounded-[30px]"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
  
            {/* Percentage */}
            <p className="text-sm text-color-zero whitespace-nowrap">
              ({percentage}%)
            </p>
          </div>
  
          <p className="text-sm text-color-zero ">{goalAmount}</p>
          <p className={`text-sm ${statusTextColor}`}>{status}</p>
          <p className="text-sm text-color-zero">Success</p>
          <p>11/11/023</p>
        </div>
      </div>
    );
  }
  