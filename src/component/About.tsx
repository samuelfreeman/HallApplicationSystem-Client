

const About = () => {
    return (
        
        <section className="flex flex-row-reverse items-center justify-center w-[100%] h-[70vh] px-28" id="about">
          <div className="flex-[1.3]">
            <h1 className="text-center text-4xl font-bold text-gray-800 py-7">AboutUs</h1>
            <p className="lg:text-xl py-4 text-sm text-gray-700 leading-loose ">"We make student hall living simpler by automating room requests, payments, and allocations, ensuring a seamless and stress-free experience for both students and administrators. Our platform empowers students to easily select and request their preferred rooms, track their payment statuses, and stay updated on important notifications."</p>

            <p className="lg:text-xl py-4 text-sm text-gray-700 leading-relaxed ">"For administrators, it provides powerful tools to manage room availability, allocate spaces efficiently, and monitor analytics in real-time. Whether you're a new student looking to secure your first room or a returning resident managing ongoing payments, our system is designed to save you time, reduce errors, and enhance transparency. Experience hassle-free hall management with just a few clicks."</p>
          </div>

          <div className="flex-[1]">
            <img src="../../public/personreadingbook.svg" alt="" />
          </div>
        </section>
    )
}

export default About
