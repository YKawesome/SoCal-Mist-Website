import { motion } from "framer-motion";

// Import images
import img1 from "../../assets/images/ImageRows/homer1c1.png";
import img2 from "../../assets/images/ImageRows/homer1c2.png";
import img3 from "../../assets/images/ImageRows/homer1c3.png";
import img4 from "../../assets/images/ImageRows/homer2c1.png";
import img5 from "../../assets/images/ImageRows/homer2c2.png";
import img6 from "../../assets/images/ImageRows/homer2c3.png";

const images = [img1, img2, img3, img4, img5, img6];

export default function InfiniteCarousel() {
  return (
    <div className="relative py-10 overflow-hidden bg-base-100">
      {/* Gradient Masks for fade effect */}
      <div className="absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-base-100 to-transparent" />
      <div className="absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-base-100 to-transparent" />

      <div className="flex">
        <motion.div
          className="flex gap-8 flex-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {/* Duplicate images 4 times to ensure smooth scrolling on wide screens */}
          {[...images, ...images, ...images, ...images].map((src, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-64 h-40 overflow-hidden shadow-lg rounded-xl hover:scale-105 transition-transform duration-300"
            >
              <img
                src={src}
                alt={`Carousel item ${index}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
