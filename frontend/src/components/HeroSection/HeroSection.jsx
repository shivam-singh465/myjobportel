import { Search } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

function HeroSection() {
    return (
        <div>
            <div className='flex flex-col justify-center items-center py-10 text-center mt-10'>
                <span className='rounded-full bg-purple-100 px-2 py-1 text-orange-600 font-semibold'>NO.1 Job Seeking Website</span>
                <h1 className='text-5xl font-bold my-2 mt-5'>Search Apply & <br /> Get Your <span className='text-purple-700'>Dream Job</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium nostrum eum aut.</p>
            </div>
            <div id="searchbar" className='flex justify-center items-center shadow-xl w-[40%] m-auto rounded-full'>
                <input type="text" placeholder='Find Your Dream Job' className='border-none outline-none text-lg w-full  px-2' />
                <Button className='bg-purple-700 hover:bg-purple-800 rounded-r-full'>
                    <Search/>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection