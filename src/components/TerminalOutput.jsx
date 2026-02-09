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

                {item.type === "output" &&
                    item.lines.map((line, idx) => {
                        if (item.valid) {
                            if (line.type === "text") {
                                return <div key={idx} className='text-gray-50'>
                                    <pre className='whitespace-pre-wrap'>{line.value}</pre>
                                </div>
                            }
                            if (line.type === "link") {
                                return (
                                    <div>
                                        <pre className='whitespace-pre-wrap'>
                                            <a
                                                key={idx}
                                                href={line.url}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='text-blue-400 hover:text-gray-50 hover:underline'
                                            >{line.text}
                                            </a>
                                        </pre>
                                    </div>
                                )
                            }
                        } else {
                            return (
                                <span className='text-red-400'>{line}</span>
                            )
                        }
                    })}
            </div>
        ))}
    </div>
    )
}

export default TerminalOutput