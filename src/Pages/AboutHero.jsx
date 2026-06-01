import React from 'react'
import LmiNavbar from './LmiNavbar'
import HeroAbout from './About/HeroAbout'
import AboutMain from './About/AboutMain'
import VisiMisiAbout from './About/VisiMisiAbout'
import ValueAbout from './About/ValueAbout'
import HistorySection from './About/HistorySection'
import AboutCTA from './About/AboutCTA'
import LmiFooter from './LmiFooter'

function AboutHero() {
  return (
    <div>
        <LmiNavbar/>
        <HeroAbout/>
        <AboutMain/>
        <VisiMisiAbout/>
        <ValueAbout/>
        <HistorySection/>
        <AboutCTA/>
        <LmiFooter/>
    </div>
  )
}

export default AboutHero