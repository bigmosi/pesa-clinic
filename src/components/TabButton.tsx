import { cn } from "../lib/utils"
import type { TabButtonProps } from "../types/interfaces.type"

export function TabButton({ label, isActive, onClick }: TabButtonProps) {
  return (
    <div
      role="tab"
      aria-selected={isActive}
      tabIndex={isActive ? 0 : -1}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      }}
      className={cn(
        "pb-4 relative text-sm font-semibold transition-colors whitespace-nowrap uppercase tracking-wide border-0 border-none border-b-0 outline-none bg-transparent cursor-pointer",
        isActive ? "text-[#1e3a5f] " : " text-[#1e3a5f]  hover:text-gray-700"
      )}
      style={{ borderBottom: 'none' }}
    >
      {label}
      {isActive && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-400 rounded-full" />
      )}
    </div>
  )
}

