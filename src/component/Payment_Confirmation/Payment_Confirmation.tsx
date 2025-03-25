
import checkmark from '../../../public/icons/CheckMark.png'
import appstore from '../../../public/icons/App_Store.png'
import googleplay from '../../../public/icons/Google_Play.png'
import { Link } from "react-router";
import NavInfo from "../NavInfo.tsx";
import Navbar from '../Navbar.tsx';

function Payment_Confirmation() {
    return (
        <>
           <Navbar/>
            <NavInfo title="Payment Confirmation" />
            <section className="my-[40px] ml-[100px] mr-[150px] font-Inter bg-white">
                
                <div className="bg-[#FBFBFB] mb-[50px] p-[30px]">
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row gap-3">
                            <img src={checkmark} alt="checkmark" />
                            <h2 className="text-2xl font-semibold">Thanks for your payment!</h2>
                        </div>

                    <p>We’ll send you an email to confirm your payment.</p> 
                    </div>

                    <hr className="my-[20px] border-gray-200 border" />

                    <p className="p-2.5">For all your payment details, check out the confirmation email we’re sending to <span className="font-semibold">ivy@gmail.com.</span>  </p>
                </div>


                {/* Get our app */}
                <div className="flex flex-col gap-3 p-[30px] mt-[50px] bg-[#FBFBFB]">
                    <h2 className="text-2xl font-semibold text-[#900633]">Get our HMS app</h2>

                    <p>Enjoy seamless management, innovative and smart students living, and more with a mobile app.</p>
                    
                    <div className="flex flex-row gap-3 justify-end mt-[25px]">
                        <Link to="https://play.google.com/store/apps/details?id=com.example.hms" className="text-decoration-none">
                            <img src={googleplay} alt="googleplay" />
                        </Link>
                        <Link to="https://play.google.com/store/apps/details?id=com.example.hms" className="text-decoration-none">
                            <img src={appstore} alt="appstore" />
                        </Link>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Payment_Confirmation;
