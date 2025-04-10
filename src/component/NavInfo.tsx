import { useStudentAuth } from "@/Pages/auth/services/queries";
import { useStudentName } from "@/store/use-auth-store";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";



export default function NavInfo(probs: any) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token || token === undefined) {
    navigate("/login")
  }

  const { fullName } = useStudentName();
  const { mutate: fetchStudent, isLoading, isError } = useStudentAuth();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    // Automatically fetch student data as soon as the component mounts
    const studentId = localStorage.getItem("id") || "null"; // Replace this with the actual student ID (maybe from route params or context)
    fetchStudent({ data: { id: studentId } });
  }, [fetchStudent]); // Empty dependency array means it runs once when the component mounts

  if (isLoading) {
    return <section className="bg-[#900633] px-2 lg:px-10 lg:py-1 flex items-center gap-8 py-3 lg:justify-between mt-16 h-[10vh]">
      <h1 className="lg:text-[24px] text-sm text-white font-[600]">{probs.title}</h1>

      <div className="flex items-center justify-center gap-2 lg:gap-5">
        <p className="lg:text-[20px] text-sm text-white font-[500]">loading...</p>
        <p className="lg:text-[20px] text-sm text-white font-[500]">|</p>
        <p className="text-white">{
          // current time  i want it to be counting not when i refresh
          time.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
          })

        }</p>
      </div>
    </section>;
  }

  if (isError) {
    return <div>Error fetching student data.</div>;
  }

  return (
    <section className="bg-[#900633] px-2 lg:px-10 lg:py-1 flex items-center gap-8 py-3 lg:justify-between mt-16 h-[10vh]">
      <h1 className="lg:text-[24px] text-sm text-white font-[600]">{probs.title}</h1>

      <div className="flex items-center justify-center gap-2 lg:gap-5">
        <p className="lg:text-[20px] text-sm text-white font-[500]">{fullName}</p>
        <p className="lg:text-[20px] text-sm text-white font-[500]">|</p>
        <p className="text-white">{
          // current time  i want it to be counting not when i refresh
          time.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
          })

        }</p>
      </div>
    </section>
  )
}