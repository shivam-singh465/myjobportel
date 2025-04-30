import React from 'react'
import { Navbar ,HeroSection, CategoriesCarousel, LatestJob, Footer} from './index'

function Home() {
  return (
    <>
    <Navbar />
    <HeroSection/>
    <CategoriesCarousel/>
    <LatestJob/>
    <Footer/>
    </>
  )
}

export default Home