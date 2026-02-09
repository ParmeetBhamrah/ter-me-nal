import React from 'react'
import AsciiHeader from './AsciiHeader'
import TerminalInput from './TerminalInput'
import TerminalOutput from './TerminalOutput'

const Terminal = ({ commandHistory, addCommand }) => {
  return (
    <div className='bg-black text-green-400 font-mono p-4 min-h-screen'>
        <AsciiHeader/>
        <div className='text-blue-400'>
          Type <span className='text-green-400'>help</span> to see availabe commands.
        </div>
        <TerminalOutput commandHistory={commandHistory} />
        <TerminalInput addCommand={addCommand} />
    </div>
  )
}

export default Terminal