import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "../../hooks/useGSAP";

const QUOTES = [
  {
    text: "Socorro es una artista. Mis cejas quedaron perfectamente simétricas, naturales y finas. La mejor decisión que he tomado.",
    name: "Andrea M.",
    service: "Microblading PhiBrows",
  },
  {
    text: "Llevaba años dibujándome las cejas todos los días. Ahora me levanto perfecta. La micropigmentación que hizo Socorro es increíblemente natural.",
    name: "Paola R.",
    service: "Micropigmentación",
  },
  {
    text: "El curso que tomé con Socorro fue excelente. Aprendí desde cero y ahora tengo mi propio negocio. Domina la técnica y enseña con mucha paciencia.",
    name: "Mariana C.",
    service: "Curso Personalizado",
  },
];

export default function SocialProof() {
  const [idx, setIdx] = useState(0);
  const scope = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);

  useGSAP(scope, () => {
    gsap.from(".sp-fade", {
      immediateRender: false,
      scrollTrigger: { trigger: scope.current, start: "top 75%" },
      
      y: 28,
      stagger: .12,
      duration: .9,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      if (quoteRef.current) {
        gsap.to(quoteRef.current, { opacity: 0, y: -10, duration: .3, ease: "power2.in",
          onComplete: () => {
            setIdx(v => (v + 1) % QUOTES.length);
            gsap.fromTo(quoteRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: .4, ease: "power2.out" });
          }
        });
      }
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const q = QUOTES[idx];

  return (
    <section ref={scope} className="relative overflow-hidden bg-surface py-28 lg:py-36">
      {/* Background image with opacity */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src="https://res.cloudinary.com/dddjqjtbk/image/upload/v1780354751/ChatGPT_Image_1_jun_2026_15_23_50_snfuyw.png"
          alt=""
          className="h-full w-full object-contain object-center"
          style={{ opacity: 0.22 }}
        />
        {/* Dark overlay to keep text readable */}
        <div className="absolute inset-0 bg-surface/60" />
      </div>

      <div className="shell relative z-10 text-center">
        <div className="sp-fade flex items-center justify-center gap-3 mb-12">
          <span className="h-px w-8 bg-gold/50 shrink-0" />
          <span className="font-serif italic text-xl text-gold tracking-wide">Lo que dicen nuestras clientas</span>
          <span className="h-px w-8 bg-gold/50 shrink-0" />
        </div>

        <div ref={quoteRef}>
          <p className="font-serif text-2xl italic leading-relaxed text-cream/80 sm:text-3xl lg:text-4xl lg:leading-relaxed">
            "{q.text}"
          </p>
          <div className="mt-10 flex flex-col items-center gap-1">
            <p className="font-semibold text-cream">{q.name}</p>
            <p className="label">{q.service}</p>
          </div>
        </div>

        {/* Dots */}
        <div className="sp-fade mt-10 flex justify-center gap-2">
          {QUOTES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === idx ? "w-8 bg-gold" : "w-2 bg-cream/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
