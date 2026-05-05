"use client";

import { useEffect } from "react";

/* ── Scroll-reveal ───────────────────────────────────────── */
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

/* ── Icons ───────────────────────────────────────────────── */
const IconAI = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <circle cx="19" cy="19" r="2" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="5" cy="19" r="2" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);
const IconAds = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 20H16M12 17V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M7 11L10 8L13 11L17 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconContent = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M14 2V8H20M8 13H16M8 17H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const IconDesign = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 2V8M12 16V22M2 12H8M16 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const IconAutomation = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M12 3C7 3 3 7 3 12C3 17 7 21 12 21C17 21 21 17 21 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 3L21 3L21 8M21 3L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
  </svg>
);
const IconArrow = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
    <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path d="M3 8L6.5 11.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ── Data ────────────────────────────────────────────────── */
const TICKER_ITEMS = [
  "AI AUTOMATION", "META ADS", "GOOGLE ADS", "CONTENT CREATION",
  "GRAPHIC DESIGN", "MARKETING AUTOMATION", "PERFORMANCE", "AI AUTOMATION",
  "META ADS", "GOOGLE ADS", "CONTENT CREATION", "GRAPHIC DESIGN",
  "MARKETING AUTOMATION", "PERFORMANCE",
];

const SERVICES = [
  {
    icon: <IconAutomation />, label: "Marketing Automation",
    headline: "Automatyzacja, która sprzedaje 24/7",
    desc: "Budujemy inteligentne lejki sprzedażowe, sekwencje e-mail i scenariusze remarketingowe, które prowadzą klienta do zakupu bez Twojej interwencji.",
    features: ["Lead nurturing", "E-mail sequences", "Retargeting flows", "CRM automation"],
    featured: true,
  },
  {
    icon: <IconAds />, label: "Paid Ads",
    headline: "Meta & Google Ads z precyzją rekina",
    desc: "Kampanie sprzedażowe, dynamiczny remarketing i lookalike audiences — optymalizujemy każdą złotówkę pod maksymalny ROAS.",
    features: ["Meta Ads", "Google Ads", "Remarketing", "Lookalike"],
    featured: false,
  },
  {
    icon: <IconContent />, label: "Content Creation",
    headline: "Treści, które konwertują",
    desc: "Od strategii przez copy po montaż wideo — tworzymy content dopasowany do algorytmów i do ludzi.",
    features: ["Social media", "Video editing", "Copywriting", "Content plan"],
    featured: false,
  },
  {
    icon: <IconDesign />, label: "Graphic Design",
    headline: "Visual identity, która zatrzymuje scroll",
    desc: "Identyfikacja wizualna, kreacje reklamowe i materiały brandingowe spójne z Twoją strategią.",
    features: ["Brand identity", "Ad creatives", "Social graphics", "Brandbook"],
    featured: false,
  },
];

const STEPS = [
  { num: "01", title: "Analiza AI", desc: "Mapujemy dane, lejek sprzedażowy i zachowania klientów przy użyciu narzędzi AI." },
  { num: "02", title: "Strategia", desc: "Projektujemy ekosystem marketingowy oparty na danych i algorytmach." },
  { num: "03", title: "Wdrożenie", desc: "Uruchamiamy kampanie, automacje i content równolegle, bez przestojów." },
  { num: "04", title: "Skalowanie", desc: "AI optymalizuje wyniki w czasie rzeczywistym — Ty skupiasz się na biznesie." },
];

const WHY = [
  { num: "01", title: "AI w każdym punkcie", desc: "Nie używamy AI jako ozdobnika. Wbudowujemy je w procesy: targeting, copy, segmentację i optymalizację kampanii." },
  { num: "02", title: "Dane, nie intuicja", desc: "Każda decyzja wynika z analizy. Testujemy, mierzymy i optymalizujemy — bez zgadywania." },
  { num: "03", title: "Szybkość rekina", desc: "Wdrożenia w dni, nie tygodnie. Reagujemy na zmiany rynku zanim zrobi to konkurencja." },
  { num: "04", title: "Jeden ekosystem", desc: "Reklamy, automatyzacje, content i design w jednym miejscu — spójna strategia bez chaosu." },
];

