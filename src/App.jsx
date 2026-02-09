import { useState } from "react"
import commands from "./commands"
import Terminal from "./components/Terminal"

function App() {
  const [commandHistory, setCommandHistory] = useState([])

  const addCommand = (input) => {
    const command = input.trim().toLowerCase()

    const newHistory = [
      ...commandHistory, {type: "command", text: command}
    ]

    if (command === "clear") {
      setCommandHistory([])
      return
    }
    
    if (commands[command]) {
      const outputLines = commands[command].run()
      
      newHistory.push({
        type: "output",
        valid: true,
        lines: outputLines
      })
    }
    else {
      newHistory.push({
        type: "output",
        valid: false,
        lines: [`Command not found: ${command}`]
      })
    }

    setCommandHistory(newHistory)
  }

  return (
    <div>
      <Terminal
        commandHistory={commandHistory}
        addCommand={addCommand}
      />
    </div>
  )
}

export default App
