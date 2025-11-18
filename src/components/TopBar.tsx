import { ChevronLeft, X } from "lucide-react"

function getGreeting() {
  const hour = new Date().getHours()
  
  if (hour >= 5 && hour < 12) {
    return "Good Morning"
  } else if (hour >= 12 && hour < 17) {
    return "Good Afternoon"
  } else if (hour >= 17 && hour < 22) {
    return "Good Evening"
  } else {
    return "Good Night"
  }
}

export function TopBar() {
  const greeting = getGreeting()

  return (
    <div className="bg-[#1e3a5f] text-white px-4 md:px-8 lg:px-12 lg:px-16 xl:px-20 pt-4 md:pt-6 lg:pt-8 pb-11 md:pb-14 lg:pb-16 rounded-b-3xl">
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <button 
          className="p-2 md:p-3 hover:bg-white/10 rounded-full transition-colors active:bg-white/20"
          aria-label="Go back"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" strokeWidth={1.5} />
        </button>
        <h1 className="text-base md:text-xl lg:text-2xl font-semibold tracking-tight text-white">clinicPesa</h1>
        <button 
          className="p-2 md:p-3 hover:bg-white/10 rounded-full transition-colors active:bg-white/20"
          aria-label="Close"
        >
          <X className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" strokeWidth={1.5} />
        </button>
      </div>
      <p className="text-white text-center text-sm md:text-base lg:text-lg">{greeting}, Robert</p>
    </div>
  )
}

