import React, { useState } from 'react'

const TerminalInput = ({ addCommand }) => {
    const [currentText, setCurrentText] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!currentText) return
        addCommand(currentText)
        setCurrentText("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                value={currentText}
                onChange={e => setCurrentText(e.target.value)}
                placeholder='Type a command...'
                autoFocus
                className='bg-black text-green-400 font-mono border-none outline-none w-full'
            />
        </form>
    )
}

export default TerminalInput