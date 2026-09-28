# Huang Lab Website - Project Documentation

## Overview
Public website for the Huang Lab at the University of Guelph (advanced NMR and structural biology research). Static single-page app, deployed to GitHub Pages.

## Tech Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3, with shadcn-style HSL design tokens in `src/index.css`
- **Icons**: lucide-react
- **Routing**: React Router 6 (HashRouter, for GitHub Pages compatibility)
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions (`.github/workflows/deploy.yml`)

No test framework is configured. The only quality gates are `npm run build` (runs `tsc` then `vite build`) and `npm run lint` (flat-config ESLint, `--max-warnings 0`).

## Project Structure
```
huang-lab-guelph.github.io/
├── .github/workflows/deploy.yml   # Build + deploy to GitHub Pages
├── src/
│   ├── components/
│   │   ├── Header.tsx             # Sticky nav, mobile menu, nav array
│   │   ├── Footer.tsx             # Site footer
│   │   ├── Hero.tsx               # Homepage hero
│   │   ├── LabNews.tsx            # News feed, reads news.json
│   │   └── TeamMemberModal.tsx    # Team member detail modal
│   ├── layouts/
│   │   └── Layout.tsx             # Header + main + Footer wrapper
│   ├── pages/
│   │   ├── Home.tsx               # Hero + LabNews only
│   │   ├── Research.tsx
│   │   ├── Group.tsx
│   │   ├── Publications.tsx
│   │   ├── Teaching.tsx
│   │   ├── Gallery.tsx
│   │   ├── Contact.tsx
│   │   └── LabBuddy.tsx
│   ├── data/                      # JSON content
│   │   ├── news.json
│   │   ├── team.json
│   │   ├── publications.json
│   │   └── gallery.json
│   ├── types/index.ts             # Shared TypeScript interfaces
│   ├── lib/utils.ts               # `cn()` (clsx + tailwind-merge), currently unused
│   ├── hooks/                     # Empty
│   ├── assets/                    # team/ and research/ images (hero/, icons/ empty)
│   ├── App.tsx                    # HashRouter + route table
│   ├── main.tsx                   # React entry, imports index.css
│   ├── index.css                  # Tailwind directives, design tokens, utilities
│   └── App.css                    # Unused Vite template leftover, not imported
├── public/images/gallery/         # Gallery photos, one folder per collection
├── index.html                     # HTML entry, loads Crimson Pro from Google Fonts
├── vite.config.ts                 # base '/', `@` alias -> ./src
├── tailwind.config.js             # Maps the CSS custom properties to Tailwind colors
└── package.json
```

## Routes
Defined in `src/App.tsx`, mirrored by the `navigation` array in `src/components/Header.tsx`. HashRouter, so real URLs are `/#/research` etc.

| Path | Page |
| --- | --- |
| `/` | Home |
| `/research` | Research |
| `/group` | Group |
| `/publications` | Publications |
| `/teaching` | Teaching |
| `/gallery` | Gallery |
| `/contact` | Contact |
| `/labbuddy` | LabBuddy |

Adding a route means editing both `App.tsx` and the `navigation` array in `Header.tsx`.

## Design System

The site uses a watercolor-inspired palette: a warm cream canvas with a teal primary and a soft botanical-green accent. It is **not** blue.

### Design tokens
All colors are HSL triples declared as CSS custom properties on `:root` in `src/index.css`, and exposed as Tailwind colors in `tailwind.config.js`. Use the Tailwind token (`bg-primary`, `text-foreground`, `border-border`) or `hsl(var(--primary))` in raw CSS. Do not hardcode hex values.

| Token | Value | Role |
| --- | --- | --- |
| `--background` | `45 60% 95%` | Warm cream page canvas |
| `--foreground` | `180 30% 25%` | Deep teal body text |
| `--card` | `45 50% 98%` | Near-white warm card surface |
| `--card-foreground` | `180 30% 25%` | Text on cards |
| `--popover` | `45 50% 98%` | Popover surface |
| `--popover-foreground` | `180 30% 25%` | Text on popovers |
| `--primary` | `180 45% 45%` | Teal - CTAs, links, emphasis |
| `--primary-foreground` | `45 60% 98%` | Text on primary |
| `--secondary` | `45 65% 88%` | Soft yellow/cream |
| `--secondary-foreground` | `180 30% 25%` | Text on secondary |
| `--muted` | `45 40% 90%` | Muted cream surface |
| `--muted-foreground` | `180 20% 45%` | Secondary text |
| `--accent` | `150 35% 70%` | Botanical green |
| `--accent-foreground` | `180 30% 20%` | Text on accent |
| `--destructive` | `0 70% 55%` | Errors, destructive actions |
| `--destructive-foreground` | `45 60% 98%` | Text on destructive |
| `--border` | `45 30% 85%` | Borders (also the global `*` border color) |
| `--input` | `45 30% 88%` | Input borders |
| `--ring` | `180 45% 45%` | Focus ring (same teal as primary) |
| `--radius` | `0.75rem` | Base radius; Tailwind `rounded-lg/md/sm` derive from it |

