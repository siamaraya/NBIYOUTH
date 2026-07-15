import { asset } from '../lib/asset'
import { Link } from 'react-router-dom'
import { ArrowRight, Target, Users, Lightbulb, Building2, Quote, Play } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import StatCounter from '../components/StatCounter'
import VideoCard from '../components/VideoCard'
import { PILLARS } from '../data/site'
import { CAMPS } from '../data/camps'
import { UNIVERSITIES } from '../data/universities'

const PILLAR_STYLE: Record<string, { bg: string; text: string; ring: string }> = {
  teal: { bg: 'bg-teal', text: 'text-teal', ring: 'hover:shadow-teal/25' },
  sun: { bg: 'bg-sun', text: 'text-sun', ring: 'hover:shadow-sun/25' },
  coral: { bg: 'bg-coral', text: 'text-coral', ring: 'hover:shadow-coral/25' },
}

export default function HomePage() {
  return (
    <div>
      {/* ================= HERO ================= */}
      <section className="relative bg-forest text-white overflow-hidden grain">
        <div className="absolute -top-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-moss/60 blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-[26rem] h-[26rem] rounded-full bg-teal/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-sun/10 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 md:pt-28 md:pb-36">
          <div className="max-w-3xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium text-sprout mb-8">
                <span className="w-2 h-2 rounded-full bg-sprout animate-pulse" />
                Nation-Building Institute · สถาบันการสร้างชาติ
              </div>
            </Reveal>

            <h1 className="font-display font-semibold leading-[1.05]">
              <Reveal delay={80}>
                <span className="block text-5xl md:text-7xl">เยาวชน</span>
              </Reveal>
              <Reveal delay={160}>
                <span className="block text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-sprout via-teal to-sun">
                  สร้างชาติ
                </span>
              </Reveal>
            </h1>

            <Reveal delay={260}>
              <p className="mt-8 text-lg md:text-xl text-white/70 leading-relaxed max-w-xl">
                วางรากฐานแนวคิด ความรู้ และค่านิยม ให้เยาวชนไทยใช้ชีวิตอย่างมีคุณค่าสูงสุด — เป็น{' '}
                <strong className="text-teal font-semibold">คนดี</strong>{' '}
                <strong className="text-sun font-semibold">คนเก่ง</strong>{' '}
                <strong className="text-coral font-semibold">คนกล้า</strong>{' '}
                เพื่อเป็นกำลังสำคัญของชาติในอนาคต
              </p>
            </Reveal>

            <Reveal delay={360}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/about"
                  className="group inline-flex items-center justify-center gap-2 bg-sun text-forest px-8 py-4 rounded-full font-display font-medium text-lg shadow-xl shadow-sun/25 hover:shadow-2xl hover:shadow-sun/40 hover:-translate-y-0.5 transition-all"
                >
                  รู้จักกับเรา
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/camp"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-display font-medium text-lg hover:bg-white/20 transition-all"
                >
                  <Play size={18} fill="currentColor" />
                  ชมค่ายเยาวชน รุ่น 1–18
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* floating logo card */}
        <div className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2 z-10 animate-float">
          <div className="bg-white rounded-[2rem] p-8 shadow-2xl shadow-black/30 rotate-3">
            <img src={asset('images/logo.png')} alt="NBI-Youth Club" className="w-72 h-auto" />
          </div>
        </div>

        <svg className="relative z-10 block w-full h-10 md:h-16 text-cream" viewBox="0 0 1440 48" preserveAspectRatio="none" fill="currentColor">
          <path d="M0,48 C240,8 480,0 720,16 C960,32 1200,44 1440,24 L1440,48 Z" />
        </svg>
      </section>

      {/* ================= 3 PILLARS ================= */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="อุดมการณ์ของเรา"
            title="คนดี · คนเก่ง · คนกล้า"
            subtitle="สามเสาหลักในการพัฒนาเยาวชนของสถาบันการสร้างชาติ ปลูกฝังผ่านค่าย ชมรม และโครงการต่อเนื่อง"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {PILLARS.map((p, i) => {
              const s = PILLAR_STYLE[p.color]
              return (
                <Reveal key={p.key} delay={i * 120}>
                  <div
                    className={`group relative bg-white rounded-[2rem] p-8 md:p-10 shadow-xl shadow-forest/6 hover:shadow-2xl ${s.ring} transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full`}
                  >
                    <div className={`absolute top-0 left-0 w-full h-1.5 ${s.bg}`} />
                    <div
                      className={`w-16 h-16 rounded-2xl ${s.bg} text-white flex items-center justify-center font-display text-2xl font-semibold mb-6 rotate-3 group-hover:rotate-6 group-hover:scale-110 transition-transform shadow-lg`}
                    >
                      {i + 1}
                    </div>
                    <h3 className="font-display text-3xl font-semibold text-forest mb-1">{p.title}</h3>
                    <p className={`font-display font-medium ${s.text} mb-4`}>
                      {p.thai} — {p.en}
                    </p>
                    <p className="text-ink/60 leading-relaxed">{p.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================= 4 PROGRAMS ================= */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="เส้นทางเยาวชนสร้างชาติ"
            title="4 กลไกขับเคลื่อน"
            subtitle="จากค่ายบ่มเพาะอุดมการณ์ สู่ชมรมในสถานศึกษา โครงการนวัตกรรมสังคม และสภาเยาวชนระดับประเทศ"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                to: '/camp',
                icon: Target,
                title: 'ค่ายเยาวชนสร้างชาติ',
                desc: 'กิจกรรม 3 วัน 2 คืน บ่มเพาะแนวคิดและอุดมการณ์ ดี เก่ง กล้า',
                accent: 'bg-teal',
              },
              {
                to: '/club',
                icon: Users,
                title: 'ชมรมเยาวชนสร้างชาติ',
                desc: 'พื้นที่เรียนรู้และพัฒนาตนเองต่อเนื่องในสถานศึกษาทั่วประเทศ',
                accent: 'bg-leaf',
              },
              {
                to: '/ccs',
                icon: Lightbulb,
                title: 'โครงการ CCS',
                desc: 'Cap-Corner Stone — นวัตกรรมสร้างสรรค์สังคมด้วยหลัก 3I',
                accent: 'bg-sun',
              },
              {
                to: '/council',
                icon: Building2,
                title: 'สภาเยาวชนสร้างชาติ',
                desc: 'เครือข่ายผู้นำเยาวชน 4 ระดับการศึกษา ทั่วประเทศ',
                accent: 'bg-coral',
              },
            ].map((item, i) => (
              <Reveal key={item.to} delay={i * 100}>
                <Link
                  to={item.to}
                  className="group flex flex-col h-full bg-cream rounded-3xl p-7 hover:bg-forest transition-colors duration-300 shadow-md shadow-forest/5"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl ${item.accent} text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <item.icon size={26} />
                  </div>
                  <h3 className="font-display text-xl font-medium text-forest group-hover:text-white transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink/60 group-hover:text-white/70 transition-colors leading-relaxed flex-grow">
                    {item.desc}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-moss group-hover:text-sun transition-colors">
                    ดูรายละเอียด
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="relative bg-forest py-16 md:py-20 overflow-hidden grain">
        <div className="absolute -top-20 right-1/4 w-80 h-80 rounded-full bg-moss/50 blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            <StatCounter value={18} suffix=" รุ่น" label="ค่ายเยาวชนสร้างชาติ" accent="teal" />
            <StatCounter value={350} suffix="+" label="โรงเรียนเข้าร่วมโครงการ" accent="sun" />
            <StatCounter value={1050} suffix=" คน" label="เยาวชนต่อรุ่น" accent="coral" />
            <StatCounter value={4} suffix=" ระดับ" label="สภาเยาวชนสร้างชาติ" accent="leaf" />
          </div>
        </div>
      </section>

      {/* ================= LATEST CAMPS ================= */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <SectionHeading eyebrow="ประมวลภาพล่าสุด" title="ค่ายเยาวชนสร้างชาติ" />
            <Link
              to="/camp"
              className="inline-flex items-center gap-2 font-display font-medium text-moss hover:text-forest transition-colors mb-10"
            >
              ดูทั้งหมด 18 รุ่น
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CAMPS.slice(0, 3).map((camp, i) => (
              <Reveal key={camp.youtubeId} delay={i * 100}>
                <VideoCard camp={camp} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= UNIVERSITY TICKER ================= */}
      <section className="py-12 bg-white overflow-hidden">
        <p className="text-center text-moss font-semibold text-xs tracking-[0.25em] uppercase mb-8">
          12 มหาวิทยาลัยระดับโลก — ชื่อกลุ่มประจำค่าย
        </p>
        <div className="relative">
          <div className="flex w-max animate-ticker gap-4">
            {[...UNIVERSITIES, ...UNIVERSITIES].map((u, i) => (
              <div
                key={`${u.no}-${i}`}
                className="flex items-center gap-3 bg-cream rounded-full pl-2 pr-6 py-2 shadow-sm shrink-0"
              >
                <img src={u.image} alt={u.name} className="w-12 h-12 rounded-full object-cover" loading="lazy" />
                <span className="font-display font-medium text-forest whitespace-nowrap">{u.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= QUOTE ================= */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-teal/8 blur-3xl" />
        <div className="absolute bottom-0 right-10 w-72 h-72 rounded-full bg-sun/10 blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <Reveal>
            <Quote size={48} className="text-leaf/40 mx-auto mb-8 rotate-180" />
            <blockquote className="font-display text-2xl md:text-[2rem] font-medium text-forest leading-relaxed md:leading-relaxed">
              เยาวชนเป็นกลุ่มคนที่มีความสำคัญต่อความมั่นคงของชาติ ทั้งในปัจจุบันและอนาคต
              การพัฒนาเยาวชนจึงเป็นการให้ความสำคัญกับอนาคต และความเป็นไปของชาติบ้านเมือง
            </blockquote>
            <div className="mt-8 flex gap-1.5 justify-center">
              <span className="h-1.5 w-10 rounded-full bg-teal" />
              <span className="h-1.5 w-5 rounded-full bg-sun" />
              <span className="h-1.5 w-2.5 rounded-full bg-coral" />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
