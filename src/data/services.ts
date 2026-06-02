export type Service = {
  title: string;
  benefit: string;
  duration: string;
  image: string;
  category: string;
  emoji: string;
};

export const services: Service[] = [
  {
    title: "Microblading",
    benefit: "Trazos finos pelo a pelo con acabado 100% natural. Técnica certificada PhiBrows.",
    duration: "2-3 hrs",
    category: "Cejas",
    emoji: "✦",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Microshading & Sombreado",
    benefit: "Efecto sombra suave y definida. Ideal para pieles grasas o maduras.",
    duration: "2-3 hrs",
    category: "Cejas",
    emoji: "✦",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Ceja Compacta",
    benefit: "Combinación de pelo a pelo y sombra para cejas con mayor densidad y volumen.",
    duration: "2.5-3 hrs",
    category: "Cejas",
    emoji: "✦",
    image: "https://images.unsplash.com/photo-1564594219593-fdc61ae42f14?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Delineado de Ojos & Punteo de Pestañas",
    benefit: "Mirada más intensa y definida sin maquillaje diario.",
    duration: "1.5-2 hrs",
    category: "Ojos",
    emoji: "◆",
    image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Micropigmentación de Labios",
    benefit: "Color natural y definición permanente. Labios perfectos las 24 horas.",
    duration: "2-3 hrs",
    category: "Labios",
    emoji: "◆",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Alaciado & Queratina Orgánica",
    benefit: "100% libre de formol. Cabello sedoso, sin frizz, con tratamiento nutritivo profundo.",
    duration: "2-4 hrs",
    category: "Cabello",
    emoji: "◇",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Depilación Hindú & Uñas",
    benefit: "Depilación con hilo sin químicos. Uñas artificiales con diseño personalizado.",
    duration: "30-90 min",
    category: "Beauty",
    emoji: "◇",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Cursos Personalizados",
    benefit: "Aprende microblading, micropigmentación y más con una artista certificada PhiBrows.",
    duration: "A convenir",
    category: "Educación",
    emoji: "★",
    image: "https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=900&q=80",
  },
];

export const gallery = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  category: ["Microblading", "Micropigmentación", "Sombreado", "Labios"][index % 4],
  image: [
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
  ][index % 4],
}));
