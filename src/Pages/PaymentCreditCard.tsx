import Navbar from "@/component/Navbar";
import NavInfo from "@/component/NavInfo";
import { Link } from "react-router";


export default function PaymentCreditCard() {
  return (
    <>
     <Navbar/>
     <NavInfo title="Payment Information"/>

      <div className="lg:px-40 py-5 px-4">
        <h1 className="text-[30px] font-[700] pt-4 pb-9">Payment Details</h1>

        {/* select card or momo */}
        <div className="flex items-center gap-3 lg:gap-16 pb-7">
          {/* credit card */}
          <div className="border-[1px] border-[#900633] py-5 px-2 w-[170px] lg:w-[200px] h-[128px] rounded-sm">
            <input type="radio" className="flex float-right -mt-3" />
            <img
              src="../../public/assets/icons/credit-card.png"
              alt=""
              className="py-2 w-[65px] mx-auto"
            />
            <p className="text-center text-[16px] py-2">Debit/Credit Card</p>
          </div>

          {/* momo */}
          <div className="border-[1px] border-[#CFCFCF] py-5 px-2 w-[170px] lg:w-[200px] h-[128px] rounded-sm">
            <input type="radio" className="flex float-right -mt-3" />
            <img
              src="../../public/assets/icons/momo.png"
              alt=""
              className=" w-[60px] mx-auto"
            />
            <p className="text-center text-[16px] py-2">Mobile Wallets</p>
          </div>
        </div>

        {/* forms for credit card */}
        <div className="">
          <h1 className="py-3 text-[30px] font-[700]">Card Details</h1>
          <form action="">
            {/* credit card number */}
            <div className="flex flex-col gap-3">
              <label htmlFor="cardNumber">CREDIT CARD NUMBER</label>
              <input
                type="number"
                className="border-[1px] border-[#4A4A4A] w-full lg:w-[800px] h-[45px] rounded-[3px]"
                required
              />
            </div>

            {/* Name of the credit card holder */}
            <div className="flex flex-col gap-3 pt-7">
              <label htmlFor="name">CARD HOLDER NAME</label>
              <input
                type="text"
                className="border-[1px] border-[#4A4A4A] w-full md:w-[800px] h-[45px] rounded-[3px]"
                required
              />
            </div>

            {/* validity period and the cvv */}
            <div className="flex items-center gap-5">
              <div className="flex flex-col gap-3 pt-7">
                <label htmlFor="name">VALIDITY PERIOD</label>
                <input
                  type="text"
                  className="border-[1px] border-[#4A4A4A] w-full md:w-[390px] h-[45px] rounded-[3px]"
                  required
                />
              </div>

              <div className="flex flex-col gap-3 pt-7">
                <label htmlFor="name">CVV</label>
                <input
                  type="text"
                  className="border-[1px] border-[#4A4A4A] w-full md:w-[390px] h-[45px] rounded-[3px]"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-center text-center py-5">
              <Link to='/paymentConfirm'>
              <input
                type="submit"
                className="py-3 px-10 bg-[#900633] text-white text-[22px] rounded-lg cursor-pointer"
                value="Make Payment"
              />
              </Link>
            </div>
          </form>
        </div>

        {/* forms for momo wallet */}
        <div className="hidden">
          <h1 className="py-3 text-[30px] font-[700]">
            Mobile Money Wallet Details
          </h1>
          <form action="">
            <div className="flex flex-col gap-3">
              <label htmlFor="name">Name</label>
              <input
                type="tel"
                className="border-[1px] border-[#4A4A4A] w-full md:w-[800px] h-[45px] rounded-[3px]"
                required
              />
            </div>

            <div className="flex flex-col gap-3 pt-5">
              <label htmlFor="momo">MOBILE MONEY NUMBER</label>
              <input
                type="number"
                className="border-[1px] border-[#4A4A4A] w-full md:w-[800px] h-[45px] rounded-[3px]"
                required
              />
            </div>

            <div className="flex items-center justify-center text-center py-5">
              <input
                type="submit"
                className="py-3 px-10 bg-[#900633] text-white text-[22px] rounded-lg cursor-pointer"
                value="Make Payment"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
