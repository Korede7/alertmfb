import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const BusinessLoans = () => {
    // Animation variants with proper typing
    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration: 0.6, 
                ease: "easeOut" 
            } 
        }
    };

    const scaleIn: Variants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            transition: { 
                duration: 0.5, 
                ease: "easeOut" 
            } 
        }
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    return (
        <div className="bg-white overflow-hidden">
            {/* ---------- HERO ---------- */}
            <motion.section
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mx-auto max-w-3xl px-4 sm:px-6 pt-12 sm:pt-16 pb-8 sm:pb-10 text-center"
            >
                <motion.p
                    variants={fadeUp}
                    className="text-xs font-semibold tracking-[0.4em] text-secondary uppercase mb-3 sm:mb-4"
                >
                    Business Loans
                </motion.p>
                <motion.h1
                    variants={fadeUp}
                    className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight text-primary mb-4 sm:mb-5 px-2"
                >
                    The capital to build what&apos;s next — without compromising what
                    you&apos;ve already built.
                </motion.h1>
                <motion.p
                    variants={fadeUp}
                    className="text-sm sm:text-base text-primary max-w-xl mx-auto mb-6 sm:mb-8 px-2"
                >
                    Business loans from ₦5,000,000 to ₦500,000,000, with tenors up to
                    60 months, fast decisions, and a financing team that understands
                    how Nigerian businesses actually operate.
                </motion.p>
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-[#151349] pl-4 sm:pl-6 pr-2 py-2 text-xs sm:text-sm font-medium text-white hover:bg-[#1d1a5e] transition-colors"
                >
                    <span className="whitespace-nowrap">Apply for Business Loan</span>
                    <motion.span
                        whileHover={{ x: 4 }}
                        className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white text-primary transition group-hover:translate-x-1 flex-shrink-0"
                    >
                        <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </motion.span>
                </motion.button>
            </motion.section>

            {/* ---------- MAIN CONTENT ---------- */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={staggerContainer}
                viewport={{ once: true, amount: 0.1 }}
                className="mx-auto max-w-4xl px-4 sm:px-6 pb-12 sm:pb-16 space-y-4 sm:space-y-6"
            >
                {/* Current rate card */}
                <motion.div
                    variants={scaleIn}
                    whileHover={{ 
                        y: -4, 
                        boxShadow: "0 8px 30px rgba(0,0,0,0.12)" 
                    }}
                    transition={{ duration: 0.3 }}
                    className="rounded-2xl bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] border border-slate-100 px-4 sm:px-6 md:px-8 py-5 sm:py-6 md:py-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="w-full sm:w-auto"
                    >
                        <p className="text-xs font-semibold tracking-[0.4em] text-secondary uppercase mb-1.5 sm:mb-2">
                            Current Rate
                        </p>
                        <p className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                            21% <span className="text-base font-medium">p.a.</span>
                        </p>
                        <p className="text-xs sm:text-sm text-primary">
                            Interest is calculated daily and credited automatically every month.
                        </p>
                    </motion.div>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 sm:gap-3 self-start sm:self-center rounded-full bg-[#D99A3E] pl-4 sm:pl-5 pr-2 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-[#c98c30] transition-colors whitespace-nowrap w-auto"
                    >
                        <span>Calculate Repayments</span>
                        <motion.span
                            whileHover={{ x: 4 }}
                            className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-white flex-shrink-0"
                        >
                            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-secondary" />
                        </motion.span>
                    </motion.button>
                </motion.div>

                {/* Feature card */}
                <motion.div
                    variants={scaleIn}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-2xl bg-gradient-to-br from-[#0B0844] to-[#5B4FA8] px-5 sm:px-8 md:px-10 py-6 sm:py-8 md:py-10 text-white relative overflow-hidden"
                >
                    {/* Animated gradient background */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-[#0B0844] to-[#5B4FA8] opacity-0"
                        animate={{ 
                            opacity: [0, 0.3, 0] 
                        }}
                        transition={{ 
                            duration: 4, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                        }}
                    />
                    
                    <motion.h2
                        variants={fadeUp}
                        className="text-lg sm:text-xl md:text-2xl font-medium mb-4 sm:mb-5 relative z-10"
                    >
                        One loan facility. Multiple <br className="hidden xs:block" /> business uses.
                    </motion.h2>
                    <motion.ul
                        variants={staggerContainer}
                        className="space-y-2 sm:space-y-2.5 text-sm sm:text-[15px] text-white/85 relative z-10"
                    >
                        {[
                            "No Hidden Fees",
                            "Dedicated credit officer",
                            "Track your loan online",
                            "Structured for cash flow",
                        ].map((item, index) => (
                            <motion.li
                                key={item}
                                variants={fadeUp}
                                whileHover={{ x: 6 }}
                                transition={{ duration: 0.2 }}
                                className="flex items-center gap-2.5 sm:gap-3"
                            >
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ 
                                        delay: 0.3 + index * 0.1, 
                                        duration: 0.3 
                                    }}
                                    className="h-1.5 w-1.5 rounded-full bg-white/70 shrink-0"
                                />
                                {item}
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>

                {/* Image placeholder — replace with your preferred image */}
                <motion.div
                    variants={scaleIn}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                    className="relative rounded-2xl overflow-hidden  flex items-center justify-center min-h-[150px] sm:min-h-[250px] md:min-h-[250px]"
                >
                    <motion.img
                        src="/getstarted.jpg"
                        className="w-full h-full object-cover object-center"
                        alt="Business loans"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                    />

                    {/* Optional overlay mockup card — remove if not needed, or wire up real data */}
                    <motion.div
                        initial={{ opacity: 0, y: 20, rotate: -5 }}
                        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{ 
                            y: -8, 
                            rotate: 2, 
                            scale: 1.02 
                        }}
                        className="absolute top-4 sm:top-12 md:top-20 left-4 sm:left-16 md:left-25 w-32 sm:w-44 md:w-50 rounded-xl bg-white shadow-lg p-1.5 sm:p-2 bg-white/50 backdrop-blur-sm"
                    >
                        <motion.img
                            src="/getstarted2.jpg"
                            className="w-full rounded-xl"
                            alt="Loan details"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.2 }}
                        />
                    </motion.div>
                </motion.div>
            </motion.section>
        </div>
    );
};

export default BusinessLoans;