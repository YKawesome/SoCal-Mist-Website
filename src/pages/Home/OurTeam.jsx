import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function OurTeam() {
  return (
    <section className="flex flex-col gap-8 py-15 bg-base-100">
      <div className="container px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="mb-6 text-5xl font-bold text-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Team
          </motion.h2>
          <motion.p 
            className="text-lg leading-relaxed text-base-content/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Meet the heart and soul behind MIST—our dedicated team of organizers and volunteers. Each member brings a unique blend of passion and expertise, driving our mission forward with innovation and commitment. Together, we create dynamic experiences that empower students, celebrate achievements, and inspire a legacy of excellence in the Muslim community. Get to know the faces that make MIST a beacon of inspiration and a hub of inter-scholastic triumph.
          </motion.p>
        </div>
      </div>
      <Link to="/board" className="mx-auto btn btn-primary btn-lg">Meet the Team</Link>
    </section>
  );
}