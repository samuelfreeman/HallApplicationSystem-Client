const About = () => {
    return (
        <section className="flex flex-col-reverse md:flex-row-reverse items-center justify-center w-full min-h-[100vh] py-12 md:py-40 px-4 sm:px-6 lg:px-8 overflow-x-hidden" id="about">
            <div className="flex-1 w-full max-w-2xl">
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800 text-center mb-6 md:mb-8">About Us</h1>
                <div className="space-y-4 md:space-y-6">
                    <p className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-700 leading-relaxed">
                        "We make student hall living simpler by automating room requests, payments, and allocations, ensuring a seamless and stress-free experience for both students and administrators. Our platform empowers students to easily select and request their preferred rooms, track their payment statuses, and stay updated on important notifications."
                    </p>
                    <p className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-700 leading-relaxed">
                        "For administrators, it provides powerful tools to manage room availability, allocate spaces efficiently, and monitor analytics in real-time. Whether you're a new student looking to secure your first room or a returning resident managing ongoing payments, our system is designed to save you time, reduce errors, and enhance transparency. Experience hassle-free hall management with just a few clicks."
                    </p>
                </div>
            </div>

            <div className="flex-1 w-full max-w-md mb-8 md:mb-0">
            <img src="/About us page.gif" alt="" />
            </div>
        </section>
    )
}

export default About
