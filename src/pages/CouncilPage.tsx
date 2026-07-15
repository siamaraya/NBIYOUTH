import { asset } from '../lib/asset'
import { ImageIcon, FolderKanban, Quote, Crown, Users2, FileText, Sparkles, Rocket, Megaphone } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import ComingSoon from '../components/ComingSoon'
import { COUNCIL_ROLES } from '../data/network'

const ROLE_ICONS = [Crown, Users2, FileText, Sparkles, Rocket, Megaphone]
const ROLE_COLORS = ['bg-coral', 'bg-teal', 'bg-lagoon', 'bg-sun', 'bg-leaf', 'bg-moss']

const LEVELS = [
  { name: 'ระดับมัธยมศึกษาตอนต้น', color: 'bg-teal' },
  { name: 'ระดับมัธยมศึกษาตอนปลาย', color: 'bg-sun' },
  { name: 'ระดับอาชีวศึกษา', color: 'bg-coral' },
  { name: 'ระดับอุดมศึกษา', color: 'bg-leaf' },
]

const PHASES = [
  {
    step: 'ระยะที่ 1',
    title: 'การเป็นเยาวชนสร้างชาติ',
    items: [
      'ประชุมเปิดตัวโครงการร่วมกับผู้บริหารและครูอาจารย์ของสถานศึกษา',
      'จัดค่ายเยาวชนสร้างชาติ 3 วัน 2 คืน เรียนรู้การเป็นคนดี คนเก่ง คนกล้า และการทำโครงการ CCS',
      'จัดตั้งชมรมเยาวชนสร้างชาติในสถาบันการศึกษาของตนเอง',
    ],
  },
  {
    step: 'ระยะที่ 2',
    title: 'การจัดตั้งสภาเยาวชนสร้างชาติประจำจังหวัด',
    items: [
      'คัดเลือกแกนนำที่ผ่านค่ายเยาวชนสร้างชาติ เป็นกรรมการสภาเยาวชนสร้างชาติ',
      'ขยายผลให้สมาชิกชมรมเยาวชนสร้างชาติ สมัครเป็นสมาชิกสภาเยาวชนสร้างชาติ',
    ],
  },
]

