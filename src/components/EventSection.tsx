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
    linkHref?: string;
    linkText?: string;
    top_right_image?: string;
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
            "<b>Prof. Bambang Wibawarta</b> | Secretary General of the Ministry of Culture of the Republic of Indonesia",
          speakers: [
            {
              name: "Prof. Bambang Wibawarta",
              role: "Secretary General of the Ministry of Culture of the Republic of Indonesia",
              image: "/images/event-section/bambang.png",
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
          description: `• <b>Bonbon Skoozy\n• Joni Agung & Double T Band</b>`,
        },
        {
          time: "20.45 - 21.00",
          title: "Closing Remarks & Countdown to main event of CHANDI",
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
            "<b>Prof. Bambang Wibawarta</b> | Secretary General of the Ministry of Culture of the Republic of Indonesia",
          speakers: [
            {
              name: "Prof. Bambang Wibawarta",
              role: "Secretary General of the Ministry of Culture of the Republic of Indonesia",
              image: "/images/event-section/bambang.png",
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
          description: `• <b>Gus Yuda\n• Kecap Asin</b>`,
        },
        {
          time: "21.45 - 22.00",
          title: "Closing Remarks & Countdown to main event of CHANDI 2025",
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
          description: "<b>Dr. Fadli Zon</b> | The Minister of Culture Republic of Indonesia",
          speakers: [
            {
              name: "Dr. Fadli Zon",
              role: "Minister of Culture of the Republic of Indonesia",
              image: "/images/event-section/fadli.jpeg", // Update this path if you have a different profile image
            },
          ],
        },
        {
          time: "18.30 - 19.25",
          title: "Dinner Service",
          description:
            `• Food Parade (Appetizers) accompanied by live Rindik music\n• Dinner set menu style accompanied by Acoustic Music`,
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
          time: "08.00 - 08.55",
          title: "Registration, Coffee Break",
          description: "Registration and coffee break for delegates and participants.",
        },
        {
          time: "08.55 - 08.58",
          title: "President of the Republic of Indonesia Entering Ballroom",
          description: "Arrival of the President and entrance into the ballroom.",
        },
        {
          time: "08.58 - 09.00",
          title: "Opening Video CHANDI 2025",
          description: "Opening video of CHANDI 2025.",
        },
        {
          time: "09.00 - 09.08",
          title: "Opening Dance Sound of Nusantara",
          description: "Maha Mredangga Nuswantara Music",
        },
        {
          time: "09.08 - 09.13",
          title: "Opening by Master of Ceremony (MC)",
          description: "Opening by MC.",
        },
        {
          time: "09.13 - 09.23",
          title: "Chairman’s Report",
          description:
            "<b>Prof. Bambang Wibawarta</b> | Secretary General of the Ministry of Culture of the Republic of Indonesia.",
          speakers: [
            {
              name: "Prof. Bambang Wibawarta",
              role: "Secretary General of the Ministry of Culture of the Republic of Indonesia",
              image: "/images/event-section/bambang.png",
            },
          ],
        },
        {
          time: "09.23 - 09.28",
          title: "Welcome Speech",
          description:
            "Welcome speech by <b>Dr. Fadli Zon</b>, Minister of Culture of the Republic of Indonesia.",
          speakers: [
            {
              name: "Dr. Fadli Zon",
              role: "Minister of Culture of the Republic of Indonesia",
              image: "/images/event-section/fadli.jpeg",
            },
          ],
        },

        {
          time: "09.28 - 09.43",
          title: "Remarks",
          description: "Opening remarks.",
          speakers: [
            {
              name: "Prof. Dr. Pratikno",
              role: "Coordinating Minister for Human Development and Cultural Affairs of the Republic of Indonesia",
              image: "/images/event-section/pratikno.png",
            },
          ],
        },
        {
          time: "09.43 - 09.50",
          title: "Art Performance",
          description: "Cancala Bhuwana Chandika",
        },
        {
          time: "09.50 - 10.35",
          title: "Keynote Speech",
          description:
            "<b>Prabowo Subianto</b> | President of Republic of Indonesia.",
          speakers: [
            {
              name: "Prabowo Subianto",
              role: "President of Republic of Indonesia",
              image: "/images/event-section/prabowo.jpg",
            },
          ],
        },
        {
          time: "10.35 - 10.45",
          title: "Opening Ceremony of CHANDI 2025",
          description: "",
        },
        {
          time: "10.45 - 10.50",
          title: "President of the Republic of Indonesia and all Minister photo session",
          description: "",
        },
        {
          time: "11.05 - 12.45",
          title: "Minister Lunch",
          description: "",
        },
        {
          time: "10.50 - 10.55",
          title: "President and all Ministers Proceed to Pre-Function",
          description: "President and all Ministers Proceed to Pre-Function",
        },
        {
          time: "10.55 - 11.05",
          title: "Photo Session of All Ministers at BBC Pre-Function Area Doorstop Media",
          description:
            "Photo Session of All Ministers at BBC Pre-Function Area Doorstop Media",
        },
        {
          time: "10.50 - 11.00",
          title: "Balinese Dance",
          description: "<b>Kakuwung Ranu</b>",
        },
        {
          time: "11.00 - 11.20",
          title: "Keynote Address:",
          description: "Culture for the Future: A Bridge to Building Peace and Prosperity<br/><b>H. E. Mr. Kazembe</b> – Minister of Home Affairs and Cultural Heritage of The Republic of Zimbabwe",
          speakers: [
            {
              name: "H.E. Mr. Kazembe",
              role: "Minister of Home Affairs and Cultural Heritage of The Republic of Zimbabwe",
              image: "/images/event-section/kazembe.jpeg",
            },
          ],
        },
        {
          time: "11.20 - 11.40",
          title: "Keynote Address:",
          description: "The Role of Youth in Fostering Peace through Culture<br/><b>Jana Abusalha</b> — Youth Representative",
          speakers: [
            {
              name: "Jana Abusalha",
              role: "Youth Representative",
              image: "/images/event-section/jana.jpeg",
            },
          ],
        },
        {
          time: "11.40 - 11.45",
          title: "Conclusion of the Opening Session",
          description: "",
        },
        {
          time: "11.45 - 13.30",
          title: "Delegate Lunch",
          description: "",
        },
        {
          time: "13.00 - 17.00",
          title: "Ministerial Summit",
          description: `
<b>“Culture Beyond 2030: Safeguarding Heritage, Building Peace, and Advancing CCIs in a Digital Future” - <i>Closed Session</i></b>\n\n
• Opening by the Chair of the Ministerial Summit, Dr. Fadli Zon – Minister of Culture of the Republic of Indonesia\n
• Country Statements by Heads of Delegation.\n
• Summit Conclusion by the Rapporteur\n
• Closing remarks by Dr. Fadli Zon – Minister of Culture of the Republic of Indonesia\n\n
<i>Note: All relevant documents—including the Concept Note, Session Guidelines, Order of Business, and the Draft Declaration—are available under the Documents menu in the website’s main toolbar.</i>
`,
        },
        {
          time: "17.00 - 17.30",
          title: "Medal Appreciation Ceremony for All Minister ",
          description: "",
        },
        {
          time: "14.00 - 17.30\n\n• Coffee Break: 15.30–16.00\n• Sesi 1: 14.00–15.30\n• Sesi 2: 16.00–17.30",
          title: "Panel Discussion 1",
          description: `• Topic: “Reclaiming History, Restoring Justice: International Cooperation for Repatriation and the Fight Against Illicit Trafficking of Cultural Objects”\n\n• Co-Host: <b>International Council on Museums (ICOM) Indonesia</b>\n\n<b>• Panelists:</b>\n  1) <b>Prof. I Ketut Ardhana, PhD</b> — Professor of Asian History, Udayana University.\n 2) <b>Mr. I Gusti Agung Wesaka Puja</b> — Ambassador of the Republic of Indonesia to the Kingdom of Netherlands, 2016 – 2020\n\n• <b>Special Presentation:</b> <b>Prof. Ismunandar, Ph.D</b> — Senior Advisor to the Minister of Culture and Chair of the Expert Panel of Indonesia's Cultural Heritage Repatriation Team\n\n• <b>Moderator:</b> <b>Mr. Budi Trinovari</b> — Chair of International Council of Museums Indonesia\n\n<b>• Call for Paper:</b>\n  1) <b>Ms. Noor Fahmi Pramuji</b> — Faculty of Cultural Sciences, Khairun University, Ternate, The Republic of Indonesia\n  2) <b>Mr. Muhammad Fahmi Reksa Al Farisi</b> — SOAS University of London\n\n• Q&A Session`,
          top_right_image: "/images/event-section/panel3.jpeg",
        },
        {
          time: "14.00 - 17.30\n\n• Coffee Break: 15.30–16.00\n• Sesi 1: 14.00–15.30\n• Sesi 2: 16.00–17.30",
          title: "Panel Discussion 2",
          description: `• Topic: “Traditional Knowledge and Local Practices in Building Resilient and Inclusive Societies in the Post‑2030 World”\n\n• Co-Host: <b>International Council on Monuments and Sites (ICOMOS) Indonesia</b>\n\n<b>• Panelists:</b>\n  1) <b>Prof. Dr. I Wayan Adnyana, S.Sn., M.Sn.,</b> — Rector of the Indonesian Institute of the Arts Bali\n  2) <b>Ms. Zou Yi Qing</b> — Vice President of ICOMOS China Scientific Committee on Cultural Route\n\n• <b>Moderator:</b> <b>Dra. Nazrina Zuryani, M.A., Ph.D,</b> — Head of Bali Province Branch of Indonesia Sociology Association\n\n<b>• Call for Paper:</b>\n  1) <b>Ms. Elvira Rufriani B. Kawaliong</b> — Padjajaran University, Indonesia\n  2) <b>Mr. Arif Hukmi</b> — Makassar Islamic University\n\n• Q&A Session`,
          top_right_image: "/images/event-section/panel1.jpeg",
        },
        {
          time: "14.00 - 17.30\n\n• Coffee Break: 15.30–16.00\n• Sesi 1: 14.00–15.30\n• Sesi 2: 16.00–17.30",
          title: "Panel Discussion 3",
          description: `• Topic: “Financing the Future of Culture: Unlocking Investment for Preservation and Innovation”\n\n• Co-Host: <b>Indonesian Heritage Trust (Bumi Pelestarian Pusaka Indonesia)</b>\n\n<b>• Panelists:</b>\n  1) <b>Dr. Donovan Rypkema</b> — President of Heritage Strategies International.\n  2) <b>Ms. Hasti Tarekat Dipowijoyo</b> — Founder of Heritage Hands-on in Amsterdam and Co‑Chair of Advisory Board of the Asian Network for Industrial Heritage.\n\n• <b>Moderator:</b> <b>Dr. Catrini Pratihari Kubontubuh</b> — Chair of the Indonesian Heritage Trust\n\n<b>• Call for Paper:</b>\n  1) <b>Mr. Ahmad Saifudin Mutaqi</b> — Islamic University of Indonesia (Universitas Islam Indonesia/UII)\n  2) <b>Mr. Sultan Prasasti</b> — Maastricht University, Netherlands\n\n• Q&A Session`,
          top_right_image: "/images/event-section/panel4.jpeg",
        },
        {
          time: "14.00 - 17.30\n\n• Coffee Break: 15.30–16.00\n• Sesi 1: 14.00–15.30\n• Sesi 2: 16.00–17.30",
          title: "Panel Discussion 4",
          description: `• Topic: “Responding the Climate Risks to Heritage and Fostering Culture‑Based Climate Action”\n\n• Co-Host: <b>Indonesian National Research and Innovation Agency (Badan Riset dan Inovasi Nasional)</b>\n\n<b>• Panelists:</b>\n  1) <b>Professor R. Michael Feener</b> — Professor of Cross‑Regional Studies at the Centre for Southeast Asian Studies at Kyoto University.\n  2) <b>Dr. Wengki Ariando</b> — Postdoctoral researcher at KITLV/the Royal Netherlands Institute of Southeast Asian and Caribbean Studies.\n\n• <b>Moderator:</b> <b>Mr. Marlon Nicolay Ramon Ririmasse S.S., M.A.</b> — Head of the Research Center for Environmental Archaeology, Maritime Archaeology, and Cultural Sustainability of the National Research and Innovation Agency\n\n<b>• Call for Paper:</b>\n  1) <b>Ms. Dewa Ayu Prisma Dewi</b> — BALIDOC Film & Documentary Community\n  2) <b>Mr. Bima Maulana Putra</b> — Centre for Research in Psychology and Human Well‑being, Faculty of Social Sciences and Humanities, Universiti Kebangsaan Malaysia, Selangor, Malaysia\n\n• Q&A Session`,
          top_right_image: "/images/event-section/panel2.jpeg",
        },
        {
          time: "17.00 - 18.00",
          title: "Break for all HoD",
          description: "",
        },
        {
          time: "18.00 - 19.30",
          title: "VIP Dinner hosted by Minister of Culture of the Republic of Indonesia",
          description: "VIP Dinner hosted by Minister of Culture of the Republic of Indonesia, <b>Dr. Fadli Zon</b>",
        },
        {
          time: "19.30 - 20.00",
          title: "All VIP proceed to Ballroom BBC 1&2",
          description: "",
        },
        {
          time: "20.00 - 22.00",
          title: "CHANDI Music Performance",
          description: `CHANDI Music Performance:\n\n<i>Bunga Citra Lestari (BCL), Joey Alexander, Judika, Lyodra, Michael Anthony Kwok, and accompanied by Andi Rianto's Band.</i>\n\nMonologue by <b>Marcella Zalianty, S.Sos., M.H., M.P.P</b> \n\nSpecial performance by <b>MAINAMIND (Japan)</b> at September 4, 2025`,
        },
      ],
    },
    {
      tab: "Musical Performance",
      session: "3 September 2025 | Bali Beach Convention Center Ballroom 1-2",
      items: [
        {
          time: "18.30 - 20.00",
          title: "Registration by Kiosk",
          description: "• Registration by Kiosk (badge meeting pass mandatory)\n• Dinner for Minister and VIP at Roso Restaurant\n• Dinner for Delegates at Foyer BBC 1-2",
        },
        {
          time: "19.30 - 20.00",
          title: "Door open",
          description: "Door open",
        },
        {
          time: "20.00 - 20.05",
          title: "Opening by MC",
          description: "Opening by MC",
        },
        {
          time: "20.05 - 20.15",
          title: "Speech",
          description: "Speech from The Minister of Culture RI, <b>Mr. Fadli Zon</b>",
          speakers: [
            {
              name: "Dr. Fadli Zon",
              role: "Minister of Culture of the Republic of Indonesia",
              image: "/images/event-section/fadli.jpeg",
            },
          ],
        },
        {
          time: "20.15 - 21.55",
          title: "CHANDI Music Performance",
          description: `<b>Andi Rianto's Band with Judika, Lyodra, Bunga Citra Lestari (BCL), Joey Alexander, Michael Anthony Kwok, Marcella Zalianty, S.Sos., M.H., M.P.P</b>.`,
          
        },
        {
          time: "21.55 - 22.00",
          title: "Closing by MC",
          description: "Dispersion",
        },
      ],
    },
    {
      tab: "Day 2 : CHANDI PLENARY",
      session: "4 September 2025 | Bali Beach Convention Center - The Meru Sanur",
      items: [
        {
          time: "08.00 - 08.50",
          title: "Registration",
          description: "Registration, Coffee Break",
        },
        {
          time: "08.50 - 09.00",
          title: "Opening Segment",
          description: `• Opening MC\n• Special Performance by MINAMIND - Japan\n• MC invite keynote speaker`,
        },
        {
          time: "09.00 - 12.00",
          title: "CHANDI 2025 – Plenary",
          description: "",
        },
        {
          time: "09.00 - 10.40",
          title:
            "PLENARY 1: Culture for the Future: Heritage, Identity, and Innovation",
          description: `Keynote Speech: <b>Mr. Hashim S. Djojohadikusumo</b> | Chairman of the Board of Trustees of Indonesian Heritage Agency\n“Culture for The Future” (<i>10 minutes</i>)\n\nPanelists:\n  1) <b>Ms. He Lu</b> — Associate Professor of School of Arts of Nanfang College•Guangzhou\n  2) <b>Ms. Evelise Bruneau</b> — Conservator of the Southeast Asian collections at Musée Guimet, France\n  3) <b>Prof. dr. Wim van den Doel</b> — Professor of Contemporary History and Dean of Leiden-Delft-Erasmus Universities\n  4) <b>Ms. Janet DeNeefe</b> — Director of Ubud Writers & Readers Festival\n\nModerator: <b>Dr. Luh Gede Saraswati Putri</b> — Lecturer at the Faculty of Philosophy, University of Indonesia\n\nQ&A`,
          speakers: [
            {
              name: "Hashim S. Djojohadikusumo",
              role: "Chairman of the Board of Trustees of Indonesian Heritage Agency",
              image: "/images/event-section/hashim.jpg",
            },
          ],
        },
        {
          time: "10.40 - 12.40",
          title:
            "PLENARY 2: Tradition Meets Modernity: The Power of Culture to Build Bridges Across Nations and Promote Global Cultural Leadership",
          description: `Keynote Speech: <b>Mr. Jean Couteau</b> | Art Historian, Curator, Writer, and Bali Cultural Observer\n“The Power of Culture” (<i>10 minutes</i>)\n\nPanelists:\n  1) <b>Mr. Giring Ganesha Djumaryo</b> — Vice Minister of Culture of the Republic of Indonesia\n  2) <b>Ms. Ella Weiner</b> — Global Affairs Specialist, Smithsonian’s National Museum of Asian Art\n  3) <b>Mr. Franki Raden</b> — Founder & Director of Indonesian National Orchestra\n  4) <b>Ms. Tiara Jacquelina</b> — Actress, Film Producer, Musical Theater Producer, Singer, and Founder of The Enfiniti Academy of Musical Theatre and Performing Arts\n  5) <b>Mr. Summer Xia</b> — British Council Country Director Indonesia & Southeast Asia\n  6) <b>Mr. Jules Irmann</b> — Director of Institut Français d'Indonésie (IFI)\n\n<b>Moderator: Mr. Bre Redana</b> — Indonesian Writer\n\nQ&A`,
          speakers: [
            {
              name: "Jean Couteau",
              role: "Art Historian, Curator, Writer, and Bali Cultural Observer",
              image: "/images/event-section/jean.jpeg",
            },
          ],
        },
        {
          time: "12.40 - 14.00",
          title: "Lunch",
          description: "Lunch",
        },
        {
          time: "13.40 - 14.00",
          title: "Delegates enter ballroom accompanied by Kolintang, Traditional music from East Sulawesi (Manado)",
          description: "",
        },
        {
          time: "14.10 - 15.30",
          title: "Plenary 3: Youth Panel",
          description: `Keynote Speaker: <b>Ms. Ni Putu Pradnya Lalita Nara</b>, Student from Green School Bali\n“Culture, Sustainability and the Future” (<i>10 minutes</i>)\n\nPanelists:\n  1) <b>Mr. Angga Dwimas Sasongko</b> — Indonesia Film Director\n  2) <b>Marcella Zalianty, S.Sos., M.H., M.P.P</b> — Indonesia Actress\n  3) <b>Mr. Fauzi Ismail</b> — President of Singapore Heritage Society\n  4) <b>Ms. MINAMIND</b>\n\nModerator: <b>Ms. Putri F. W. Shafiyyah</b> — (<b>*TBC</b>)\n\nQ&A`,
        },
        {
          time: "15.30 - 16.00",
          title: "Conclusion and Closing Remarks by Dr. Fadli Zon — Minister of Culture of the Republic of Indonesia",
          description: "(Attended by all the Ministers and Delegates)",
        },
        {
          time: "16.10 - 16.40",
          title: "Coffee Break, Transfer to Workshops Session",
          description: "Coffee Break, Transfer to Workshops Session",
        },
        {
          time: "13:00  - 17:15",
          title: "Workshops on Cultural Heritage (parallel session)",
          description: `Session 1: <b>13:00 – 15:00</b>\nSession 2: <b>15:15 – 17:15</b>\n\nWorkshops on Cultural Heritage (Parallel Session):\n• Workshop Batik Making — Batik Solo Laweyan\n• Workshop Traditional Dance by ISI Bali\n• Workshop Music (Angklung)\n• Workshop Keris Making (Javanese Traditional Dagger)\n• Workshop Making Indonesian Traditional Mask by ISI Bali\n\n<b>Workshop Venue:</b>\nAgoong Room \n5,6,7 & 8 \n\nBatoor Room\n1,2,3,5,8,9,10,11 & 12`,
          // linkHref: "/files/Workshop_Rundown.pdf",
          // linkText: "Download Workshop Rundown (PDF)",
        },
        {
          time: "18.10 - 20.10",
          title: "Break for Networking Event Preparation",
          description: "Break for Networking Event Preparation",
        },
        {
          time: "20.10 - 22.10",
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
          time: "08.00 - 08.30",
          title: "All Delegates standby at Lobby The Meru",
          description: "All Delegates standby at Lobby The Meru",
        },
        {
          time: "08.30 - 09.00",
          title: "Transfer to ISI Bali and Udayana University of Bali",
          description: "Transfer to ISI Bali and Udayana University of Bali", 
        },
        {
          time: "09.30 - 11.15",
          title: "Seminar at ISI Bali:",
          description: `“Future of Intangible Culture Heritage”\n\n<b>Involvement of UNESCO and Academics to Discuss The Preservation of Non-physical Cultural Assets (Music, Dance, Cuisine, and Rituals)</b>\n\n<b>Welcome Speech:</b> Prof. Dr. I Wayan 'Kun' Adnyana, S.Sn., M.Sn — Rector of the Indonesian Institute of the Arts, Bali (5’)\n<b>Remarks:</b> Dr. Fadli Zon — Minister of Culture of the Republic of Indonesia (5’)\n\n<b>Keynote Speaker:</b> Mrs. Moe Chiba — Section Chief and Programme Specialist for Culture at UNESCO Jakarta office (15’)\n\n<b>Speakers:</b>\n  1) <b>Prof. Dr. A.A. Gde Bagus Udayana, S.Sn., M.Hum</b> — Professor at the Indonesian Institute of the Arts, Bali (10’)\n  2) <b>Prof. Dr. I Komang Sudirga, S.Sn., M.Hum</b> — Vice Chancellor for Planning and Cooperation (10’)\n  3) <b>Dr. I Gede Yudarta</b> — Associate Professor, Indonesian Institute of the Arts, Bali (10’)\n  4) <b>Mr. Yudil Chatim</b> — Education and Cultural Attaché, Embassy of the Republic of Indonesia in Beijing (Atdikbud) (10’)\n  5) <b>Mrs. I Nyoman Febriani, Ph.D</b> — Faculty Members of The Indonesian Institute of the Arts Bali (10’)\n\n<b>Moderator:</b> Dr. I Made Jodog, M.F.A — Faculty Members of The Indonesian Institute of the Arts Bali\n\n<b>Q&A Session</b> (30’)`,
          //linkHref: "/files/Rundown_seminar_ISI.pdf",
          //linkText: "Download Rundown Seminar ISI (PDF)",
        },
        {
          time: "09.30 - 11.15",
          title: "Seminar, Udayana University of Bali :",
          description: `“Digital Heritage & AI for Culture”\n\n<b>Exploring AI Technology for Documenting and Digitizing Cultural Heritage</b>\n\n<b>Welcome Speech:</b> Dr. Restu Gunawan, M.Hum — Directorate General of Protection of Culture and Traditions Ministry of Culture of the Republic of Indonesia (5’)\n\n<b>Keynote Speaker:</b> Mr. Joe Sidek — Chairman of Art Penang Council UNESCO (15’)\n\n<b>Speakers:</b>\n  1) <b>Mr. Giring Ganesha Djumaryo</b> — Vice Minister of Culture of the Republic of Indonesia (10’)\n  2) <b>Mrs. Laksmi DeNeefe Suardana</b> — Brand Ambassador Ubud Writers & Readers Festival (10’)\n  3) <b>Mrs. Lita Rahmiati, S.Sos., M.P.P</b> — Head of Cultural Preservation Office Region VIII (10’)\n  4) <b>Mr. Ida Bagus Ari Segara</b> — Lontar Practitioner & <b>Mr. Ida Bagus Anom</b> — Lontar Unit (10’)\n  5) <b>Mr. I Putu Ardiyasa</b> — Lecturer on Traditional Theater and Deaf Community Management (10’)\n  6) <b>Mr. Kristiawan</b> — Lecturer of Archeology (10’)\n\n<b>Moderator:</b> Galuh Febri Putra, S.Pd., M.A. — Lecturer at the Faculty of Cultural Sciences, Udayana University\n\n<b>Q&A Session</b> (30’)`,
          //linkHref: "/files/Rundown_seminar_Udayana.pdf",
          //linkText: "Download Rundown Seminar Udayana (PDF)",
        },
        {
          time: "11.30 - 13.00",
          title: "Lunch at ISI Bali",
          description: "Lunch at ISI Bali",
        },
        {
          time: "11.30 - 13.00",
          title: "Lunch at Udayana University of Bali",
          description: "Lunch at Udayana University of Bali",
        },
        {
          time: "13.00 - 14.00",
          title: "From ISI Bali Transfer to Penglipuran Village or Green School Bali",
          description: "From ISI Bali Transfer to Penglipuran Village or Green School Bali",
        },
        {
          time: "13.00 - 14.00",
          title: "From Udayana University of Bali Transfer to Penglipuran Village or Green School Bali",
          description: "From Udayana University of Bali Transfer to Penglipuran Village or Green School Bali",
        },
        {
          time: "",
          title: "STUDY VISITS & FUTURE COLLABORATION PROJECTS",
          description: "<i>AFTERNOON SESSION</i>",
        },
        {
          time: "14.00 - 17.00",
          title:
            "From ISI Bali, participant may choose study visit to Green School or visit Penglipuran Village",
          description: `From ISI Bali, participant may choose study visit to Green School or visit Penglipuran Village`,
        },
        {
          time: "14.00 - 17.00",
          title:
            "From Udayana University of Bali, participant may choose study visit to Green School or visit Penglipuran Village",
          description: `From Udayana University of Bali,\nParticipant may choose study visit to Green School or visit Penglipuran\nVillage`,
        },
        {
          time: "17.00 - 18.00",
          title: "Back to the Bali Beach Convention Hotel by The Meru, Sanur",
          description: "End of The Program",
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
                    <p className="text-gray-700 text-base md:text-lg font-medium md:text-right whitespace-pre-line">
                      {item.time}
                    </p>
                  </div>
                  {/* Content column */}
                  <div className="md:flex-1 bg-white border border-gray-100 rounded-xl p-6 shadow-sm relative">
                    {item.top_right_image && (
                      <div className="absolute top-4 right-4">
                        <Image
                          src={item.top_right_image}
                          alt={`${item.title} thumbnail`}
                          width={100}
                          height={20}
                          className="w-auto h-auto max-h-10 object-contain"
                        />
                      </div>
                    )}
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p
                        className="text-gray-500 text-sm mb-5 leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: item.description.replace(/\n/g, "<br/>")
                        }}
                      />
                    )}
                    {item.linkHref && (
                      <a
                        href={item.linkHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#9D7935] hover:underline font-medium"
                      >
                        {item.linkText ?? "Download"}
                      </a>
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
                              <p className="font-bold text-sm text-gray-800">
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
