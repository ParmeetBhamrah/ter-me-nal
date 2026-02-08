import React from 'react'

const TerminalOutput = ({ commandHistory }) => {
  return (
    <div>
        {commandHistory.map((cmd, index) => {
            <div key={index}>
                {cmd}
            </div>
        })}
    </div>
  )
}

export default TerminalOutput