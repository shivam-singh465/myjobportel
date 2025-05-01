import React from 'react'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi", "Noida", "Gurugram", "Pune"]
  },
  {
    filterType: "Industry",
    array: ["Back-End", "Frond-End", "Full-Stack", "Data Analist"]
  },
  {
    filterType: "Salay",
    array: ["20k-30k", "25k-40k", "35k-50k", "50k+"]
  },
]

function FilterCard() {
  return (
    <div>
      <h1 className='text-2xl font-semibold my-2'>Filter</h1>
      <hr className='mt-3' />
      <div>
        <RadioGroup>

          {
            filterData.map((data, index) => {
                return (

                  <div key={index} className='mt-5'>
                    <h1 className='font-bold text-lg'>{data.filterType}</h1>
                    {
                      data.array.map((item, index) => {
                          return (
                            <div key={index} className='flex gap-2 items-center my-2 px-2'>
                              <RadioGroupItem value={item}/>
                                
                              <Label className="text-shadow-none text-sm text-shadow-muted-foreground">{item}</Label>
                            </div>
                          )
                        })
                    }
                  </div>
                )

              }
            )
          }
        </RadioGroup>

      </div>
    </div>
  )
}

export default FilterCard