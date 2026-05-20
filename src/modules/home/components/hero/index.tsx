"use client"
import Link from "next/link"

const Hero = () => {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100vh", backgroundColor: "#0a0a0a" }}
    >
      {/* Dot-grid background pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Diagonal accent lines */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent, transparent 80px, rgba(74,222,128,0.03) 80px, rgba(74,222,128,0.03) 81px)",
        }}
      />

      {/* Primary green glow orb */}
      <div
        className="absolute z-0"
        style={{
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(74,222,128,0.18) 0%, rgba(34,197,94,0.10) 40%, transparent 70%)",
          top: "50%",
          left: "55%",
          transform: "translate(-50%, -50%)",
          animation: "orbPulse 6s ease-in-out infinite",
          filter: "blur(1px)",
        }}
      />

      {/* Secondary smaller glow orb */}
      <div
        className="absolute z-0"
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(74,222,128,0.22) 0%, transparent 70%)",
          top: "25%",
          left: "65%",
          animation: "orbPulse 4s ease-in-out infinite reverse",
          filter: "blur(2px)",
        }}
      />

      {/* Geometric accent: large circle outline */}
      <div
        className="absolute z-0 hidden small:block"
        style={{
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          border: "1px solid rgba(74,222,128,0.12)",
          top: "50%",
          left: "60%",
          transform: "translate(-50%, -50%)",
          animation: "slowSpin 20s linear infinite",
        }}
      />
      <div
        className="absolute z-0 hidden small:block"
        style={{
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          border: "1px solid rgba(74,222,128,0.08)",
          top: "50%",
          left: "60%",
          transform: "translate(-50%, -50%)",
          animation: "slowSpin 14s linear infinite reverse",
        }}
      />

      {/* Top-left corner accent bar */}
      <div
        className="absolute z-0"
        style={{
          top: "0",
          left: "0",
          width: "4px",
          height: "120px",
          background:
            "linear-gradient(to bottom, #4ade80, rgba(74,222,128,0))",
        }}
      />
      <div
        className="absolute z-0"
        style={{
          top: "0",
          left: "0",
          width: "120px",
          height: "4px",
          background:
            "linear-gradient(to right, #4ade80, rgba(74,222,128,0))",
        }}
      />

      {/* Bottom-right corner accent bar */}
      <div
        className="absolute z-0"
        style={{
          bottom: "0",
          right: "0",
          width: "4px",
          height: "120px",
          background:
            "linear-gradient(to top, #4ade80, rgba(74,222,128,0))",
        }}
      />
      <div
        className="absolute z-0"
        style={{
          bottom: "0",
          right: "0",
          width: "120px",
          height: "4px",
          background:
            "linear-gradient(to left, #4ade80, rgba(74,222,128,0))",
        }}
      />

      {/* Main content */}
      <div
        className="relative z-10 flex flex-col justify-center"
        style={{
          minHeight: "100vh",
          padding: "0 5% 80px",
          maxWidth: "1400px",
        }}
      >
        {/* Brand badge */}
        <div
          style={{
            animation: "fadeInUp 0.6s ease forwards",
            opacity: 0,
            animationDelay: "0.1s",
            marginBottom: "28px",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(74,222,128,0.1)",
              border: "1px solid rgba(74,222,128,0.3)",
              borderRadius: "999px",
              padding: "6px 18px",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "#4ade80",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "#4ade80",
                display: "inline-block",
                animation: "orbPulse 2s ease-in-out infinite",
              }}
            />
            EightTimesFaster — Premium Sport
          </span>
        </div>

        {/* Main headline */}
        <h1
          style={{
            animation: "fadeInUp 0.7s ease forwards",
            opacity: 0,
            animationDelay: "0.25s",
            margin: "0 0 24px",
            lineHeight: 1.0,
            fontWeight: 900,
            letterSpacing: "-0.03em",
          }}
        >
          <span
            style={{
              display: "block",
              color: "#f5f5f5",
              fontSize: "clamp(2.8rem, 7vw, 7rem)",
            }}
          >
            FÜR DIE,
          </span>
          <span
            style={{
              display: "block",
              fontSize: "clamp(2.8rem, 7vw, 7rem)",
              background: "linear-gradient(135deg, #4ade80 0%, #22c55e 60%, #16a34a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            DIE VORWÄRTS
          </span>
          <span
            style={{
              display: "block",
              color: "#f5f5f5",
              fontSize: "clamp(2.8rem, 7vw, 7rem)",
            }}
          >
            WOLLEN.
          </span>
        </h1>

        {/* Subheadline */}
        <p
          style={{
            animation: "fadeInUp 0.7s ease forwards",
            opacity: 0,
            animationDelay: "0.45s",
            fontSize: "clamp(1rem, 2vw, 1.3rem)",
            color: "rgba(255,255,255,0.55)",
            fontWeight: 400,
            letterSpacing: "0.01em",
            lineHeight: 1.6,
            maxWidth: "520px",
            margin: "0 0 48px",
          }}
        >
          Maßgeschneiderte Lösungen für Sport &amp; Alltag —<br />
          entwickelt für maximale Performance im Rollstuhlsport.
        </p>

        {/* CTA buttons */}
        <div
          style={{
            animation: "fadeInUp 0.7s ease forwards",
            opacity: 0,
            animationDelay: "0.6s",
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            alignItems: "center",
          }}
        >
          <Link
            href="/store"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "#4ade80",
              color: "#0a0a0a",
              fontWeight: 700,
              fontSize: "15px",
              letterSpacing: "0.04em",
              padding: "16px 36px",
              borderRadius: "4px",
              border: "2px solid #4ade80",
              textDecoration: "none",
              transition: "all 0.25s ease",
              textTransform: "uppercase",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.backgroundColor = "#22c55e"
              el.style.borderColor = "#22c55e"
              el.style.transform = "translateY(-2px)"
              el.style.boxShadow = "0 8px 30px rgba(74,222,128,0.4)"
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.backgroundColor = "#4ade80"
              el.style.borderColor = "#4ade80"
              el.style.transform = "translateY(0)"
              el.style.boxShadow = "none"
            }}
          >
            Jetzt shoppen
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <Link
            href="/about"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "transparent",
              color: "#f5f5f5",
              fontWeight: 600,
              fontSize: "15px",
              letterSpacing: "0.04em",
              padding: "14px 34px",
              borderRadius: "4px",
              border: "2px solid rgba(255,255,255,0.2)",
              textDecoration: "none",
              transition: "all 0.25s ease",
              textTransform: "uppercase",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.borderColor = "#4ade80"
              el.style.color = "#4ade80"
              el.style.transform = "translateY(-2px)"
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.borderColor = "rgba(255,255,255,0.2)"
              el.style.color = "#f5f5f5"
              el.style.transform = "translateY(0)"
            }}
          >
            Mehr erfahren
          </Link>
        </div>

        {/* Stats row */}
        <div
          style={{
            animation: "fadeInUp 0.7s ease forwards",
            opacity: 0,
            animationDelay: "0.8s",
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            marginTop: "72px",
          }}
        >
          {[
            { value: "8×", label: "Schneller reagiert" },
            { value: "100%", label: "Maßgefertigt" },
            { value: "Pro", label: "Athleten-getestet" },
          ].map((stat) => (
            <div key={stat.label} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span
                style={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: "#4ade80",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 z-10"
        style={{
          transform: "translateX(-50%)",
          animation: "fadeInUp 0.7s ease forwards, scrollBounce 2s ease-in-out 1.5s infinite",
          opacity: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontSize: "11px",
            letterSpacing: "0.15em",
            color: "rgba(255,255,255,0.3)",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "24px",
            height: "38px",
            border: "2px solid rgba(255,255,255,0.15)",
            borderRadius: "12px",
            display: "flex",
            justifyContent: "center",
            paddingTop: "6px",
          }}
        >
          <div
            style={{
              width: "4px",
              height: "8px",
              backgroundColor: "#4ade80",
              borderRadius: "2px",
              animation: "scrollDot 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 z-0"
        style={{
          height: "200px",
          background:
            "linear-gradient(to top, rgba(10,10,10,0.9), transparent)",
          pointerEvents: "none",
        }}
      />

      {/* Keyframe animation styles */}
      <style>{`
        @keyframes orbPulse {
          0%, 100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.7; transform: translate(-50%, -50%) scale(1.08); }
        }
        @keyframes slowSpin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
        @keyframes scrollDot {
          0% { transform: translateY(0); opacity: 1; }
          80% { transform: translateY(12px); opacity: 0; }
          100% { transform: translateY(0); opacity: 0; }
        }
      `}</style>
    </div>
  )
}

export default Hero
