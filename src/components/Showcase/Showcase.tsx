import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "../../hooks/useGSAP";
import AmbientAurora from "../ui/ambient-aurora";

const IMAGES = [
  { src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=85", label: "Microblading", span: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=85", label: "Sombreado" },
  { src: "https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=800&q=85", label: "Micropigmentación" },
  { src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=85", label: "Ceja Compacta", span: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=85", label: "Diseño PhiBrows" },
  { src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=85", label: "Resultado natural" },
];

export default function Showcase() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(scope, () => {
    gsap.from(".gal-item", {
      immediateRender: false,
      scrollTrigger: { trigger: scope.current, start: "top 72%" },
      
      y: 24,
      stagger: .09,
      duration: .8,
      ease: "power3.out",
    });
  }, []);

  return (
    <section id="resultados" ref={scope} className="relative bg-noir py-28 lg:py-36 overflow-hidden">

      {/* Ambient aurora canvas background */}
      <AmbientAurora opacity={0.7} />
      {/* Dark overlay so gallery images stay readable */}
      <div className="absolute inset-0 bg-noir/60" />

      <div className="shell relative z-10">

        {/* Header */}
        <div className="mb-14 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-gold/50 shrink-0" />
            <span className="font-serif italic text-xl text-gold tracking-wide">Galería de resultados</span>
            <span className="h-px w-8 bg-gold/50 shrink-0" />
          </div>
          <h2 className="font-serif text-4xl italic text-cream sm:text-5xl">
            El trabajo habla<br />por sí mismo.
          </h2>
        </div>

        {/* Editorial grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:grid-rows-[280px_280px]">
          {IMAGES.map((img, i) => (
            <figure
              key={i}
              className={`gal-item group relative overflow-hidden rounded-xl ${img.span ?? ""}`}
            >
              <img
                loading="lazy"
                src={img.src}
                alt={img.label}
                className="h-full w-full object-cover transition duration-700 will-change-transform group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-noir/70 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              <p className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-widest text-cream/0 transition duration-500 group-hover:text-cream/80">
                {img.label}
              </p>
            </figure>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a href="#cita" className="outline-btn">
            Agenda tu transformación →
          </a>
        </div>
      </div>
    </section>
  );
}
