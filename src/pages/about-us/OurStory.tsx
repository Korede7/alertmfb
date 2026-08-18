import { motion } from "framer-motion";

const timeline = [
  {
    label: "DAY ONE",
    title: "CBN Licence Granted",
    description:
      "Alert Microfinance Bank Limited receives its operating licence from the Central Bank of Nigeria. We open our first branch with a clear mission.",
  },
  {
    label: "YEAR 1",
    title: "First 10,000 Customers",
    description:
      "We reach our first major customer milestone across Lagos and Abuja — built entirely on referrals and word-of-mouth.",
  },
  {
    label: "YEAR 2",
    title: "Kolo Launched",
    description:
      "We introduce Kolo, our goal-based digital savings product. Within 6 months it becomes our most-opened product among under-30s.",
  },
  {
    label: "YEAR 3",
    title: "SME Lending Programme",
    description:
      "We launch a dedicated SME credit programme and disburse over ₦1B in business loans in our first year of operation.",
  },
  {
    label: "YEAR 4",
    title: "Digital Banking Platform",
    description:
      "Full Internet Banking and the Alert MFB mobile app launch, bringing 24/7 self-service banking to our entire customer base.",
  },
  {
    label: "TODAY",
    title: "150,000+ Customers & Growing",
    description:
      "We serve individuals and businesses across Nigeria with a growing branch network and a digital platform trusted by hundreds of thousands.",
  },
];

const OurStory = () => {
  return (
    <div>
      <section className="w-full bg-gray flex items-center justify-center py-16 sm:py-20 md:py-24 lg:py-28 px-5 sm:px-6">
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-y-14 md:gap-x-8 lg:gap-x-12">

          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="pr-0 md:pr-4"
          >
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-secondary text-[10px] sm:text-xs font-semibold tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-5"
            >
              OUR STORY
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-primary text-[32px] leading-[1.15] sm:text-[36px] md:text-[40px] font-semibold mb-7 sm:mb-8 max-w-sm"
            >
              We started where most banks end.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="space-y-5 sm:space-y-6 text-primary font-light text-sm leading-7 sm:leading-8 max-w-sm w-full"
            >
              <p>
                Alert Microfinance Bank has been building trust with Nigerians
                since 2014, when it began operations as BOIG Microfinance Bank
                Limited.
              </p>

              <p>
                Today, as a subsidiary of Alert Group, a Pan-African financial
                services group, it has grown into a CBN regulated institution
                serving individuals, SMEs, and businesses nationwide, upgrading
                from a state licence to a National Microfinance Bank License in
                April 2026.
              </p>

              <p>
                With over 24 business offices across Nigeria's commercial hubs,
                a team of 315 dedicated employees, and more than 37,000
                customers, Alert MFB offers loans, savings, deposits, and
                investment products designed around real financial needs.
                Growth here has never come at the expense of connection, the
                bank listens closely to its customers, shaping its solutions
                around their feedback.
              </p>

              <p>
                That community-first approach has earned Alert MFB multiple
                recognitions for financial inclusion and impact, proof that
                responsible, people-centered banking still moves communities
                forward, one customer at a time.
              </p>
            </motion.div>
          </motion.div>

          {/* DESKTOP DIVIDER */}
          <div className="hidden md:block relative w-0.5 bg-primary/20 overflow-hidden">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0 bg-primary origin-top"
            />
          </div>

          {/* RIGHT COLUMN / TIMELINE */}
          <div className="relative pl-6 sm:pl-8 md:pl-4">

            {/* MOBILE TIMELINE LINE */}
            <div className="absolute left-[5px] sm:left-[9px] top-0 bottom-0 w-px bg-primary/20 md:hidden">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 bg-primary origin-top"
              />
            </div>

            <div className="space-y-10 sm:space-y-12 md:space-y-8">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{
                    opacity: 0,
                    x: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: idx * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative"
                >
                  {/* MOBILE TIMELINE DOT */}
                  <motion.span
                    initial={{
                      scale: 0,
                      opacity: 0,
                    }}
                    whileInView={{
                      scale: 1,
                      opacity: 1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.5,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: idx * 0.08 + 0.15,
                    }}
                    className="absolute -left-[25px] sm:-left-[29px] top-0.5 md:hidden w-3 h-3 rounded-full bg-secondary border-2 border-gray"
                  />

                  <p className="text-secondary text-[10px] sm:text-xs font-medium tracking-[0.18em] sm:tracking-[0.2em] mb-2">
                    {item.label}
                  </p>

                  <h3 className="text-[#1B1240] text-base sm:text-lg font-semibold mb-1.5">
                    {item.title}
                  </h3>

                  <p className="text-[#8A8A9A] text-[12px] sm:text-[13px] leading-6 sm:leading-relaxed max-w-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
     <div className="w-full border-b-2 border-cyan-400 bg-gradient-to-r from-[#0B0844] to-[#473E82] px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12">
  <div className="mx-auto flex w-full max-w-7xl items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
    <span className="whitespace-nowrap text-lg font-medium tracking-tight text-white sm:text-xl md:text-2xl">
      Google
    </span>

    <span className="whitespace-nowrap text-2xl font-bold tracking-tight text-white sm:text-3xl">
      amazon
    </span>

    <span className="whitespace-nowrap text-lg font-semibold text-white sm:text-xl md:text-2xl">
      ◉ GoDaddy
    </span>
  </div>
</div>
    </div>
  );
};

export default OurStory;