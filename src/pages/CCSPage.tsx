import { asset } from '../lib/asset'
import { Lightbulb, Target, TrendingUp, ExternalLink, Trophy, Video } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

const THREE_I = [
  {
    title: 'Ideation',
    thai: 'แนวคิดทะลุทะลวง',
    desc: 'มีแนวคิดที่ทะลุทะลวง เป็นสิ่งใหม่ มีความเป็นนวัตกรรม',
    icon: Lightbulb,
    color: 'bg-teal',
    text: 'text-teal',
  },
  {
    title: 'Implementation',
    thai: 'ปฏิบัติได้จริง',
    desc: 'มีแนวทางการปฏิบัติที่ชัดเจน เป็นรูปธรรม เห็นความสำเร็จ และมีการจัดการอย่างคุ้มค่า',
    icon: Target,
    color: 'bg-sun',
    text: 'text-sun',
  },
  {
    title: 'Impact',
    thai: 'ผลกระทบวัดได้',
    desc: 'มีผลกระทบที่สามารถวัดได้ในบางมิติ บางระดับ พร้อมตัวชี้วัดความสำเร็จที่ชัดเจน',
    icon: TrendingUp,
    color: 'bg-coral',
    text: 'text-coral',
  },
]

const IMPACT_LEVELS = [
  {
    from: '−',
    to: '0',
    level: 'จากสภาพติดลบ กลายเป็นศูนย์',
    desc: 'แก้ไขสิ่งที่เสื่อม เสียหาย มีปัญหา ให้กลับสู่สภาพปกติ เช่น การแก้ปัญหาน้ำเน่าเสีย',
  },
  {
    from: '0',
    to: '+',
    level: 'จากสภาพศูนย์ กลายเป็นบวก',
    desc: 'พัฒนาสิ่งที่อยู่ในสภาพปกติให้เปลี่ยนแปลงไปในทางที่ดีขึ้น เช่น พัฒนาแหล่งน้ำให้เป็นพื้นที่ประมง',
  },
  {
    from: '+',
    to: '×2',
    level: 'จากสภาพบวก กลายเป็นทวีคูณ',
    desc: 'ทำให้สิ่งที่ดีอยู่แล้วแตกตัว ขยายผลออกไปอย่างกว้างขวาง',
  },
]

const TEACH_SLIDES = ['41', '42', '43', '44', '45', '46', '47']