export default function CouncilPage() {
  return (
    <div className="pb-24">
      <PageHeader
        eyebrow="NBI-Youth Council"
        title="สภาเยาวชนสร้างชาติ"
        subtitle="การรวมตัวของเยาวชนเพื่อสร้างชุมชนที่ใช้ชีวิตอย่างมีคุณค่าสูงสุด โดยยึดหลักอุดมการณ์อารยะในการสร้างชาติ"
      />

      {/* 4 ระดับ + quote */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHeading eyebrow="โครงสร้าง" title="สภาเยาวชนสร้างชาติ 4 ระดับ" />
            <div className="space-y-4">
              {LEVELS.map((level, i) => (
                <Reveal key={level.name} delay={i * 90}>
                  <div className="flex items-center gap-5 bg-white rounded-3xl p-5 shadow-lg shadow-forest/6 hover:shadow-xl hover:translate-x-1 transition-all">
                    <span
                      className={`w-12 h-12 rounded-2xl ${level.color} text-white font-display font-semibold text-xl flex items-center justify-center shadow-md shrink-0`}
                    >
                      {i + 1}
                    </span>
                    <span className="font-display text-lg font-medium text-forest">{level.name}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={150}>
            <div className="relative bg-forest text-white rounded-[2.5rem] p-10 md:p-12 overflow-hidden grain shadow-2xl shadow-forest/25">
              <Quote size={90} className="absolute top-6 right-6 text-white/5 rotate-180" />
              <p className="relative z-10 font-display text-xl leading-relaxed text-white/90">
                สภาเยาวชนสร้างชาติ รวมตัวกันเพื่อสร้างชุมชนเยาวชนที่ใช้ชีวิตอย่างมีคุณค่าสูงสุด
                ยึดหลักอุดมการณ์อารยะในการสร้างชาติ และมีวิสัยทัศน์ที่อารยะ ในการเป็นเยาวชนที่{' '}
                <span className="text-teal font-semibold">ดี</span>{' '}
                <span className="text-sun font-semibold">เก่ง</span>{' '}
                <span className="text-coral font-semibold">กล้า</span>{' '}
                เพื่อเป็นคนที่จะพัฒนาประเทศชาติ
              </p>
              <div className="mt-8 flex gap-1.5">
                <span className="h-1.5 w-10 rounded-full bg-teal" />
                <span className="h-1.5 w-5 rounded-full bg-sun" />
                <span className="h-1.5 w-2.5 rounded-full bg-coral" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* มิติการพัฒนา — Thailand map graphic */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <SectionHeading
          eyebrow="พันธกิจเยาวชน"
          title="มิติการพัฒนาของสภาเยาวชน"
          subtitle="สภาเยาวชนสร้างชาติมุ่งพัฒนาเยาวชนในชุมชนตามคำปฏิญาณ เพื่อทำพันธกิจให้เกิดประโยชน์สูงสุดต่อส่วนรวมและประเทศชาติ ครอบคลุมทุกมิติการพัฒนา"
          align="center"
        />
        <Reveal>
          <div className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-xl shadow-forest/8">
            <img
              src={asset('images/council-map.png')}
              alt="มิติการพัฒนาของสภาเยาวชนสร้างชาติ — เศรษฐกิจ สังคม สวัสดิการ การศึกษา สิ่งแวดล้อม และอื่น ๆ ทั่วประเทศไทย"
              className="w-full h-auto max-w-4xl mx-auto"
              loading="lazy"
            />
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {[
                { name: 'เศรษฐกิจ', color: 'bg-teal/10 text-teal' },
                { name: 'สังคม', color: 'bg-lagoon/10 text-lagoon' },
                { name: 'สวัสดิการ', color: 'bg-coral/10 text-coral' },
                { name: 'การศึกษา', color: 'bg-sun/15 text-[#b07d13]' },
                { name: 'สิ่งแวดล้อม', color: 'bg-leaf/10 text-moss' },
                { name: 'อื่น ๆ', color: 'bg-ink/5 text-ink/60' },
              ].map((d) => (
                <span key={d.name} className={`px-5 py-2 rounded-full font-display font-medium text-sm ${d.color}`}>
                  {d.name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* การดำเนินการ 2 ระยะ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <SectionHeading eyebrow="การดำเนินการ" title="เส้นทางสู่สภาเยาวชนสร้างชาติ" />
        <div className="space-y-8">
          {PHASES.map((phase, pi) => (
            <Reveal key={phase.step} delay={pi * 120}>
              <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl shadow-forest/8 relative overflow-hidden">
                <div className={`absolute top-0 left-0 h-full w-1.5 ${pi === 0 ? 'bg-teal' : 'bg-coral'}`} />
                <span
                  className={`inline-block text-white text-sm font-display font-medium px-4 py-1.5 rounded-full mb-4 ${
                    pi === 0 ? 'bg-teal' : 'bg-coral'
                  }`}
                >
                  {phase.step}
                </span>
                <h3 className="font-display text-2xl font-semibold text-forest mb-5">{phase.title}</h3>
                <ol className="space-y-3">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-ink/70 leading-relaxed">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-mint text-moss text-xs font-bold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ทำเนียบสภา — โครงสร้างกรรมการ */}
      <section id="directory" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 scroll-mt-28">
        <SectionHeading
          eyebrow="ทำเนียบสภา"
          title="โครงสร้างกรรมการสภาเยาวชนประจำจังหวัด"
          subtitle="กรรมการสภาคัดเลือกจากแกนนำที่ผ่านค่ายเยาวชนสร้างชาติ — รายชื่อกรรมการแต่ละจังหวัดจะประกาศผ่านช่องทางทางการของสถาบันฯ"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COUNCIL_ROLES.map((r, i) => {
            const Icon = ROLE_ICONS[i]
            return (
              <Reveal key={r.role} delay={(i % 3) * 90}>
                <div className="group bg-white rounded-3xl p-7 shadow-lg shadow-forest/6 hover:shadow-2xl hover:-translate-y-1.5 transition-all h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <span
                      className={`w-12 h-12 rounded-2xl ${ROLE_COLORS[i]} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}
                    >
                      <Icon size={22} />
                    </span>
                    <h3 className="font-display text-lg font-semibold text-forest leading-snug">{r.role}</h3>
                  </div>
                  <p className="text-sm text-ink/60 leading-relaxed">{r.duty}</p>
                  <div className="mt-5 inline-flex items-center gap-2 bg-cream rounded-full px-4 py-1.5 text-xs font-semibold text-ink/45">
                    <span className="w-1.5 h-1.5 rounded-full bg-sun" />
                    รอประกาศรายชื่อประจำปี
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* กิจกรรม / โครงการ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal>
            <div id="activities" className="scroll-mt-28 h-full">
              <ComingSoon icon={ImageIcon} title="กิจกรรมสภา" desc="ประมวลภาพกิจกรรมต่าง ๆ ของสภาเยาวชนสร้างชาติ" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div id="projects" className="scroll-mt-28 h-full">
              <ComingSoon icon={FolderKanban} title="โครงการสภา" desc="โครงการต่าง ๆ ที่สภาเยาวชนขับเคลื่อนในแต่ละจังหวัด" />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
