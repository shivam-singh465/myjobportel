import React from 'react'
import { Footer, Navbar, FilterCard, JobCard } from '../index'
import Logo from "../../assets/zoro.jpg"
import { Avatar, AvatarImage } from '../ui/avatar'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Share } from 'lucide-react'





const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function JobDiscription() {
  const isApplied = false
  return (
    <div>
      <Navbar />
      <div className='flex justify-center gap-3 mt-5 bg-white py-5 px-[5%]' >
        <div className='min-w-[20%]'>
          <FilterCard />
        </div>

        <div className='min-w-[80%] grid grid-cols-3 gap-5 bg-white p-5'>


          <div className='border rounded-md col-span-2 p-2'>

            <div className='flex items-center gap-4'>
              <Avatar className='w-24 h-24'>
                <AvatarImage src={Logo} className='object-cover cursor-pointer' />
              </Avatar>
              <div>
                <h1 className='text-2xl uppercase font-bold'>Company Name</h1>
                <p className='text-muted-foreground text-sm leading-3'> company discription Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, accusantium! Voluptatibus, officia.</p>
                <div className='flex justify-start gap-2 pt-2'>
                  <Badge className={"text-orange-600 mx-1 px-2 border border-purple-600"} variant="ghost">12 position</Badge>
                  <Badge className={"text-orange-600 mx-1 px-2 border border-purple-600"} variant="ghost">Part Time</Badge>
                  <Badge className={"text-orange-600 mx-1 px-2 border border-purple-600"} variant="ghost">12 LPA</Badge>
                </div>
              </div>
            </div>
            <div className='my-2 flex items-center gap-2'>
              <Button variant="outline" className={isApplied ?" pointer-events-none bg-gray-600 text-white font-semibold capitalize py-1" :"font-semibold capitalize py-1 bg-orange-500 text-white"}>{isApplied?"Already applied" :"apply now"}</Button>
              <Button className='pt-1 items-center' variant="outline"><Share/></Button>
            </div>
            <div className='my-2'>
              <div className='flex justify-between'>
                <h2 className='text-lg font-semibold'>Job Discription</h2>
                <span className='text-sm text-muted-foreground'>24/05/2025</span>
              </div>
              <div className='mt-2 px-4'>
                <h2 className='font-semibold'>Job Title</h2>
                <div className='w-full border rounded-md px-2 py-1 bg-gray-100 inset-shadow-sm shadow-purple-300   text-muted-foreground text-md'>FrontEnd Developer</div>
              </div>
              <div className='mt-2 px-4'>
                <h2 className='font-semibold'>Job Role</h2>
                <div className='w-full border rounded-md px-2 py-1 bg-gray-100 inset-shadow-sm shadow-purple-300   text-muted-foreground text-md text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum quod voluptatum nemo velit distinctio numquam molestias ea repellendus tempora qui?</div>
              </div>
              <div className='mt-2 px-4'>
                <h2 className='font-semibold'>Job Location</h2>
                <div className='w-full border rounded-md px-2 py-1 bg-gray-100 inset-shadow-sm shadow-purple-300   text-muted-foreground text-md text-sm'>Noida sector -56</div>
              </div>
              <div className='mt-2 px-4'>
                <h2 className='font-semibold'>Required Skills</h2>
                <div className='w-full border rounded-md px-2 py-1 bg-gray-100 inset-shadow-sm shadow-purple-300   text-muted-foreground text-sm'>html, css, js, php, sql, react, node, mongo</div>
              </div>
              <div className='mt-2 px-4'>
                <h2 className='font-semibold'>Exprences</h2>
                <div className='w-full border rounded-md px-2 py-1 bg-gray-100 inset-shadow-sm shadow-purple-300   text-muted-foreground text-sm'>1year - 3year</div>
              </div>
              <div className='mt-2 px-4'>
                <h2 className='font-semibold'>Salay</h2>
                <div className='w-full border rounded-md px-2 py-1 bg-gray-100 inset-shadow-sm shadow-purple-300   text-muted-foreground text-sm'>12LPA</div>
              </div>
            </div>






          </div>



          <div>
            <h2 className='text-xl capitalize font-bold text-center'>Related job</h2>
            <div className='flex flex-col gap-2 h-[90vh] overflow-y-auto overflow-x-hidden scrollbar-hide'>

              {
                jobsArray.map((item, index) => {
                  return (
                    <JobCard key={index} />
                  )
                })
              }
            </div>
          </div>

        </div>

      </div>


      <Footer />
    </div>
  )
}

export default JobDiscription;