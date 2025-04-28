import React from 'react'
import { LatestJobCard } from '..'

const randomJobs=[1,2,3,4,5,6,7,8,9,10]

function LatestJob() {
  
  return (
    <div>
      <div className='max-w-3/4 mx-auto'>
        <h1 className='text-3xl font-bold '><span className='text-purple-700'>Latest & Top</span> Job Opening</h1>
        <div className='grid grid-cols-3 gap-4 py-5 justify-items-center'>

        {
          randomJobs.slice(0,6).map((item , index)=><LatestJobCard/>)
        }

        </div>

      </div>
    </div>
  )
}

export default LatestJob