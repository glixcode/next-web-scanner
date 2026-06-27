"use client"
import { Input } from '@/components/ui/input';
import { Globe, Search } from 'lucide-react';
import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import GuideCard from './components/GuideCard';

const Discover = () => {
  const [searchResults, setSearchResults] = React.useState([]);
  const [hasSearched, setHasSearched] = React.useState(false);
  const [searchKey, setSearchKey] = React.useState('');

  const handleSearch = () => {
    if (searchKey === '') {
      toast.error('Please enter a valid search key', {
        position: 'bottom-right',
        style: {
          background: '#333',
          color: '#fff',
        }
      })
      return
    }
    setHasSearched(true);
  }

  return (
    <main className='flex w-full h-full gap-2'>
      <Toaster/>
      <div className='flex-1'>
        <div className=' rounded-lg shadow-md shadow-gray-200 border border-gray-100 py-4 px-6'>
          <section className='flex items-center gap-2 mb-5'>
            <span className='h-12 w-12 rounded-full bg-emerald-100 flex justify-center items-center'>
              <Search className='h-6 w-6 text-emerald-600' />
            </span>
            <div>
              <h2 className="text-lg font-semibold text-black">Search businesses by industry and location</h2>
              <p className="text-xs text-gray-600">Use keywords like 'law firms in Los Angeles' or 'accountants in New York City'.</p>
            </div>
          </section>
          <section className='flex items-center gap-2 mb-4 text-sm'>
            <Input
              onChange={(e) => setSearchKey(e.target.value)}
              value={searchKey}
              className="h-10 focus-visible:border-emerald-300 focus-visible:ring-emerald-200/20 text-xs"
              type="text"
              placeholder="e.g. law firms in Los Angeles, restaurants in Atlanta, etc."
            />
            <button
              onClick={handleSearch}
              className='h-10 min-w-25 bg-emerald-500 flex justify-center items-center p-2 rounded-lg gap-1 text-white text-sm cursor-pointer shadow-md hover:shadow-blue-100 '
            >
             Search
            </button>
          </section>
        </div>
        {
          !hasSearched &&
          <div className='flex mt-5 rounded-lg shadow-md shadow-gray-200 border border-gray-100 py-4 px-6'>
            <section className='flex-1 mb-5'>
              <h4 className="text-md font-bold text-black">How it works</h4>
              <div className='flex min-h-75'>
               <GuideCard 
                number={1} 
                Icon={Globe}
                title='Search Businesses'
                description='Enter keywords like "law firms in Los Angeles" or "accountants in New York City".'
               />
               <GuideCard 
                number={1} 
                Icon={Globe}
                title='Search Businesses'
                description='Enter keywords like "law firms in Los Angeles" or "accountants in New York City".'
               />
               <GuideCard 
                number={1} 
                Icon={Globe}
                title='Search Businesses'
                description='Enter keywords like "law firms in Los Angeles" or "accountants in New York City".'
               />
               <GuideCard 
                number={1} 
                Icon={Globe}
                title='Search Businesses'
                description='Enter keywords like "law firms in Los Angeles" or "accountants in New York City".'
               />
              </div>
            </section>
            <section className='w-1/6 min-h-15 rounded-lg bg-emerald-50'>
              
            </section>
          </div>   
        }   
      </div>
      {
        hasSearched && 
        <div className={`w-1/4 p-3 bg-gray-50 rounded-lg`}>
          <div className='min-h-90 w-full bg-white rounded-lg'>

          </div>
        </div>
      }
    </main>
  )
}

export default Discover