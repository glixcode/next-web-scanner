import React from 'react'
import { SearchResultType } from '../types';
import { Eye, MapPin, Phone, Plus } from 'lucide-react';
import Link from 'next/link';
import { Checkbox } from '@/components/ui/checkbox';


const ListCard = ({data, checkChanged}:{data:SearchResultType, checkChanged: (checked:boolean,passedData: SearchResultType) => void}) => {
  return (
      <div className='border p-4 mt-3'>
        <div className='flex items-center justify-between px-2'>
			<div className='flex items-center gap-6'>
				<Checkbox 
				className='h-6 w-6 text-md data-checked:bg-emerald-500 data-checked:text-white border-emerald-500 data-checked:border-gray-50'
				value={data.url}
				onCheckedChange={(checked) => checkChanged(checked as boolean, data)}/>
				<img 
				src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${data.url}&size=128`} 
				alt="Image" 
				className="h-15 object-cover rounded-md border" />
				<div className='text-sm'>
					<h5 className='font-bold text-black'>{data.title}</h5>
						{data.url && <Link target='_blank' rel='noopener noreferrer' href={data.url} className=' mt-1 text-emerald-500'>{data.url}</Link>}
					<p className='flex gap-1 mt-1'>
						<MapPin className='h-4 w-4'/>
						{data.postal_address?.displayAddress ?? "Address not available"}
					</p>
					<p className='flex gap-1 mt-1'>
						<Phone className='h-4 w-4'/>
						{data.contact?.telephone ?? "No contact available"}
					</p>
				</div>
			</div>
			<div className='text-xs'>
				<button className='p-2 rounded-sm flex justify-center gap-1 items-center cursor-pointer border text-black min-w-25'>
					<Eye className='h-3 w-3'/> Preview

				</button>
				<button className='p-2 bg-emerald-400 text-white rounded-sm flex justify-center items-center cursor-pointer mt-2 min-w-25'>
					<Plus className='h-3 w-3'/>Save Lead
				</button>
			</div>
        </div>
      </div>
  )
}

export default ListCard