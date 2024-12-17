import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SigupPage'
import HomePage from './Pages/HomePage'

const App: React.FC = () => {
  return (
    <Router>

      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </Router>
  )
}


export default App;