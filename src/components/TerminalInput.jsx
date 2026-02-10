import React, { useEffect, useRef, useState } from 'react'

const TerminalInput = ({ addCommand }) => {
    const [currentText, setCurrentText] = useState("")
    const [commandList, setCommandList] = useState([])
    const [historyIndex, setHistoryIndex] = useState(-1)
    // -1 => "not browsing history"
    const inputRef = useRef(null)

    useEffect(() => {
        const focusInput = () => {
            inputRef.current.focus()
        }
        window.addEventListener('click', focusInput)

        return () => {
            window.removeEventListener('click', focusInput)
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!currentText) return
        addCommand(currentText)
        setCommandList(prev => [...prev, currentText])
        setHistoryIndex(-1)
        setCurrentText("")
        inputRef.current.focus()
    }

    return (
        <form onSubmit={handleSubmit}>
            <span className="mr-2 text-green-400 font-mono font-extrabold">parmeet@portfolio:~$</span>
            <input 
                ref={inputRef}
                type='text'
                value={currentText}
                onChange={e => {
                    setCurrentText(e.target.value)
                    setHistoryIndex(-1)
                }}
                onKeyDown={e => {
                    if (e.key === "ArrowUp") {
                        if (commandList.length === 0) return // empty history
                        if (historyIndex === -1) { // beginning to browse history
                            setHistoryIndex(commandList.length - 1)
                            setCurrentText(commandList[commandList.length - 1])
                        } else if (historyIndex > 0) { // already browsing history
                            setHistoryIndex(historyIndex - 1)
                            setCurrentText(commandList[historyIndex - 1])
                        }
                    }
                    if (e.key === "ArrowDown") {
                        if (historyIndex === -1) return // not browsing history
                        if (historyIndex === commandList.length - 1) { // at the latest command - exiting history
                            setHistoryIndex(-1)
                            setCurrentText("")
                        } else { // in the middle of history
                            setHistoryIndex(historyIndex + 1)
                            setCurrentText(commandList[historyIndex + 1])
                        }
                    }
                }}
                // placeholder='Type a command...'
                autoFocus
                className='text-white font-mono border-none outline-none w-max'
            />
        </form>
    )
}

export default TerminalInput