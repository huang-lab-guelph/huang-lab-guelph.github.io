import { Link } from 'react-router-dom'
import { Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Lab Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Huang Lab</h3>
            <p className="text-sm text-gray-600">
              Advanced NMR and Structural Biology Research
            </p>
            <p className="text-sm text-gray-600 mt-2">
              University of Guelph
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
            <address className="not-italic text-sm text-gray-600 space-y-1">
              <p>MacN-129, 43 Reynolds Walk</p>
              <p>Guelph, ON N1G 1Y4</p>
              <p className="mt-2">
                <a href="mailto:rhuang08@uoguelph.ca" className="hover:text-primary transition-colors">
                  rhuang08@uoguelph.ca
                </a>
              </p>
            </address>
          </div>

          {/* Social & Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect</h3>
            <div className="flex gap-4 mb-4">
              <a 
                href="https://twitter.com/huanglab" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/rui-huang" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="text-sm text-gray-600 space-y-1">
              <Link to="/useful-links" className="block hover:text-primary transition-colors">
                Useful Links
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Huang Lab, University of Guelph. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
