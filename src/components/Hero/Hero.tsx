import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const STATS = [
  { count: 500, prefix: "+", suffix: "",       label: "clientas satisfechas",       text: null },
  { count: null, prefix: "",  suffix: "",       label: "certificación internacional", text: "PhiBrows" },
  { count: 6,   prefix: "",  suffix: "+ años",  label: "de experiencia",             text: null },
];

export default function Hero() {
  const ref      = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline animations
      gsap.from(".h-line", { y: "110%", duration: 1.1, stagger: .13, ease: "power4.out", delay: .15 });
      gsap.from(".h-fade", { opacity: 0, y: 22,  duration: .95, stagger: .11, ease: "power3.out", delay: .65 });

      // Stats entrance — stagger from bottom after hero loads
      gsap.from(".stat-item", {
        opacity: 0, y: 20, duration: .7,
        stagger: .12, ease: "power3.out", delay: 1.4,
      });

      // Counter animation for numeric stats
      document.querySelectorAll(".stat-counter").forEach((el) => {
        const target = parseInt(el.getAttribute("data-target") ?? "0", 10);
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          delay: 1.6,
          ease: "power2.out",
          onUpdate() {
            el.textContent = Math.round(obj.val).toString();
          },
        });
      });

      // Gold shimmer line animation on stats bar
      gsap.fromTo(".stat-bar-line",
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 1.2, ease: "power3.out", delay: 1.3 }
      );

    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="inicio" ref={ref} className="relative flex min-h-screen flex-col overflow-hidden bg-noir">

      {/* Full-bleed image — right side */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[54%]">
        <img
          src="https://res.cloudinary.com/dddjqjtbk/image/upload/v1780354703/ChatGPT_Image_1_jun_2026_15_57_35_jr4a7t.png"
          alt="Socorro Cota — MNFS PhiBrows"
          className="h-full w-full object-cover"
          loading="eager"
          style={{ objectPosition: "60% top" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-noir via-noir/60 lg:via-noir/25 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-noir/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-noir via-noir/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="shell relative z-10 flex flex-1 flex-col justify-center pt-28 pb-20 lg:pt-28 lg:pb-16">
        <div className="max-w-lg">

          {/* Eyebrow pill */}
          <div className="h-fade mb-10 inline-flex items-center gap-2.5 rounded-full border border-gold/25 bg-gold/8 px-4 py-2">
            <Sparkles size={12} className="text-gold" />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold/80">
              Estudio de Belleza · Huatabampo, Sonora
            </span>
          </div>

          {/* Headline */}
          <h1 className="overflow-hidden">
            <span className="block overflow-hidden">
              <span className="h-line block font-serif italic text-[clamp(2.6rem,7vw,5.5rem)] leading-[1.05] text-cream/90">
                Donde cada
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="h-line block font-sans text-[clamp(3rem,8.5vw,7rem)] font-black leading-none tracking-tight text-cream">
                mirada cuenta
              </span>
            </span>
            <span className="block overflow-hidden mt-1">
              <span className="h-line block font-serif italic text-[clamp(2.8rem,7.5vw,6rem)] leading-none text-gold-gradient">
                una historia.
              </span>
            </span>
          </h1>

          {/* Divider */}
          <div className="h-fade mt-8 flex items-center gap-4">
            <div className="h-px w-10 bg-gold/40" />
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-gold/50">Socorro Cota · Artist</span>
          </div>

          {/* Body */}
          <p className="h-fade mt-5 max-w-sm font-serif italic text-[1.15rem] leading-[1.85] text-cream/60">
            Arte y precisión en cada trazo. Diseñamos las cejas que
            realzan tu belleza natural — con técnica PhiBrows certificada
            y un toque que solo se aprende con pasión.
          </p>

          {/* CTAs */}
          <div className="h-fade mt-10 flex flex-wrap items-center gap-4">
            <a href="#cita" className="gold-btn group">
              Reservar mi cita
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a href="#servicios" className="outline-btn">
              Conocer servicios
            </a>
          </div>

          {/* ── Stats animados ── */}
          <div ref={statsRef} className="mt-14">

            {/* Línea superior con shimmer */}
            <div className="relative mb-8 h-px overflow-hidden">
              <div className="absolute inset-0 bg-cream/6" />
              <div
                className="stat-bar-line absolute inset-0 origin-left bg-gradient-to-r from-transparent via-gold/50 to-transparent"
                style={{ transform: "scaleX(0)" }}
              />
            </div>

            {/* Stats grid */}
            <div className="flex flex-wrap gap-x-0 gap-y-6">
              {STATS.map(({ count, prefix, suffix, label, text }, i) => (
                <div key={label} className="flex items-stretch">
                  {/* Stat card */}
                  <div
                    className="stat-item group relative flex flex-col gap-1.5 px-6 first:pl-0 cursor-default select-none"
                    style={{ opacity: 0 }}
                  >
                    {/* Hover glow */}
                    <div className="absolute inset-0 rounded-lg bg-gold/0 transition-all duration-500 group-hover:bg-gold/5 group-hover:shadow-[0_0_20px_rgba(201,168,76,0.08)]" />

                    {/* Value */}
                    <div className="relative flex items-baseline gap-1">
                      {prefix && (
                        <span className="font-mono text-sm text-gold/70 transition-colors duration-300 group-hover:text-gold">
                          {prefix}
                        </span>
                      )}
                      {text ? (
                        <span className="font-serif text-2xl italic text-gold leading-none transition-all duration-300 group-hover:text-gold-light">
                          {text}
                        </span>
                      ) : (
                        <span className="font-serif text-2xl italic text-gold leading-none transition-all duration-300 group-hover:text-gold-light">
                          <span
                            className="stat-counter"
                            data-target={count ?? 0}
                          >
                            0
                          </span>
                          {suffix && (
                            <span className="text-lg">{suffix}</span>
                          )}
                        </span>
                      )}
                    </div>

                    {/* Label */}
                    <p className="relative font-mono text-[9px] uppercase tracking-[0.18em] text-cream/30 transition-colors duration-300 group-hover:text-cream/50">
                      {label}
                    </p>

                    {/* Bottom gold line on hover */}
                    <div className="absolute bottom-0 left-6 right-6 h-px scale-x-0 bg-gold/40 transition-transform duration-400 group-hover:scale-x-100 first:left-0" />
                  </div>

                  {/* Separador vertical entre stats */}
                  {i < STATS.length - 1 && (
                    <div className="stat-item mx-1 w-px self-stretch bg-gradient-to-b from-transparent via-cream/10 to-transparent" style={{ opacity: 0 }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="h-fade absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
        <div className="h-10 w-px animate-pulse bg-gradient-to-b from-gold/40 to-transparent" />
      </div>
    </section>
  );
}
