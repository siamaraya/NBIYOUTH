import { useState } from 'react'
import { MAP_PINS, type MapPin } from '../data/network'

/**
 * แผนที่ประเทศไทยแบบ SVG (เส้นขอบโดยสังเขป) พร้อมหมุดจังหวัดเครือข่าย
 * pilot = จังหวัดนำร่อง (หมุดใหญ่ coral, มีจำนวนชมรม) · camp = จังหวัดที่เคยจัดค่าย (หมุด teal)
 */
export default function ThailandMap() {
  const [active, setActive] = useState<MapPin | null>(null)

  return (
    <div className="relative">
      <svg viewBox="0 0 520 910" className="w-full h-auto max-h-[34rem] mx-auto" role="img" aria-label="แผนที่เครือข่ายเยาวชนสร้างชาติทั่วประเทศ">
        {/* เงาพื้น */}
        <path d={THAILAND_PATH} className="fill-forest/10" transform="translate(6 10)" />
        {/* ตัวแผนที่ */}
        <path d={THAILAND_PATH} className="fill-mint stroke-leaf/60" strokeWidth="2.5" strokeLinejoin="round" />

        {MAP_PINS.map((pin) => {
          const isPilot = pin.type === 'pilot'
          const isActive = active?.province === pin.province
          return (
            <g
              key={pin.province}
              transform={`translate(${pin.x} ${pin.y})`}
              className="cursor-pointer"
              onMouseEnter={() => setActive(pin)}
              onMouseLeave={() => setActive(null)}
              onClick={() => setActive(isActive ? null : pin)}
            >
              {isPilot && (
                <circle r="20" className="fill-coral/25">
                  <animate attributeName="r" values="14;26;14" dur="2.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.6;0;0.6" dur="2.5s" repeatCount="indefinite" />
                </circle>
              )}
              <circle
                r={isPilot ? 13 : 8}
                className={`${isPilot ? 'fill-coral' : 'fill-teal'} stroke-white transition-transform ${isActive ? 'scale-125' : ''}`}
                strokeWidth="3"
                style={{ transformOrigin: 'center', transformBox: 'fill-box' }}
              />
              {isPilot && (
                <text y="4.5" textAnchor="middle" className="fill-white font-bold pointer-events-none" style={{ fontSize: 11 }}>
                  ★
                </text>
              )}
            </g>
          )
        })}
      </svg>

      {/* tooltip */}
      {active && (
        <div
          className="absolute z-10 bg-forest text-white rounded-2xl px-5 py-3.5 shadow-2xl shadow-forest/40 pointer-events-none animate-rise"
          style={{
            left: `${(active.x / 520) * 100}%`,
            top: `${(active.y / 910) * 100}%`,
            transform: 'translate(-50%, -130%)',
            maxWidth: '15rem',
          }}
        >
          <div className="font-display font-semibold whitespace-nowrap">{active.province}</div>
          {active.clubs && <div className="text-sun font-display text-sm">{active.clubs} ชมรมเป้าหมาย</div>}
          {active.note && <div className="text-white/70 text-xs mt-0.5">{active.note}</div>}
        </div>
      )}

      {/* legend */}
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mt-4 text-sm">
        <span className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-coral shadow-sm" />
          <span className="text-ink/70">จังหวัดนำร่องเครือข่ายชมรม</span>
        </span>
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-teal shadow-sm" />
          <span className="text-ink/70">จังหวัดที่จัดค่ายเยาวชนสร้างชาติ</span>
        </span>
      </div>
      <p className="text-center text-xs text-ink/40 mt-2">แตะหรือชี้ที่หมุดเพื่อดูรายละเอียด · ตำแหน่งโดยสังเขป</p>
    </div>
  )
}

// เส้นขอบประเทศไทยอย่างง่าย (แปลงจากพิกัดภูมิศาสตร์โดยประมาณ)
const THAILAND_PATH = `
M 174 12
L 204 18 L 232 60 L 252 96 L 270 168 L 342 162
L 400 172 L 468 192 L 462 246 L 490 290 L 516 318
L 510 336 L 460 360 L 420 372 L 372 396 L 330 414
L 318 448 L 306 480 L 330 510 L 354 534 L 340 546
L 300 516 L 258 474 L 234 438 L 216 426 L 195 450
L 177 480 L 168 528 L 150 570 L 132 606 L 138 690
L 156 714 L 180 732 L 198 768 L 216 804 L 258 822
L 306 876 L 282 894 L 246 891 L 210 864 L 186 840
L 156 786 L 120 750 L 90 732 L 96 636 L 108 606
L 132 516 L 120 462 L 78 396 L 84 318 L 114 276
L 90 234 L 66 180 L 48 126 L 72 60 L 132 36 Z
`
