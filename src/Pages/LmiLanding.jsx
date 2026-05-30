import React from 'react'
import '../Style/Landing.css'

import LmiNavbar from './LmiNavbar'
import LmiHero from './LmiHero'
import LmiAbout from './LmiAbout'


function LmiLanding() {
  return (
    <div className='landing-container'>
        <LmiNavbar/>
        <LmiHero/>
        <LmiAbout/>

    </div>
  )
}

export default LmiLanding