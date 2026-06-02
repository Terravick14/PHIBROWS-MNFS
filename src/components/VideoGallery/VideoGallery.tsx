import { Play } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "../../hooks/useGSAP";
import SectionHeader from "../../layouts/SectionHeader";

const reels = ["Diseño previo", "El procedimiento", "Resultado final", "Retoque premium"];
const photos = [
  "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=80",
];

export default function VideoGallery() {
  const scope = useRef<HTMLElement>(null);
  useGSAP(scope, () => {
    gsap.from(".video-phone", {
      scrollTrigger: { trigger: scope.current, start: "top 76%" },
      x: 50,
      
      stagger: .15,
      duration: .9,
      ease: "power3.out",
    });
  }, []);

  return (
    <section ref={scope} className="bg-noir py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Proceso en video"
          title="Mira cómo transformamos tus cejas"
          subtitle="Desde el diseño hasta el resultado final. Cada paso con precisión y cuidado."
        />
        <div className="mt-12 flex gap-5 overflow-x-auto pb-6 [scroll-snap-type:x_mandatory]">
          {reels.map((reel, index) => (
            <article
              key={reel}
              className="video-phone min-w-[240px] scroll-ml-5 overflow-hidden rounded-[2.3rem] border-[8px] border-surface bg-surface shadow-[0_24px_60px_rgba(201,168,76,.12)] [scroll-snap-align:start] sm:min-w-[290px]"
            >
              <div className="relative aspect-[9/16] overflow-hidden rounded-[1.7rem]">
                <img src={photos[index]} alt={reel} className="h-full w-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/70 to-transparent" />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="grid size-16 place-items-center rounded-full border-2 border-gold/50 bg-noir/60 text-gold backdrop-blur-xl transition hover:bg-gold hover:text-noir">
                    <Play size={22} fill="currentColor" />
                  </span>
                </div>
                <p className="absolute bottom-4 left-4 right-4 rounded-xl border border-gold/20 bg-noir/75 p-3 text-sm font-bold text-cream backdrop-blur-xl">
                  {reel}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-4 text-center">
          <a href="#cita" className="ghost-button">
            Agendar mi cita →
          </a>
        </div>
      </div>
    </section>
  );
}
