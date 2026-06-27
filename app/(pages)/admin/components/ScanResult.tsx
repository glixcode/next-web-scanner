import Svg from '@/components/svg'
import {
  Search,
  TrendingUp,
  Gauge,
  BadgeCheck,
  Users,
  ShieldCheck,
  BadgeAlert,
  ArrowRight,
  Dot,
  CircleDot
} from "lucide-react";
import {
    ExternalLink,
} from 'lucide-react'
import ResultCard from './ResultCard'

const summaries = [
  {
    Icon: Search,
    label: "SEO",
    score: 89,
    status: "good",
  },
  {
    Icon: Gauge,
    label: "Performance",
    score: 89,
    status: "good",
  },
  {
    Icon: ShieldCheck,
    label: "Security",
    score: 100,
    status: "good",
  },
  {
    Icon: TrendingUp,
    label: "CRO",
    score: 100,
    status: "good",
  },
  {
    Icon: BadgeCheck,
    label: "Trust & Credibility",
    score: 100,
    status: "good",
  },
  {
    Icon: Users,
    label: "Lead Generation",
    score: 100,
    status: "good",
  },
]

const issues = [
  {
    label: "Critical",
    textColor: "text-red-600",
    bg: "bg-red-50",
  },
  {
    label: "High",
    textColor: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    label: "Medium",
    textColor: "text-yellow-600",
    bg: "bg-yellow-50",
  },
  {
    label: "Low",
    textColor: "text-blue-600",
    bg: "bg-blue-50",
  },
]
const topIssues = [
  {
    description: "Missing meta description",
  },
  {
    description: "Render blocking resources",
  },
  {
    description: "Missing alt text on image",
  },
  {
    description: "Empty title tag",
  }
]
const ScanResult = () => {
  return (
    <section className='text-sm overflow-auto pb-4 px-6 relative h-full'>
      <div className="terminal-header flex align-center justify-between sticky top-0 bg-white z-1 py-4">
        <div className="flex gap-4 items-center">
          <h1 className="text-md font-bold text-black">Scan Results</h1>
          <span className="text-xs text-emerald-500 font-semibold py-1 px-2 rounded-md bg-emerald-50">
            Completed
          </span>
        </div>
        <div className="flex gap-4 items-center text-xs font-semibold">
          <button className="flex items-center gap-2 px-2 py-1 border border-gray-200 rounded-sm cursor-pointer hover:shadow-lg">
            View Full Report<ExternalLink className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className='mt-3 flex gap-2 items-center'>
        <Svg percentage={89} fillStroke="#10B981"/>
        <div>
          <h4 className="text-lg font-bold">Overall Score</h4>
          <p className="text-xs text-gray-600">Great! This website is well optimized!</p>
        </div>
      </div>
      <div className='mt-3 flex gap-2 items-center flex-wrap'>
        {
          summaries.map((summary, index) => (
            <ResultCard key={index} Icon={summary.Icon} label={summary.label} score={summary.score} status={summary.status}/>
          ))
        }
      </div>
      <div className='mt-3 flex-col md:flex flex-wrap h-45 overflow-hidden border-t border-gray-200 py-3 text-[11px]'>
          <div className='w-1/2 border-r border-gray-200'>
            <h4 className="text-sm font-bold text-black">Issues Found</h4>
            {
              issues.map((issue, index) => (
                <div className='pr-3' key={index}>
                  <div className={`h-7 ${issue.bg} w-full flex justify-between items-center px-4 my-2 rounded-sm `}>
                    <span className={`text-[11px] ${issue.textColor} font-semibold  flex align-center gap-2`}>
                      <BadgeAlert className='h-4 w-4'/>
                      {issue.label}
                    </span>
                    <span className=' font-semibold text-red-600 flex justify-center items-center h-5 min-w-6 bg-white p-1 rounded'>3</span>
                  </div>
                </div>
              ))
            }
          </div>
          <div className='flex-1 px-2'>
            <div className="flex justify-between items-center">
              <h4 className="text-sm font-bold text-black">Top Issues</h4>
              <button className="flex items-center gap-1 text-emerald-500 cursor-pointer font-semibold">
                View all issues<ArrowRight className="h-4 w-4" />
              </button>
            </div>
          {
            topIssues.map((issue, index) => (
              <div className='pr-2' key={index}>
                <div className={`h-5 w-full flex justify-between items-center px-4 my-2 text-nowrap`}>
                  <span className={`text-[11px] font-semibold  flex items-center`}>
                    <CircleDot className='h-2 fill-red-500' />
                    {issue.description}
                  </span>
                  {/* <span className=' font-semibold text-red-600 flex justify-center items-center h-5 min-w-6 bg-white p-1 rounded'>3</span> */}
                </div>
              </div>
            ))
          }
          </div>
      </div>
    </section>
  )
}

export default ScanResult