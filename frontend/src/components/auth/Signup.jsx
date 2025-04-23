import React from 'react'
import { Card } from '../ui/card'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Navbar } from '../index'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { useState} from 'react'
import { setLoading } from '../../../redux/authSlice'

import axios from 'axios'
import { USER_API_END_POINT } from '../../../utils/constant'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'


function Signup() {
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    role: "",
    file: "",
  })


  const dispatch = useDispatch()

  const {loading}= useSelector(store=> store.auth)
  const navigate = useNavigate()
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] })
  }

  const submitHandler = async(e) => {
    // console.log("input",input)
    e.preventDefault()
    const formData = new FormData()
    formData.append("fullName", input.fullName)
    formData.append("email", input.email) 
    formData.append("password", input.password)
    formData.append("role", input.role)
    formData.append("phone", input.phone)

    // console.log(formData.get("fullName"))
    

    if(input.file) {
      formData.append("file", input.file)
    }
    try {
      dispatch(setLoading(true))
      const res= await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers:{
          'Content-Type': 'multipart/form-data'
        },
        withCredentials:true,
      })
      if(res.data.success){
        navigate('/login')
        toast.success(res.data.message)
      }
    } catch (error) {
      // console.log(error)
      toast.error(error.response?.data?.message || "Something went wrong")
    }finally{
      dispatch(setLoading(false))
    }
    
  }



  return (
    <>
      <div className='min-h-screen  bg-gradient-to-br from-white via-pink-100 to-purple-300'>
        <Navbar />
        <div className="flex flex-col justify-center my-10 items-center ">

          <Card className='w-1/4 py-1  border-4 border-purple-700 rounded-md shadow-lg shadow-purple-700/30'>

            <h1 className='text-3xl mx-auto font-semibold text-shadow-md/30 text-shadow-purple-500'>Sign <span className='text-purple-700'>Up</span></h1>

          </Card>
          <Card className='w-1/4 px-7 my-1 border-4 rounded-t-md border-purple-700 shadow-lg shadow-purple-700/30'>
            <form onSubmit={submitHandler} >
              {/* name here-----------------------------------------------------full name----------------- */}
              <div className='mt-2'>
                <Label> Enter your full name</Label>
                <Input type="text" placeholder="Enter your full name" name="fullName" value={input.fullName} onChange={changeEventHandler}></Input>
              </div>
              {/* email-----------------------------------------------------Email----------------- */}
              <div className='mt-2'>
                <Label >Enter your E-mail</Label>
                <Input type="email" placeholder="Enter your E-Mail" name="email" value={input.email} onChange={changeEventHandler}></Input>
              </div>
              {/* -----------------------------------------------------phonenumber----------------- */}
              <div className='mt-2'>
                <Label>Enter your Phone Number</Label>
                <Input type="number" placeholder="Enter your Phone Number" name="phone" value={input.phone} onChange={changeEventHandler}></Input>
              </div>
              {/* -----------------------------------------------------password----------------- */}
              <div className='mt-2'>
                <Label>Enter your Password</Label>
                <Input type="password" placeholder="Enter your Password" name="password" value={input.password} onChange={changeEventHandler}></Input>
              </div>
              <div>
                <div>
                  <RadioGroup className="flex my-4 py-2" value={input.role} onChange={(e) => setInput({ ...input, role: e.target.value })}>
                    <div className="flex items-center space-x-2">
                      <Input type="radio" className='shadow-none' id="student" name="role" value="student" />
                      <Label htmlFor="student" className='text-muted-foreground'>Student</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Input type="radio" className='shadow-none' id="recrutier" name="role" value="recrutier" />
                      <Label htmlFor="recrutier" className='text-muted-foreground'>Recrutier</Label>
                    </div>
                  </RadioGroup>
                  <div className=' flex justify-between items-center'>
                    <Label>Profile Pic</Label>
                    <Input type="file" accept="image/*" name="file" className='w-2/3 text-muted-foreground' onChange={changeFileHandler} ></Input>
                  </div>
                  {
              loading ? <Button className="w-full mt-3 bg-purple-500 hover:bg-purple-700"> <Loader2 className="m-2 h-4 w-4 animate-spin " />Please Wait </Button> : <Button type='submit' className='w-full mt-3 bg-purple-500 hover:bg-purple-700'
              >Sing Up</Button>
            }



                  <span className='text-sm'>Already have an account ? <Link to='/login'> Login</Link></span>
                </div>
              </div>

            </form>



          </Card>
        </div>
      </div>

    </>
  )
}

export default Signup