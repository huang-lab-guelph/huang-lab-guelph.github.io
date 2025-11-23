import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Research', href: '/research' },
  { name: 'Group', href: '/group' },
  { name: 'Publications', href: '/publications' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
  { name: 'Useful Links', href: '/useful-links' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-card/80 backdrop-blur-md border-b-2 border-border sticky top-0 z-50 shadow-organic">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <span className="text-3xl font-bold text-primary font-serif group-hover:scale-105 transition-transform">
                Huang's Lab
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:gap-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-foreground hover:text-primary hover:bg-secondary px-4 py-2 rounded-lg transition-all"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-foreground hover:bg-secondary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
