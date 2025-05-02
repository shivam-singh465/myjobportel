import React from 'react'
import Logo from "../assets/zoro.jpg"
import { AppliedJobTable, Navbar } from './index'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'

const skills = ["html", "css", "js"]

function Profile() {
  const isResume = "true"
  return (
    <div>
      <Navbar />
      <div className='max-w-6xl mx-auto border-1 border-orange-500 rounded-md p-3 shadow-lg shadow-purple-300'>
        <div className=''>
          <div className='flex justify-between items-center gap-4' >
            <div className='flex items-center gap-4'>
              <Avatar className='w-24 h-24'>
                <AvatarImage src={Logo} className='object-cover cursor-pointer' />
              </Avatar>
              <div>
                <h1 className='text-2xl uppercase font-bold'>full name</h1>
                <p className='text-muted-foreground'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, accusantium! Voluptatibus, officia.</p>
              </div>
            </div>
            <Button variant="outline"><Pen /></Button>
          </div>
        </div>
        <div>
          <div className='my-4 flex flex-col gap-4' >
            <h2 className='text-xl font-semibold capitalize'>Genrel Infomation</h2>
            <div className='flex gap-2 ps-4 text-gray-600'>
              <Mail />
              <span>UserEmail@gmail.com</span>
            </div>
            <div className='flex gap-2 ps-4 text-gray-600'>
              <Contact />
              <span>85698569823</span>
            </div>
          </div>
          <div className='my-4 flex flex-col gap-4' >
            <h2 className='text-xl font-semibold capitalize'>skills</h2>
            <div className='flex gap-3 ps-4'>
              {
                skills.length !== 0 ? skills.map((item, index) => {
                  return (
                    <Badge key={index} className={"min-w-20 text-sm border-1 border-orange-500"} variant={"outline"}> {item} </Badge>
                  )
                }) :
                  <div className='flex gap-2 ps-4 text-gray-600'>

                    <span>please enter your skil</span>
                  </div>
              }
            </div>
          </div>
          <div className='my-4 flex flex-col gap-4' >
            <h2 className='text-xl font-semibold capitalize'>Resume</h2>
            <div className='flex ps-4'>
              {
                isResume !== true ? <><a href="/" target='_blanck' className='text-blue-400 hover:underline'>User's Resume</a> <span className='text-xs text-muted-foreground'>click to download </span></> : <span>please upload your reume</span>
              }
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-6xl mx-auto mt-4 border-1 border-orange-500 rounded-md p-3 shadow-lg shadow-purple-300'>

        <h1 className='text-xl font-semibold capitalize'>Applied Jobs</h1>
        <AppliedJobTable/>
      </div>
    </div>
  )
}

export default Profile  