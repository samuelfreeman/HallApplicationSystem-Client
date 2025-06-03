import { ShieldCheck, ThumbsUp, Clock, Users } from "lucide-react";

const reasons = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-[#900633]" />,
    title: "Secure Process",
    description: "Your room requests and payments are handled with utmost security and encryption.",
  },
  {
    icon: <ThumbsUp className="w-10 h-10 text-[#900633]" />,
    title: "Student-Friendly",
    description: "We prioritize student needs, making the process hassle-free and transparent.",
  },
  {
    icon: <Clock className="w-10 h-10 text-[#900633]" />,
    title: "Fast Allocation",
    description: "Get your room assigned swiftly — no unnecessary waiting or delays.",
  },
  {
    icon: <Users className="w-10 h-10 text-[#900633]" />,
    title: "Trusted by Many",
    description: "Hundreds of students use our platform every semester. You're in safe hands.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-[#900633] mb-4">
        Why Choose Us?
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg mb-12">
        Our platform is designed to make your room application stress-free, fast, and reliable.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition duration-300"
          >
            <div className="flex justify-center mb-4">{reason.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {reason.title}
            </h3>
            <p className="text-gray-600 text-sm">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
