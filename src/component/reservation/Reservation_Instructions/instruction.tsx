import Navbar from "../../Navbar";
import NavInfo from "../../NavInfo";
import { Link } from "react-router";

export default function Instruction(){
    return(
       <>
       <Navbar/>
       <NavInfo title="Reservation"/>
        <section className="mt-5 px-20">
            <div className="text-2xl p-6 bg-white">
                <h2 className="mb-4">Room Reservation Instructions</h2>
                <ul className="list-disc pl-6 space-y-4">
                    <li>Click on <span className="font-bold">next</span> at the button down below.</li>
                    <li>Fill all the necessary information on the form.</li>
                    <li>Select from the available rooms.</li>
                    <li>Submit your selection by clicking on <strong>submit</strong> and proceed.</li>
                    <li>Print out your reservation slip.</li>
                    <li>
                        Go to payment and select your preferred payment type or visit any of the banks below and make payment 
                        (<span className="font-semibold">Zenith, Absa, Calbank, Ecobank, UBA, and Fidelity</span>) or pay through Mobile Money.
                    </li>
                    <li>
                        Submit your reservation slip and pay-in slip (obtained from the bank after payment) at the 
                        <strong>Portal Lodge</strong> to access your room <span className="font-bold">when school reopens.</span>
                    </li>
                </ul>
            
                <div className="bg-red-100 text-red-700 px-4 py-3 mt-4 rounded-md border border-red-400">
                    <strong>NOTE:</strong> You can only book your room once as far as your stay in the school is concerned, 
                    so please ensure you decide before beginning the booking process. Thank you!
                </div>
            
                <div className="text-center">
                   <Link to="/applicantInfo">
                   <button className="mt-6 bg-[#800040] text-white px-6 py-2 w-44 rounded-md hover:bg-[#660033] transition duration-300">
                        Next
                    </button>
                   </Link>
                </div>
            </div>
        </section>
       </>
    )
}