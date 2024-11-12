interface IconProps {
    icon: React.ReactNode; // Update icon to ReactNode instead of IconType
}
export default function Icon({icon}:IconProps) {
    return (
        <div className="flex justify-center items-center w-[24px] h-[24px] rounded-[10.61px] shadow-sm transform rotate-45 bg-white">
            <span className="transform -rotate-45 w-6 h-6 flex items-center justify-center">
                {icon}
            </span>
    </div>
    )
}