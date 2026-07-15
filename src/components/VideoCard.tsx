import { Play } from 'lucide-react'
import { youtubeThumb, youtubeUrl, type Camp } from '../data/camps'

export default function VideoCard({ camp }: { camp: Camp }) {
  return (
    <a
      href={youtubeUrl(camp.youtubeId)}
      target="_blank"
      rel="noreferrer"
      className="group block bg-white rounded-3xl overflow-hidden shadow-lg shadow-forest/8 hover:shadow-2xl hover:shadow-forest/15 transition-all duration-300 hover:-translate-y-1.5"
    >
      <div className="relative aspect-video overflow-hidden bg-mint">
        <img
          src={youtubeThumb(camp.youtubeId)}
          alt={camp.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent opacity-70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-coral shadow-xl scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
            <Play size={22} fill="currentColor" className="ml-1" />
          </span>
        </div>
        <span className="absolute top-3 left-3 bg-leaf text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          รุ่นที่ {camp.gen}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display font-medium text-forest leading-snug group-hover:text-moss transition-colors">
          {camp.title}
        </h3>
        {camp.detail && <p className="text-sm text-ink/55 mt-2 leading-relaxed line-clamp-3">{camp.detail}</p>}
      </div>
    </a>
  )
}
