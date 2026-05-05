"use client";

import { useEffect, useRef } from "react";

/* ─── Scroll-reveal hook ─────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ─── Icons ──────────────────────────────────────────────── */
const IconAI = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <circle cx="19" cy="19" r="2" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="5" cy="19" r="2" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const IconAds = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 20H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 17V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M7 11L10 8L13 11L17 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconContent = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M8 13H16M8 17H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconDesign = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 2V8M12 16V22M2 12H8M16 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconAutomation = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 3C7 3 3 7 3 12C3 17 7 21 12 21C17 21 21 17 21 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 3L21 3L21 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 3L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
  </svg>
);

const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8L6.5 11.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ─── Ticker data ────────────────────────────────────────── */
const TICKER_ITEMS = [
  "AI AUTOMATION", "META ADS", "GOOGLE ADS", "CONTENT CREATION",
  "GRAPHIC DESIGN", "MARKETING AUTOMATION", "PERFORMANCE", "AI AUTOMATION",
  "META ADS", "GOOGLE ADS", "CONTENT CREATION", "GRAPHIC DESIGN",
  "MARKETING AUTOMATION", "PERFORMANCE",
];

/* ─── Services data ──────────────────────────────────────── */
const SERVICES = [
  {
    icon: <IconAutomation />,
    label: "Marketing Automation",
    headline: "Automatyzacja, która sprzedaje 24/7",
    desc: "Projektujemy inteligentne lejki sprzedażowe, sekwencje e-mail i scenariusze remarketingowe, które prowadzą klienta do zakupu bez Twojej interwencji.",
    features: ["Lead nurturing", "E-mail sequences", "Retargeting flows", "CRM automation"],
    featured: true,
  },
  {
    icon: <IconAds />,
    label: "Paid Ads",
    headline: "Meta & Google Ads z precyzją rekina",
    desc: "Kampanie sprzedażowe, dynamiczny remarketing i lookalike audiences — optymalizujemy każdą złotówkę pod maksymalny ROAS.",
    features: ["Meta Ads", "Google Ads", "Remarketing", "Lookalike"],
    featured: false,
  },
  {
    icon: <IconContent />,
    label: "Content Creation",
    headline: "Treści, które konwertują",
    desc: "Od strategii przez copy po montaż wideo — tworzymy content dopasowany do algorytmów i do ludzi.",
    features: ["Social media", "Video editing", "Copywriting", "Content plan"],
    featured: false,
  },
  {
    icon: <IconDesign />,
    label: "Graphic Design",
    headline: "Visual identity, która zatrzymuje scroll",
    desc: "Identyfikacja wizualna, kreacje reklamowe i materiały brandingowe spójne z Twoją strategią.",
    features: ["Brand identity", "Ad creatives", "Social graphics", "Brandbook"],
    featured: false,
  },
];

/* ─── Process steps ──────────────────────────────────────── */
const STEPS = [
  {
    num: "01",
    title: "Analiza AI",
    desc: "Mapujemy dane, lejek sprzedażowy i zachowania klientów przy użyciu narzędzi AI.",
  },
  {
    num: "02",
    title: "Strategia",
    desc: "Projektujemy ekosystem marketingowy oparty na danych i algorytmach.",
  },
  {
    num: "03",
    title: "Wdrożenie",
    desc: "Uruchamiamy kampanie, automacje i content równolegle, bez przestojów.",
  },
  {
    num: "04",
    title: "Skalowanie",
    desc: "AI optymalizuje wyniki w czasie rzeczywistym, Ty skupiasz się na biznesie.",
  },
];

/* ─── Why us data ────────────────────────────────────────── */
const WHY = [
  {
    num: "01",
    title: "AI w każdym punkcie",
    desc: "Nie używamy AI jako ozdobnika. Wbudowujemy je w procesy: targeting, copy, segmentację i optymalizację kampanii.",
  },
  {
    num: "02",
    title: "Dane, nie intuicja",
    desc: "Każda decyzja wynika z analizy. Testujemy, mierzymy i optymalizujemy — bez zgadywania.",
  },
  {
    num: "03",
    title: "Szybkość rekina",
    desc: "Wdrożenia w dni, nie tygodnie. Reagujemy na zmiany rynku zanim zrobi to konkurencja.",
  },
  {
    num: "04",
    title: "Jeden ekosystem",
    desc: "Reklamy, automatyzacje, content i design w jednym miejscu — spójna strategia bez chaosu.",
  },
];

