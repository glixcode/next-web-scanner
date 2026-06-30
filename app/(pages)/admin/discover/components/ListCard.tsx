import React from 'react'
import { SearchResultType } from '../types';
import { MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

const ListCard = ({data}:{data:SearchResultType}) => {
  return (
      <div className='border p-4 mt-3'>
          <div className='flex items-center gap-6 px-2'>
              <img 
              src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${data.url}&size=128`} 
              alt="Image" 
              className="h-12 object-cover rounded-md border" />
              <div>
                  <h5 className='font-bold text-sm text-black'>{data.title}</h5>
                  {data.url && <Link target='_blank' rel='noopener noreferrer' href={data.url} className='text-xs mt-1 text-emerald-500'>{data.url}</Link>}
                  <p className='text-xs flex gap-1 mt-1'>
                    <MapPin className='h-4 w-4 text-blue-500'/>
                    {data.postal_address?.displayAddress ?? "Address not available"}
                </p>
              </div>
          </div>
      </div>
  )
}

export default ListCard