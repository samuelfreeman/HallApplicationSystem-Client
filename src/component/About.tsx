

const About = () => {
    return (
        <div id="about" className="bg-gray-100 p-4 scroll-smooth pt-20 lg:flex lg:flex-row-reverse lg:justify-center w-full lg:h-screen  lg:pt-20 lg:pb-20">
            <div className="text-center mb-6 lg:w-2/4 lg:pl-5">
                <h1 className="text-3xl font-bold mb-4 text-gray-800 lg:text-5xl ">About Us</h1>
                <p className="text-sm text-gray-700 leading-relaxed lg:text-xl ">
                    "We make student hall living simpler by automating room requests, payments, and allocations, ensuring a seamless and stress-free experience for both students and administrators. Our platform empowers students to easily select and request their preferred rooms, track their payment statuses, and stay updated on important notifications."
                </p>
                <p className="text-sm text-gray-700 leading-relaxed mt-4 lg:text-xl">
                    "For administrators, it provides powerful tools to manage room availability, allocate spaces efficiently, and monitor analytics in real-time. Whether you're a new student looking to secure your first room or a returning resident managing ongoing payments, our system is designed to save you time, reduce errors, and enhance transparency. Experience hassle-free hall management with just a few clicks."
                </p>
            </div>
            <div className="flex justify-center lg:pr-5">
                <img 
                    src="/personreadingbook.svg" 
                    alt="Person reading a book" 
                    className=" w-3/6 lg:w-4/5 max-w-xs object-contain"
                />
            </div>
        </div>
    )
}

export default About
