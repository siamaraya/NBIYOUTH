import { ImageIcon, MapPin, CalendarHeart, ExternalLink } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import ComingSoon from '../components/ComingSoon'
import StatCounter from '../components/StatCounter'
import ThailandMap from '../components/ThailandMap'
import { REUNIONS } from '../data/network'
import { SOCIALS } from '../data/site'

const PROVINCES = [
  { name: 'เชียงใหม่', clubs: 115, region: 'ภาคเหนือ' },
  { name: 'ขอนแก่น', clubs: 115, region: 'ภาคตะวันออกเฉียงเหนือ' },
  { name: 'นครศรีธรรมราช', clubs: 120, region: 'ภาคใต้' },
]

export default function ClubPage() {
  return (
    <div className="pb-24">
      <PageHeader
        eyebrow="NBI-Youth Club"
        title="ชมรมเยาวชนสร้างชาติ"
        subtitle="ต่อยอดจากค่ายสู่การจัดตั้งชมรมในสถานศึกษา — พื้นที่ให้เยาวชนพบปะ เรียนรู้ พัฒนาตนเป็นคนดี คนเก่ง คนกล้า และทำโครงการ CCS เพื่อพัฒนาสถานศึกษา ชุมชน และสังคม"
      />

      {/* จำนวนชมรม/สมาชิก */}
      <section id="stats" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 scroll-mt-28">
        <Reveal>
          <div className="relative bg-forest rounded-[2.5rem] py-14 px-6 overflow-hidden grain shadow-2xl shadow-forest/25">
            <div className="absolute -top-16 right-1/4 w-72 h-72 rounded-full bg-moss/60 blur-3xl" />
            <div className="relative z-10">
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-white text-center mb-10">
                เครือข่ายชมรมเยาวชนสร้างชาติ
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <StatCounter value={350} suffix=" ชมรม" label="เป้าหมายโรงเรียนเข้าร่วม" accent="teal" />
                <StatCounter value={1050} suffix=" คน" label="เยาวชนต่อรุ่น (3 คน/โรงเรียน)" accent="sun" />
                <StatCounter value={300} suffix=" คน" label="พี่เลี้ยง (Facilitator) ระดับอุดมศึกษา" accent="coral" />
                <StatCounter value={10} suffix=" จังหวัด" label="พื้นที่เครือข่ายและค่ายทั่วประเทศ" accent="leaf" />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* แผนที่ปักหมุด จังหวัด/โรงเรียน */}
      <section id="map" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 scroll-mt-28">
        <SectionHeading
          eyebrow="จังหวัด / โรงเรียน"
          title="แผนที่เครือข่ายทั่วประเทศ"
          subtitle="หมุดแสดงจังหวัดนำร่องเครือข่ายชมรม 3 จังหวัด และจังหวัดที่เคยจัดค่ายเยาวชนสร้างชาติ รุ่น 1–18"
        />
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <Reveal className="lg:col-span-3">
            <div className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-xl shadow-forest/8">
              <ThailandMap />
            </div>
          </Reveal>
          <div className="lg:col-span-2 space-y-4">
            {PROVINCES.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <div className="group bg-white rounded-3xl p-6 shadow-lg shadow-forest/8 hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-5">
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-mint text-moss flex items-center justify-center group-hover:bg-coral group-hover:text-white transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div className="flex-grow">
                    <p className="text-[11px] font-semibold tracking-[0.18em] text-moss uppercase">{p.region}</p>
                    <h3 className="font-display text-xl font-semibold text-forest">{p.name}</h3>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-2xl font-semibold text-coral">{p.clubs}</div>
                    <div className="text-xs text-ink/50">ชมรมเป้าหมาย</div>
                  </div>
                </div>
              </Reveal>
            ))}
            {/* หมายเหตุ dev: เพิ่ม/แก้หมุดจังหวัดและจำนวนชมรมได้ที่ src/data/network.ts */}
            <Reveal delay={300}>
              <div className="bg-mint rounded-3xl p-6 text-sm text-moss leading-relaxed">
                รายชื่อโรงเรียนที่เข้าร่วมโครงการรายจังหวัด อยู่ระหว่างรวบรวมข้อมูลจากทีมงานแต่ละพื้นที่
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Reunion */}
      <section id="reunion" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 scroll-mt-28">
        <SectionHeading
          eyebrow="Reunion"
          title="ตารางการจัด Reunion"
          subtitle="งานรวมรุ่นเยาวชนสร้างชาติ — พบปะเครือข่าย แลกเปลี่ยนประสบการณ์ และสานต่ออุดมการณ์"
        />
        <Reveal>
          <div className="bg-white rounded-[2rem] shadow-xl shadow-forest/8 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-forest text-white">
                    <th className="font-display font-medium px-6 py-4 text-sm">ครั้งที่</th>
                    <th className="font-display font-medium px-6 py-4 text-sm">กำหนดการ</th>
                    <th className="font-display font-medium px-6 py-4 text-sm">สถานที่ / รายละเอียด</th>
                    <th className="font-display font-medium px-6 py-4 text-sm">ระดับ</th>
                    <th className="font-display font-medium px-6 py-4 text-sm">สถานะ</th>
                  </tr>
                </thead>
                <tbody>
                  {REUNIONS.map((r, i) => (
                    <tr key={r.no} className={i % 2 ? 'bg-cream/60' : 'bg-white'}>
                      <td className="px-6 py-4">
                        <span className="w-9 h-9 rounded-xl bg-mint text-moss font-display font-semibold flex items-center justify-center">
                          {r.no}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-ink/70 text-sm">{r.date}</td>
                      <td className="px-6 py-4 text-ink/70 text-sm">{r.place}</td>
                      <td className="px-6 py-4 text-ink/70 text-sm">{r.region}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-full ${
                            r.status === 'done'
                              ? 'bg-mint text-moss'
                              : r.status === 'upcoming'
                                ? 'bg-sun/15 text-[#b07d13]'
                                : 'bg-ink/5 text-ink/50'
                          }`}
                        >
                          {r.status === 'done' ? 'จัดแล้ว' : r.status === 'upcoming' ? 'เร็ว ๆ นี้' : 'รอประกาศ'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-5 bg-mint/50">
              <p className="text-sm text-moss flex items-center gap-2">
                <CalendarHeart size={16} />
                ประกาศกำหนดการอย่างเป็นทางการผ่านเพจ Facebook
              </p>
              <a
                href={SOCIALS.facebook.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-forest text-white text-sm font-display font-medium px-5 py-2.5 rounded-full hover:bg-moss transition-colors"
              >
                ติดตาม {SOCIALS.facebook.label}
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* กิจกรรม */}
      <section id="activity" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 scroll-mt-28">
        <SectionHeading eyebrow="Activity" title="กิจกรรมของชมรม" />
        <Reveal>
          <ComingSoon
            icon={ImageIcon}
            title="ภาพกิจกรรมชมรมทั่วประเทศ"
            desc="ประมวลภาพกิจกรรมของชมรมเยาวชนสร้างชาติในสถานศึกษาต่าง ๆ พร้อมลิงก์เข้าชมในเพจ กำลังอยู่ระหว่างอัปเดต"
          />
        </Reveal>
      </section>
    </div>
  )
}
