import { motion } from "framer-motion";
import ParallaxHero from "../../components/ParallaxHero/ParallaxHero";
import sponsorBg from "../../assets/images/donateimage.png";

export default function Sponsor() {
  return (
    <div className="min-h-screen bg-base-100">
      <ParallaxHero backgroundImage={sponsorBg}>
        <div className="max-w-3xl text-center">
          <motion.h1 
            className="mb-5 text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Sponsor MIST
          </motion.h1>
          <motion.p 
            className="mb-5 text-xl font-medium text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Partner with us to empower the next generation.
          </motion.p>
        </div>
      </ParallaxHero>

      <div className="max-w-4xl px-6 py-20 mx-auto">
        <motion.div 
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-primary">Interested in sponsoring MIST?</h2>
          
          <p className="text-xl leading-relaxed">
            SoCal MIST offers the unique opportunity to highlight your organization to a diverse audience of Muslim community members including community leaders, parents, young professionals, and most importantly - the YOUTH.
          </p>

          <div className="mt-12 shadow-xl card bg-base-200">
            <div className="items-center text-center card-body">
              <h3 className="mb-4 text-2xl card-title">Get Our Sponsorship Package</h3>
              <p className="mb-6 text-lg">
                If you would like to view our sponsorship package, please email us.
              </p>
              <a 
                href="mailto:socal@getmistified.com" 
                className="btn btn-primary btn-lg"
              >
                Email socal@getmistified.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
