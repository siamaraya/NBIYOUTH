# เยาวชนสร้างชาติ — NBI-Youth Club Website

เว็บไซต์ www.nbiyouth.com สำหรับโครงการเยาวชนสร้างชาติ สถาบันการสร้างชาติ (Nation-Building Institute)

พัฒนาต่อจาก `nbi_youth_website.tsx` โดยกำหนดสเปกตามโครงสร้างเว็บ 8 หมวด (`โครงสร้างเว็บ www.nbiyouth.com.png`) และเนื้อหาจาก `ข้อมูล.pdf` พร้อมภาพประกอบจากโฟลเดอร์ `Website/`

## Stack

- **Vite 6** + **React 18** + **TypeScript**
- **Tailwind CSS v4** (design tokens ผ่าน `@theme` ใน `src/index.css`)
- **React Router v6** — 9 หน้า (Home + 8 หมวด)
- **lucide-react** icons
- Fonts: **Mitr** (display) + **Anuphan** (body) จาก Google Fonts

## โครงสร้างหน้า

| Route | หน้า | เนื้อหา |
|---|---|---|
| `/` | หน้าแรก | Hero, 3 เสาหลัก (ดี เก่ง กล้า), 4 กลไก, สถิติ, ค่ายล่าสุด, ticker 12 มหาวิทยาลัย |
| `/about` | เกี่ยวกับเรา | ความเป็นมา, วัตถุประสงค์ 5 ข้อ, รู้จัก NBI, วิสัยทัศน์/พันธกิจ, ช่องทางติดต่อ |
| `/camp` | ค่ายเยาวชนสร้างชาติ | คำปฏิญาณ, วิดีโอค่ายรุ่น 1–18 (22 คลิป YouTube), 12 มหาวิทยาลัยโลกพร้อมภาพ+คำอธิบาย |
| `/club` | ชมรมเยาวชนสร้างชาติ | สถิติเครือข่าย, 3 จังหวัดนำร่อง, Reunion, กิจกรรม |
| `/ccs` | โครงการ CCS | แนวคิด Capstone, 3I, ระดับผลกระทบ, สไลด์การสอน, ประกวด+รางวัล (ลิงก์ FB) |
| `/council` | สภาเยาวชนสร้างชาติ | 4 ระดับ, มิติการพัฒนา (ภาพแผนที่), การดำเนินการ 2 ระยะ, ทำเนียบสภา |
| `/news` | กิจกรรมข่าวสาร | ปฏิทินกิจกรรม 4 ช่วง, ข่าวล่าสุด |
| `/portfolio` | ผลงาน | NBI-Youth Talent, Friday Talk, 5 นาทีสาระดี ๆ, รางวัล |
| `/courses` | หลักสูตร | NBI-Youth, NBI YES, NBI YSD |

## รัน

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production → dist/
npm run preview   # ทดสอบ production build
```

## Deploy

Static site — deploy `dist/` ขึ้น Cloudflare Pages / Vercel / Netlify ได้ทันที
(มี `public/_redirects` สำหรับ SPA routing บน Cloudflare Pages แล้ว)

## Brand tokens

สีจากโลโก้ NBI-Youth Club — กำหนดใน `src/index.css`:
`forest` `pine` `moss` `leaf` `sprout` (เขียว), `teal` (คนดี), `sun` (คนเก่ง), `coral` (คนกล้า), `lagoon`, `mint`, `cream`

ข้อมูลเนื้อหาแก้ได้ที่ `src/data/` — `camps.ts` (วิดีโอค่าย), `universities.ts` (12 มหาวิทยาลัย), `site.ts` (เมนู/โซเชียล/คำปฏิญาณ)
