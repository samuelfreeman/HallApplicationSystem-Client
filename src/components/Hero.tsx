import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { Button } from '../../components/ui/button'
const Hero = () => {
    return (
        <div className='w-full h-[80vh] mb-28  '>
            <div className="relative  bg-cover bg-center h-full" style={{ backgroundImage: "url('/autonomypic.jpg')" }}>
                {/* Black Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 w-full"></div>
                {/* Content */}
                <div className="relative z-10 flex flex-col pr-14  text-white gap-7 pl-20 ">
                    <h1 className='pt-20  max-w-[800px] pl-[5px] lg:pl-[20px] h-[20px]' >



                        <span style={{ color: 'White', fontWeight: 'bold' }} className='text-4xl lg:text-6xl  w-5  '>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Welcome to Seamless Hall Living', 'Find Your Perfect Room.', 'Hassle-Free Registration.', 'Book. Pay. Stay.']}
                                loop={false}
                                cursor
                                cursorStyle='_'
                                typeSpeed={90}
                                deleteSpeed={70}
                                delaySpeed={1000}
                            />
                        </span>
                    </h1>


                    <div className="flex  space-x-2  justify-end lg:pr-20 lg:pt-56 pt-48  pl-10  ">
                        <button className="px-6 py-3 outline outline-1  hover:bg-white hover:text-black text-white font-semibold rounded-lg">
                            Get Started
                        </button>
                        <button className="lg:px-6 px-10 lg:py-3     bg-white hover:text-white hover:bg-transparent hover:outline hover:outline-1 text-black font-semibold  rounded-lg ">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero
