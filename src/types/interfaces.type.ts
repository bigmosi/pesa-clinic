import type { LucideIcon } from "lucide-react"

export interface ActionCardProps {
  icon: LucideIcon
  label: string
  iconColor?: string
  onClick?: () => void
}

export interface ActionButtonProps {
  icon: LucideIcon
  label: string
  onClick?: () => void
  rounded?: "left" | "right" | "none"
}

export interface BadgeProps {
  label: string
  className?: string
}

export interface TabButtonProps {
  label: string
  isActive: boolean
  onClick: () => void
}

export interface ActionItem {
  icon: LucideIcon
  label: string
  iconColor?: string
}

