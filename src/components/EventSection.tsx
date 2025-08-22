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
      tab: "Program Pesta Rakyat",
      session: "29 - 30 August 2025 | Art Center Bali",
      items: [
        {
          time: "15.00 - 15.10",
          title: "Welcoming Speech",
          description: "- Representative by the Government of Bali Province",
        },
        {
          time: "15.10 - 15.15",
          title: "Opening Speech",
          description:
            "Prof. Bambang Wibawarta | Secretary General of the Ministry of Culture of the Republic of Indonesia",
          speakers: [
            {
              name: "Prof. Bambang Wibawarta",
              role: "Secretary General of the Ministry of Culture of the Republic of Indonesia",
              image: "/images/event-section/bambang-wibawarta.png",
            },
          ],
        },
        {
          time: "15.15 - 15.20",
          title: "Opening Remarks by MC & Cultural Blessing",
          description: "Opening remarks by MC and cultural blessing",
        },
        {
          time: "15.20 - 15.25",
          title: "Sanggar Budaya Performance: Group 1",
          description:
            "Balinese Traditional Pendet Dance as Welcome Dance Performance to open the festives",
        },
        {
          time: "15.25 - 15.35",
          title: "Interactive Crowd moment & introduction CHANDI",
          description: "Interactive crowd moment & CHANDI introduction",
        },
        {
          time: "15.35 - 15.40",
          title: "Sanggar Budaya Performance: Group 2",
          description: "Sanggar Budaya Performance: Group 2",
        },
        {
          time: "15.40 - 16.00",
          title: "Audience interaction - Cultural Trivia & Giveaway with MC",
          description: "Audience interaction - Cultural Trivia & Giveaway with MC",
        },
        {
          time: "16.00 - 16.10",
          title:
            "Break & Culinary session (Experience at booth UMKM)",
          description:
            "For audiences to explore local handicraft, snacks, drinks, and creative booths",
        },
        {
          time: "16.10 - 16.15",
          title: "Welcome Remarks by MC",
          description: "Welcome remarks by MC",
        },
        {
          time: "16.15 - 16.20",
          title: "Sanggar Budaya Performance: Group 3",
          description: "Sanggar Budaya Performance: Group 3",
        },
        {
          time: "16.20 - 16.30",
          title: "Interactive Crowd moment & introduction CHANDI",
          description: "Interactive crowd moment & CHANDI introduction",
        },
        {
          time: "16.30 - 16.35",
          title: "Sanggar Budaya Performance: Group 4",
          description: "Sanggar Budaya Performance: Group 4",
        },
        {
          time: "16.35 - 17.35",
          title: "Headliner Performance",
          description: `• Jegeg Bulan\n• Bus Marlet`,
        },
        {
          time: "17.35 - 18.00",
          title: "Audience Interaction - Cultural Trivia & Giveaway with MC",
          description: "Audience interaction - Cultural Trivia & Giveaway with MC",
        },
        {
          time: "18.00 - 19.00",
          title: "Break and Culinary Session (Experience at booth UMKM)",
          description:
            "For audiences to explore local handicraft, snacks, drinks, and creative booths",
        },
        {
          time: "19.00 - 19.15",
          title: "Welcome Remarks by MC",
          description: "Welcome remarks by MC",
        },
        {
          time: "19.15 - 19.20",
          title: "Sanggar Budaya Performance: Group 5",
          description: "Sanggar Budaya Performance: Group 5",
        },
        {
          time: "19.20 - 19.35",
          title: "Audience Interaction - Cultural Trivia, Giveaway with MC",
          description: "Audience interaction - Cultural Trivia & Giveaway with MC",
        },
        {
          time: "19.35 - 20.45",
          title: "Headliner Performance",
          description: `• Bonbon Skoozy\n• Joni Agung & Double T Band`,
        },
        {
          time: "20.45 - 21.00",
          title: "Closing Remarks & Countdown to main event of CHANDI Summit",
          description: "Closing remarks & countdown",
        },
        {
          time: "21.00",
          title: "End of Program Day 1/2",
          description: "End of Program Day 1/2",
        },
      ],
    },
    {
      tab: "Program Pesta Rakyat — Discovery Mall",
      session: "29 - 30 August 2025 | Discovery Mall Bali",
      items: [
        {
          time: "16.00 - 16.10",
          title: "Welcoming Speech",
          description: "- Representative by the Government of Bali Province",
        },
        {
          time: "16.10 - 16.15",
          title: "Opening Speech",
          description:
            "Prof. Bambang Wibawarta | Secretary General of the Ministry of Culture of the Republic of Indonesia",
          speakers: [
            {
              name: "Prof. Bambang Wibawarta",
              role: "Secretary General of the Ministry of Culture of the Republic of Indonesia",
              image: "/images/event-section/bambang-wibawarta.png",
            },
          ],
        },
        {
          time: "16.15 - 16.20",
          title: "Opening Remarks by MC & Cultural Blessing",
          description: "Opening remarks by MC and cultural blessing",
        },
        {
          time: "16.20 - 16.25",
          title: "Sanggar Budaya Performance: Group 1",
          description:
            "Balinese Traditional Pendet Dance as Welcome Dance Performance to open the festives",
        },
        {
          time: "16.25 - 16.35",
          title: "Interactive Crowd moment & introduction CHANDI",
          description: "Interactive crowd moment & CHANDI introduction",
        },
        {
          time: "16.35 - 16.40",
          title: "Sanggar Budaya Performance: Group 2",
          description: "Sanggar Budaya Performance: Group 2",
        },
        {
          time: "16.40 - 17.00",
          title: "Audience interaction - Cultural Trivia & Giveaway with MC",
          description: "Audience interaction - Cultural Trivia & Giveaway with MC",
        },
        {
          time: "17.00 - 17.10",
          title: "Break & Culinary session (Experience at booth UMKM)",
          description:
            "For audiences to explore local handicraft, snacks, drinks, and creative booths",
        },
        {
          time: "17.10 - 17.15",
          title: "Welcome Remarks by MC",
          description: "Welcome remarks by MC",
        },
        {
          time: "17.15 - 17.20",
          title: "Sanggar Budaya Performance: Group 3",
          description: "Sanggar Budaya Performance: Group 3",
        },
        {
          time: "17.20 - 17.30",
          title: "Interactive Crowd moment & introduction CHANDI",
          description: "Interactive crowd moment & CHANDI introduction",
        },
        {
          time: "17.30 - 17.35",
          title: "Sanggar Budaya Performance: Group 4",
          description: "Sanggar Budaya Performance: Group 4",
        },
        {
          time: "17.35 - 18.35",
          title: "Headliner Performance",
          description: `• Yessy Diana\n• Agapeea`,
        },
        {
          time: "18.35 - 19.00",
          title: "Audience Interaction - Cultural Trivia & Giveaway with MC",
          description: "Audience interaction - Cultural Trivia & Giveaway with MC",
        },
        {
          time: "19.00 - 20.00",
          title: "Break and Culinary Session (Experience at booth UMKM)",
          description:
            "For audiences to explore local handicraft, snacks, drinks, and creative booths",
        },
        {
          time: "20.00 - 20.15",
          title: "Welcome Remarks by MC",
          description: "Welcome remarks by MC",
        },
        {
          time: "20.15 - 20.20",
          title: "Sanggar Budaya Performance: Group 5",
          description: "Sanggar Budaya Performance: Group 5",
        },
        {
          time: "20.20 - 20.35",
          title: "Audience Interaction - Cultural Trivia, Giveaway with MC",
          description: "Audience interaction - Cultural Trivia & Giveaway with MC",
        },
        {
          time: "20.35 - 21.45",
          title: "Headliner Performance",
          description: `• Gus Yuda\n• Kecap Asin`,
        },
        {
          time: "21.45 - 22.00",
          title: "Closing Remarks & Countdown to main event of CHANDI Summit",
          description: "Closing remarks & countdown",
        },
        {
          time: "22.00",
          title: "End of Program Day 1/2",
          description: "End of Program Day 1/2",
        },
      ],
    },
    {
      tab: "Welcoming Dinner Ministerial",
      session: "2 September 2025 : Terrace Garden Bali Beach Lawn Area",
      items: [
        {
          time: "17.00 - 18.00",
          title: "Registration",
          description:
            `• Registration\n• Handing over Balinese bamboo fan as souvenir\n• Accompanied by live Rindik music`,
        },
        {
          time: "18.00 - 18.10",
          title: "Balinese Blessing Ceremony",
          description: "Balinese Blessing Ceremony with Priest blessing the event",
        },
        {
          time: "18.10 - 18.15",
          title: "Opening by MC",
          description: "",
        },
        {
          time: "18.15 - 18.30",
          title: "Welcome speech",
          description: "Dr. Fadli Zon | The Minister of Culture Republic of Indonesia",
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
          title: "Dinner Service",
          description:
            `• Food Parade (Soup Served) accompanied by live Rindik music\n• Dinner set menu style accompanied by Acoustic Music`,
        },
        {
          time: "19.25 - 19.55",
          title: "Fire Kecak Dance Performance",
          description: "",
        },
        {
          time: "19.55 - 20.00",
          title: "Closing by MC",
          description: "",
        },
      ],
    },
    {
      tab: "Day 1 : Opening & Ministerial Summit",
      session: "3 September 2025 : Bali Beach Convention Center - The Meru Sanur",
      items: [
        {
          time: "08.00 - 09.00",
          title: "Registration, Coffee Break",
          description: "Registration and coffee break for delegates and participants.",
        },
        {
          time: "08.55 - 09.00",
          title: "President of the Republic of Indonesia Entering Ballroom",
          description: "Arrival of the President and entrance into the ballroom.",
        },
        {
          time: "09.00 - 09.05",
          title: "Welcome Balinese Dance",
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
          time: "09.20 - 09.25",
          title: "Remark",
          description: "Opening remark.",
          speakers: [
            {
              name: "Prof. Dr. Pratikno",
              role: "Coordinating Minister for Human Development and Cultural Affairs of the Republic of Indonesia",
              image: "/images/event-section/fadli-zon.png",
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
          time: "09.40 - 09.55",
          title: "Art Performance: Sound of Nusantara",
          description: "Art Performance Sound of Nusantara : Maha Meredangga Nuswantara Praba Buana Prastawa",
        },
        {
          time: "09.55 - 10.40",
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
          time: "10.40 - 10.50",
          title: "Opening Ceremony of CHANDI SUMMIT 2025",
          description: "Opening Ceremony of CHANDI SUMMIT 2025",
        },
        {
          time: "10.50 - 10.55",
          title: "President and all Ministers Proceed to Pre-Function",
          description: "President and all Ministers Proceed to Pre-Function",
        },
        {
          time: "10.55 - 11.10",
          title: "Photo Session of All Ministers at BBC Pre-Function Area Doorstop Media",
          description:
            "Photo Session of All Ministers at BBC Pre-Function Area Doorstop Media",
        },
        {
          time: "10.55 - 11.10",
          title: "Balinese Dance: Abarisan Sudamala Deeang Nusantara",
          description: "Balinese Dance: Abarisan Sudamala Deeang Nusantara",
        },
        {
          time: "11.10 - 11.35",
          title: "Keynote Address: Culture as the Key to Future Global Sustainability",
          description: "Shilpa Shetty | Indian Actress – Entrepreneur (*TBC)",
          speakers: [
            {
              name: "Shilpa Shetty",
              role: "Indian Actress – Entrepreneur (*TBC)",
              image: "/images/event-section/fadli-zon.png",
            },
          ],
        },
        {
          time: "11.35 - 12.05",
          title: "Keynote Address: The Role of Youth in Fostering Peace Through Culture",
          description: "(*TBA)",
        },
        {
          time: "12.05 - 12.10",
          title: "Conclusion of the Opening Session",
          description: "Conclusion and wrap-up of the opening session.",
        },
        {
          time: "12.10 - 13.20",
          title: "Lunch",
          description: "Lunch break for all participants.",
        },
        {
          time: "13.20 - 17.00 \n\n• Coffee Break: 15.30–16.00",
          title: "Ministerial Summit",
          description: `• Opening Statement by the Minister of Culture of the Republic of Indonesia\n• Country Statement by All Ministers\n• Conclusion and Closing\n`,
        },
        {
          time: "14.00 - 17.00",
          title: "Panel Discussion 1",
          description: `• Topic: Reclaiming History, Restoring Justice — International Cooperation for Repatriation and the Fight Against Illicit Trafficking of Cultural Objects\n• Co-Host: International Council of Museums (ICOM) Indonesia\n• Panelists:\n  1) Prof. I Ketut Ardhana, PhD (Professor of Asian History, Udayana University)\n  2) I Gusti Agung Wesaka Puja (Ambassador of the Republic of Indonesia to the Kingdom of Netherlands, 2016–2020)\n• Moderator: Budi Trinovari, Chair of International Council of Museums Indonesia\n• Note: Coffee and snacks will be served during the discussion`,
        },
        {
          time: "14.00 - 17.00",
          title: "Panel Discussion 2",
          description: `• Topic: Traditional Knowledge and Local Practices in Building Resilient and Inclusive Societies in the Post-2030 World\n• Co-Host: International Council on Monuments and Sites (ICOMOS)\n• Panelists:\n  1) Prof.Dr. I Wayan Adnyana, S.Sn., M.Sn. (Rector of the Indonesian Institute of the Arts Bali)\n  2) Dr. Rohit Jigyasu (Programme Manager, Sustainable Urban and Built Heritage Conservation, Disaster and Climate Risk Management & Post Crisis Recovery, ICCROM)\n• Moderator: Dra. Nazrina Zuryani, M.A., Ph.D — Head of Bali Province Branch of Indonesia Sociology Association`,
        },
        {
          time: "14.00 - 17.00",
          title: "Panel Discussion 3",
          description: `• Topic: Financing the Future of Culture — Unlocking Investment for Preservation and Innovation\n• Co-Host: Indonesian Heritage Trust (BPPI)\n• Panelists:\n  1) Dr. Donovan Rypkema (President of Heritage Strategies International)\n  2) Hasti Tarekat Dipowijoyo (Founder of Heritage Hands-on, Co‑Chair of Advisory Board of the Asian Network for Industrial Heritage)\n• Moderator: Dr. Catrini Pratihari Kubontubuh, M.Arch. — Chairperson of the Indonesian Heritage Trust`,
        },
        {
          time: "14.00 - 17.00",
          title: "Panel Discussion 4",
          description: `• Topic: Responding to Climate Risks to Heritage and Fostering Culture‑Based Climate Action\n• Co-Host: Indonesian National Research and Innovation Agency (BRIN)\n• Panelists:\n  1) Professor R. Michael Feener — Professor of Cross‑Regional Studies at the Centre for Southeast Asian Studies, Kyoto University\n  2) TBC\n• Moderator: TBC`,
        },
        {
          time: "17.30 - 18.00",
          title: "Break for VIP Dinner Preparation",
          description: "Break for VIP Dinner preparation.",
        },
        {
          time: "18.00 - 19.30",
          title: "VIP Dinner",
          description: "VIP Dinner.",
        },
        {
          time: "18.00 - 19.30",
          title: "The Invitees enter the Bali Beach Convention Ballroom 1 & 2",
          description: "The Invitees enter the Bali Beach Convention Ballroom 1 & 2.",
        },
        {
          time: "20.00 - 22.00",
          title: "CHANDI Music Performance",
          description: `Andi Rianto Band with Judika, Lesti Kejora, Niki, Joey Alexander, Michael Anthony Kwok, Ahmad Dhani, Melly Goeslaw, Once Mekel (TBC)`,
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
      session: "3 September 2025 | Bali Beach Convention Center - The Meru Sanur",
      items: [
        {
          time: "18.30 - 20.00",
          title: "Registration by Kiosk",
          description: "•Registration by Kiosk (badge meeting pass mandatory)\n•Dinner for Minister and VIP at Roso Restaurant\n•Dinner for Delegates at Foyer BBC 1-2",
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
          description: `Andi Rianto Band with Judika, Lesti Kejora, Niki, Joey Alexander, Michael Anthony Kwok, Ahmad Dhani, Melly Goeslaw, Once Mekel (TBC)`,
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
      session: "4 September 2025 | Bali Beach Convention Center - The Meru Sanur",
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
          description: `• Keynote Speech: Hashim S. Djojohadikusumo | Chairman of the Board of Trustees of Indonesian Heritage Agency\n• (15 minutes)\n• Panelists:\n  - Gaetan Bruel (French)\n  - Hetifah Sjaifudian (Indonesia)\n• Q&A Session`,
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
          description: `• Keynote Speech: Sheikha Al Mayassa bint Hamad bin Khalifa Al Thani | Chairperson of Qatar Museums, Doha Film Institute, Reach Out to Asia and Qatar Leadership Centre (*TBC)\n• (15 minutes)\n• Panelists:\n  - Prof. Xu Liping (China)\n  - Kurosawa Shinya (Japan)\n  - Konrad Ng (USA)\n• Q&A Session`,
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
          description: `• Keynote Speech: Student from Green School Bali\n• “Culture, Sustainability and the Future”\n• (15 minutes)\n• Panelists:\n  - Angga Dwimas Sasongko (Indonesia)\n  - Chelsea Islan (Indonesia)\n  - Rahayu Saraswati Djojohadikusumo (Indonesia)\n• Youth representatives\n• Q&A Session`,
        },
        {
          time: "15.00 - 15.30",
          title: "Conclusion and Closing",
          description: "",
        },
        {
          time: "15.30 - 16.00",
          title: "",
          description: `• Bali Cultural Initiative Declaration\n• Conclusion and Closing Ceremony by Minister of Culture of the Republic of Indonesia, Mr. Fadli Zon (Attended by all the Ministers and Delegates)`,
         },
        {
          time: "16.30 - 18.00",
          title: "Workshops on Cultural Heritage (parallel session)",
          description: `• Workshop Batik Making - Batik Solo Laweyan\n• Workshop Traditional Balinese Dance by ISI Bali\n• Workshop Angklung\n• Workshop Keris Making (Javanese Traditional Dagger)\n• Workshop Making Indonesian Balinese Traditional Mask by ISI Bali`,
        },
        {
          time: "17.00 - 19.00",
          title: "Break for Networking Preparation",
          description: "Break for Networking Preparation",
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
      session: "5 September 2025 | Bali Beach Convention Center - The Meru Sanur",
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
          description: `• From ISI Bali, participants may choose a study visit to either Green School Bali or Penglipuran Village \n• From Udayana University, participants may choose a study visit to either Green School Bali or Penglipuran Village`,
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
