import { ArrowRight, ArrowRightFromLine } from "lucide-react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { easeOut, motion } from "framer-motion";
import { IoLogoApple } from "react-icons/io";
import { FaArrowDownUpLock } from "react-icons/fa6";

const steps = [
    { label: "Start Your Application", icon: ArrowRightFromLine },
    { label: "Verify Your Identity", icon: FaArrowDownUpLock },
    { label: "Upload documents & submit", icon: ArrowRightFromLine },
];

const eligibility = [
    "Nigerian residents aged 18+",
    "Valid means of Identification (NIN, Voter's Card, Driver's Licence, or International Passport)",
    "Valid Bank Verification Number (BVN)",
];

const CurrentAccount = () => {
    // Animation variants with proper TypeScript types
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: easeOut,
            },
        },
    };

    const fadeLeftVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: easeOut,
            },
        },
    };

    const scaleVariants = {
        hidden: { opacity: 0, scale: 0.92 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: easeOut,
            },
        },
    };

    const staggerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: easeOut,
            },
        },
    };

    return (
        <div className="w-full bg-white overflow-hidden">
            {/* Hero */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
                className="max-w-3xl mx-auto text-center px-6 pt-16 pb-10"
            >
                <motion.span
                    variants={fadeUpVariants}
                    className="text-[11px] font-semibold tracking-[0.8em] text-secondary inline-block"
                >
                    CURRENT ACCOUNT
                </motion.span>
                <motion.h1
                    variants={fadeUpVariants}
                    className="mt-3 text-2xl md:text-5xl font-medium text-primary leading-tight"
                >
                    Your everyday money Account
                </motion.h1>
                <motion.p
                    variants={fadeUpVariants}
                    className="mt-4 text-sm text-primary max-w-xl mx-auto leading-relaxed"
                >
                    Get paid, spend, and move money instantly with an account designed
                    for daily life — zero stress, zero hidden fees.
                </motion.p>
                <motion.button
                    variants={fadeUpVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group mt-6 inline-flex items-center gap-2 rounded-full bg-primary text-white text-sm font-medium pl-6 pr-2 py-2 hover:opacity-90 transition-all duration-300"
                >
                    <span>Open Current Account</span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white group-hover:translate-x-0.5 transition-transform duration-300">
                        <ArrowRight className="w-3.5 h-3.5 text-primary" />
                    </span>
                </motion.button>
            </motion.section>

            {/* Steps overview */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
                className="max-w-4xl mx-auto px-6"
            >
                <motion.div
                    variants={staggerVariants}
                    className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4"
                >
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            whileHover={{
                                y: -6,
                                transition: { duration: 0.3, ease: "easeOut" },
                            }}
                            className="flex flex-col items-center justify-center gap-3 rounded-3xl bg-gray p-8 py-8 px-4 text-center cursor-default"
                        >
                            <motion.div
                                whileHover={{
                                    scale: 1.1,
                                    rotate: [0, -5, 5, 0],
                                    transition: { duration: 0.5 },
                                }}
                                className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-300 border border-white text-primary shadow-lg"
                            >
                                <step.icon className="w-4 h-4 text-[#141B4D]" />
                            </motion.div>
                            <span className="text-xs font-medium text-[#141B4D]">
                                {step.label}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                    className="mt-10"
                >
                    <motion.h2
                        variants={fadeUpVariants}
                        className="text-lg font-semibold text-primary"
                    >
                        Open your account in 3 steps
                    </motion.h2>
                    <motion.p
                        variants={fadeUpVariants}
                        className="mt-2 text-sm primary leading-relaxed max-w-3xl"
                    >
                        Click "Open Current Account" and select Current Account as your
                        account type. Provide your BVN for instant verification, then
                        complete your personal and contact details. Upload your ID and
                        utility bill, review your details, and submit. You'll get a
                        reference number instantly.
                    </motion.p>
                </motion.div>
            </motion.section>

            {/* Who can open an account */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
                className="max-w-5xl mx-auto px-6 mt-10">
                <motion.div
                    variants={scaleVariants}
                    whileHover={{
                        scale: 1.01,
                        boxShadow: "0 20px 60px rgba(23, 20, 63, 0.2)",
                        transition: { duration: 0.4 },
                    }}
                    className="rounded-xl p-8 md:p-10 lg:p-12 transition-all duration-300"
                    style={{
                        background:
                            "linear-gradient(120deg, #0f0d32 0%, #282353 55%, #7A70C2 100%)",
                    }} >
                    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center max-w-5xl mx-auto">
                        <div>
                            <motion.h3
                                variants={fadeLeftVariants}
                                className="text-white text-2xl font-semibold mb-5"
                            >
                                Who can Open an account?
                            </motion.h3>
                            <motion.ul
                                variants={staggerVariants}
                                className="mt-2 p-5 space-y-3"
                            >
                                {eligibility.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        variants={itemVariants}
                                        whileHover={{
                                            x: 6,
                                            transition: { duration: 0.2 },
                                        }}
                                        className="flex items-start gap-2 text-sm text-white/85 leading-relaxed"
                                    >
                                        <motion.span
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.3,
                                                delay: i * 0.1,
                                                type: "spring",
                                                stiffness: 300,
                                            }}
                                            className="mt-1.5 h-1 w-1 rounded-full bg-white/70 shrink-0"
                                        />
                                        <span>{item}</span>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </div>

                        <div className="flex items-center justify-center">
                            <div className="w-full min-h-[220px] md:min-h-[280px] flex items-center justify-center p-6 text-center">
                                <div>
                                    <img src="/group.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.section>

            {/* Goldbucks banner */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
                className="relative mx-auto mt-16 max-w-5xl px-4"
            >
                <motion.div
                    variants={scaleVariants}
                    whileHover={{
                        scale: 1.01,
                        boxShadow: "0 30px 80px rgba(198, 122, 46, 0.2)",
                        transition: { duration: 0.5 },
                    }}
                    className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#F6C568] to-[#C57A2E] transition-all duration-300"
                >
                    <div className="flex h-[280px] items-center justify-between sm:h-[300px]">
                        {/* Phone Mockup - Left */}
                        <motion.div
                            initial={{ x: -80, opacity: 0, rotate: -8 }}
                            whileInView={{ x: 0, opacity: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.9,
                                delay: 0.3,
                                type: "spring",
                                stiffness: 80,
                                damping: 15,
                            }}
                            
                            className="hidden h-full items-center pl-8 sm:flex lg:pl-12" >
                            <img
                                src="/group2.png"
                                alt="Goldbucks App Mockup"
                                className="pointer-events-none mt-18 mr-8 h-[calc(90%+3rem)] w-auto object-contain"
                            />
                        </motion.div>

                        {/* Text - Right */}
                        <div className="flex h-full max-w-md flex-col justify-between px-8 py-8 sm:px-12 sm:py-10">
                            <div>
                                <motion.h3
                                    initial={{ x: 30, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.2,
                                        ease: [0.33, 1, 0.68, 1],
                                    }}
                                    className="text-2xl font-semibold text-white"
                                >
                                    Everything Included By Default
                                </motion.h3>

                                <motion.p
                                    initial={{ x: 30, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.35,
                                        ease: [0.33, 1, 0.68, 1],
                                    }}
                                    className="mt-4 text-sm leading-relaxed text-white/85"
                                >
                                    Free Naira debit card, Internet & Mobile banking, Instant transfers, Bill payments, CBN-Licensed protection, Customer Support
                                </motion.p>
                            </div>

                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.5,
                                    ease: [0.33, 1, 0.68, 1],
                                }}
                                className="flex flex-nowrap items-center gap-3"
                            >
                                <motion.button
                                    whileHover={{
                                        scale: 1.06,
                                        y: -3,
                                        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 17,
                                    }}
                                    className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-white px-5 py-2.5 text-xs font-medium text-secondary hover:bg-gray-50"
                                >
                                    <IoLogoApple size={20} />
                                    Get on iPhone
                                </motion.button>

                                <motion.button
                                    whileHover={{
                                        scale: 1.06,
                                        y: -3,
                                        backgroundColor: "rgba(255,255,255,0.2)",
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 17,
                                    }}
                                    className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-white/60 px-5 py-2.5 text-xs font-medium text-white hover:bg-white/10"
                                >
                                    <IoLogoGooglePlaystore size={20} />
                                    Get on Android
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default CurrentAccount;