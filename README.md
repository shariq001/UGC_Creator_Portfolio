# Glossy Belle — UGC Creator Portfolio

A modern, fast, and fully responsive User Generated Content (UGC) portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion. 
This is a content-first, faceless portfolio template optimized for performance and SEO.

## Setup Instructions

1. **Clone the repository and install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Configuration & Content Management

All site data and SEO settings are centralized. You do NOT need to modify the React components to update your content!

### 1. Site Settings & SEO
Edit `src/config/site.config.ts` to update your name, tagline, SEO keywords, social links, and navigation items.

### 2. Formspree Contact Form
The contact form uses Formspree for serverless form submissions.
1. Create a free account at [formspree.io](https://formspree.io/)
2. Create a new form and get your Form ID (e.g., `https://formspree.io/f/YOUR_FORMSPREE_ID`)
3. Open `src/config/site.config.ts` and replace `YOUR_FORMSPREE_ID` inside `contact.formspreeId`.

### 3. Gallery Images
To swap the placeholder gallery images with your real content:
1. Place your optimized images (JPEGs/WEBP recommended) in the `public/gallery/` folder.
2. Open `src/config/data/gallery.ts` and update the array with your image paths (e.g., `/gallery/my-image.jpg`), alt text, and categories.

### 4. Brands & Reels
To update the Marquee Brand Strip or the Instagram Videos section:
- **Brands:** Edit `src/config/data/brands.ts` and add the brand name and their Instagram URL. The marquee will automatically loop smoothly.
- **Reels:** Edit `src/config/data/reels.ts` and paste the clean URL for your Instagram Reel (e.g., `https://www.instagram.com/reel/ID/`).
  
> **Note on Instagram Embeds:** 
> The site uses Instagram's official embed script. Instagram may occasionally block or throttle embeds when viewing on `localhost` during development due to cross-origin policies. If reels aren't loading locally, it's expected behavior—they will work flawlessly once deployed to your live domain.

If you ever decide to switch to the fallback Server-Side oEmbed approach in the future, you will need a Meta Graph API Access Token (a Facebook App + Instagram oEmbed token). For now, the embed script approach requires zero API keys.

## Deployment to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Log in to Vercel and click "Add New Project".
3. Import your repository.
4. Leave the default build settings (`npm run build`, output directory: `.next`).
5. Click **Deploy**. Vercel will automatically build and deploy your portfolio with a live URL.

## Tech Stack
- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript
- Framer Motion
- Lucide React
- Formspree
