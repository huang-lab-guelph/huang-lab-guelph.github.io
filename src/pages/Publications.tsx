import { ExternalLink, FileText } from 'lucide-react'
import { Publication } from '@/types'
import publicationsData from '@/data/publications.json'

export default function Publications() {
  const publications = publicationsData as Publication[]

  // Group publications by year
  const publicationsByYear = publications.reduce((acc, pub) => {
    if (!acc[pub.year]) {
      acc[pub.year] = []
    }
    acc[pub.year].push(pub)
    return acc
  }, {} as Record<number, Publication[]>)

  // Sort years in descending order
  const years = Object.keys(publicationsByYear)
    .map(Number)
    .sort((a, b) => b - a)

  const getStatusBadge = (status?: 'accepted' | 'submitted' | 'published') => {
    if (!status) return null

    const colors: Record<'accepted' | 'submitted' | 'published', string> = {
      accepted: 'bg-green-100 text-green-800 border-green-200',
      submitted: 'bg-blue-100 text-blue-800 border-blue-200',
      published: 'bg-gray-100 text-gray-800 border-gray-200',
    }

    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${colors[status]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    )
  }

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Publications</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Peer-reviewed publications and book chapters from the Huang Lab and collaborators.
          Total: <strong>{publications.length} publications</strong>
        </p>
      </div>

      {/* Publications by Year */}
      <div className="space-y-16">
        {years.map((year) => (
          <section key={year}>
            <h2 className="text-5xl font-bold text-gray-900 mb-8 pb-4 border-b-4 border-primary/20">
              {year}
            </h2>
            <div className="space-y-6">
              {publicationsByYear[year].map((pub) => (
                <article
                  key={pub.id}
                  className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="flex items-start gap-4">
                    {/* Publication Number */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">{pub.number}</span>
                      </div>
                    </div>

                    {/* Publication Details */}
                    <div className="flex-1 min-w-0">
                      {/* Title */}
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                        {pub.link ? (
                          <a
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors inline-flex items-start gap-2"
                          >
                            <span>{pub.title}</span>
                            <ExternalLink className="w-4 h-4 flex-shrink-0 mt-1" />
                          </a>
                        ) : (
                          pub.title
                        )}
                      </h3>

                      {/* Authors */}
                      <p className="text-sm text-gray-700 mb-2">
                        {pub.authors}
                      </p>

                      {/* Journal Info */}
                      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
                        <FileText className="w-4 h-4" />
                        <span className="font-medium italic">{pub.journal}</span>
                        {pub.volume && (
                          <>
                            <span className="text-gray-400">•</span>
                            <span>{pub.volume}</span>
                          </>
                        )}
                        {pub.pages && (
                          <>
                            <span className="text-gray-400">:</span>
                            <span>{pub.pages}</span>
                          </>
                        )}
                        {pub.month && (
                          <>
                            <span className="text-gray-400">•</span>
                            <span>{pub.month} {pub.year}</span>
                          </>
                        )}
                      </div>

                      {/* Status Badge */}
                      {pub.status && (
                        <div className="mt-3">
                          {getStatusBadge(pub.status)}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Footer Note */}
      <div className="mt-16 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-sm text-gray-600 text-center">
          <strong>Note:</strong> Publications are listed in reverse chronological order.
          Click on titles to access full articles when available.
        </p>
      </div>
    </div>
  )
}
