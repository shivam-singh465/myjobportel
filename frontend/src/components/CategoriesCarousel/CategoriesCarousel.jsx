import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { Button } from '../ui/button'

const categories = [
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
    "Data Scientist",
    "Data Analyst",
    "Machine Learning Engineer",
    "DevOps Engineer",
    "Graphic Designer",
    "UI/UX Designer",
]

function CategoriesCarousel() {
    return (
        <div>
            <Carousel className='w-[60%] m-auto my-30'>
                <CarouselContent className='flex justify-center items-center'>
                    {
                        categories.map((cat, index) => (
                            <CarouselItem key={index} className='flex justify-center items-center basis-1/3 py-10'>
                                <Button variant="outline" className='bg-white text-orange-600 font-semibold px-5 py-2 shadow-xl/30 shadow-purple-500 hover:bg-purple-800 hover:text-white hover:shadow-orange-500 transition-all duration-300 ease-in-out rounded-full inset-ring-2 ring-purple-600'>
                                    {cat}
                                </Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious className='bg-purple-700 text-white' />
                <CarouselNext  className='bg-purple-700 text-white'/>
            </Carousel>
        </div>
    )
}

export default CategoriesCarousel
