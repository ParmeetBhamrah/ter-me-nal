import React from 'react'
import AsciiHeader from './AsciiHeader'
import TerminalInput from './TerminalInput'
import TerminalOutput from './TerminalOutput'

const Terminal = ({ commandHistory, addCommand }) => {
  return (
    <div>
        <AsciiHeader/>
        <TerminalOutput commandHistory={commandHistory} />
        <TerminalInput addCommand={addCommand} />
    </div>
  )
}

export default Terminal