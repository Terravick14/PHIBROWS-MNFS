import { CalendarCheck, HeartHandshake, SlidersHorizontal } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { testimonials } from "../../data/testimonials";
import { useGSAP } from "../../hooks/useGSAP";

export default function Features() {
  const scope = useRef<HTMLElement>(null);
  const [slide, setSlide] = useState(52);
  const [quote, setQuote] = useState(0);

  useGSAP(scope, () => {
    gsap.from(".feature-card", {
      scrollTrigger: { trigger: scope.current, start: "top 75%" },
      y: 35,
      
      stagger: .15,
      duration: .85,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => setQuote((v) => (v + 1) % testimonials.length), 3200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section ref={scope} className="bg-noir py-20">
      <div className="section-shell grid gap-5 lg:grid-cols-3">

        {/* Before / After */}
        <div className="feature-card dark-card p-6">
          <SlidersHorizontal size={20} className="text-gold" />
          <h3 className="mt-4 text-xl font-extrabold text-cream">Antes / Después</h3>
          <div className="relative mt-5 aspect-[4/5] overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80"
              alt="Antes cejas"
              className="h-full w-full object-cover grayscale"
            />
            <div className="absolute inset-y-0 right-0 overflow-hidden" style={{ width: `${100 - slide}%` }}>
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80"
                alt="Después cejas"
                className="absolute right-0 top-0 h-full object-cover"
                style={{ width: `${100 / (1 - slide / 100)}%`, maxWidth: "none" }}
              />
            </div>
            <div className="absolute inset-y-0" style={{ left: `${slide}%`, transform: "translateX(-50%)" }}>
              <div className="h-full w-px bg-gold/60" />
              <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 grid size-6 place-items-center rounded-full bg-gold text-noir text-xs font-black">⟺</div>
            </div>
            <input
              aria-label="Comparador antes después"
              className="absolute inset-x-0 bottom-0 h-full w-full cursor-ew-resize opacity-0"
              type="range"
              min="18"
              max="82"
              value={slide}
              onChange={(e) => setSlide(Number(e.target.value))}
            />
          </div>
        </div>

        {/* Testimonial carousel */}
        <div className="feature-card dark-card p-6">
          <HeartHandshake size={20} className="text-gold" />
          <h3 className="mt-4 text-xl font-extrabold text-cream">Lo que dicen ellas</h3>
          <div className="mt-5 min-h-64 rounded-2xl border border-gold/10 bg-elevated p-6">
            <p className="font-serif text-2xl italic leading-tight text-gold">
              "{testimonials[quote].text}"
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="grid size-8 place-items-center rounded-full bg-gold/15 font-mono text-xs font-bold text-gold">
                {testimonials[quote].name[0]}
              </div>
              <div>
                <p className="text-sm font-bold text-cream">{testimonials[quote].name}</p>
                <p className="font-mono text-xs text-gold/60">{testimonials[quote].result}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Calendar steps */}
        <div className="feature-card dark-card p-6">
          <CalendarCheck size={20} className="text-gold" />
          <h3 className="mt-4 text-xl font-extrabold text-cream">¿Cómo agendar?</h3>
          <div className="mt-5 grid gap-3">
            {["Llena el formulario", "Confirmamos por WhatsApp", "¡Tu cita lista!"].map((step, index) => (
              <div key={step} className="rounded-xl border border-gold/12 bg-elevated p-4">
                <p className="font-mono text-xs font-black text-gold">0{index + 1}</p>
                <p className="mt-1 text-base font-extrabold text-cream">{step}</p>
              </div>
            ))}
            <a
              href="#cita"
              className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-gold py-3 text-sm font-bold text-noir transition hover:bg-gold-light"
            >
              Agendar ahora →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
