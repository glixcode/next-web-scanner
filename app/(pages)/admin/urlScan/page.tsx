"use client"
import React from 'react'
import TitleSection from '../components/TitleSection'
import toast, { Toaster } from 'react-hot-toast'
import {
  Globe,
  Search,
  CircleCheck,
  ScanText
} from "lucide-react"
import { Input } from "@/components/ui/input"

const badges = [
  {
    label: "UI/UX Analysis",
    icon: CircleCheck
  },
  {
    label: "SEO Analysis",
    icon: CircleCheck
  },
  {
    label: "CRO Analysis",
    icon: CircleCheck
  },
  {
    label: "Trust and Credibility",
    icon: CircleCheck
  },
  {
    label: "Lead Generation",
    icon: CircleCheck
  },
  {
    label: "Security Analysis",
    icon: CircleCheck
  },
]

const UrlScan = () => {
  const [hasScanned, setHasScanned] = React.useState(true)
  const [url,setUrl] = React.useState('https://psucontacttracer.onrender.com')

  const handleScan = () => {
    if(url === ''){
      toast.success('Please enter a valid URL',{
        position: 'top-right',
        style: {
          background: '#333',
          color: '#fff',
        }
      })
      return
    }
  }

  return (
    <main>
      <Toaster/>
      <TitleSection title="Url Scan" description="Scan any website for SEO, performance, security & more."/>
      <div className='min-h-50 rounded-lg shadow-md shadow-gray-200 border border-gray-100 py-5 px-6'>
        <section className='flex items-center gap-2 mb-5'>
            <span className='h-12 w-12 rounded-full bg-emerald-100 flex justify-center items-center'>
              <Globe className='h-6 w-6 text-emerald-600'/>
            </span>
            <div>
              <h2 className="text-lg font-semibold text-black">Start a new scan</h2>
              <p className="text-xs text-gray-600">Enter a website URL to analyze adn get insights.</p>
            </div>
        </section>
        <section className='flex items-center gap-2 mb-5'>
          <Input onChange={(e) => setUrl(e.target.value)} value={url} className="h-12 focus-visible:border-emerald-300 focus-visible:ring-emerald-200/20" type="text" placeholder="https://website.example.com" />
          <button onClick={handleScan} className='h-12 min-w-32 bg-emerald-600 flex justify-center items-center p-2 px-3 rounded-lg gap-1 text-white text-sm cursor-pointer shadow-md hover:shadow-blue-100 '>
            <Search className='h-4 w-4'/> Scan URL
          </button>
        </section>
        <section className="flex items-center gap-2">
          {
            badges.map((badge, key) => {
              const Icon = badge.icon;
              return (
                <span key={key} className='p-2 px-3 h-8 min-w-25 bg-emerald-50 text-[11px] flex items-center gap-1 rounded-full border text-black border-gray-100'>
                  <Icon className='h-4 w-4 text-white fill-emerald-400'/>{badge.label}
                </span>
              )
            })
          }
        </section>
      </div>
      <div className='rounded-lg shadow-md shadow-gray-200 border border-gray-100 py-5 px-6 mt-10'>
        <h2 className="text-lg font-semibold text-black">Scan Results</h2>
        <div className="mt-4 min-h-70 flex justify-center items-center">
          {
            hasScanned ? 
              (<div className='flex bg-red-100 min-h-70'>
            
            </div>
            ) : 
            (<div className='flex flex-col justify-center items-center gap-1'>
                <span className='p-2 px-3 h-20 w-20 bg-emerald-50 text-[11px] flex justify-center items-center gap-1 rounded-full border text-black border-gray-100'>
                  <ScanText className='h-10 w-10 text-emerald-400' />
                </span>
                <h1 className='text-black mt-3 text-xl font-semibold'>No Scan yet</h1>
                <p className='text-sm'>Your scan results will appear here</p>
            </div>)
          }
        </div>
      </div>
    </main>
  )
}

export default UrlScan