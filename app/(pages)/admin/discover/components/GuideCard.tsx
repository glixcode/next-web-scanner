import { Search } from 'lucide-react'
import { LucideIcon } from 'lucide-react'
import React from 'react'

interface GuideCardProps {
    number: number
    Icon: LucideIcon
    title: string
    description: string
}

const GuideCard = ({number, Icon, title, description}: GuideCardProps) => {
  return (
      <div className='mt-3 flex items-center gap-4 px-2'>
          <span className='font-bold text-sm'>
              {number}
          </span>
          <div className="flex items-center gap-4 text-xs">
              <span className='h-8 w-8 rounded-lg bg-emerald-100 flex justify-center items-center'>
                  <Icon className='h-5 w-5 text-emerald-600' />
              </span>
              <div className=' w-50'>
                  <h4 className=" font-semibold text-black">{title}</h4>
                  <p className="">{description}</p>
              </div>
          </div>
      </div>
  )
}

export default GuideCard