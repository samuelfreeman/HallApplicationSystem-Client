

export default function Footer(){
  return(
    <footer className="bg-[#000] text-white w-full">
     <div className="flex flex-col md:flex-row items-start justify-between px-5 md:px-24 py-12">
     <div>
        <img src="../../public/Aamusted logo (2).png" alt="" width={150}/>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
        <div>
          <h1 className="text-[24px] font-[700] py-5">Help</h1>
          <ul className="flex flex-col gap-3">
            <li><a href="">Lorem ipsum.</a></li>
            <li><a href="">Lorem ipsum.</a></li>
            <li><a href="">Lorem ipsum.</a></li>
            <li><a href="">Lorem ipsum.</a></li>
            <li><a href="">Lorem ipsum.</a></li>
          </ul>
        </div>

        <div>
        <h1 className="text-[24px] font-[700] py-5">Payments</h1>
          <ul className="flex flex-col gap-3">
            <li><a href="">Lorem ipsum.</a></li>
            <li><a href="">Lorem ipsum.</a></li>
            <li><a href="">Lorem ipsum.</a></li>
            <li><a href="">Lorem ipsum.</a></li>
            <li><a href="">Lorem ipsum.</a></li>
          </ul>
        </div>

        <div>
        <h1 className="text-[24px] font-[700] py-5">Contact Us</h1>
          <ul className="flex flex-col gap-3">
            <li><a href="">Facebook</a></li>
            <li><a href="">Instagram</a></li>
            <li><a href="">X</a></li>
            <li><a href="">LinkedIn</a></li>
            <li><a href="">Youtube</a></li>
          </ul>
        </div>
      </div>
     </div>
     <div className="border-t-[1px] border-[#4F4F4F] py-5 flex items-center justify-center">
      <p className="text-center">Copyright@2024. All Right Reserved.</p>
     </div>
    </footer>
  )
}