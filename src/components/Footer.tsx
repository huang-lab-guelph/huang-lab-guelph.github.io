import { Twitter, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-secondary border-t-2 border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Lab Info */}
          <div>
            <h3 className="text-xl font-serif font-bold text-primary mb-4">Huang's Lab</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Advanced NMR and Structural Biology Research
            </p>
            <p className="text-sm text-muted-foreground mt-3 font-medium">
              University of Guelph
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact</h3>
            <address className="not-italic text-sm text-muted-foreground space-y-2 leading-relaxed">
              <p>MacN-129, 43 Reynolds Walk</p>
              <p>Guelph, ON N1G 1Y4</p>
              <p className="mt-3">
                <a
                  href="mailto:rhuang08@uoguelph.ca"
                  className="text-primary hover:underline hover:text-primary/80 transition-all font-medium"
                >
                  rhuang08@uoguelph.ca
                </a>
              </p>
            </address>
          </div>

          {/* Social & Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex gap-3">
              <a
                href="https://x.com/Ruihuangchem"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-organic hover:shadow-organic-lg"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/rui-huang-82108565/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-organic hover:shadow-organic-lg"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/huang-lab-guelph"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-organic hover:shadow-organic-lg"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t-2 border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Huang's Lab, University of Guelph. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
