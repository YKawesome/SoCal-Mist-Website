// Data for each past year's page.
// Add a new entry here to create a new year page (also add the route in App.jsx
// and the nav entry in navigation.js).

import theme2025 from "../assets/images/2025/theme.png";
import theme2024 from "../assets/images/2024/theme.png";
import theme2023 from "../assets/images/2023/theme.png";

export const pastYearsData = [
  {
    year: "2025",
    tagline: "Planned but not forgotten.",
    canceled: true,
    theme: {
      image: theme2025,
    },
    description: [
      "SoCal MIST 2025 was unfortunately canceled before it could take place. The E-Board had been working hard to put together another great tournament for students across Southern California.",
      "Though the event never happened, we want to recognize the team that dedicated their time and effort to making it possible.",
    ],
    stats: null,
    board: [
      {
        committee: "Admin",
        members: [
          { role: "Regional Director", name: "Meraal Abutaha" },
          { role: "Associate Director", name: "Rabaa Khan" },
        ],
      },
      {
        committee: "Marketing",
        members: [
          { role: "Webmaster", name: "Yousef Khan" },
          { role: "Communications Coordinator", name: "Yasmine Ibrahim" },
        ],
      },
      {
        committee: "Logistics",
        members: [
          { role: "Chair", name: "Sawsan Dibseh" },
        ],
      },
      {
        committee: "Program",
        members: [
          { role: "Chair", name: "Mahnoor Saleem" },
          { role: "Spirits Coordinator", name: "Zeinab Arafa" },
          { role: "MISTChats Coordinator", name: "Zoya Rana" },
        ],
      },
      {
        committee: "Outreach and Registration",
        members: [
          { role: "Chair", name: "Araam Abutaha" },
          { role: "O/R Coordinator", name: "Ali Khaja" },
        ],
      },
      {
        committee: "Competitions",
        members: [
          { role: "Chair", name: "Lujain Almahdi" },
          { role: "Knowledge/Quran Head", name: "Boushra El Habbal" },
          { role: "Writing/Oratory Head", name: "Samir Yousef" },
          { role: "Brackets Head", name: "Yosuf Mayar" },
          { role: "Brackets Head", name: "Yazan Moubayed" },
          { role: "Group Projects Head", name: "Summer Kurdi" },
        ],
      },
    ],
  },
  {
    year: "2024",
    // Shown in the hero
    tagline: "A celebration of faith, creativity, and community.",
    // Short bio / description shown in the "About" section
    description: [
      "SoCal MIST 2024 brought together hundreds of high school students from across Southern California for a day of competition, connection, and community. Students competed across dozens of categories spanning academics, arts, athletics, and Islamic knowledge.",
      "The tournament provided a platform for young Muslim students to showcase their talents, build confidence, and forge lasting friendships in an environment that celebrates both faith and excellence.",
    ],
    // Quick-stats bar
    stats: [
      { label: "Participants", value: "500+" },
      { label: "Schools", value: "30+" },
      { label: "Competitions", value: "25+" },
      { label: "Volunteers", value: "100+" },
    ],
    // Theme info (optional — set to null to hide the section)
    theme: {
      image: theme2024,
    },
    board: [
      {
        committee: "Admin",
        members: [
          { role: "Regional Director", name: "Meraal Abutaha" },
        ],
      },
      {
        committee: "Marketing",
        members: [
          { role: "Chair", name: "Rabaa Khan" },
          { role: "Webmaster", name: "Yousef Khan" },
          { role: "Social Media & Communications", name: "Ayah Halabi" },
        ],
      },
      {
        committee: "Finance",
        members: [
          { role: "Chair", name: "Rabia Ahmed" },
          { role: "Sponsorship Coordinator", name: "Bouchra Alioua" },
        ],
      },
      {
        committee: "Logistics",
        members: [
          { role: "Chair", name: "Sawsan Dibseh" },
          { role: "Food Coordinator", name: "Yazan Moubayed" },
          { role: "Venue Coordinator", name: "Boushra El Habbal" },
          { role: "Volunteers Coordinator", name: "Alina Razi" },
        ],
      },
      {
        committee: "Program",
        members: [
          { role: "Chair", name: "Leen Almahdi" },
          { role: "MISTChats Coordinator", name: "Noor Bashir" },
        ],
      },
      {
        committee: "Outreach and Registration",
        members: [
          { role: "Chair", name: "Saara Hashim" },
          { role: "O/R Coordinator", name: "Abdullah Rafiq" },
          { role: "O/R Coordinator", name: "Samir Yousef" },
          { role: "O/R Coordinator", name: "Yousef Khan" },
        ],
      },
      {
        committee: "Competitions",
        members: [
          { role: "Chair", name: "Araam Abutaha" },
          { role: "Category Head", name: "Imaad Rana" },
          { role: "Category Head", name: "Lujain Almahdi" },
          { role: "Category Head", name: "Maisam Barakat" },
          { role: "Category Head", name: "Muna Naseer" },
          { role: "Category Head", name: "Summer Kurdi" },
          { role: "Category Head", name: "Yosuf Mayar" },
        ],
      },
    ],
  },
  {
    year: "2023",
    tagline: "Inspiring the next generation of Muslim leaders and innovators.",
    description: [
      "SoCal MIST 2023 marked another milestone in the tournament's history, gathering students from across Southern California to compete, connect, and grow. The event featured competitions across academics, arts, athletics, and Islamic knowledge.",
      "Students left with more than trophies — they carried with them new friendships, renewed confidence, and a deeper appreciation for their faith and community. SoCal MIST 2023 set the stage for years of growth to come.",
    ],
    stats: [
      { label: "Participants", value: "400+" },
      { label: "Schools", value: "25+" },
      { label: "Competitions", value: "25+" },
      { label: "Volunteers", value: "80+" },
    ],
    theme: {
      image: theme2023,
    },
    board: [
      {
        committee: "Admin",
        members: [
          { role: "Regional Director", name: "Yusuf Ezzeldine" },
          { role: "Associate Director", name: "Shereen Nourollahi" },
        ],
      },
      {
        committee: "E-Board",
        members: [
          { name: "Aimen Imtiaz" },
          { name: "Alaa Salim" },
          { name: "Araam Abutaha" },
          { name: "Dua Shoaib" },
          { name: "Hafsa Farooqui" },
          { name: "Imaad Rana" },
          { name: "Janan AlKhaja" },
          { name: "Kian Nourollahi" },
          { name: "Lujain Almahdi" },
          { name: "Meraal Abutaha" },
          { name: "Mohammad Israr" },
          { name: "Mouaz Kanawati" },
          { name: "Rabaa Khan" },
          { name: "Rabia Ahmed" },
          { name: "Rokshana Bushra" },
          { name: "Sal Latif" },
          { name: "Sawsan Dibseh" },
          { name: "Summer Kurdi" },
          { name: "Yazan Moubayed" },
          { name: "Zayyan Ul Hassan" },
        ],
      },
    ],
  },
];

// Helper to look up a year's data by the year string (e.g. "2024")
export function getYearData(year) {
  return pastYearsData.find((y) => y.year === year) ?? null;
}
