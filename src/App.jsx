
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Testimonials from './components/Testimonials/Testimonials'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <Testimonials/>
      <Contact/>
      
    </div>
  )
}

export default App