import LegalBackdrop from './components/LegalBackdrop'
import Header from './components/Header'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => (
  <div className="relative min-h-screen">
    <a className="skip-link" href="#contenido">
      Saltar al contenido
    </a>
    <LegalBackdrop />
    <Header />
    <main id="contenido" className="relative z-10">
      <Hero />
      <Profile />
      <Experience />
      <Education />
      <Contact />
    </main>
    <Footer />
  </div>
)

export default App
