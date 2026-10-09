import { services } from "@/data/site";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

const serviceIcons: Record<string, React.ReactNode> = {
  "AI Video Generation": <path d="M4 7h16v10H4zM8 7l1.5-3h5L16 7" />,
  "Ecommerce Ads": <path d="M6 8h12l-1 11H7L6 8zM9 8V6a3 3 0 0 1 6 0v2" />,
  "AI UGC": (
    <path d="M12 12a3.2 3.2 0 1 0 0-6.4A3.2 3.2 0 0 0 12 12zM6.5 19c.8-3 2.8-4.5 5.5-4.5S16.7 16 17.5 19" />
  ),
  "Video Editing": <path d="M5 7h14M5 12h10M5 17h14" />,
  "Product Visualization": <path d="M5 6h14v12H5zM8 15l2.5-3 2 2.2L15 11l3 4" />,
  "Talking-Head / Avatar Content": <path d="M9 7.5v9l8-4.5-8-4.5z" />,
};

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-12 sm:py-14">
      <Container>
        <SectionHeading
          title="Services"
          subtitle="From AI generation to finished ads, built for brands that need polished, publish-ready creative."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="flex h-full flex-col rounded-[20px] border border-white/10 bg-[#121218] p-5 transition duration-200 hover:border-violet-300/40"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="font-display text-sm font-semibold tracking-[0.14em] text-violet-300">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <ServiceIcon>{serviceIcons[service.title]}</ServiceIcon>
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-zinc-300">{service.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ServiceIcon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 text-zinc-300"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}
