/**
 * FEATURED WORK
 * Order in this list is the order on the site.
 *
 * ADD MEDIA
 * Each project has a folder in public/projects/<slug>/.
 *
 *   poster.jpg or poster.webp — thumbnail
 *   video.mp4                 — project video
 *
 * Then set the public path (leading slash, no "public"):
 *
 *   poster: "/projects/walking-pad-ecommerce-ad/poster.jpg",
 *   video: "/projects/walking-pad-ecommerce-ad/video.mp4",
 *   posterSrc and videoSrc accept the same public paths.
 *   Leave both empty when the file is not in the project yet.
 *
 * Leave poster and video as "" to keep the cinematic placeholder.
 * Use poster.webp instead of poster.jpg if that is the file you export.
 *
 * Recommended exports:
 *   Thumbnail: 1600px wide JPG or WebP
 *   Video: H.264 MP4, 1080p, AAC audio, ideally under 20MB
 *   aspect "9/16" for vertical ads, "16/9" for landscape commercials
 */

export type AspectRatio = "16/9" | "9/16";

export type Orientation = "vertical" | "landscape";

export type WorkFilter =
  | "AI Video"
  | "Ecommerce"
  | "AI UGC"
  | "Product Ads"
  | "AI Avatar";

export const workFilters = [
  "All",
  "AI Video",
  "Ecommerce",
  "AI UGC",
  "Product Ads",
  "AI Avatar",
] as const;

export type WorkFilterOption = (typeof workFilters)[number];

export type Project = {
  slug: string;
  title: string;
  description: string;
  /** Short homepage card copy. The full description stays on the project page. */
  summary: string;
  fullDescription?: string;
  category: string;
  aspect: AspectRatio;
  aspectRatio?: AspectRatio;
  orientation?: Orientation;
  poster: string;
  video: string;
  posterSrc?: string;
  videoSrc?: string;
  featured?: boolean;
  filters?: WorkFilter[];
  handled: string[];
  skills: string;
  /** Compact homepage chips. The full skills line stays on the project page. */
  chips: string[];
  tools?: string[];
  /** Distinct case-study points. Omit when they would repeat the description. */
  approach?: string[];
};

export function projectVideo(project: Project) {
  return (project.videoSrc || project.video || "").trim();
}

export function projectPoster(project: Project) {
  return (project.posterSrc || project.poster || "").trim();
}

export function isVerticalProject(project: Project) {
  if (project.orientation) return project.orientation === "vertical";
  return (project.aspectRatio ?? project.aspect) !== "16/9";
}

