import { motion } from "framer-motion";

export default function OurTeam() {
  return (
    <section className="py-15 bg-base-100 flex flex-col gap-8">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            className="text-5xl font-bold mb-6 text-primary"
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
      <button className="btn btn-primary btn-lg block mx-auto">Meet the Team</button>
    </section>
  );
}