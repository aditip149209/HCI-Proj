import AlertBanner from './components/AlertBanner'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import InfoStrip from './components/InfoStrip'
import PromoBanner from './components/PromoBanner'
import Footer from './components/Footer'
import AccessibilityWidget from './components/AccessibilityWidget'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-950 transition-colors duration-300">
      <AlertBanner />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <InfoStrip />
      <PromoBanner />
      <Footer />
      <AccessibilityWidget />
    </div>
  )
}
