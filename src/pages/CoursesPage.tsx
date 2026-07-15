import { GraduationCap, Rocket, Sprout } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

const COURSES = [
  {
    id: 'nbi-youth',
    code: 'NBI – Youth',
    title: 'เยาวชนสร้างชาติ',
    desc: 'หลักสูตรบ่มเพาะรากฐานอุดมการณ์ คนดี คนเก่ง คนกล้า ผ่านค่าย 3 วัน 2 คืน และกิจกรรมชมรมต่อเนื่องในสถานศึกษา',
    icon: Sprout,
    color: 'bg-teal',
    audience: 'มัธยมศึกษา – อุดมศึกษา',
  },
  {
    id: 'nbi-yes',
    code: 'NBI YES',
    title: 'Young Entrepreneurs Society',
    desc: 'หลักสูตรพัฒนาเยาวชนสู่การเป็นผู้ประกอบการรุ่นใหม่ที่มีคุณธรรม คิดสร้างสรรค์ และสร้างคุณค่าให้สังคม',
    icon: Rocket,
    color: 'bg-sun',
    audience: 'เยาวชนผู้สนใจการเป็นผู้ประกอบการ',
  },
  {
    id: 'nbi-ysd',
    code: 'NBI YSD',
    title: 'Youth for Sustainable Development',
    desc: 'หลักสูตรผู้นำเยาวชนเพื่อการพัฒนาที่ยั่งยืน ขับเคลื่อนโครงการที่สร้างผลกระทบเชิงบวกต่อชุมชนและประเทศ',
    icon: GraduationCap,
    color: 'bg-coral',
    audience: 'ผู้นำเยาวชนและนักกิจกรรม',
  },
]

export default function CoursesPage() {
  return (
    <div className="pb-24">
      <PageHeader
        eyebrow="Courses"
        title="หลักสูตร"
        subtitle="หลักสูตรการบ่มเพาะเยาวชนของสถาบันการสร้างชาติ (NBI)"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <SectionHeading
          eyebrow="เส้นทางการเรียนรู้"
          title="3 หลักสูตรหลักของ NBI"
          subtitle="รายละเอียดหลักสูตรฉบับเต็มกำลังอยู่ระหว่างอัปเดต — ติดตามการเปิดรับสมัครได้ทางช่องทางโซเชียลของเยาวชนสร้างชาติ"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {COURSES.map((c, i) => (
            <Reveal key={c.id} delay={i * 110}>
              <div
                id={c.id}
                className="group bg-white rounded-[2rem] p-8 md:p-9 shadow-xl shadow-forest/6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col scroll-mt-28 relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-1.5 ${c.color}`} />
                <div
                  className={`w-16 h-16 rounded-2xl ${c.color} text-white flex items-center justify-center mb-6 rotate-3 group-hover:rotate-6 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <c.icon size={28} />
                </div>
                <p className="font-display font-semibold text-moss text-sm tracking-wide mb-1">{c.code}</p>
                <h3 className="font-display text-2xl font-semibold text-forest mb-4">{c.title}</h3>
                <p className="text-ink/60 leading-relaxed flex-grow">{c.desc}</p>
                <div className="mt-6 pt-5 shadow-[0_-1px_0_rgba(12,59,44,0.08)]">
                  <span className="text-xs font-semibold text-ink/45 uppercase tracking-wider">กลุ่มเป้าหมาย</span>
                  <p className="text-sm font-medium text-forest mt-1">{c.audience}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
