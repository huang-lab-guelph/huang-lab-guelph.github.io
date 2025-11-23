import { Book, GraduationCap, Calendar, ExternalLink } from 'lucide-react'

export default function Teaching() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold text-gray-900">Teaching</h1>
          </div>
          <a
            href="https://uoguelph.courses/professor/2761568"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors shadow-md hover:shadow-lg"
          >
            <GraduationCap className="w-5 h-5" />
            <span className="font-medium">RateMyProfessor</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed">
          Courses and educational activities by Dr. Rui Huang at the University of Guelph
        </p>
      </div>

      {/* Current Courses */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-primary/20">
          Current Courses
        </h2>

        <div className="space-y-6">
          {/* Course Card Template - Add real courses here */}
          <article className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Book className="w-7 h-7 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Course Title
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>Semester • Year</span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Course description and key topics covered.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                    Course Code
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Past Courses */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-primary/20">
          Past Courses
        </h2>

        <div className="space-y-6">
          <article className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Book className="w-7 h-7 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Analytical Chemistry II: Instrumental Analysis
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                    CHEM*3430
                  </span>
                  <span className="text-gray-400">•</span>
                  <span>0.50 credits</span>
                  <span className="text-gray-400">•</span>
                  <span>LEC: 3, LAB: 3</span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Introduction to modern methods of instrumental analysis in analytical chemistry.
                  Focus on trace analysis with methods for identifying, separating, and quantifying
                  trace substances in various states of matter. Develops strong laboratory practices
                  alongside understanding of instrumental chemical analysis principles.
                </p>
                <div className="text-sm text-gray-600">
                  <strong>Prerequisites:</strong> CHEM*2400 or CHEM*2480
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
