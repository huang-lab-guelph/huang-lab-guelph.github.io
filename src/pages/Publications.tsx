import { ExternalLink, FileText, GraduationCap, UserCircle } from 'lucide-react'
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
      accepted: 'bg-accent/40 text-accent-foreground border-accent/60',
      submitted: 'bg-primary/15 text-foreground border-primary/30',
      published: 'bg-muted text-muted-foreground border-border',
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
        <div className="flex items-start justify-between gap-4 mb-4">
          <h1 className="text-4xl font-bold text-foreground">Publications</h1>
          <div className="flex gap-3">
            <a
              href="https://scholar.google.com/citations?user=WqYyo04AAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
            >
              <GraduationCap className="w-5 h-5" />
              <span className="font-medium">Google Scholar</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="https://orcid.org/0000-0002-4064-6397"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/70 transition-colors shadow-md hover:shadow-lg"
            >
              <UserCircle className="w-5 h-5" />
              <span className="font-medium">ORCID</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed font-serif">
          Peer-reviewed publications and book chapters from the Huang Lab and collaborators.
        </p>
      </div>

      {/* Publications by Year */}
      <div className="space-y-16">
        {years.map((year) => (
          <section key={year}>
            <h2 className="text-5xl font-bold text-foreground mb-8 pb-4 border-b-4 border-primary/20">
              {year}
            </h2>
            <div className="space-y-6">
              {publicationsByYear[year].map((pub) => (
                <article
                  key={pub.id}
                  className="bg-card rounded-lg shadow-md border border-border p-6 hover:shadow-lg transition-shadow duration-200"
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
                      <h3 className="text-lg text-foreground mb-2 leading-tight">
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
                      <p className="text-sm font-serif text-foreground mb-2">
                        {pub.authors}
                      </p>

                      {/* Journal Info */}
                      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                        <FileText className="w-4 h-4" />
                        <span className="font-medium italic">{pub.journal}</span>
                        {pub.volume && (
                          <>
                            <span className="text-muted-foreground/60">•</span>
                            <span>{pub.volume}</span>
                          </>
                        )}
                        {pub.pages && (
                          <>
                            <span className="text-muted-foreground/60">:</span>
                            <span>{pub.pages}</span>
                          </>
                        )}
                        {pub.month && (
                          <>
                            <span className="text-muted-foreground/60">•</span>
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
      <div className="mt-16 p-6 bg-muted rounded-lg border border-border">
        <p className="text-sm text-muted-foreground text-center font-serif">
          <strong>Note:</strong> Publications are listed in reverse chronological order.
          Click on titles to access full articles when available.
        </p>
      </div>
    </div>
  )
}
