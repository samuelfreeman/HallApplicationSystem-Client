// components/Home_components/Testimonials.tsx
const testimonials = [
  {
    name: "Ama K.",
    role: "Student",
    avatar:
      "https://randomuser.me/api/portraits/women/68.jpg",
    feedback:
      "The hall management system made my room request and payment process so easy and hassle-free. I got updates in real-time and the support was fantastic!",
  },
  {
    name: "Kwame B.",
    role: "Administrator",
    avatar:
      "https://randomuser.me/api/portraits/men/75.jpg",
    feedback:
      "Managing room allocations and payments has never been simpler. The analytics tools help us optimize availability and reduce errors drastically.",
  },
  {
    name: "Esi A.",
    role: "Student",
    avatar:
      "https://randomuser.me/api/portraits/women/65.jpg",
    feedback:
      "A user-friendly platform that truly understands student needs. I feel confident knowing everything is transparent and efficient.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F5F5F5] py-20 px-6 md:px-12  mx-auto text-center">
      <h2 className="text-4xl font-extrabold text-[#900633] mb-12 tracking-wide">
        What Our Users Say
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-10">
        {testimonials.map(({ name, role, avatar, feedback }, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
          >
            <p className="text-gray-800 text-lg italic mb-6">“{feedback}”</p>

            <div className="flex items-center justify-center gap-4">
              <img
                src={avatar}
                alt={`${name} avatar`}
                className="w-16 h-16 rounded-full object-cover border-4 border-[#900633]"
                loading="lazy"
              />
              <div className="text-left">
                <p className="font-semibold text-[#900633] text-xl">{name}</p>
                <p className="text-gray-500 text-sm">{role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
