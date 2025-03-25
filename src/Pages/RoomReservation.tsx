import Navbar from "@/component/Navbar";
import NavInfo from "@/component/NavInfo";


export default function RoomReservation(){
  return(
    <>
      <Navbar/>
      <NavInfo title="Autonomy Hall - Room Reservation"/>
      
      <div className="px-20 py-5">
        <div className="flex items-center gap-3 border-b-[1px] border-[#CFCFCF] pb-5">
          <p className="flex items-center gap-1 text-[20px] font-[500]">
            <img src="../../public/assets/icons/date.png" alt="" />
            <span className="">June 15, 2025</span>
          </p>
          <span className="text-[20px] font-[500]">|</span>
          <p className="text-[20px] font-[500]">Reservation ID: <span>123456</span></p>
        </div>

        <h1 className="text-[20px] font-[600] pt-4 pb-12">Applicant Information</h1>

        <div className="flex items-center gap-10 border-b-[1px] border-[#CFCFCF] pb-10">
          <div className="text-[20px]">
            <p>Full Name: <span>Ivy Ahiamadzor</span></p>
            <p className="py-4">Index number / Student ID: <span>1234567890</span></p>
            <p>Email Address: <span>ivy@gmail.com</span></p>
          </div>
          <div className="text-[20px]">
            <p>Reservation ID: <span>123456789</span></p>
            <p className="py-4">Gender: <span>Female</span></p>
            <p>Phone number: <span>0200000000</span></p>
          </div>
        </div>

        <div className="border-b-[1px] border-[#CFCFCF] py-4">
        <h1 className="text-[20px] font-[600]">Room Details</h1>
        </div>

        <div className="flex items-center gap-10 border-b-[1px] border-[#CFCFCF] py-5">
          <div className="text-[20px]">
            <p>Room Type: <span>Shared</span></p>
            <p className="pt-4">Room Assigned: <span>3</span></p>
          </div>
          <div className="text-[20px]">
            <p>Floor/Block: <span>9</span></p>
            <p className="pt-4">Duration of Stay: <span>8 months</span></p>
           
          </div>
        </div>

        <h1 className="text-[20px] font-[600] pt-4 pb-2">Applicant Information</h1>
        <p className="text-[20px] font-[400] tracking-wider">This reservation is valid for 24 hours. Ensure you complete the payment within this time to confirm your booking. Failure to do so will result in cancellation.</p>
        
        <div className="flex items-center justify-center pt-5">
        <button className="bg-[#900633] px-16 py-2 text-white text-[20px] font-500 rounded-md">Print</button>
        </div>
      </div>
    </>
  )
}