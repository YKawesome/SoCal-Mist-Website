import { motion } from "framer-motion";
import ParallaxHero from "../../components/ParallaxHero/ParallaxHero";
import bgImage from "../../assets/images/joinimage.png";
import ZipUploader from "../../components/ZipUploader/ZipUploader";

const earlyComps = [
  { name: "Prepared Essay", req: "Submit your Prepared Essay" },
  { name: "Short Fiction", req: "Submit Short Fiction piece and written statement" },
  { name: "Poetry", req: "Submit your Poetry piece" },
  { name: "Short Film", req: "Submit an unlisted YouTube/Vimeo link" },
  { name: "Business Venture", req: "Submit business venture outline" },
  { name: "Science Fair", req: "Submit abstract" },
  { name: "Social Media", req: "Submit link to media platform with typed statement" },
  { name: "Humanitarian Service", req: "Submit campaign plan and crowdfunding link" },
  { name: "Digital Art", req: "Artwork (JPG, TIFF, or PNG), artist statement (500 words max), 2+ drafts" },
  { name: "Photography", req: "Photography Portfolio, artist statement (500 words max)" },
];

const guidelines = [
  "Typed and double spaced",
  "Size 12 font, Times New Roman",
  "All submissions must be collected as ONE ZIP PDF FILE through myMIST",
  "myMIST does NOT accept multiple files",
  "A written statement is required unless stated otherwise – include on a separate page at the end",
  "Include a cover page with the title, MIST ID, and name of competition",
  "Do not include your name or any identifying markers on the actual piece",
  "Label file as: MISTID_COMPETITIONNAME",
];

export default function EarlySubmissions() {
  return (
    <div className="bg-base-100 min-h-screen">
      <ParallaxHero backgroundImage={bgImage}>
        <div className="max-w-3xl text-center">
          <motion.h1 
            className="mb-5 text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Early Submissions
          </motion.h1>
          <motion.p 
            className="mb-5 text-xl font-medium text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Due Two Weeks Prior to Tournament
          </motion.p>
        </div>
      </ParallaxHero>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Competitions List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-6">Competitions & Requirements</h2>
            <div className="space-y-4">
              {earlyComps.map((comp, index) => (
                <div key={index} className="card bg-base-200 shadow-sm">
                  <div className="card-body p-4">
                    <h3 className="font-bold text-lg">{comp.name}</h3>
                    <p className="text-base-content/80">{comp.req}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Guidelines & Uploader */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">General Guidelines</h2>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                {guidelines.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>
            </div>

            <div className="divider"></div>

            <ZipUploader />
          </motion.div>
        </div>
      </div>
    </div>
  );
}