import { useState } from "react"
import Terminal from "./components/Terminal"

function App() {
  const [commandHistory, setCommandHistory] = useState([])

  const addCommand = (newCommand) => {
    let outputText = ""

    switch (newCommand.toLowerCase()) {
      case "help":
        outputText = "Availabe commands:\n\thelp\n\tabout\n\tprojects\n\tskills\n\tcontact\n\tclear"
        break
      case "about":
        outputText = "Hi, I am Parmeet, a Programmer..."
        break
      case "clear":
        setCommandHistory([])
        return
      default:
        outputText = `Command not found: ${newCommand}`
    }

    setCommandHistory([...commandHistory,
      {type: "command", text: newCommand},
      {type: "output", text: outputText}
    ])
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
