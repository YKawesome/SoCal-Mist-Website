const CompetitionsData = [
    {
      category: "Knowledge & Quran",
      description:
        "This category is for those who enjoy taking tests in any form. The knowledge tests are reading comprehension tests. The Quran section is broken down into reading and memorization.",
      competitions: [
        {
          name: "Knowledge Tests",
          details:
            "Showcase your literary prowess! Select from 4 books found in the Rulebook. All tests are equally difficult.",
        },
        {
          name: "Quran Recitation",
          details:
            "Recite 3 passages and identify tajweed rules. This is a recitation and tajweed competition only.",
        },
        {
          name: "Quran Memorization",
          details:
            "Test your memory and tajweed! Three difficulty levels, each with 3 assigned passages.",
        },
      ],
    },
    {
      category: "Arts",
      description:
        "For creative minds wishing to showcase their artistic skills. Most competitions involve on-site submissions.",
      competitions: [
        { name: "2D Art", details: "Submit your drawing/painting, a written statement, and interview responses." },
        { name: "3D Art", details: "Submit a physical 3D piece, written statement, and interview responses." },
        { name: "Digital Art", details: "Submit a single digital image (no animations), process pics, statement, and interview." },
        { name: "Fashion Design", details: "Design a 6-outfit clothing line. Judged via a portfolio and interview." },
        { name: "Photography", details: "Submit 3–5 photos in a portfolio with a written statement and interview." },
      ],
    },
    {
      category: "Writing & Oratory",
      description:
        "This category is for those who want to flaunt their use of language, whether it be in written word or spoken to the masses.",
      competitions: [
        { name: "Extemporaneous Essay", details: "Write on a random, pre-chosen topic in one hour. Apply the MIST theme." },
        { name: "Extemporaneous Speaking", details: "Write for 15 minutes on a topic, then present for 7 minutes." },
        { name: "Original Oratory", details: "Perform a memorized 7-minute speech tied to the MIST theme." },
        { name: "Poetry", details: "Create a piece up to 40 lines reflecting the MIST theme." },
        { name: "Prepared Essay", details: "Draft an essay connected to the MIST theme." },
        { name: "Short Fiction", details: "Write a 10-page fictional story based on the MIST theme." },
        { name: "Spoken Word", details: "Perform a 6-minute creative piece relating to the MIST theme." },
      ],
    },
    {
      category: "Brackets",
      description:
        "Elimination-style competitions that take place over the weekend and narrow to final contestants.",
      competitions: [
        { name: "Debate", details: "Team or solo parliamentary debate on one of five Rulebook topics across 4 rounds." },
        { name: "Improv", details: "Gender-segregated improv competition with three rounds of unscripted games." },
        { name: "Math Olympics", details: "Elimination-style math competition with a pretest and ciphering rounds." },
        { name: "MIST Quiz Bowl", details: "Team trivia competition across 4 rounds based on six pre-provided topics." },
      ],
    },
    {
      category: "Group Projects",
      description:
        "Competitions requiring teamwork to plan, build, or perform a shared goal.",
      competitions: [
        { name: "Business Venture", details: "Pitch an original or implemented business idea. Judged via interview." },
        { name: "Humanitarian Service", details: "Create a service campaign and share findings in a final presentation." },
        { name: "Nasheed/Rap", details: "Perform a Nasheed or Rap based on the MIST theme." },
        { name: "Science Fair", details: "Test a theory and explain its significance through a science fair-style presentation." },
        { name: "Short Film", details: "Create a visual film project inspired by the MIST theme." },
        { name: "Social Media", details: "Build a social media page themed on MIST and explain your approach." },
      ],
    },
    {
      category: "Sports",
      description:
        "This category is exclusive to basketball. You must be registered in another competition to participate.",
      competitions: [
        { name: "Basketball", details: "Team-based tournament with subs allowed. Male and female brackets. Coalition teams accepted." },
      ],
    },
  ];
  
  export default CompetitionsData;
  