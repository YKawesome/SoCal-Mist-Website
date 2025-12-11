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
      <div className="container px-6 mx-auto text-center">
        <motion.h2
          className="mb-12 text-4xl font-bold text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Partners & Sponsors
        </motion.h2>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              className="w-40 md:w-52 grayscale"
              initial={{ opacity: 0 }}
              whileInView={{ 
                opacity: 0.7,
                transition: { duration: 0.5, delay: index * 0.1 }
              }}
              whileHover={{ 
                opacity: 1, 
                scale: 1.05,
                filter: "grayscale(0%)",
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
            >
              <img
                src={sponsor.img}
                alt={sponsor.name}
                className="object-contain w-full h-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}