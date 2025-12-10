import { motion } from "framer-motion";
import joinImg from "../../assets/images/joinus.png";

export default function JoinUs() {
  return (
    <section className="py-20 bg-base-200 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-6 text-primary">
              Join Our Community
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-base-content/80">
              Be a part of the MIST experience! Whether you want to inspire the
              next generation as a judge or help make the magic happen as a
              volunteer, your contribution makes a difference. Join us in
              creating an unforgettable experience for students across Southern
              California.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn btn-primary block btn-lg">
                Become a Judge
              </button>
              <button className="btn btn-secondary block btn-lg">
                Volunteer With Us
              </button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <img
                src={joinImg}
                alt="Join MIST SoCal"
                className="relative rounded-2xl shadow-2xl max-w-md w-full object-cover hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
