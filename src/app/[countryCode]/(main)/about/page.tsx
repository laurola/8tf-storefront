import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Über uns | EightTimesFaster",
  description:
    "EightTimesFaster — maßgeschneiderte Produkte für den Rollstuhlsport. Erfahre mehr über unsere Geschichte und Mission.",
}

export default function AboutPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        color: "#111827",
      }}
    >
      {/* Hero */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "120px 5% 80px",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(22,163,74,0.06) 0%, transparent 70%)",
            top: "50%",
            right: "10%",
            transform: "translateY(-50%)",
            filter: "blur(2px)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", maxWidth: "720px" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(22,163,74,0.08)",
              border: "1px solid rgba(22,163,74,0.25)",
              borderRadius: "999px",
              padding: "5px 16px",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "#16a34a",
              textTransform: "uppercase",
              marginBottom: "28px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "#16a34a",
                display: "inline-block",
              }}
            />
            Über uns
          </span>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              margin: "0 0 24px",
              color: "#111827",
            }}
          >
            Wir leben für den{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #4ade80 0%, #22c55e 60%, #16a34a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Rollstuhlsport.
            </span>
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#6b7280",
              lineHeight: 1.7,
              maxWidth: "560px",
            }}
          >
            EightTimesFaster wurde gegründet, um Athleten im Rollstuhlsport mit
            premium, maßgefertigten Ausrüstungen zu versorgen — entwickelt von
            Sportlern, für Sportler.
          </p>
        </div>
      </div>

      {/* Story */}
      <div style={{ padding: "80px 5%", maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "48px",
            alignItems: "center",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                marginBottom: "20px",
                color: "#111827",
              }}
            >
              Unsere Geschichte
            </h2>
            <p
              style={{
                color: "#6b7280",
                lineHeight: 1.8,
                fontSize: "1rem",
                marginBottom: "20px",
              }}
            >
              Alles begann mit einer einfachen Frage: Warum gibt es keine
              Ausrüstung, die wirklich für Hochleistungs-Rollstuhlsportler
              entwickelt wurde?
            </p>
            <p
              style={{
                color: "#6b7280",
                lineHeight: 1.8,
                fontSize: "1rem",
                marginBottom: "20px",
              }}
            >
              Wir haben die Antwort selbst in die Hand genommen. Jedes Produkt
              entsteht in enger Zusammenarbeit mit Profi-Athleten und wird erst
              dann freigegeben, wenn es unsere strengen Anforderungen an
              Performance und Haltbarkeit erfüllt.
            </p>
            <p
              style={{
                color: "#6b7280",
                lineHeight: 1.8,
                fontSize: "1rem",
              }}
            >
              Der Name sagt alles: acht Mal schneller reagieren, acht Mal
              präziser steuern — das ist unser Anspruch.
            </p>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
            }}
          >
            {[
              { value: "8×", label: "Schneller" },
              { value: "100%", label: "Maßgefertigt" },
              { value: "Pro", label: "Getestet" },
              { value: "AT", label: "Made in Austria" },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                  padding: "28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <span
                  style={{
                    fontSize: "2.2rem",
                    fontWeight: 800,
                    color: "#16a34a",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    color: "#6b7280",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div
        style={{
          padding: "80px 5%",
          borderTop: "1px solid #e5e7eb",
          backgroundColor: "#f9fafb",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: "48px",
              color: "#111827",
              textAlign: "center",
            }}
          >
            Was uns antreibt
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              {
                icon: "◈",
                title: "Präzision",
                desc: "Jedes Detail zählt. Unsere Produkte werden mit höchster Sorgfalt entwickelt und gefertigt.",
              },
              {
                icon: "◎",
                title: "Performance",
                desc: "Nur das Beste reicht. Wir testen unter realen Wettkampfbedingungen, nicht im Labor.",
              },
              {
                icon: "◇",
                title: "Gemeinschaft",
                desc: "Wir sind Teil der Rollstuhlsport-Community — nicht nur ein Ausrüster, sondern Partner.",
              },
            ].map((v) => (
              <div
                key={v.title}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                  padding: "36px 28px",
                }}
              >
                <span
                  style={{
                    fontSize: "1.8rem",
                    color: "#16a34a",
                    display: "block",
                    marginBottom: "16px",
                  }}
                >
                  {v.icon}
                </span>
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    marginBottom: "12px",
                    color: "#111827",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {v.title}
                </h3>
                <p
                  style={{
                    color: "#6b7280",
                    lineHeight: 1.7,
                    fontSize: "0.95rem",
                  }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div
        style={{
          padding: "80px 5%",
          textAlign: "center",
          borderTop: "1px solid #e5e7eb",
          backgroundColor: "#ffffff",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            marginBottom: "16px",
            color: "#111827",
          }}
        >
          Bereit für mehr Performance?
        </h2>
        <p
          style={{
            color: "#6b7280",
            marginBottom: "36px",
            fontSize: "1rem",
          }}
        >
          Entdecke unsere Produktlinie — entwickelt für Champions.
        </p>
        <a
          href="/store"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            backgroundColor: "#16a34a",
            color: "#ffffff",
            fontWeight: 700,
            fontSize: "15px",
            letterSpacing: "0.04em",
            padding: "16px 40px",
            borderRadius: "4px",
            border: "2px solid #16a34a",
            textDecoration: "none",
            textTransform: "uppercase",
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
        </a>
      </div>
    </div>
  )
}
