import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
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
    <BrowserRouter>


      <Routes>

        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/comingsoon' element={<Commingsoon />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/forgot-password' element={<ForgetPassword />} />
        <Route path='/verify-code' element={<VerifyCode />} />
        <Route path='/reset-password' element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;