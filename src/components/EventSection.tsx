"use client";

import React from "react";
import Image from "next/image";
import ProfileImagePlaceholder from "./common/ProfileImagePlaceholder";

interface SpeakerProps {
  name: string;
  role: string;
  image: string;
  useTie?: boolean;
}

interface EventSectionProps {
  title?: string;
  subtitle?: string;
}

const EventSection: React.FC<EventSectionProps> = ({
  title = "Discover the Full Summit Agenda",
  subtitle = "Event agenda",
}) => {
  // Type definition for agenda items
  interface AgendaItem {
    time: string;
    title: string;
    description: string;
    speakers?: SpeakerProps[];
  }

  interface AgendaDay {
    tab: string;
    session: string;
    items: AgendaItem[];
  }

  // Sample agenda data
  // Multi-day agenda data
  const agendaDays: AgendaDay[] = [
    {
      tab: "Welcoming Dinner Ministerial",
      session: "2 September 2025 : Bali Beach Lawn Area",
      items: [
        {
          time: "17.00 - 18.00",
          title: "Registration",
          description:
            "Attendee registration for the Welcoming Dinner Ministerial.",
        },
        {
          time: "18.00 - 18.10",
          title: "Balinese Parade",
          description: "Traditional Balinese parade to commence the evening.",
        },
        {
          time: "18.10 - 18.15",
          title: "Opening",
          description:
            "Official opening of the Chandi Summit 2025 Welcoming Dinner Ministerial.",
        },
        {
          time: "18.15 - 18.30",
          title: "Welcome Speech",
          description: "Welcome address to all attendees.",
          speakers: [
            {
              name: "Dr. Fadli Zon",
              role: "Minister of Culture of the Republic of Indonesia",
              image: "/images/event-section/fadli-zon.png", // Update this path if you have a different profile image
            },
          ],
        },
        {
          time: "18.30 - 19.25",
          title: "Dinner accompanied by live Rindik music",
          description:
            "Enjoy dinner with the sounds of traditional Balinese Rindik music.",
        },
        {
          time: "19.25 - 19.55",
          title: "Kecak performance",
          description:
            "Experience the iconic Balinese Kecak dance performance.",
        },
        {
          time: "19.55 - 20.00",
          title: "Closing",
          description: "Closing remarks for the evening.",
        },
      ],
    },
    {
      tab: "Day 1 : Opening & Ministerial Summit",
      session: "3 September 2025 : Bali Beach Convention by The Meru",
      items: [
        {
          time: "08.00 - 08.55",
          title: "Registration",
          description: "Registration for delegates and participants.",
        },
        {
          time: "09.00 - 09.05",
          title: "Balinese Welcome Dance",
          description: "Traditional Balinese dance to open the summit.",
        },
        {
          time: "09.05 - 09.10",
          title: "Opening",
          description: "Official opening of the Chandi Summit 2025 Day 1.",
        },
        {
          time: "09.10 - 09.20",
          title: "Chairman’s Report",
          description:
            "Prof. Bambang Wibawarta | Secretary General of the Ministry of Culture of the Republic of Indonesia.",
          speakers: [
            {
              name: "Prof. Bambang Wibawarta",
              role: "Secretary General of the Ministry of Culture of the Republic of Indonesia",
              image: "/images/event-section/bambang-wibawarta.png",
            },
          ],
        },
        {
          time: "09.20 - 09.35",
          title: "Welcome Speech",
          description:
            "Welcome speech by Dr. Fadli Zon, Minister of Culture of the Republic of Indonesia.",
          speakers: [
            {
              name: "Dr. Fadli Zon",
              role: "Minister of Culture of the Republic of Indonesia",
              image: "/images/event-section/fadli-zon.png",
            },
          ],
        },
        {
          time: "09.35 - 09.50",
          title: "Art Performance: Sound of Nusantara",
          description: "Cultural art performance.",
        },
        {
          time: "09.50 - 10.35",
          title: "Keynote Speech",
          description:
            "Prabowo Subianto | President of the Republic of Indonesia.",
          speakers: [
            {
              name: "Prabowo Subianto",
              role: "President of the Republic of Indonesia",
              image: "/images/event-section/prabowo-subianto.png",
            },
          ],
        },
        {
          time: "10.35 - 10.45",
          title: "Opening Ceremony of CHANDI SUMMIT 2025",
          description: "Opening Ceremony of CHANDI SUMMIT 2025",
        },
        {
          time: "10.45 - 11.00",
          title: "Photo Session",
          description:
            "Photo session of all ministers at the Bali Beach Convention Pre-Function Area.",
        },
        {
          time: "11.00 - 11.05",
          title: "President & Ministers Proceed",
          description:
            "The President and all Ministers proceed to the opening function.",
        },
        {
          time: "11.05 - 11.10",
          title: "Balinese Dance",
          description: "Balinese dance performance.",
        },
        {
          time: "11.10 - 11.40",
          title:
            "Keynote Address: Culture as the Key to Future Global Sustainability",
          description:
            "Jacques Attali | Economist, Philosopher and Futurist (*TBC).",
          speakers: [
            {
              name: "Jacques Attali",
              role: "Economist, Philosopher and Futurist (*TBC)",
              image: "/images/event-section/jacques-attali.png",
            },
          ],
        },
        {
          time: "11.40 - 12.10",
          title:
            "Keynote Address: The Role of Youth in Fostering Peace Through Culture",
          description: "Keynote address on youth and peace through culture.",
        },
        {
          time: "12.10 - 12.15",
          title: "Conclusion of the Opening Session",
          description: "Conclusion and wrap-up of the opening session.",
        },
        {
          time: "12.15 - 13.15",
          title: "Lunch",
          description: "Lunch break for all participants.",
        },
        {
          time: "13.00 - 17.00",
          title: "Ministerial Summit",
          description: `• Opening Statement by the Minister of Culture of the Republic of Indonesia\n• Country Statement\n• Bali Cultural Declaration\n• Closing Statement by the Minister of Culture of the Republic of Indonesia\n• Coffee Break: 15.30–16.00`,
        },
        {
          time: "14.00 - 16.00",
          title: "Panel Discussions",
          description: `• Panel Discussion 1: Reclaiming History, Restoring Justice: International Cooperation for Repatriation and the Fight Against Illicit Trafficking of Cultural Objects\n• Panel Discussion 2: Traditional Knowledge and Local Practices in Building Resilient and Inclusive Societies in the Post-2030 World\n• Panel Discussion 3: Financing the Future of Culture: Unlocking Investment for Preservation and Innovation\n• Panel Discussion 4: Responding the Climate Risks to Heritage and Fostering Culture-Based Climate Action\n• Coffee Break: 15.30–16.00`,
        },
        {
          time: "17.00 - 19.00",
          title: "Break for Dinner",
          description: "Break for participants to prepare for the Gala Dinner.",
        },
        {
          time: "19.00 - 20.00",
          title: "Gala Dinner",
          description: "Gala Dinner for all participants.",
        },
        {
          time: "20.00 - 22.00",
          title: "Music Performance",
          description: "Music performance.",
          /*
          speakers: [
            {
              name: "Andi Rianto Band",
              role: "Performer",
              image: "/images/event-section/andi-rianto.png",
            },
            {
              name: "Judika",
              role: "Performer",
              image: "/images/event-section/judika.png",
            },
            {
              name: "Lesti Kejora",
              role: "Performer",
              image: "/images/event-section/lesti-kejora.png",
            },
            {
              name: "Niki",
              role: "Performer",
              image: "/images/event-section/niki.png",
            },
            {
              name: "Joey Alexander",
              role: "Performer",
              image: "/images/event-section/joey-alexander.png",
            },
            {
              name: "Michael Anthony Kwok",
              role: "Performer",
              image: "/images/event-section/michael-kwok.png",
            },
            {
              name: "Ahmad Dhani",
              role: "Performer",
              image: "/images/event-section/ahmad-dhani.png",
            },
            {
              name: "Melly Goeslaw",
              role: "Performer",
              image: "/images/event-section/melly-goeslaw.png",
            },
            {
              name: "Once Mekel (TBC)",
              role: "Performer",
              image: "/images/event-section/once-mekel.png",
            },
          ],
          */
        },
      ],
    },
    {
      tab: "Musical Performance",
      session: "3 September 2025 | Bali Beach Convention by The Meru",
      items: [
        {
          time: "18.30 - 20.00",
          title: "Registration by Kiosk",
          description: "Registration by Kiosk (badge meeting pass mandatory)",
        },
        {
          time: "19.30 - 20.00",
          title: "Door Open",
          description: "Door Open",
        },
        {
          time: "20.00 - 20.05",
          title: "Opening",
          description: "Opening",
        },
        {
          time: "20.05 - 20.15",
          title: "Speech",
          description: "Speech",
          speakers: [
            {
              name: "Dr. Fadli Zon",
              role: "Minister of Culture of the Republic of Indonesia",
              image: "/images/event-section/fadli-zon.png",
            },
          ],
        },
        {
          time: "20.15 - 21.55",
          title: "Music Performance",
          description: "Music Performance.",
          /*
          speakers: [
            {
              name: "Andi Rianto Band",
              role: "Performer",
              image: "/images/event-section/andi-rianto.png",
            },
            {
              name: "Judika",
              role: "Performer",
              image: "/images/event-section/judika.png",
            },
            {
              name: "Lesti Kejora",
              role: "Performer",
              image: "/images/event-section/lesti-kejora.png",
            },
            {
              name: "Niki",
              role: "Performer",
              image: "/images/event-section/niki.png",
            },
            {
              name: "Joey Alexander",
              role: "Performer",
              image: "/images/event-section/joey-alexander.png",
            },
            {
              name: "Michael Anthony Kwok",
              role: "Performer",
              image: "/images/event-section/michael-kwok.png",
            },
            {
              name: "Ahmad Dhani",
              role: "Performer",
              image: "/images/event-section/ahmad-dhani.png",
            },
            {
              name: "Melly Goeslaw",
              role: "Performer",
              image: "/images/event-section/melly-goeslaw.png",
            },
            {
              name: "Once Mekel (TBC)",
              role: "Performer",
              image: "/images/event-section/once-mekel.png",
            },
          ],*/
        },
        {
          time: "21.55 - 22.00",
          title: "Closing",
          description: "Closing",
        },
      ],
    },
    {
      tab: "Day 2 : CHANDI PLENARY",
      session: "4 September 2025 | Bali Beach Convention by The Meru",
      items: [
        {
          time: "08.00 - 09.00",
          title: "Registration",
          description: "Registration",
        },
        {
          time: "09.00 - 12.00",
          title: "CHANDI PLENARY",
          description: "",
        },
        {
          time: "09.00 - 10.45",
          title:
            "PLENARY 1: Culture for the Future: Heritage, Identity, and Innovation",
          description: `Keynote Speech: Hashim S. Djojohadikusumo | Chairman of the Board of Trustees of Indonesian Heritage Agency (*TBC)\n(15 minutes)\nQ&A Session`,
          speakers: [
            {
              name: "Hashim S. Djojohadikusumo",
              role: "Chairman of the Board of Trustees of Indonesian Heritage Agency (*TBC)",
              image: "/images/event-section/hashim-djojohadikusumo.png",
            },
          ],
        },
        {
          time: "10.45 - 12.30",
          title:
            "PLENARY 2: Tradition Meets Modernity: The Power of Culture to Build Bridges Across Nations and Promote Global Cultural Leadership",
          description: `Keynote Speech: Sheikha Al Mayassa bint Hamad bin Khalifa Al Thani | Chairperson of Qatar Museums, Doha Film Institute, Reach Out to Asia and Qatar Leadership Centre (*TBC)\n(15 minutes)\nQ&A Session`,
          speakers: [
            {
              name: "Sheikha Al Mayassa bint Hamad bin Khalifa Al Thani",
              role: "Chairperson of Qatar Museums, Doha Film Institute, Reach Out to Asia and Qatar Leadership Centre (*TBC)",
              image: "/images/event-section/sheikha-al-mayassa.png",
            },
          ],
        },
        {
          time: "12.30 - 13.30",
          title: "Lunch",
          description: "Lunch",
        },
        {
          time: "13.30 - 15.00",
          title: "PLENARY 3: Youth Panel",
          description: `Keynote Speech: Student from Green School Bali\n“Culture, Sustainability and the Future”\n(15 minutes)\nYouth representatives\nQ&A Session`,
        },
        {
          time: "15.00 - 15.30",
          title: "Conclusion and Closing",
          description: "Conclusion and Closing",
        },
        {
          time: "15.30 - 16.00",
          title: "Coffee Break, Transfer Parallel Session",
          description: "Coffee Break, Transfer Parallel Session",
        },
        {
          time: "16.00 - 17.30",
          title: "Workshops on Cultural Heritage (parallel session)",
          description: `• Workshop Batik Making\n• Workshop Traditional Dance\n• Workshop Wood Preservation\n• Workshop Keris Making (Javanese Traditional Dagger)\n• Workshop Making Indonesian Traditional Mask`,
        },
        {
          time: "17.00 - 19.00",
          title: "Break",
          description: "Break",
        },
        {
          time: "19.00",
          title: "Networking Event: Dangdut on The Beach",
          description: "Networking Event: Dangdut on The Beach",
        },
      ],
    },
    {
      tab: "Day 3 : COLLABORATIVE PROJECTS & STUDY VISITS",
      session: "4 September 2025 | Bali Beach Convention by The Meru",
      items: [
        {
          time: "09.00 - 11.30",
          title: "Workshop at ISI Bali:",
          description: `“Future of Intangible Cultural Heritage”\nInvolvement of UNESCO and academics to discuss the preservation of non physical cultural assets (music, dance, cuisine, and rituals)`,
        },
        {
          time: "09.00 - 11.30",
          title: "Workshop at Udayana University Bali:",
          description: `“Digital Heritage & AI for Culture”\nExploring AI technology for documenting and digitizing cultural heritage`,
        },
        {
          time: "11.30 - 13.00",
          title: "Lunch at ISI Bali",
          description: "Lunch at ISI Bali",
        },
        {
          time: "11.30 - 13.00",
          title: "Lunch at Udayana University",
          description: "Lunch at Udayana University",
        },
        {
          time: "14.00 - 17.00",
          title:
            "Study Visit & Future Collaboration Projects (Afternoon Session)",
          description: `From ISI Bali, participants may choose a study visit to either Green School Bali or Penglipuran Village\nFrom Udayana University, participants may choose a study visit to either Green School Bali or Penglipuran Village`,
        },
        {
          time: "17.00",
          title: "Back to the Bali Beach Convention Hotel by The Meru, Sanur",
          description:
            "Back to the Bali Beach Convention Hotel by The Meru, Sanur",
        },
        {
          time: "17.00",
          title: "End of Program",
          description: "End of Program",
        },
      ],
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Centered with line */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center">
            <div className="w-10 h-1 bg-black mr-4 rounded-full"></div>
            <h3 className="text-sm font-medium ">{subtitle}</h3>
          </div>
        </div>

        {/* Main Title - Centered */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold ">{title}</h2>
        </div>

        {agendaDays.map((day, dayIdx) => (
          <React.Fragment key={dayIdx}>
            {/* Day Tab - Matching the image */}
            <div className="mb-12">
              <div className="flex w-full overflow-hidden rounded-lg">
                <div className="bg-[#D2AF6D]  py-4 px-10 font-medium">
                  {day.tab}
                </div>
                <div className="bg-[#F2F2F2] text-[#333333] py-4 px-10 flex-grow">
                  {day.session}
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Timeline items */}
              {day.items.map((item, index) => (
                <div
                  key={index}
                  className="mb-8 flex flex-col md:flex-row md:items-start relative z-10"
                >
                  {/* Time column */}
                  <div className="md:w-[115px] lg:w-[150px] md:mr-10 mb-4 md:mb-0">
                    <p className="text-gray-700 text-base md:text-lg font-medium md:text-right">
                      {item.time}
                    </p>
                  </div>
                  {/* Content column */}
                  <div className="md:flex-1 bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    {item.description &&
                    item.description.trim().startsWith("•") ? (
                      <div className="text-gray-500 text-sm mb-5 leading-relaxed">
                        {item.description.split("\n").map((line, idx) => (
                          <span key={idx}>
                            {line}
                            <br />
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                    {/* Speakers grid */}
                    {item.speakers && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
                        {item.speakers.map((speaker, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4 border border-gray-100">
                              {speaker.image ? (
                                <>
                                  <div className="absolute inset-0 z-0">
                                    <ProfileImagePlaceholder 
                                      initials={speaker.name.split(' ').map(n => n[0]).join('')}
                                      useTie={speaker.useTie} 
                                    />
                                  </div>
                                  <Image
                                    src={speaker.image}
                                    alt={speaker.name}
                                    fill
                                    className="object-cover z-10 relative"
                                    onError={(e) => {
                                      // Hide the image on error, showing only the placeholder
                                      const target = e.target as HTMLImageElement;
                                      target.style.display = 'none';
                                    }}
                                  />
                                </>
                              ) : (
                                <ProfileImagePlaceholder 
                                  initials={speaker.name.split(' ').map(n => n[0]).join('')}
                                  useTie={speaker.useTie} 
                                />
                              )}
                            </div>
                            <div>
                              <p className="font-medium text-sm text-gray-800">
                                {speaker.name}
                              </p>
                              <p className="text-gray-500 text-xs">
                                {speaker.role}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default EventSection;
