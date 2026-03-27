"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, MessageCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Contact() {
  const { t } = useLanguage()

  const contactInfo = [
    {
      icon: MapPin,
      title: t("contact.location"),
      details: [
        "บริษัท ออโต้ แกลเลอรี่ ซีคอน จำกัด",
        "446 ถนนศรีนครินทร์ แขวงหนองบอน เขตประเวศ กรุงเทพมหานคร 10250",
      ],
      mapUrl: "https://maps.app.goo.gl/CGuur2pKD8h6onjh7",
    },
    {
      icon: Phone,
      title: t("contact.phone"),
      details: [
        "ฝ่ายขาย: 02-743-4600 ต่อ 101-102",
        "ฝ่ายบริการ: 02-743-4600 ต่อ 603-605",
        "ฝ่ายอะไหล่: 02-743-4600 ต่อ 501-502",
        "ฝ่ายซ่อมสีและตัวถัง: 02-743-4600 ต่อ 144-145",
      ],
    },
    {
      icon: MessageCircle,
      title: "Social",
      details: ["Facebook: ฟอร์ดศรีนครินทร์", "Line: @ford.thai"],
    },
  ]

  return (
    <section id="contact" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left - Contact Info */}
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
              {t("contact.subtitle")}
            </p>
            <h2 className="text-3xl lg:text-5xl font-light text-foreground tracking-tight text-balance mb-8">
              {t("contact.title")}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12 max-w-md">
              {t("contact.description")}
            </p>

            <div className="grid gap-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center shrink-0">
                    <item.icon className="h-4 w-4 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-1">
                      {item.title}
                    </h3>
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                    {item.mapUrl && (
                      <a
                        href={item.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-sm underline underline-offset-2 text-foreground hover:text-foreground/80"
                      >
                        ดูแผนที่
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-background rounded-3xl p-6 lg:p-10">
            <h3 className="text-xl font-medium text-foreground mb-8">
              {t("contact.form.title")}
            </h3>
            <form className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input 
                  placeholder={t("contact.form.name")}
                  className="h-12 text-base bg-secondary border-none rounded-xl"
                />
                <Input 
                  type="tel" 
                  placeholder={t("contact.form.phone")}
                  className="h-12 text-base bg-secondary border-none rounded-xl"
                />
              </div>
              
              <Input 
                type="email" 
                placeholder={t("contact.form.email")}
                className="h-12 text-base bg-secondary border-none rounded-xl"
              />

              <Input 
                placeholder={t("contact.form.vehicle")}
                className="h-12 text-base bg-secondary border-none rounded-xl"
              />

              <Textarea 
                placeholder={t("contact.form.message")}
                rows={4}
                className="text-base resize-none bg-secondary border-none rounded-xl"
              />

              <Button 
                type="submit" 
                size="lg"
                className="h-12 text-sm rounded-full bg-foreground text-background hover:bg-foreground/90 mt-2"
              >
                {t("contact.form.submit")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