const TESTIMONIALS = [
  {
    quote: "Dzięki doskonałej organizacji byłem w stanie nagrać materiał na wiele miesięcy zaledwie w jeden dzień. Wszystko dostarczane na czas, z uwzględnieniem wszystkich poprawek. Gorąco polecam.",
    name: "Mariusz Borkowski", role: "Lekarz medycyny estetycznej", initial: "M",
  },
  {
    quote: "Zdecydowanie polecam współpracę. Są bardzo kreatywni — szybko wdrażają pomysły i świetnie znają trendy w social mediach, co przekłada się na realny wzrost zasięgów organicznych.",
    name: "Artur Mioduszewski", role: "CMO, Kebab King", initial: "A",
  },
];

const FLOW_NODES = [
  { icon: "👤", label: "Nowy lead", meta: "trigger" },
  { icon: "🤖", label: "AI kwalifikacja", meta: "AI · 0.3s" },
  { icon: "📧", label: "E-mail sequence", meta: "auto" },
  { icon: "🎯", label: "Retargeting ad", meta: "48h later" },
  { icon: "✅", label: "Konwersja", meta: "+ROAS" },
];

/* ── Component ───────────────────────────────────────────── */
export default function Home() {
  useReveal();

  return (
    <div style={{ background: "var(--background)", color: "var(--text-primary)" }}>

      {/* ── NAV ──────────────────────────────────────────── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "14px 24px",
        background: "rgba(7, 9, 13, 0.9)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--border)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <span className="font-display" style={{
          fontWeight: 800, fontSize: "1.2rem",
          letterSpacing: "-0.02em", color: "var(--text-primary)",
        }}>
          the <span style={{ color: "var(--cyan)" }}>sharks</span>
        </span>

        <div className="nav-links">
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
        </div>

        <a href="#contact" className="btn-cyan" style={{ padding: "10px 20px", fontSize: "0.75rem" }}>
          Porozmawiajmy
        </a>
      </nav>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="noise" style={{
        minHeight: "100vh",
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center", textAlign: "center",
        padding: "120px 24px 80px",
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,212,255,0.08) 0%, transparent 70%)",
        overflow: "hidden",
      }}>
        <div className="grid-bg" style={{
          position: "absolute", inset: 0, zIndex: 0,
          mask: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }} />
        <div className="animate-float" style={{
          position: "absolute", top: "20%", right: "8%",
          width: 120, height: 120,
          background: "radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)",
          borderRadius: "50%", zIndex: 0, pointerEvents: "none",
        }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 860, width: "100%" }}>
          <div className="animate-fade-in section-label" style={{ justifyContent: "center", marginBottom: 24 }}>
            <IconAI /> AI-Powered Marketing Agency
          </div>

          <h1 className="animate-fade-up font-display" style={{
            fontWeight: 800,
            fontSize: "clamp(2.4rem, 7vw, 6rem)",
            lineHeight: 1.05, letterSpacing: "-0.03em",
            marginBottom: 24,
          }}>
            Twoja sprzedaż.<br />
            <span className="gradient-text">Napędzana przez AI.</span>
          </h1>

          <p className="animate-fade-up" style={{
            fontSize: "clamp(0.95rem, 2vw, 1.2rem)", lineHeight: 1.75,
            color: "var(--text-secondary)", maxWidth: 580, margin: "0 auto 40px",
            animationDelay: "0.1s",
          }}>
            Łączymy marketing automation, AI i płatne reklamy w jeden ekosystem,
            który skaluje Twój biznes — bez przestojów, bez zbędnego hałasu.
          </p>

          <div className="animate-fade-up hero-cta" style={{ justifyContent: "center", animationDelay: "0.2s" }}>
            <a href="#contact" className="btn-cyan animate-pulse-glow">
              Zacznij z AI <IconArrow />
            </a>
            <a href="#services" className="btn-outline">
              Zobacz usługi
            </a>
          </div>
        </div>

        <div style={{
          position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
          color: "var(--text-muted)", fontSize: "0.7rem", letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}>
          <span>Scroll</span>
          <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, var(--text-muted), transparent)" }} />
        </div>
      </section>

      {/* ── SOCIAL PROOF BAR ─────────────────────────────── */}
      <section className="section-pad" style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}>
        <div className="section-inner">
          <div className="grid-stats">
            {[
              { num: "50+", label: "Klientów" },
              { num: "200+", label: "Kampanii" },
              { num: "3×", label: "Śr. wzrost ROAS" },
              { num: "24/7", label: "Automatyzacja" },
            ].map((stat, i) => (
              <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="stat-number">{stat.num}</div>
                <div style={{
                  fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em",
                  textTransform: "uppercase", color: "var(--text-secondary)", marginTop: 8,
                }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TICKER ───────────────────────────────────────── */}
      <div className="ticker-wrapper" style={{
        overflow: "hidden", padding: "16px 0",
        borderBottom: "1px solid var(--border)",
        background: "var(--background)",
      }}>
        <div className="animate-ticker" style={{ display: "flex", width: "max-content" }}>
          {TICKER_ITEMS.map((item, i) => (
            <span key={i} className="font-display" style={{
              fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.25em",
              color: i % 3 === 0 ? "var(--cyan)" : "var(--text-muted)",
              padding: "0 28px", borderRight: "1px solid var(--border)", whiteSpace: "nowrap",
            }}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── AI AUTOMATION ────────────────────────────────── */}
      <section id="automation" className="section-pad" style={{
        background: "var(--surface)", overflow: "hidden",
      }}>
        <div className="grid-bg" style={{
          position: "absolute", inset: 0, zIndex: 0, opacity: 0.5,
          mask: "radial-gradient(ellipse 70% 100% at 100% 50%, black, transparent)",
        }} />
        <div style={{
          position: "absolute", top: "50%", right: "-100px",
          transform: "translateY(-50%)",
          width: 400, height: 400,
          background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)",
          borderRadius: "50%", zIndex: 0, pointerEvents: "none",
        }} />

        <div className="section-inner" style={{ position: "relative", zIndex: 1 }}>
          <div className="grid-auto">

            {/* Left: copy */}
            <div>
              <div className="reveal section-label"><IconAutomation /> AI & Marketing Automation</div>
              <h2 className="reveal reveal-delay-1 font-display" style={{
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 4vw, 3rem)", lineHeight: 1.1,
                letterSpacing: "-0.02em", marginBottom: 24,
              }}>
                Twój marketing<br />
                <span style={{ color: "var(--cyan)" }}>działa, gdy śpisz.</span>
              </h2>
              <p className="reveal reveal-delay-2" style={{
                fontSize: "1rem", lineHeight: 1.8,
                color: "var(--text-secondary)", marginBottom: 28,
              }}>
                Budujemy inteligentne ekosystemy marketingowe oparte na AI — od
                automatycznego kwalifikowania leadów, przez spersonalizowane sekwencje
                e-mail, po dynamiczne kampanie remarketingowe. Zero ręcznej pracy,
                maksymalny wynik.
              </p>

              <div className="reveal reveal-delay-3 grid-features">
                {[
                  "Automatyczne lejki sprzedażowe", "AI lead scoring",
                  "Personalizowane e-mail flows", "Dynamiczny retargeting",
                  "CRM automation", "Analityka w czasie rzeczywistym",
                ].map((feat, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.875rem" }}>
                    <span style={{ color: "var(--cyan)", flexShrink: 0 }}><IconCheck /></span>
                    <span style={{ color: "var(--text-secondary)" }}>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="reveal reveal-delay-4">
                <a href="#contact" className="btn-cyan">Wdróż automatyzację <IconArrow /></a>
              </div>
            </div>

            {/* Right: flow visual */}
            <div className="reveal reveal-delay-2">
              <div style={{
                background: "var(--surface-2)",
                border: "1px solid var(--cyan-border)",
                borderRadius: 16, padding: "28px 24px",
              }}>
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  marginBottom: 24, paddingBottom: 16, borderBottom: "1px solid var(--border)",
                }}>
                  <span className="font-display" style={{
                    fontSize: "0.8rem", fontWeight: 700,
                    color: "var(--cyan)", letterSpacing: "0.1em", textTransform: "uppercase",
                  }}>AI Sales Flow</span>
                  <div style={{ display: "flex", gap: 5 }}>
                    {["#FF5F57","#FEBC2E","#28C840"].map(c => (
                      <div key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />
                    ))}
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {FLOW_NODES.map((node, i) => (
                    <div key={i}>
                      <div className="flow-node">
                        <span style={{ fontSize: "0.95rem" }}>{node.icon}</span>
                        <span>{node.label}</span>
                        <span style={{
                          marginLeft: "auto", fontSize: "0.7rem",
                          fontWeight: i === FLOW_NODES.length - 1 ? 700 : 400,
                          color: i === FLOW_NODES.length - 1 ? "var(--cyan)" : "var(--text-muted)",
                        }}>{node.meta}</span>
                      </div>
                      {i < FLOW_NODES.length - 1 && (
                        <div style={{ height: 16, paddingLeft: 24 }}>
                          <div style={{
                            width: 1, height: "100%", marginLeft: 11,
                            background: "linear-gradient(to bottom, var(--cyan-border), transparent)",
                          }} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div style={{
                  marginTop: 20, paddingTop: 16, borderTop: "1px solid var(--border)",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                }}>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Avg. conversion rate boost</span>
                  <span className="font-display" style={{ fontWeight: 800, fontSize: "1.25rem", color: "var(--cyan)" }}>+127%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section id="services" className="section-pad">
        <div className="section-inner">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className="reveal section-label" style={{ justifyContent: "center" }}>Nasze usługi</div>
            <h2 className="reveal reveal-delay-1 font-display" style={{
              fontWeight: 800,
              fontSize: "clamp(1.7rem, 4vw, 2.8rem)",
              letterSpacing: "-0.02em", lineHeight: 1.15,
            }}>
              Wszystko, czego potrzebuje<br />
              <span style={{ color: "var(--cyan)" }}>Twój wzrost</span>
            </h2>
          </div>

          <div className="grid-services">
            {SERVICES.map((svc, i) => (
              <div key={i} className={`glow-card reveal reveal-delay-${i + 1}`} style={{
                borderRadius: 12, padding: "28px 24px", position: "relative", overflow: "hidden",
                ...(svc.featured ? {
                  background: "linear-gradient(135deg, rgba(0,212,255,0.06) 0%, var(--surface) 100%)",
                  borderColor: "var(--cyan-border)",
                } : {}),
              }}>
                {svc.featured && (
                  <div style={{
                    position: "absolute", top: 14, right: 14,
                    background: "var(--cyan)", color: "#020507",
                    fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.15em",
                    textTransform: "uppercase", padding: "3px 8px", borderRadius: 4,
                  }}>AI-Powered</div>
                )}
                <div style={{
                  width: 44, height: 44, borderRadius: 8,
                  background: svc.featured ? "rgba(0,212,255,0.15)" : "var(--surface-2)",
                  border: "1px solid var(--cyan-border)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--cyan)", marginBottom: 16,
                }}>{svc.icon}</div>
                <div style={{
                  fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em",
                  textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 6,
                }}>{svc.label}</div>
                <h3 className="font-display" style={{
                  fontWeight: 700, fontSize: "1.15rem",
                  lineHeight: 1.3, letterSpacing: "-0.01em", marginBottom: 10,
                }}>{svc.headline}</h3>
                <p style={{
                  fontSize: "0.875rem", lineHeight: 1.7,
                  color: "var(--text-secondary)", marginBottom: 20,
                }}>{svc.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {svc.features.map((f, j) => (
                    <span key={j} style={{
                      fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.04em",
                      padding: "3px 9px", borderRadius: 4,
                      background: "var(--surface-2)", border: "1px solid var(--border)",
                      color: "var(--text-secondary)",
                    }}>{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────── */}
      <section className="section-pad" style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)",
      }}>
        <div className="section-inner">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="reveal section-label" style={{ justifyContent: "center" }}>Jak działamy</div>
            <h2 className="reveal reveal-delay-1 font-display" style={{
              fontWeight: 800,
              fontSize: "clamp(1.7rem, 4vw, 2.8rem)", letterSpacing: "-0.02em",
            }}>Precyzja na każdym kroku</h2>
          </div>

          <div className="grid-process">
            {/* Connecting line — desktop only */}
            <div className="process-line" style={{
              position: "absolute", top: 28, left: "12.5%", right: "12.5%",
              height: 1,
              background: "linear-gradient(90deg, transparent, var(--cyan-border) 20%, var(--cyan-border) 80%, transparent)",
              zIndex: 0,
            }} />

            {STEPS.map((step, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1}`} style={{
                textAlign: "center", padding: "0 12px", position: "relative", zIndex: 1,
              }}>
                <div className="font-display" style={{
                  width: 52, height: 52, borderRadius: "50%",
                  border: "1px solid var(--cyan-border)",
                  background: "var(--surface)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 20px",
                  fontWeight: 800, fontSize: "0.8rem", color: "var(--cyan)",
                  letterSpacing: "0.05em",
                  boxShadow: "0 0 20px var(--cyan-dim)",
                }}>{step.num}</div>
                <h3 className="font-display" style={{
                  fontWeight: 700, fontSize: "0.95rem", marginBottom: 10,
                }}>{step.title}</h3>
                <p style={{ fontSize: "0.83rem", lineHeight: 1.65, color: "var(--text-secondary)" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY THE SHARKS ───────────────────────────────── */}
      <section className="section-pad">
        <div className="section-inner">
          <div className="grid-why">
            <div className="why-sticky">
              <div className="reveal section-label">Dlaczego The Sharks</div>
              <h2 className="reveal reveal-delay-1 font-display" style={{
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 4vw, 3rem)", lineHeight: 1.1,
                letterSpacing: "-0.02em", marginBottom: 20,
              }}>
                AI to nie trend.<br />
                <span style={{ color: "var(--cyan)" }}>To nasz core.</span>
              </h2>
              <p className="reveal reveal-delay-2" style={{
                fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-secondary)",
              }}>
                Nie korzystamy z AI jako ozdobnika w prezentacji. Wbudowujemy
                sztuczną inteligencję w każdy element procesu marketingowego —
                od analizy danych po kreację i optymalizację kampanii.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {WHY.map((item, i) => (
                <div key={i} className={`glow-card reveal reveal-delay-${i + 1}`} style={{
                  borderRadius: 10, padding: "24px 24px",
                  display: "flex", gap: 16, alignItems: "flex-start",
                }}>
                  <span className="font-display" style={{
                    fontWeight: 800, fontSize: "1.75rem", color: "var(--cyan)",
                    opacity: 0.2, lineHeight: 1, flexShrink: 0, minWidth: 44,
                  }}>{item.num}</span>
                  <div>
                    <h3 className="font-display" style={{
                      fontWeight: 700, fontSize: "0.95rem", marginBottom: 6,
                    }}>{item.title}</h3>
                    <p style={{ fontSize: "0.85rem", lineHeight: 1.65, color: "var(--text-secondary)" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section className="section-pad" style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)",
      }}>
        <div className="section-inner">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className="reveal section-label" style={{ justifyContent: "center" }}>Opinie klientów</div>
            <h2 className="reveal reveal-delay-1 font-display" style={{
              fontWeight: 800,
              fontSize: "clamp(1.7rem, 4vw, 2.8rem)", letterSpacing: "-0.02em",
            }}>Mówią o nas</h2>
          </div>

          <div className="grid-testimonials">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className={`glow-card reveal reveal-delay-${i + 1}`} style={{
                borderRadius: 12, padding: "32px 28px", position: "relative",
              }}>
                <div className="quote-mark">"</div>
                <p style={{
                  fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-primary)",
                  marginBottom: 28, position: "relative", zIndex: 1, paddingTop: 12,
                }}>{t.quote}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: "50%",
                    background: "linear-gradient(135deg, var(--cyan) 0%, rgba(0,212,255,0.3) 100%)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--font-syne)", fontWeight: 800,
                    fontSize: "0.95rem", color: "#020507", flexShrink: 0,
                  }}>{t.initial}</div>
                  <div>
                    <div className="font-display" style={{ fontWeight: 700, fontSize: "0.875rem" }}>{t.name}</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginTop: 2 }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section id="contact" className="noise section-pad" style={{
        textAlign: "center",
        background: "radial-gradient(ellipse 80% 70% at 50% 100%, rgba(0,212,255,0.07) 0%, transparent 70%)",
        overflow: "hidden",
      }}>
        <div className="grid-bg" style={{
          position: "absolute", inset: 0, zIndex: 0,
          mask: "radial-gradient(ellipse 60% 80% at 50% 100%, black, transparent)",
        }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 720, margin: "0 auto" }}>
          <div className="reveal section-label" style={{ justifyContent: "center" }}>Zacznij dziś</div>
          <h2 className="reveal reveal-delay-1 font-display" style={{
            fontWeight: 800,
            fontSize: "clamp(1.9rem, 5vw, 4rem)", lineHeight: 1.1,
            letterSpacing: "-0.03em", marginBottom: 20,
          }}>
            Gotowy na marketing,<br />
            <span className="gradient-text">który sprzedaje sam?</span>
          </h2>
          <p className="reveal reveal-delay-2" style={{
            fontSize: "clamp(0.95rem, 2vw, 1.1rem)", lineHeight: 1.75,
            color: "var(--text-secondary)", marginBottom: 40,
          }}>
            Umów bezpłatną konsultację i dowiedz się, jak AI może skalować
            Twój biznes w ciągu najbliższych 90 dni.
          </p>
          <div className="reveal reveal-delay-3">
            <a href="https://thesharks.io/kontakt/" className="btn-cyan animate-pulse-glow"
              style={{ fontSize: "0.9rem", padding: "16px 36px" }}>
              Umów bezpłatną konsultację <IconArrow />
            </a>
          </div>
          <p className="reveal reveal-delay-4" style={{
            marginTop: 20, fontSize: "0.75rem", color: "var(--text-muted)",
          }}>Bez zobowiązań. Odpiszemy w ciągu 24 godzin.</p>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer style={{
        padding: "28px 24px",
        borderTop: "1px solid var(--border)",
        background: "var(--surface)",
      }}>
        <div className="section-inner">
          <div className="footer-inner">
            <span className="font-display" style={{
              fontWeight: 800, fontSize: "1.1rem", letterSpacing: "-0.02em",
            }}>
              the <span style={{ color: "var(--cyan)" }}>sharks</span>
            </span>
            <p style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
              © 2025 The Sharks — Agencja Marketingu & AI Automation
            </p>
            <div style={{ display: "flex", gap: 20 }}>
              {[
                { label: "Instagram", href: "https://www.instagram.com/thesharks.io/" },
                { label: "thesharks.io", href: "https://thesharks.io" },
              ].map((link) => (
                <a key={link.label} href={link.href} style={{
                  fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em",
                  textTransform: "uppercase", color: "var(--text-secondary)",
                  textDecoration: "none", transition: "color 0.2s",
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--cyan)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
                >{link.label}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
