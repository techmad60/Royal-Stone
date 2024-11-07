export default function StatRow({ label = "", value = "", valueClass = "", isLast = false }) {
    return (
        <div className={`flex items-center justify-between py-4 ${!isLast ? 'border-b lg:border-dashed' : ''}`}>
            <p className="text-color-form text-sm">{label}</p>
            <p className={valueClass}>{value}</p>
        </div>
    );
}
