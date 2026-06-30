import { Check, X } from 'lucide-react'
import { useSearchResultContext } from '../context'

const LeadQueue = () => {
  const searchResultContext = useSearchResultContext()

  return (
    <div className=' bg-white rounded-lg p-2 px-3 text-sm mb-4'>
        <div className='pb-3 border-b'>
            <div className="flex items-center justify-between">
                <h4 className='text-sm font-bold text-black flex items-center gap-2'>Lead Queue</h4>
                <button className='text-xs cursor-pointer'>Clear all</button>
            </div>
            <div className='mt-3'>
                <span className='p-2 bg-emerald-50 rounded-md text-xs mt-2'>
                    {searchResultContext.selectedResults.length}    Selected
                </span>
            </div>
        </div>
        <div className='max-h-70 overflow-auto '>
            {
                searchResultContext.selectedResults.map((result, index) => (
                    <div className='mt-3 flex items-center gap-4 px-2'>
                        <span className='font-bold text-sm'>
                            {index + 1}
                        </span>
                        <div className="flex items-center gap-4 text-xs">
                            <div className=' w-50 wrap-break-word'>
                                <h4 className=" font-semibold text-black">{result.title}</h4>
                            </div>
                            <X className='h-4 w-4 text-emerald-600' />
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default LeadQueue