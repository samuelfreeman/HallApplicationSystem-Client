import Alert from "../../public/assets/icons/alert.png";
import Close from "../../public/assets/icons/close.png";
import { Link } from "react-router-dom";

function Modal() {

    // Javascript function to close the modal
    const closeModal = () => {
        const modal = document.getElementById("modal");
        if (modal) {
            modal.style.display = "none";
        }

        // Javascript function to close the modal when the user clicks any part of the page except the modal
        const modalContainer = document.getElementById("modal-container");
        if (modalContainer) {
            modalContainer.style.display = "none";
        }
        
    }

    return (
        <section className="fixed top-0 left-0 w-full h-[100vh] flex justify-center items-center bg-black bg-opacity-50" id="modal-container">
            <div className="flex flex-col gap-3 w-[604px] bg-[#F5F5F5] p-[20px]">
                <img src={Close} alt="Close" className="w-[20px] h-[20px] ml-auto" id="modal" onClick={closeModal} />
                <img src={Alert} alt="Alert" className="w-[50px] h-[50px] mx-auto" />
                <p className="font-Inter w-[546px] text-center">Thank you for booking your room! <br />
                Your reservation has been recorded successfully. However, to secure your booking, payment must be completed with <span className="font-semibold">24 hours.</span> Failure to make payment within the time frame will result in automatic cancellation, and the room will be available for others to book.
                </p>
                <Link to="/ReservationConfirm" className="mx-auto">
                    <button className="bg-[#900633] text-white px-4 py-2 w-[78px] text-center mx-auto">Agree</button>
                </Link>

            </div>
        </section>
    )
}

export default Modal;
