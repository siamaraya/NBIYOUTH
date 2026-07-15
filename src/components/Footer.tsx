import { asset } from '../lib/asset'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube, MessageCircle, Mail, Globe, MapPin } from 'lucide-react'
import { NAV_ITEMS, SOCIALS } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-forest text-white relative overflow-hidden">
      {/* tri-color strip */}
      <div className="h-1.5 flex">
        <div className="flex-1 bg-teal" />
        <div className="flex-1 bg-sun" />
        <div className="flex-1 bg-coral" />
        <div className="flex-[3] bg-leaf" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="bg-white rounded-2xl p-3 inline-block mb-5 shadow-lg shadow-black/20">
              <img src={asset('images/logo.png')} alt="NBI-Youth Club" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              สถาบันการสร้างชาติ (Nation-Building Institute) มุ่งพัฒนาเยาวชนให้เป็น คนดี คนเก่ง คนกล้า
              เพื่อเป็นกำลังสำคัญในการสร้างชาติและพัฒนาสังคมอย่างยั่งยืน
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-5 text-sprout">เมนูหลัก</h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_ITEMS.slice(0, 4).map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-white/70 hover:text-sun transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-5 text-sprout">เมนูอื่น ๆ</h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_ITEMS.slice(4).map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-white/70 hover:text-sun transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-5 text-sprout">ติดต่อเรา</h3>
            <ul className="space-y-3.5 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin size={17} className="text-leaf mt-0.5 shrink-0" />
                <span>มูลนิธิสถาบันการสร้างชาติ ประเทศไทย</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe size={17} className="text-leaf shrink-0" />
                <span>www.nbiyouth.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={17} className="text-leaf shrink-0" />
                <a href={`mailto:${SOCIALS.email}`} className="hover:text-sun transition-colors">
                  {SOCIALS.email}
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
              <a
                href={SOCIALS.facebook.url}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href={SOCIALS.instagram.url}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-coral transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href={SOCIALS.youtube.url}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-coral transition-colors"
              >
                <Youtube size={18} />
              </a>
              <a
                href={SOCIALS.line.url}
                target="_blank"
                rel="noreferrer"
                aria-label="Line"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-leaf transition-colors"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-white/50 shadow-[0_-1px_0_rgba(255,255,255,0.1)]">
          <p>© {new Date().getFullYear()} NBI-Youth Club · เยาวชนสร้างชาติ</p>
          <p className="font-medium tracking-wide">สถาบันการสร้างชาติ · Nation-Building Institute</p>
        </div>
      </div>
    </footer>
  )
}
