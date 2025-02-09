import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const FAQ: React.FC = () => {

  return (
    <section className="bg-white py-12 px-6 flex  flex-col justify-center items-center w-full">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full md:w-2/5">
        <AccordionItem value="item-1">
          <AccordionTrigger>How do I request a room?</AccordionTrigger>
          <AccordionContent>
            You can request a room by logging in and selecting your preferred room under the 'Room Requests' tab.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What payment methods are accepted?</AccordionTrigger>
          <AccordionContent>
            We accept all major credit cards, bank transfers, and mobile money payments.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How can I check my room allocation status?</AccordionTrigger>
          <AccordionContent>
            Once your request is approved, the status will be updated in your dashboard.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FAQ;
