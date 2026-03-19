import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import ParallaxHero from "../../components/ParallaxHero/ParallaxHero";
import { getYearData } from "../../data/pastYearsData";
import bg2024 from "../../assets/images/background2024.jpg";

export default function YearPage() {
  const { year } = useParams();
  const data = getYearData(year);

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 gap-4">
        <h1 className="text-4xl font-bold">Year Not Found</h1>
        <Link to="/years" className="btn btn-primary">
          Back to Past Years
        </Link>
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden bg-base-100">
      {/* Hero */}
      <ParallaxHero backgroundImage={bg2024}>
        <div className="max-w-3xl text-center">
          <motion.p
            className="mb-3 text-lg font-semibold text-primary uppercase tracking-widest"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            SoCal MIST
          </motion.p>
          <motion.h1
            className="mb-5 text-6xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {data.year}
          </motion.h1>
          {data.canceled && (
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <span className="badge badge-error badge-lg text-white font-semibold px-4 py-3">
                Event Canceled
              </span>
            </motion.div>
          )}
          <motion.p
            className="mb-5 text-xl font-medium text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {data.tagline}
          </motion.p>
        </div>
      </ParallaxHero>

      {/* Stats */}
      {data.stats?.length > 0 && (
        <section className="bg-base-200 py-16">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {data.stats.map(({ label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="text-4xl font-bold text-primary mb-2">
                    {value}
                  </div>
                  <div className="text-base-content/70 font-medium">{label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Description */}
      {data.description?.length > 0 && (
        <section className="max-w-4xl mx-auto px-6 py-20">
          <motion.h2
            className="text-4xl font-bold text-primary mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About SoCal MIST {data.year}
          </motion.h2>
          <motion.div
            className="space-y-4 text-lg leading-relaxed text-base-content/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {data.description.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </motion.div>
        </section>
      )}

      {/* Theme */}
      {data.theme && (
        <section className="py-20 bg-base-200">
          <div className="max-w-5xl mx-auto px-6">
            <motion.h2
              className="text-4xl font-bold text-primary text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Theme
            </motion.h2>
            <motion.div
              className="rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={data.theme.image}
                alt={`SoCal MIST ${data.year} theme`}
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* Board */}
      {data.board?.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-20">
          <motion.h2
            className="text-4xl font-bold text-primary mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {data.year} E-Board
          </motion.h2>
          <div className="space-y-10">
            {data.board.map(({ committee, members }, ci) => (
              <motion.div
                key={committee}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: ci * 0.08 }}
              >
                <h3 className="text-xl font-semibold text-base-content/60 uppercase tracking-widest mb-4">
                  {committee}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {members.map(({ role, name }) => (
                    <div
                      key={`${committee}-${name}`}
                      className="card bg-base-200 shadow p-4"
                    >
                      <p className="font-bold text-lg">{name}</p>
                      {role && <p className="text-sm text-base-content/60">{role}</p>}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Back link */}
      <section className="pb-20 text-center">
        <Link to="/years" className="btn btn-outline btn-primary">
          ← Back to Past Years
        </Link>
      </section>
    </div>
  );
}
