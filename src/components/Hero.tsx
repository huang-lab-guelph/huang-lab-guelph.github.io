import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import p97Image from '../assets/research/p97.png'

export default function Hero() {
  return (
    <div className="relative bg-watercolor-cream overflow-hidden">
      {/* Decorative watercolor spots */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        {/* Hero Content with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-24">
          {/* Left: P97 Protein Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <img
                src={p97Image}
                alt="P97 protein structure illustration"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl mb-2">
              Huang's Lab
            </h1>
            <p className="mt-6 text-2xl text-primary font-serif">
              Advanced NMR and Structural Biology Research
            </p>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              We study molecular mechanisms of protein complexes, particularly large protein assemblies,
              using advanced Nuclear Magnetic Resonance (NMR) techniques in combination with other
              structural biology tools such as cryo-Electron Microscopy and Mass Spectrometry.
            </p>
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-x-6 flex-wrap gap-y-4">
              <Link
                to="/research"
                className="rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-organic hover:shadow-organic-lg hover:scale-105 transition-all flex items-center gap-2"
              >
                Explore Our Research
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/group"
                className="text-base font-semibold leading-6 text-foreground hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-secondary"
              >
                Meet Our Team <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Research Focus Areas */}
        <div className="mt-24 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
          ].map((focus, idx) => (
            <div
              key={focus.title}
              className="group bg-card rounded-2xl p-6 shadow-organic border-2 border-border hover:border-primary/30 hover:shadow-organic-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {focus.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{focus.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
