import React, { useEffect, useRef } from 'react'
import AsciiHeader from './AsciiHeader'
import TerminalInput from './TerminalInput'
import TerminalOutput from './TerminalOutput'

const Terminal = ({ commandHistory, addCommand }) => {
  const bottomOdPannelRef = useRef(null) // for auto-scroll

  useEffect(() => {
    if (bottomOdPannelRef) {
      bottomOdPannelRef.current.scrollIntoView() // auto-scroll
    }
  }, [commandHistory])
  
  return (
    <div className='bg-black text-green-400 font-mono p-4 h-screen overflow-y-auto'>
        <AsciiHeader/>
        <div className='text-blue-400 mb-2'>
          Type <span className='text-green-400'>help</span> to see availabe commands.
        </div>
        <TerminalOutput commandHistory={commandHistory} />
        <div ref={bottomOdPannelRef}></div> 
        {/* dummy div for auto-scroll focus */}
        <TerminalInput addCommand={addCommand} />
    </div>
  )
}

export default Terminal