import { whatsappUrl } from "../../utils/booking";

export default function Footer() {
  return (
    <footer className="border-t border-cream/5 bg-noir py-16">
      <div className="shell">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">

          {/* Brand */}
          <div>
            <p className="font-serif text-xl italic text-gold">MNFS - PhiBrows</p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-cream/30">by Socorro Cota · Artist</p>
            <p className="mt-4 max-w-xs text-xs leading-6 text-cream/35">
              Micropigmentación certificada PhiBrows en Huatabampo, Sonora.<br />
              +52 1 647 110 2048
            </p>
          </div>

          {/* Links */}
          <nav className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm">
            {[
              ["Servicios", "#servicios"],
              ["Resultados", "#resultados"],
              ["Preguntas", "#preguntas"],
              ["Agendar cita", "#cita"],
              ["Contacto", "#contacto"],
              ["WhatsApp", whatsappUrl],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-cream/40 transition hover:text-cream"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-2 border-t border-cream/5 pt-6 sm:flex-row sm:justify-between">
          <p className="font-mono text-[10px] text-cream/25">
            © {new Date().getFullYear()} APhiBrows by Socorro Cota · Todos los derechos reservados.
          </p>
          <p className="font-mono text-[10px] text-cream/20">Huatabampo, Sonora, México</p>
        </div>
      </div>
    </footer>
  );
}
