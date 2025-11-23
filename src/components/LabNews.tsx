import { useState } from 'react'
import { Calendar, ChevronDown } from 'lucide-react'
import newsData from '../data/news.json'
import type { NewsItem } from '../types'

export default function LabNews() {
  const news: NewsItem[] = newsData
  const [showAll, setShowAll] = useState(false)

  const displayedNews = showAll ? news : news.slice(0, 3)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl font-serif mb-4">Lab News</h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Latest updates and announcements from our lab
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedNews.map((item) => (
            <div
              key={item.id}
              className="group bg-card rounded-2xl border-2 border-border p-8 hover:border-primary/40 shadow-organic hover:shadow-organic-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-2 text-sm text-primary mb-4 font-medium">
                <Calendar className="h-4 w-4" />
                <time dateTime={item.date}>{formatDate(item.date)}</time>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>

        {!showAll && news.length > 3 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-organic hover:shadow-organic-lg hover:-translate-y-0.5"
            >
              Show More News ({news.length - 3} more)
              <ChevronDown className="h-5 w-5" />
            </button>
          </div>
        )}

        {showAll && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(false)}
              className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-300 transition-all"
            >
              Show Less
              <ChevronDown className="h-5 w-5 rotate-180" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
