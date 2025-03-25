

export default function HowCards(){
  return(
    <div className="bg-black w-full md:h-[460px] flex  items-center justify-center py-14">
       <div className="flex flex-col md:flex-row items-center justify-center gap-[55px] px-5">
          <div className="w-full md:w-[360px] h-[335px] bg-[#fff] rounded-2xl p-6">
            <img src="../../../../public/icons/submit_icon.png" alt="" />
            <h1 className="text-[25px] font-[600] py-6 text-center">Submit Room Request</h1>
            <p className="text-[16px] text-center">Log into our management portal and submit your request and provide us with your correct details so we can find a proper room for you.</p>
            <img src="../../../public/Line 17.png" alt="" className="mx-auto pt-9"/>
          </div>

          <div className="w-full md:w-[360px] h-[335px] bg-[#fff] rounded-2xl p-6">
            <img src="../../../../public//icons/payment.png" alt="" />
            <h1 className="text-[25px] font-[600] py-6 text-center">Make Payment</h1>
            <p className="text-[16px] text-center">After submitting a room request, you can go ahead and make payment from the available payment options so you can be assigned a room.</p>
            <img src="../../../public/Line 17.png" alt="" className="mx-auto pt-12"/>
          </div>

          <div className="w-full md:w-[360px] h-[335px] bg-[#fff] rounded-2xl p-6">
            <img src="../../../../public//icons/review.png" alt="" />
            <h1 className="text-[25px] font-[600] py-6 text-center">Review Your Room</h1>
            <p className="text-[16px] text-center">After you have be assigned a room , review the room to get all the latest information about the room.</p>
            <img src="../../../public/Line 17.png" alt="" className="mx-auto pt-14"/>
          </div>
        </div>
    </div>
  )
}