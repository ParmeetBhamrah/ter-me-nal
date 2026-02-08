import React from 'react'
import AsciiHeader from './AsciiHeader'
import TerminalInput from './TerminalInput'
import TerminalOutput from './TerminalOutput'

const Terminal = ({ commandHistory, addCommand }) => {
  return (
    <div className='bg-black text-green-400 font-mono p-4 rounded-lg min-h-screen'>
        <AsciiHeader/>
        <TerminalOutput commandHistory={commandHistory} />
        <TerminalInput addCommand={addCommand} />
    </div>
  )
}

export default Terminal