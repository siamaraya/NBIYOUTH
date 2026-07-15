import { useState } from 'react'
import { Heart, ChevronDown } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import VideoCard from '../components/VideoCard'
import { CAMPS } from '../data/camps'
import { UNIVERSITIES } from '../data/universities'
import { PLEDGE_LINES } from '../data/site'

const INITIAL_VISIBLE = 9

export default function CampPage() {
  const [showAll, setShowAll] = useState(false)
  const visibleCamps = showAll ? CAMPS : CAMPS.slice(0, INITIAL_VISIBLE)

  return (
    <div className="pb-24">
      <PageHeader
        eyebrow="NBI-Youth Camp"
        title="ค่ายเยาวชนสร้างชาติ"
        subtitle="กิจกรรม 3 วัน 2 คืน บ่มเพาะแนวคิดและอุดมการณ์ความดี ความเก่ง และความกล้า — จัดต่อเนื่องมาแล้ว 18 รุ่นทั่วประเทศ"
      />

      {/* คำปฏิญาณ */}
      <section id="pledge" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 scroll-mt-28">
        <Reveal>
          <div className="relative bg-white rounded-[2.5rem] p-10 md:p-14 shadow-2xl shadow-forest/10 text-center overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 flex">
              <div className="flex-1 bg-teal" />
              <div className="flex-1 bg-sun" />
              <div className="flex-1 bg-coral" />
            </div>
            <Heart size={44} className="text-coral/80 mx-auto mb-6" fill="currentColor" />
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-forest mb-8">
              คำปฏิญาณของเยาวชนสร้างชาติ
            </h2>
            <div className="space-y-4 font-display text-lg md:text-xl leading-relaxed">
              <p className="text-ink/80">{PLEDGE_LINES[0]}</p>
              <p>
                <span className="text-teal font-semibold">เป็นคนดี</span>{' '}
                <span className="text-ink/70">ยึดถือประโยชน์ส่วนรวม มากกว่าส่วนตน</span>
              </p>
              <p>
                <span className="text-sun font-semibold">เป็นคนเก่ง</span>{' '}
                <span className="text-ink/70">ใช้ความรู้ความสามารถที่มี อย่างเต็มศักยภาพ เพื่อส่วนรวม</span>
              </p>
              <p>
                <span className="text-coral font-semibold">เป็นคนกล้า</span>{' '}
                <span className="text-ink/70">กล้ายืนหยัด มีจุดยืนในสิ่งที่ถูกต้องดีงาม</span>
              </p>
              <p className="text-ink/80 pt-2">{PLEDGE_LINES[4]}</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ประมวลภาพค่าย รุ่น 1–18 */}
      <section id="camps" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 scroll-mt-28">
        <SectionHeading
          eyebrow="ประมวลภาพความประทับใจ"
          title="ค่ายเยาวชนสร้างชาติ รุ่น 1–18"
          subtitle="คลิกที่วิดีโอเพื่อรับชมประมวลภาพบรรยากาศของแต่ละรุ่นบน YouTube"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleCamps.map((camp, i) => (
            <Reveal key={camp.youtubeId} delay={(i % 3) * 80}>
              <VideoCard camp={camp} />
            </Reveal>
          ))}
        </div>
        {!showAll && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 bg-forest text-white px-8 py-3.5 rounded-full font-display font-medium hover:bg-moss transition-colors shadow-lg shadow-forest/20"
            >
              ดูครบทั้ง {CAMPS.length} วิดีโอ
              <ChevronDown size={18} />
            </button>
          </div>
        )}
      </section>

      {/* 12 มหาวิทยาลัยระดับโลก */}
      <section id="universities" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 scroll-mt-28">
        <SectionHeading
          eyebrow="ชื่อกลุ่มประจำค่าย"
          title="12 มหาวิทยาลัยระดับโลก"
          subtitle="ชื่อกลุ่มในค่ายนำมาจากมหาวิทยาลัยระดับโลกที่ประสบความสำเร็จด้านการศึกษา สร้างบุคลากรคุณภาพผู้เป็นกำลังสำคัญในการขับเคลื่อนประเทศและโลกใบนี้"
          align="center"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {UNIVERSITIES.map((u, i) => (
            <Reveal key={u.no} delay={(i % 3) * 80}>
              <div className="group bg-white rounded-3xl overflow-hidden shadow-lg shadow-forest/8 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col">
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={u.image}
                    alt={u.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 w-9 h-9 rounded-full bg-forest/90 backdrop-blur-sm text-sun font-display font-semibold flex items-center justify-center text-sm shadow-lg">
                    {u.no}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display text-lg font-semibold text-forest leading-snug">{u.name}</h3>
                  <p className="text-xs font-semibold text-moss tracking-wide mt-1 mb-3">{u.country}</p>
                  <p className="text-sm text-ink/60 leading-relaxed">{u.highlight}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
