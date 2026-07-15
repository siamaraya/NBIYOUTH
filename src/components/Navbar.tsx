import { asset } from '../lib/asset'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { NAV_ITEMS } from '../data/site'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg shadow-forest/10' : 'bg-white'
      }`}
    >
      {/* tri-color brand strip */}
      <div className="h-1.5 flex">
        <div className="flex-1 bg-teal" />
        <div className="flex-1 bg-sun" />
        <div className="flex-1 bg-coral" />
        <div className="flex-[3] bg-leaf" />
        <div className="flex-[2] bg-forest" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <img
              src={asset('images/logo.png')}
              alt="NBI-Youth Club"
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-display font-semibold text-lg text-forest">เยาวชนสร้างชาติ</span>
              <span className="text-[11px] font-semibold tracking-[0.2em] text-moss uppercase">NBI-Youth Club</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => (
              <div key={item.path} className="relative group">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-1 px-2.5 py-2 rounded-xl text-[13px] font-medium transition-colors ${
                      isActive ? 'text-forest bg-mint' : 'text-ink/70 hover:text-forest hover:bg-mint/60'
                    }`
                  }
                >
                  {item.label}
                  {item.sub && <ChevronDown size={13} className="opacity-50 group-hover:rotate-180 transition-transform duration-300" />}
                </NavLink>
                {item.sub && (
                  <div className="absolute left-0 top-full pt-2 opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                    <div className="bg-white rounded-2xl shadow-xl shadow-forest/15 py-2 min-w-52 overflow-hidden">
                      {item.sub.map((s) => (
                        <Link
                          key={s.label}
                          to={`${item.path}${s.hash ?? ''}`}
                          className="block px-5 py-2.5 text-sm text-ink/70 hover:text-forest hover:bg-mint transition-colors"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-2.5 rounded-xl bg-mint text-forest"
            aria-label="เปิดเมนู"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="xl:hidden absolute w-full bg-white shadow-2xl shadow-forest/20 max-h-[calc(100vh-5.5rem)] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl font-medium ${isActive ? 'bg-mint text-forest' : 'text-ink/70'}`
              }
            >
              หน้าแรก
            </NavLink>
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl font-medium ${isActive ? 'bg-mint text-forest' : 'text-ink/70'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
