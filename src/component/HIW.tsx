
import {
  Card,
  CardContent,

  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const HIW = () => {
  return (
    <div className=' w-full lg:h-full text-center pt-10 bg-black pb-10'>
      <h1 className='text-4xl text-white'>How It Works </h1>
      <h2 className=' px-4 text-sm py-3 text-red-600 font-bold'>REQUEST {">"} PAYMENT {">"} REVIEW {">"} REPEAT </h2>

      <div className='lg:flex lg:justify-center'>
        <Card className=' lg:w-1/5 w-4/5 mx-8 rounded-md mt-10 p-4  '>
          <CardHeader>
            <img src="/application.png" className='w-11' alt="" />
            <CardTitle className='pt-5'>Submit Room Request</CardTitle>

          </CardHeader>
          <CardContent className='py-4 pt-1'>
            <p>Log into our portal and submit your request & provide us with your correct details so we can find a proper room for you.</p>
          </CardContent>
          <CardFooter>
            <hr className='bg-red-600 h-1 w-24' />
          </CardFooter>
        </Card>
        <Card className=' lg:w-1/5 w-4/5 mx-8 rounded-md mt-10  p-4 '>
          <CardHeader>
            <img src="/payment-method.png" className='w-11' alt="" />
            <CardTitle className='pt-5'>Make Payment</CardTitle>

          </CardHeader>
          <CardContent className='py-4 pt-1'>
            <p>After submitting a room request you can go ahead and make payment so you can be assigned a room.</p>
          </CardContent>
          <CardFooter>
            <hr className='bg-red-600 h-1 w-24' />
          </CardFooter>
        </Card>
        <Card className=' lg:w-1/5 w-4/5 mx-8 rounded-md  mt-10 p-4 '>
          <CardHeader className=''>
            <img src="/review.png" className='w-11' alt="" />
            <CardTitle className='pt-5'>Review Your Room</CardTitle>

          </CardHeader>
          <CardContent className='py-4 pt-1'>
            <p>After you have be assigned a room , review the room to get all the latest information about the room.</p>
          </CardContent>
          <CardFooter>
            <hr className='bg-red-600 h-1 w-24' />
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default HIW
