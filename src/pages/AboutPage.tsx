import { ShieldCheck, ChevronRight, Facebook, Instagram, Youtube, MessageCircle, Mail } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { SOCIALS } from '../data/site'

const OBJECTIVES = [
  'วางรากฐานแนวคิด ความรู้ ค่านิยม ความเข้าใจ ในการใช้ชีวิตอย่างมีคุณค่าสูงสุดให้กับเยาวชน ให้เป็นคนดี (เห็นแก่ประโยชน์ส่วนรวมมากกว่าส่วนตน) คนเก่ง (มีความรู้ความสามารถ) และคนกล้า (กล้ายืนหยัดในสิ่งที่ถูกต้องดีงาม) ให้มีภาวะการเป็นผู้นำ สามารถบริหารตนบนพื้นฐานคุณธรรมได้',
  'ปลูกจิตสำนึกการอยู่อย่างพอเพียง และมีความซื่อสัตย์สุจริตต่อตนเอง ต่อสังคม และประเทศชาติ',
  'พัฒนาเยาวชนอย่างเป็นระบบ ส่งผลให้เยาวชนมีส่วนร่วมในการพัฒนาสังคมและประเทศชาติ',
  'สร้างเครือข่ายเยาวชนดี เก่ง กล้า ที่มีความเข้มแข็งในการทำกิจกรรมที่มีประโยชน์ต่อสถานศึกษาและสังคมไทย',
  'สร้างเยาวชนให้เป็นนักคิดนวัตกรรม ผ่านเครื่องมือที่เรียกว่า Cap-Corner Stone (CCS)',
]

const MISSIONS = [
  'สร้างการเรียนรู้เพื่อพัฒนาผู้นำ นักบริหาร ที่มีคุณธรรม',
  'สร้างการเรียนรู้ระบบการนำและระบบการบริหารที่เหมาะกับสถานการณ์บริบทต่าง ๆ',
  'สร้างเครือข่ายร่วมมือการสร้างชาติข้ามภาคส่วน คือ ภาครัฐ ภาคเอกชน และภาคประชาชน',
  'ประยุกต์ทฤษฎีหลักหมุด: หลักปรัชญา หลักคิด หลักวิชา หลักการ และหลักปฏิบัติ เพื่อการริเริ่มและสร้างนวัตกรรมใหม่อย่างสร้างสรรค์',
]