export default function CCSPage() {
  return (
    <div className="pb-24">
      <PageHeader
        eyebrow="Cap-Corner Stone Project"
        title="โครงการ CCS"
        subtitle="นวัตกรรมสร้างสรรค์สังคม — โครงการเล็กที่มีพลังมากที่สุด แม้ไม่ต้องใช้เงินมาก แต่สร้างผลกระทบสูง"
      />

      {/* แนวคิด */}
      <section id="concept" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 scroll-mt-28">
        <Reveal>
          <div className="bg-white rounded-[2.5rem] shadow-xl shadow-forest/8 p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10 overflow-hidden relative">
            <div className="lg:w-2/5 w-full">
              <div className="relative rounded-[2rem] overflow-hidden shadow-lg shadow-forest/10">
                <img
                  src={asset('images/teach/48.png')}
                  alt="Cap-Corner Stone Project คือ นวัตกรรมสำหรับการใช้ทำโครงการ ไม่ใช่การทำโครงการนวัตกรรม"
                  className="w-full h-auto"
                />
                <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs font-semibold text-moss bg-white/85 backdrop-blur-sm rounded-full px-4 py-1.5 whitespace-nowrap shadow-sm">
                  หินมุมเอก — ก้อนเล็กที่ยึดทั้งโครงสร้าง
                </span>
              </div>
            </div>
            <div className="lg:w-3/5">
              <SectionHeading eyebrow="แนวคิดโครงการ" title="Capstone คืออะไร?" />
              <p className="text-ink/75 leading-loose text-lg mb-6">
                <strong className="text-forest">หินมุมเอก (Capstone)</strong> คือหินก้อนเล็ก ๆ
                ที่ยึดโครงสร้างทั้งหมดไว้ด้วยกัน — ถ้าถอดหินก้อนนี้ออก ตึกทั้งหลังจะถล่ม ดังนั้น{' '}
                <strong className="text-coral">Cap-Corner Stone Project</strong>{' '}
                จึงหมายถึงโครงการที่มีพลังมากที่สุด แม้ไม่ต้องใช้เงินมาก
                เป็นโครงการเล็กที่สร้างผลกระทบสูง ทำแล้วเป็นที่จารึก มีเอกลักษณ์
              </p>
              <div className="bg-mint rounded-2xl px-6 py-4 font-display font-medium text-forest text-lg">
                "CCS คือ นวัตกรรมสำหรับการใช้ทำโครงการ ไม่ใช่การทำโครงการนวัตกรรม"
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 3I */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <SectionHeading eyebrow="องค์ประกอบ" title="โครงการที่มีพลัง ประกอบด้วย 3I" align="center" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {THREE_I.map((item, i) => (
            <Reveal key={item.title} delay={i * 110}>
              <div className="group bg-white rounded-[2rem] p-8 md:p-10 shadow-xl shadow-forest/6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center h-full relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1.5 ${item.color}`} />
                <div
                  className={`w-20 h-20 rounded-3xl ${item.color} text-white flex items-center justify-center mx-auto mb-6 rotate-3 group-hover:rotate-6 group-hover:scale-110 transition-transform shadow-xl`}
                >
                  <item.icon size={34} />
                </div>
                <h3 className="font-display text-2xl font-semibold text-forest">{item.title}</h3>
                <p className={`font-display font-medium ${item.text} mb-4`}>{item.thai}</p>
                <p className="text-ink/60 leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Impact levels */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <Reveal>
          <div className="relative bg-forest rounded-[2.5rem] p-8 md:p-14 overflow-hidden grain shadow-2xl shadow-forest/25">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-moss/50 blur-3xl" />
            <div className="relative z-10">
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-white text-center mb-12">
                การวัดระดับผลกระทบ ในมิติการเปลี่ยนแปลง
              </h2>
              <div className="space-y-5">
                {IMPACT_LEVELS.map((impact, i) => (
                  <div
                    key={i}
                    className="flex flex-col md:flex-row items-start md:items-center gap-5 bg-white/8 backdrop-blur-sm rounded-3xl p-6 md:p-7 hover:bg-white/12 transition-colors"
                  >
                    <div className="flex items-center gap-3 shrink-0 md:w-40">
                      <span className="w-12 h-12 rounded-2xl bg-coral/90 text-white font-display font-semibold text-lg flex items-center justify-center">
                        {impact.from}
                      </span>
                      <span className="text-sun text-xl font-bold">→</span>
                      <span className="w-12 h-12 rounded-2xl bg-teal text-white font-display font-semibold text-lg flex items-center justify-center">
                        {impact.to}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-sun text-lg mb-1">{impact.level}</h3>
                      <p className="text-white/70 leading-relaxed text-sm md:text-base">{impact.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* สื่อการสอน CCS */}
      <section className="pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="สื่อการเรียนรู้"
            title="สไลด์ประกอบการสอน CCS"
            subtitle="เลื่อนดูสื่อการสอนแนวคิด Cap-Corner Stone ที่ใช้จริงในค่ายเยาวชนสร้างชาติ"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory [-webkit-overflow-scrolling:touch]">
            {TEACH_SLIDES.map((n) => (
              <img
                key={n}
                src={asset(`images/teach/${n}.png`)}
                alt={`สไลด์การสอน CCS ${n}`}
                loading="lazy"
                className="h-56 md:h-64 w-auto rounded-2xl shadow-lg shadow-forest/10 snap-start shrink-0 hover:scale-[1.02] transition-transform"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ประกวด + รางวัล */}
      <section id="contest" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 scroll-mt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal>
            <a
              href="https://www.facebook.com/share/p/18sYCXXstk/"
              target="_blank"
              rel="noreferrer"
              className="group block bg-white rounded-[2rem] p-8 md:p-10 shadow-xl shadow-forest/8 hover:shadow-2xl hover:-translate-y-1.5 transition-all h-full"
            >
              <div className="w-16 h-16 rounded-2xl bg-sun text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Video size={28} />
              </div>
              <h3 className="font-display text-2xl font-semibold text-forest mb-3">การประกวดโครงการ CCS</h3>
              <p className="text-ink/60 leading-relaxed mb-5">
                เวทีให้ชมรมเยาวชนสร้างชาติทั่วประเทศนำเสนอโครงการ CCS ของตนเอง
                ชิงรางวัลและการยอมรับระดับประเทศ
              </p>
              <span className="inline-flex items-center gap-2 font-semibold text-moss group-hover:text-forest transition-colors">
                ติดตามการประกวดบน Facebook
                <ExternalLink size={16} />
              </span>
            </a>
          </Reveal>
          <Reveal delay={120}>
            <a
              id="awards"
              href="https://www.facebook.com/share/p/1HGxRR2MXA/"
              target="_blank"
              rel="noreferrer"
              className="group block bg-white rounded-[2rem] p-8 md:p-10 shadow-xl shadow-forest/8 hover:shadow-2xl hover:-translate-y-1.5 transition-all h-full scroll-mt-28"
            >
              <div className="w-16 h-16 rounded-2xl bg-coral text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Trophy size={28} />
              </div>
              <h3 className="font-display text-2xl font-semibold text-forest mb-3">รางวัลโครงการ CCS</h3>
              <p className="text-ink/60 leading-relaxed mb-5">
                ประกาศผลและมอบรางวัลแก่โครงการ CCS ดีเด่น ที่สร้างผลกระทบเชิงบวกต่อสถานศึกษา ชุมชน และสังคม
              </p>
              <span className="inline-flex items-center gap-2 font-semibold text-moss group-hover:text-forest transition-colors">
                ดูประกาศรางวัลบน Facebook
                <ExternalLink size={16} />
              </span>
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
