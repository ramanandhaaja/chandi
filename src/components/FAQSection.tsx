"use client";
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionGroup {
  title: string;
  items: FAQItem[];
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  sections?: FAQSectionGroup[];
}

const FAQSection: React.FC<FAQSectionProps> = ({
  title = "All the Important Details Before Attending",
  subtitle = "Questions",
  sections = [
    {
      title: "Meetings",
      items: [
        {
          question: "When is the event?",
          answer:
            "CHANDI Summit 2025 will be held on 3 - 5 September 2025.",
        },
        {
          question: "Where is the event held?",
          answer: "Bali Beach Convention Centre by the Meru, Sanur, Bali.",
        },
        {
          question: "How are the Delegations composed?",
          answer:
            "Each country is invited to send their esteemed Excellency and one accompanying delegate. Accommodations will be provided by the Ministry of Culture in a 1+1 hospitality format.",
        },
        {
          question: "Ministerial Summit — Where will the plenary discussion be held?",
          answer: "The Ministerial Summit will be conducted in the Meeting Room.",
        },
        {
          question: "Ministerial Summit — Who will lead the Ministerial Summit?",
          answer:
            "The Ministry of Culture of the Republic of Indonesia, representing the host country, will chair the Ministerial Summit by default. A Co-chair will be appointed by the Chair.",
        },
        {
          question: "Ministerial Summit — What role do the Chair and Co-Chair play?",
          answer:
            "The Chairperson leads plenary sessions, guides discussions, upholds rules of procedure, recognizes speakers, calls votes, and announces decisions. The Chair does not vote but may instruct a delegation member to vote on their behalf. The Co-Chair supports the Chair, helps maintain order, ensures productive debate, and assumes full duties if the Chair is absent.",
        },
        {
          question: "Ministerial Summit — Who can attend?",
          answer:
            "The Ministerial Summit is private. Attendance is restricted to each country’s Head of Delegation with three accompanying personnel. Decisions are confidential; outcome documents will be disclosed publicly.",
        },
        {
          question: "Ministerial Summit — What are the seating arrangements?",
          answer:
            "Countries are placed in alphabetical order (English names). First-row seats are for the minister/head of delegation. Second-row seats are for accompanying personnel.",
        },
        {
          question: "Panel Discussion — Who can participate?",
          answer:
            "Panel Discussion will be semi-private. Participants include country delegates not in the Ministerial Summit and invited specific attendees. A limited number of seats will be available to the public on a pre-registered basis.",
        },
        {
          question: "Panel Discussion — Where will it be held?",
          answer:
            "The panel discussion will be held in thematic meeting rooms: 1) Reclaiming History, Restoring Justice: International Cooperation for Repatriation and the Fight Against Illicit Trafficking of Cultural Objects; 2) Traditional Knowledge and Local Practices in Building Resilient and Inclusive Societies in the Post-2030 World; 3) Financing the Future of Culture: Unlocking Investment for Preservation and Innovation; 4) Responding to Climate Risks to Heritage and Fostering Culture-Based Climate Action.",
        },
        {
          question: "Panel Discussion — How will the panel proceed?",
          answer:
            "Participants will be assigned to thematic breakout rooms based on topics selected during registration. All participants must complete registration/re-registration to gain access. On the day, proceed to your designated thematic room.",
        },
        {
          question: "Plenary Meeting — Who can participate?",
          answer:
            "The plenary meeting is open to the public. All delegations and interested members of the public are encouraged to attend. Prior registration is required.",
        },
        {
          question: "Plenary Meeting — Where will it be held?",
          answer: "The plenary meeting will be conducted in the Meeting Room.",
        },
        {
          question: "Plenary Meeting — How will it proceed?",
          answer:
            "The Plenary Meeting takes place on the second day, 3 September 2025, in two sessions: 09:00–12:30 and 13:00–15:30. Registration is required for full access.",
        },
        {
          question: "How is the agenda composed for sessions?",
          answer:
            "The provisional agenda is composed by the CHANDI Summit Secretariat and approved by the Minister for Culture of the Republic of Indonesia (Chair of CHANDI Summit 2025). The updated agenda will be available at www.chandisummit2025.org.",
        },
        {
          question: "In which languages is the CHANDI Summit held?",
          answer:
            "Official languages: Arabic, Chinese, English, French, and Russian. Simultaneous interpretation will be provided in these five languages. Documents will be in English.",
        },
        {
          question: "Which meetings are public, and which are private?",
          answer:
            "Seminars and Workshops are open to public participation unless specific exceptions apply. Ministerial Summit is private and limited to each country’s Minister/Head of Delegation with three accompanying personnel. Decisions in private meetings are confidential; outcome documents will be disclosed publicly.",
        },
      ],
    },
    {
      title: "Registration and Access",
      items: [
        {
          question: "How do I register for events in CHANDI Summit?",
          answer:
            "All participants must be accredited before the event. Registration categories and links are available at https://registration-chandisummit2025.genstix.id/. Upon successful registration, a confirmation QR code will be sent via email. Trade the QR code for a badge at the registration booth.",
        },
      ],
    },
    {
      title: "Documents and Publications",
      items: [
        {
          question: "Where can the documents be found?",
          answer:
            "At the conclusion of each session, a QR code will be displayed on-screen for participants to scan, directing to the CHANDI 2025 working documents website (chandisummit2025.org).",
        },
        {
          question: "Will the event be broadcast live?",
          answer:
            "The plenary and seminar sessions will be broadcast live via the Ministry of Culture’s official YouTube channel and the official CHANDI 2025 website. A dedicated music performance celebrating Indonesia’s cultural richness will be broadcast live and exclusively on Trans TV.",
        },
      ],
    },
    {
      title: "Venue",
      items: [
        {
          question: "Where is the venue for CHANDI Summit 2025?",
          answer:
            "Bali Beach Convention Centre by The Meru in Sanur, Bali. Dedicated rooms: Ministerial Summit, Panel Discussion, and Plenary in the Meeting Room. Workshops in: Agoong 5–6, Agoong 7–8, Batoor 1–2–3–5, Batoor 6–7, Batoor 8–9–10–11–12. Bilateral Meetings: Batoor 6–7, Executive Lounge level 10 area 1, and area 2 (reservation basis, 09:00–17:00, 3 September 2025). Secretariat: Agoong 2 with computers, printers, and basic office supplies.",
        },
        {
          question: "What is the procedure for access in entering the venue?",
          answer:
            "Upon arrival, proceed to the registration desk to complete re-registration and receive your official access badge. Wear the badge visibly at all times to access plenary halls, seminar rooms, and other designated areas.",
        },
        {
          question: "What is the badge pick-up procedure?",
          answer:
            "Upon arrival, proceed to the registration desk to complete re-registration and receive your official access badge. Wear the badge visibly at all times while on the premises.",
        },
      ],
    },
    {
      title: "Travel Safety",
      items: [
        {
          question: "What are the visa requirements for traveling to Indonesia?",
          answer:
            "Passports must be valid for at least six months from arrival. If a visa is required, apply at an Indonesian diplomatic/consular mission or via the e-visa portal: https://evisa.imigrasi.go.id. Full country list: https://www.imigrasi.go.id.",
        },
        {
          question: "Is health insurance necessary for traveling to Indonesia?",
          answer:
            "International health insurance is encouraged. Yellow fever vaccination is mandatory for travelers transiting over 12 hours through high-risk countries; without a valid certificate, a six-day quarantine may apply or entry may be denied.",
        },
        {
          question: "What are the customs regulations in Indonesia?",
          answer:
            "Travelers must declare all taxable goods, prohibited items, cash amounts, and negotiable monetary instruments (NMIs), whether carried or in luggage/vehicles. Failure to declare or making a false declaration is an offense subject to legal action.",
        },
        {
          question: "How to get to the hotel/venue from the airport?",
          answer:
            "Public transport is limited. A bus (Trans Metro Dewata) operates from Ngurah Rai Airport with a transfer at a terminal in Central Kuta; total journey about 1h40m, not ideal with heavy luggage. Ride-hailing apps (Grab, Gojek) or private taxis are convenient alternatives.",
        },
        {
          question: "What is the best way to navigate in Bali?",
          answer:
            "Taxis and ride-hailing (Gojek, Grab) are convenient; availability may be restricted in some areas. Renting scooters or cars offers flexibility (scooters for short/medium trips; cars for longer trips, e.g., northern regions). Public transport is very limited; no local trains and bus coverage/schedules are limited.",
        },
        {
          question: "What electrical equipment and power outlets are used in Indonesia?",
          answer:
            "Indonesia uses 220V, 50Hz electricity. Power outlets support Type C and Type F plugs. Bring an appropriate adapter and/or voltage converter if needed.",
        },
        {
          question: "What is the currency and what payment methods are accepted?",
          answer:
            "The currency is Indonesian Rupiah (IDR). Visa and MasterCard are accepted in hotels, malls, and most restaurants. Currency exchange services are available at banks and authorized money changers.",
        },
        {
          question: "How is the climate in Bali in early September?",
          answer:
            "Early September is during the dry season. Average temperatures range from 24°C to 31°C with low chances of rainfall and a light breeze, making conditions more comfortable.",
        },
      ],
    },
  ],
}) => {
  // Track which item is open per-section using a unique key
  const [activeKey, setActiveKey] = useState<string | null>(null);

  // Toggle FAQ open/close
  const toggleFAQ = (key: string) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:gap-16 items-start">
          {/* Left: Section Label & Title */}
          <div className="md:w-2/5 w-full mb-10 md:mb-0 h-full flex flex-col justify-center">
            <div className="flex items-center mb-4">
              <div className="w-10 h-1 bg-black mr-4 rounded-full"></div>
              <p className="text-sm font-medium  tracking-wide">{subtitle}</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold max-w-xs md:max-w-none ">
              {title}
            </h2>
          </div>

          {/* Right: FAQ Items */}
          <div className="md:w-3/5 w-full">
            <div className="space-y-12 max-w-2xl md:max-w-3xl">
              {sections.map((section, sIdx) => (
                <div key={sIdx}>
                  <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>
                  <div className="space-y-4">
                    {section.items.map((faq, fIdx) => {
                      const key = `${sIdx}-${fIdx}`;
                      const isOpen = activeKey === key;
                      return (
                        <div
                          key={key}
                          className="border border-gray-200 rounded-2xl overflow-hidden"
                        >
                          <button
                            className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                            onClick={() => toggleFAQ(key)}
                          >
                            <span className="font-medium text-base md:text-lg ">
                              {faq.question}
                            </span>
                            <span className="text-2xl">
                              {isOpen ? (
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5 12H19"
                                    stroke="#000"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 5V19"
                                    stroke="#000"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M5 12H19"
                                    stroke="#000"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              )}
                            </span>
                          </button>
                          {isOpen && (
                            <div className="px-5 pb-5">
                              <p className="text-gray-700">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
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