export const projects: Project[] = [
  {
    slug: "walking-pad-ecommerce-ad",
    title: "Walking Pad Ecommerce Ad",
    description:
      "Performance-focused ecommerce ad combining realistic AI generation, product consistency, reference recreation, and polished short-form editing.",
    summary:
      "Performance-focused ecommerce ad combining realistic AI generation, product consistency, reference recreation, and polished short-form editing.",
    fullDescription:
      "Performance-focused ecommerce ad combining realistic AI generation, product consistency, reference recreation, and polished short-form editing.",
    category: "Ecommerce / AI Video",
    aspect: "9/16",
    aspectRatio: "9/16",
    orientation: "vertical",
    poster: "",
    video: "/videos/walking-pad.mp4?v=2",
    posterSrc: "",
    videoSrc: "/videos/walking-pad.mp4?v=2",
    featured: true,
    filters: ["AI Video", "Ecommerce"],
    handled: [
      "AI video generation",
      "Walking Pad product consistency",
      "Realistic environment recreation",
      "Reference-faithful scene recreation",
      "AI-generated retail/product visuals",
      "Product and packaging integration",
      "Ecommerce editing",
      "Pacing",
      "Sound design",
      "CTA presentation",
      "Final CapCut edit",
    ],
    skills: "AI Generation • Product Consistency • Ecommerce Editing • Reference Recreation • CapCut",
    chips: [
      "AI Generation",
      "Product Consistency",
      "Ecommerce Editing",
      "Reference Recreation",
      "CapCut",
    ],
    tools: ["CapCut"],
    approach: [
      "Reference-based recreation",
      "Product consistency",
      "Realistic AI generation",
      "Scene matching",
      "Ecommerce editing",
      "Short-form pacing",
      "Sound design",
      "CapCut finishing",
    ],
  },
  {
    slug: "ai-ugc-skincare-ad",
    title: "AI UGC Skincare Ad",
    description:
      "Realistic AI UGC advertising built around character consistency, believable product interaction and natural commercial visuals.",
    summary:
      "AI UGC with consistent character identity and product interaction.",
    fullDescription:
      "Realistic AI UGC advertising built around character consistency, believable product interaction and natural commercial visuals.",
    category: "AI UGC / Beauty",
    aspect: "9/16",
    aspectRatio: "9/16",
    orientation: "vertical",
    poster: "",
    video: "/videos/ai-ugc-skincare.mp4",
    posterSrc: "",
    videoSrc: "/videos/ai-ugc-skincare.mp4",
    featured: true,
    filters: ["AI UGC"],
    handled: [
      "Consistent AI character creation",
      "Skincare product visualization",
      "Realistic UGC scenes",
      "Commercial AI imagery",
      "AI video generation",
      "Short-form editing",
      "Pacing",
      "Captions",
      "Social-ad structure",
      "Product consistency",
    ],
    skills: "AI UGC • Character Consistency • Product Visualization • Social Ads",
    chips: ["AI UGC", "Character Consistency", "Product Visualization", "Social Ads", "CapCut"],
    tools: ["CapCut"],
  },
  {
    slug: "ai-wellness-avatar",
    title: "AI Wellness UGC / Avatar Video",
    description:
      "AI wellness content with a consistent presenter and polished delivery.",
    summary:
      "AI wellness content with a consistent presenter and polished delivery.",
    fullDescription:
      "AI wellness content with a consistent presenter and polished delivery.",
    category: "AI UGC / Wellness",
    aspect: "9/16",
    aspectRatio: "9/16",
    orientation: "vertical",
    poster: "",
    video: "/videos/ai-wellness-avatar.mp4",
    posterSrc: "",
    videoSrc: "/videos/ai-wellness-avatar.mp4",
    featured: true,
    filters: ["AI UGC", "AI Avatar"],
    handled: [
      "AI character generation",
      "Character consistency",
      "Scene direction",
      "Talking-avatar production",
      "Realistic movement",
      "Vertical social-media formatting",
      "Video editing",
      "Pacing",
    ],
    skills: "AI UGC • AI Presenter • Character Consistency • Talking Avatar • Short-Form Video",
    chips: ["AI UGC", "AI Presenter", "Character Consistency", "Talking Avatar", "Short-Form Video"],
    tools: ["Google Veo", "Google Flow", "CapCut", "ChatGPT"],
  },
  {
    slug: "ai-product-commercial",
    title: "AI Product Commercial",
    description:
      "Commercial product visualization using realistic AI environments, cinematic lighting and product-focused editing.",
    summary:
      "Commercial product visualization with cinematic lighting and polished editing.",
    fullDescription:
      "Commercial product visualization using realistic AI environments, cinematic lighting and product-focused editing.",
    category: "Product Advertising",
    aspect: "9/16",
    aspectRatio: "9/16",
    orientation: "vertical",
    poster: "",
    video: "/videos/ai-ecommerce-product.mp4",
    posterSrc: "",
    videoSrc: "/videos/ai-ecommerce-product.mp4",
    featured: true,
    filters: ["Product Ads"],
    handled: [
      "AI product visualization",
      "Cinematic product scenes",
      "Product consistency",
      "Lighting consistency",
      "Product close-ups",
      "Lifestyle environments",
      "AI image/video generation",
      "Product-focused editing",
      "Pacing",
      "Sound design",
    ],
    skills: "Product Visualization • AI Commercials • Lighting • Editing",
    chips: ["Product Visualization", "AI Commercial", "Cinematic Lighting", "AI Video", "Editing"],
    tools: [],
  },
  {
    slug: "coca-cola-product-ad",
    title: "Coca-Cola Product Ad",
    description:
      "Cinematic AI commercial with premium product focus and polished editing.",
    summary:
      "Cinematic AI commercial with premium product focus and polished editing.",
    fullDescription:
      "Cinematic AI commercial with premium product focus and polished editing.",
    category: "Product Advertising / Beverage",
    aspect: "9/16",
    aspectRatio: "9/16",
    orientation: "vertical",
    poster: "",
    video: "/videos/coca-cola-product-ad.mp4",
    posterSrc: "",
    videoSrc: "/videos/coca-cola-product-ad.mp4",
    featured: true,
    filters: ["Product Ads"],
    handled: [
      "AI product visualization",
      "Beverage commercial scenes",
      "Product-focused composition",
      "Cinematic lighting",
      "AI image/video generation",
      "Editing",
      "Pacing",
      "Sound design",
    ],
    skills:
      "Product Visualization • Beverage Advertising • AI Commercial • Cinematic Lighting • Editing",
    chips: [
      "Product Visualization",
      "Beverage Advertising",
      "AI Commercial",
      "Cinematic Lighting",
      "Editing",
    ],
    tools: ["Google Veo", "Google Flow", "CapCut", "ChatGPT"],
  },
];

export const featuredOrder = [
  "walking-pad-ecommerce-ad",
  "ai-ugc-skincare-ad",
  "ai-wellness-avatar",
  "ai-product-commercial",
  "coca-cola-product-ad",
];

export function byFeaturedOrder(list: Project[]) {
  const rank = (slug: string) => {
    const index = featuredOrder.indexOf(slug);
    return index === -1 ? featuredOrder.length + projects.findIndex((item) => item.slug === slug) : index;
  };

  return [...list].sort((a, b) => rank(a.slug) - rank(b.slug));
}

const moreWorkOrder = [
  "walking-pad-ecommerce-ad",
  "ai-ugc-skincare-ad",
  "ai-wellness-avatar",
  "ai-product-commercial",
  "coca-cola-product-ad",
];

export function moreProjects(slug: string) {
  const priority = moreWorkOrder
    .filter((id) => id !== slug)
    .map((id) => projects.find((project) => project.slug === id))
    .filter((project): project is Project => Boolean(project));
  const rest = projects.filter(
    (project) =>
      project.slug !== slug &&
      project.featured !== false &&
      !moreWorkOrder.includes(project.slug),
  );

  return [...priority, ...rest].slice(0, 4);
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
