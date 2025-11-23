# Gallery Images

This directory contains all gallery images organized by collection.

## How to Add Photos

### 1. Add Images to Collection Folders

Place your photos in the appropriate collection folders:

- **group-photos/** - Lab team pictures from recent years
- **souscc-53/** - Conference event hosted at University of Guelph
- **moot-35/** - MOOT competition at McGill University
- **celebrations/** - Lab achievements and milestones
- **fun-times/** - Casual photos of lab activities and outings
- **pottery-outing/** - Team pottery class activity
- **souscc-52-presentations/** - Student presentations at conference

### 2. Naming Convention

Name your files sequentially:
```
photo-1.jpg
photo-2.jpg
photo-3.jpg
etc.
```

Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`

### 3. Update gallery.json (Optional)

If you want to change captions or add/remove images, edit `/src/data/gallery.json`

Example:
```json
{
  "id": 1,
  "src": "/images/gallery/group-photos/photo-1.jpg",
  "caption": "Your custom caption here",
  "alt": "Descriptive alt text for accessibility"
}
```

### 4. Image Guidelines

- **Recommended size:** 1200-2000px width (height auto)
- **Aspect ratio:** Approximately 4:3 or 16:9
- **File size:** Keep under 500KB per image (compress if needed)
- **Format:** JPG for photos, PNG for images with transparency

### 5. Quick Start

1. Copy your photos to the appropriate folder
2. Rename them to match the pattern: `photo-1.jpg`, `photo-2.jpg`, etc.
3. If you have more or fewer images than the placeholders, update `src/data/gallery.json`
4. Commit and push your changes

### Example Workflow

```bash
# Navigate to the gallery folder
cd public/images/gallery/group-photos

# Copy your images
cp ~/Downloads/my-group-photo.jpg photo-1.jpg
cp ~/Downloads/another-photo.jpg photo-2.jpg

# Commit changes
git add .
git commit -m "Add group photos"
git push
```

The website will automatically use your new images!
