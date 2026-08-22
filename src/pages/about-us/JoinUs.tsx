import { ArrowRight, ArrowRightFromLine } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { label: "Application" },
  { label: "Initial Interview" },
  { label: "Skills Assessment" },
  { label: "Offer & Onboarding" },
];

const perks = [
  "Health Insurance",
  "Performance Bonuses",
  "Inclusive Culture",
  "Growth paths",
];

// Premium animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut" as const
    },
  },
};

const fadeInDown = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.7, 
      ease:  "easeOut" as const
    },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { 
      duration: 0.7, 
      ease: "easeOut" as const
    },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { 
      duration: 0.7, 
      ease: "easeOut" as const 
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.7, 
      ease: "easeOut" as const
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const staggerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const buttonHover = {
  whileHover: { scale: 1.04 },
  whileTap: { scale: 0.96 },
};

const cardHover = {
  whileHover: { 
    y: -8, 
    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
    transition: { duration: 0.3 },
  },
};

const JoinUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { 
    once: false, 
    amount: 0.08,
    margin: "-60px"
  });

  return (
    <div ref={sectionRef} className="w-full bg-white overflow-hidden">
      <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-16">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="flex flex-col items-center text-center"
        >
          <motion.span
            variants={fadeInDown}
            className="mb-4 text-[13px] font-semibold tracking-[0.55em] text-secondary"
          >
            JOIN US
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            className="max-w-[560px] text-2xl font-semibold leading-[1.15] tracking-[-0.03em] text-primary sm:text-4xl md:text-[45px]"
          >
            Build the bank Nigeria needs.
            <br />
            From the Inside.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-[580px] text-[13px] leading-relaxed text-primary"
          >
            We hire people who are genuinely bothered by the gap between what
            banking is in Nigeria and what it could be. If that's you — and
            if you're excellent at what you do — you belong here.
          </motion.p>
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={scaleIn}
          transition={{ delay: 0.3 }}
          className="mt-10 overflow-hidden rounded-2xl"
        >
          <motion.img
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6 }}
            src="/career.jpg"
            alt="career"
            className="h-[250px] w-full object-cover sm:h-[300px] md:h-[480px]"
          />
        </motion.div>

        {/* Process card */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
          className="mt-6 rounded-3xl bg-white shadow-lg p-5 sm:p-6"
        >
          {/* Steps */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3"
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex flex-col items-center justify-center gap-3 rounded-3xl bg-gray p-8 py-8 px-4 text-center"
              >
                <motion.div
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-300 border border-white text-primary shadow-lg"
                >
                  <ArrowRightFromLine className="w-5 h-5 text-primary" />
                </motion.div>
                <h3 className="text-sm font-normal text-primary mt-3">
                  {step.label}
                </h3>
              </motion.div>
            ))}
          </motion.div>

          {/* What to expect */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6"
          >
            <h3 className="text-xl font-semibold text-primary">
              What to expect after you apply
            </h3>
            <p className="mt-1.5 text-[12.5px] text-primary">
              We try to be respectful of your time and honest about where you
              stand.
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom split section */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Left: copy + CTA */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInLeft}
            className="flex flex-col justify-between rounded-2xl p-6"
          >
            <div>
              <motion.h3
                variants={fadeInUp}
                className="text-2xl font-semibold leading-snug text-primary"
              >
                Build your career with
                <br />
                Alert MFB with bonuses
              </motion.h3>

              <motion.ul
                variants={staggerFast}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="mt-4 space-y-1.5"
              >
                {perks.map((perk, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInUp}
                    className="text-[12.5px] text-primary"
                  >
                    • {perk}
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <motion.button
              {...buttonHover}
              type="button"
              className="mt-6 flex w-fit items-center gap-2.5 rounded-full bg-secondary py-2.5 pl-4 pr-2 text-[12.5px] font-medium text-white"
            >
              Send a Speculative Application
              <motion.span
                whileHover={{ rotate: 45 }}
                transition={{ duration: 0.3 }}
                className="flex h-6 w-6 items-center justify-center rounded-full bg-white"
              >
                <ArrowRight className="h-3.5 w-3.5 text-secondary" />
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Right: decorative gradient panel */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInRight}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="relative min-h-[220px] overflow-hidden rounded-2xl sm:min-h-0"
          >
            <motion.img
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.6 }}
              src="/pics1.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Bottom cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 max-w-3xl mx-auto pt-10"
        >
          {/* Join as a Partner */}
          <motion.div
            variants={fadeInUp}
            {...cardHover}
            className="bg-white rounded-3xl p-4 shadow-lg transition-all duration-300"
          >
            <motion.div
              whileHover={{ backgroundColor: "#f0eef8" }}
              transition={{ duration: 0.3 }}
              className="bg-gray rounded-3xl h-[140px] flex flex-col items-center justify-center mb-9 transition-colors duration-300"
            >
              <motion.span
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-300 border border-white text-primary shadow-lg mb-5"
              >
                <ArrowRightFromLine size={18} />
              </motion.span>

              <span className="text-[10px] text-primary">
                Start Your Application
              </span>
            </motion.div>

            <div className="px-1">
              <motion.h3
                variants={fadeInUp}
                className="text-[20px] font-semibold text-primary mb-3"
              >
                Join as a partner
              </motion.h3>

              <motion.p
                variants={fadeInUp}
                className="text-[11px] leading-[1.6] text-primary mb-4"
              >
                Explore our infrastructure and reach to power your business
                dreams
              </motion.p>

              <motion.button
                {...buttonHover}
                type="button"
                className="mt-6 flex w-fit items-center gap-2.5 rounded-full bg-secondary py-1.5 pl-4 pr-2 text-[12.5px] font-medium text-white"
              >
                Join Now
                <motion.span
                  whileHover={{ rotate: 45 }}
                  transition={{ duration: 0.3 }}
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-white"
                >
                  <ArrowRight className="h-3.5 w-3.5 text-secondary" />
                </motion.span>
              </motion.button>
            </div>
          </motion.div>

          {/* Join the Dream Makers */}
          <motion.div
            variants={fadeInUp}
            {...cardHover}
            className="bg-white rounded-3xl p-4 shadow-lg transition-all duration-300"
          >
            <motion.div
              whileHover={{ backgroundColor: "#f0eef8" }}
              transition={{ duration: 0.3 }}
              className="bg-gray rounded-3xl h-[140px] flex flex-col items-center justify-center mb-9 transition-colors duration-300"
            >
              <motion.span

                className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-300 border border-white text-primary shadow-lg mb-5"
              >
                <ArrowRightFromLine size={18} />
              </motion.span>

              <span className="text-[10px] text-primary">
                Start Your Application
              </span>
            </motion.div>

            <div className="px-1">
              <motion.h3
                variants={fadeInUp}
                className="text-[20px] font-semibold text-primary mb-3"
              >
                Join the dream makers
              </motion.h3>

              <motion.p
                variants={fadeInUp}
                className="text-[11px] leading-[1.6] text-primary mb-4"
              >
                Thousands of people are building impactful businesses because
                of the work we do at Alert MFB. You can too.
              </motion.p>

              <motion.button
                {...buttonHover}
                type="button"
                className="mt-6 flex w-fit items-center gap-2.5 rounded-full bg-secondary py-1.5 pl-4 pr-2 text-[12.5px] font-medium text-white"
              >
                Join Now
                <motion.span
                  whileHover={{ rotate: 45 }}
                  transition={{ duration: 0.3 }}
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-white"
                >
                  <ArrowRight className="h-3.5 w-3.5 text-secondary" />
                </motion.span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default JoinUs;