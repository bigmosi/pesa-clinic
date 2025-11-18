import type { ActionButtonProps } from "../types/interfaces.type"

export function ActionButton({ icon: Icon, label, onClick, rounded = "none" }: ActionButtonProps) {
  const roundedClass = rounded === "left" ? "rounded-l-xl" : rounded === "right" ? "rounded-r-xl" : ""
  
  return (
    <button
      onClick={onClick}
      className={`flex-1 flex flex-col items-center justify-center gap-0.5 bg-white py-2.5 px-4 ${roundedClass} hover:bg-gray-50 transition-colors border-none outline-none`}
    >
      <Icon className="w-5 h-5  text-[#1e3a5f] " strokeWidth={2.5} />
      <span className="text-[#1e3a5f] text-lg md:text-sm font-semibold">{label}</span>
    </button>
  )
}

