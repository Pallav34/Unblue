
import './App.css'
import Navbar from './components/Navbar/Navbar'
import NavModified from './components/NavModified/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'
import WhyChooseUnblue from './components/Choose/WhyChooseUnblue'


const App = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <NavModified/>
      <Hero/>
      <Testimonials/>
      <Services/>
      <WhyChooseUnblue/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App