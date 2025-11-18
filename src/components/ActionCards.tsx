import { Receipt, HandCoins, Users, CheckCircle2 } from "lucide-react"
import { ActionCard } from "./ActionCard"
import type { ActionItem } from "../types/interfaces.type"

const actions: ActionItem[] = [
  {
    icon: Receipt,
    label: "Pay Medical Bill",
  },
  {
    icon: HandCoins,
    label: "Get Loan",
  },
  {
    icon: Users,
    label: "Join MaMas",
  },
  {
    icon: CheckCircle2,
    label: "My Approvals",
  },
]

export function ActionCards() {
  return (
    <div className="px-4 md:px-8 lg:px-12 lg:max-w-4xl lg:mx-auto mt-10 md:mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 pb-4">
      {actions.map((action) => (
        <ActionCard
          key={action.label}
          icon={action.icon}
          label={action.label}
        />
      ))}
    </div>
  )
}
