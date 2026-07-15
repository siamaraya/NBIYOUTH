import { CalendarDays, Megaphone, MapPin } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import ComingSoon from '../components/ComingSoon'

// ไทม์ไลน์กิจกรรมประจำปีของเยาวชนสร้างชาติ (อ้างอิงรูปแบบการดำเนินงานจริง)
const YEAR_TIMELINE = [
  {
    period: 'ช่วงที่ 1',
    title: 'เปิดตัวโครงการ',
    desc: 'ประชุมเปิดตัวโครงการร่วมกับผู้บริหารและครูอาจารย์ พร้อมประชาสัมพันธ์ในพื้นที่',
    color: 'bg-teal',
  },
  {
    period: 'ช่วงที่ 2',
    title: 'อบรมผู้นำเยาวชน',
    desc: 'อบรมเยาวชนระดับอุดมศึกษาเป็นพี่เลี้ยง (Facilitator) ประจำค่าย',
    color: 'bg-sun',
  },
  {
    period: 'ช่วงที่ 3',
    title: 'ค่ายเยาวชนสร้างชาติ',
    desc: 'จัดค่าย 3 วัน 2 คืน บ่มเพาะอุดมการณ์ คนดี คนเก่ง คนกล้า และแนวคิด CCS',
    color: 'bg-coral',
  },
  {
    period: 'ช่วงที่ 4',
    title: 'กิจกรรมหลังค่าย',
    desc: 'จัดตั้งชมรมในสถานศึกษา ทำโครงการ CCS และเข้าร่วมสภาเยาวชนสร้างชาติ',
    color: 'bg-leaf',
  },
]

const LATEST_NEWS = [
  {
    tag: 'ค่ายรุ่นล่าสุด',
    title: 'ค่ายเยาวชนสร้างชาติ รุ่นที่ 18',
    desc: 'จัดโดย นสช.19 ระหว่างวันที่ 27–29 พฤศจิกายน 2568 ณ โรงแรม ดิโอวาเลย์ อำเภอพุนพิน จังหวัดสุราษฎร์ธานี บรรยากาศเต็มไปด้วยพลังของเยาวชนที่ตั้งใจเรียนรู้และพัฒนาตน',
    place: 'จ.สุราษฎร์ธานี',
  },
  {
    tag: 'ค่าย',
    title: 'ค่ายเยาวชนสร้างชาติ รุ่นที่ 17',
    desc: 'จัดโดย นสช.18 วันที่ 19–21 มิถุนายน 2568 ณ วาสนาดีรีสอร์ท จังหวัดราชบุรี',
    place: 'จ.ราชบุรี',
  },
  {
    tag: 'ค่าย',
    title: 'ค่ายรุ่นที่ 16 — 3 สนามทั่วประเทศ',
    desc: 'ชลบุรี · นครราชสีมา · ปทุมธานี จัดโดย นสช.17 ช่วงพฤศจิกายน–ธันวาคม 2567 เยาวชนต่างตั้งใจพัฒนาตนเพื่อกลับไปจัดตั้งชมรมเยาวชนสร้างชาติ',
    place: '3 จังหวัด',
  },
]

export default function NewsPage() {
  return (
    <div className="pb-24">
      <PageHeader
        eyebrow="News & Activities"
        title="กิจกรรมข่าวสาร"
        subtitle="ปฏิทินกิจกรรมประจำปี ข่าวสาร และการประชาสัมพันธ์ของเยาวชนสร้างชาติ"
      />

      {/* ปฏิทินประจำปี */}
      <section id="calendar" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 scroll-mt-28">
        <SectionHeading
          eyebrow="ปฏิทินประจำปี"
          title="วงจรกิจกรรมเยาวชนสร้างชาติ"
          subtitle="กิจกรรมหลักในแต่ละปีดำเนินการต่อเนื่องเป็น 4 ช่วง จากการเปิดตัวโครงการจนถึงการขยายผลหลังค่าย"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {YEAR_TIMELINE.map((t, i) => (
            <Reveal key={t.period} delay={i * 100}>
              <div className="relative bg-white rounded-3xl p-7 shadow-lg shadow-forest/6 hover:shadow-xl hover:-translate-y-1 transition-all h-full overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1.5 ${t.color}`} />
                <span
                  className={`inline-block ${t.color} text-white text-xs font-display font-medium px-3 py-1 rounded-full mb-4`}
                >
                  {t.period}
                </span>
                <h3 className="font-display text-xl font-semibold text-forest mb-2">{t.title}</h3>
                <p className="text-sm text-ink/60 leading-relaxed">{t.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ประชาสัมพันธ์ */}
      <section id="announcements" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 scroll-mt-28">
        <SectionHeading eyebrow="ประชาสัมพันธ์" title="ข่าวสารล่าสุด" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {LATEST_NEWS.map((news, i) => (
            <Reveal key={news.title} delay={i * 100}>
              <article className="bg-white rounded-3xl p-7 shadow-lg shadow-forest/6 hover:shadow-xl hover:-translate-y-1 transition-all h-full flex flex-col">
                <span className="self-start bg-mint text-moss text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                  {news.tag}
                </span>
                <h3 className="font-display text-xl font-semibold text-forest mb-3 leading-snug">{news.title}</h3>
                <p className="text-sm text-ink/60 leading-relaxed flex-grow">{news.desc}</p>
                <div className="flex items-center gap-2 mt-5 text-sm text-moss font-medium">
                  <MapPin size={15} />
                  {news.place}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal>
            <ComingSoon
              icon={CalendarDays}
              title="ปฏิทินกิจกรรมโดยละเอียด"
              desc="กำหนดการกิจกรรมประจำปีฉบับเต็ม พร้อมวันเวลาและสถานที่ กำลังอยู่ระหว่างจัดทำ"
            />
          </Reveal>
          <Reveal delay={100}>
            <ComingSoon
              icon={Megaphone}
              title="ภาพกิจกรรมต่าง ๆ"
              desc="คลังภาพกิจกรรมและการประชาสัมพันธ์อื่น ๆ ติดตามได้ทาง Facebook: nbiyouthclub"
            />
          </Reveal>
        </div>
      </section>
    </div>
  )
}
