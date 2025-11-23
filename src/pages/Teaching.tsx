import { Book, GraduationCap, Calendar } from 'lucide-react'

export default function Teaching() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <GraduationCap className="w-10 h-10 text-primary" />
          <h1 className="text-4xl font-bold text-gray-900">Teaching</h1>
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

      {/* Teaching Philosophy */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-primary/20">
          Teaching Philosophy
        </h2>
        <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
          <p className="text-gray-700 leading-relaxed mb-4">
            Content about teaching philosophy and approach to education.
          </p>
        </div>
      </section>

      {/* Past Courses */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-primary/20">
          Past Courses
        </h2>
        <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            Information about previously taught courses will be added here.
          </p>
        </div>
      </section>
    </div>
  )
}
