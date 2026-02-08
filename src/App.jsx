import { useState } from "react"
import Terminal from "./components/Terminal"

function App() {
  const [commandHistory, setCommandHistory] = useState([])

  const addCommand = (newCommand) => {
    setCommandHistory([...commandHistory, newCommand])
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
