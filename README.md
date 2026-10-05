# ProfilePic Resizer | 100% Client-Side Avatar Cropper

[![Deploy to GitHub Pages](https://github.com/profilepic-resizer/profilepic-resizer.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/profilepic-resizer/profilepic-resizer.github.io/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Privacy: Zero Server](https://img.shields.io/badge/Privacy-100%25%20Zero--Server-287A74.svg)](https://profilepic-resizer.github.io)
[![Buy Me A Coffee](https://img.shields.io/badge/Support-Buy%20Me%20A%20Coffee-FFF8B0.svg)](https://buymeacoffee.com/kisharadilz)

A privacy-first, zero-server web utility built with **Astro**, **React Islands**, and **HTML5 Canvas**. Allows creators, developers, and professionals to instantly crop, resize, and export profile pictures for various social media platforms (LinkedIn, Instagram, YouTube, TikTok, X, Discord, WhatsApp) entirely within the browser without data collection.

🌐 **Live Website**: [https://profilepic-resizer.github.io](https://profilepic-resizer.github.io)  
☕ **Support Developer**: [https://buymeacoffee.com/kisharadilz](https://buymeacoffee.com/kisharadilz)

---

## 🎨 Design System & Palette

Crafted with an ultra-clean, minimal aesthetic:

| Token | Hex Code | Role |
| :--- | :--- | :--- |
| **Deep Teal** | `#287A74` | Primary actions, headings, and key brand accents |
| **Muted Teal** | `#55A9A0` | Secondary UI elements, borders, icons, and sliders |
| **Mint Green** | `#AEEED3` | Active states, success badges, selection rings |
| **Pale Yellow** | `#FFF8B0` | Soft highlight cards, tips, and support CTA |

---

## 🚀 Key Features

- **100% Client-Side (Zero-Server Processing)**: All cropping, scaling, rotation, and file generation utilize the HTML5 Canvas API locally in the user's browser. No images are ever uploaded to any server.
- **1-Click Platform Presets**:
  - **LinkedIn**: 400 × 400 px (Circular mask)
  - **Instagram**: 320 × 320 px (Circular mask)
  - **YouTube**: 800 × 800 px (High-DPI channel icon)
  - **TikTok**: 200 × 200 px (Video profile avatar)
  - **Twitter / X**: 400 × 400 px
  - **Discord**: 128 × 128 px
  - **WhatsApp**: 500 × 500 px
  - **GitHub**: 460 × 460 px
  - **Facebook**: 170 × 170 px
- **Custom Dimension Overrides**: Set custom width and height (px) with optional 1:1 aspect ratio locking.
- **Touch-Responsive Canvas Controls**:
  - Pan / drag positioning (mouse pointer & touch)
  - Pinch-to-zoom & smooth mouse wheel zoom
  - 90° quick rotation & fine 360° angle slider
  - Flip horizontal & flip vertical
  - Circular mask vs square frame toggle
  - Rule of thirds alignment grid
- **Instant Blob Export**:
  - Download high-res PNG, JPG (customizable quality 50-100%), or WebP
  - Optional transparent background for PNG circular avatars
  - 1-click **Copy to Clipboard** (`navigator.clipboard.write`)
- **Strict Responsive Navigation**:
  - Desktop: Full text labels alongside icons
  - Mobile & Tablet: Strictly collapses navigation to **ICONS ONLY** for a clean, distraction-free interface
- **Comprehensive Internationalization (i18n)**:
  - Astro subpath routing for 5 locales: English (`/`), Spanish (`/es/`), French (`/fr/`), Portuguese (`/pt/`), and Japanese (`/ja/`)
- **Technical SEO**:
  - Valid `WebApplication` and `SoftwareApplication` JSON-LD schemas
  - `FAQPage` structured data
  - Canonical and `hreflang` alternate links
  - `og:site_name`, OpenGraph, Twitter Cards, `sitemap.xml`, and `robots.txt`

---

## 🛠️ Tech Stack

- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation)
- **UI Islands**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Graphics Engine**: Native HTML5 Canvas 2D API
- **Deployment**: GitHub Pages (via GitHub Actions)

---

## 💻 Local Development

```bash
# 1. Clone the repository
git clone https://github.com/profilepic-resizer/profilepic-resizer.github.io.git
cd profilepic-resizer.github.io

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Build static distribution
npm run build

# 5. Preview production build locally
npm run preview
```

---

## 📄 License

MIT License. Free to use, adapt, and share.
