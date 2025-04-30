import React from 'react'
import { Card } from '../ui/card'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Navbar } from '../index'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { USER_API_END_POINT } from '../../../utils/constant'
import { toast } from 'sonner'
import { useDispatch } from 'react-redux'
import { setLoading } from '../../../redux/authSlice'
import { useSelector } from 'react-redux'
import { Loader2 } from 'lucide-react'


function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { loading } = useSelector(store => store.auth)
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  })



  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }
  const submitHandler = async (e) => {
    // console.log("input",input)
    e.preventDefault()

    try {
      dispatch(setLoading(true))
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true,
      })
      if (res.data.success) {
        navigate('/')
        toast.success(res.data.message)
      }
    } catch (error) {
      // console.log(error)
      toast.error(error.response?.data?.message || "Something went wrong")
      // toast.error(error.response.data.message)
    } finally {
      dispatch(setLoading(false))
    }

  }

  return (
    <div className='min-h-screen  bg-gradient-to-br from-white via-pink-100 to-purple-300'>
      <Navbar />
      <div className="flex flex-col justify-center my-10 items-center ">

        <Card className='w-1/4 py-1  border-4 border-purple-700 rounded-md shadow-lg shadow-purple-700/30'>

          <h1 className='text-3xl mx-auto font-semibold text-shadow-md/30 text-shadow-purple-500'>Log<span className='text-purple-700'>in</span></h1>

        </Card>
        <Card className='w-1/4 px-7 my-1 border-4 rounded-t-md border-purple-700 shadow-lg shadow-purple-700/30'>
          <form onSubmit={submitHandler} >

            {/* email-----------------------------------------------------Email----------------- */}
            <div className='mt-2'>
              <Label >Enter your E-mail</Label>
              <Input type="email" placeholder="Enter your E-Mail" name="email" value={input.email} onChange={changeEventHandler}></Input>
            </div>
            {/* -----------------------------------------------------password----------------- */}
            <div className='mt-2'>
              <Label>Enter your Password</Label>
              <Input type="password" placeholder="Enter your Password" name="password" value={input.password} onChange={changeEventHandler}></Input>
            </div>

            <div>
              <RadioGroup className="flex my-4 py-2" defaultValue='student'>
                <div className="flex items-center space-x-2">
                  <Input type="radio" className='shadow-none' id="student" name="role" value="student" checked={input.role === "student"} onChange={changeEventHandler} />
                  <Label htmlFor="student" className='text-muted-foreground'>Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Input type="radio" className='shadow-none' id="recrutier" name="role" value="recrutier" checked={input.role === "recrutier"} onChange={changeEventHandler} />
                  <Label htmlFor="recrutier" className='text-muted-foreground'>Recrutier</Label>
                </div>
              </RadioGroup>
            </div>

            {
              loading ? <Button className="w-full mt-3 bg-purple-500 hover:bg-purple-700"> <Loader2 className="m-2 h-4 w-4 animate-spin " />Please Wait </Button> : <Button type='submit' className='w-full mt-3 bg-purple-500 hover:bg-purple-700'
              >Login</Button>
            }


            <span className='text-sm'>Create an account!  <Link to='/signup'>Signup</Link></span>
          </form>



        </Card>
      </div>
    </div>
  )
}

export default Login