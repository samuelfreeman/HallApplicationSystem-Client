import { Typewriter } from "react-simple-typewriter";

const features = [
  {
    icon: "/mdi_guest-room-outline.png",
    title: "Effortless Room Booking",
    description: "Quickly find and secure your preferred room in a few easy steps.",
  },
  {
    icon: "/arcticons_sob-smart.png",
    title: "Seamless Management",
    description: "Admins manage room allocations and requests effortlessly.",
  },
  {
    icon: "/Vector.png",
    title: "Innovative Student Living",
    description: "Smart living designed to fit students' academic and lifestyle needs.",
  },
];

const Hero = () => {
  return (
    <section className="relative w-full bg-black text-white pt-24 pb-16 px-4 sm:px-8 md:px-16 overflow-x-hidden hero">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-80 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-8 max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          Welcome to Autonomy Hall Application
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary-foreground">
          <Typewriter
            words={[
              "Welcome to Seamless Hall Living",
              "Find Your Perfect Room.",
              "Hassle-Free Registration.",
              "Book. Pay. Stay.",
            ]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={90}
            deleteSpeed={70}
            delaySpeed={1000}
          />
        </h2>
      </div>

      {/* Features */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto px-4">
        {features.map((feature, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 backdrop-blur rounded-2xl p-6 flex flex-col items-center text-center transition hover:scale-[1.03] shadow-md"
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-12 h-12 mb-4 object-contain"
            />
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
