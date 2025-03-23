import Navbar from "../components/Navbar";
import NavInfo from "../components/NavInfo";


export default function ReservationConfirm(){
  return(
   <>
   <Navbar/>
    <NavInfo title="Reservation Confirmation"/>

    <div className="py-10 px-28">
      <h1 className="text-[20px] font-[600] pb-5">Reservation Submitted Successfully!</h1>
      <p className="w-[900px] text-[20px] font-[500px] pb-5">Check your email, a confirmation message has been sent with your booking details. Complete your payment now to confirm your booking. You have 24 hours to make the payment, or your reservation may be canceled.</p>

      <div className="flex items-center gap-3">
        <a href="/" className="text-[20px] text-[#FF0000] font-[600]">Proceed to Payment</a>
        <span className="text-[20px] font-[600]">or</span>
        <a href="/" className="text-[20px] text-[#FF0000] font-[600]">Later</a>
      </div>
    </div>
   </>
  )
}