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
                value={currentText}
                onChange={e => setCurrentText(e.target.value)}
                placeholder='Type a command...'
                autofocus
            />
        </form>
    )
}

export default TerminalInput