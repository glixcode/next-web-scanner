import { Check, Lightbulb } from "lucide-react"

const tips = [
   "Use Industry + location for better results",
   "Try different keywords and variations",
   "Be specific niche + city works best",
   "Add filter after you search"
]
const SearchTips = () => {
    return (
        <div className='w-full bg-white rounded-lg mt-2'>
            <h4 className='text-sm font-bold text-black flex items-center gap-2'><Lightbulb className='text-blue-500'/>Search Tips</h4>
            <section className='guide-card-section mt-2'>
                {
                    tips.map((tip, index) => (
                        <div className='mt-3 flex items-center gap-4 px-2' key={index}>
                            <span className='h-5 w-5 rounded-lg bg-emerald-400 flex justify-center items-center'>
                                <Check className='h-3 w-3 text-white' />
                            </span>
                            <div className="flex items-center gap-4 text-xs">
                                <div className=' w-50'>
                                    <p className="">{tip}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </section>
        </div>
    )
}

export default SearchTips