import LocalizedClientLink from "@modules/common/components/localized-client-link"

const EmptyCartMessage = () => {
  return (
    <div
      className="py-48 px-2 flex flex-col justify-center items-center text-center"
      data-testid="empty-cart-message"
    >
      <div className="mb-8" style={{ color: "#2a2a2a" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="96"
          height="96"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#4ade80"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          <line x1="12" y1="10" x2="12" y2="14" />
          <line x1="10" y1="12" x2="14" y2="12" />
        </svg>
      </div>

      <h1 className="text-3xl font-bold text-white mb-4">
        Dein Warenkorb ist leer
      </h1>

      <p className="text-base mb-8 max-w-sm" style={{ color: "#6b7280" }}>
        Füge Artikel hinzu, um mit dem Einkauf zu beginnen.
      </p>

      <LocalizedClientLink href="/store">
        <button
          className="px-8 py-3 rounded-xl font-bold text-black transition-colors duration-200"
          style={{ backgroundColor: "#4ade80" }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "#6ee7a0"
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "#4ade80"
          }}
        >
          Jetzt shoppen
        </button>
      </LocalizedClientLink>
    </div>
  )
}

export default EmptyCartMessage
