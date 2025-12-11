import { motion } from "framer-motion";
import ParallaxHero from "../../components/ParallaxHero/ParallaxHero";
import judgeBg from "../../assets/images/communityimage.png";

export default function Judge() {
  return (
    <div className="min-h-screen bg-base-100">
      <ParallaxHero backgroundImage={judgeBg}>
        <div className="max-w-3xl text-center">
          <motion.h1 
            className="mb-5 text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Become a Judge
          </motion.h1>
          <motion.p 
            className="mb-5 text-xl font-medium text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Help us inspire the next generation of leaders by judging our competitions.
          </motion.p>
        </div>
      </ParallaxHero>

      <div className="max-w-5xl px-6 py-16 mx-auto">
        <div className="w-full overflow-hidden shadow-xl bg-base-200 rounded-xl">
          <iframe 
            src="https://tinyurl.com/SoCalMIST2025Judge" 
            width="100%" 
            height="2600" 
            frameBorder="0" 
            marginHeight="0" 
            marginWidth="0"
            title="Judge Registration Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
}