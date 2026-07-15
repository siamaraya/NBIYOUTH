import type { LucideIcon } from 'lucide-react'

interface ComingSoonProps {
  icon: LucideIcon
  title: string
  desc: string
}

/** Placeholder block for sections awaiting content updates */
export default function ComingSoon({ icon: Icon, title, desc }: ComingSoonProps) {
  return (
    <div className="bg-white rounded-3xl shadow-lg shadow-forest/8 p-10 md:p-14 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1.5 flex">
        <div className="flex-1 bg-teal/30" />
        <div className="flex-1 bg-sun/30" />
        <div className="flex-1 bg-coral/30" />
      </div>
      <div className="w-20 h-20 rounded-full bg-mint text-moss flex items-center justify-center mx-auto mb-6">
        <Icon size={36} />
      </div>
      <h3 className="font-display text-2xl font-medium text-forest mb-3">{title}</h3>
      <p className="text-ink/55 max-w-md mx-auto leading-relaxed mb-6">{desc}</p>
      <span className="inline-block bg-mint text-moss text-sm font-semibold px-5 py-2 rounded-full">
        อยู่ระหว่างอัปเดตข้อมูล
      </span>
    </div>
  )
}
