import { useState } from 'react'

import { Routes } from 'react-router-dom'
import AllRoutes from './components/Allroutes'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <NavBar/>
  <AllRoutes/>

  </>
  )
}

export default App
