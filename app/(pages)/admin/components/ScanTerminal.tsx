"use client"
import axios from "axios"
import React from "react"
import {
    CircleCheck,
    CirclePlay,
    Trash2
} from "lucide-react"

interface LogType  {
    title: string
    timestamp: string
    description: string
    type: string

}
const ScanTerminal = () => {
    const [logs, setLogs] = React.useState<LogType[]>([])
    const terminalRef = React.useRef<HTMLDivElement>(null);

    const fetchLogs = async () => {
        const { data } = await axios.get('/api/urlScan');

        let index = 0;

        const logger = setInterval(() => {
            if (index < data.logs.length -1) {
                setLogs(prev => [...prev, data.logs[index]]);
                index++;
            } else {
                clearInterval(logger);
            }
        }, 1000);
    };

  React.useEffect(() => {
    fetchLogs();
  }, [])

  React.useEffect(() => {
    if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  },[logs])

  return (
      <div className="terminal text-sm overflow-hidden p-4 px-6 h-full">
            <div className="terminal-header flex align-center justify-between">
                <div className="flex gap-4 items-center">
                    <h1 className="text-md font-bold text-black">Live Terminal</h1>
                    <span className="text-xs text-emerald-500 flex gap-1 items-center">
                        <CirclePlay className="h-2 w-2 fill-emerald-500"/> Scanning in progress...
                    </span>
                </div>
                <div className="flex gap-4 items-center text-xs font-semibold">
                    <button className="flex items-center gap-2 px-2 py-1 border border-gray-200 rounded-sm cursor-pointer hover:shadow-lg">
                        <Trash2 className="h-4 w-4"/> Clear
                    </button>
                </div>
            </div>
            <div
                ref={terminalRef}
                className="flex-1 overflow-y-auto p-4 text-xs leading-relaxed space-y-1 h-90 font-mono bg-gray-950 text-emerald-500 mt-4"
                style={{ scrollbarWidth: "thin" }}
            >
                {
                    logs.map((log, key)=> {
                        return (
                            <div key={key} className="terminal-log flex text-xs gap-4 my-2">
                                <span>[{log.timestamp}]</span>
                                <span>{log.title}</span>
                                <span>{log.description}</span>
                            </div>
                        )
                    })
                }
            </div>
            <div className="terminal-footer px-4 py-3 flex gap-4 justify-between rounded-lg bg-gray-50 mt-4 text-gray-600 text-xs border border-gray-200 ">
                <span className="  flex gap-1 items-center">
                    <CircleCheck className="h-4 w-4 text-white fill-emerald-400" /> Auto-scroll enabled
                </span>
                <span className="">
                    Elapsed time: 00:00:34
                </span>
            </div>
      </div>
  )
}

export default ScanTerminal