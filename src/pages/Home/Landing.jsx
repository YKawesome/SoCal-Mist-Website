import bg from "../../assets/images/background2024.jpg";
import logo from "../../assets/images/socal-mist-big.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ParallaxHero from "../../components/ParallaxHero/ParallaxHero";

export default function Landing() {
  return (
    <ParallaxHero backgroundImage={bg}>
      <div className="max-w-md lg:max-w-lg">
        <motion.img
          src={logo}
          alt="SoCal MIST"
          className="w-64 mx-auto mb-8 drop-shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          className="mb-5 text-5xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          SoCal MIST 2026
        </motion.h1>
        <motion.p
          className="mb-5 text-lg text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          The Tournament of Champions. Join us for a weekend of competition,
          creativity, and community.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="https://my.getmistified.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mr-4 btn btn-lg btn-primary"
          >
            Register Now
          </a>
          <Link to="/about" className="text-white btn btn-lg btn-outline btn-secondary">
            Learn More
          </Link>
        </motion.div>
      </div>
    </ParallaxHero>
  );
}
