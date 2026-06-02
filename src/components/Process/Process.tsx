import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "../../hooks/useGSAP";
import SectionHeader from "../../layouts/SectionHeader";

const steps = [
  { title: "Valoración gratuita", desc: "Analizamos tu rostro, tipo de piel y estilo para encontrar la técnica ideal para ti." },
  { title: "Diseño y aprobación", desc: "Diseñamos la forma perfecta de tus cejas antes de comenzar. Tú apruebas cada detalle." },
  { title: "Aplicación profesional", desc: "Con técnica certificada PhiBrows, aplicamos el pigmento con precisión y cuidado." },
  { title: "Resultado y seguimiento", desc: "Te damos instrucciones de cuidado y agendamos tu retoque para el resultado perfecto." },
];

export default function Process() {
  const scope = useRef<HTMLElement>(null);
  useGSAP(scope, () => {
    gsap.fromTo(".timeline-line",
      { scaleX: 0 },
      { scrollTrigger: { trigger: ".timeline-wrap", start: "top 72%" }, scaleX: 1, duration: 1.2, ease: "power2.inOut", transformOrigin: "left" }
    );
    gsap.from(".process-node", {
      scrollTrigger: { trigger: ".timeline-wrap", start: "top 72%" },
      y: 30,
      
      stagger: .18,
      duration: .85,
      ease: "power3.out",
    });
  }, []);

  return (
    <section ref={scope} className="bg-noir py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Proceso"
          title="Tu camino hacia cejas perfectas"
          subtitle="Cada etapa está diseñada para que te sientas segura, informada y emocionada con tu transformación."
        />
        <div className="timeline-wrap relative mt-16 grid gap-5 lg:grid-cols-4">
          {/* Gold connecting line */}
          <div className="timeline-line absolute left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] top-9 hidden h-px bg-gradient-to-r from-gold/20 via-gold/60 to-gold/20 lg:block" />

          {steps.map((step, index) => (
            <article key={step.title} className="process-node relative rounded-2xl border border-gold/12 bg-surface p-6 shadow-silk">
              {/* Number node */}
              <div className="relative mb-6 grid size-16 place-items-center rounded-full border-2 border-gold/30 bg-gold/10">
                <span className="font-mono text-lg font-black text-gold">0{index + 1}</span>
              </div>
              <h3 className="text-lg font-extrabold text-cream">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-cream/55">{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
