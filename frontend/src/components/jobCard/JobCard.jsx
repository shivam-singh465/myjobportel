import { Bookmark } from 'lucide-react'
import React from 'react'
import reactLogo from '../../assets/react.svg'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Badge } from '../ui/badge'
import { Card } from '../ui/card'
import { Button } from '../ui/button'

function JobCard() {
  return (
    <Card className='p-5 shadow-lg border-none'>
      <div>
        <div className='flex justify-between w-full'>
          <p className='text-muted-foreground text-sm'>3days ago</p>
          <p><Bookmark /></p>
        </div>
        <div className='flex items-center capitalize text-md gap-2'>
          <Avatar>
            <AvatarImage src={reactLogo} />
          </Avatar>
          <h2>The Company name</h2>
        </div>
        <div>
          <h2 className='text-xl capitalize font-bold'>this is the job title</h2>
          <p className='pe-10 text-sm text-muted-foreground'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam odit ipsum consequatur repellendus. Repellendus, tempora.</p>
        </div>
        <div className='flex justify-start gap-2 pt-2'>
          <Badge className={"text-orange-600 mx-2 px-2 border border-purple-600"} variant="ghost">12 position</Badge>
          <Badge className={"text-orange-600 mx-2 px-2 border border-purple-600"} variant="ghost">Part Time</Badge>
          <Badge className={"text-orange-600 mx-2 px-2 border border-purple-600"} variant="ghost">12 LPA</Badge>
        </div>
        <div className='flex justify-start gap-2 pt-2'>
          <Button className='text-xs h-8 bg-white text-black hover:bg-orange-500 hover:text-white'>More Details</Button>
          <Button className='text-xs h-8 bg-purple-700 text-white hover:bg-orange-500'>Save For Later</Button>
        </div>

      </div>
    </Card>
  )
}

export default JobCard