// config/site.config.ts
export const siteConfig = {
  name: "Glossy Belle",
  legalName: "Glossy Belle UGC",
  tagline: "Elevating brands through authentic storytelling and high-converting visual content.",
  description: "Glossy Belle is a UGC content creator specializing in authentic, high-converting video and photo content for beauty, skincare, wellness, and lifestyle brands.",
  url: "https://ugc-creator-portfolio.vercel.app/", // placeholder — replace with real domain
  siteName: "Glossy Belle | UGC Creator Portfolio",
  themeColor: "#000000", // replace with brand color
  locale: "en_US",

  social: {
    instagram: "https://www.instagram.com/glossy_belle/",
    tiktok: "",   // optional, leave blank if none
    email: "eshohaiqawii@gmail.com", // replace
  },

  contact: {
    formspreeId: "mzdnvkpa", // https://formspree.io/f/xxxxxx -> just the ID
  },

  hero: {
    heading1: "Elevating brands",
    heading2: "through authentic stories",
  },

  about: {
    heading: "Crafting narratives that convert.",
    paragraphs: [
      "I specialize in crafting authentic, relatable, and high-converting UGC content for modern beauty, skincare, wellness, and lifestyle brands.",
      "My approach transcends basic aesthetics. Whether it's an organic trend-based reel, a compelling product review, or an editorial unboxing, I focus on establishing genuine trust with the audience while architecting visual narratives that drive tangible results."
    ],
    skills: [
      "UGC Video Ads", "Product Photography", "Review & Testimonial", 
      "Aesthetic Unboxing", "Trend Integration", "Lifestyle Integration", 
      "Skincare & Beauty"
    ],
    stats: [
      { label: "Collaborations", value: "15+" },
      { label: "Content Styles", value: "3+" },
      { label: "Authenticity", value: "100%" },
      { label: "Conversion rate", value: "High" },
    ]
  },

  seo: {
    keywords: [
      "UGC creator",
      "UGC content creator Pakistan",
      "beauty UGC creator",
      "content creator for brands",
      "Instagram reels UGC",
      "product review content creator",
      "TikTok UGC creator"
    ],
    twitterHandle: "", // optional
    ogImage: "/og/og-cover.jpg", // 1200x630 static export image
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "Specializations", href: "#specializations" },
    { label: "Gallery", href: "#gallery" },
    { label: "Videos", href: "#videos" },
    { label: "Brands", href: "#brands" },
    { label: "Contact", href: "#contact" },
  ],

  footer: {
    links: [
      { label: "About", href: "#about" },
      { label: "Gallery", href: "#gallery" },
      { label: "Contact", href: "#contact" },
    ],
    copyrightName: "Glossy Belle",
  },
};
