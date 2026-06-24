"use client"
import { 
  ShieldCheck,
  Search,
  Scan,
  User,
  Send,
  File,
  Settings
} from "lucide-react"
import Link from "next/link"

const navLinks = [
  {label: "Discover", icon: Search, href: "/admin/discover"},
  {label: "Url Scan", icon: Scan, href: "/admin/urlScan"},
  {label: "Lead", icon: User, href: "/admin/lead"},
  {label: "Outreach", icon: Send, href: "/admin/outreach"},
  {label: "Reports", icon: File, href: "/admin/reports"},
]

const SideNav = ({classList}: {classList: string}) => {
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
                    <li key={index} className="flex px-2 py-3 mb-3 rounded-lg cursor-pointer text-xs font-semibold hover:text-emerald-600 hover:bg-emerald-50 transition transform duration-300">
                      <Link href={link.href} className="flex items-center gap-3"><Icon className="h-5 w-5"/>{link.label}</Link>
                    </li>
                  )
                })
              }
            </ul>
        </section>
        <section className="link-section">
            <ul>
              <li className="flex p-4 py-3 mb-2 rounded-lg cursor-pointer text-xs font-semibold hover:text-emerald-600 hover:bg-emerald-50 transition transform duration-300">
                <Link href='/admin/settings' className="flex items-center gap-3"><Settings className="h-5 w-5" />Settings</Link>
              </li>
            </ul>
        </section>
    </div>
  )
}

export default SideNav