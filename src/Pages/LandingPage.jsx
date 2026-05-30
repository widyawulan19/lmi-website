import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import About from './About'
import VisiMisi from './VisiMisi'
import ProgramUtama from './ProgramUtama'
import Dokumentasi from './Dokumentasi'
import Footer from './Footer'

function LandingPage() {
  return (
    <div className='landing-container'>
        <Navbar/>
        <HeroSection/>
        <About/>
        <VisiMisi/>
        <ProgramUtama/>
        <Dokumentasi/>
        <Footer/>
    </div>
  )
}

export default LandingPage