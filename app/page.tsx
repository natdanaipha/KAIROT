import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { VehicleGrid } from "@/components/vehicle-grid"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <VehicleGrid />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
