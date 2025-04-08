
import Verifycode from '../../component/Verify-code'
const VerifyCode = () => {
  return (
    <div className='flex min-h-svh w-full items-center justify-center bg-cover bg-center p-6 md:p-10' style={{ backgroundImage: "url('/cutout.svg')"}}>

      <Verifycode />
    </div>
  )
}

export default VerifyCode
