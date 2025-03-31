import Navbar from "../Navbar.jsx";
import NavInfo from "../NavInfo.tsx";

function Contact() {
    return (
        <>
            <Navbar />
            <NavInfo title="Contact" />
            <section className="my-[25px] lg:ml-[100px] px-10 lg:mr-[70px] font-Inter">
                <h2 className="text-2xl font-semibold font-Inter">Hall Admin Contact Info</h2>

                <hr className="my-[5px] border-gray-200 border" />

                {/* Contact Info */}
                <div className="flex flex-col gap-2 my-[10px]">
                    <p>Phone Number: 08100000000</p>
                    <p>Email: aamusted@gmail.com</p>
                </div>

            </section>
        </>
    )
}

export default Contact;
