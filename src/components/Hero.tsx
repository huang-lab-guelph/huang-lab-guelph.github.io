import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Huang Lab
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced NMR and Structural Biology Research
          </p>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We study molecular mechanisms of protein complexes, particularly large protein assemblies, 
            using advanced Nuclear Magnetic Resonance (NMR) techniques in combination with other 
            structural biology tools such as cryo-Electron Microscopy and Mass Spectrometry.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/research"
              className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              Explore Our Research
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/group"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors"
            >
              Meet Our Team <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Research Focus Areas */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: '3D Protein Structure',
              description: 'High-resolution structural determination',
            },
            {
              title: 'Protein Interactions',
              description: 'Understanding molecular partnerships',
            },
            {
              title: 'Functional Dynamics',
              description: 'Characterizing protein behavior',
            },
            {
              title: 'Therapeutic Design',
              description: 'Drug discovery strategies',
            },
          ].map((focus) => (
            <div
              key={focus.title}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{focus.title}</h3>
              <p className="text-sm text-gray-600">{focus.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
