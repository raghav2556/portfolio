# Raghvendra Shah — Developer Portfolio

Dark anime-themed portfolio built with React + Vite + Tailwind CSS v4 + Framer Motion.

---

## Stack

| Tech | Version | Role |
|---|---|---|
| React | 18 | UI framework |
| Vite | 5 | Dev server & build |
| Tailwind CSS | 4 | Utility styling |
| Framer Motion | 11 | All animations |
| EmailJS | 4 | Contact form (no backend) |
| react-scroll | 1.9 | Smooth in-page navigation |
| react-icons | 5 | Feather + Simple icons |

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:5173
```

---

## Environment Variables

The `.env` file is included with your EmailJS credentials. **Never commit it to Git.**

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

For your EmailJS template, make sure these variable names match:
- `from_name`
- `from_email`
- `subject`
- `message`

---

## Project Structure

```
src/
├── components/        # Section components (Hero, About, Projects…)
├── shared/            # Reusable UI (AnimatedTitle, Toast, CustomCursor…)
├── hooks/             # useNavScroll, useCountUp
├── data/
│   └── portfolioData.js   ← edit all content here
└── styles/
    └── globals.css        ← design tokens + layout classes
```

---

## Updating Content

All user content lives in **`src/data/portfolioData.js`**. Edit that file to update anything — projects, skills, achievements, etc. — without touching component code.

---

## Deployment (Vercel — Recommended)

1. Push to GitHub (the `.env` is in `.gitignore` — add env vars on Vercel)
2. Import repo on [vercel.com](https://vercel.com)
3. Add the three `VITE_EMAILJS_*` variables in **Settings → Environment Variables**
4. Deploy ✓

> Also works on Netlify or GitHub Pages. For GH Pages you may need `base` in `vite.config.js`.
