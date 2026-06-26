import { User } from 'lucide-react'

const TopNav = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='min-h-15 border-b border-blue-100 w-full flex justify-between items-center p-6 text-sm'>
      {children}
      <div className='flex items-center gap-2 text-xs'>
        <span className='border border-gray-200 h-8 w-8 bg-emerald-50 rounded-full p-2 flex justify-center items-center'>
          <User className='text-emerald-600 h-5 w-5'/>
        </span>
        <span>glix.coder@gmail.com</span>
      </div>
    </div>
  )
}

export default TopNav