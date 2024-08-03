import React from 'react'
import Product_Section from '../../componnents/Product_section/Product_Section'
import Iso from '../../componnents/Iso/Iso'
import Quote from '../../componnents/Quote/Quote'
import Hero from '../../componnents/Hero/Hero'
import Navbar from '../../componnents/Navbar/Navbar'
import SectionEndPage from '../../componnents/SectionEndPage/SectionEndPage'


const Home = () => {
  return (
    <>
        <Navbar />

      <Hero/>
      <Product_Section />
      <Iso /> 
      <Quote/>
      <SectionEndPage/>
    </>
  )
}

export default Home