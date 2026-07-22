# UGC Creator Portfolio Template 📸

A premium, highly-converting, and production-ready portfolio template specifically designed for User Generated Content (UGC) creators. Engineered to be sold as a digital product (e.g., on Etsy), this template separates complex logic from content, allowing buyers to fully customize their site by editing a single configuration file without needing to touch a single line of React code.

## 🚀 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** Vercel (Recommended)

---

## ✨ Core Features

1. **True Template Architecture (`site.config.ts`)**
   - The entire website is data-driven. Buyers only need to edit `src/config/site.config.ts` to change the hero headline, about text, social links, stats, and SEO metadata. The structural layout components remain untouched.
   
2. **Dynamic Masonry Gallery**
   - A stunning, fully responsive CSS columns masonry grid for displaying high-quality UGC brand photography. 
   - Uses forced eager loading (`priority`) to bypass native lazy-loading bugs inherent in masonry layouts, ensuring images render instantly.

3. **Built-in Contact Form (Formspree)**
   - The Contact section is pre-integrated with Formspree. Buyers simply paste their Formspree ID into the config file.
   - Submissions happen asynchronously in the background via `fetch()`, presenting an elegant success message without breaking the user experience or redirecting to a new page.

4. **Native Technical SEO & OpenGraph**
   - **JSON-LD Schema.org:** Automatically injects a `Person` schema into the `<head>`, linking the creator's identity, portfolio, and social profiles directly to Google's Knowledge Graph.
   - **Dynamic Metadata:** Automatically generates highly optimized OpenGraph tags and Twitter Cards (`summary_large_image`) for rich social media sharing.
   - **Automated Crawling:** Next.js dynamically builds `sitemap.xml` and `robots.txt` based on the deployment URL.

5. **Integrated "Trojan Horse" Affiliate Marketing**
   - Includes a hardcoded, un-configurable promotional CTA banner and interactive modal embedded directly into `Footer.tsx`.
   - When a creator uses this template for their portfolio, it acts as a passive billboard for your DevThemes Etsy shop, offering their visitors a 10% discount code (`KITTY10`) to purchase the same template.

6. **Premium Micro-Interactions**
   - Fluid, continuous gradient-flow animations on badges.
   - Custom pointer/cursor hover states globally enforced via Tailwind base layers.
   - Beautiful Framer Motion scroll reveals.

---

## 📂 Project Structure

```text
glossy-belle-portfolio/
├── public/                 # Static assets (favicons, OG images, placeholder photos)
├── src/
│   ├── app/                # Next.js App Router (layout.tsx, page.tsx, globals.css, robots.ts)
│   ├── components/         # React UI Components (Hero, About, Gallery, Contact, Footer)
│   └── config/             # Template Configuration Hub (BUYERS ONLY EDIT THIS)
│       ├── site.config.ts  # Main text, SEO, and social data
│       └── data/           # Gallery lists, reels lists, etc.
└── PROJECT_DETAILS.md      # You are here!
```

---

## 🛠️ How to Customize (For Template Buyers)

This project is built to be frictionless for non-developers. 

1. **Edit Text & Info:** Open `src/config/site.config.ts` and replace the placeholder text with your actual name, bio, social links, and Formspree ID.
2. **Add Your Images:** Replace the `placeholder-1.jpg` through `placeholder-8.jpg` files in the `public/` directory with your own brand photography.
3. **Deploy:** Push to GitHub and import the repository to Vercel for an instant, free, global deployment.

---

## 📝 Developer Notes
- **Tailwind Columns Bug:** Avoid using `space-y-*` or Framer Motion Intersection Observers (`whileInView`) on children inside CSS columns (`columns-2`, `columns-3`), as they cause severe bounding box recalculation bugs in Chromium browsers. Use standard staggered CSS animations and manual Next.js `<Image priority>` tags.
- **Favicons:** Next.js 14 App router relies on `icons: { icon: "/icon.jpg" }` inside the `metadata` export in `layout.tsx` to properly resolve custom non-standard favicons in production.
