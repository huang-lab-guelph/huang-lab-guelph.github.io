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
    <section className="bg-watercolor-cream py-20" aria-labelledby="labbuddy-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl bg-card rounded-2xl border-2 border-border shadow-organic p-6 sm:p-10">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <BookOpen className="h-6 w-6 text-primary" aria-hidden="true" />
            </div>
            <div>
              <h2 id="labbuddy-heading" className="text-3xl text-foreground">
                LabBuddy
              </h2>
              <p className="text-sm font-medium text-muted-foreground">
                Internal workspace for lab members
              </p>
            </div>
          </div>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground font-serif">
            LabBuddy is a separate workspace where the lab keeps its day-to-day working knowledge.
            It is early, and we are building it one piece at a time.
          </p>

          <ul className="mt-8 space-y-4">
            {capabilities.map((capability) => (
              <li
                key={capability.title}
                className="flex flex-col gap-2 rounded-xl border border-border bg-background p-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
              >
                <div>
                  <h3 className="text-lg text-foreground">{capability.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground font-serif">
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

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="https://lab-buddy.juan1505.workers.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-shrink-0 items-center justify-center gap-2 self-start whitespace-nowrap rounded-xl bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-organic transition-all hover:shadow-organic-lg hover:-translate-y-0.5 sm:self-auto"
            >
              Open LabBuddy
              <ExternalLink className="h-5 w-5" aria-hidden="true" />
            </a>
            <p className="flex items-start gap-2 text-sm text-muted-foreground">
              <Lock className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
              <span>
                Sign-in is limited to lab members. You will be asked to sign in with an approved lab
                email address, and other accounts will not be granted access.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
