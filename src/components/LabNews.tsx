import { Calendar } from 'lucide-react'
import newsData from '../data/news.json'
import type { NewsItem } from '../types'

export default function LabNews() {
  const news: NewsItem[] = newsData

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Lab News</h2>
          <p className="mt-4 text-lg text-gray-600">
            Latest updates and announcements from our lab
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4" />
                <time dateTime={item.date}>{formatDate(item.date)}</time>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
