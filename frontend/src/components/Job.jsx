import React from 'react'
import { Footer, Navbar, FilterCard, JobCard, UserPagination } from './index'
import { Filter } from 'lucide-react'

const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function Job() {
  return (
    <div>
      <Navbar />
      <div className='flex justify-center gap-3 mt-5 bg-white py-5 px-[5%]' >
        <div className='min-w-[20%] '>
          <FilterCard />
        </div>

        <div className='min-w-[80%] grid grid-cols-2 gap-5  overflow-y-auto bg-white p-5'>

          {
            jobsArray.map((item, index) => {
              return (
                <JobCard key={index} />
              )
            })
          }
          <JobCard />

        </div>

      </div>

          <UserPagination/>
      <Footer />
    </div>
  )
}

export default Job