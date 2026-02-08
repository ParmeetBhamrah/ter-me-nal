import React from 'react'

const TerminalOutput = ({ commandHistory }) => {
  return (
    <div className='mb-2'>
        {commandHistory.map((cmd, index) => (
            <div key={index}>
                {`> ${cmd}`}
            </div>
        ))}
    </div>
  )
}

export default TerminalOutput