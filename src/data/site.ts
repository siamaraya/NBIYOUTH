export interface NavItem {
  path: string
  label: string
  sub?: { label: string; hash?: string }[]
}

export const NAV_ITEMS: NavItem[] = [
  {
    path: '/about',
    label: 'เกี่ยวกับเรา',
    sub: [
      { label: 'ความเป็นมา', hash: '#history' },
      { label: 'วัตถุประสงค์', hash: '#objectives' },
      { label: 'รู้จักสถาบันการสร้างชาติ', hash: '#nbi' },
      { label: 'วิสัยทัศน์ / พันธกิจ', hash: '#vision' },
      { label: 'ช่องทางติดต่อ', hash: '#contact' },
    ],
  },
  {
    path: '/camp',
    label: 'ค่ายเยาวชนสร้างชาติ',
    sub: [
      { label: 'คำปฏิญาณ', hash: '#pledge' },
      { label: 'ค่ายเยาวชน รุ่น 1–18', hash: '#camps' },
      { label: '12 มหาวิทยาลัยโลก', hash: '#universities' },
    ],
  },
  {
    path: '/club',
    label: 'ชมรมเยาวชนสร้างชาติ',
    sub: [
      { label: 'Reunion', hash: '#reunion' },
      { label: 'กิจกรรม', hash: '#activity' },
      { label: 'จังหวัด / โรงเรียน', hash: '#map' },
      { label: 'จำนวนชมรม / สมาชิก', hash: '#stats' },
    ],
  },
  {
    path: '/ccs',
    label: 'โครงการ CCS',
    sub: [
      { label: 'แนวคิด CCS', hash: '#concept' },
      { label: 'ประกวดโครงการ CCS', hash: '#contest' },
      { label: 'รางวัล', hash: '#awards' },
    ],
  },
  {
    path: '/council',
    label: 'สภาเยาวชนสร้างชาติ',
    sub: [
      { label: 'ทำเนียบสภา', hash: '#directory' },
      { label: 'กิจกรรม', hash: '#activities' },
      { label: 'โครงการ', hash: '#projects' },
    ],
  },
  {
    path: '/news',
    label: 'กิจกรรมข่าวสาร',
    sub: [
      { label: 'ปฏิทินประจำปี', hash: '#calendar' },
      { label: 'ประชาสัมพันธ์', hash: '#announcements' },
    ],
  },
  {
    path: '/portfolio',
    label: 'ผลงาน',
    sub: [
      { label: 'รางวัลที่ได้รับ', hash: '#awards' },
      { label: 'NBI-Youth Talent', hash: '#talent' },
      { label: 'Friday Talk', hash: '#friday-talk' },
      { label: '5 นาที สาระดี ๆ', hash: '#five-minutes' },
    ],
  },
  {
    path: '/courses',
    label: 'หลักสูตร',
    sub: [
      { label: 'NBI – Youth', hash: '#nbi-youth' },
      { label: 'NBI YES', hash: '#nbi-yes' },
      { label: 'NBI YSD', hash: '#nbi-ysd' },
    ],
  },
]

export const SOCIALS = {
  facebook: { label: 'nbiyouthclub', url: 'https://www.facebook.com/nbiyouthclub' },
  instagram: { label: 'nbi.youth.club', url: 'https://www.instagram.com/nbi.youth.club' },
  youtube: { label: 'nbiyouthclub', url: 'https://www.youtube.com/@nbiyouthclub' },
  line: { label: '@nbiyouthclub', url: 'https://line.me/R/ti/p/@nbiyouthclub' },
  email: 'nbiyouthclub@gmail.com',
}

// คนดี คนเก่ง คนกล้า — the tri-color identity of NBI-Youth
export const PILLARS = [
  {
    key: 'good',
    title: 'คนดี',
    en: 'Others First!',
    thai: '"คนอื่นก่อน"',
    desc: 'ยึดถือประโยชน์ส่วนรวม มากกว่าส่วนตน',
    color: 'teal',
  },
  {
    key: 'smart',
    title: 'คนเก่ง',
    en: 'Can Do, Yes!',
    thai: '"ทำได้แน่"',
    desc: 'ใช้ความรู้ความสามารถที่มี อย่างเต็มศักยภาพ เพื่อส่วนรวม',
    color: 'sun',
  },
  {
    key: 'brave',
    title: 'คนกล้า',
    en: 'Firm Stance!',
    thai: '"กล้ายืนหยัด"',
    desc: 'กล้ายืนหยัด มีจุดยืนในสิ่งที่ถูกต้องดีงาม',
    color: 'coral',
  },
] as const

export const PLEDGE_LINES = [
  'ข้าพเจ้า เยาวชนสร้างชาติ ขอปฏิญาณตน',
  'เป็นคนดี ยึดถือประโยชน์ส่วนรวม มากกว่าส่วนตน',
  'เป็นคนเก่ง ใช้ความรู้ความสามารถที่มี อย่างเต็มศักยภาพ เพื่อส่วนรวม',
  'เป็นคนกล้า กล้ายืนหยัด มีจุดยืนในสิ่งที่ถูกต้องดีงาม',
  'จะปฏิบัติตน ให้สมเกียรติ ของการเป็นเยาวชนสร้างชาติ สถาบันการสร้างชาติ',
]
