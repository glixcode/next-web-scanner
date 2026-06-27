import { LucideIcon } from 'lucide-react'
import React from 'react'

interface ResultCardProps {
    Icon: LucideIcon
    label: string
    score: number
    status: string
}

const colorStatus = {
    good : "emerald-400",
    fair : "yellow-400",
    poor : "red-400",
}

const ResultCard = ({Icon, label, score, status}: ResultCardProps) => {
  return (
    <div className='flex items-center h-16 min-w-45 border rounded-md p-2 gap-2 text-xs'>
        <span className={`h-8 w-8 flex justify-center items-center bg-emerald-100 rounded-lg`}>
            <Icon className='h-4 w-4'/>
        </span>
        <div className='text-xs'>
            <h6 className='font-bold'>{label}</h6>
            <span className='font-bold'>{score}<span className='font-normal'>/100</span></span>
            <span className='text-[9px] text-gray-600 ml-2 font-semibold'>Good</span>
        </div>
    </div>
  )
}

export default ResultCard