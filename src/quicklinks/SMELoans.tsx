import { ArrowRight } from "lucide-react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion, type Variants } from "framer-motion";

const loans = [
  {
    product: "Personal Loan",
    customer: "Individuals (salaried / self-employed)",
    amount: "\u20a650,000 \u2013 \u20a65,000,000",
    tenor: "3 \u2013 36 months",
  },
  {
    product: "Salary Advance",
    customer: "Salaried employees",
    amount: "Up to 50% of monthly salary",
    tenor: "1 month",
  },
  {
    product: "SME Loan",
    customer: "Small businesses",
    amount: "\u20a6500,000 \u2013 \u20a650,000,000",
    tenor: "6 \u2013 60 months",
  },
  {
    product: "Asset Finance",
    customer: "Businesses & individuals",
    amount: "\u20a61,000,000 \u2013 \u20a6100,000,000",
    tenor: "12 \u2013 84 months",
  },
  {
    product: "Business Loan",
    customer: "Established Businesses",
    amount: "\u20a65,000,000 \u2013 \u20a6500,000,000",
    tenor: "12 \u2013 60 months",
  },
];

const SMELoans = () => {
  // Variants for animations
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const tableRowVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const tableHeaderVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 md:mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <motion.p 
              className="text-secondary text-[10px] sm:text-xs font-semibold tracking-[0.6em] sm:tracking-[0.8em] mb-2 sm:mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              SME LOANS
            </motion.p>
            <motion.h2 
              className="text-primary text-3xl sm:text-4xl md:text-5xl font-medium leading-tight"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Funds when you
              <br className="hidden sm:block" />
              need them the most
            </motion.h2>
          </motion.div>

          <motion.div 
            className="md:max-w-xs md:text-left"
            variants={itemVariants}
          >
            <motion.p 
              className="text-primary text-sm sm:text-base font-medium leading-relaxed mb-6 sm:mb-8 md:mb-10 text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Transparent rates, fast decisions, and a loan product for every
              stage of life and business.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-3 m-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.button 
                className="inline-flex items-center gap-2 bg-primary text-white text-sm font-medium pl-4 pr-1.5 py-2 rounded-full hover:bg-[#241c52] transition-colors w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Apply Now</span>
                <motion.span 
                  className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-primary flex-shrink-0"
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight size={13} />
                </motion.span>
              </motion.button>
              <motion.button 
                className="text-primary text-sm font-medium px-5 py-2.5 rounded-full border border-primary shadow-xs hover:bg-[#171238]/5 transition-colors w-full sm:w-auto text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Loan Calculator
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="overflow-x-auto -mx-4 sm:mx-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="min-w-full inline-block align-middle px-4 sm:px-0">
            <table className="min-w-full border-collapse text-left">
              <motion.thead
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
              >
                <motion.tr 
                  className="bg-[#f4f3fb]"
                  variants={tableHeaderVariants}
                >
                  <th className="text-[#171238] text-[10px] sm:text-xs font-medium px-3 sm:px-4 md:px-6 py-3 sm:py-4 whitespace-nowrap">
                    Loan Product
                  </th>
                  <th className="text-[#171238] text-[10px] sm:text-xs font-medium px-3 sm:px-4 md:px-6 py-3 sm:py-4 whitespace-nowrap hidden sm:table-cell">
                    Target Customer
                  </th>
                  <th className="text-[#171238] text-[10px] sm:text-xs font-medium px-3 sm:px-4 md:px-6 py-3 sm:py-4 whitespace-nowrap">
                    Amount Range
                  </th>
                  <th className="text-[#171238] text-[10px] sm:text-xs font-medium px-3 sm:px-4 md:px-6 py-3 sm:py-4 whitespace-nowrap hidden md:table-cell">
                    Tenor
                  </th>
                  <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4" />
                </motion.tr>
              </motion.thead>
              <motion.tbody
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
              >
                {loans.map((loan, i) => (
                  <motion.tr
                    key={loan.product}
                    variants={tableRowVariants}
                    custom={i}
                    className={i !== loans.length - 1 ? "border-b border-[#ece9f6]" : ""}
                    whileHover={{ 
                      backgroundColor: "#f8f7fc",
                      transition: { duration: 0.2 }
                    }}
                  >
                    <td className="text-[#171238] text-xs sm:text-sm px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 font-medium whitespace-nowrap">
                      {loan.product}
                    </td>
                    <td className="text-[#5b5a72] text-xs sm:text-sm px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 font-medium hidden sm:table-cell">
                      {loan.customer}
                    </td>
                    <td className="text-[#5b5a72] text-xs sm:text-sm px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 font-medium whitespace-nowrap">
                      {loan.amount}
                    </td>
                    <td className="text-[#5b5a72] text-xs sm:text-sm px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 font-medium whitespace-nowrap hidden md:table-cell">
                      {loan.tenor}
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 text-right">
                      <motion.button 
                        className="inline-flex items-center gap-1.5 bg-[#f4f3fb] text-[#171238] text-[10px] sm:text-xs font-medium pl-2 sm:pl-3 md:pl-4 pr-1.5 py-1 sm:py-1.5 rounded-full hover:bg-[#ece9f6] transition-colors whitespace-nowrap"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="text-[10px] sm:text-xs">View</span>
                        <motion.span 
                          className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full text-primary flex-shrink-0"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FaArrowRightLong size={11} />
                        </motion.span>
                      </motion.button>
                    </td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SMELoans;