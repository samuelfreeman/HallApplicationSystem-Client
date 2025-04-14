import Navbar from "../../Navbar";
import NavInfo from "../../NavInfo";
import { Link } from "react-router";



export default function Instruction() {

    return (
        <>
            <Navbar />
            <NavInfo title="Reservation"  />
            <section className="mt-5 px-4 sm:px-6 md:px-8 lg:px-20">
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl p-4 sm:p-6 bg-white rounded-lg shadow-sm">
                    <h2 className="mb-4 font-semibold">Room Reservation Instructions</h2>
                    <ul className="list-disc pl-4 sm:pl-6 space-y-3 sm:space-y-4 text-sm sm:text-base">
                        <li>Click on <span className="font-bold">next</span> at the button down below.</li>
                        <li>Fill all the necessary information on the form.</li>
                        <li>Select from the available rooms. Rooms with <span className="text-green-700 font-bold"> A</span>  means <span className="text-green-700 font-bold">Availlable</span> and<span className="text-red-700 font-bold"> N/A</span>  means <span className="text-red-700 font-bold">Not Available</span></li>
                        <li>Submit your selection by clicking on <strong>submit</strong> and proceed.</li>
                        <li>Print out your reservation slip.</li>
                        <li>
                            Go to payment and select your preferred payment type or visit any of the banks below and make payment
                            (<span className="font-semibold">Zenith, Absa, Calbank, Ecobank, UBA, and Fidelity</span>) or pay through Mobile Money.
                        </li>
                        <li>
                            Submit your reservation slip and pay-in slip (obtained from the bank after payment) at the
                            <strong> Portal Lodge</strong> to access your room <span className="font-bold">when school reopens.</span>
                        </li>
                    </ul>

                    <div className="bg-red-100 text-red-700 px-3 sm:px-4 py-2 sm:py-3 mt-4 rounded-md border border-red-400 text-sm sm:text-base">
                        <strong>NOTE:</strong> You can only book your room once as far as your stay in the school is concerned,
                        so please ensure you decide before beginning the booking process. Thank you!
                    </div>

                    <div className="text-center mt-6 sm:mt-8">
                        <Link to="/applicantInfo">
                            <button className="bg-[#800040] text-white px-6 py-2 w-36 sm:w-44 rounded-md hover:bg-[#660033] transition duration-300 text-sm sm:text-base">
                                Next
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}