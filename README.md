# Huang Lab Website

Modern website for Huang Lab at the University of Guelph - Advanced NMR and Structural Biology Research.

## Tech Stack

- **React 18** with TypeScript
- **Vite 5** for fast development and optimized builds
- **Tailwind CSS 3** for styling
- **Shadcn UI** patterns
- **React Router 6** with HashRouter
- **GitHub Pages** for hosting
- **GitHub Actions** for automated deployment

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/huang-lab-guelph/huang-lab-guelph.github.io.git
cd huang-lab-guelph.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/     # Reusable UI components
├── layouts/        # Page layouts
├── pages/          # Route pages
├── data/           # JSON content files
├── types/          # TypeScript type definitions
├── lib/            # Utility functions
├── hooks/          # Custom React hooks
└── assets/         # Static assets
```

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions.

**Live URL**: https://huang-lab-guelph.github.io/huang-lab-guelph.github.io/

## Content Management

Content is managed through JSON files in the `src/data/` directory:

- `news.json` - Lab news and announcements
- More to come: team members, publications, research areas

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Test locally with `npm run build && npm run preview`
4. Submit a pull request

## Documentation

See [CLAUDE.md](./CLAUDE.md) for detailed project documentation, architecture decisions, and development guidelines.

## License

© 2024 Huang Lab, University of Guelph. All rights reserved.
