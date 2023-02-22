import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [name, setName] = useState<string>("")

  return (
    <div className="App">
      <input onChange={(evt) => setName(evt.target.value)}></input>
      {name}
    </div>
  )
}

export default App
