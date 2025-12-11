import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxHero({ backgroundImage, children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const arrowOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={ref} className="relative min-h-screen overflow-hidden hero">
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: backgroundY }}
      >
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      <motion.div
        className="relative z-10 text-center hero-content text-neutral-content"
        style={{ y: textY }}
      >
        {children}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute text-white -translate-x-1/2 bottom-10 left-1/2"
        style={{ opacity: arrowOpacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </div>
  );
}
