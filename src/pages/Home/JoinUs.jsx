import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import joinImg from "../../assets/images/joinus.png";

export default function JoinUs() {
  return (
    <div className="py-20 overflow-hidden hero bg-secondary text-secondary-content">
      <div className="flex-col max-w-6xl gap-12 px-6 mx-auto hero-content lg:flex-row">
        <motion.div
          className="text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-6 text-5xl font-bold text-secondary-content">
            Join Our Community
          </h2>
          <p className="mb-8 text-lg leading-relaxed">
            Be a part of the MIST experience! Whether you want to inspire the
            next generation as a judge or help make the magic happen as a
            volunteer, your contribution makes a difference. Join us in
            creating an unforgettable experience for students across Southern
            California.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Link to="/judge" className="btn btn-primary btn-lg">
              Become a Judge
            </Link>
            <Link to="/volunteer" className="btn btn-neutral btn-outline btn-lg">
              Volunteer With Us
            </Link>
          </div>
        </motion.div>

        <motion.img
          src={joinImg}
          alt="Join MIST SoCal"
          className="w-full max-w-md shadow-2xl rounded-2xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}
