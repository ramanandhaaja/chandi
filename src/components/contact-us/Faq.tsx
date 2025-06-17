"use client";
import Image from "next/image";
import { useState } from "react";

const Accordion = ({
  question,
  children,
}: {
  question: string;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        className="w-full flex items-center justify-between p-5 rounded-2xl  text-left hover:bg-gray-50 transition-colors duration-200 shadow-sm border border-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-[#2E2E2E] text-base font-normal">{question}</span>
        <div className="rounded-full w-8 h-8 flex items-center justify-center">
          <span
            className={`text-[#2E2E2E] text-xl transition-transform duration-200 ${
              isOpen ? "rotate-45" : ""
            }`}
          >
            <Image src="/plus.svg" alt="arrow" width={20} height={20} />
          </span>
        </div>
      </button>
      {isOpen && <div className="p-4 text-gray-600">{children}</div>}
    </div>
  );
};

const Faq = () => {
  const faqItems = [
    {
      question: "How can I register for the CHANDI 2025 Summit?",
      answer: "Registration details will be provided here...",
    },
    {
      question: "Will the summit be available online for remote attendees?",
      answer: "Information about remote attendance will be provided here...",
    },
    {
      question: "What is the dress code for the event?",
      answer: "Dress code information will be provided here...",
    },
    {
      question: "Can I submit my project or research for the summit?",
      answer: "Project submission details will be provided here...",
    },
    {
      question: "How can I become a sponsor or exhibitor at the event?",
      answer: "Sponsorship information will be provided here...",
    },
    {
      question: "Will there be opportunities for networking at the summit?",
      answer: "Networking details will be provided here...",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-18 bg-[#FCFAF5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:gap-20">
          {/* Left Column - Title and Description */}
          <div className="mb-10 md:mb-0 md:w-1/2">
            <div className="flex items-center mb-10">
              <div className="w-10 h-1 bg-[#0D0D0D] mr-4 rounded-full"></div>
              <h3 className="text-base font-medium tracking-wide text-[#0D0D0D]">
                FAQ
              </h3>
            </div>
            <h2 className="text-4xl md:text-[68px] mb-8 text-[#2E2E2E] leading-tight font-normal">
              All the Important Details Before Attending
            </h2>
          </div>

          {/* Right Column - Accordion Items */}
          <div className="md:w-1/2">
            {faqItems.map((item, index) => (
              <Accordion key={index} question={item.question}>
                {item.answer}
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
