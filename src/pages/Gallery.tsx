import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, Images } from 'lucide-react'
import { GalleryCollection, GalleryImage } from '@/types'
import galleryData from '@/data/gallery.json'

export default function Gallery() {
  const collections = galleryData as GalleryCollection[]
  const [selectedImage, setSelectedImage] = useState<{
    image: GalleryImage
    collection: GalleryCollection
  } | null>(null)

  const openLightbox = (image: GalleryImage, collection: GalleryCollection) => {
    setSelectedImage({ image, collection })
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return

    const currentCollection = selectedImage.collection
    const currentIndex = currentCollection.images.findIndex(
      (img) => img.id === selectedImage.image.id
    )

    let newIndex: number
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : currentCollection.images.length - 1
    } else {
      newIndex = currentIndex < currentCollection.images.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedImage({
      image: currentCollection.images[newIndex],
      collection: currentCollection,
    })
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowLeft') navigateImage('prev')
    if (e.key === 'ArrowRight') navigateImage('next')
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Images className="w-10 h-10 text-primary" />
          <h1 className="text-4xl font-bold text-gray-900">Gallery</h1>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed">
          Photos from lab events, conferences, and team activities
        </p>
      </div>

      {/* Collections */}
      <div className="space-y-16">
        {collections.map((collection) => (
          <section key={collection.id} id={collection.slug}>
            {/* Collection Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                {collection.title}
              </h2>
              <p className="text-gray-600">{collection.description}</p>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {collection.images.map((image) => (
                <div
                  key={image.id}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                  onClick={() => openLightbox(image, collection)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback for missing images
                      const target = e.target as HTMLImageElement
                      target.src = `https://placehold.co/600x450/e5e7eb/6b7280?text=${encodeURIComponent(
                        collection.title
                      )}`
                    }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-sm font-medium line-clamp-2">
                        {image.caption}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              navigateImage('prev')
            }}
            className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              navigateImage('next')
            }}
            className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-7xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image.src}
              alt={selectedImage.image.alt}
              className="max-h-[80vh] max-w-full object-contain rounded-lg"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = `https://placehold.co/1200x900/e5e7eb/6b7280?text=${encodeURIComponent(
                  selectedImage.collection.title
                )}`
              }}
            />
            {/* Caption */}
            <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-white text-center text-sm">
                {selectedImage.image.caption}
              </p>
              <p className="text-white/60 text-center text-xs mt-1">
                {selectedImage.collection.title}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="mt-16 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-sm text-gray-600 text-center">
          <strong>Tip:</strong> Click on any image to view it in full size. Use arrow keys or
          navigation buttons to browse through photos.
        </p>
      </div>
    </div>
  )
}
