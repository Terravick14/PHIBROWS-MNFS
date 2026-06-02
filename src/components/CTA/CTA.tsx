import { ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "../../hooks/useGSAP";
import { whatsappUrl } from "../../utils/booking";

export default function CTA() {
  const scope = useRef<HTMLElement>(null);
  useGSAP(scope, () => {
    gsap.from(".cta-item", {
      scrollTrigger: { trigger: scope.current, start: "top 78%" },
      y: 30,
      
      stagger: .12,
      duration: .8,
      ease: "power3.out",
    });
    gsap.to(".cta-orb", { scale: 1.2, opacity: .7, duration: 3.5, yoyo: true, repeat: -1, ease: "sine.inOut" });
  }, []);

  return (
    <section ref={scope} className="px-5 py-20">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-flower border border-gold/20 bg-surface px-6 py-16 shadow-bloom sm:px-10 lg:px-16">
        {/* Orbs */}
        <div className="cta-orb pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-gold/8 blur-[80px]" />
        <div className="cta-orb pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-nude/6 blur-[80px]" />

        {/* Gold top line */}
        <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="cta-item inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/10 px-4 py-2 font-mono text-xs font-bold uppercase text-gold">
            <Sparkles size={14} />
            Tu transformación comienza hoy
          </p>
          <h2 className="cta-item mt-6 text-4xl font-black leading-tight text-cream sm:text-5xl lg:text-6xl">
            Es momento de enamorarte
            <span className="block font-serif italic text-gold">de tus cejas.</span>
          </h2>
          <p className="cta-item mx-auto mt-5 max-w-xl text-base leading-8 text-cream/60">
            Agenda tu valoración gratuita y descubre el diseño ideal para tu rostro. Sin compromiso, solo belleza.
          </p>

          <div className="cta-item mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#cita" className="gold-button px-8 py-4 text-base">
              Agendar cita ahora <ArrowRight size={18} />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ghost-button px-8 py-4 text-base"
            >
              Preguntar por WhatsApp
            </a>
          </div>

          {/* Social proof */}
          <div className="cta-item mt-10 flex items-center justify-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((item) => (
                <img
                  key={item}
                  src={`https://i.pravatar.cc/96?img=${item + 28}`}
                  alt="Clienta feliz"
                  className="size-10 rounded-full border-2 border-surface object-cover"
                />
              ))}
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-cream">+500 clientas felices</p>
              <p className="text-xs text-cream/45">Huatabampo y toda la región</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
