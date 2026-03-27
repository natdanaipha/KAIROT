import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getVehicleById } from "@/lib/vehicles"
import { HighlightGallery } from "@/components/highlight-gallery"

interface VehicleDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function VehicleDetailPage({ params }: VehicleDetailPageProps) {
  const { id } = await params
  const vehicle = getVehicleById(id)

  if (!vehicle) {
    notFound()
  }

  const highlights = [
    {
      image: vehicle.image,
      title: "ดีไซน์ภายนอกโดดเด่น",
      description: "กระจังหน้าและเส้นสายรอบคันออกแบบให้ดูพรีเมียมและแข็งแกร่งในทุกมุมมอง",
    },
    {
      image: "/images/hero-car.jpg",
      title: "ห้องโดยสารทันสมัย",
      description: "ภายในกว้างขวาง พร้อมเทคโนโลยีช่วยขับและความสะดวกสบายสำหรับทุกการเดินทาง",
    },
    {
      image: "/images/car-audi.jpg",
      title: "ระบบความปลอดภัยครบ",
      description: "เสริมความมั่นใจด้วยระบบช่วยเบรก ระบบเตือน และชุดความปลอดภัยมาตรฐานล่าสุด",
    },
    {
      image: "/images/car-tesla.jpg",
      title: "คุ้มค่าบริการหลังการขาย",
      description: "ดูแลง่ายด้วยทีมช่างและศูนย์บริการมาตรฐาน พร้อมอะไหล่และการรับประกันที่มั่นใจได้",
    },
  ]

  const variantsByBrand: Record<string, string[]> = {
    Ford: ["Ranger XL", "Ranger XLS", "Ranger XLT", "Ranger Wildtrak"],
    MG: ["MG4 D", "MG4 X", "MG4 V", "MG4 Long Range"],
    Toyota: ["Smart", "Premium", "Premium Luxury", "GR Sport"],
    Honda: ["E", "EL", "e:HEV EL+", "e:HEV RS"],
    Nissan: ["E", "V", "VL", "Sportech"],
  }

  const variants = variantsByBrand[vehicle.brand] ?? ["Standard", "Premium", "Flagship"]

  return (
    <main className="min-h-screen bg-background py-12 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <Link
          href="/#vehicles"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          กลับไปคอลเลคชัน
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-muted">
            <Image
              src={vehicle.image}
              alt={`${vehicle.brand} ${vehicle.name}`}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-3">{vehicle.brand}</p>
            <h1 className="text-3xl lg:text-5xl font-light text-foreground tracking-tight mb-6">{vehicle.name}</h1>
            <p className="text-2xl lg:text-3xl font-medium text-foreground mb-3">฿{vehicle.price}</p>
            <p className="text-sm text-muted-foreground mb-8">*ราคาโดยประมาณ โปรดตรวจสอบราคาจริงกับที่ปรึกษาการขาย</p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border p-4">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">ปี</p>
                <p className="text-base text-foreground">{vehicle.year}</p>
              </div>
              <div className="rounded-2xl border border-border p-4">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">ไมล์</p>
                <p className="text-base text-foreground">{vehicle.mileage}</p>
              </div>
              <div className="rounded-2xl border border-border p-4">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">เชื้อเพลิง</p>
                <p className="text-base text-foreground">{vehicle.fuelType}</p>
              </div>
              <div className="rounded-2xl border border-border p-4">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">สถานะ</p>
                <p className="text-base text-foreground">{vehicle.isNew ? "รถใหม่" : "รถมือสอง"}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="h-11 px-6 rounded-full bg-foreground text-background text-sm inline-flex items-center justify-center hover:bg-foreground/90 transition-colors"
              >
                นัดหมายรับข้อเสนอพิเศษ
              </Link>
              <Link
                href="/#contact"
                className="h-11 px-6 rounded-full border border-border text-sm inline-flex items-center justify-center hover:bg-secondary transition-colors"
              >
                จองทดลองขับ
              </Link>
            </div>
          </div>
        </div>

        <section className="mt-16 lg:mt-20">
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">รุ่นย่อย</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {variants.map((variant) => (
              <div key={variant} className="rounded-2xl border border-border px-4 py-3">
                <p className="text-sm text-foreground">{variant}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 lg:mt-16">
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">Highlights</p>
          <HighlightGallery highlights={highlights} />
        </section>
      </div>
    </main>
  )
}
