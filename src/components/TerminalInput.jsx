import React, { useEffect, useRef, useState } from 'react'

const TerminalInput = ({ addCommand }) => {
    const [currentText, setCurrentText] = useState("")
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
                onChange={e => setCurrentText(e.target.value)}
                placeholder='Type a command...'
                autoFocus
                className='bg-black text-white font-mono border-none outline-none w-max'
            />
        </form>
    )
}

export default TerminalInput