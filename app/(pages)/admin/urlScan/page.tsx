"use client"
import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import {
  Globe,
  CircleCheck,
  ScanText,
  Play,
  Clock,
  FileCheckCorner,
  Layers,
  CheckCircle
} from "lucide-react"
import { Input } from "@/components/ui/input"
import ScanTerminal from '../components/ScanTerminal'
import ScanResult from '../components/ScanResult'

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
];

const summaries = [
  {
    label: "Scan Duration",
    value: "00:00:34",
    icon: Clock
  },
  {
    label: "Page Scanned",
    value: "24",
    icon: FileCheckCorner
  },
  {
    label: "Resources Analyzed",
    value: "24",
    icon: Layers
  },
  {
    label: "Report Generated",
    value: "Just Now",
    icon: CheckCircle
  }
]

const UrlScan = () => {
  const [hasScanned, setHasScanned] = React.useState(false)
  const [scanning, setScanning] = React.useState(false)
  const [url,setUrl] = React.useState('https://psucontacttracer.onrender.com')

  const handleScan = () => {
    if(url === ''){
      toast.error('Please enter a valid URL',{
        position: 'bottom-right',
        style: {
          background: '#333',
          color: '#fff',
        }
      })
      return
    }

    setScanning(true)
    setTimeout(() => {
      setHasScanned(true)
      setScanning(false)
    }, 2000)
  }

  return (
    <main>
      <Toaster/>
      {/* <TitleSection title="Url Scan" description="Scan any website for SEO, performance, security & more."/> */}
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
        <section className='flex items-center gap-2 mb-4 text-sm'>
          <Input 
            onChange={(e) => setUrl(e.target.value)} 
            value={url} 
            className="h-10 focus-visible:border-emerald-300 focus-visible:ring-emerald-200/20 text-xs" 
            type="text" 
            placeholder="https://website.example.com"
          />
          <button 
            onClick={handleScan} 
            className='h-10 min-w-30 bg-emerald-500 flex justify-center items-center p-2 rounded-lg gap-1 text-white text-sm cursor-pointer shadow-md hover:shadow-blue-100 '
          >
            {scanning ? 'Scanning ...' : <><Play className='h-4 w-4' /> Scan URL</>}
          </button>
        </section>
        <section className="flex items-center gap-2">
          {
            badges.map((badge, key) => {
              const Icon = badge.icon;
              return (
                <span 
                  key={key} 
                  className='p-2 px-3 h-8 min-w-25 bg-emerald-50 text-[11px] flex items-center gap-1 rounded-full border text-black border-gray-100'
                >
                  <Icon className='h-4 w-4 text-white fill-emerald-400'/>{badge.label}
                </span>
              )
            })
          }
        </section>
      </div>
      <div className='py-2 '>
        {/* <h2 className="text-lg font-semibold text-black">Scan Results</h2> */}
        <div className="mt-4 flex justify-center gap-3">
          {
            hasScanned ? 
            (<>
              <div className='w-1/2 border border-gray-100 rounded-lg shadow-md shadow-gray-200 max-h-125 overflow-auto'>
                <ScanTerminal />
              </div>
                <div className='flex-1 border border-gray-100 rounded-lg shadow-md shadow-gray-200 max-h-125 overflow-auto'>
                <ScanResult />
              </div>
            </>
            ) : 
            (<div className='flex flex-col justify-center items-center gap-1 py-5 h-full w-full min-h-90'>
                <span className='p-2 px-3 h-20 w-20 bg-emerald-50 text-[11px] flex justify-center items-center gap-1 rounded-full border text-black border-gray-100'>
                  <ScanText className='h-10 w-10 text-emerald-400' />
                </span>
                <h1 className='text-black mt-3 text-xl font-semibold'>No Scan yet</h1>
                <p className='text-sm'>Your scan results will appear here</p>
            </div>)
          }
        </div>
      </div>
      {
        hasScanned &&
        <div className='mt-4 px-10 p-3 h-17 bg-gray-50 border border-gray-100 justify-between text-sm flex items-center rounded-lg'>
          {
            summaries.map((summary, key) => {
              const Icon = summary.icon;
              return (
                <div key={key} className='flex items-center gap-2'>
                  <span className='border border-gray-200 h-10 w-10 bg-emerald-50 rounded-full p-2 flex justify-center items-center'>
                    <Icon className='h-8 w-8 text-emerald-600' />
                  </span>
                  <div>
                    <p className='text-xs text-gray-600 '>{summary.label}</p>
                    <span className='font-semibold text-black'>{summary.value}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
      }
    </main>
  )
}

export default UrlScan