interface SvgProps {
  percentage: number,
  fillStroke: string
}
const Svg = ({percentage, fillStroke}: SvgProps) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
   <div className="relative w-18 h-18">
    <svg width="70" height="70" viewBox="0 0 120 120" className="-rotate-90">
      <circle
        cx="60"
        cy="60"
        r={radius}
        fill="none"
        stroke="#E5E7EB"
        strokeWidth="10"
      />
      <circle
        cx="60"
        cy="60"
        r={radius}
        fill="none"
        stroke={fillStroke}
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        className="transition-all duration-700 ease-in-out"
      />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="flex flex-col items-center gap-1 line-height-0">
        <span className="text-xl font-bold">{percentage}</span>
        {/* <p className="text-xs font-semibold m-0">/100</p> */}
      </span>
    </div>
   </div>
  )
}

export default Svg