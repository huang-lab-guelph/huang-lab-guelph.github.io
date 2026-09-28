import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Research', href: '/research' },
  { name: 'Group', href: '/group' },
  { name: 'Publications', href: '/publications' },
  { name: 'Teaching', href: '/teaching' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
  { name: 'LabBuddy', href: '/labbuddy' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-card/80 backdrop-blur-md border-b-2 border-border sticky top-0 z-50 shadow-organic">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 justify-between items-center gap-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <span className="text-2xl lg:text-3xl font-bold text-primary font-serif whitespace-nowrap group-hover:scale-105 transition-transform">
                Huang's Lab
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:gap-x-0.5 lg:gap-x-1">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                end={item.href === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium whitespace-nowrap px-2 lg:px-4 py-2 rounded-lg transition-all ${
                    isActive
                      ? 'text-primary bg-secondary'
                      : 'text-foreground hover:text-primary hover:bg-secondary'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-foreground hover:bg-secondary transition-colors"
              aria-expanded={mobileMenuOpen}
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
                <NavLink
                  key={item.name}
                  to={item.href}
                  end={item.href === '/'}
                  className={({ isActive }) =>
                    `block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'text-primary bg-secondary'
                        : 'text-foreground hover:text-primary hover:bg-secondary'
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
