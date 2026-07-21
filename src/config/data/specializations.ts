import { Video, Camera, Star, PackageOpen, TrendingUp, Sparkles } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { LucideProps } from "lucide-react";

export type Specialization = {
  id: string;
  title: string;
  description: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
};

export const specializations: Specialization[] = [
  {
    id: "ugc-video",
    title: "UGC Video Content",
    description: "Short-form, scroll-stopping vertical videos for ads & organic.",
    icon: Video,
  },
  {
    id: "product-photography",
    title: "Product Photography Content",
    description: "Clean, aesthetic flat-lays and lifestyle shots.",
    icon: Camera,
  },
  {
    id: "testimonials",
    title: "Testimonials & Reviews",
    description: "Authentic, trust-building review-style content.",
    icon: Star,
  },
  {
    id: "unboxing",
    title: "Unboxing & First Impressions",
    description: "Genuine reaction-driven content highlighting the unboxing experience.",
    icon: PackageOpen,
  },
  {
    id: "trends",
    title: "Trend-Based Reels",
    description: "Leveraging trending audio & formats for brand relevance and reach.",
    icon: TrendingUp,
  },
  {
    id: "skincare-routines",
    title: "Skincare & Beauty Routines",
    description: "Routine-style tutorial content that feels native to the platform.",
    icon: Sparkles,
  },
];
