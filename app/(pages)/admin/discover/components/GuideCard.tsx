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
      <div className='border mt-2'>
          <span className='text-[10px] h-4 w-4 rounded-full bg-emerald-600 flex justify-center items-center text-white p-2'>
              {number}
          </span>
          <div className="flex mt-1 gap-2">
              <span className='h-12 w-12 rounded-lg bg-emerald-100 flex justify-center items-center'>
                  <Icon className='h-8 w-8 text-emerald-600' />
              </span>
              <div className='bg-red-100'>
                  <h4 className="text-sm font-semibold text-black">{title}</h4>
                  <p className="text-xs text-gray-600">{description}</p>
              </div>
          </div>
      </div>
  )
}

export default GuideCard