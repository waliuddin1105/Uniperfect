import React from 'react'
import Navbar from '../../components/Superior/Navbar'
import Footer from '../../components/Superior/Footer'
import SafetyModules from '../../components/Superior/Safetymodules'
import Hero from '../../components/Superior/Hero'
import WhyChooseSuperior from '../../components/Superior/WhyChooseSuperior'

function SuperiorHome() {
  return (
    <>
      <Navbar />
      <Hero />
      <SafetyModules /> 
      <WhyChooseSuperior />
      <Footer />
    </>
  )
}

export default SuperiorHome
