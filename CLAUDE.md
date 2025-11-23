# Huang Lab Website - Project Documentation

## Overview
Modern academic website for Huang Lab at the University of Guelph, showcasing advanced NMR and structural biology research.

## Tech Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **UI Components**: Shadcn UI patterns
- **Routing**: React Router 6 (HashRouter for GitHub Pages compatibility)
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions

## Project Structure
```
huang-lab-guelph.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated deployment to GitHub Pages
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── Header.tsx          # Main navigation
│   │   ├── Footer.tsx          # Site footer
│   │   ├── Hero.tsx            # Homepage hero section
│   │   └── LabNews.tsx         # News feed component
│   ├── layouts/
│   │   └── Layout.tsx          # Main page layout wrapper
│   ├── pages/                  # Route page components
│   │   ├── Home.tsx
│   │   ├── Research.tsx
│   │   ├── Group.tsx
│   │   ├── Publications.tsx
│   │   ├── Gallery.tsx
│   │   ├── Contact.tsx
│   │   └── UsefulLinks.tsx
│   ├── data/                   # JSON data files
│   │   └── news.json           # Lab news/updates
│   ├── types/
│   │   └── index.ts            # TypeScript type definitions
│   ├── lib/
│   │   └── utils.ts            # Utility functions
│   ├── hooks/                  # Custom React hooks (future)
│   ├── assets/                 # Images, icons, etc. (future)
│   ├── App.tsx                 # Main app component with routing
│   ├── main.tsx                # React entry point
│   └── index.css               # Global styles + Tailwind directives
├── public/                     # Static assets
├── index.html                  # HTML entry point
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```

## Design System

### Color Palette
- **Primary**: Blue (#3b82f6) - Used for CTAs, links, emphasis
- **Background**: White with subtle gray gradients
- **Text**: Gray-900 for headings, Gray-600 for body
- **Borders**: Gray-200 for subtle separation
- **Academic-but-fresh**: Clean, modern, professional yet approachable

### Typography
- **Headings**: Bold, clear hierarchy (4xl, 3xl, 2xl, xl, lg)
- **Body**: Readable, relaxed line-height for academic content
- **Font Stack**: System fonts for performance

### Components
All components follow these principles:
- Responsive design (mobile-first approach)
- Accessible (semantic HTML, ARIA labels)
- Consistent spacing using Tailwind's spacing scale
- Hover states for interactive elements
- Shadow on elevation for depth

## Key Features Implemented

### Phase 1 (Current)
✅ Project foundation with Vite + React + TypeScript
✅ Tailwind CSS configuration with custom design tokens
✅ Modular component structure
✅ HashRouter setup for GitHub Pages compatibility
✅ Responsive header with mobile menu
✅ Footer with contact info and social links
✅ Homepage with hero section and research focus areas
✅ Lab news section with JSON data source
✅ Type-safe data structures
✅ GitHub Actions deployment workflow

### Pages Structure
- **Home**: Hero + Research focus + Lab news
- **Research**: TBD - Research areas, methodologies
- **Group**: TBD - Team members, roles, bios
- **Publications**: TBD - List of papers, citations
- **Gallery**: TBD - Lab photos, research images
- **Contact**: TBD - Contact form, location map
- **Useful Links**: TBD - Resources, collaborators

## Data Management

### Content Files (JSON)
Content is stored in JSON files under `src/data/` for easy updates:
- `news.json` - Lab news and announcements
- Future: `team.json`, `publications.json`, `research.json`

### Type Safety
All data structures have corresponding TypeScript interfaces in `src/types/index.ts`:
- `NewsItem` - Lab news entries
- `TeamMember` - Lab member profiles
- `Publication` - Research publications
- `ResearchArea` - Research focus areas

## Deployment

### GitHub Pages Setup
1. Repository: `huang-lab-guelph.github.io`
2. Branch: `main` (source code)
3. Deploy target: GitHub Pages via Actions
4. URL: `https://huang-lab-guelph.github.io/`

### Deployment Process
1. Push to `main` branch triggers GitHub Actions workflow
2. Workflow installs dependencies, builds project, and deploys to GitHub Pages
3. Vite builds with base path `/` (root) since this is a user/org GitHub Pages site
4. Built files served from `gh-pages` branch (auto-managed)

### Local Development
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Next Steps (Future Phases)

### Phase 2: Content Population
- [ ] Add real lab news from current website
- [ ] Create team member data and profiles
- [ ] Populate research areas with details
- [ ] Add publications data

### Phase 3: Advanced Features
- [ ] Image gallery with lightbox
- [ ] Publication search and filtering
- [ ] Contact form with validation
- [ ] Animations and transitions
- [ ] SEO optimization
- [ ] Analytics integration

### Phase 4: Enhanced UX
- [ ] Dark mode support
- [ ] Accessibility audit and improvements
- [ ] Performance optimization
- [ ] Progressive Web App features

## Notes

### HashRouter vs BrowserRouter
Using HashRouter because GitHub Pages doesn't support client-side routing with BrowserRouter. URLs will have `#/` (e.g., `/#/research`), which is acceptable for an academic lab website.

### Asset Handling
All assets (images, icons) should be placed in `src/assets/` or `public/` depending on whether they need to be processed by Vite.

### Content Updates
Non-technical users can update content by editing JSON files in `src/data/`. Changes require a git commit and push to deploy.

## Maintenance

### Adding a New Page
1. Create component in `src/pages/NewPage.tsx`
2. Add route in `src/App.tsx`
3. Add navigation link in `src/components/Header.tsx`

### Adding a New Component
1. Create component file in `src/components/ComponentName.tsx`
2. Export and import where needed
3. Follow existing patterns for styling and structure

### Updating Content
1. Edit relevant JSON file in `src/data/`
2. Ensure data matches TypeScript interface
3. Commit and push to trigger deployment

## Resources
- [Vite Documentation](https://vitejs.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Shadcn UI Components](https://ui.shadcn.com/)
