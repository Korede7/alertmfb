import { ArrowRight, ArrowRightFromLine } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { title: "Application" },
  { title: "Initial Interview" },
  { title: "Skills Assessment" },
  { title: "Offer & Onboarding" },
];

const bonuses = ["Health Insurance", "Performance Bonuses", "Inclusive Culture", "Growth Path"];

// Reusable scroll-reveal variants
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const scrollProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.25 },
};

const Careers = () => {
  return (
    <div className="min-h-screen w-full bg-white pb-40">
      <div
        className="w-full"
        style={{
          background:
            "radial-gradient(70% 100% at 100% 30%, rgba(143, 112, 200, 0.93) 0%, rgba(217, 196, 255, 0.1) 55%)",
        }}
      >
        <motion.div
          className="max-w-5xl mx-auto px-6 pt-16 pb-10 flex flex-col items-center text-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.span
            variants={item}
            className="text-xs font-medium tracking-[0.4em] mb-5 text-secondary">
            CAREERS
          </motion.span>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-semibold leading-tight mb-5 max-w-3xl text-primary text-md sm:text-3xl md:text-xl lg:text-5xl">
            Build the bank Nigeria needs.
            <br />
            From the Inside.
          </motion.h1>

          {/* Subtext */}
          <motion.p variants={item} className="max-w-xl text-sm md:text-base mb-8 text-primary">
            We hire people who are genuinely bothered by the gap between what banking is in
            Nigeria and what it could be. If that's you — and if you're excellent at what you
            do — you belong here.
          </motion.p>

          {/* CTA */}
          <motion.button
            variants={item}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-2 sm:gap-3 bg-primary text-white rounded-full pl-3 sm:pl-4 pr-1 py-1.5 text-[12px] xs:text-[14px] font-medium hover:bg-[#15105c] transition-all" >
            <span>See Open Roles</span>
            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white text-[#0B0844] flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              <ArrowRight size={10} strokeWidth={2.5} className="sm:w-3 sm:h-3" />
            </span>
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="max-w-5xl mx-auto px-6"
        variants={fadeIn}
        {...scrollProps}
      >
        <img src="/career.jpg" alt="" className="rounded-2xl" />
      </motion.div>

      {/* Bonuses / speculative application section */}
      <div className="max-w-4xl mx-auto px-6 mt-16 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div variants={fadeUp} {...scrollProps}>
            <h2
              className="font-semibold text-primary mb-5 leading-snugtext-primary text-lg sm:text-xl md:text-2xl lg:text-2xl">
              Build your career with <br /> Alert MFB with bonuses
            </h2>

            <motion.ul
              className="mb-8 space-y-2"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              {bonuses.map((b) => (
                <motion.li key={b} variants={item} className="flex items-center gap-2 text-sm text-primary">
                  <span
                    className="inline-block rounded-full flex-shrink-0" />
                  {b}
                </motion.li>
              ))}
            </motion.ul>

            <button
              className=" group shrink-0 self-start sm:self-center mt-0 inline-flex items-center justify-center gap-2 rounded-full bg-secondary text-white text-xs sm:text-sm font-medium pl-5 sm:pl-6 pr-2 py-2 hover:opacity-90 transition-all duration-300 whitespace-nowrap"
            >
              <span>Send a speculative Application</span>

              <span
                className="flex h-6 w-6 items-center justify-center rounded-full bg-white group-hover:translate-x-0.5  transition-transform duration-300"
              >
                <ArrowRight className="w-3.5 h-3.5 text-secondary" />
              </span>
            </button>
          </motion.div>

          {/* SECONDARY IMAGE — swap this placeholder for your own image (square-ish, ~4:5) */}
          <motion.div
            className="relative"
            variants={fadeUp}
            {...scrollProps}
            transition={{ delay: 0.1 }}
          >
            <img src="/pics1.jpg" alt="" className="rounded-2xl" />
          </motion.div>
        </div>
      </div>

      {/* Process steps */}
      <div className="max-w-4xl mx-auto px-6 mb-6 shadow-lg p-5 rounded-3xl">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {steps.map((s) => (
            <motion.div
              key={s.title}
              variants={item}
              whileHover={{ y: -4 }}
              className="rounded-2xl flex flex-col items-center justify-center text-center py-8 px-3 bg-gray" >
              <span
                className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-300 border border-white text-primary shadow-lg mb-5"
              >
                <ArrowRightFromLine size={16} className="sm:w-5 sm:h-5" />
              </span>
              <span className="text-xs font-medium text-primary">
                {s.title}
              </span>
            </motion.div>
          ))}
        </motion.div>
        {/* What to expect */}
        <motion.div
          className="max-w-5xl mx-auto px-6  pt-6"
          variants={fadeUp}
          {...scrollProps}
        >
          <h3 className="font-semibold text-lg mb-2 text-primary">
            What to expect after you apply
          </h3>
          <p className="text-sm max-w-2xl text-primary">
            We try to be respectful of your time and honest about where you stand.
          </p>
        </motion.div>
      </div>

    </div>
  );
};

export default Careers;