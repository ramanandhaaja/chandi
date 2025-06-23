"use client";

import React from "react";
import Image from "next/image";

interface EventSectionProps {
  title?: string;
  subtitle?: string;
}

const EventSection: React.FC<EventSectionProps> = ({
  title = "Discover the Full Summit Agenda",
  subtitle = "Event agenda",
}) => {
  // Sample agenda data
  // Multi-day agenda data
  const agendaDays = [
    {
      tab: "Kickoff",
      session: "Day 1: Main Conference",
      items: [
        {
          time: "09.30–10.30 AM",
          title: "Opening Remarks",
          description:
            "Welcome to the CHANDI 2023 Summit. Kick off the day with an introduction from the event organizers and a sneak peek of what's in store.",
        },
        {
          time: "10.30–11.30 AM",
          title:
            "Keynote Address: Shaping the Future of Culture Through Innovation",
          description:
            "By Dr. Emma Parker, Chief Cultural Analyst at InnovateX Labs. Discover the profound influence of cultural movements on communities and global society.",
          speakers: [
            {
              name: "Dr. Emma Parker",
              role: "CEO, Culture Connect Summit",
              image: "/images/event-section/profile1.png",
            },
          ],
        },
        {
          time: "12.30–01.30 AM",
          title: "Panel Discussion: Culture in Action: Real-World Expressions",
          description:
            "An engaging conversation about the impact of cultural diversity in various sectors such as education, arts, and community development, featuring insights from cultural leaders.",
          speakers: [
            {
              name: "Sara Williams",
              role: "Cultural Strategist, InnovateCulture",
              image: "/images/event-section/profile2.png",
            },
            {
              name: "Ravi Singh",
              role: "Lead Cultural Engineer, MedCulture Solutions",
              image: "/images/event-section/profile3.png",
            },
            {
              name: "James Turner",
              role: "Senior Cultural Scientist, Quantum Culture",
              image: "/images/event-section/profile4.png",
            },
            {
              name: "Emily Roberts",
              role: "Director, Cultural Applications",
              image: "/images/event-section/profile5.png",
            },
          ],
        },
      ],
    },
    {
      tab: "Main Day",
      session: "Day 2 : Deep Dive Sessions",
      items: [
        {
          time: "09.30–10.30 AM",
          title: "Morning Networking Coffee",
          description:
            "Catch up with fellow attendees over coffee before diving into another exciting day of learning.",
        },
        {
          time: "11.30–12.30 PM",
          title: "Keynote Address: The Fusion of Culture and Technology",
          description:
            "By John Mitchell, Co-Founder & CEO at Culture Connect. Discover how cultural diversity and collaboration can foster innovative ideas at the upcoming Culture Summit.",
          speakers: [
            {
              name: "John Mitchell",
              role: "Co-Founder at Culture Corp",
              image: "/images/event-section/profile6.png",
            },
          ],
        },
        {
          time: "2.30–04.30 PM",
          title:
            "Panel Discussion: Culture and Transformation in the Age of Industry 4.0",
          description:
            "Panelists discuss how cultural trends are shaping the future of the Culture Summit and its impact on society.",
          speakers: [
            {
              name: "Dr. Lisa White",
              role: "Chief Innovation Officer, CultureFlow",
              image: "/images/event-section/profile7.png",
            },
            {
              name: "Mark Johnson",
              role: "Director, Cultural Solutions, RoboCulture",
              image: "/images/event-section/profile8.png",
            },
            {
              name: "Priya Patel",
              role: "Head, Cultural Transformation",
              image: "/images/event-section/profile9.png",
            },
            {
              name: "David Collins",
              role: "VP, Cultural Automation & Robotics",
              image: "/images/event-section/profile10.png",
            },
          ],
        },
      ],
    },
    {
      tab: "Sumup",
      session: "Day 3 : Networking Day",
      items: [
        {
          time: "09.30–11.30 AM",
          title: "Workshop: Driving ROI with Data",
          description:
            "Discover how organizations can leverage cultural insights to enhance teamwork, boost employee satisfaction, and foster innovation.",
        },
        {
          time: "02.30–03.30 PM",
          title: "Fireside Chat: The Future of Culture",
          description:
            "Join Olivia Reynolds, Principal Engineer at AlphaTech, as she explores the significance of cultural diversity in shaping innovative consumer experiences at the upcoming Culture Summit.",
          speakers: [
            {
              name: "Olivia Reynolds",
              role: "Cultural Engineer at Alpha Culture",
              image: "/images/event-section/profile11.png",
            },
          ],
        },
        {
          time: "04.30–05.30 PM",
          title: "Closing Remarks & Thank You",
          description:
            "A final wrap-up of the CHANDI 2025 Summit, with acknowledgments to all speakers, sponsors, and attendees. Looking forward to seeing you next year!",
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
                  className="mb-16 flex flex-col md:flex-row md:items-start relative z-10"
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
                    <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                      {item.description}
                    </p>
                    {/* Speakers grid */}
                    {item.speakers && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
                        {item.speakers.map((speaker, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4 border border-gray-100">
                              <Image
                                src={speaker.image}
                                alt={speaker.name}
                                fill
                                className="object-cover"
                              />
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
