
import Navbar from '@/component/Navbar'
import { Typewriter } from 'react-simple-typewriter'
const Commingsoon = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-black text-center h-screen flex items-center justify-center">
            <h1 className=' max-w-44 lg:max-w-[800px]  h-[20px]' >



<span style={{ color: 'white', fontWeight: 'bold' }} className='text-4xl lg:text-6xl  w-5  '>
    {/* Style will be inherited from the parent element */}
    <Typewriter
        words={['Coming Soon ...', 'Dont Worry I will Be Quick ...', 'Relax This Page Is Under Construction', 'Book. Pay. Just Kidding.']}
        loop={false}
        cursor
        cursorStyle='_'
        typeSpeed={90}
        deleteSpeed={70}
        delaySpeed={1000}
        />
</span>
</h1>
    </div>
        </>
  )
}

export default Commingsoon
