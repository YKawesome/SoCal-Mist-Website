import { motion } from "framer-motion";
import ParallaxHero from "../../components/ParallaxHero/ParallaxHero";
import eventsBg from "../../assets/images/eventsimage.png";
import { competitionsData } from "../../data/competitionsData";

export default function Competitions() {
  return (
    <div className="min-h-screen bg-base-100">
      <ParallaxHero backgroundImage={eventsBg}>
        <div className="max-w-3xl text-center">
          <motion.h1 
            className="mb-5 text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Competitions
          </motion.h1>
          <motion.p 
            className="mb-5 text-xl font-medium text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Showcase your talents and skills in a variety of categories ranging from arts and writing to knowledge and sports.
          </motion.p>
        </div>
      </ParallaxHero>

      <div className="px-6 py-16 mx-auto max-w-7xl">
        {competitionsData.map((category, categoryIndex) => (
          <div key={category.category} className="mb-16">
            <motion.h2 
              className="pb-2 mb-8 text-3xl font-bold border-b-2 text-primary border-base-200"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              {category.category}
            </motion.h2>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {category.competitions.map((comp, compIndex) => (
                <motion.div
                  key={comp.id}
                  className="shadow-xl transition-shadow duration-300 card bg-base-200 hover:shadow-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: compIndex * 0.05 }}
                >
                  <div className="card-body">
                    <div className="flex items-center mb-2 gap-4">
                      <span className="text-4xl">{comp.icon}</span>
                      <h3 className="text-xl card-title">{comp.name}</h3>
                    </div>
                    <p className="text-base-content/80">{comp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}