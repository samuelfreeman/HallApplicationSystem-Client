import Navbar from "@/component/Navbar";
import NavInfo from "@/component/NavInfo";
import { Link } from "react-router";

export default function ReservationConfirm(){
  return(
   <>
   <Navbar/>
   <NavInfo title="Reservation Confirmation"/>
    <div className="py-6 sm:py-8 md:py-10 px-4 sm:px-8 md:px-16 lg:px-28 max-w-7xl mx-auto">
      <h1 className="text-lg sm:text-xl md:text-2xl font-semibold pb-3 sm:pb-4 md:pb-5">
        Reservation Submitted Successfully!
      </h1>
      <p className="text-base sm:text-lg md:text-xl font-medium pb-4 sm:pb-5 max-w-[900px]">
        Check your email, a confirmation message has been sent with your booking details. Complete your payment now to confirm your booking. You have 24 hours to make the payment, or your reservation may be canceled.
      </p>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-base sm:text-lg md:text-xl">
        <Link 
          to="/payment" 
          className="text-[#FF0000] font-semibold hover:text-[#cc0000] transition-colors duration-200"
        >
          Proceed to Payment
        </Link>
        <span className="hidden sm:inline font-semibold">or</span>
        <Link 
          to="/later" 
          className="text-[#FF0000] font-semibold hover:text-[#cc0000] transition-colors duration-200"
        >
          Later
        </Link>
      </div>
    </div>
   </>
  )
}