export default function AboutPage() {
  return (
    <div className="pb-24">
      <PageHeader
        eyebrow="About Us"
        title="เกี่ยวกับเรา"
        subtitle="ความเป็นมา วัตถุประสงค์ และการรู้จักกับสถาบันการสร้างชาติ (Nation-Building Institute)"
      />

      {/* ความเป็นมา */}
      <section id="history" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 scroll-mt-28">
        <Reveal>
          <SectionHeading eyebrow="ความเป็นมา" title="หลักการและเหตุผล" />
          <div className="space-y-5 text-ink/75 leading-loose text-[1.05rem]">
            <p className="indent-10">
              เยาวชนถือได้ว่าเป็นกลุ่มคนที่มีความสำคัญต่อความมั่นคงของชาติทั้งในปัจจุบันและอนาคต
              ดังนั้นการพัฒนาเยาวชนเป็นการให้ความสำคัญกับอนาคตและความเป็นไปของชาติบ้านเมือง แต่จากสภาพปัจจุบัน
              เยาวชนไทยจำนวนมากอยู่ในสภาพปัญหาที่น่ากังวลใจอย่างมาก อาทิ ปัญหาการใช้ความรุนแรงทั้งทางวาจาและการกระทำ
              ปัญหายาเสพติด ปัญหาการขาดอัตลักษณ์และการเห็นคุณค่าในตนเอง ปัญหาการเรียนอย่างขาดเป้าหมายทิศทาง
              ปัญหาการขาดจิตสำนึกด้านจริยธรรม ฯลฯ นอกจากนั้นการเปลี่ยนแปลงอย่างรวดเร็วของสภาพสังคม
              ประกอบกับการไหลท่วมของข้อมูลข่าวสาร ส่งผลต่อเยาวชนไทยอย่างหลีกเลี่ยงไม่ได้
              ทุกภาคส่วนของสังคมจึงควรร่วมมือกันพัฒนาเยาวชนให้พ้นปัญหาและมีคุณภาพ
              เพื่อเป็นพลเมืองที่ดีเป็นกำลังของประเทศชาติในอนาคต
            </p>
            <p className="indent-10">
              นักศึกษาหลักสูตร "นักบริหารระดับสูงเพื่อการสร้างชาติ (นสช.)" ตั้งแต่รุ่นที่ 2 เป็นต้นมา
              ได้จัดโครงการพัฒนาเยาวชนในชื่อ <strong className="text-forest">โครงการเยาวชนสร้างชาติ</strong>{' '}
              เนื่องจากเล็งเห็นว่า การพัฒนาที่ยั่งยืนจำเป็นต้องเริ่มตั้งแต่การพัฒนากระบวนการความคิดและความรู้เป็นจุดแรก
              เยาวชนเป็นบุคลากรสำคัญที่จะเป็นผู้กำหนดอนาคตของชาติ หากได้รับการพัฒนาแนวความคิดอย่างถูกต้องตั้งแต่ยังเป็นเยาวชน
              ย่อมเป็นการเตรียมการที่ดีเยี่ยมในการเติบโตเป็นผู้ใหญ่ที่ดีในสังคม อันจะนำผลดีต่อความสำเร็จของตัวเยาวชนเอง
              ต่อครอบครัว ต่อสังคม และประเทศชาติ
            </p>
          </div>
        </Reveal>
      </section>

      {/* วัตถุประสงค์ */}
      <section id="objectives" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 scroll-mt-28">
        <SectionHeading eyebrow="เป้าหมายของโครงการ" title="วัตถุประสงค์" />
        <div className="space-y-4">
          {OBJECTIVES.map((obj, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="flex items-start gap-5 bg-white rounded-3xl p-6 md:p-7 shadow-lg shadow-forest/6 hover:shadow-xl transition-shadow">
                <div
                  className={`shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center font-display font-semibold text-white text-lg shadow-md ${
                    ['bg-teal', 'bg-sun', 'bg-coral', 'bg-leaf', 'bg-lagoon'][i]
                  }`}
                >
                  {i + 1}
                </div>
                <p className="text-ink/75 leading-relaxed pt-1.5">{obj}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* รู้จักกับสถาบัน */}
      <section id="nbi" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 scroll-mt-28">
        <SectionHeading eyebrow="Nation-Building Institute" title="รู้จักกับสถาบันการสร้างชาติ" />
        <Reveal>
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-forest/8 relative overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-1.5 bg-gradient-to-b from-teal via-leaf to-forest" />
            <div className="space-y-5 text-ink/75 leading-loose">
              <p>
                สถาบันการสร้างชาติ (Nation-Building Institute – NBI) จดทะเบียนเป็นมูลนิธิภายใต้กระทรวงมหาดไทย
                โดยใช้ชื่อ <strong className="text-forest">"มูลนิธิสถาบันการสร้างชาติ"</strong> เป็นองค์กรไม่แสวงกำไร
                ไม่มีวัตถุประสงค์ทางการเมือง และไม่สนับสนุนด้านการเงินหรือทรัพย์สินแก่นักการเมืองหรือพรรคการเมืองใด
              </p>
              <p>
                สถาบันฯ ก่อตั้งโดย <strong className="text-forest">ศ.ดร.เกรียงศักดิ์ เจริญวงศ์ศักดิ์</strong> ประธานสถาบันฯ
                มีจุดกำเนิดเมื่อปี 2549 ระหว่างที่ท่านสอนและทำวิจัยที่มหาวิทยาลัย Harvard ประเทศสหรัฐอเมริกา
                ท่านตั้งคำถามว่า มหาวิทยาลัยอันดับต้นของโลกสอนคนเป็นนักธุรกิจและนักบริหารภาครัฐ
                แต่กลับไม่มีคณะหรือวิทยาลัยที่มุ่งสร้างทัศนคติการเห็นแก่ส่วนรวม
                จึงเป็นที่มาของการก่อตั้งสถาบันที่มุ่งสร้างภาคีความร่วมมือระหว่างผู้บริหารภาครัฐ ภาคเอกชน และภาคสังคม
                เพื่อพัฒนาความเป็นผู้นำการเปลี่ยนแปลง (Change Maker) และนำประเทศไทยก้าวสู่การเป็นประเทศที่พัฒนาแล้ว
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* วิสัยทัศน์ / พันธกิจ */}
      <section id="vision" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 scroll-mt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal>
            <div className="relative bg-forest text-white rounded-[2rem] p-8 md:p-10 shadow-xl shadow-forest/20 overflow-hidden h-full grain">
              <ShieldCheck size={130} className="absolute -bottom-6 -right-6 text-white/5" />
              <p className="text-sun font-semibold text-xs tracking-[0.25em] uppercase mb-3">Vision</p>
              <h3 className="font-display text-3xl font-semibold mb-5">วิสัยทัศน์</h3>
              <p className="relative z-10 text-white/80 leading-loose text-lg">
                สถาบันการสร้างชาติเป็นสถาบันหลักของชาติ เพื่อพัฒนาภาวะการนำ ภาวะการบริหาร และภาวะคุณธรรม
                เพื่อนำการสร้างชาติ
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl shadow-forest/8 h-full">
              <p className="text-moss font-semibold text-xs tracking-[0.25em] uppercase mb-3">Mission</p>
              <h3 className="font-display text-3xl font-semibold text-forest mb-5">พันธกิจ</h3>
              <ul className="space-y-4">
                {MISSIONS.map((m, i) => (
                  <li key={i} className="flex items-start gap-3 text-ink/70 leading-relaxed">
                    <ChevronRight size={18} className="text-leaf mt-1 shrink-0" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ช่องทางติดต่อ */}
      <section id="contact" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 scroll-mt-28">
        <SectionHeading eyebrow="Contact" title="ช่องทางติดต่อ" align="center" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { icon: Facebook, label: 'Facebook', value: SOCIALS.facebook.label, url: SOCIALS.facebook.url, color: 'bg-lagoon' },
            { icon: Instagram, label: 'Instagram', value: SOCIALS.instagram.label, url: SOCIALS.instagram.url, color: 'bg-coral' },
            { icon: Youtube, label: 'YouTube', value: SOCIALS.youtube.label, url: SOCIALS.youtube.url, color: 'bg-coral' },
            { icon: MessageCircle, label: 'Line', value: SOCIALS.line.label, url: SOCIALS.line.url, color: 'bg-leaf' },
            { icon: Mail, label: 'E-mail', value: SOCIALS.email, url: `mailto:${SOCIALS.email}`, color: 'bg-teal' },
          ].map((c, i) => (
            <Reveal key={c.label} delay={i * 70}>
              <a
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center gap-3 bg-white rounded-3xl p-6 shadow-lg shadow-forest/6 hover:shadow-xl hover:-translate-y-1 transition-all text-center h-full"
              >
                <span
                  className={`w-12 h-12 rounded-2xl ${c.color} text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-md`}
                >
                  <c.icon size={22} />
                </span>
                <div>
                  <div className="font-display font-medium text-forest">{c.label}</div>
                  <div className="text-xs text-ink/50 mt-1 break-all">{c.value}</div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
