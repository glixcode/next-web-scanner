import React from 'react'
import GuideCard from './GuideCard'
import { Gauge, List, Mail, Search } from 'lucide-react'
const guides = [
    {
        Icon: Search,
        title: "Search for businesses",
        description: "Brave Search finds companies matching your query"
    },
    {
        Icon: List,
        title: "Build your lead list",
        description: "Review results and add the best prospects to your lead list"
    },
    {
        Icon: Gauge,
        title: "Scan Websites",
        description: "Scan websites and uncover opportunities"
    },
    {
        Icon: Mail,
        title: "Reach out",
        description: "Send professional reports to potential clients and grow your business"
    },
]
const Guide = () => {
  return (
      <div className='w-full bg-white rounded-lg'>
          <h4 className='text-sm font-bold text-black'>How it works</h4>
          <section className='guide-card-section mt-2'>
            {
                guides.map((guide, index) => (
                    <GuideCard key={index} number={index + 1} Icon={guide.Icon} title={guide.title} description={guide.description} />
                ))
            }

          </section>
      </div>
  )
}

export default Guide