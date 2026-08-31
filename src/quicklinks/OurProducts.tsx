import { ArrowRight, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoLogoApple } from "react-icons/io";

const products = [
  {
    title: "Kolo Ajo",
    description: "Save small, dream big",
    cta: "Try Kolo",
    iconBg: "bg-[#FCEEDD]",
    iconColor: "text-[#E8912D]",
  },
  {
    title: "Alert MFB Mobile Banking",
    description: "Your everyday money account",
    cta: "Open Account",
    iconBg: "bg-[#F2F2F7]",
    iconColor: "text-[#150F45]",
  },
  {
    title: "Business Banking",
    description: "Banking built for Nigerian Businesses",
    cta: "Start Business Banking",
    iconBg: "bg-[#F2F2F7]",
    iconColor: "text-[#150F45]",
  },
];

const OurProducts = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      className="bg-white py-24 max-w-full sm:py-32 lg:py-40"
    >
      {/* Heading */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mx-auto max-w-2xl px-4 text-center"
      >
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xs font-semibold tracking-[0.9rem] uppercase tracking-[0.25em] text-secondary sm:text-sm"
        >
          Our Products
        </motion.p>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 text-2xl font-medium leading-tight text-primary sm:text-[63.53px]"
        >
          One Bank for
          <br />
          Everything you need.
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4 text-sm text-slate-500"
        >
          From your first salary to financing your business, Alert MFB grows with you
        </motion.p>

        <motion.button
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mx-auto mt-8 flex items-center gap-4 rounded-full bg-[#150F45] py-1.5 pl-6 pr-1.5 text-sm text-white transition hover:bg-[#0f0b34]"
        >
          Open an account in minutes
          <motion.span
            whileHover={{ x: 3 }}
            transition={{ duration: 0.2 }}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white"
          >
            <ArrowRight size={14} strokeWidth={2.5} className="text-[#150F45]" />
          </motion.span>
        </motion.button>
      </motion.div>

      {/* Goldbucks banner */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative mx-auto mt-16 max-w-6xl px-4"
      >
        <motion.div
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#C57A2E] to-[#F6C568]"
        >
          <div className="flex h-[280px] flex-col justify-between px-8 py-8 sm:h-[300px] sm:max-w-sm sm:px-12 sm:py-10">
            <div>
              <motion.h3
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-2xl font-semibold text-white"
              >
                Goldbucks
              </motion.h3>
              <motion.p
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-4 text-sm leading-relaxed text-white/85"
              >
                Goldbucks is your all-in-one investment platform.
                From Target savings, Group investments, Lock
                funds and Fixed savings - build your wealth with
                confidence.
              </motion.p>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-nowrap items-center gap-3"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-white px-5 py-2.5 text-xs font-medium text-secondary transition hover:bg-gray-50 cursor-pointer"
              >
                <IoLogoApple size={20} />
                Get on iPhone
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-white/60 px-5 py-2.5 text-xs font-medium text-white transition hover:bg-white/10 cursor-pointer"
              >
                <IoLogoGooglePlaystore size={20} />
                Get on Android
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Phone mockup — overflows top/bottom of the card on purpose */}
        <motion.img
          initial={{ x: 50, opacity: 0, rotate: 5 }}
          whileInView={{ x: 0, opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 100 }}
          src="/mockupNobg.png"
          alt="Goldbucks App Mockup"
          className="pointer-events-none absolute top-5.5 -bottom-8 right-4 hidden h-[calc(90%+0.5rem)] w-auto object-contain sm:right-10 sm:block lg:right-16"
        />
      </motion.div>

      {/* Product cards */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mx-auto mt-6 grid max-w-6xl gap-5 px-4 sm:grid-cols-3"
      >
        {products.map((p, index) => (
          <motion.div
            key={p.title}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
            whileHover={{
              y: -8,
              scale: 1.02,
              boxShadow: "0 30px 50px -18px rgba(0, 0, 0, 0.08)"
            }}

              className="rounded-2xl  bg-white p-6 shadow-xs shadow-black/20" style={{
              boxShadow : "0 4px 16px 0 rgba(8, 27, 51, 0.05)"
            }} 
          >


            <span className="flex flex-row gap-3 items-center">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className={`flex h-10 w-10 mt-3 items-center justify-center rounded-xl ${p.iconBg}`}
              >
                <Smartphone size={18} className={p.iconColor} />
              </motion.div>
              <span>
                <motion.h4
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + (index * 0.15) }}
                  className="mt-4 text-sm font-semibold text-[#150F45]"
                >
                  {p.title}
                </motion.h4>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.6 + (index * 0.15) }}
                  className="mt-1 text-xs text-primary font-light"
                >
                  {p.description}
                </motion.p>
              </span>
            </span>


            <motion.a
              href="#"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              className="mt-8 ml-13 inline-flex items-center  gap-1 text-xs font-medium text-[#E8912D]"
            >
              {p.cta} <ArrowRight size={12} />
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default OurProducts;