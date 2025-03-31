

export default function NavInfo({title}:{title:string}){
  return(
    <section className="bg-[#900633] px-2 lg:px-10 lg:py-1 flex items-center gap-8 py-3 lg:justify-between mt-16">
      <h1 className="lg:text-[24px] text-sm text-white font-[600]">{title}</h1>
      
      <div className="flex items-center justify-center gap-2 lg:gap-5">
      <p className="lg:text-[20px] text-sm text-white font-[500]">Ivy Ahiamadzor</p>
      <p className="lg:text-[20px] text-sm text-white font-[500]">|</p>
      <a href="/"><button className="bg-[#FFD314] lg:px-3 px-2 lg:text-[20px] rounded-sm">Logout</button></a>
      </div>
    </section>
  )
}