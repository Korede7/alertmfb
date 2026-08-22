import { useState, useRef } from "react";
import { Search, ChevronDown, ArrowRight } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const roles = [
  {
    role: "Business Relationship Manager (Abia)",
    team: "Enterprise Sales",
    office: "Abia, Nigeria",
  },
  {
    role: "Business Relationship Manager (Ebonyi)",
    team: "Enterprise Sales",
    office: "Ebonyi, Nigeria",
  },
  {
    role: "Business Relationship Manager (Ebonyi)",
    team: "Enterprise Sales",
    office: "Ebonyi, Nigeria",
  },
  {
    role: "Business Relationship Manager (Ebonyi)",
    team: "Enterprise Sales",
    office: "Ebonyi, Nigeria",
  },
  {
    role: "Business Relationship Manager (Ebonyi)",
    team: "Enterprise Sales",
    office: "Ebonyi, Nigeria",
  },
  {
    role: "Business Relationship Manager (Ebonyi)",
    team: "Enterprise Sales",
    office: "Ebonyi, Nigeria",
  },
];

const NigeriaFlag = () => (
  <span className="inline-flex h-2.5 w-3.5 shrink-0 overflow-hidden rounded-[2px]">
    <span className="h-full w-1/3 bg-[#008751]" />
    <span className="h-full w-1/3 bg-white" />
    <span className="h-full w-1/3 bg-[#008751]" />
  </span>
);

// Premium scroll animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const tableRowVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const AvailableRoles = () => {
  const [search, setSearch] = useState("");
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { 
    once: false, 
    amount: 0.1,
    margin: "-50px"
  });

  // Parallax scroll effect for the heading
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const headingY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <div ref={sectionRef} className="w-full bg-white px-5 py-10 sm:px-8 md:px-10 pt-25 overflow-hidden">
      <div className="mx-auto max-w-4xl">
        {/* Filter bar with reveal animation */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <div className="flex flex-1 items-center gap-2.5 rounded-md bg-gray px-4 py-3">
            <Search className="h-4 w-4 shrink-0 text-primary" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search role"
              className="w-full bg-transparent text-[13px] text-primary placeholder:text-primary focus:outline-none"
            />
          </div>

          <button
            type="button"
            className="flex flex-1 items-center justify-between rounded-md bg-gray px-4 py-3 text-[13px] text-primary"
          >
            All
            <ChevronDown className="h-3.5 w-3.5 text-primary" />
          </button>

          <button
            type="button"
            className="flex flex-1 items-center justify-between rounded-md bg-gray px-4 py-3 text-[13px] text-primary"
          >
            All
            <ChevronDown className="h-3.5 w-3.5 text-primary" />
          </button>

          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-2 rounded-full bg-primary py-2 pl-5 pr-2 text-[13px] font-medium text-white transition-colors hover:bg-primary/90"
          >
            Search
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
              <ArrowRight className="h-3.5 w-3.5 text-primary" />
            </span>
          </motion.button>
        </motion.div>

        {/* Section heading with parallax */}
        <motion.div
          style={{ y: headingY, opacity: headingOpacity }}
          className="mt-30 flex items-center gap-2.5"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[15px] font-semibold text-primary"
          >
            Available Roles
          </motion.h2>
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.4, delay: 0.35, type: "spring", stiffness: 300 }}
            className="flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-[10px] font-semibold text-white"
          >
            {roles.length}
          </motion.span>
        </motion.div>

        {/* Table with staggered row animations */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-8 overflow-hidden space-y-2"
        >
          {/* Table header */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-[1fr_1fr_1fr_auto] items-center gap-4 bg-[#F5F4F9] px-6 py-3.5"
          >
            <span className="text-[11px] font-medium text-primary/50">Role</span>
            <span className="text-[11px] font-medium text-primary/50">Team</span>
            <span className="text-[11px] font-medium text-primary/50">Office</span>
            <span className="w-[74px]" />
          </motion.div>

          {/* Table rows with staggered animation */}
          {roles.map((item, index) => (
            <motion.div
              key={index}
              variants={tableRowVariants}
              whileHover={{
                backgroundColor: "#FAFAFC",
                scale: 1.003,
                transition: { duration: 0.15 },
              }}
              className="grid grid-cols-[1fr_1fr_1fr_auto] items-center gap-4 border-t border-[#EDEBF5] px-6 py-4 transition-colors cursor-default"
            >
              <span className="truncate text-[13px] font-medium text-primary">
                {item.role}
              </span>
              <span className="truncate text-[13px] text-primary/70">
                {item.team}
              </span>
              <span className="flex items-center gap-2 truncate text-[13px] text-primary/70">
                {item.office}
                <NigeriaFlag />
              </span>
              <motion.button
                type="button"
                whileHover={{ scale: 1.05, backgroundColor: "#EDEBF5" }}
                whileTap={{ scale: 0.95 }}
                className="flex w-[74px] items-center justify-center gap-1.5 rounded-full bg-[#F5F4F9] px-3.5 py-2 text-[12px] font-medium text-primary transition-colors"
              >
                View
                <ArrowRight className="h-3 w-3" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Subtle gradient fade-in overlay at the bottom for premium feel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.3 } : { opacity: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-6 h-6 w-full bg-gradient-to-t from-white to-transparent"
        />
      </div>
    </div>
  );
};

export default AvailableRoles;