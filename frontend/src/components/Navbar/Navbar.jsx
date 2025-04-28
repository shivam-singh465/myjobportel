import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Avatar } from '../ui/avatar'
import logo from '../../assets/zoro.jpg'
import { AvatarImage } from '@radix-ui/react-avatar'
import resume from '../../assets/resume.svg'
import { LogOut } from 'lucide-react'

import { useState } from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
function Navbar() {
    const [user, setUser] = useState(false)
    return (
        <>
            <div >
                <div className='flex items-center justify-between max-w-6xl mx-auto h-18'>
                    <div>
                        <h1 className='text-3xl font-black '>
                            Job<span className='text-purple-600'>Portal</span>
                        </h1>
                    </div>
                    <div className='flex gap-4'>
                        <ul className='flex gap-6 items-center text-l font'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/job">Job</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                        </ul>
                        {
                            !user ? (
                                <div className='flex gap-4'>
                                   <Link to='/login'> <Button variant='outline' className='rounded-2 px-4 py-2 bg-purple-700 text-white hover:bg-purple-800 hover:text-white hover:scale-105'>Login</Button></Link>
                                   <Link to='/signup'>    <Button variant='outline' className='rounded-2 px-4 py-2 hover:bg-purple-800 hover:text-white hover:scale-105'>Signup</Button></Link>
                                </div>
                            ) : (


                                <Popover className='bg-purple-600 px-4 py-2 rounded-full'>
                                    <PopoverTrigger>
                                        <Avatar className='w-10 h-10'>
                                            <AvatarImage src={logo} alt="Avatar Image" className='object-cover cursor-pointer' />
                                        </Avatar>
                                    </PopoverTrigger>
                                    <PopoverContent className='p-3'>

                                        <div id='ur' className='flex items-center gap-2 m-0'>
                                            <Avatar className='w-10 h-10'>
                                                <AvatarImage src={logo} alt="Avatar Image" className='object-cover cursor-pointer' />
                                            </Avatar>
                                            <div>
                                                <p className='text-2xl'> Shivam Singh</p>
                                                <p className='text-sm leading-3 text-muted-foreground'>Lorem ipsum dolor sit amet consectetur </p>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-2 m-0 mt-4 hover:underline w-full'>
                                            <img src={resume} alt="logoutsvg" />
                                            <div className='flex justify-between w-full'>

                                                <p className='text-l'>Job You Appled</p>
                                                <p className=' '>-- 6</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-2 m-0 mt-4 hover:underline' onClick={() => setUser(false)}>
                                            <LogOut />
                                            <p className='text-l'>LogOut</p>
                                        </div>

                                    </PopoverContent>
                                </Popover>

                            )
                        }

                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar