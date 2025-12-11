import { motion } from "framer-motion";
import ParallaxHero from "../../components/ParallaxHero/ParallaxHero";
import aboutBg from "../../assets/images/aboutusimage.png";
import impactImg from "../../assets/images/impactimage.png";
import communityImg from "../../assets/images/communityimage.png";
import eventsImg from "../../assets/images/eventsimage.png";
import joinImg from "../../assets/images/joinimage.png";

const Section = ({ title, children, image, imageAlt, reversed = false }) => {
  return (
    <div
      className={`hero min-h-[60vh] bg-base-100 ${
        reversed ? "bg-base-200" : ""
      }`}
    >
      <div
        className={`hero-content flex-col lg:flex-row gap-12 max-w-7xl mx-auto px-6 py-20 ${
          reversed ? "lg:flex-row-reverse" : ""
        }`}
      >
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: reversed ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={image}
            alt={imageAlt}
            className="w-full rounded-lg shadow-2xl"
          />
        </motion.div>
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: reversed ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="mb-6 text-4xl font-bold text-primary">{title}</h2>
          <div className="space-y-4 text-lg leading-relaxed">{children}</div>
        </motion.div>
      </div>
    </div>
  );
};

export default function About() {
  return (
    <div className="overflow-x-hidden bg-base-100">
      <ParallaxHero backgroundImage={aboutBg}>
        <div className="max-w-3xl text-center">
          <motion.h1
            className="mb-5 text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Muslim Inter-Scholastic Tournament
          </motion.h1>
          <motion.p
            className="mb-5 text-xl font-medium text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our mission is to bring high school students together to develop
            leadership, promote communication, and inspire creativity while
            gaining a deeper understanding of Islam and Muslims.
          </motion.p>
        </div>
      </ParallaxHero>

      <Section title="Our Impact" image={impactImg} imageAlt="MIST Impact">
        <p>
          SoCal MIST is more than just a competition; it&apos;s a transformative
          experience that has touched the lives of thousands of high school
          students across Southern California. Our platform has been a
          springboard for young talents to leap into excellence, offering not
          just trophies but also invaluable life lessons.
        </p>
        <p>
          With over a decade of nurturing young minds, we&apos;ve seen our
          alumni soar into various fields, carrying with them the confidence and
          skills honed here at MIST. Their stories of success and community
          contribution stand as a testament to the lasting impact of our
          collective efforts.
        </p>
      </Section>

      <Section
        title="Our Community"
        image={communityImg}
        imageAlt="MIST Community"
        reversed
      >
        <p>
          At the heart of SoCal MIST lies a vibrant, inclusive community that
          extends beyond the boundaries of competition. We are a melting pot of
          cultures, ideas, and aspirations, united by a shared passion for
          learning and growth.
        </p>
        <p>
          Our events are a celebration of this unity, providing a nurturing
          environment for students to network, collaborate, and build lifelong
          friendships. It&apos;s here that barriers are broken, and a true sense
          of brotherhood and sisterhood is fostered, all under the umbrella of
          mutual respect and understanding.
        </p>
      </Section>

      <Section title="Our Events" image={eventsImg} imageAlt="MIST Events">
        <p>
          Each year, SoCal MIST orchestrates a symphony of events that resonate
          with the rhythm of creativity and the harmony of competition. From
          intensive preparation workshops to the buzz of the regional contests,
          leading up to the excitement of the annual tournament, our calendar is
          rich with opportunities for participants to showcase their prowess.
        </p>
        <p>
          Whether you&apos;re a budding scientist, a gifted orator, or an
          aspiring artist, our events are tailored to let your talents take
          center stage in an atmosphere charged with enthusiasm and positive
          competition.
        </p>
      </Section>

      <Section title="Join Us" image={joinImg} imageAlt="Join MIST" reversed>
        <p>
          Are you ready to embark on an unforgettable journey of self-discovery
          and community engagement? SoCal MIST welcomes you to join our
          expanding family of thinkers, leaders, and visionaries. Registering is
          simple, but the rewards are boundless.
        </p>
        <p>
          Listen to the echoes of our past participants who speak of MIST not
          just as a competition, but as a milestone in their personal and
          professional development. Bring your passion and your drive—let&apos;s
          make the next chapter of MIST history together!
        </p>
        <div className="mt-6">
          <a
            href="https://my.getmistified.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            Register Now
          </a>
        </div>
      </Section>
    </div>
  );
}
