import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site.config";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.siteName,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.seo.keywords,
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.siteName,
    description: siteConfig.description,
    siteName: siteConfig.siteName,
    locale: siteConfig.locale,
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630, alt: siteConfig.siteName }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.siteName,
    description: siteConfig.description,
    images: [siteConfig.seo.ogImage],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteConfig.url },
  icons: { icon: "/icon.jpg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: siteConfig.name,
              url: siteConfig.url,
              sameAs: [
                siteConfig.social.instagram,
                siteConfig.social.tiktok
              ].filter(Boolean),
              jobTitle: "UGC Content Creator",
              description: siteConfig.description,
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
