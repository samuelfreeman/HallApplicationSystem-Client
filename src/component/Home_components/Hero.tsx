


export default function Hero() {
  return (
    <section className="hero h-full md:h-[80vh] flex items-center justify-center py-10">
     <div>
      <h1 className="text-3xl w-[100%] md:text-[64px] font-bold text-white text-center md:w-[80%] mx-auto pb-10 md:pb-28 py-16">Welcome to Autonomy Hall Management System</h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-20">
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
    </section>
  )
}