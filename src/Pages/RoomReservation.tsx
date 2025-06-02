import Navbar from "@/component/Navbar";
import NavInfo from "@/component/NavInfo";

export default function RoomReservation() {
  const student = JSON.parse(localStorage.getItem("student") || "{}");
  return (
    <>
      <Navbar />
      <NavInfo title="Autonomy Hall - Room Reservation" />

      <div className="px-5 sm:px-10 md:px-20 py-5">
        <div className="flex flex-col sm:flex-row items-center gap-3 border-b-[1px] border-[#CFCFCF] pb-5">
          <p className="flex items-center gap-1 text-[16px] sm:text-[18px] md:text-[20px] font-[500]">
            <img src="/date.png" alt="date.png" />
            <span>{new Date().toDateString()}</span>
          </p>

        </div>

        <h1 className="text-[18px] sm:text-[20px] font-[600] pt-4 pb-12">Applicant Information</h1>

        <div className="flex flex-col sm:flex-row items-start gap-10 border-b-[1px] border-[#CFCFCF] pb-10">
          <div className="text-[16px] sm:text-[18px] md:text-[20px]">
            <p>Full Name: <span>{student.fullName}</span></p>
            <p className="py-4">Index number / Student ID: <span>{student.studentId}</span></p>
            <p>Email Address: <span>{student.email}</span></p>
          </div>
          <div className="text-[16px] sm:text-[18px] md:text-[20px]">
          
            <p className="py-4">Gender: <span>{student.gender}</span></p>
            <p>Phone number: <span>{student.telephone}</span></p>
          </div>
        </div>

        <div className="border-b-[1px] border-[#CFCFCF] py-4">
          <h1 className="text-[18px] sm:text-[20px] font-[600]">Room Details</h1>
        </div>

        <div className="flex flex-col sm:flex-row items-start gap-10 border-b-[1px] border-[#CFCFCF] py-5">
          <div className="text-[16px] sm:text-[18px] md:text-[20px]">
            <p>Room Type: <span>Shared</span></p>
            <p className="pt-4">Room Assigned: <span>{student.roomNumber || "N/A"}</span></p>
          </div>
          <div className="text-[16px] sm:text-[18px] md:text-[20px]">
            <p>Block: <span>{student.blockName || "N/A"}</span></p>
            <p>Floor: <span>{student.floorNumber || "N/A"}</span></p>
            <p className="pt-4">Duration of Stay: <span>8 months</span></p>
          </div>
        </div>

        <h1 className="text-[18px] sm:text-[20px] font-[600] pt-4 pb-2">Important Notice</h1>
        <p className="text-[16px] sm:text-[18px] font-[400] tracking-wider">
          This reservation is valid for 24 hours. Ensure you complete the payment within this time to confirm your booking. Failure to do so will result in cancellation.
        </p>

        <div className="flex items-center justify-center pt-5">
          <button
            className="print:hidden bg-[#900633] px-16 py-2 text-white text-[16px] sm:text-[18px] md:text-[20px] font-500 rounded-md"
            onClick={() => window.print()}
          >
            Print
          </button>
        </div>
      </div>
    </>
  );
}
