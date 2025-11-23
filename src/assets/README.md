# Assets Folder Structure

This folder contains all static assets for the Huang Lab website, organized by purpose.

## Directory Structure

```
assets/
├── team/           # Team member photos
├── research/       # Research-related images (proteins, experiments, etc.)
├── hero/           # Homepage hero section images
├── icons/          # Icons and logos
└── README.md       # This file
```

## Usage Guidelines

### Team Photos
- Location: `assets/team/`
- Naming: Use lowercase with hyphens (e.g., `rui-huang.jpg`, `megan-black.jpg`)
- Format: JPG or PNG
- Recommended size: 400x400px minimum, square aspect ratio
- Import example: `import photo from '@/assets/team/rui-huang.jpg'`

### Research Images
- Location: `assets/research/`
- Naming: Descriptive names (e.g., `p97.png`, `mitochondrial-proteases.png`)
- Format: PNG preferred for scientific diagrams, JPG for photos
- Import example: `import image from '@/assets/research/p97.png'`

### Hero Images
- Location: `assets/hero/`
- Naming: Descriptive of content
- Format: PNG or JPG
- Recommended: High resolution for hero sections

### Icons
- Location: `assets/icons/`
- Format: SVG preferred, PNG as fallback
- Naming: Descriptive (e.g., `logo.svg`, `favicon.png`)

## Adding New Images

1. Place image in appropriate subdirectory
2. Use lowercase, hyphenated naming
3. Update relevant data file (e.g., `src/data/team.json`)
4. Import in component as needed

## Placeholder Images

When images are not yet available:
- Use User icon from lucide-react for team members
- Use gradient backgrounds as shown in Group page component
- Replace with actual images when available
