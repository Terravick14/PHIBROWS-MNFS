import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "../../hooks/useGSAP";
import { whatsappUrl } from "../../utils/booking";
import { GradientTracing } from "../ui/gradient-tracing";

export default function Contact() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(scope, () => {
    gsap.from(".ct-item", {
      immediateRender: false,
      scrollTrigger: { trigger: scope.current, start: "top 75%" },
      
      y: 24,
      stagger: .1,
      duration: .8,
      ease: "power3.out",
    });
  }, []);

  return (
    <section id="contacto" ref={scope} className="relative overflow-hidden bg-noir py-28 lg:py-36">

      {/* Decorative gradient lines */}
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-between px-4 opacity-60">
        {/* Top flowing curve */}
        <div className="absolute top-8 left-0 w-full">
          <GradientTracing
            width={1200} height={120}
            path="M0,80 C200,20 400,100 600,60 S900,20 1200,70"
            gradientColors={["#C9A84C", "#F0D080", "#C9A84C"]}
            animationDuration={5}
            strokeWidth={1}
            opacity={0.5}
          />
        </div>
        {/* Middle elegant loop */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full">
          <GradientTracing
            width={1200} height={160}
            path="M0,80 C150,20 300,140 500,80 S800,10 1000,90 S1150,50 1200,80"
            gradientColors={["#DEB96A", "#C9A84C", "#EDE0D0"]}
            animationDuration={7}
            strokeWidth={1.2}
            opacity={0.35}
          />
        </div>
        {/* Bottom curve */}
        <div className="absolute bottom-8 left-0 w-full">
          <GradientTracing
            width={1200} height={100}
            path="M0,50 C300,10 500,90 700,40 S1000,80 1200,30"
            gradientColors={["#C9A84C", "#F0D080", "#C9A84C"]}
            animationDuration={6}
            strokeWidth={1}
            opacity={0.4}
          />
        </div>
      </div>

      <div className="shell relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-end">

          {/* Left */}
          <div>
            <div className="ct-item flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-gold/50 shrink-0" />
              <span className="font-serif italic text-xl text-gold tracking-wide">Dónde encontrarnos</span>
            </div>
            <h2 className="ct-item font-serif text-4xl italic text-cream sm:text-5xl">
              Huatabampo,<br />Sonora.
            </h2>
            <p className="ct-item mt-6 text-sm leading-8 text-cream/45">
              Estamos en el centro de Huatabampo, a una calle antes de Terminal Los Mayitos, pegado a Imprenta Martínez.
            </p>
            <div className="ct-item mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="gold-btn">
                Escribir por WhatsApp
              </a>
              <a href="#cita" className="outline-btn">
                Agendar aquí
              </a>
            </div>
          </div>

          {/* Right — map + info */}
          <div className="ct-item grid gap-4">
            <div className="overflow-hidden rounded-xl" style={{ aspectRatio: "4/3" }}>
              <iframe
                title="Ubicación APhiBrows"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.3!2d-109.634!3d26.827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCalle%20Guerrero%2021%2C%20Huatabampo%2C%20Sonora!5e0!3m2!1ses!2smx!4v1"
                width="100%" height="100%"
                style={{ border: 0, filter: "invert(88%) hue-rotate(180deg) saturate(.8)" }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                { label: "Dirección", val: "Calle Guerrero #21 esq. Hidalgo, Centro" },
                { label: "Horario", val: "L–V 9–12 y 2–7 · Sáb 10–6" },
              ].map(({ label, val }) => (
                <div key={label} className="rounded-lg border border-cream/6 bg-surface p-4">
                  <p className="label mb-1">{label}</p>
                  <p className="text-cream/60 leading-6">{val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
