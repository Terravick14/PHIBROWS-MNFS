const PHONE = "5216471102048";

export const whatsappUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent("Hola, me gustaría agendar una cita en APhiBrows 🌟")}`;

export function buildBookingMessage(data: {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes?: string;
}) {
  const lines = [
    "Hola! Me gustaría agendar una cita en APhiBrows 🌟",
    "",
    `*Nombre:* ${data.name}`,
    `*Teléfono:* ${data.phone}`,
    `*Servicio:* ${data.service}`,
    `*Fecha preferida:* ${data.date}`,
    `*Horario:* ${data.time}`,
  ];
  if (data.notes?.trim()) lines.push(`*Notas:* ${data.notes.trim()}`);
  lines.push("", "¡Espero su confirmación! 😊");
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}
