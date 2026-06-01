import React from 'react'
import '../Style/Landing.css'

import LmiNavbar from './LmiNavbar'
import LmiHero from './LmiHero'
import LmiAbout from './LmiAbout'
import LmiPartnerBenefit from './LmiPartnerBenefit'
import LmiCTA from './LmiCTA'
import LmiFooter from './LmiFooter'


function LmiLanding() {
  return (
    <div className='landing-container'>
        <LmiNavbar/>
        <LmiHero/>
        <LmiAbout/>
        <LmiPartnerBenefit/>
        <LmiCTA/>
        <LmiFooter/>

    </div>
  )
}

export default LmiLanding