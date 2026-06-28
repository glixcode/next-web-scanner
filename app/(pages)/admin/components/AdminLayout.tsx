"use client"
import React from 'react'
import SideNav from './SideNav'
import TopNav from './TopNav'
import TitleSection from './TitleSection'
import {usePathname} from 'next/navigation'
interface Title{
  title: string,
  description: string
}

const pageTitles: Record<string, Title> = {
  "/admin/urlScan": {title: "URL Scan", description: "Scan any website for SEO, performance, security & more."},
  "/admin/discover": {title: "Discover Leads", description: "Discover businesses you can scan and turn into potential leads."},
  "/admin/lead": {title: "Leads", description: "Manage your leads, scan their website and reach out."},
}

const getPageTitle = (pathName: string) => pageTitles[pathName] ?? "Dashboard"


const AdminLayout = ({children}: {children: React.ReactNode}) => {
  const pageInfo = getPageTitle(usePathname())
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full text-gray-600">
        <SideNav classList="shadow-lg shadow-blue-100 w-[280px] p-6" pathName={usePathname()} />
        <main className='main flex-1'>
            <TopNav>
              <TitleSection title={pageInfo.title} description={pageInfo.description} />
            </TopNav>
            <div className='px-8 py-6'>
              {children} 
            </div>
        </main>
    </div>
  )
}

export default AdminLayout