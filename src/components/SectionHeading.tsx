export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 font-serif text-3xl text-ink sm:text-4xl">{title}</h2>
      {description && <p className="mt-3 text-ink/70">{description}</p>}
    </div>
  );
}
