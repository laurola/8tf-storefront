const stats = [
  { value: "37+", label: "Produkte" },
  { value: "1000+", label: "Kunden" },
  { value: "5★", label: "Bewertungen" },
  { value: "24h", label: "Lieferzeit" },
]

const StatsBar = () => {
  return (
    <div className="w-full bg-zinc-900 border-y border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 text-center"
            >
              <span className="text-4xl font-bold text-green-400 leading-none">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-zinc-400 uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StatsBar
