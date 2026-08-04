import React from 'react'
import Navbar from '../../components/UniPerfect/Navbar'
import Footer from '../../components/UniPerfect/Footer'
import SafetyModules from '../../components/UniPerfect/Safetymodules'
import Hero from '../../components/UniPerfect/Hero'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SafetyModules />
      <Footer />
    </>
  )
}

export default Home
