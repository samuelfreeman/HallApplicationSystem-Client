import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  { question: "How do I request a room?", answer: "You can request a room by logging in and selecting your preferred room under the 'Room Requests' tab." },
  { question: "What payment methods are accepted?", answer: "We accept all major credit cards, bank transfers, and mobile money payments." },
  { question: "How can I check my room allocation status?", answer: "Once your request is approved, the status will be updated in your dashboard." },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="max-w-4xl mx-auto">
        {faqItems.map((item, index) => (
          <div
            className="border-b border-gray-200 py-4"
            key={index}
          >
            <h4
              onClick={() => toggleFAQ(index)}
              className="text-lg font-semibold cursor-pointer flex justify-between items-center"
            >
              {item.question} <span>{activeIndex === index ? "-" : "+"}</span>
            </h4>
            {activeIndex === index && <p className="mt-2 text-gray-600">{item.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
