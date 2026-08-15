import Nav from './components/Nav'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Features from './sections/Features'
import HowItWorks from './sections/HowItWorks'
import Hardware from './sections/Hardware'
import Pricing from './sections/Pricing'
import Dealers from './sections/Dealers'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Nav />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Hardware />
        <Pricing />
        <Dealers />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
