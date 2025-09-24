import React from 'react'
import Navbar from './NavBar'
import Hero from './Hero'
import WhoWeAre from './WhoWeAre'
import OurTeam from './OurTeam'
import WhatWeBuild from './WhatWeBuild'
import CountriesWeServed from './CountriesWeServed'
import IndustriesWeServed from './IndustriesWeServed'
import Testimonial from './Testimonial'
import ProjectForm from './ProjectForm'
import Footer from './Footer'
import Projects from './Projects'
import ContactUs from './ContactUs'

const Page = () => {
  return (
    <div className='dark:bg-gray-900 w-full overflow-x-hidden'>
      <Navbar />
      <main className='w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
        <Hero />
        <WhoWeAre />
        <OurTeam />
        <WhatWeBuild />
        <Projects />
        <CountriesWeServed />
        <IndustriesWeServed />
        <Testimonial />
        <ProjectForm />
        <ContactUs/>
      </main>
      <Footer />
    </div>
  )
}

export default Page
