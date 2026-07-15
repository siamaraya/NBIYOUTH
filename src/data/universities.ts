import { asset } from '../lib/asset'
export interface University {
  no: number
  name: string
  country: string
  image: string
  highlight: string
}

// 12 มหาวิทยาลัยระดับโลก — ชื่อกลุ่มประจำค่ายเยาวชนสร้างชาติ
export const UNIVERSITIES: University[] = [
  {
    no: 1,
    name: 'Harvard University',
    country: 'สหรัฐอเมริกา',
    image: asset('images/universities/01.png'),
    highlight:
      'มหาวิทยาลัยเอกชนเก่าแก่ที่สุดของสหรัฐอเมริกา (ค.ศ. 1638) ติดอันดับ 10 มหาวิทยาลัยชั้นนำของโลกต่อเนื่องยาวนาน มีผู้ได้รับรางวัลโนเบลมากกว่า 45 คน และห้องสมุดวิชาการใหญ่ที่สุดในโลก',
  },
  {
    no: 2,
    name: 'University of Oxford',
    country: 'สหราชอาณาจักร',
    image: asset('images/universities/02.png'),
    highlight:
      'มหาวิทยาลัยเก่าแก่ที่สุดของโลกที่ใช้ภาษาอังกฤษ อายุกว่า 1,000 ปี มีห้องสมุดกว่า 100 แห่ง ศิษย์เก่าเป็นผู้นำคนสำคัญของโลกกว่า 30 คน อาทิ บิล คลินตัน, ออง ซาน ซูจี, อินทิรา คานธี',
  },
  {
    no: 3,
    name: 'Imperial College London',
    country: 'สหราชอาณาจักร',
    image: asset('images/universities/03.png'),
    highlight:
      'สถาบันการศึกษาฐานวิทยาศาสตร์ชั้นนำของสหราชอาณาจักร เน้นวิทยาศาสตร์ วิศวกรรม แพทยศาสตร์ และธุรกิจ มีผู้ได้รับรางวัลโนเบล 14 คน รวมถึงเซอร์ อเล็กซานเดอร์ เฟลมมิง ผู้ค้นพบเพนิซิลิน',
  },
  {
    no: 4,
    name: 'Stanford University',
    country: 'สหรัฐอเมริกา',
    image: asset('images/universities/04.png'),
    highlight:
      'ตั้งอยู่ใจกลางซิลิคอนแวลลีย์ มีผู้ได้รับรางวัลโนเบล 19 คน บริษัทที่ก่อตั้งโดยศิษย์เก่าสร้างรายได้รวมกว่า 2.7 ล้านล้านดอลลาร์ต่อปี เทียบเท่าเศรษฐกิจอันดับ 10 ของโลก',
  },
  {
    no: 5,
    name: 'Princeton University',
    country: 'สหรัฐอเมริกา',
    image: asset('images/universities/05.png'),
    highlight:
      'หนึ่งในมหาวิทยาลัยเก่าแก่ที่สุดของสหรัฐอเมริกา (ค.ศ. 1746) มหาวิทยาลัยวิจัยระดับโลกที่เชื่อมโยงกับผู้ได้รับรางวัลโนเบลกว่า 40 คน และอดีตประธานาธิบดีสหรัฐฯ 2 คน',
  },
  {
    no: 6,
    name: 'University of Chicago',
    country: 'สหรัฐอเมริกา',
    image: asset('images/universities/06.png'),
    highlight:
      'เชื่อมโยงกับผู้ได้รับรางวัลโนเบลมากกว่า 80 คน เหรียญฟิลด์ส 9 คน และรางวัลอัจฉริยะแมกอาเธอร์เกือบ 50 รางวัล ทั้งยังเป็นผู้ร่วมก่อตั้ง Big Ten Conference ด้านกีฬา',
  },
  {
    no: 7,
    name: 'University of Cambridge',
    country: 'สหราชอาณาจักร',
    image: asset('images/universities/07.png'),
    highlight:
      'ก่อตั้ง ค.ศ. 1209 ประวัติศาสตร์ยาวนานกว่า 800 ปี มีวิทยาลัยอิสระ 31 แห่ง หนังสือกว่า 15 ล้านเล่ม และผู้ได้รับรางวัลโนเบลกว่า 98 คน',
  },
  {
    no: 8,
    name: 'London School of Economics (LSE)',
    country: 'สหราชอาณาจักร',
    image: asset('images/universities/08.png'),
    highlight:
      'มหาวิทยาลัยสังคมศาสตร์ชั้นเยี่ยมของโลก เชี่ยวชาญเศรษฐศาสตร์ การเมืองการปกครอง กฎหมาย มีผู้ได้รับรางวัลโนเบล 16 คน และศิษย์เก่าเป็นผู้นำโลกกว่า 37 คน',
  },
  {
    no: 9,
    name: 'Penn Wharton',
    country: 'สหรัฐอเมริกา',
    image: asset('images/universities/09.png'),
    highlight:
      'โรงเรียนธุรกิจแห่งแรกของสหรัฐอเมริกา ภายใต้ University of Pennsylvania มีเครือข่ายศิษย์เก่ากว่า 96,000 คน และผู้บริหารระดับสูงกว่า 9,000 คน',
  },
  {
    no: 10,
    name: 'Tsinghua University',
    country: 'จีน',
    image: asset('images/universities/10.png'),
    highlight:
      'ก่อตั้ง ค.ศ. 1911 มหาวิทยาลัยที่ทรงอิทธิพลและมีชื่อเสียงมากที่สุดแห่งหนึ่งของจีน เชื่อมประเทศจีนกับโลก ผสานศิลปศาสตร์และวิทยาศาสตร์เข้าด้วยกัน',
  },
  {
    no: 11,
    name: 'Kyoto University',
    country: 'ญี่ปุ่น',
    image: asset('images/universities/11.png'),
    highlight:
      'หนึ่งในมหาวิทยาลัยวิจัยที่ประสบความสำเร็จมากที่สุดของเอเชีย อันดับ 2 ของญี่ปุ่น โดดเด่นด้านการกระตุ้นความคิดสร้างสรรค์และการค้นพบใหม่',
  },
  {
    no: 12,
    name: 'EPFL',
    country: 'สวิตเซอร์แลนด์',
    image: asset('images/universities/12.png'),
    highlight:
      'สถาบันเทคโนโลยีแห่งสหพันธ์รัฐสวิส โลซาน ติด 50 อันดับแรกของโลกต่อเนื่องเกือบ 10 ปี ขับเคลื่อน 3 ภารกิจ: การศึกษา การวิจัย และการถ่ายทอดเทคโนโลยี',
  },
]
