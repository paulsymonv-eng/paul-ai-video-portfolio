type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <h2 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-base leading-relaxed text-zinc-300">{subtitle}</p>
      ) : null}
    </div>
  );
}
