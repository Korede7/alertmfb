import {
    ArrowRight,
    Users,
    ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import Stats from "../../components/Stats";

const Overview = () => {
    // Animation variants with proper Framer Motion types
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" as const }
        }
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.9, ease: "easeOut" as const }
        }
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.9, ease: "easeOut" as const }
        }
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" as const }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const floatingCard = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                delay: 0.6,
                ease: "easeOut" as const
            }
        }
    };

    const imageReveal = {
        hidden: { opacity: 0, scale: 1.1 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1.2,
                ease: "easeOut" as const,
                delay: 0.3
            }
        }
    };

    return (
        <section className="min-h-screen bg-white overflow-hidden pt-20 sm:pt-16 md:pt-40 lg:pt-20 pb-12 sm:pb-16 transition-all duration-300">
            {/* HERO */}
            <div className="relative min-h-[515px] lg:min-h-[590px]">
                {/* Main Content */}
                <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-[43%_57%] min-h-[515px]"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        {/* LEFT CONTENT */}
                        <motion.div
                            className="flex flex-col justify-center pt-8 sm:pt-12 lg:pt-0 px-4 sm:px-0"
                            variants={fadeInLeft}
                        >
                            <div>
                                <motion.h1
                                    className="text-primary font-semibold tracking-[-0.045em] leading-[0.93] text-3xl xs:text-4xl sm:text-5xl lg:text-[52px] pt-8 sm:pt-15"
                                    variants={fadeInUp}
                                >
                                    Empowering <br /> Nigerians <br /> One account at <br />
                                    a time
                                </motion.h1>

                                <motion.p
                                    className="mt-5 sm:mt-7 text-primary text-xs sm:text-sm lg:text-[12px] leading-[1.45] max-w-[280px] sm:max-w-[325px]"
                                    variants={fadeInUp}
                                    transition={{ delay: 0.2 }}
                                >
                                    Alert Microfinance Bank is a CBN-licensed bank built on one
                                    conviction: that honest, accessible banking should be the
                                    default in Nigeria — not a privilege reserved for people who
                                    already have money.
                                </motion.p>

                                {/* BUTTONS */}
                                <motion.div
                                    className="flex flex-wrap items-center gap-2 sm:gap-3 mt-5 sm:mt-7"
                                    variants={fadeInUp}
                                    transition={{ delay: 0.3 }}
                                >
                                    <motion.button
                                        className="group flex items-center gap-2 sm:gap-3 bg-primary text-white rounded-full pl-3 sm:pl-4 pr-1 py-1 text-[12px] xs:text-[14px] font-medium hover:bg-[#15105c] transition-all"
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        <span>Open an account</span>
                                        <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white text-[#0B0844] flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                                            <ArrowRight size={10} strokeWidth={2.5} className="sm:w-3 sm:h-3" />
                                        </span>
                                    </motion.button>

                                    <motion.button
                                        className="flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#0B0844] text-[#0B0844] px-3 sm:px-4 py-1.5 sm:py-2 text-[12px] xs:text-[14px] font-medium hover:bg-[#0B0844] hover:text-white transition-all"
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        <Users size={10} strokeWidth={2.2} className="sm:w-3 sm:h-3" />
                                        <span>Join our team</span>
                                    </motion.button>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* RIGHT IMAGE AREA */}
                        <motion.div
                            className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[515px] overflow-visible mt-8 lg:mt-0"
                            variants={fadeInRight}
                        >
                            {/* BLUE BACKGROUND */}
                            <motion.div
                                className="absolute z-0 top-[20px] sm:top-[30px] lg:top-[52px] right-[-20px] sm:right-[-50px] lg:right-[-100px] w-[280px] sm:w-[380px] lg:w-[490px] h-[300px] sm:h-[400px] lg:h-[535px] rounded-tl-[20px] sm:rounded-tl-[24px] lg:rounded-tl-[28px] bg-gradient-to-br from-[#0B0844] to-[#473E82] overflow-hidden"
                                variants={scaleIn}
                                transition={{ delay: 0.2 }}
                            >
                                {/* Zoomed logo */}
                                <motion.div
                                    className="absolute inset-0 right-[-100px] sm:right-[-130px] lg:right-[-170px] z-0 bg-no-repeat opacity-[0.20] pointer-events-none"
                                    style={{
                                        backgroundImage: "url('/logo0.png')",
                                        backgroundSize: "200%",
                                        backgroundPosition: "center",
                                    }}
                                    initial={{ scale: 1.2, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 0.2 }}
                                    transition={{ duration: 2, ease: "easeOut" }}
                                />
                            </motion.div>

                            {/* PERSON / ABOUT IMAGE */}
                            <motion.div
                                className="absolute z-20 -bottom-10 sm:-bottom-14 lg:-bottom-18 left-[-20px] sm:left-[-30px] lg:left-[-45px] w-[280px] sm:w-[380px] lg:w-[500px] h-[350px] sm:h-[480px] lg:h-[620px] overflow-hidden pointer-events-none"
                                variants={imageReveal}
                            >
                                <motion.img
                                    src="/aboutImg.png"
                                    alt="Alert MFB"
                                    className="absolute w-[380px] sm:w-[500px] lg:w-[650px] h-auto left-0 top-[50px] sm:top-[70px] lg:top-[90px]"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.6 }}
                                />
                            </motion.div>

                            {/* FLOATING CARD */}
                            <motion.div
                                className="absolute z-30 top-[140px] sm:top-[180px] lg:top-[240px] right-[40px] sm:right-[80px] lg:right-[120px] w-[100px] sm:w-[150px] lg:w-[170px] h-[100px] sm:h-[130px] lg:h-[155px] bg-white/30 rounded-lg p-1 sm:p-1.5 animate-float-delayed"
                                variants={floatingCard}
                                animate={{
                                    y: [0, -8, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                whileHover={{
                                    y: -8,
                                    scale: 1.02,
                                    transition: { duration: 0.4, ease: "easeOut" }
                                }}
                            >
                                <div className="h-full rounded-[5px] sm:rounded-[7px] overflow-hidden">
                                    <img
                                        src="/getstarted2.jpg"
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* BOTTOM NAVIGATION - FIXED */}
                <motion.div
                    className="fixed z-50 bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-13 left-1/2 -translate-x-1/2 w-[95%] sm:w-[600px] md:w-[700px] max-w-[90%] h-[48px] sm:h-[52px] md:h-[56px] bg-white/20 backdrop-blur-md rounded-[10px] sm:rounded-[12px] flex items-center justify-start sm:justify-center px-2 gap-0.5 sm:gap-1 overflow-x-auto scrollbar-hide"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.3)" }}
                >
                    <motion.button
                        className="h-[34px] sm:h-[38px] md:h-[42px] px-2.5 sm:px-3 md:px-4 rounded-[6px] sm:rounded-[8px] bg-[#0B0844] text-white text-[9px] sm:text-[10px] md:text-[11px] font-medium whitespace-nowrap hover:bg-[#15105c] transition-all flex-shrink-0"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Our Story
                    </motion.button>

                    {["Management Team", "Board of Directors", "Awards", "CSR", "Careers", "News & Blogs"].map((item, index) => (
                        <motion.button
                            key={item}
                            className="px-2 sm:px-3 md:px-4 text-[#0B0844] text-[9px] sm:text-[10px] md:text-[11px] font-medium whitespace-nowrap hover:bg-[#f0f0f5] rounded-[4px] sm:rounded-[6px] h-[30px] sm:h-[33px] md:h-[36px] transition-all flex-shrink-0"
                            whileHover={{ scale: 1.05, backgroundColor: "#f0f0f5" }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 + index * 0.05 }}
                        >
                            {item}
                        </motion.button>
                    ))}
                </motion.div>
            </div>

            {/* FOOTER STRIP */}
            <motion.div
                className="h-auto sm:h-[22px] flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 lg:px-10 text-[14px] sm:text-[11px] lg:text-[12px] text-primary py-2 sm:py-0 gap-1 sm:gap-0 bg-gray"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
            >
                <motion.p
                    className="flex items-center gap-1 text-center sm:text-left"
                    whileHover={{ scale: 1.01 }}
                >
                    <ShieldCheck size={12} className="sm:w-[15px] sm:h-[15px]" />
                    <span className="hidden xs:inline">Alert Microfinance Bank Limited is licensed by the Central Bank of Nigeria (CBN). Deposits are insured by the NDIC.</span>
                    <span className="xs:hidden">Alert MFB is CBN-licensed. Deposits insured by NDIC.</span>
                </motion.p>

                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4">
                    {["Privacy Policy", "Terms & Conditions", "Cookie Policy", "AML/LOFT Disclosure"].map((policy, index) => (
                        <motion.span
                            key={policy}
                            className="hover:underline cursor-pointer text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px]"
                            whileHover={{ scale: 1.05, color: "#0B0844" }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.1 + index * 0.05 }}
                        >
                            {policy}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
            <Stats />
        </section>
    );
};

export default Overview;