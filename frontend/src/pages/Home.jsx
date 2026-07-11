import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SafetyModules from '../components/Safetymodules'
import Hero from '../components/Hero'

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
