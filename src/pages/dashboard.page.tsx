import { TopBar } from "../components/TopBar"
import { SavingsCard } from "../components/SavingsCard"
import { Tabs } from "../components/Tabs"
import { ActionCards } from "../components/ActionCards"
import { Footer } from "../components/Footer"

export function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-4 max-w-md md:max-w-2xl lg:max-w-full mx-auto">
      <TopBar />
      <SavingsCard />
      <div className="bg-white -mt-4 pt-4">
        <Tabs />
      </div>
      <div className="mt-10">
        <ActionCards />
      </div>
      <Footer />
    </div>
  )
}

