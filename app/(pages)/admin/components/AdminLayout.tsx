import React from 'react'
import SideNav from './SideNav'
import TopNav from './TopNav'

const AdminLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full text-gray-600">
        <SideNav classList="shadow-lg shadow-blue-100 min-w-[300px] px-8 py-4  " />
        <section className='main flex-1'>
            <TopNav/>
            <div className='px-10 py-6 h-220 overflow-auto'>
              {children} 
            </div>
        </section>
    </div>
  )
}

export default AdminLayout