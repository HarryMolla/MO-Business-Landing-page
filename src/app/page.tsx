import React from 'react'
import Navbar from './NavBar'
import Hero from './Hero'
import WhoWeAre from './WhoWeAre'
import Carousel from './componets/Carousel'
import OurTeam from './OurTeam'

const page = () => {
  return (
    <div className='grid dark:bg-gray-900'>
      <Navbar/>
      <Hero/>
      <WhoWeAre/>
      <OurTeam/>
    </div>
  )
}

export default page