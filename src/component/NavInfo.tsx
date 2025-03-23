

export default function NavInfo({title}:{title:string}){
  return(
    <section className="bg-[#900633] px-10 py-1 flex items-center justify-between">
      <h1 className="text-[24px] text-white font-[600]">{title}</h1>
      <div className="flex items-center justify-center gap-5">
      <p className="text-[20px] text-white font-[500]">Ivy Ahiamadzor</p>
      <p className="text-[20px] text-white font-[500]">|</p>
      <a href="/"><button className="bg-[#FFD314] px-3 text-[20px] rounded-sm">Logout</button></a>
      </div>
    </section>
  )
}