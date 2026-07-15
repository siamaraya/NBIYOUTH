import { Trophy, Star, Mic2, Timer, Youtube, Medal, Award, ScrollText, ExternalLink } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { SOCIALS } from '../data/site'

// หมวดรางวัล — เติมรายการรางวัลจริงได้ในอาร์เรย์ items ของแต่ละหมวด
const AWARD_CATEGORIES = [
  {
    icon: Trophy,
    title: 'รางวัลโครงการ CCS ดีเด่น',
    desc: 'โครงการ Cap-Corner Stone ที่สร้างผลกระทบเชิงบวกสูงสุดต่อสถานศึกษา ชุมชน และสังคม จากการประกวดระดับประเทศ',
    color: 'bg-sun',
    link: 'https://www.facebook.com/share/p/1HGxRR2MXA/',
    linkLabel: 'ดูประกาศรางวัลบน Facebook',
  },
  {
    icon: Medal,
    title: 'รางวัลเยาวชนต้นแบบ',
    desc: 'เยาวชนสร้างชาติผู้ปฏิบัติตนตามอุดมการณ์ คนดี คนเก่ง คนกล้า เป็นแบบอย่างแก่เพื่อนเยาวชนทั่วประเทศ',
    color: 'bg-teal',
    link: SOCIALS.facebook.url,
    linkLabel: 'ติดตามประกาศทางเพจ',
  },
  {
    icon: ScrollText,
    title: 'เกียรติบัตรค่ายและชมรม',
    desc: 'เกียรติบัตรสำหรับเยาวชนผู้ผ่านค่ายเยาวชนสร้างชาติ ครูที่ปรึกษา และชมรมที่ดำเนินกิจกรรมต่อเนื่อง',
    color: 'bg-coral',
    link: SOCIALS.facebook.url,
    linkLabel: 'สอบถามผ่านเพจ',
  },
]

const SHOWCASES = [
  {
    id: 'talent',
    icon: Star,
    title: 'NBI-Youth Talent',
    desc: 'เวทีแสดงความสามารถของเยาวชนสร้างชาติ เปิดพื้นที่ให้เยาวชนได้แสดงศักยภาพอย่างสร้างสรรค์',
    color: 'bg-sun',
  },
  {
    id: 'friday-talk',
    icon: Mic2,
    title: 'Friday Talk',
    desc: 'รายการพูดคุยประจำวันศุกร์ แลกเปลี่ยนแนวคิด มุมมอง และแรงบันดาลใจจากเยาวชนและวิทยากร',
    color: 'bg-teal',
  },
  {
    id: 'five-minutes',
    icon: Timer,
    title: '5 นาที สาระดี ๆ',
    desc: 'คลิปสั้นอัดแน่นด้วยสาระและแนวคิดดี ๆ สำหรับการพัฒนาตนเองของเยาวชน',
    color: 'bg-coral',
  },
]

export default function PortfolioPage() {
  return (
    <div className="pb-24">
      <PageHeader
        eyebrow="Portfolio"
        title="ผลงาน"
        subtitle="รางวัลที่ได้รับ NBI-Youth Talent, Friday Talk และ 5 นาที สาระดี ๆ"
      />

      {/* รายการ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <SectionHeading eyebrow="รายการของเรา" title="พื้นที่แสดงศักยภาพเยาวชน" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SHOWCASES.map((s, i) => (
            <Reveal key={s.id} delay={i * 100}>
              <a
                id={s.id}
                href={SOCIALS.youtube.url}
                target="_blank"
                rel="noreferrer"
                className="group block bg-white rounded-[2rem] p-8 md:p-9 shadow-xl shadow-forest/6 hover:shadow-2xl hover:-translate-y-2 transition-all h-full scroll-mt-28"
              >
                <div
                  className={`w-16 h-16 rounded-2xl ${s.color} text-white flex items-center justify-center mb-6 rotate-3 group-hover:rotate-6 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <s.icon size={28} />
                </div>
                <h3 className="font-display text-2xl font-semibold text-forest mb-3">{s.title}</h3>
                <p className="text-ink/60 leading-relaxed mb-5">{s.desc}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-moss group-hover:text-coral transition-colors">
                  <Youtube size={16} />
                  รับชมทาง YouTube: {SOCIALS.youtube.label}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* รางวัล */}
      <section id="awards" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 scroll-mt-28">
        <SectionHeading
          eyebrow="ความภาคภูมิใจ"
          title="รางวัลที่ได้รับ"
          subtitle="รางวัลและเกียรติบัตรของเยาวชนสร้างชาติและชมรมทั่วประเทศ — รายการรางวัลรายปีอยู่ระหว่างรวบรวมจากทีมงาน"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AWARD_CATEGORIES.map((a, i) => (
            <Reveal key={a.title} delay={i * 100}>
              <a
                href={a.link}
                target="_blank"
                rel="noreferrer"
                className="group relative block bg-white rounded-[2rem] p-8 shadow-xl shadow-forest/6 hover:shadow-2xl hover:-translate-y-2 transition-all h-full overflow-hidden"
              >
                <Award size={110} className="absolute -bottom-6 -right-6 text-cream group-hover:text-mint transition-colors" />
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-2xl ${a.color} text-white flex items-center justify-center mb-6 rotate-3 group-hover:rotate-6 group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <a.icon size={28} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-forest mb-3 leading-snug">{a.title}</h3>
                  <p className="text-sm text-ink/60 leading-relaxed mb-5">{a.desc}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-moss group-hover:text-forest transition-colors">
                    {a.linkLabel}
                    <ExternalLink size={14} />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
