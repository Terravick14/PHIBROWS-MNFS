import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const STATS = [
  { value: "+500",     label: "clientas satisfechas" },
  { value: "PhiBrows", label: "certificación internacional" },
  { value: "6+ años",  label: "de experiencia" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".h-line",  { y: "110%", duration: 1.1, stagger: .13, ease: "power4.out", delay: .15 });
      gsap.from(".h-fade",  { opacity: 0, y: 22,  duration: .95, stagger: .11, ease: "power3.out", delay: .65 });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="inicio" ref={ref} className="relative flex min-h-screen flex-col overflow-hidden bg-noir">

      {/* Full-bleed image — right side */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[54%]">
        <img
          src="https://res.cloudinary.com/dddjqjtbk/image/upload/v1780354703/ChatGPT_Image_1_jun_2026_15_57_35_jr4a7t.png"
          alt="Socorro Cota — APhiBrows"
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

          {/* Headline — 3 líneas para más impacto visual */}
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

          {/* Divider line */}
          <div className="h-fade mt-8 flex items-center gap-4">
            <div className="h-px w-10 bg-gold/40" />
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-gold/50">Socorro Cota</span>
          </div>

          {/* Body — más poético y femenino */}
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

          {/* Stats */}
          <div className="h-fade mt-14 flex flex-wrap gap-x-8 gap-y-4 border-t border-cream/6 pt-8">
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <p className="font-serif text-xl italic text-gold leading-none">{value}</p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-cream/30">{label}</p>
              </div>
            ))}
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
