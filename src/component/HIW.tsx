import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const HIW = () => {
  return (
    <div className='w-full text-center py-8 md:py-12 bg-black'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-4'>How It Works</h1>
      <h2 className='text-sm sm:text-base md:text-lg py-3 text-red-600 font-bold tracking-wider'>
        REQUEST {">"} PAYMENT {">"} REVIEW {">"} REPEAT
      </h2>

      <div className='flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8 mt-8 md:mt-12'>
        {/* Card 1 */}
        <Card className='w-full max-w-[350px] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <CardHeader className='flex flex-col items-center'>
            <img src="/application.png" className='w-12 h-12 sm:w-14 sm:h-14' alt="Application icon" />
            <CardTitle className='pt-4 text-xl sm:text-2xl'>Submit Room Request</CardTitle>
          </CardHeader>
          <CardContent className='py-4'>
            <p className='text-sm sm:text-base text-gray-600'>
              Log into our portal and submit your request & provide us with your correct details so we can find a proper room for you.
            </p>
          </CardContent>
          <CardFooter className='flex justify-center'>
            <hr className='bg-red-600 h-1 w-24' />
          </CardFooter>
        </Card>

        {/* Card 2 */}
        <Card className='w-full max-w-[350px] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <CardHeader className='flex flex-col items-center'>
            <img src="/payment-method.png" className='w-12 h-12 sm:w-14 sm:h-14' alt="Payment icon" />
            <CardTitle className='pt-4 text-xl sm:text-2xl'>Make Payment</CardTitle>
          </CardHeader>
          <CardContent className='py-4'>
            <p className='text-sm sm:text-base text-gray-600'>
              After submitting a room request you can go ahead and make payment so you can be assigned a room.
            </p>
          </CardContent>
          <CardFooter className='flex justify-center'>
            <hr className='bg-red-600 h-1 w-24' />
          </CardFooter>
        </Card>

        {/* Card 3 */}
        <Card className='w-full max-w-[350px] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <CardHeader className='flex flex-col items-center'>
            <img src="/review.png" className='w-12 h-12 sm:w-14 sm:h-14' alt="Review icon" />
            <CardTitle className='pt-4 text-xl sm:text-2xl'>Review Your Room</CardTitle>
          </CardHeader>
          <CardContent className='py-4'>
            <p className='text-sm sm:text-base text-gray-600'>
              After you have been assigned a room, review the room to get all the latest information about the room.
            </p>
          </CardContent>
          <CardFooter className='flex justify-center'>
            <hr className='bg-red-600 h-1 w-24' />
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default HIW
