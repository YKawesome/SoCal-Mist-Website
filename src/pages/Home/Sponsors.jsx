import { motion } from "framer-motion";
import cair from "../../assets/images/cair.png";
import irusa from "../../assets/images/irusa.png";
import mpac from "../../assets/images/mpac.png";
import yss from "../../assets/images/yss.png";

const sponsors = [
  { name: "CAIR", img: cair },
  { name: "Islamic Relief USA", img: irusa },
  { name: "MPAC", img: mpac },
  { name: "YSS", img: yss },
];

export default function Sponsors() {
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-12 text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Partners & Sponsors
        </motion.h2>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              className="w-40 md:w-52 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.7, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                src={sponsor.img}
                alt={sponsor.name}
                className="w-full h-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}