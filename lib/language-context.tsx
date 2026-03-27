"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "th"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Header
    "nav.vehicles": "Vehicles",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.book": "Book a Visit",
    
    // Hero
    "hero.subtitle": "Premium Car Showroom",
    "hero.title1": "Discover Your",
    "hero.title2": "Perfect Drive",
    "hero.description": "Curated collection of premium vehicles from world-renowned brands. Experience automotive excellence.",
    "hero.cta1": "View Collection",
    "hero.cta2": "Schedule Test Drive",
    "hero.stat1": "Vehicles",
    "hero.stat2": "Premium Brands",
    "hero.stat3": "Satisfied",
    
    // Vehicles
    "vehicles.subtitle": "Collection",
    "vehicles.title": "Featured Vehicles",
    "vehicles.all": "All",
    "vehicles.ford": "Ford",
    "vehicles.mg": "MG",
    "vehicles.toyota": "Toyota",
    "vehicles.honda": "Honda",
    "vehicles.nissan": "Nissan",
    "vehicles.viewAll": "View All Vehicles",
    "vehicles.new": "New",
    
    // Services
    "services.subtitle": "Services",
    "services.title": "Premium Care at Every Step",
    "services.warranty.title": "3-Year Warranty",
    "services.warranty.desc": "Comprehensive engine and drivetrain coverage up to 100,000 km.",
    "services.service.title": "Service Center",
    "services.service.desc": "Expert technicians with genuine parts and state-of-the-art facilities.",
    "services.financing.title": "Flexible Financing",
    "services.financing.desc": "Competitive rates starting at 2.78% with up to 84-month terms.",
    "services.support.title": "24/7 Support",
    "services.support.desc": "Round-the-clock assistance for all your automotive needs.",
    
    // About
    "about.subtitle": "About Us",
    "about.title1": "Two Decades of",
    "about.title2": "Automotive Excellence",
    "about.p1": "Since 2004, we have been the trusted destination for discerning automotive enthusiasts. Our commitment to quality and service has earned us the trust of over 10,000 satisfied customers.",
    "about.p2": "Every vehicle in our collection undergoes a rigorous 150-point inspection, ensuring you receive nothing less than perfection.",
    "about.stat1": "Years",
    "about.stat2": "Customers",
    "about.stat3": "Point Check",
    "about.cta": "Learn More",
    
    // Contact
    "contact.subtitle": "Contact",
    "contact.title": "Get in Touch",
    "contact.description": "Ready to find your perfect vehicle? Visit our showroom or reach out and we will be happy to assist you.",
    "contact.location": "Location",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.hours": "Hours",
    "contact.form.title": "Send a Message",
    "contact.form.name": "Name",
    "contact.form.phone": "Phone",
    "contact.form.email": "Email",
    "contact.form.vehicle": "Vehicle of Interest",
    "contact.form.message": "Your message",
    "contact.form.submit": "Send Message",
    
    // Footer
    "footer.tagline": "Premium car showroom dedicated to automotive excellence since 2004.",
    "footer.vehicles": "Vehicles",
    "footer.vehicles.new": "New Arrivals",
    "footer.vehicles.preowned": "Pre-Owned",
    "footer.vehicles.electric": "Electric",
    "footer.vehicles.sports": "Sports",
    "footer.services": "Services",
    "footer.services.center": "Service Center",
    "footer.services.financing": "Financing",
    "footer.services.insurance": "Insurance",
    "footer.services.tradein": "Trade-In",
    "footer.company": "Company",
    "footer.company.about": "About",
    "footer.company.contact": "Contact",
    "footer.company.careers": "Careers",
    "footer.company.news": "News",
    "footer.rights": "All rights reserved.",
    "footer.terms": "Terms",
    "footer.privacy": "Privacy",
  },
  th: {
    // Header
    "nav.vehicles": "รถยนต์",
    "nav.services": "บริการ",
    "nav.about": "เกี่ยวกับเรา",
    "nav.contact": "ติดต่อ",
    "nav.book": "นัดเข้าชม",
    
    // Hero
    "hero.subtitle": "โชว์รูมรถยนต์พรีเมียม",
    "hero.title1": "ค้นพบรถยนต์",
    "hero.title2": "ในฝันของคุณ",
    "hero.description": "คัดสรรรถยนต์ระดับพรีเมียมจากแบรนด์ชั้นนำระดับโลก สัมผัสประสบการณ์ยานยนต์ที่เหนือระดับ",
    "hero.cta1": "ดูคอลเลคชัน",
    "hero.cta2": "นัดทดลองขับ",
    "hero.stat1": "คันในสต็อก",
    "hero.stat2": "แบรนด์ชั้นนำ",
    "hero.stat3": "ความพึงพอใจ",
    
    // Vehicles
    "vehicles.subtitle": "คอลเลคชัน",
    "vehicles.title": "รถยนต์",
    "vehicles.all": "ทั้งหมด",
    "vehicles.ford": "ฟอร์ด",
    "vehicles.mg": "เอ็มจี",
    "vehicles.toyota": "โตโยต้า",
    "vehicles.honda": "ฮอนด้า",
    "vehicles.nissan": "นิสสัน",
    "vehicles.viewAll": "ดูรถทั้งหมด",
    "vehicles.new": "ใหม่",
    
    // Services
    "services.subtitle": "บริการ",
    "services.title": "บริการครบวงจรทุกขั้นตอน",
    "services.warranty.title": "รับประกัน 3 ปี",
    "services.warranty.desc": "ครอบคลุมเครื่องยนต์และระบบส่งกำลังถึง 100,000 กม.",
    "services.service.title": "ศูนย์บริการ",
    "services.service.desc": "ช่างผู้เชี่ยวชาญพร้อมอะไหล่แท้และอุปกรณ์ทันสมัย",
    "services.financing.title": "สินเชื่อยืดหยุ่น",
    "services.financing.desc": "อัตราดอกเบี้ยเริ่มต้น 2.78% ผ่อนนานสูงสุด 84 เดือน",
    "services.support.title": "ดูแล 24 ชม.",
    "services.support.desc": "พร้อมช่วยเหลือตลอด 24 ชั่วโมงสำหรับทุกความต้องการ",
    
    // About
    "about.subtitle": "เกี่ยวกับเรา",
    "about.title1": "สองทศวรรษแห่ง",
    "about.title2": "ความเป็นเลิศด้านยานยนต์",
    "about.p1": "ตั้งแต่ปี 2547 เราเป็นจุดหมายที่ไว้วางใจของผู้ที่รักรถยนต์ ความมุ่งมั่นในคุณภาพและบริการทำให้ลูกค้ากว่า 10,000 คนไว้วางใจเรา",
    "about.p2": "รถยนต์ทุกคันในคอลเลคชันผ่านการตรวจสอบ 150 จุด เพื่อให้คุณได้รับความสมบูรณ์แบบเท่านั้น",
    "about.stat1": "ปี",
    "about.stat2": "ลูกค้า",
    "about.stat3": "จุดตรวจสอบ",
    "about.cta": "เรียนรู้เพิ่มเติม",
    
    // Contact
    "contact.subtitle": "ติดต่อ",
    "contact.title": "ติดต่อเรา",
    "contact.description": "พร้อมค้นหารถยนต์ในฝันแล้วหรือยัง? เยี่ยมชมโชว์รูมหรือติดต่อเรา เรายินดีให้บริการ",
    "contact.location": "ที่ตั้ง",
    "contact.phone": "โทรศัพท์",
    "contact.email": "อีเมล",
    "contact.hours": "เวลาทำการ",
    "contact.form.title": "ส่งข้อความ",
    "contact.form.name": "ชื่อ",
    "contact.form.phone": "เบอร์โทร",
    "contact.form.email": "อีเมล",
    "contact.form.vehicle": "รุ่นรถที่สนใจ",
    "contact.form.message": "ข้อความ",
    "contact.form.submit": "ส่งข้อความ",
    
    // Footer
    "footer.tagline": "โชว์รูมรถยนต์พรีเมียม มุ่งมั่นความเป็นเลิศด้านยานยนต์ตั้งแต่ปี 2547",
    "footer.vehicles": "รถยนต์",
    "footer.vehicles.new": "มาใหม่",
    "footer.vehicles.preowned": "มือสอง",
    "footer.vehicles.electric": "ไฟฟ้า",
    "footer.vehicles.sports": "สปอร์ต",
    "footer.services": "บริการ",
    "footer.services.center": "ศูนย์บริการ",
    "footer.services.financing": "สินเชื่อ",
    "footer.services.insurance": "ประกันภัย",
    "footer.services.tradein": "เทิร์นรถ",
    "footer.company": "บริษัท",
    "footer.company.about": "เกี่ยวกับเรา",
    "footer.company.contact": "ติดต่อ",
    "footer.company.careers": "ร่วมงาน",
    "footer.company.news": "ข่าวสาร",
    "footer.rights": "สงวนลิขสิทธิ์",
    "footer.terms": "ข้อกำหนด",
    "footer.privacy": "ความเป็นส่วนตัว",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("th")

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved && (saved === "en" || saved === "th")) {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
