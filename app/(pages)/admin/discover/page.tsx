"use client"
import { Input } from '@/components/ui/input';
import { Globe, Search, ArrowRight, MoveRight, ArrowBigRight, ChevronRight, List, Gauge, Mail, Check, UserRoundSearch } from 'lucide-react';
import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Guide from './components/Guide';
import SearchTips from './components/SearchTips';
import Illustration from "@/public/illustration.png"
import Image from 'next/image';
import { post } from '@/lib/api/axios';

const Discover = () => {
  const [searchResults, setSearchResults] = React.useState([]);
  const [hasSearched, setHasSearched] = React.useState(false);
  const [searchKey, setSearchKey] = React.useState('');

  const handleSearch = async () => {
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

    const {data, error} = await post('/discover', {searchKey})
    console.log({ data, error })
    setHasSearched(true);
  }

  const guideList = [
    {
      title: "Accurate Results",
      description: "Powered by Brave Search API"
    },
    {
      title: "Webpage Scanning",
      description: "Scan the website for SEO, performance, security & more."
    },
    {
      title: "Actionable Insights",
      description: "Identify issues and opportunities"
    },
    {
      title: "Grow your Business",
      description: "Send reports and win more clients"
    },
  ]

  const searches = [
    "Law firms in LA",
    "Restaurants in NY",
    "Real estate in Miami",
    "Insurance companies in Houston",
    "Loan companies in Phoenix",
  ]
  

  return (
    <main className='flex w-full h-full gap-2'>
      <Toaster/>
      <div className='flex-1'>
        <div className=' rounded-lg shadow-md shadow-gray-200 border border-gray-100 p-4'>
          <section className='flex items-center gap-2 mb-5'>
            <span className='h-12 w-12 rounded-full bg-emerald-100 flex justify-center items-center'>
              <Search className='h-6 w-6 text-emerald-600' />
            </span>
            <div>
              <h2 className="text-md font-semibold text-black">Search businesses by industry and location</h2>
              <p className="text-xs text-gray-600">Use keywords like 'law firms in Los Angeles' or 'accountants in New York City'.</p>
            </div>
          </section>
          <section className='flex items-center gap-2 mb-4 text-xs'>
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
          <section className='text-xs'>
            <h4 className="text-xs font-bold text-black">Example searches</h4>
            <section className="flex items-center gap-2 font-semibold mt-2">
              {
                searches.map((search, index) => (
                  <span
                    key={index}
                    onClick={() => setSearchKey(search)}
                    className='p-2 px-3 min-h-8 min-w-25 bg-gray-100 text-[11px] flex items-center gap-1 rounded-md border text-black border-gray-100 cursor-pointer'
                  
                  >
                    <Globe className='h-4 w-4 text-emerald-400' />{search}
                  </span>
                ))
              }
            </section>
          </section>
        </div>
        <div className='rounded-lg shadow-md shadow-gray-200 border border-gray-100 p-4 mt-4 flex justify-center items-center bg-emerald-50 gap-6'>
          <div className="image-container w-50">
            <Image
              src={Illustration}
              alt="Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className='flex-1'>
            <h2 className="text-md font-semibold text-black">Find high-potential in minutes</h2>
            <p className="text-xs text-gray-600">Search millions for businesses, build your lead list, and scan their websites for opportunities</p>
            <div className="flex flex-wrap">
              {
                guideList.map((guide, index) => (
                <section key={index}>
                  <div className='mt-3 flex items-center gap-2 px-2'>
                    <span className='h-5 w-5 rounded-lg flex justify-center items-center'>
                      <Check className='h-5 w-5 text-emerald-500' />
                    </span>
                    <div className="flex items-center gap-4 text-xs">
                      <div className=' w-50'>
                        <h4 className=" font-semibold text-black">{guide.title}</h4>
                        <p className="">{guide.description}</p>
                      </div>
                    </div>
                  </div>
                </section>
                ))
              }
            </div>
          </div>
        </div>
        <div className='rounded-lg shadow-md shadow-gray-200 border border-gray-100 p-4 mt-4 flex justify-center items-center gap-4'>
          <span className='h-12 w-12 rounded-lg flex justify-center items-center'>
            <UserRoundSearch className='h-10 w-10 text-emerald-500' />
          </span>
          <div className='flex-1'>
            <h2 className="text-md font-semibold text-black">Ready to find your next client?</h2>
            <p className="text-xs text-gray-600">Search for businesses, build your list, scan their websites and send winning reports</p>
          </div>
        </div>
      </div>
        <div className={`w-80 p-2 bg-gray-50 rounded-lg`}>
          <div className='w-full bg-white rounded-lg p-2 overflow-y-auto'>
            <Guide/>
          </div>
          <div className='w-full bg-white rounded-lg p-2 overflow-y-auto mt-4'>
            <SearchTips />
          </div>
      </div>
    </main>
  )
}

export default Discover