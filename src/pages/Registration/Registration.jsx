import registrationBg from "../../assets/images/registration.png";
import ParallaxHero from "../../components/ParallaxHero/ParallaxHero";
import { motion } from "framer-motion";

const CURRENT_BAND = "early";

const bands = [
  { id: "early",   label: "Early Registration",   shortLabel: "Early",   dates: "3/18 - 4/5"  },
  { id: "regular", label: "Regular Registration", shortLabel: "Regular", dates: "4/6 - 4/18"  },
  { id: "late",    label: "Late Registration",    shortLabel: "Late",    dates: "4/19 - 4/22" },
];

const types = [
  { label: "Competitors", prices: { early: "$25", regular: "$45", late: "$60" } },
  { label: "Guests",      prices: { early: "$25", regular: "$20", late: "$25" } },
];

export default function Registration() {
  return (
    <div className="min-h-screen bg-base-100">
      <ParallaxHero backgroundImage={registrationBg}>
        <div className="max-w-3xl text-center">
          <motion.h1
            className="mb-5 text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Registration
          </motion.h1>
          <motion.p
            className="mb-5 text-xl font-medium text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Learn how to register for SoCal MIST 2026 and get all the details you need to participate.
          </motion.p>
        </div>
      </ParallaxHero>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Registration Fees</h2>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="text-lg">
                <th>Type</th>
                {bands.map((band) => (
                  <th
                    key={band.id}
                    className={band.id === CURRENT_BAND ? "bg-primary text-primary-content rounded-t-box" : ""}
                  >
                    {band.label} | {band.dates}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {types.map((type, typeIdx) => (
                <tr key={type.label} className="hover">
                  <th className="text-lg">{type.label}</th>
                  {bands.map((band) => (
                    <td
                      key={band.id}
                      className={[
                        "text-xl",
                        band.id === CURRENT_BAND ? "bg-primary/10 font-bold" : "",
                        band.id === CURRENT_BAND && typeIdx === types.length - 1 ? "rounded-b-box" : "",
                      ].join(" ").trim()}
                    >
                      {type.prices[band.id]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile table (transposed) */}
        <div className="md:hidden overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="text-lg">
                <th>Registration</th>
                {types.map((type) => (
                  <th key={type.label}>{type.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bands.map((band) => (
                <tr key={band.id} className="hover">
                  <th
                    className={[
                      "text-base",
                      band.id === CURRENT_BAND ? "bg-primary text-primary-content" : "",
                    ].join(" ").trim()}
                  >
                    {band.shortLabel} | {band.dates}
                  </th>
                  {types.map((type) => (
                    <td
                      key={type.label}
                      className={[
                        "text-xl",
                        band.id === CURRENT_BAND ? "bg-primary/10 font-bold" : "",
                      ].join(" ").trim()}
                    >
                      {type.prices[band.id]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center mt-10">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/DvZVUkiqECI"
            title="YouTube video player"
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-box"
          ></iframe>
        </div>
        <div className="text-center mt-8">
          <a
            href="https://my.getmistified.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lg btn-primary"
          >
            Register Now!
          </a>
        </div>
      </div>
    </div>
  );
}
