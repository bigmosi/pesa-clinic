import type { BadgeProps } from "../types/interfaces.type"

export function Badge({ label, className = "" }: BadgeProps) {
  return (
    <div
      className={`bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-b-lg rounded-tl-3xl ${className}`}
      style={{ borderTopRightRadius: 0 }}
    >
      {label}
    </div>
  )
}

