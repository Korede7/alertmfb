import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Leadership: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { 
    once: false, 
    amount: 0.1,
    margin: "-50px"
  });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: "easeOut" as const  
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" as const 
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.7, 
        ease: "easeOut" as const
      },
    },
  };

  return (
    <section ref={sectionRef} className="bg-white overflow-hidden">
      {/* Header above image */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="container mx-auto px-4 pt-30"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-sm tracking-[0.5em] text-secondary text-center"
        >
          LEADERSHIP
        </motion.h1>
        <motion.h2
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-semibold text-primary text-center mt-3 max-w-lg mx-auto"
        >
          The people who show up for
          our customers everyday
        </motion.h2>
      </motion.div>

      {/* Image container with white fades on both sides */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={scaleIn}
        transition={{ delay: 0.2 }}
        className="relative mt-10 w-full mx-auto px-4"
      >
        {/* Left fade */}
        <div className="absolute left-4 top-0 h-full w-22 bg-gradient-to-r from-white to-transparent z-5 hidden sm:block" />

        {/* Right fade */}
        <div className="absolute right-4 top-0 h-full w-22 bg-gradient-to-l from-white to-transparent z-5 hidden sm:block" />

        <motion.img
          src="/leadership.jpg"
          alt="Leadership — the people who show up for our customers everyday"
          className="w-full block rounded-2xl max-h-[400px] object-cover"
        />
      </motion.div>

      {/* Description below image */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ delay: 0.3 }}
        className="container mx-auto px-4 mt-4 sm:mt-0"
      >
        <p className="text-[13px] text-primary/70 text-center max-w-3xl mx-auto">
          Our management team and board bring decades of Nigerian banking, technology,
          and business experience — united by a belief that microfinance done right can change lives.
        </p>
      </motion.div>

      {/* ---- Footer ---- */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ delay: 0.4 }}
        className="mt-18 bg-gray py-3.5 px-6 flex items-center justify-center gap-2.5"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#5B5B8A"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
        <span className="text-[12.5px] text-[#4B4B72] text-center">
          Alert MFB's Board of Directors operates under the CBN Code of
          Corporate Governance for Microfinance Banks, with Board Audit, Risk,
          and Credit Committees providing structured oversight.
        </span>
      </motion.div>
    </section>
  );
};

export default Leadership;