import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";


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
        className="max-w-3l mx-auto text-center mb-5"
      >
        <p className="text-sm tracking-[0.3em] font-medium text-secondary mb-3">
          POINT OF SALE
        </p>
        <h1 className="text-2xl md:text-6xl font-semibold text-primary mb-1">
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
        className="grid grid-cols-3 items-center max-w-4xl mx-auto"
      >

        {/* Illustration */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: imageInView ? 1 : 0,
            scale: imageInView ? 1 : 0.8
          }}
          transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
          className="relative col-span-3 flex justify-center items-center h-[200px] md:h-[300px] overflow-visible mt-30 md:mt-34"
        >
          <div className="absolute inset-0 flex justify-center items-center overflow-visible">
            <img
              src="/pos.png"
              alt="POS Illustration"
              className="w-full h-full object-contain scale-200"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PointOfSales;