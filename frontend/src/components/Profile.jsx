import React from 'react'
import Logo from "../assets/zoro.jpg"
import { Navbar } from './index'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Pen } from 'lucide-react'

function Profile() {
  return (
    <div>
      <Navbar />
      <div className='max-w-6xl mx-auto border-1 border-orange-500 rounded-md p-3 shadow-lg shadow-purple-300'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-4 justify-center' >
            <Avatar className='w-24 h-24'>
              <AvatarImage src={Logo} className='object-cover cursor-pointer' />
            </Avatar>
            <div>
              <h1 className='text-2xl uppercase font-bold'>full name</h1>
              <p className='text-muted-foreground'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, accusantium! Voluptatibus, officia.</p>
            </div>
            <Button><Pen /></Button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Profile  