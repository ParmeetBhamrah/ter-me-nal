import React from 'react'

const TerminalOutput = ({ commandHistory }) => {
    return (
    <div className='mb-2'>
        {commandHistory.map((item, index) => (
            <div key={index}>
                {item.type === "command" ? (
                    <div className='text-white'>
                        <span className="mr-2 text-green-400 font-extrabold">parmeet@portfolio:~$</span>
                        <span>{item.text}</span>
                    </div>
                ) : (
                    <span className='text-gray-50'><pre>{item.text}</pre></span>
                )}
            </div>
        ))}
    </div>
  )
}

export default TerminalOutput