import { Typewriter } from "react-simple-typewriter";
// import { Button } from "@/components/ui/button";
// import { NavLink } from "react-router";
const Hero = () => {
  return (
    <div className="flex items-center justify-center w-full mt-16 overflow-x-hidden">
      <div className="hero relative w-full h-full pb-5">
        {/* Content */}
        <div className="flex flex-col justify-center text-white gap-7 px-4 sm:px-6 lg:px-8">
          <h1 className="pt-8 text-center">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold block">
              <Typewriter
                words={[
                  "Welcome to Seamless Hall Living",
                  "Find Your Perfect Room.",
                  "Hassle-Free Registration.",
                  "Book. Pay. Stay.",
                ]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={90}
                deleteSpeed={70}
                delaySpeed={1000}
              />
            </span>
          </h1>

          {/* <h1 className="pt-44 ">Delivering Excellence Through Simplicity</h1> */}
        </div>
        {/* <div className=" relative flex  space-x-2  mt-6 justify-end lg:pr-20 lg:pt-10  ml-10 mr-10  ">
          <Button className="text-white outline-1 outline">
            <NavLink to={"/comingsoon"}>Get started</NavLink>
          </Button>
          <Button className="text-black bg-white">
            {" "}
            <NavLink to="#about">Learn More</NavLink>
          </Button>
        </div> */}
        {/* Feature Cards */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-5 md:gap-8 lg:gap-20 mt-8 sm:mt-12 md:mt-20 lg:mt-32 px-4 sm:px-6 lg:px-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center justify-center gap-2 sm:gap-4 bg-[#0D0F0BB2] rounded-[25px] w-full max-w-[250px] sm:max-w-[280px] md:max-w-[298px] min-h-[160px] sm:min-h-[185px] p-3 sm:p-4 md:p-6">
            <img 
              src="/icons/mdi_guest-room-outline.png" 
              alt="Room icon" 
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
            <h2 className="text-white text-sm sm:text-base md:text-lg font-bold text-center">Effortless Room Booking</h2>
            <p className="text-white text-xs sm:text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center justify-center gap-2 sm:gap-4 bg-[#0D0F0BB2] rounded-[25px] w-full max-w-[250px] sm:max-w-[280px] md:max-w-[298px] min-h-[160px] sm:min-h-[185px] p-3 sm:p-4 md:p-6">
            <img 
              src="/icons/arcticons_sob-smart.png" 
              alt="Management icon" 
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
            <h2 className="text-white text-sm sm:text-base md:text-lg font-bold text-center">Seamless Management</h2>
            <p className="text-white text-xs sm:text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.</p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center justify-center gap-2 sm:gap-4 bg-[#0D0F0BB2] rounded-[25px] w-full max-w-[250px] sm:max-w-[280px] md:max-w-[298px] min-h-[160px] sm:min-h-[185px] p-3 sm:p-4 md:p-6">
            <img 
              src="/icons/Vector.png" 
              alt="Innovation icon" 
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
            <h2 className="text-white text-sm sm:text-base md:text-lg font-bold text-center">Innovative Students Living</h2>
            <p className="text-white text-xs sm:text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
