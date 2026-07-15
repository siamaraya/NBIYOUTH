interface PageHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
}

export default function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <div className="relative bg-forest text-white overflow-hidden grain">
      {/* decorative blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-moss/50 blur-3xl" />
      <div className="absolute -bottom-32 -left-16 w-80 h-80 rounded-full bg-teal/20 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {eyebrow && (
          <p className="animate-rise text-sun font-semibold text-sm tracking-[0.25em] uppercase mb-3">{eyebrow}</p>
        )}
        <h1 className="animate-rise text-4xl md:text-5xl font-semibold leading-tight" style={{ animationDelay: '80ms' }}>
          {title}
        </h1>
        {subtitle && (
          <p
            className="animate-rise text-white/70 text-lg mt-4 max-w-2xl leading-relaxed"
            style={{ animationDelay: '160ms' }}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* wave divider */}
      <svg className="relative z-10 block w-full h-8 md:h-12 text-cream" viewBox="0 0 1440 48" preserveAspectRatio="none" fill="currentColor">
        <path d="M0,48 C240,8 480,0 720,16 C960,32 1200,44 1440,24 L1440,48 Z" />
      </svg>
    </div>
  )
}
