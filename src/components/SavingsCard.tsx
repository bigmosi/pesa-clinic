import { useState } from "react"
import { Eye, EyeOff, Wallet, Send } from "lucide-react"
import { Badge } from "./Badge"
import { ActionButton } from "./ActionButton"

export function SavingsCard() {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true)

  return (
    <div className="bg-white rounded-3xl shadow-lg px-6 pt-4 pb-4 mx-4 md:mx-8 lg:mx-auto lg:max-w-4xl -mt-7 md:-mt-10 lg:-mt-12 relative z-10">
      {/* Savings Badge */}
      <div className="absolute top-0 left-0">
        <Badge label="Savings" />
      </div>

      {/* Balance Section */}
      <div className="flex justify-center">
      <div className="mb-3" style={{ width: '80%' }}>
        <p className="text-[#1e3a5f] text-xl md:text-2xl text-center font-medium">Balance</p>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl ml-12 md:text-[32px] font-bold text-[#1e3a5f] leading-tight">
            {isBalanceVisible ? "UGX 50,000" : "••••••"}
          </h2>
          <button
            onClick={() => setIsBalanceVisible(!isBalanceVisible)}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors -mr-1"
            aria-label="Toggle balance visibility"
          >
            {isBalanceVisible ? (
              <EyeOff className="w-5 h-5 md:w-6 md:h-6 text-[#1e3a5f]" strokeWidth={2} />
            ) : (
              <Eye className="w-5 h-5 md:w-6 md:h-6 text-[#1e3a5f]" strokeWidth={2} />
            )}
          </button>
        </div>
      </div>
      </div>

      {/* Frequency and AutoSave */}
      <div className="flex flex-row justify-between gap-2 text-xs text-gray-600 mb-4">
        <span>Frequency: <span className="font-semibold">Monthly</span></span>
        <span>AutoSave amount: <span className="font-semibold">UGX 1,000</span></span>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mb-3"></div>

      {/* Action Buttons */}
      <div className="flex gap-0">
        <ActionButton icon={Wallet} label="Deposit" rounded="left" />
        <div className="w-[1px] bg-gray-200"></div>
        <ActionButton icon={Send} label="Share Medical" rounded="right" />
      </div>
    </div>
  )
}

