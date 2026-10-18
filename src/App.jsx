import { Routes, Route } from "react-router";

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
// import Projects from './pages/Projects'
// import Services from './pages/Services'
// import Testimonials from './pages/Testimonials'

function App() {
  Footer
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App