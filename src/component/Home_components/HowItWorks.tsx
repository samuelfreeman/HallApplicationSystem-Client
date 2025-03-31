import HIW from "../HIW";

export default function HowItWorks(){
  return(
    <section className="flex flex-col items-center justify-center py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-center">
        <span className="underline decoration-[#900633] underline-offset-7">How It</span> Works
      </h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl w-full max-w-3xl py-6 md:py-8 text-center">
        Managing hall accommodations has never been easier! Autonomy Hall Management System simplifies the entire process for both students and administrators, ensuring a smooth and hassle-free experience.
      </p>

      <HIW/>
    </section>
  )
}