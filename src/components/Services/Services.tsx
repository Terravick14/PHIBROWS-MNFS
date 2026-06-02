import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "../../hooks/useGSAP";
import { SparkEffect } from "../ui/spark-effect";

const SERVICES = [
  {
    num: "01",
    category: "Cejas",
    title: "Microblading",
    short: "Pelo a pelo, 100% natural",
    desc: "Trazos ultrafinos que imitan cada pelo natural. La técnica más demandada mundialmente para cejas perfectas. Certificada PhiBrows. Duración 12–18 meses.",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=900&q=85",
  },
  {
    num: "02",
    category: "Cejas",
    title: "Microshading & Sombreado",
    short: "Efecto polvo suave y definido",
    desc: "Técnica de sombreado que crea densidad y definición con aspecto de maquillaje permanente. Ideal para pieles grasas o quienes buscan mayor volumen.",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=85",
  },
  {
    num: "03",
    category: "Cejas",
    title: "Ceja Compacta",
    short: "Pelo a pelo + sombra combinados",
    desc: "Lo mejor de dos mundos: naturalidad del microblading con la densidad del sombreado. El resultado más completo y duradero para cejas perfectas.",
    image: "https://res.cloudinary.com/dddjqjtbk/image/upload/v1780356853/CEJAS-COMPACTAS_gsb9h0.jpg",
  },
  {
    num: "04",
    category: "Ojos",
    title: "Delineado & Punteo de Pestañas",
    short: "Mirada intensa sin esfuerzo",
    desc: "Delineado permanente que resalta y define la mirada. El punteo entre pestañas da ilusión de mayor densidad sin verse artificial.",
    image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=900&q=85",
  },
  {
    num: "05",
    category: "Labios",
    title: "Micropigmentación de Labios",
    short: "Color y definición permanentes",
    desc: "Devuelve color, simetría y definición a tus labios de forma permanente. Resultado natural que luce perfecto en todo momento, sin retoque diario.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85",
  },
  {
    num: "06",
    category: "Cabello",
    title: "Alaciado & Queratina Orgánica",
    short: "Sin formol · Resultado sedoso",
    desc: "Tratamiento 100% libre de formol que alisa, nutre y controla el frizz por meses. Cabello saludable, sedoso y manejable desde la primera aplicación.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=85",
  },
  {
    num: "07",
    category: "Beauty",
    title: "Depilación Hindú & Uñas",
    short: "Sin químicos · Diseño a medida",
    desc: "Depilación con hilo, la técnica más precisa y suave. Uñas artificiales con diseño personalizado para complementar tu estilo.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85",
  },
  {
    num: "08",
    category: "Educación",
    title: "Cursos Personalizados",
    short: "Aprende con una artista certificada",
    desc: "Aprende microblading y micropigmentación con técnica PhiBrows certificada. Formación personalizada, práctica real y respaldo profesional para iniciar tu negocio.",
    image: "https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=900&q=85",
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const scope = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useGSAP(scope, () => {
    gsap.from(".svc-header", {
      scrollTrigger: { trigger: scope.current, start: "top 72%" },
      y: 30, duration: .9, ease: "power3.out",
    });
    gsap.from(".svc-row", {
      scrollTrigger: { trigger: ".svc-list", start: "top 70%" },
      x: -20, stagger: .07, duration: .7, ease: "power3.out",
    });
    gsap.from(".svc-panel", {
      scrollTrigger: { trigger: ".svc-panel", start: "top 75%" },
      x: 24, duration: .9, ease: "power3.out",
    });
  }, []);

  const switchService = (i: number) => {
    if (i === active) return;
    if (imgRef.current) {
      gsap.to(imgRef.current, {
        opacity: 0, scale: 1.04, duration: .22, ease: "power2.in",
        onComplete: () => {
          setActive(i);
          gsap.fromTo(imgRef.current,
            { opacity: 0, scale: 1.04 },
            { opacity: 1, scale: 1, duration: .4, ease: "power2.out" }
          );
        },
      });
    } else {
      setActive(i);
    }
  };

  // Mobile: toggle open (click same = close, click other = open new)
  const [mobileOpen, setMobileOpen] = useState<number | null>(null);
  const toggleMobile = (i: number) => {
    setMobileOpen(prev => (prev === i ? null : i));
  };

  const s = SERVICES[active];

  return (
    <section id="servicios" ref={scope} className="relative bg-noir py-24 lg:py-32 overflow-hidden">

      <SparkEffect
        amount={70}
        speed={0.18}
        lifetime={200}
        direction={{ x: 0.1, y: -1 }}
        size={[1.5, 1.5]}
        maxopacity={0.55}
        color="201, 168, 76"
        randColor={false}
        acceleration={[3, 14]}
      />

      <div className="shell relative z-10">

        {/* Section header */}
        <div className="svc-header mb-14 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-gold/50 shrink-0" />
              <span className="font-serif italic text-xl text-gold tracking-wide">Servicios</span>
            </div>
            <h2 className="font-serif text-4xl italic text-cream sm:text-5xl lg:text-[3.5rem] leading-tight">
              Todo lo que<br />tu belleza merece.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-cream/40 lg:text-right">
            Selecciona un servicio para conocer todos los detalles.
          </p>
        </div>

        {/* ── MOBILE accordion list (hidden on lg) ── */}
        <div className="svc-list lg:hidden divide-y divide-cream/8">
          {SERVICES.map((svc, i) => {
            const isOpen = mobileOpen === i;
            return (
              <div key={svc.num} className="svc-row">
                {/* Row header — tap to toggle */}
                <button
                  onClick={() => toggleMobile(i)}
                  className="flex w-full items-center gap-4 py-4 px-1 text-left outline-none"
                >
                  <span className="font-mono text-[10px] text-cream/30 w-5 shrink-0">{svc.num}</span>

                  <div className="flex-1 min-w-0">
                    <p className={`text-[15px] font-semibold leading-snug transition-colors duration-200 ${isOpen ? "text-cream" : "text-cream/65"}`}>
                      {svc.title}
                    </p>
                    {!isOpen && (
                      <p className="mt-0.5 text-xs text-cream/30">{svc.short}</p>
                    )}
                  </div>

                  {/* Category chip */}
                  <span className="shrink-0 font-mono text-[9px] uppercase tracking-widest text-gold/50 hidden sm:block">
                    {svc.category}
                  </span>

                  {/* Chevron */}
                  <span className={`shrink-0 text-gold transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 5L7 9.5L11.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>

                {/* Expandable image + info */}
                <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <div className="pb-5">
                      {/* Image */}
                      <div className="relative rounded-xl overflow-hidden aspect-[16/9] mb-4">
                        <img
                          src={svc.image}
                          alt={svc.title}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-noir/60 via-transparent to-transparent" />
                        <span className="absolute top-3 left-3 label rounded-full border border-gold/30 bg-noir/60 px-3 py-1 backdrop-blur-sm">
                          {svc.category}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-sm leading-7 text-cream/50 mb-4">{svc.desc}</p>

                      {/* CTA */}
                      <a href="#cita" className="gold-btn text-xs px-5 py-2.5 inline-flex">
                        Agendar <ArrowRight size={13} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── DESKTOP split panel (hidden on mobile) ── */}
        <div className="hidden lg:grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-stretch">

          {/* Left — service list */}
          <div className="divide-y divide-cream/6 lg:overflow-y-auto lg:max-h-[580px] lg:pr-2">
            {SERVICES.map((svc, i) => (
              <button
                key={svc.num}
                onClick={() => switchService(i)}
                className={`svc-row group w-full text-left py-5 px-1 flex items-start gap-5 transition-all duration-300 outline-none ${
                  active === i ? "opacity-100" : "opacity-40 hover:opacity-70"
                }`}
              >
                <span className={`mt-1.5 h-4 w-px shrink-0 rounded-full transition-all duration-300 ${
                  active === i ? "bg-gold scale-y-100" : "bg-cream/20 scale-y-0"
                }`} />
                <span className="font-mono text-[10px] text-cream/30 pt-0.5 w-5 shrink-0">{svc.num}</span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-gold/50 pt-0.5 w-16 shrink-0">
                  {svc.category}
                </span>
                <div className="flex-1 min-w-0">
                  <p className={`text-base font-semibold leading-snug transition-colors duration-200 ${
                    active === i ? "text-cream" : "text-cream/70 group-hover:text-cream"
                  }`}>
                    {svc.title}
                  </p>
                  <p className="mt-1 text-xs text-cream/35 leading-5">{svc.short}</p>
                </div>
                <span className={`mt-1 font-mono text-[10px] text-gold transition-all duration-200 shrink-0 ${
                  active === i ? "opacity-100" : "opacity-0 group-hover:opacity-40"
                }`}>→</span>
              </button>
            ))}
          </div>

          {/* Right — detail panel */}
          <div className="svc-panel relative overflow-hidden rounded-2xl bg-surface">
            <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:h-72">
              <img
                ref={imgRef}
                src={s.image}
                alt={s.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
              <span className="absolute top-4 left-4 label rounded-full border border-gold/30 bg-noir/60 px-3 py-1.5 backdrop-blur-sm">
                {s.category}
              </span>
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] text-cream/30">{s.num}</p>
                  <h3 className="mt-1 font-serif text-2xl italic text-cream sm:text-3xl">{s.title}</h3>
                </div>
                <a href="#cita" className="shrink-0 gold-btn mt-2 text-xs px-5 py-2.5">
                  Agendar <ArrowRight size={13} />
                </a>
              </div>
              <p className="mt-4 text-sm leading-7 text-cream/50">{s.desc}</p>
              <div className="mt-6 flex gap-1.5">
                {SERVICES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => switchService(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === active ? "w-6 h-1 bg-gold" : "w-1.5 h-1 bg-cream/20 hover:bg-cream/40"
                    }`}
                    aria-label={`Servicio ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
