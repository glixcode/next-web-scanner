"use client"
import Link from "next/link"

import { 
  ShieldCheck,
  Search,
  Scan,
  User,
  Send,
  File,
  Settings
} from "lucide-react"

const navLinks = [
  {label: "Url Scan", icon: Scan, href: "/admin/urlScan"},
  {label: "Discover Leads", icon: Search, href: "/admin/discover"},
  {label: "Saved Leads", icon: User, href: "/admin/lead"},
  {label: "Outreach", icon: Send, href: "/admin/outreach"},
  {label: "Reports", icon: File, href: "/admin/reports"},
  { label: "Settings", icon: Settings, href: "/admin/settings" },
]



const SideNav = ({classList, pathName}: {classList: string, pathName: string}) => {
  return (
    <div className={classList}>
        <section className="h-35 border-b border-gray-200 flex justify-center items-center mb-3">
              <div className="flex justify-center items-center text-emerald-600">
                <div className='flex flex-col items-center'>
                  <ShieldCheck className="w-15 h-15 "/>
                    <h1 className="text-lg font-semibold uppercase">Web Scanner</h1>
                    <p className="text-xs text-gray-600">Scan and audit your website</p>
                </div>
            </div>
        </section>
        <section className="link-section border-b border-gray-200 mb-3">
            <ul>
              {
                navLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <li key={index} className="flex">
                      <Link href={link.href} 
                        className={`flex items-center gap-3 w-100 p-3 mb-2 rounded-lg cursor-pointer text-xs font-semibold transition transform duration-300
                        ${pathName === link.href ? "text-white bg-emerald-500" : "text-gray-600 hover:text-white hover:bg-emerald-500"}
                        `}>
                        <Icon className="h-5 w-5"/>{link.label}
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
        </section>
        {/* <section className="link-section">
            <ul>
              <li className="flex">
                <Link href='/admin/settings' 
                  className={`flex items-center gap-3 w-100 p-4 py-3 mb-2 rounded-lg cursor-pointer text-xs font-semibold transition transform duration-300
                  `}>
                  <Settings className="h-5 w-5" />Settings
                </Link>
              </li>
            </ul>
        </section> */}
    </div>
  )
}

export default SideNav