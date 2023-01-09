import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import header from './assets/img/bg-header.jpg'
import RickMorty from './components/RickMorty'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <header>
      <img src={header} alt="" />
     </header>

      <RickMorty />

     <footer>
        
     </footer>
    </div>
  )
}

export default App
