interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left' }: SectionHeadingProps) {
  const centered = align === 'center'
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <p className="text-moss font-semibold text-xs tracking-[0.25em] uppercase mb-2">{eyebrow}</p>
      )}
      <h2 className="text-3xl md:text-4xl font-semibold text-forest leading-snug">{title}</h2>
      <div className={`mt-4 flex gap-1.5 ${centered ? 'justify-center' : ''}`}>
        <span className="h-1.5 w-10 rounded-full bg-teal" />
        <span className="h-1.5 w-5 rounded-full bg-sun" />
        <span className="h-1.5 w-2.5 rounded-full bg-coral" />
      </div>
      {subtitle && <p className={`text-ink/60 mt-4 leading-relaxed ${centered ? 'max-w-2xl mx-auto' : 'max-w-3xl'}`}>{subtitle}</p>}
    </div>
  )
}
