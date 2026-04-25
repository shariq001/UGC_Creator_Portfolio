import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Glossy_Belle | UGC Content Creator",
  description: "Bringing authentic stories to life. Expert UGC creator specializing in honest product reviews and lifestyle content.",
  keywords: ["UGC Creator", "Content Creator", "Product Reviews", "Beauty Influencer", "Lifestyle Content", "Glossy_Belle"],
  openGraph: {
    title: "Glossy_Belle | UGC Content Creator",
    description: "Bringing authentic stories to life through compelling UGC content.",
    url: "https://glossybelle.com",
    siteName: "Glossy_Belle Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
