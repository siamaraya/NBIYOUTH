export interface MapPin {
  province: string
  x: number
  y: number
  type: 'pilot' | 'camp'
  clubs?: number
  note?: string
}

// พิกัดบน SVG แผนที่ประเทศไทย (viewBox 0 0 520 910)
// pilot = จังหวัดนำร่องเครือข่ายชมรม | camp = จังหวัดที่เคยจัดค่ายเยาวชนสร้างชาติ
export const MAP_PINS: MapPin[] = [
  { province: 'เชียงใหม่', x: 120, y: 108, type: 'pilot', clubs: 115, note: 'จังหวัดนำร่อง ภาคเหนือ' },
  { province: 'ขอนแก่น', x: 348, y: 252, type: 'pilot', clubs: 115, note: 'จังหวัดนำร่อง ภาคตะวันออกเฉียงเหนือ' },
  { province: 'นครศรีธรรมราช', x: 178, y: 732, type: 'pilot', clubs: 120, note: 'จังหวัดนำร่อง ภาคใต้ · ค่ายรุ่น 15' },
  { province: 'ฉะเชิงเทรา', x: 246, y: 414, type: 'camp', note: 'ค่ายรุ่น 1 (2560)' },
  { province: 'นครราชสีมา', x: 306, y: 337, type: 'camp', note: 'ค่ายรุ่น 2 และรุ่น 16' },
  { province: 'สงขลา', x: 216, y: 804, type: 'camp', note: 'ค่ายรุ่น 7 (350 ชมรม)' },
  { province: 'สุราษฎร์ธานี', x: 140, y: 688, type: 'camp', note: 'ค่ายรุ่น 8 และรุ่น 18' },
  { province: 'ชลบุรี', x: 239, y: 438, type: 'camp', note: 'ค่ายรุ่น 16 · นาวิกโยธิน สัตหีบ' },
  { province: 'ปทุมธานี', x: 212, y: 395, type: 'camp', note: 'ค่ายรุ่น 16' },
  { province: 'ราชบุรี', x: 168, y: 426, type: 'camp', note: 'ค่ายรุ่น 17' },
]

export interface Reunion {
  no: number
  date: string
  place: string
  region: string
  status: 'upcoming' | 'done' | 'tba'
}

// ตารางการจัด Reunion — ทีมงานเติมข้อมูลจริงในไฟล์นี้ได้เลย
export const REUNIONS: Reunion[] = [
  { no: 1, date: 'รอประกาศกำหนดการ', place: 'ติดตามประกาศทาง Facebook: nbiyouthclub', region: 'ส่วนกลาง', status: 'tba' },
  { no: 2, date: 'รอประกาศกำหนดการ', place: 'ติดตามประกาศทาง Facebook: nbiyouthclub', region: 'ภูมิภาค', status: 'tba' },
]

export interface CouncilRole {
  role: string
  duty: string
}

// โครงสร้างกรรมการสภาเยาวชนสร้างชาติประจำจังหวัด (อ้างอิงคู่มือการทำงานสภาเยาวชนจังหวัด)
export const COUNCIL_ROLES: CouncilRole[] = [
  { role: 'ประธานสภาเยาวชน', duty: 'นำการขับเคลื่อนสภา ประสานงานกับสถาบันการสร้างชาติและภาคีในจังหวัด' },
  { role: 'รองประธานสภา', duty: 'สนับสนุนงานประธาน ดูแลงานแต่ละระดับการศึกษา' },
  { role: 'เลขาธิการสภา', duty: 'งานเอกสาร การประชุม และทะเบียนสมาชิก' },
  { role: 'ฝ่ายกิจกรรม', duty: 'วางแผนและดำเนินกิจกรรมพัฒนาเยาวชนในจังหวัด' },
  { role: 'ฝ่ายโครงการ CCS', duty: 'ขับเคลื่อนและติดตามโครงการ CCS ของชมรมในจังหวัด' },
  { role: 'ฝ่ายประชาสัมพันธ์', duty: 'สื่อสารกิจกรรมและขยายเครือข่ายสมาชิก' },
]

export const NETWORK_TOTALS = {
  clubs: 350,
  members: 1050,
  facilitators: 300,
  provinces: MAP_PINS.length,
}
