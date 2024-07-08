import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const API = import.meta.env.VITE_API_URL


function App() {

  useEffect(()=> {
    fetch(`${API}/transactions`)
    .then((res) => {
      return res.json()
    })
    .then(resJSON => console.log(resJSON))
  }, [])
  
  return (
   <>
    </>
  )
}
export default App
