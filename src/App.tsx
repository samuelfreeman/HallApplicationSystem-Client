import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SigupPage'
import HomePage from './Pages/HomePage'
import ForgetPassword from './Pages/ForgotPassword'
import VerifyCode from './Pages/VerifyCode'
import ResetPassword from './Pages/Reset-Password'
import Instruction from './component/reservation/Reservation_Instructions/instruction'
import AppsInfo from './component/reservation/Applicants_Info/appsInfo'
import BookRoom from './component/reservation/Book_Room/bookRoom'
import Modal from './component/Popup'
import PaymentCreditCard from './Pages/PaymentCreditCard'
import ReservationConfirm from './Pages/ReservationConfirm'
import RoomReservation from './Pages/RoomReservation'
import Payment_Confirmation from './component/Payment_Confirmation/Payment_Confirmation'
import Complaint from './component/Complaint/Complaint'
import Contact from './component/Contact/Contact'


const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/forgot-password' element={<ForgetPassword />} />
        <Route path='/verify-code' element={<VerifyCode />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/reservation' element={<Instruction/>}/>
        <Route path='/applicantInfo' element={<AppsInfo/>}/>
        <Route path='/bookroom' element={<BookRoom/>}/>
        <Route path='/popup' element={<Modal/>}/>
        <Route path='/reservationconfirm' element={<ReservationConfirm/>}/>
        <Route path='/payment' element={<PaymentCreditCard/>}/>
        <Route path='/later' element={<RoomReservation/>}/>
        <Route path='/paymentConfirm' element={<Payment_Confirmation/>}/>
        <Route path='/complaint' element={<Complaint/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}


export default App;