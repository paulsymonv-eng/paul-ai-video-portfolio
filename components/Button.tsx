import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

const variants = {
  primary:
    "bg-violet-600 text-white shadow-[0_10px_40px_-16px_rgba(139,92,246,0.95)] hover:bg-violet-500",
  secondary:
    "border border-white/15 bg-white/[0.04] text-white hover:border-white/30 hover:bg-white/[0.08]",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition duration-200 ${variants[variant]} ${className}`;

  if (href.startsWith("mailto:") || href.startsWith("http")) {
    const external = href.startsWith("http");

    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
