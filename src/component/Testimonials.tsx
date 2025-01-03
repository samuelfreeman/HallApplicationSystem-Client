import React, { useState } from "react";

interface Testimonial {
  name: string;
  feedback: string;
  image: string;
}

const testimonials: Testimonial[] = [
  { name: "Kwame Doe", feedback: "The room allocation process was seamless!", image: "/user(1).png" },
  { name: "Mike Asamoah", feedback: "Managing payments has never been easier.", image: "/user(1).png" },
  { name: "Alex Boateng", feedback: "A reliable system that saves time and stress.", image: "/user(1).png" },
];

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-gray-100 py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
      <div className="relative max-w-4xl mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-full p-6 bg-white rounded-lg shadow-md flex flex-col items-center text-center"
              >
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s photo`}
                  className="w-16 h-16 rounded-full mb-4"
                />
                <p className="italic text-gray-700">"{testimonial.feedback}"</p>
                <h4 className="mt-4 font-semibold text-gray-800">- {testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-md p-4 hover:bg-gray-700"
          onClick={prevSlide}
        >
          {"<"}
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-md p-4 hover:bg-gray-700"
          onClick={nextSlide}
        >
          {">"}
        </button>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
