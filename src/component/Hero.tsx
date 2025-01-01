import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { Button } from '../../components/ui/button'
const Hero = () => {
    return (
        <div className='w-full h-[30vh]   mt-20 lg:mb-52'>
            <div className="relative  bg-cover bg-center pb-16 " style={{ backgroundImage: "url('/autonomypic.jpg')" }}>
                {/* Black Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-85 w-full"></div>
                {/* Content */}
                <div className="relative z-10 flex flex-col pr-14  text-white gap-7  pl-10 lg:pl-20 ">
                    <h1 className='pt-8 pr-20  max-w-44 lg:max-w-[800px]  lg:pl-[20px] h-[20px]' >



                        <span style={{ color: 'white', fontWeight: 'bold' }} className='text-4xl lg:text-6xl  w-5  '>
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

                    <h1 className='pt-44 '>Delivering Excellence Through Simplicity</h1>
                </div>
                    <div className=" relative flex  space-x-2  mt-6 justify-end lg:pr-20 lg:pt-10  ml-10 mr-10  ">
                     <Button className='text-white outline-1 outline'> Get Started</Button>
                     <Button className='text-black bg-white'> Learn More</Button>
                    </div>
                
            </div>

        </div>
    )
}

export default Hero
