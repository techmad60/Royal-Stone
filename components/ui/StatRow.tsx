// Reusable StatRow Component

export default function StatRow ({ label = "", value = "", valueClass = "" }) {
    return (
        <div className="flex items-center justify-between border-b py-4 lg:border-dashed">
        <p className="text-color-form text-sm">{label}</p>
        <p className={valueClass}>{value}</p>
      </div>
    )
}