/* ─── Testimonials data ──────────────────────────────────── */
const TESTIMONIALS = [
  {
    quote:
      "Dzięki doskonałej organizacji byłem w stanie nagrać materiał na wiele miesięcy zaledwie w jeden dzień. Wszystko dostarczane na czas, z uwzględnieniem wszystkich poprawek. Gorąco polecam.",
    name: "Mariusz Borkowski",
    role: "Lekarz medycyny estetycznej",
    initial: "M",
  },
  {
    quote:
      "Zdecydowanie polecam współpracę. Są bardzo kreatywni — szybko wdrażają pomysły i świetnie znają trendy w social mediach, co przekłada się na realny wzrost zasięgów organicznych.",
    name: "Artur Mioduszewski",
    role: "CMO, Kebab King",
    initial: "A",
  },
];

/* ─── Automation flow visual ─────────────────────────────── */
const FLOW_NODES = [
  { icon: "👤", label: "Nowy lead" },
  { icon: "🤖", label: "AI kwalifikacja" },
  { icon: "📧", label: "E-mail sequence" },
  { icon: "🎯", label: "Retargeting ad" },
  { icon: "✅", label: "Konwersja" },
];

/* ─── Main component ─────────────────────────────────────── */
export default function Home() {
  useReveal();

  return (
    <div style={{ background: "var(--background)", color: "var(--text-primary)" }}>

      {/* ── NAV ─────────────────────────────────────────────── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "16px 24px",
        background: "rgba(7, 9, 13, 0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--border)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <span style={{
          fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "1.25rem",
          letterSpacing: "-0.02em", color: "var(--text-primary)",
        }}>
          the <span style={{ color: "var(--cyan)" }}>sharks</span>
        </span>
        <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          {["Automatyzacja", "Reklamy", "Content", "Design"].map((item) => (
            <a key={item} href="#" style={{
              fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.05em",
              color: "var(--text-secondary)", textDecoration: "none",
              transition: "color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
            >{item}</a>
          ))}
          <a href="#contact" className="btn-cyan" style={{ padding: "10px 20px", fontSize: "0.75rem" }}>
            Porozmawiajmy
          </a>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section
        className="noise"
        style={{
          minHeight: "100vh",
          display: "flex", flexDirection: "column", justifyContent: "center",
          alignItems: "center", textAlign: "center",
          padding: "120px 24px 80px",
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,212,255,0.08) 0%, transparent 70%)",
          overflow: "hidden",
        }}
      >
        {/* Background grid */}
        <div className="grid-bg" style={{
          position: "absolute", inset: 0, zIndex: 0,
          mask: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }} />

        {/* Floating shark fin decoration */}
        <div className="animate-float" style={{
          position: "absolute", top: "20%", right: "8%",
          width: 120, height: 120,
          background: "radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)",
          borderRadius: "50%", zIndex: 0,
        }} />
        <div style={{
          position: "absolute", bottom: "15%", left: "6%",
          width: 80, height: 80,
          background: "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)",
          borderRadius: "50%", zIndex: 0,
        }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 860 }}>
          <div className="animate-fade-in section-label" style={{ justifyContent: "center", marginBottom: 24 }}>
            <IconAI />
            AI-Powered Marketing Agency
          </div>

          <h1
            className="animate-fade-up"
            style={{
              fontFamily: "var(--font-syne)", fontWeight: 800,
              fontSize: "clamp(2.8rem, 7vw, 6rem)",
              lineHeight: 1.05, letterSpacing: "-0.03em",
              marginBottom: 24,
            }}
          >
            Twoja sprzedaż.<br />
            <span className="gradient-text">Napędzana przez AI.</span>
          </h1>

          <p
            className="animate-fade-up"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)", lineHeight: 1.7,
              color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto 40px",
              animationDelay: "0.1s",
            }}
          >
            Łączymy marketing automation, AI i płatne reklamy w jeden ekosystem,
            który skaluje Twój biznes&nbsp;— bez przestojów, bez zbędnego hałasu.
          </p>

          <div className="animate-fade-up" style={{
            display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap",
            animationDelay: "0.2s",
          }}>
            <a href="#contact" className="btn-cyan animate-pulse-glow">
              Zacznij z AI <IconArrow />
            </a>
            <a href="#services" className="btn-outline">
              Zobacz usługi
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
          color: "var(--text-muted)", fontSize: "0.7rem", letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}>
          <span>Scroll</span>
          <div style={{
            width: 1, height: 40,
            background: "linear-gradient(to bottom, var(--text-muted), transparent)",
          }} />
        </div>
      </section>

      {/* ── SOCIAL PROOF BAR ────────────────────────────────── */}
      <section style={{
        padding: "48px 24px",
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}>
        <div className="section-inner">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
            textAlign: "center",
          }}>
            {[
              { num: "50+", label: "Klientów" },
              { num: "200+", label: "Kampanii" },
              { num: "3×", label: "Średni wzrost ROAS" },
              { num: "24/7", label: "Automatyzacja" },
            ].map((stat, i) => (
              <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="stat-number">{stat.num}</div>
                <div style={{
                  fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.1em",
                  textTransform: "uppercase", color: "var(--text-secondary)", marginTop: 8,
                }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TICKER ──────────────────────────────────────────── */}
      <div className="ticker-wrapper" style={{
        overflow: "hidden", padding: "18px 0",
        borderBottom: "1px solid var(--border)",
        background: "var(--background)",
      }}>
        <div className="animate-ticker" style={{ display: "flex", gap: 0, width: "max-content" }}>
          {TICKER_ITEMS.map((item, i) => (
            <span key={i} style={{
              fontFamily: "var(--font-syne)", fontWeight: 700,
              fontSize: "0.72rem", letterSpacing: "0.25em",
              color: i % 3 === 0 ? "var(--cyan)" : "var(--text-muted)",
              padding: "0 32px",
              borderRight: "1px solid var(--border)",
              whiteSpace: "nowrap",
            }}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── AI AUTOMATION (flagship) ─────────────────────────── */}
      <section id="automation" style={{
        padding: "120px 24px",
        background: "var(--surface)",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Background grid pattern */}
        <div className="grid-bg" style={{
          position: "absolute", inset: 0, zIndex: 0,
          opacity: 0.5,
          mask: "radial-gradient(ellipse 70% 100% at 100% 50%, black, transparent)",
        }} />

        {/* Glow orb */}
        <div style={{
          position: "absolute", top: "50%", right: "-100px",
          transform: "translateY(-50%)",
          width: 400, height: 400,
          background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)",
          borderRadius: "50%", zIndex: 0,
          pointerEvents: "none",
        }} />

        <div className="section-inner" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>

            {/* Left: copy */}
            <div>
              <div className="reveal section-label">
                <IconAutomation />
                AI & Marketing Automation
              </div>
              <h2 className="reveal reveal-delay-1" style={{
                fontFamily: "var(--font-syne)", fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1,
                letterSpacing: "-0.02em", marginBottom: 24,
              }}>
                Twój marketing<br />
                <span style={{ color: "var(--cyan)" }}>działa, gdy śpisz.</span>
              </h2>
              <p className="reveal reveal-delay-2" style={{
                fontSize: "1.05rem", lineHeight: 1.75,
                color: "var(--text-secondary)", marginBottom: 36,
              }}>
                Budujemy inteligentne ekosystemy marketingowe oparte na AI —
                od automatycznego kwalifikowania leadów, przez spersonalizowane sekwencje
                e-mail, po dynamiczne kampanie remarketingowe. Zero ręcznej pracy,
                maksymalny wynik.
              </p>

              <div className="reveal reveal-delay-3" style={{
                display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 36,
              }}>
                {[
                  "Automatyczne lejki sprzedażowe",
                  "AI lead scoring",
                  "Personalizowane e-mail flows",
                  "Dynamiczny retargeting",
                  "CRM automation",
                  "Analityka w czasie rzeczywistym",
                ].map((feat, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.875rem" }}>
                    <span style={{ color: "var(--cyan)", flexShrink: 0 }}><IconCheck /></span>
                    <span style={{ color: "var(--text-secondary)" }}>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="reveal reveal-delay-4">
                <a href="#contact" className="btn-cyan">
                  Wdróż automatyzację <IconArrow />
                </a>
              </div>
            </div>

            {/* Right: automation flow visual */}
            <div className="reveal reveal-delay-2">
              <div style={{
                background: "var(--surface-2)",
                border: "1px solid var(--cyan-border)",
                borderRadius: 16,
                padding: 32,
                position: "relative",
              }}>
                {/* Header */}
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  marginBottom: 28,
                  paddingBottom: 20,
                  borderBottom: "1px solid var(--border)",
                }}>
                  <span style={{
                    fontFamily: "var(--font-syne)", fontSize: "0.85rem", fontWeight: 700,
                    color: "var(--cyan)", letterSpacing: "0.1em", textTransform: "uppercase",
                  }}>
                    AI Sales Flow
                  </span>
                  <div style={{ display: "flex", gap: 6 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FF5F57" }} />
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FEBC2E" }} />
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#28C840" }} />
                  </div>
                </div>

                {/* Flow nodes */}
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {FLOW_NODES.map((node, i) => (
                    <div key={i}>
                      <div className="flow-node" style={{ animationDelay: `${i * 0.15}s` }}>
                        <span style={{ fontSize: "1rem" }}>{node.icon}</span>
                        <span>{node.label}</span>
                        {i < FLOW_NODES.length - 1 && (
                          <span style={{
                            marginLeft: "auto", fontSize: "0.7rem", fontWeight: 400,
                            color: "var(--text-muted)",
                          }}>
                            {i === 0 ? "trigger" : i === 1 ? "AI · 0.3s" : i === 2 ? "auto" : i === 3 ? "48h later" : ""}
                          </span>
                        )}
                        {i === FLOW_NODES.length - 1 && (
                          <span style={{
                            marginLeft: "auto", fontSize: "0.7rem", fontWeight: 700,
                            color: "var(--cyan)",
                          }}>+ROAS</span>
                        )}
                      </div>
                      {i < FLOW_NODES.length - 1 && (
                        <div style={{
                          display: "flex", alignItems: "center", paddingLeft: 24,
                          height: 20,
                        }}>
                          <div style={{
                            width: 1, height: "100%",
                            background: "linear-gradient(to bottom, var(--cyan-border), transparent)",
                            margin: "0 auto 0 11px",
                          }} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Bottom metric */}
                <div style={{
                  marginTop: 24, paddingTop: 20,
                  borderTop: "1px solid var(--border)",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                }}>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Avg. conversion rate boost</span>
                  <span style={{
                    fontFamily: "var(--font-syne)", fontWeight: 800,
                    fontSize: "1.25rem", color: "var(--cyan)",
                  }}>+127%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ────────────────────────────────────── */}
      <section id="services" style={{ padding: "120px 24px" }}>
        <div className="section-inner">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="reveal section-label" style={{ justifyContent: "center" }}>
              Nasze usługi
            </div>
            <h2 className="reveal reveal-delay-1" style={{
              fontFamily: "var(--font-syne)", fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}>
              Wszystko, czego potrzebuje<br />
              <span style={{ color: "var(--cyan)" }}>Twój wzrost</span>
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 20,
          }}>
            {SERVICES.map((svc, i) => (
              <div
                key={i}
                className={`glow-card reveal reveal-delay-${i + 1}`}
                style={{
                  borderRadius: 12,
                  padding: 36,
                  position: "relative",
                  overflow: "hidden",
                  ...(svc.featured ? {
                    background: "linear-gradient(135deg, rgba(0,212,255,0.06) 0%, var(--surface) 100%)",
                    borderColor: "var(--cyan-border)",
                  } : {}),
                }}
              >
                {svc.featured && (
                  <div style={{
                    position: "absolute", top: 16, right: 16,
                    background: "var(--cyan)", color: "#020507",
                    fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.15em",
                    textTransform: "uppercase", padding: "4px 10px", borderRadius: 4,
                  }}>
                    AI-Powered
                  </div>
                )}

                <div style={{
                  width: 48, height: 48, borderRadius: 8,
                  background: svc.featured ? "rgba(0,212,255,0.15)" : "var(--surface-2)",
                  border: "1px solid var(--cyan-border)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--cyan)", marginBottom: 20,
                }}>
                  {svc.icon}
                </div>

                <div style={{
                  fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em",
                  textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 8,
                }}>
                  {svc.label}
                </div>

                <h3 style={{
                  fontFamily: "var(--font-syne)", fontWeight: 700,
                  fontSize: "1.25rem", lineHeight: 1.3, letterSpacing: "-0.01em",
                  marginBottom: 12,
                }}>
                  {svc.headline}
                </h3>

                <p style={{
                  fontSize: "0.9rem", lineHeight: 1.7,
                  color: "var(--text-secondary)", marginBottom: 24,
                }}>
                  {svc.desc}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {svc.features.map((f, j) => (
                    <span key={j} style={{
                      fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.05em",
                      padding: "4px 10px", borderRadius: 4,
                      background: "var(--surface-2)",
                      border: "1px solid var(--border)",
                      color: "var(--text-secondary)",
                    }}>{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────── */}
      <section style={{
        padding: "120px 24px",
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}>
        <div className="section-inner">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="reveal section-label" style={{ justifyContent: "center" }}>
              Jak działamy
            </div>
            <h2 className="reveal reveal-delay-1" style={{
              fontFamily: "var(--font-syne)", fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "-0.02em",
            }}>
              Precyzja na każdym kroku
            </h2>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0,
            position: "relative",
          }}>
            {/* Connecting line */}
            <div style={{
              position: "absolute", top: 28, left: "12.5%", right: "12.5%",
              height: 1,
              background: "linear-gradient(90deg, transparent, var(--cyan-border) 20%, var(--cyan-border) 80%, transparent)",
              zIndex: 0,
            }} />

            {STEPS.map((step, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1}`} style={{
                textAlign: "center", padding: "0 20px", position: "relative", zIndex: 1,
              }}>
                {/* Step number circle */}
                <div style={{
                  width: 56, height: 56,
                  borderRadius: "50%",
                  border: "1px solid var(--cyan-border)",
                  background: "var(--surface)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 24px",
                  fontFamily: "var(--font-syne)", fontWeight: 800,
                  fontSize: "0.875rem", color: "var(--cyan)",
                  letterSpacing: "0.05em",
                  boxShadow: "0 0 20px var(--cyan-dim)",
                }}>
                  {step.num}
                </div>
                <h3 style={{
                  fontFamily: "var(--font-syne)", fontWeight: 700,
                  fontSize: "1rem", marginBottom: 12, letterSpacing: "-0.01em",
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontSize: "0.85rem", lineHeight: 1.65,
                  color: "var(--text-secondary)",
                }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY THE SHARKS ──────────────────────────────────── */}
      <section style={{ padding: "120px 24px" }}>
        <div className="section-inner">
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: 80, alignItems: "start",
          }}>
            {/* Left: headline */}
            <div style={{ position: "sticky", top: 120 }}>
              <div className="reveal section-label">Dlaczego The Sharks</div>
              <h2 className="reveal reveal-delay-1" style={{
                fontFamily: "var(--font-syne)", fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1,
                letterSpacing: "-0.02em", marginBottom: 24,
              }}>
                AI to nie trend.<br />
                <span style={{ color: "var(--cyan)" }}>To nasz core.</span>
              </h2>
              <p className="reveal reveal-delay-2" style={{
                fontSize: "1rem", lineHeight: 1.75,
                color: "var(--text-secondary)",
              }}>
                Nie korzystamy z AI jako ozdobnika w prezentacji. Wbudowujemy sztuczną
                inteligencję w każdy element procesu marketingowego — od analizy danych
                po kreację i optymalizację kampanii.
              </p>
            </div>

            {/* Right: reasons */}
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {WHY.map((item, i) => (
                <div
                  key={i}
                  className={`glow-card reveal reveal-delay-${i + 1}`}
                  style={{
                    borderRadius: 10,
                    padding: "28px 28px",
                    display: "flex", gap: 20, alignItems: "flex-start",
                  }}
                >
                  <span style={{
                    fontFamily: "var(--font-syne)", fontWeight: 800,
                    fontSize: "2rem", color: "var(--cyan)", opacity: 0.25,
                    lineHeight: 1, flexShrink: 0, minWidth: 48,
                  }}>
                    {item.num}
                  </span>
                  <div>
                    <h3 style={{
                      fontFamily: "var(--font-syne)", fontWeight: 700,
                      fontSize: "1rem", marginBottom: 8,
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      fontSize: "0.875rem", lineHeight: 1.65,
                      color: "var(--text-secondary)",
                    }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────── */}
      <section style={{
        padding: "120px 24px",
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}>
        <div className="section-inner">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="reveal section-label" style={{ justifyContent: "center" }}>
              Opinie klientów
            </div>
            <h2 className="reveal reveal-delay-1" style={{
              fontFamily: "var(--font-syne)", fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "-0.02em",
            }}>
              Mówią o nas
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className={`glow-card reveal reveal-delay-${i + 1}`}
                style={{ borderRadius: 12, padding: 40, position: "relative" }}
              >
                <div className="quote-mark">"</div>
                <p style={{
                  fontSize: "1rem", lineHeight: 1.8,
                  color: "var(--text-primary)", marginBottom: 32,
                  position: "relative", zIndex: 1, paddingTop: 16,
                }}>
                  {t.quote}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%",
                    background: "linear-gradient(135deg, var(--cyan) 0%, rgba(0,212,255,0.3) 100%)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--font-syne)", fontWeight: 800,
                    fontSize: "1rem", color: "#020507", flexShrink: 0,
                  }}>
                    {t.initial}
                  </div>
                  <div>
                    <div style={{
                      fontFamily: "var(--font-syne)", fontWeight: 700,
                      fontSize: "0.9rem",
                    }}>{t.name}</div>
                    <div style={{
                      fontSize: "0.78rem", color: "var(--text-secondary)", marginTop: 2,
                    }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section
        id="contact"
        className="noise"
        style={{
          padding: "120px 24px",
          textAlign: "center",
          background: "radial-gradient(ellipse 80% 70% at 50% 100%, rgba(0,212,255,0.07) 0%, transparent 70%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="grid-bg" style={{
          position: "absolute", inset: 0, zIndex: 0,
          mask: "radial-gradient(ellipse 60% 80% at 50% 100%, black, transparent)",
        }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 720, margin: "0 auto" }}>
          <div className="reveal section-label" style={{ justifyContent: "center" }}>
            Zacznij dziś
          </div>
          <h2 className="reveal reveal-delay-1" style={{
            fontFamily: "var(--font-syne)", fontWeight: 800,
            fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: 1.1,
            letterSpacing: "-0.03em", marginBottom: 24,
          }}>
            Gotowy na marketing,<br />
            <span className="gradient-text">który sprzedaje sam?</span>
          </h2>
          <p className="reveal reveal-delay-2" style={{
            fontSize: "1.1rem", lineHeight: 1.7,
            color: "var(--text-secondary)", marginBottom: 48,
          }}>
            Umów bezpłatną konsultację i dowiedz się, jak AI może skalować
            Twój biznes w ciągu najbliższych 90 dni.
          </p>
          <div className="reveal reveal-delay-3" style={{
            display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap",
          }}>
            <a
              href="https://thesharks.io"
              className="btn-cyan animate-pulse-glow"
              style={{ fontSize: "0.9rem", padding: "16px 36px" }}
            >
              Umów bezpłatną konsultację <IconArrow />
            </a>
          </div>

          <p className="reveal reveal-delay-4" style={{
            marginTop: 24, fontSize: "0.78rem",
            color: "var(--text-muted)",
          }}>
            Bez zobowiązań. Odpiszemy w&nbsp;ciągu 24&nbsp;godzin.
          </p>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer style={{
        padding: "32px 24px",
        borderTop: "1px solid var(--border)",
        background: "var(--surface)",
      }}>
        <div className="section-inner" style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <span style={{
            fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "1.1rem",
            letterSpacing: "-0.02em",
          }}>
            the <span style={{ color: "var(--cyan)" }}>sharks</span>
          </span>

          <p style={{
            fontSize: "0.78rem", color: "var(--text-muted)",
            textAlign: "center",
          }}>
            © 2025 The Sharks — Agencja Marketingu & AI Automation
          </p>

          <div style={{ display: "flex", gap: 20 }}>
            <a
              href="https://www.instagram.com/thesharks.io/"
              style={{
                fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em",
                textTransform: "uppercase", color: "var(--text-secondary)",
                textDecoration: "none", transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--cyan)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              Instagram
            </a>
            <a
              href="https://thesharks.io"
              style={{
                fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em",
                textTransform: "uppercase", color: "var(--text-secondary)",
                textDecoration: "none", transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--cyan)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              thesharks.io
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
