/**
 * SITE CONTENT
 * Edit this file to change name, email, showreel, services, and contact links.
 *
 * SHOWREEL
 * 1. Save the hero video as public/showreel/showreel.mp4
 * 2. Optional still: public/showreel/poster.jpg
 * 3. Set the paths below. Leave them as "" to keep the cinematic frame.
 *
 * CONTACT LINKS
 * Email is shown on the site.
 * Other channels stay hidden until `href` is a real URL (https://... or mailto:...).
 * Do not add a guessed or old portfolio URL.
 */

export const profile = {
  name: "Paul Symon Vergara",
  fullName: "Paul Symon Osma Vergara",
  title: "AI Video Editor & AI Creative Specialist",
  location: "Philippines",
  locationLine: "Based in the Philippines • Available Worldwide",
  availability: "Available for Freelance & Ongoing Projects",
  footerAvailability:
    "Available for freelance, contract, agency, ecommerce and ongoing projects.",
  email: "paulsymonv@gmail.com",
  eyebrow: "AI Video • Ecommerce • UGC • Short-Form",
  heroDescription:
    "I create realistic AI-generated videos, ecommerce ads, UGC creatives, product commercials, and high-retention short-form content for brands and businesses.",
  metaDescription:
    "Paul Symon Vergara is an AI Video Editor and AI Creative Specialist creating realistic AI videos, ecommerce advertisements, UGC creatives, product commercials and high-retention short-form content.",
  showreel: {
    video: "",
    poster: "",
  },
};

export const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Tools", href: "/#tools" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;

export const services = [
  {
    title: "AI Video Generation",
    description:
      "Realistic AI actors, products, environments, B-roll, and cinematic scenes for advertising and social media.",
  },
  {
    title: "Ecommerce Ads",
    description:
      "UGC ads, product demonstrations, and direct-response short-form content for Meta, TikTok, and ecommerce.",
  },
  {
    title: "AI UGC",
    description:
      "Realistic AI creators and presenters for product marketing, UGC-style ads, and brand content.",
  },
  {
    title: "Video Editing",
    description:
      "Hooks, captions, pacing, transitions, B-roll, music, and professional sound design.",
  },
  {
    title: "Product Visualization",
    description:
      "AI product shots, packaging, lifestyle environments, and cinematic commercial scenes.",
  },
  {
    title: "Talking-Head / Avatar Content",
    description:
      "Talking-head and avatar edits with AI B-roll, captions, hooks, and performance-ad pacing.",
  },
] as const;

export const primaryTools = [
  "Google Veo",
  "Google Flow",
  "Higgsfield",
  "Kling AI",
  "Seedance",
  "Runway",
  "CapCut",
  "ChatGPT",
] as const;

export const supportingTools = [
  "Nano Banana",
  "Omni Flash",
  "Hailuo / MiniMax",
  "HeyGen",
  "ElevenLabs",
  "Premiere Pro",
] as const;

export const toolsNote =
  "I combine modern AI generation tools with professional video editing workflows to create realistic, polished and production-ready content.";

export const aboutHeading = "AI Video Production Built for Real Brand Work";

export const aboutParagraphs = [
  "I'm Paul Symon Vergara, an AI Video Editor and AI Creative Specialist based in the Philippines, working with clients worldwide. I combine modern AI generation with professional editing to create realistic UGC, ecommerce ads, product commercials, AI presenters, and high-retention short-form videos.",
] as const;

export const skills = [
  "Realistic AI Video",
  "Ecommerce Advertising",
  "AI UGC",
  "Product Consistency",
  "Character Consistency",
  "Short-Form Editing",
  "Prompt Engineering",
  "Creative Direction",
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Brief",
    description: "Review scripts, references, product assets and creative direction.",
  },
  {
    number: "02",
    title: "Generate",
    description:
      "Create realistic AI characters, products, scenes, B-roll and visual assets.",
  },
  {
    number: "03",
    title: "Edit",
    description:
      "Build the final creative with hooks, pacing, captions, transitions and sound design.",
  },
  {
    number: "04",
    title: "Deliver",
    description: "Export platform-ready content and refine based on feedback.",
  },
] as const;

export type ContactLink = {
  label: string;
  detail: string;
  href: string;
};

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    detail: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: "LinkedIn",
    detail: "",
    href: "",
  },
  {
    label: "OnlineJobs.ph",
    detail: "",
    href: "",
  },
  {
    label: "Upwork",
    detail: "",
    href: "",
  },
  {
    label: "Instagram",
    detail: "",
    href: "",
  },
];

export function publicContactLinks() {
  return contactLinks.filter((link) => {
    const href = link.href.trim();
    return href.startsWith("mailto:") || href.startsWith("http://") || href.startsWith("https://");
  });
}
