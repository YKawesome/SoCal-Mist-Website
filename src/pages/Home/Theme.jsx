import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import themeImg from "../../assets/images/theme.png";

export default function Theme() {
  return (
    <section className="py-20 bg-base-100">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src={themeImg} 
              alt="2026 Theme" 
              className="w-full max-w-xl mx-auto rounded-lg shadow-2xl"
            />
          </motion.div>
          
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="mb-6 text-5xl font-bold text-primary">2026 Theme</h2>
            <h3 className="mb-6 text-3xl font-semibold">Currents of Consequence: The Might of Small Deeds</h3>
            <p className="mb-8 text-lg leading-relaxed">
              The butterfly effect reminds us that the smallest actions, good or bad, can set off vast chains of events. A single word, a habit, or a choice that seems insignificant in the moment can ripple outward, shaping people, communities, and even history.
            </p>
            <Link to="/theme" className="btn btn-primary btn-lg">
              Read Full Theme
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}