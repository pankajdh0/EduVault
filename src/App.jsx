import { useState } from 'react'
import './App.css'
import StudentInformation from './Components/Form.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StudentInformation/>
    </>
  )
}

export default App
