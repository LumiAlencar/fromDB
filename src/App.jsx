import { useState } from 'react'
import reactLogo from './assets/react.svg'
import SearchID from './SearchID.jsx'
import SearchName from './SearchName.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Welcome to <span>FromDB</span></h1>
    <h3>be our guest and search for a name or an ID...</h3>
    <div className="grid">
      <div className='card'>
        <SearchName/>
      </div>
      <div className="card">
        <SearchID />
      </div>
    </div>
    </>
  )
}

export default App
