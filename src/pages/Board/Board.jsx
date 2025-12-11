import ParallaxHero from "../../components/ParallaxHero/ParallaxHero";
import bg from "../../assets/images/joinus.png";
import BoardRoster from "./BoardRoster";
import { motion } from "framer-motion";

export default function Board() {
  return (
    <>
      <ParallaxHero backgroundImage={bg}>
        <div className="max-w-md text-center">
          <motion.h1
            className="mb-5 text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our E-Board
          </motion.h1>
          <motion.p
            className="mb-5 text-lg text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Meet the dedicated individuals leading SoCal MIST 2025.
          </motion.p>
        </div>
      </ParallaxHero>

      <BoardRoster />
    </>
  );
}
