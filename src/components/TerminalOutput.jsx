import React from 'react'

const TerminalOutput = ({ commandHistory }) => {
    return (
    <div className='mb-2'>
        {commandHistory.map((item, index) => (
            <div key={index}>
                {item.type === "command" && (
                    <div className='text-white'>
                        <span className="mr-2 text-green-400 font-extrabold">parmeet@portfolio:~$</span>
                        <span>{item.text}</span>
                    </div>
                )}

                {item.type === "output" && (
                    item.lines.map((line, idx) => (
                        <div 
                            key={idx}
                        >
                            {item.valid ? 
                            <span className='text-gray-50'><pre>{line}</pre></span> 
                            : <span className='text-red-400'>{line}</span>}
                        </div>
                    ))
                )}
            </div>
        ))}
    </div>
    )
}

export default TerminalOutput