There is no dark mode: the tokens are defined once on `:root`, with no `.dark` block and no `darkMode` setting in the Tailwind config.

### Custom utilities
Defined in the `@layer utilities` block of `src/index.css`:
- `.bg-watercolor-teal`, `.bg-watercolor-cream` - gradient washes (currently used only by `Hero.tsx`)
- `.shadow-organic`, `.shadow-organic-lg` - soft teal-tinted elevation shadows, used in place of Tailwind's default shadows

### Typography
- **Body**: system font stack, set on `body` in `src/index.css` (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`).
- **Headings**: `h1`-`h6` are set in `"Crimson Pro", Georgia, "Times New Roman", serif` at weight 600 with `-0.02em` letter-spacing, via a base-layer rule in `src/index.css`. Crimson Pro is loaded from Google Fonts in `index.html`.
- `font-serif` in Tailwind is remapped to the same Crimson Pro stack, for serif text outside heading tags.

### Known inconsistency: tokens vs hardcoded Tailwind colors
The codebase is midway through the watercolor redesign. Some files use the design tokens throughout; others still carry Tailwind's default greys and `bg-white` from before the redesign, and a few mix both.

- Token-based: `Header.tsx`, `Footer.tsx`, `Hero.tsx`, `LabBuddy.tsx`, `Layout.tsx`
- Substantially hardcoded (`bg-white`, `text-gray-*`, `border-gray-*`): `Contact.tsx`, `Research.tsx`, `Teaching.tsx`, `Group.tsx`, `Publications.tsx`, `Gallery.tsx`, `TeamMemberModal.tsx`

New code should use the tokens. Converting the hardcoded pages is a wanted but unscheduled cleanup; it is a visual change, so do it deliberately rather than as a drive-by edit.

### Component conventions
- Responsive, mobile-first
- Semantic HTML and ARIA labels on icon-only or decorative elements
- Tailwind spacing scale, no ad-hoc pixel values
- Hover and focus states on anything interactive
- `shadow-organic` rather than Tailwind's default shadows

## Data Management

Content lives in JSON under `src/data/` and is imported directly by the components; there is no CMS and no fetch at runtime.

| File | Shape | Consumed by |
| --- | --- | --- |
| `news.json` | `NewsItem[]` | `LabNews.tsx` |
| `team.json` | `TeamMember[]` | `Group.tsx` |
| `publications.json` | `Publication[]` | `Publications.tsx` |
| `gallery.json` | `GalleryCollection[]` | `Gallery.tsx` |

Interfaces are in `src/types/index.ts`: `NewsItem`, `TeamMember`, `Publication`, `ResearchArea`, `GalleryImage`, `GalleryCollection`. `ResearchArea` is declared but not currently used by any page.

Team photos live in `src/assets/team/` and are bundled by Vite. `team.json` stores only a bare filename in `image`; `Group.tsx` resolves it through an explicit `imageMap` of static imports, so adding a team member means adding both the JSON entry and an import plus `imageMap` line in `Group.tsx`.

Gallery photos live in `public/images/gallery/<collection>/` and are referenced by absolute path from `gallery.json`, so they are copied verbatim and not hashed. See `public/images/gallery/README.md` and `src/assets/README.md` for the per-folder conventions.

There is no shadcn component library in the repo - only the shadcn token naming convention. `class-variance-authority` is a dependency but is not imported anywhere, and `cn()` in `src/lib/utils.ts` has no call sites yet.

## Deployment

- Repository: `huang-lab-guelph/huang-lab-guelph.github.io`, source on `main`.
- Live URL: `https://huang-lab-guelph.github.io/`
- Pushing to `main` (or a manual `workflow_dispatch`) runs `.github/workflows/deploy.yml`: Node 18, `npm ci`, `npm run build`, then `actions/upload-pages-artifact` on `dist/` and `actions/deploy-pages`. There is no `gh-pages` branch; the artifact is deployed straight to Pages.
- Vite builds with `base: '/'` because this is an org Pages site served from the domain root.

### Local Development
```bash
npm install
npm run dev      # dev server on http://localhost:5173
npm run build    # tsc + vite build
npm run preview  # serve the production build
npm run lint     # eslint, zero warnings tolerated
```

## Notes

### HashRouter vs BrowserRouter
HashRouter is used because GitHub Pages cannot rewrite deep links to `index.html`. URLs therefore contain `#/`, which is acceptable here.

### Asset handling
Images that should be hashed and bundled go in `src/assets/` and are imported. Images referenced by string path at runtime (the gallery) go in `public/`.

### Content updates
Non-technical contributors can edit the JSON files in `src/data/`. Changes must match the interfaces in `src/types/index.ts` or `npm run build` fails. A commit to `main` deploys.

## Maintenance

### Adding a page
1. Create `src/pages/NewPage.tsx`
2. Add the route in `src/App.tsx`
3. Add an entry to the `navigation` array in `src/components/Header.tsx`

### Adding a component
1. Create `src/components/ComponentName.tsx`
2. Style with the design tokens and `shadow-organic`, matching `Header.tsx` or `Hero.tsx`

## Resources
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
