import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CampPage from './pages/CampPage'
import ClubPage from './pages/ClubPage'
import CCSPage from './pages/CCSPage'
import CouncilPage from './pages/CouncilPage'
import NewsPage from './pages/NewsPage'
import PortfolioPage from './pages/PortfolioPage'
import CoursesPage from './pages/CoursesPage'

/** Scroll to top on route change; honor #hash anchors */
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <ScrollManager />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/camp" element={<CampPage />} />
          <Route path="/club" element={<ClubPage />} />
          <Route path="/ccs" element={<CCSPage />} />
          <Route path="/council" element={<CouncilPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
