import React from 'react'
import Navbar from './components/navbar/Nav'
import Header from './components/header/Header'
import Rental from './components/rental/Rental'
import About from './components/about/About'
import Testimonials from './components/testimonials/Testimonials'
import Info from './components/info/Info'
import Details from './components/details/Details'
import CarInfo from './components/carinfo/Cars'
import Inspect from './components/inspect/Inspect'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
        <Navbar />
        <Header />
        <Rental />
        <About />
        <Testimonials />
        <Info />
        <Details />
        <CarInfo />
        <Inspect />
        <Footer />
    </> 
  )
}

export default App