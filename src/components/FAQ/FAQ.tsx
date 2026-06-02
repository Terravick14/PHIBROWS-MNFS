import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "../../hooks/useGSAP";
import { faqs } from "../../data/faq";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const scope = useRef<HTMLElement>(null);

  useGSAP(scope, () => {
    gsap.from(".faq-header", {
      scrollTrigger: { trigger: scope.current, start: "top 75%" },
      y: 28, duration: 1, ease: "power3.out",
    });
    gsap.from(".faq-item", {
      scrollTrigger: { trigger: ".faq-list", start: "top 78%" },
      y: 18, stagger: .09, duration: .7, ease: "power3.out",
    });
  }, []);

  return (
    <section id="preguntas" ref={scope} className="relative bg-surface py-28 lg:py-36 overflow-hidden">

      {/* Background image */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src="https://res.cloudinary.com/dddjqjtbk/image/upload/v1780355226/WhatsApp_Image_2026-05-30_at_6.47.33_PM_ukjtyx.jpg"
          alt=""
          className="h-full w-full object-cover object-center"
          style={{ opacity: 0.20 }}
        />
        <div className="absolute inset-0 bg-surface/80" />
      </div>

      {/* Decorative top gold rule */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Soft ambient glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px]" />

      <div className="shell relative z-10">

        {/* Section header — centered, editorial */}
        <div className="faq-header mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-gold/50 shrink-0" />
            <span className="font-serif italic text-xl text-gold tracking-wide">Preguntas frecuentes</span>
            <span className="h-px w-8 bg-gold/50 shrink-0" />
          </div>

          {/* Ornamental line + diamond */}
          <div className="flex items-center justify-center gap-3 mb-7">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50" />
            <span className="text-gold text-[10px]">✦</span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50" />
          </div>

          <h2 className="font-serif text-4xl italic leading-tight text-cream sm:text-5xl lg:text-[3.2rem]">
            Resolvemos tus dudas<br />
            <em className="not-italic text-gold/80">con gusto.</em>
          </h2>
          <p className="mt-5 text-sm leading-8 text-cream/40 max-w-sm mx-auto">
            ¿Algo más? Escríbenos por WhatsApp —<br className="hidden sm:block" /> respondemos con cariño y rapidez.
          </p>
        </div>

        {/* Accordion — two-column on large screens */}
        <div className="faq-list max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item group rounded-2xl border transition-all duration-300 ${
                open === i
                  ? "border-gold/30 bg-elevated shadow-[0_4px_24px_rgba(201,168,76,0.08)]"
                  : "border-cream/6 bg-elevated/40 hover:border-cream/12 hover:bg-elevated/70"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center gap-5 px-6 py-5 text-left outline-none"
              >
                {/* Number badge */}
                <span className={`shrink-0 font-mono text-[10px] tabular-nums transition-colors duration-200 ${
                  open === i ? "text-gold" : "text-cream/25"
                }`}>
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className={`flex-1 text-[15px] font-medium leading-6 transition-colors duration-200 ${
                  open === i ? "text-cream" : "text-cream/65 group-hover:text-cream/85"
                }`}>
                  {faq.question}
                </span>

                {/* Animated icon */}
                <span className={`shrink-0 flex items-center justify-center w-7 h-7 rounded-full border transition-all duration-300 ${
                  open === i
                    ? "border-gold/40 bg-gold/10 text-gold rotate-45"
                    : "border-cream/10 bg-cream/4 text-cream/30"
                }`}>
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path d="M5.5 1v9M1 5.5h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>

              {/* Answer with smooth expand */}
              <div className={`grid transition-all duration-300 ease-in-out ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 pt-1 flex gap-5">
                    {/* Gold left accent */}
                    <span className="w-px shrink-0 bg-gradient-to-b from-gold/40 to-transparent rounded-full mt-0.5" />
                    <p className="text-sm leading-8 text-cream/50">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <a href="#cita" className="gold-btn inline-flex">
            Agendar mi valoración gratuita
          </a>
        </div>

      </div>

      {/* Decorative bottom gold rule */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
}
