import React, { useEffect } from 'react'
import './Contact.css'
import ContactMessages from '../../componnents/ContactMessages/ContactMessages'
import ContactSocialMedia from '../../componnents/ContactSocialMedia/ContactSocialMedia'
import ContactHero from '../../componnents/ContactHero/ContactHero'
import './Contact.css'
import { ColorContext } from '../../Contexts/ColorContext'
import Navbar from '../../componnents/Navbar/Navbar'
import SectionEndPage from '../../componnents/SectionEndPage/SectionEndPage'
function Contact() {
  const { setBrandColor } = React.useContext(ColorContext);

  useEffect(()=>{
    setBrandColor('#283760')
  },[])

  return (
    <>
        <Navbar />

    <div className='HJ_contact'>
      <ContactHero/>
      <ContactSocialMedia/>
      <ContactMessages/>
    </div>
  
      <SectionEndPage/>
    </>
  )
}

export default Contact