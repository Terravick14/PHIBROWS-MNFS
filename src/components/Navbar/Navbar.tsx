import { useEffect, useRef, useState } from "react";
import { X, Menu } from "lucide-react"; // v2
import { whatsappUrl } from "../../utils/booking";

const NAV = [
  ["Servicios",  "#servicios"],
  ["Resultados", "#resultados"],
  ["Preguntas",  "#preguntas"],
  ["Agendar",    "#cita"],
  ["Contacto",   "#contacto"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        ref={ref}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open ? "bg-noir/95 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="shell flex h-20 items-center justify-between sm:h-24">
          {/* Logo */}
          <a href="#inicio" className="flex items-center" onClick={() => setOpen(false)}>
            <img
              src="https://res.cloudinary.com/dddjqjtbk/image/upload/v1780354751/ChatGPT_Image_1_jun_2026_15_23_50_snfuyw.png"
              alt="MNFS - PhiBrows by Socorro Cota Artist"
              className="h-20 w-auto max-w-[220px] object-contain sm:h-24"
              style={{ filter: "drop-shadow(0 0 14px rgba(201,168,76,0.4))" }}
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map(([label, href]) => (
              <a key={href} href={href} className="text-[13px] font-semibold text-cream/50 transition hover:text-cream">
                {label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="gold-btn text-[13px]">
              Reservar cita
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className="relative z-50 grid size-10 place-items-center text-cream/70 lg:hidden transition-colors hover:text-cream"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${open ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}`}>
              <X size={20} />
            </span>
            <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${open ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"}`}>
              <Menu size={20} />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile overlay menu — full screen with strong backdrop */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Dark backdrop */}
        <div className="absolute inset-0 bg-noir/92 backdrop-blur-2xl" />

        {/* Menu content */}
        <div className="relative z-10 flex h-full flex-col justify-center px-8">

          {/* Brand */}
          <div className="mb-14">
            <p className="font-serif italic text-2xl text-gold leading-tight">MNFS - PhiBrows</p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-cream/30 mt-1">by Socorro Cota · Artist</p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-2">
            {NAV.map(([label, href], i) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="group flex items-center gap-4 py-4 border-b border-cream/6 last:border-0 transition-all duration-200"
                style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
              >
                <span className="font-mono text-[10px] text-gold/40 w-4">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-serif italic text-3xl text-cream/80 group-hover:text-cream transition-colors duration-200">
                  {label}
                </span>
                <span className="ml-auto text-gold/30 group-hover:text-gold transition-colors duration-200">→</span>
              </a>
            ))}
          </nav>

          {/* WhatsApp CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-btn mt-12 w-full justify-center"
            onClick={() => setOpen(false)}
          >
            Reservar cita por WhatsApp
          </a>

          {/* Bottom info */}
          <p className="mt-8 font-mono text-[10px] text-cream/20 text-center">
            Huatabampo, Sonora · +52 1 647 110 2048
          </p>
        </div>
      </div>
    </>
  );
}
