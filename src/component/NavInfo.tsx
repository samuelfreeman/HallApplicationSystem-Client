import { useStudentAuth } from "@/Pages/auth/services/queries";
import { useStudentName } from "@/store/use-auth-store";
import { useEffect } from "react";



export default function NavInfo(probs:any){
      const { fullName } = useStudentName();
      const { mutate: fetchStudent, isLoading, isError } = useStudentAuth();
      useEffect(() => {
          // Automatically fetch student data as soon as the component mounts
          const studentId = localStorage.getItem("id") || "null"; // Replace this with the actual student ID (maybe from route params or context)
          fetchStudent({ data: { id: studentId } });
      }, [fetchStudent]); // Empty dependency array means it runs once when the component mounts
  
      if (isLoading) {
          return <div>Loading...</div>;
      }
  
      if (isError) {
          return <div>Error fetching student data.</div>;
      }
  
  return(
    <section className="bg-[#900633] px-2 lg:px-10 lg:py-1 flex items-center gap-8 py-3 lg:justify-between mt-16">
      <h1 className="lg:text-[24px] text-sm text-white font-[600]">{probs.title}</h1>
      
      <div className="flex items-center justify-center gap-2 lg:gap-5">
      <p className="lg:text-[20px] text-sm text-white font-[500]">{fullName}</p>
      <p className="lg:text-[20px] text-sm text-white font-[500]">|</p>
      <a href="/"><button className="bg-[#FFD314] lg:px-3 px-2 lg:text-[20px] rounded-sm">Logout</button></a>
      </div>
    </section>
  )
}