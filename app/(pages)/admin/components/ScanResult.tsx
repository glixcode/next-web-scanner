import {
    ExternalLink,

} from 'lucide-react'
const ScanResult = () => {
  return (
    <div className='text-sm overflow-hidden p-2'>
      <div className="terminal-header p-4 flex align-center justify-between">
        <div className="flex gap-4 items-center">
          <h1 className="text-md font-bold text-black">Scan Results</h1>
          <span className="text-xs text-emerald-500 py-1 px-2 rounded-md bg-emerald-50">
            Completed
          </span>
        </div>
        <div className="flex gap-4 items-center text-xs font-semibold">
          <button className="flex items-center gap-2 px-2 py-1 border border-gray-200 rounded-sm cursor-pointer hover:shadow-lg">
            View Full Report<ExternalLink className="h-4 w-4" />
          </button>
        </div>
      </div>
       
    </div>
  )
}

export default ScanResult