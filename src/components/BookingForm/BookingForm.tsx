import { ArrowRight, Check } from "lucide-react";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "../../hooks/useGSAP";
import { buildBookingMessage } from "../../utils/booking";

const SERVICES = [
  "Microblading",
  "Microshading / Sombreado",
  "Ceja Compacta",
  "Delineado de ojos / Punteo de pestañas",
  "Micropigmentación de labios",
  "Alaciado / Queratina orgánica",
  "Depilación hindú / Uñas",
  "Curso personalizado",
  "No sé — quiero asesoría gratuita",
];

const TIMES = [
  "Mañana · 9:00am–12:00pm (L–V)",
  "Tarde · 2:00pm–7:00pm (L–V)",
  "Sábado · 10:00am–6:00pm",
  "Sin preferencia",
];

type F = { name: string; phone: string; service: string; date: string; time: string; notes: string };
const EMPTY: F = { name: "", phone: "", service: "", date: "", time: "", notes: "" };

export default function BookingForm() {
  const scope = useRef<HTMLElement>(null);
  const [form, setForm] = useState<F>(EMPTY);
  const [sent, setSent] = useState(false);

  useGSAP(scope, () => {
    gsap.from(".bf-item", {
      immediateRender: false,
      scrollTrigger: { trigger: scope.current, start: "top 72%" },
      
      y: 28,
      stagger: .1,
      duration: .9,
      ease: "power3.out",
    });
  }, []);

  const set = (k: keyof F) => (e: { target: { value: string } }) =>
    setForm(p => ({ ...p, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(buildBookingMessage({
      name: form.name, phone: form.phone,
      service: form.service || "Sin especificar",
      date: form.date || "Flexible",
      time: form.time || "Sin preferencia",
      notes: form.notes,
    }), "_blank", "noopener,noreferrer");
    setSent(true);
    setTimeout(() => { setSent(false); setForm(EMPTY); }, 6000);
  };

  return (
    <section id="cita" ref={scope} className="relative overflow-hidden bg-surface py-28 lg:py-36">

      {/* Background image */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src="https://res.cloudinary.com/dddjqjtbk/image/upload/v1780360634/ChatGPT_Image_1_jun_2026_17_37_00_c6dk32.png"
          alt=""
          className="h-full w-full object-cover object-center"
          style={{ opacity: 0.12 }}
        />
        <div className="absolute inset-0 bg-surface/75" />
      </div>

      <div className="shell relative z-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24 lg:items-start">

          {/* Left */}
          <div className="bf-item">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-gold/50 shrink-0" />
              <span className="font-serif italic text-xl text-gold tracking-wide">Agenda tu cita</span>
            </div>
            <h2 className="font-serif text-4xl italic leading-tight text-cream sm:text-5xl lg:text-6xl">
              Tu cita perfecta,<br />a un mensaje.
            </h2>
            <p className="mt-6 text-sm leading-8 text-cream/45">
              Completa el formulario y te contactamos por WhatsApp para confirmar fecha y horario. Sin complicaciones.
            </p>

            {/* Info */}
            <div className="mt-10 divide-y divide-cream/6 text-sm">
              {[
                ["Dirección", "Calle Guerrero #21 esq. Hidalgo, Centro, Huatabampo, Son."],
                ["Lunes – Viernes", "9:00am–12:00pm · 2:00pm–7:00pm"],
                ["Sábado", "10:00am–6:00pm"],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-col gap-0.5 py-4 sm:flex-row sm:gap-8">
                  <span className="w-32 shrink-0 font-semibold text-cream/40">{k}</span>
                  <span className="text-cream/70">{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="bf-item">
            <form onSubmit={submit} className="grid gap-5">
              {/* Name + Phone */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block label">Nombre *</label>
                  <input required value={form.name} onChange={set("name")} placeholder="Tu nombre" className="field" />
                </div>
                <div>
                  <label className="mb-2 block label">WhatsApp *</label>
                  <input required type="tel" value={form.phone} onChange={set("phone")} placeholder="647 123 4567" className="field" />
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="mb-2 block label">Servicio *</label>
                <select required value={form.service} onChange={set("service")} className="field appearance-none cursor-pointer">
                  <option value="" disabled>Selecciona un servicio</option>
                  {SERVICES.map(s => <option key={s} value={s} className="bg-elevated text-cream">{s}</option>)}
                </select>
              </div>

              {/* Date + Time */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block label">Fecha preferida</label>
                  <input
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    value={form.date}
                    onChange={set("date")}
                    className="field"
                    style={{ colorScheme: "dark" }}
                  />
                </div>
                <div>
                  <label className="mb-2 block label">Horario</label>
                  <select value={form.time} onChange={set("time")} className="field appearance-none cursor-pointer">
                    <option value="" className="bg-elevated">Sin preferencia</option>
                    {TIMES.map(t => <option key={t} value={t} className="bg-elevated text-cream">{t}</option>)}
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="mb-2 block label">Comentarios</label>
                <textarea rows={3} value={form.notes} onChange={set("notes")} placeholder="¿Algo que quieras comentar?" className="field resize-none" />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={sent}
                className="gold-btn mt-2 justify-center py-4 text-sm disabled:opacity-60"
              >
                {sent
                  ? <><Check size={16} /> Enviado — revisa tu WhatsApp</>
                  : <>Enviar por WhatsApp <ArrowRight size={16} /></>
                }
              </button>

              <p className="text-center font-mono text-[10px] text-cream/25">
                Al enviar se abrirá WhatsApp con tu solicitud precargada.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
