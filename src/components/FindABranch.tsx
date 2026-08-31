import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { useState, useEffect } from "react";

const FindABranch = () => {
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Find a branch near you";

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 80); // Speed of typing (milliseconds per letter)

    return () => clearInterval(typingInterval);
  }, []);

  // Variants for animations
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Map floating animation
  const mapVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Cursor blinking animation
  const cursorVariants: Variants = {
    blink: {
      opacity: [0, 1, 0],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        
      },
    },
  };

  return (
    <section
      className="relative overflow-hidden py-24 px-6"
      style={{
        background:
          "radial-gradient(200% 300% at 0% 20%, #b9b3e8 0%, #4a3f8a 22%, #0f0c48 45%, #0B0844 75%)",
      }}
    >
    

      {/* Map image */}
      <motion.div
        className="absolute inset-0 pointer-events-none flex items-center justify-end"
        variants={mapVariants}
        initial="hidden"
        whileInView="visible"
        animate=""
        
      >
        <motion.div
          className="w-full h-full max-w-6xl flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/map.png"
            alt="Nigeria map showing Alert MFB branch locations"
            className="w-full h-full object-contain opacity-90 animate-pulse"
          />
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative max-w-2xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.p
          variants={itemVariants}
          className="text-white text-xs font-semibold tracking-[0.3em] mb-4"
        >
          FIND US
        </motion.p>

        {/* Typewriter heading */}
        <motion.div
          variants={itemVariants}
          className="text-white text-xl md:text-6xl font-semibold mb-4 min-h-[3.5rem] md:min-h-[4.5rem] flex items-center justify-center"
        >
          <span>{displayText}</span>
          {!isTypingComplete && (
            <motion.span
              variants={cursorVariants}
              animate="blink"
              className="inline-block w-0.5 h-8 md:h-10 bg-white ml-0.5"
            />
          )}
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-white/70 text-sm md:text-base mb-8"
        >
          Search by City, LGA or Postcode for an Alert MFB branch around you
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <motion.input
            type="text"
            placeholder="Enter city, LGA or postcode"
            className="w-full sm:w-72 bg-white text-[#171238] placeholder:text-[#5b5a72] text-sm px-5 py-3 rounded-full outline-none"
            whileHover={{ scale: 1.02 }}
            whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(232, 145, 45, 0.3)" }}
            transition={{ duration: 0.2 }}
          />
          <motion.button
            className="inline-flex items-center gap-2 bg-secondary text-white text-sm font-medium pl-5 pr-1.5 py-1.5 rounded-full hover:bg-[#d67f1e] transition-colors whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Find Nearest Branch</span>
            <motion.span
              className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#e8912d]"
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight size={16} />
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Animated decorative dots */}
        <motion.div
          className="absolute -left-20 top-1/2 -translate-y-1/2 flex flex-col gap-2 opacity-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-white"
              animate={{
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        <motion.div
          className="absolute -right-20 bottom-1/3 flex flex-col gap-2 opacity-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-white"
              animate={{
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FindABranch;