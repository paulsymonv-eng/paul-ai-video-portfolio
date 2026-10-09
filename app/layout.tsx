import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { profile, services } from "@/data/site";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const title = "Paul Symon Vergara | AI Video Editor & AI Creative Specialist";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: title,
    template: "%s | Paul Symon Vergara",
  },
  description: profile.metaDescription,
  keywords: [
    "AI video editor",
    "AI creative specialist",
    "AI video generation",
    "ecommerce ads",
    "UGC creatives",
    "product commercials",
    "short-form content",
    "freelance video editor",
  ],
  openGraph: {
    title,
    description: profile.metaDescription,
    type: "website",
    locale: "en_US",
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.metaDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: profile.name,
    description: profile.metaDescription,
    email: profile.email,
    url: getSiteUrl(),
    address: {
      "@type": "PostalAddress",
      addressCountry: "Philippines",
    },
    areaServed: "Worldwide",
    serviceType: services.map((service) => service.title),
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-black"
        >
          Skip to content
        </a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
