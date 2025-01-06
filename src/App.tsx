import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SigupPage'
import HomePage from './Pages/HomePage'
import ForgetPassword from './Pages/ForgotPassword'
import VerifyCode from './Pages/VerifyCode'
import ResetPassword from './Pages/Reset-Password'
import Commingsoon from './Pages/Commingsoon'

const App: React.FC = () => {

  return (
    
    <Router>

      <Routes>

        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/commingsoon' element={<Commingsoon />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/forgot-password' element={<ForgetPassword />} />
        <Route path='/verify-code' element={<VerifyCode />} />
        <Route path='/reset-password' element={<ResetPassword />} />
      </Routes>
    </Router>
  )
}


export default App;