import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ParallaxHero from "../../components/ParallaxHero/ParallaxHero";
import { pastYearsData } from "../../data/pastYearsData";
import bg2024 from "../../assets/images/background2024.jpg";

export default function PastYears() {
  return (
    <div className="overflow-x-hidden bg-base-100">
      <ParallaxHero backgroundImage={bg2024}>
        <div className="max-w-3xl text-center">
          <motion.h1
            className="mb-5 text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Past Years
          </motion.h1>
          <motion.p
            className="mb-5 text-xl font-medium text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Relive the memories, highlights, and achievements from previous
            SoCal MIST tournaments.
          </motion.p>
        </div>
      </ParallaxHero>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          className="text-4xl font-bold text-primary text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Browse by Year
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastYearsData.map(({ year, tagline, canceled }, i) => (
            <motion.div
              key={year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link to={`/years/${year}`} className="block group">
                <div className="card bg-base-200 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <figure className="relative h-48 overflow-hidden bg-base-300">
                    <img
                      src={bg2024}
                      alt={`SoCal MIST ${year}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white text-6xl font-bold drop-shadow-lg">
                        {year}
                      </span>
                    </div>
                    {canceled && (
                      <div className="absolute top-3 right-3">
                        <span className="badge badge-error text-white font-semibold">
                          Canceled
                        </span>
                      </div>
                    )}
                  </figure>
                  <div className="card-body">
                    <h3 className="card-title text-xl">SoCal MIST {year}</h3>
                    <p className="text-base-content/70 text-sm">{tagline}</p>
                    <div className="card-actions justify-end mt-2">
                      <span className="btn btn-primary btn-sm">
                        View Details
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
