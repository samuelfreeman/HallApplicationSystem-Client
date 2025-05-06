import Navbar from "@/component/Navbar";
import NavInfo from "@/component/NavInfo";
import { useState } from "react";
import { usePayWithCard } from "@/Pages/auth/services/queries";

export default function PaymentCreditCard() {
  const payWithCard = usePayWithCard();
  const student = JSON.parse(localStorage.getItem("student") || "{}");
  const [email, setEmail] = useState(student.email);
  const handlePayWithCard = async (e:any) => {
    e.preventDefault();
      payWithCard.mutate({
        email: email,
        amount: 1000,
      });
   
  };

  const [paymentMethod, setPaymentMethod] = useState<'card' | 'momo'>("momo")
  return (
    <>
      <Navbar />
      <NavInfo title="Payment Information" />

      <div className="lg:px-40 py-5 px-4">

        <h1 className="text-[30px] font-[700] pt-4 pb-9">Payment Details</h1>

        {/* select card or momo */}
        <div className="flex items-center gap-3 lg:gap-16 pb-7">
          {/* momo */}
          <div
            className={`cursor-pointer border-[1px] ${paymentMethod === 'momo' ? 'border-[#900633]' : 'border-[#CFCFCF]'} py-5 px-2 w-[170px] lg:w-[200px] h-[128px] rounded-sm`}
            onClick={() => setPaymentMethod('momo')}
          >
            <input
              type="radio"
              name="payment"
              checked={paymentMethod === 'momo'}
              onChange={() => setPaymentMethod('momo')}
              className="float-right -mt-3"
            />
            <p className="text-center text-[16px] py-2">Mobile Wallets</p>
          </div>
          {/* credit card */}
          <div
            className={`cursor-pointer border-[1px] ${paymentMethod === 'card' ? 'border-[#900633]' : 'border-[#CFCFCF]'} py-5 px-2 w-[170px] lg:w-[200px] h-[128px] rounded-sm`}
            onClick={() => setPaymentMethod('card')}
          >
            <input
              type="radio"
              name="payment"
              checked={paymentMethod === 'card'}
              onChange={() => setPaymentMethod('card')}
              className="float-right -mt-3"
            />
            <p className="text-center text-[16px] py-2">Debit/Credit Card</p>
          </div>


        </div>

        {/* forms for credit card */}
        {paymentMethod === 'card' && (

          <div className="">
            <h1 className="py-3 text-[30px] font-[700]">Card Details</h1>
            <h1>This is will be done the next time you visit i promise</h1>

          </div>
        )}

        {paymentMethod === 'momo' && (

          <div className="">

            <h1 className="py-3 text-[30px] font-[700]">
              Mobile Money Wallet Details
            </h1>
            <form onSubmit={handlePayWithCard}>
              <div className="flex flex-col gap-3">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  value={student.fullName}
                  className="border-[1px] border-[#4A4A4A] w-full md:w-[800px] h-[45px] rounded-[3px]"
                  required
                />
              </div>
              <div className="flex flex-col gap-3 pt-5">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  value={student.email || email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-[1px] border-[#4A4A4A] w-full md:w-[800px] h-[45px] rounded-[3px]"
                  required
                />
              </div>
              <div className="flex flex-col gap-3 pt-5">
                <label htmlFor="momo">MOBILE MONEY NUMBER</label>
                <input
                  type="tel"
                  value={student.telephone}
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
        )}
        {/* forms for momo wallet */}
      </div>
    </>
  );
}
