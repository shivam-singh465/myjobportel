import React from 'react'
import { Badge } from '../ui/badge'

function LatestJobCard() {
  return (
    <div className='bg-white shadow-lg shadow-purple-300 rounded-lg p-4 hover:scale-101 transition-all border-3 border-purple-300'> 
      <div className='mb-3'>
        <h1 className='font-medium text-lg'>Company Name</h1>
        <p className=' font-mono text-sm leading-0.5 text-gray-700'>India/delhi</p>
      </div>
      <div>
        <h2 className='font-bold text-xl'>Job Title</h2>
        <p className=' font-mono text-sm  text-gray-700 my-2 mt-0'>discription Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className='flex justify-center gap-2'>
        <Badge className={"text-orange-600 mx-2 px-2 border border-purple-600"} variant="ghost">12 position</Badge>
        <Badge className={"text-orange-600 mx-2 px-2 border border-purple-600"} variant="ghost">Part Time</Badge>
        <Badge className={"text-orange-600 mx-2 px-2 border border-purple-600"} variant="ghost">12 LPA</Badge>
      </div>

    </div>
  )
}

export default LatestJobCard