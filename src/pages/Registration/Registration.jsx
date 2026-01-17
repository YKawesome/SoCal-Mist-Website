import registrationBg from "../../assets/images/registration.png";
import ParallaxHero from "../../components/ParallaxHero/ParallaxHero";
import { motion } from "framer-motion";

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
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="text-lg">
                <th>Type</th>
                <th className="bg-primary text-primary-content rounded-t-box">Early Registration</th>
                <th>Regular Registration</th>
                <th>Late Registration</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover">
                <th className="text-lg">Competitors</th>
                <td className="bg-primary/10 text-xl font-bold">$50</td>
                <td className="text-xl">$65</td>
                <td className="text-xl">$80</td>
              </tr>
              <tr className="hover">
                <th className="text-lg">Guests</th>
                <td className="bg-primary/10 text-xl font-bold rounded-b-box">$50</td>
                <td className="text-xl">$65</td>
                <td className="text-xl">$80</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
