import { User } from 'lucide-react'

const TopNav = () => {
  return (
    <div className='h-15 border-b border-blue-100 w-full flex justify-end items-center px-4 text-sm'>
      <div className='flex items-center gap-2'>
        <span className='border border-gray-200 h-8 w-8 bg-emerald-50 rounded-full p-2 flex justify-center items-center'><User className='text-emerald-600 h-5 w-5'/></span>
        <span>glix.coder@gmail.com</span>
      </div>
    </div>
  )
}

export default TopNav