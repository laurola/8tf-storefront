import Link from "next/link"

const categories = [
  { name: "Greifreifen", handle: "greifreifen", count: 8 },
  { name: "Bereifung", handle: "bereifung", count: 12 },
  { name: "Laufräder", handle: "laufraeder", count: 6 },
  { name: "Handschuhe", handle: "handschuhe", count: 9 },
]

const CategoriesSection = () => {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
            Kategorien
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Alles für deinen Rollstuhl-Sport
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {categories.map((category) => (
            <Link
              key={category.handle}
              href={`/categories/${category.handle}`}
              className="group relative flex items-center justify-between bg-white border border-gray-200 rounded-xl p-8 overflow-hidden transition-all duration-300 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10"
            >
              {/* Green gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-50 group-hover:to-green-100/40 transition-all duration-300" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-200">
                  {category.name}
                </h3>
                <p className="text-gray-400 text-sm mt-1 group-hover:text-gray-500 transition-colors duration-200">
                  {category.count} Produkte
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 border border-gray-200 group-hover:bg-green-500/10 group-hover:border-green-500/40 transition-all duration-300">
                <span className="text-gray-400 group-hover:text-green-600 text-lg transition-colors duration-200">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoriesSection
