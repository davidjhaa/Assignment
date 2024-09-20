import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Header />
      <Footer />
    </>
  )
}

export default App
