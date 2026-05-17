// @ts-nocheck
"use client";

import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import content from "../data/content.json";

const display = Bricolage_Grotesque({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"] });

// Bauhaus / brutalist editorial palette
const INK = "#0E0E0E";
const PAPER = "#F4F2EC";
const CORAL = "#FF4D2E";
const ACCENT_2 = "#1E55E0";

export default function Page() {
  const phoneTel = "tel:" + content.contact.phone.replace(/[^0-9]/g, "");
  const mapUrl = "https://maps.google.com/maps?output=embed&q=" + encodeURIComponent(content.contact.mapEmbedQuery);

  return (
    <main className={body.className} style={{ backgroundColor: PAPER, color: INK }}>
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .fade-up { animation: fadeUp 0.85s cubic-bezier(.16,.84,.32,1) forwards; }
        .fade-in { animation: fadeIn 1.1s ease-out forwards; }
        .marquee { display: inline-block; white-space: nowrap; animation: marquee 32s linear infinite; }
        .d1 { animation-delay: .1s; opacity: 0; }
        .d2 { animation-delay: .22s; opacity: 0; }
        .d3 { animation-delay: .34s; opacity: 0; }
      `}</style>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: PAPER, borderBottom: `2px solid ${INK}` }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className={display.className} style={{ fontWeight: 800, fontSize: "1.4rem", color: INK, letterSpacing: "-0.03em" }}>
            IDEOLOGY<span style={{ color: CORAL }}>.</span>
          </a>
          <div className={mono.className + " hidden md:flex items-center gap-7 text-xs uppercase tracking-wider"} style={{ color: INK }}>
            <a href="#menu" className="hover:opacity-60">Menu</a>
            <a href="#story" className="hover:opacity-60">Story</a>
            <a href="#visit" className="hover:opacity-60">Visit</a>
          </div>
          <a href={phoneTel} className={mono.className + " px-5 py-2.5 text-xs uppercase tracking-wider font-semibold"} style={{ backgroundColor: INK, color: PAPER }}>
            Call →
          </a>
        </div>
      </nav>

      {/* HERO — editorial split */}
      <section id="top" className="pt-32 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <p className={mono.className + " text-xs uppercase tracking-[0.25em] mb-8 fade-in d1"} style={{ color: CORAL }}>
            EST. 2017 · 312 N CENTRAL AVE · GLENDALE
          </p>
          <h1 className={display.className + " fade-up d1"} style={{ fontSize: "clamp(3.5rem, 13vw, 11rem)", color: INK, fontWeight: 800, lineHeight: 0.92, letterSpacing: "-0.045em" }}>
            COFFEE.<br />WITH<br /><span style={{ color: CORAL }}>IDEOLOGY.</span>
          </h1>
          <div className="mt-14 grid md:grid-cols-12 gap-10 items-end">
            <p className="md:col-span-5 text-base md:text-lg leading-relaxed fade-up d2" style={{ color: INK }}>
              {content.hero.subheading}
            </p>
            <div className="md:col-span-4 md:col-start-9 flex flex-col gap-3 fade-up d3">
              <a href="#visit" className="px-7 py-4 text-center text-sm font-semibold uppercase tracking-wider transition-transform hover:-translate-y-0.5" style={{ backgroundColor: INK, color: PAPER }}>
                Visit the shop →
              </a>
              <a href="#menu" className="px-7 py-4 text-center text-sm font-semibold uppercase tracking-wider transition-transform hover:-translate-y-0.5" style={{ backgroundColor: "transparent", border: `2px solid ${INK}`, color: INK }}>
                See the menu
              </a>
            </div>
          </div>
        </div>
        {/* Big hero photo, full bleed */}
        <div className="mt-16 max-w-7xl mx-auto fade-up d3">
          <div className="aspect-[16/8] bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url("${content.hero.image}")`, border: `2px solid ${INK}` }} />
        </div>
      </section>

      {/* MARQUEE */}
      <section className="py-6 overflow-hidden" style={{ backgroundColor: INK, borderTop: `2px solid ${INK}`, borderBottom: `2px solid ${INK}` }}>
        <div className="marquee">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k} className={display.className} style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: PAPER, fontWeight: 700, letterSpacing: "-0.02em", paddingRight: "3rem" }}>
              SINGLE ORIGIN <span style={{ color: CORAL }}>★</span> NO SYRUPS <span style={{ color: CORAL }}>★</span> HONEST ESPRESSO <span style={{ color: CORAL }}>★</span> ROASTED MON & THU <span style={{ color: CORAL }}>★</span> OPEN 7AM <span style={{ color: CORAL }}>★</span>
            </span>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className={mono.className + " text-xs uppercase tracking-[0.25em] mb-3"} style={{ color: CORAL }}>01 · STORY</p>
            <h2 className={display.className} style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", color: INK, fontWeight: 700, lineHeight: 0.95, letterSpacing: "-0.03em" }}>
              {content.about.heading}
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg leading-relaxed" style={{ color: INK }}>
            {content.about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* MENU — brutalist list */}
      <section id="menu" className="px-6 py-24 md:py-32" style={{ borderTop: `2px solid ${INK}`, borderBottom: `2px solid ${INK}` }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
            <div>
              <p className={mono.className + " text-xs uppercase tracking-[0.25em] mb-3"} style={{ color: CORAL }}>02 · MENU</p>
              <h2 className={display.className} style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: INK, fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.03em" }}>
                What we pour.
              </h2>
            </div>
            <p className={mono.className + " text-xs uppercase tracking-wider"} style={{ color: INK, opacity: 0.6 }}>06 ITEMS</p>
          </div>
          <div>
            {content.services.map((s, i) => (
              <div key={i} className="grid grid-cols-12 gap-4 py-6 transition-colors hover:bg-black/5" style={{ borderTop: i === 0 ? `2px solid ${INK}` : `1px solid ${INK}25`, borderBottom: i === content.services.length - 1 ? `2px solid ${INK}` : "none" }}>
                <div className={mono.className + " col-span-1 text-xs pt-2"} style={{ color: CORAL }}>0{i + 1}</div>
                <h3 className={display.className + " col-span-11 md:col-span-4"} style={{ fontSize: "1.6rem", fontWeight: 700, color: INK, letterSpacing: "-0.01em" }}>{s.title}</h3>
                <p className="col-span-12 md:col-span-5 text-sm md:text-base leading-relaxed pt-1" style={{ color: INK, opacity: 0.75 }}>{s.description}</p>
                {s.price && <div className={display.className + " col-span-12 md:col-span-2 text-right"} style={{ fontSize: "1.4rem", fontWeight: 700, color: INK }}>{s.price}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <p className={mono.className + " text-xs uppercase tracking-[0.25em] mb-3"} style={{ color: CORAL }}>03 · THE SHOP</p>
          <h2 className={display.className + " mb-12"} style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: INK, fontWeight: 700, lineHeight: 0.95, letterSpacing: "-0.03em" }}>
            Inside Ideology.
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {content.gallery && content.gallery.map((src, i) => (
              <div key={i} className="aspect-[4/5] bg-cover bg-center" style={{ backgroundImage: `url("${src}")`, border: `2px solid ${INK}` }} />
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS — sharp cards */}
      <section className="px-6 py-24" style={{ backgroundColor: INK }}>
        <div className="max-w-7xl mx-auto">
          <p className={mono.className + " text-xs uppercase tracking-[0.25em] mb-3"} style={{ color: CORAL }}>04 · WORD OF MOUTH</p>
          <h2 className={display.className + " mb-14"} style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: PAPER, fontWeight: 700, lineHeight: 0.95, letterSpacing: "-0.03em" }}>
            Reviews, unedited.
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {content.reviews.slice(0, 3).map((r, i) => (
              <div key={i} className="p-7" style={{ backgroundColor: PAPER, border: `2px solid ${PAPER}` }}>
                <div className="flex gap-1 mb-4" style={{ color: CORAL, fontSize: "1.1rem" }}>
                  {Array.from({ length: r.rating || 5 }).map((_, j) => <span key={j}>★</span>)}
                </div>
                <p className={display.className} style={{ fontSize: "1.15rem", color: INK, lineHeight: 1.45, fontWeight: 500 }}>"{r.text}"</p>
                <p className={mono.className + " mt-5 text-xs uppercase tracking-wider"} style={{ color: INK, opacity: 0.6 }}>— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="px-6 py-24 md:py-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <p className={mono.className + " text-xs uppercase tracking-[0.25em] mb-3"} style={{ color: CORAL }}>05 · VISIT</p>
            <h2 className={display.className} style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: INK, fontWeight: 800, lineHeight: 0.92, letterSpacing: "-0.03em" }}>
              Stop in.
            </h2>
            <p className="mt-6 text-base leading-relaxed" style={{ color: INK }}>{content.contact.address}</p>
            <a href={phoneTel} className={display.className + " block mt-3"} style={{ fontSize: "2rem", color: CORAL, fontWeight: 700 }}>
              {content.contact.phone}
            </a>
            <div className="mt-10">
              <p className={mono.className + " text-xs uppercase tracking-wider mb-4"} style={{ color: INK, opacity: 0.6 }}>OPEN HOURS</p>
              <table className="w-full text-sm">
                <tbody>
                  {Object.entries(content.contact.hours).map(([day, time]) => (
                    <tr key={day} style={{ borderBottom: `1px solid ${INK}25` }}>
                      <td className={mono.className + " py-3 uppercase"} style={{ color: INK }}>{day}</td>
                      <td className={mono.className + " py-3 text-right"} style={{ color: INK, opacity: 0.7 }}>{String(time)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {content.orderOnline && (
              <div className="mt-10 flex flex-wrap gap-3">
                {content.orderOnline.map((o, i) => (
                  <a key={i} href={o.url} target="_blank" rel="noreferrer" className={mono.className + " px-5 py-3 text-xs uppercase tracking-wider font-semibold"} style={{ backgroundColor: INK, color: PAPER }}>
                    {o.label} →
                  </a>
                ))}
              </div>
            )}
          </div>
          <div className="md:col-span-7">
            <div className="h-[520px]" style={{ border: `2px solid ${INK}` }}>
              <iframe title="Ideology Coffee location" width="100%" height="100%" loading="lazy" style={{ border: 0 }} referrerPolicy="no-referrer-when-downgrade" src={mapUrl} />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: INK, color: PAPER }}>
        <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-8">
          <div>
            <p className={display.className} style={{ fontSize: "1.8rem", fontWeight: 800, letterSpacing: "-0.03em" }}>IDEOLOGY<span style={{ color: CORAL }}>.</span></p>
            <p className={mono.className + " mt-3 text-xs uppercase tracking-wider"} style={{ opacity: 0.6 }}>Glendale coffee · est. 2017</p>
          </div>
          <div>
            <p className={mono.className + " text-xs uppercase tracking-wider mb-3"} style={{ opacity: 0.6 }}>WHERE</p>
            <p className="text-sm">{content.contact.address}</p>
            <p className={mono.className + " mt-1 text-sm"}>{content.contact.phone}</p>
          </div>
          <div>
            <p className={mono.className + " text-xs uppercase tracking-wider mb-3"} style={{ opacity: 0.6 }}>FOLLOW</p>
            <div className="flex flex-wrap gap-4 text-sm">
              {content.social && Object.entries(content.social).map(([k, v]) => (
                <a key={k} href={String(v)} target="_blank" rel="noreferrer" className="capitalize hover:opacity-60 transition">{k} →</a>
              ))}
            </div>
          </div>
        </div>
        <div className={mono.className + " py-5 text-center text-xs uppercase tracking-wider"} style={{ borderTop: `1px solid ${PAPER}20`, opacity: 0.5 }}>
          © {new Date().getFullYear()} IDEOLOGY COFFEE
        </div>
      </footer>
    </main>
  );
}