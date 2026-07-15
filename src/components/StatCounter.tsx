import { useEffect, useRef, useState } from 'react'

interface StatCounterProps {
  value: number
  suffix?: string
  label: string
  accent: 'teal' | 'sun' | 'coral' | 'leaf'
}

const ACCENT: Record<StatCounterProps['accent'], string> = {
  teal: 'text-teal',
  sun: 'text-sun',
  coral: 'text-coral',
  leaf: 'text-sprout',
}

/** Animated count-up stat, triggers on scroll into view */
export default function StatCounter({ value, suffix = '', label, accent }: StatCounterProps) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true
          const duration = 1600
          const start = performance.now()
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            setDisplay(Math.round(eased * value))
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="text-center">
      <div className={`font-display text-4xl md:text-5xl font-semibold ${ACCENT[accent]}`}>
        {display.toLocaleString()}
        {suffix}
      </div>
      <div className="text-white/70 text-sm mt-2 font-medium">{label}</div>
    </div>
  )
}
