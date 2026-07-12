import {  useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stat = (value: string, label: string, align: "left" | "right" = "left") => (
  <div className={align === "right" ? "text-left" : "text-left"}>
    <p className="text-2xl md:text-3xl font-semibold text-primary leading-none mb-1">
      {value}
    </p>
    <p className="text-xs md:text-sm text-[#171338]/80">{label}</p>
  </div>
);

const PointOfSales = () => {
  // Refs for scroll animations
  const headerRef = useRef(null);
  const statsRef = useRef(null);
  const imageRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, amount: 0.2 });
  const statsInView = useInView(statsRef, { once: true, amount: 0.2 });
  const imageInView = useInView(imageRef, { once: true, amount: 0.3 });

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-bl from-[#cabdf0] via-white via-45% to-white px-6 py-16 md:py-20">
      {/* Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : 30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-xl mx-auto text-center mb-5"
      >
        <p className="text-sm tracking-[0.3em] font-medium text-secondary mb-3">
          POINT OF SALE
        </p>
        <h1 className="text-2xl md:text-4xl font-medium text-[#171338] mb-4">
          POS and Payment Solutions
        </h1>
        <p className="text-sm text-primary leading-relaxed">
          Accept card and digital payments anywhere your business operates,
          with same-day settlement options.
        </p>

        <button className="mt-6 inline-flex items-center gap-3 bg-[#171338] text-white text-sm font-medium pl-5 pr-1.5 py-1.5 rounded-full">
          Get your POS
          <span className="w-7 h-7 rounded-full bg-white text-[#171338] flex items-center justify-center">
            <ArrowRight size={14} />
          </span>
        </button>
      </motion.div>

      {/* Stats + illustration */}
      <motion.div
        ref={statsRef}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: statsInView ? 1 : 0, y: statsInView ? 0 : 40 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="grid grid-cols-3 items-center max-w-2xl mx-auto"
      >
        {/* Left stats - flips one after another */}
        <motion.div 
          className="flex flex-col font-light gap-16 md:gap-20 items-start"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: statsInView ? 1 : 0, x: statsInView ? 0 : -30 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: statsInView ? 1 : 0, y: statsInView ? 0 : 20 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {stat("1M+", "Active Terminals")}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: statsInView ? 1 : 0, y: statsInView ? 0 : 20 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            {stat("₦300M", "Processed Monthly")}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: statsInView ? 1 : 0, y: statsInView ? 0 : 20 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            {stat("99.9%", "Success Rate")}
          </motion.div>
        </motion.div>

        {/* Illustration */}
        <motion.div 
          ref={imageRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: imageInView ? 1 : 0, scale: imageInView ? 1 : 0.8 }}
          transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center items-center h-[250px] md:h-[350px] overflow-visible"
        >
          <div className="absolute inset-0 flex justify-center items-center overflow-visible">
            <img
              src="/pos.png"
              alt="POS Illustration"
              className="w-full h-full object-contain scale-200"
            />
          </div>
        </motion.div>

        {/* Right stats - flips one after another */}
        <motion.div 
          className="flex flex-col gap-16 md:gap-20 items-end text-right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: statsInView ? 1 : 0, x: statsInView ? 0 : 30 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: statsInView ? 1 : 0, y: statsInView ? 0 : 20 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <p className="text-2xl md:text-3xl font-medium text-[#171338] leading-none mb-1">
              0%
            </p>
            <p className="text-xs md:text-sm text-[#171338]/80">Hidden Fees</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: statsInView ? 1 : 0, y: statsInView ? 0 : 20 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <p className="text-2xl md:text-3xl font-medium text-[#171338] leading-none mb-1">
              99%
            </p>
            <p className="text-xs md:text-sm text-[#171338]/80">
              Security Rate
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: statsInView ? 1 : 0, y: statsInView ? 0 : 20 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <p className="text-2xl md:text-3xl font-medium text-[#171338] leading-none mb-1">
              4.9/5
            </p>
            <p className="text-xs md:text-sm text-[#171338]/80">
              Terminal Rating
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PointOfSales;