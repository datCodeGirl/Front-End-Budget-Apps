import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import Edit from './Pages/Edit'
import Error from './Pages/Error'
import Home from './Pages/Home'
import Index from './Pages/Index'
import New from './Pages/New'
import Show from './Pages/Show'

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
    <div>
      <Router>
        <NavBar/>
        <main>
            <Routes>
              <Route path=  '/' element={ <Home/>} />
                <Route path=  '/transactions' element={ <Index/>} />
                  <Route path= '/transactions/:id' element={ <Show/>} />
                      <Route path= '/transactions/:id/edit' element={ <Edit/> } />
                        <Route path= '/transactions/new' element={ <New/> } />
                          <Route path= '*' element={ <Error/>} />
            </Routes>
          </main>
      </Router>
    </div>
  )
}
export default App
