import { Typewriter } from "react-simple-typewriter";
// import { Button } from "@/components/ui/button";
// import { NavLink } from "react-router";
const Hero = () => {
  return (
    <div className="flex items-center justify-center w-[100%]">
      <div className="hero pt-20">
        {/* Content */}
        <div className="flex flex-col justify-center text-white gap-7">
          <h1 className="pt-8 pr-10 text-center max-w-20 lg:max-w-[800px]  lg:pl-[20px] h-[20px]">
            <span
              style={{ color: "white", fontWeight: "bold" }}
              className="text-4xl lg:text-6xl  w-5  "
            >
              {/* Style will be inherited from the parent element */}
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
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-20 mt-40">
        <div className="flex flex-col items-center justify-center gap-4 bg-[#0D0F0BB2] rounded-[25px] w-[298px] h-[185px]">
          <img src="../../../public/assets/icons/mdi_guest-room-outline.png" alt="" />
          <h2 className="text-white text-xl font-bold">Effortless Room Booking</h2>
          <p className="text-white text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vestibulum nec libero nec justo tincidunt feugiat.</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 bg-[#0D0F0BB2] rounded-[25px] w-[298px] h-[185px]">
         <img src="../../../public/assets/icons/arcticons_sob-smart.png" alt="" />
          <h2 className="text-white text-xl font-bold">Seamless Management</h2>
          <p className="text-white text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vestibulum nec libero nec justo tincidunt feugiat.</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 bg-[#0D0F0BB2] rounded-[25px] w-[298px] h-[185px]">
        <img src="../../../public/assets/icons/Vector.png" alt="" />
          <h2 className="text-white text-xl font-bold">Innovative Students Living</h2>
          <p className="text-white text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vestibulum nec libero nec justo tincidunt feugiat.</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Hero;
