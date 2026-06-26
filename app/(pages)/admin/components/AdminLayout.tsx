import React from 'react'
import SideNav from './SideNav'
import TopNav from './TopNav'
import TitleSection from './TitleSection'

const AdminLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full text-gray-600">
        <SideNav classList="shadow-lg shadow-blue-100 w-[300px] px-8 py-4  " />
        <main className='main flex-1'>
            <TopNav>
              <TitleSection title="Url Scan" description="Scan any website for SEO, performance, security & more." />
            </TopNav>
            <div className='px-10 py-6 overflow-auto'>
              {children} 
            </div>
        </main>
    </div>
  )
}

export default AdminLayout