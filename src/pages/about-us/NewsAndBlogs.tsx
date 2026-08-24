import { ShieldCheck } from "lucide-react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import FindABranch from "../../components/FindABranch";
import FAQ from "../../components/FAQ";
import Blog from "./Blog";

const NewsAndBlogs = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-white">
      {/* Header */}
      <motion.section
        className="mx-auto max-w-5xl px-6 pt-25 pb-10 text-center sm:pt-24 sm:pb-11"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.p
          className="text-[9px] font-semibold tracking-[0.5em] text-secondary sm:text-[10px]"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          NEWS &amp; BLOGS
        </motion.p>

        <motion.h1
          className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-primary sm:text-[42px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Alert News &amp; Blogs
        </motion.h1>

        <motion.p
          className="mx-auto mt-3 max-w-[430px] text-[12px] leading-[1.45] text-primary sm:text-[13px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Get behind the scenes on our process, exciting news, and the people
          making dreams come true for millions of businesses.
        </motion.p>
      </motion.section>

      {/* Featured Story */}
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <motion.div
          className="relative h-auto min-h-[305px] overflow-hidden rounded-[15px] bg-gradient-to-br from-[#51449B] via-[#352A76] to-[#151052] px-7 py-7 sm:h-[305px] sm:px-8 sm:py-5"
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Decorative diagonal shapes */}
          <motion.div
            className="pointer-events-none absolute -left-75 inset-y-0 w-[83%] overflow-hidden bg-center bg-no-repeat object-cover opacity-20"
            style={{
              backgroundImage: "url('/logo0.png')",
              backgroundSize: "cover",
            }}
            animate={{
              x: [0, 12, 0],
              y: [0, -6, 0],
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative z-10 grid h-full grid-cols-1 gap-6 md:grid-cols-[42%_58%] md:items-center">
            {/* Left Content */}
            <motion.div
              className="flex h-full flex-col justify-between"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div>
                {/* Category */}
                <motion.div
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <span className="text-[10px] font-normal text-white/80">
                    News
                  </span>

                  <motion.span
                    className="rounded-full bg-white px-3.5 py-1 text-[9px] font-medium text-[#2A1E63]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    Top Stories
                  </motion.span>
                </motion.div>

                {/* Title */}
                <motion.h2
                  className="mt-11 max-w-[255px] text-[18px] font-semibold leading-[1.25] text-white sm:text-[19px]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Alert MFB Launches Goldbucks App to boost Financial Inclusion
                </motion.h2>

                {/* Meta */}
                <motion.div
                  className="mt-7 flex flex-wrap items-center gap-2 text-[9px] text-white/75"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <span>June 25th, 2026</span>

                  <span className="h-[3px] w-[3px] rounded-full bg-white/50" />

                  <span>by Peter Moses, Lagos</span>
                </motion.div>
              </div>

              {/* Navigation */}
              <motion.div
                className="mt-6 flex items-center gap-2 md:mt-0 md:justify-end md:pr-1"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <motion.button
                  type="button"
                  aria-label="Previous story"
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#2A1E63] sm:h-7 sm:w-7"
                  whileHover={{
                    scale: 1.12,
                    x: -2,
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <IoIosArrowRoundBack className="h-3.5 w-3.5" />
                </motion.button>

                <motion.button
                  type="button"
                  aria-label="Next story"
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#2A1E63] sm:h-7 sm:w-7"
                  whileHover={{
                    scale: 1.12,
                    x: 2,
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <IoIosArrowRoundForward className="h-3.5 w-3.5" />
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              className="relative h-[230px] w-full overflow-hidden rounded-[7px] bg-white sm:h-[265px]"
              initial={{ opacity: 0, x: 35, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            >
              <motion.img
                src="/news.jpg"
                alt="Alert MFB team launching the Goldbucks app"
                className="h-full w-full object-cover"
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  delay: 0.25,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.04 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer
        className="border-t border-gray-100 bg-[#f1f2f7] px-4 py-2.5"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="flex items-center justify-center gap-2 text-center text-[9px] leading-4 text-primary sm:text-[10px]">
          <ShieldCheck className="h-3 w-3 shrink-0 text-primary/70" />

          <span>
            Alert MFB&apos;s Board of Directors operates under the CBN Code of
            Corporate Governance for Microfinance Banks, with Board Audit,
            Risk, and Credit Committees providing structured oversight.
          </span>
        </p>
      </motion.footer>

      <Blog />
      <FindABranch />
      <FAQ />
    </div>
  );
};

export default NewsAndBlogs;