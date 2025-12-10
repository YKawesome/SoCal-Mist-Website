import aboutImage from "../../assets/images/aboutusimage.png";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="hero bg-base-200 py-20 overflow-hidden">
      <div className="hero-content flex-col lg:flex-row gap-12 max-w-6xl mx-auto px-6">
        <motion.img
          src={aboutImage}
          alt="About MIST SoCal"
          className="max-w-md w-full rounded-lg shadow-2xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6 text-primary">About Us</h2>
          <p className="text-lg leading-relaxed mb-4">
            At MIST, we empower high school students through engaging
            competitions that fuse educational pursuits with Islamic values. Our
            vibrant community welcomes diverse talents to express themselves,
            innovate, and excel across a spectrum of disciplines.
          </p>
          <p className="text-lg leading-relaxed">
            From fostering leadership and communication skills to inspiring a
            creative and collaborative spirit, MIST is dedicated to nurturing
            the next generation of thinkers, leaders, and change-makers. Join us
            on this transformative journey to celebrate knowledge, unity, and
            growth.
          </p>
        </motion.div>
      </div>
    </div>
  );
}