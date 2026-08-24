import React from 'react'
import Navbar from '../../components/UniPerfect/Navbar'
import Footer from '../../components/UniPerfect/Footer'
import SafetyModules from '../../components/UniPerfect/Safetymodules'
import Hero from '../../components/UniPerfect/Hero'
import WhyChooseUniPerfect from '../../components/UniPerfect/WhyChooseUniPerFect'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SafetyModules /> 
      <WhyChooseUniPerfect />
      <Footer />
    </>
  )
}

export default Home
