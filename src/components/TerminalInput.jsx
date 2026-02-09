import React, { useState } from 'react'

const TerminalInput = ({ addCommand }) => {
    const [currentText, setCurrentText] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!currentText) return
        addCommand(currentText.trim())
        setCurrentText("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <span className="mr-2 text-green-400 font-mono font-extrabold">parmeet@portfolio:~$</span>
            <input 
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