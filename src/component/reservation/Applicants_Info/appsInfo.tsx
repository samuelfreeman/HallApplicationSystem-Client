import Navbar from "../../Navbar";
import NavInfo from "../../NavInfo";
import { Link } from "react-router";

export default function AppsInfo(){
const student  = JSON.parse(localStorage.getItem("student") || "{}");
    return(
        <>
       <Navbar/>
      <NavInfo title="Reservation"/>
        <section className="mt-5">
        <div className="shadow-lg rounded-lg p-6">
            <h2 className="md:text-xl font-bold border-b pb-4 mb-4">Applicant’s Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block font-bold mb-3">Full Name</label>
                    <input type="text"  className="w-full p-2 border rounded-md focus:ring focus:ring-[#660033]" value={student.fullName} />
                </div>
               
                <div>
                    <label className="block font-bold mb-3">Email Address</label>
                    <input type="email" className="w-full p-2 border rounded-md focus:ring focus:ring-[#660033]" value={student.email}/>
                </div>
                <div>
                    <label className="block font-bold mb-3">Student ID / Index Number</label>
                    <input type="text" className="w-full p-2 border rounded-md focus:ring focus:ring-[#660033]" value = {student.studentId}/>
                </div>
                <div>
                    <label className="block font-bold mb-3">Phone Number</label>
                    <input type="tel" className="w-full p-2 border rounded-md focus:ring focus:ring-[#660033]" value={student.telephone}/>
                </div>
                <div>
                    <label className="block font-bold mb-3">Gender</label>
                    <select className="w-full p-2 border rounded-md focus:ring focus:ring-[#660033]">
                        <option>{student.gender}</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>
            </div>
        
            <h2 className="text-xl font-bold border-t pt-2 mt-6 mb-4">Additional Information</h2>
        
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-5">
                    <div>
                        <label className="block font-bold mb-3">Program of Study</label>
                        <select className="w-full p-2 border rounded-md focus:ring focus:ring-[#660033]">
                            <option>Select</option>
                            <option>Engineering</option>
                            <option>Business</option>
                            <option>Science</option>
                            <option>Arts</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-3">Level</label>
                        <select className="w-full p-2 border rounded-md focus:ring focus:ring-[#660033]">
                            <option>{student.level}</option>
                            <option>100</option>
                            <option>200</option>
                            <option>300</option>
                            <option>400</option>
                        </select>
                    </div>
                    <div>
                        <label className="block font-bold mb-3">Emergency Contact</label>
                        <input type="tel" className="w-full p-2 border rounded-md focus:ring focus:ring-[#660033]"/>
                    </div>
                </div>
                <div>
                    <label className="block font-bold mb-3">Special Requests (If any)</label>
                    <textarea className="w-full p-2 border rounded-md focus:ring focus:ring-[#660033] h-[230px] placeholder:font-bold text-black" placeholder="Write here..."></textarea>
                </div>
            </div>
        
            <div className="text-center mt-6">
                <Link to="/bookroom">
                <button className="bg-[#800040] text-white px-6 py-2 w-44 rounded-md hover:bg-[#660033] transition">
                    Next
                </button>
                </Link>
            </div>
        </div>
    </section>
    </>
    )
  }