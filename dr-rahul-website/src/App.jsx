import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Achievements from './components/Achievements'
import AchievementsCases from './components/AchievementsCases'
import Testimonials from './components/Testimonials'
import Education from './components/Education'
import FAQ from './components/FAQ'
import BookAppointment from './components/BookAppointment'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-sans bg-white">
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
    </div>
  )
}

export default App
