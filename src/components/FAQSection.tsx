"use client";
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs?: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({
  title = 'All the Important Details Before Attending',
  subtitle = 'Questions',
  faqs = [
    {
      question: 'How can I register for the CHANDI 2025 Summit?',
      answer: 'Registration for the CHANDI 2025 Summit can be completed through our official website. Navigate to the "Registration" page and follow the instructions. Early bird registrations receive special discounts. If you encounter any issues during the registration process, feel free to reach out to our support team at support@chandisummit.com.'
    },
    {
      question: 'Will the summit be available online for remote attendees?',
      answer: 'Yes, the CHANDI 2025 Summit will offer a comprehensive virtual experience for remote attendees. All keynote speeches, panel discussions, and selected workshops will be streamed live. Virtual attendees will also have access to networking opportunities through our digital platform.'
    },
    {
      question: 'What is the dress code for the event?',
      answer: 'The dress code for the CHANDI 2025 Summit is business casual. However, for the evening gala on the final day, formal attire is recommended. We encourage attendees to dress comfortably for the workshops and panel discussions.'
    },
    {
      question: 'Can I submit my project or research for the summit?',
      answer: 'Absolutely! We welcome project and research submissions related to cultural heritage and innovation. Please visit the "Submissions" section on our website for guidelines and deadlines. All submissions will be reviewed by our committee, and selected projects will be featured during the summit.'
    },
    {
      question: 'How can I become a sponsor or exhibitor at the event?',
      answer: 'To become a sponsor or exhibitor at the CHANDI 2025 Summit, please reach out to our partnerships team at partners@chandisummit.com. We offer various sponsorship packages designed to maximize your visibility and engagement with attendees. Our team will work with you to create a tailored partnership that aligns with your objectives.'
    },
    {
      question: 'Will there be opportunities for networking at the summit?',
      answer: 'Yes, networking is a key focus of the CHANDI 2025 Summit. We have scheduled dedicated networking sessions throughout the event, including a welcome reception, daily networking breaks, roundtable discussions, and an exclusive networking dinner. Our mobile app will also facilitate connections between attendees based on shared interests and goals.'
    }
  ]
}) => {
  // State to track which FAQ is currently open
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Toggle FAQ open/close
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:gap-16 items-start">
          {/* Left: Section Label & Title */}
          <div className="md:w-2/5 w-full mb-10 md:mb-0 h-full flex flex-col justify-center">
            <div className="flex items-center mb-4">
              <div className="w-10 h-1 bg-black mr-4 rounded-full"></div>
              <p className="text-sm font-medium text-black tracking-wide">{subtitle}</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold max-w-xs md:max-w-none text-black">
              {title}
            </h2>
          </div>

          {/* Right: FAQ Items */}
          <div className="md:w-3/5 w-full">
            <div className="space-y-4 max-w-2xl md:max-w-3xl">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="border border-gray-200 rounded-2xl overflow-hidden"
                >
                  <button
                    className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-medium text-base md:text-lg text-black">{faq.question}</span>
                    <span className="text-2xl">
                      {activeIndex === index ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 5V19" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M5 12H19" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </button>
                  {activeIndex === index && (
                    <div className="px-5 pb-5">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
