import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import AchievementsCases from './components/AchievementsCases'
import Achievements from './components/Achievements'
import Testimonials from './components/Testimonials'
import Education from './components/Education'
import FAQ from './components/FAQ'
import BookAppointment from './components/BookAppointment'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'

function App() {
  return (
    <div className="font-sans bg-white pb-20 md:pb-0">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AchievementsCases />
        <Achievements />
        <Testimonials />
        <Education />
        <FAQ />
        <BookAppointment />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  )
}

export default App
