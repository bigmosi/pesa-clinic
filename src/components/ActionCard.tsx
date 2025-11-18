import type { ActionCardProps } from "../types/interfaces.type"

export function ActionCard({ icon: Icon, label, iconColor = "text-[#1e3a5f]", onClick }: ActionCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md active:scale-[0.98] transition-all flex flex-col items-center gap-2 border border-gray-100"
    >
      <div className={`${iconColor} flex items-center justify-center`}>
        <Icon className="w-7 h-7" strokeWidth={1.5} />
      </div>
      <span className="text-xs md:text-sm font-semibold text-gray-500 text-center leading-tight">
        {label}
      </span>
    </button>
  )
}

