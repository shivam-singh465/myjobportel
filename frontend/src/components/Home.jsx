import React from 'react'
import { Navbar ,HeroSection, CategoriesCarousel, LatestJob} from './index'

function Home() {
  return (
    <>
    <Navbar />
    <HeroSection/>
    <CategoriesCarousel/>
    <LatestJob/>
    </>
  )
}

export default Home