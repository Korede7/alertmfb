import { ShieldCheck } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import Accounts from "./Accounts";
import Cards from "./Cards";
import Loans from "./Loans";
import DigitalBanking from "./DigitalBanking";
import Security from "./Security";

const navItems = [
    "Accounts",
    "Cards",
    "Loans",
    "Digital Banking",
    "Security",
    "Branch & ATM",
    "Downloads",
    "Contact Us",
];

const footerLinks = [
    "Privacy Policy",
    "Terms & Conditions",
    "Cookie Policy",
    "AML/CFT Disclosure",
];

// Animation variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.6,
        },
    },
};

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 120,
            damping: 20,
            duration: 0.5,
        },
    },
};

const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.6,
        },
    },
};



const HelpAndSupport = () => {
    return (
        <div>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className=" bg-white pt-20 sm:pt-25"
            >
                <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-8 pb-5 text-center">
                    <motion.p
                        variants={fadeIn}
                        className="text-[10px] font-medium tracking-[0.45em] text-secondary"
                    >
                        HELP &amp; SUPPORT
                    </motion.p>
                    <motion.h1
                        variants={fadeInUp}
                        className="mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-primary tracking-[0.05em] sm:tracking-[0.10em]"
                    >
                        Hello, How can we help you today?
                    </motion.h1>
                    <motion.p
                        variants={fadeInUp}
                        transition={{ delay: 0.1 }}
                        className="mt-2 text-xs sm:text-sm text-primary font-light max-w-2xl mx-auto px-2 sm:px-0"
                    >
                        Search our FAQs, or jump straight to what you need below. If still
                        need us, we are always one click away.
                    </motion.p>
                </div>

                <motion.div
                    variants={scaleIn}
                    className="mx-auto max-w-4xl px-4 sm:px-6 mt-4 sm:mt-6"
                >
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0B0844] via-[#534995] to-[#B9A9E8] h-[180px] sm:h-[220px] md:h-[250px] lg:h-[270px] flex items-center justify-center"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: 80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 80 }}
                            className="relative w-[260px] sm:w-[200px] md:w-[350px] lg:w-[350px] xl:w-[400px] right-[30px] sm:right-[40px] md:right-[50px] lg:right-[60px]"
                        >
                            <img
                                src="/mockupNobg.png"
                                className="h-full w-full object-cover mt-6 sm:mt-8 md:mt-10"
                                alt="Mobile app mockup"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={fadeInUp}
                    className="mx-auto max-w-4xl px-4 sm:px-6 mt-8 sm:mt-10 flex justify-center w-full"
                >
                    <motion.div
                        variants={containerVariants}
                        className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-1.5 md:gap-2 rounded-xl bg-slate-50 p-1.5 md:p-1 overflow-x-auto scrollbar-hide w-full"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                    >
                        {navItems.map((item, index) => (
                            <motion.button
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-2 md:px-3 lg:px-4 py-1.5 md:py-2 lg:py-2.5 rounded-lg text-[10px] md:text-xs font-semibold transition-colors whitespace-nowrap flex-shrink-0 ${item === "Accounts"
                                    ? "bg-primary text-white"
                                    : "text-slate-500 hover:text-slate-900"
                                    }`}
                            >
                                {item}
                            </motion.button>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={fadeIn}
                    className="mt-8 sm:mt-10 border-t border-slate-100 bg-slate-50/60"
                >
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-slate-500">
                        <motion.div
                            variants={fadeInUp}
                            className="flex items-center gap-1.5 text-center sm:text-left"
                        >
                            <ShieldCheck className="w-3 h-3 text-slate-400 shrink-0" />
                            <p className="text-[9px] sm:text-[10px]">
                                Alert Microfinance Bank Limited is licensed by the Central Bank
                                of Nigeria (CBN). Deposits are insured by the NDIC.
                            </p>
                        </motion.div>
                        <motion.div
                            variants={fadeInUp}
                            transition={{ delay: 0.1 }}
                            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
                        >
                            {footerLinks.map((link) => (
                                <motion.a
                                    key={link}
                                    href="#"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="underline underline-offset-2 hover:text-slate-700 text-[9px] sm:text-[10px]"
                                >
                                    {link}
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>

            </motion.div>
            <Accounts />
            <Cards />
            <Loans />
            <DigitalBanking />
            <Security />
        </div>
    );
};

export default HelpAndSupport;