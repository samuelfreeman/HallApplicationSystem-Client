import React, { useState } from "react";


import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



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


  return (
    <section className="bg-gray-100 py-12 px-6 flex flex-col">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
      <div className="relative max-w-4xl mx-auto">


        <Carousel className="w-full max-w-xs" opts={{
          align: "start",
          loop: true,
        }}>
          <CarouselContent>
            {testimonials.map((message, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col p-10 gap-4 items-center justify-center ">
                      <img src={message.image} alt={message.name} className="w-16 h-16 rounded-full" />
                      <span className="text-xl text-center font-semibold">{message.feedback}</span>
                      <span className="text-gray-600">- {message.name}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

      </div>




    </section>
  );
};

export default Testimonials;
