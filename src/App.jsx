import { useState } from 'react'
import reactLogo from './assets/react.svg'
import SearchID from './SearchID.jsx'
import SearchName from './SearchName.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Welcome to FromDB</h1>
    <h3>be our guest and search for a name or an ID...</h3>
    
    <SearchName/>
    </>
  )
}

export default App
