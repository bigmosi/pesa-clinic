import { useState } from "react"
import { cn } from "../lib/utils"
import { TabButton } from "./TabButton"

const tabs = ["ACCOUNT OPTIONS", "INVEST", "TRANSACTIONS"]

export function Tabs() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="px-4 md:px-8 lg:px-12 mt-10 lg:max-w-4xl mb-10 lg:mx-auto mt-6 md:mt-8">
      {/* Tab Indicators */}
      <div className="flex justify-center gap-1.5 mb-2">
        {tabs.map((_, index) => (
          <div
            key={index}
            className={cn(
              "w-1.5 h-1.5 rounded-full transition-colors",
              index === activeTab ? "bg-yellow-400" : "bg-gray-300"
            )}
          />
        ))}
      </div>

      {/* Tabs */}
      <div role="tablist" className="flex gap-6 overflow-x-auto mb-6">
        {tabs.map((tab, index) => (
          <TabButton
            key={tab}
            label={tab}
            isActive={activeTab === index}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </div>
    </div>
  )
}

