interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="uppercase tracking-[0.2em] text-sm text-[var(--accent)]">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-4 text-4xl font-semibold text-slate-900">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-slate-600 leading-7">
          {description}
        </p>
      )}
    </div>
  );
}