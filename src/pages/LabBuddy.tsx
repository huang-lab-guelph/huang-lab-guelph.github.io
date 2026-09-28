import { BookOpen, Clock, ExternalLink, Lock } from 'lucide-react'

const capabilities = [
  {
    title: 'Knowledge base',
    description:
      'Protocols, instrument how-tos and onboarding notes, written and kept current by lab members inside the app.',
    status: 'Being built',
  },
  {
    title: 'Project tracking',
    description: 'A shared view of what each project needs next and who is carrying it.',
    status: 'Planned',
  },
  {
    title: 'Shared tooling',
    description: 'Common resources and small utilities the lab keeps reaching for.',
    status: 'Planned',
  },
]

export default function LabBuddy() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <BookOpen className="h-7 w-7 text-primary" aria-hidden="true" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-foreground">LabBuddy</h1>
            <p className="text-sm font-medium text-muted-foreground">
              Internal workspace for lab members
            </p>
          </div>
        </div>
        <p className="text-xl leading-relaxed text-muted-foreground font-serif">
          LabBuddy is a separate workspace where the lab keeps its day-to-day working knowledge.
          It is early, and we are building it one piece at a time.
        </p>
      </div>

      {/* Capabilities */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-8 pb-4 border-b-2 border-primary/20">
          What it does
        </h2>

        <ul className="space-y-6">
          {capabilities.map((capability) => (
            <li
              key={capability.title}
              className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6 shadow-organic sm:flex-row sm:items-start sm:justify-between sm:gap-6"
            >
              <div>
                <h3 className="text-xl font-semibold text-foreground">{capability.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground font-serif">
                  {capability.description}
                </p>
              </div>
              <span className="inline-flex flex-shrink-0 items-center gap-1.5 self-start rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                {capability.status}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Access */}
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-8 pb-4 border-b-2 border-primary/20">
          Access
        </h2>

        <div className="rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-6 sm:p-8">
          <p className="flex items-start gap-3 leading-relaxed text-muted-foreground font-serif">
            <Lock className="mt-1 h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
            <span>
              Sign-in is limited to lab members. You will be asked to sign in with an approved lab
              email address, and other accounts will not be granted access.
            </span>
          </p>
          <a
            href="https://lab-buddy.juan1505.workers.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-organic transition-all hover:shadow-organic-lg hover:-translate-y-0.5"
          >
            Open LabBuddy
            <ExternalLink className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  )
}
