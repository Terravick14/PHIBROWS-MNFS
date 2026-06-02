type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  align?: "left" | "center";
};

export default function SectionHeader({ eyebrow, title, subtitle, align = "center" }: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-cream/55 sm:text-lg">{subtitle}</p>
    </div>
  );
}
