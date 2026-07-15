import { ArrowRight, ArrowRightFromLine } from "lucide-react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { motion } from "framer-motion";
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
    return (
        <div className="w-full bg-white">
            {/* Hero */}
            <section className="max-w-3xl mx-auto text-center px-6 pt-16 pb-10">
                <span className="text-[11px] font-semibold tracking-[0.8em] text-secondary">
                    CURRENT ACCOUNT
                </span>
                <h1 className="mt-3 text-4xl md:text-5xl font-medium text-primary leading-tight">
                    Your everyday money Account
                </h1>
                <p className="mt-4 text-sm text-primary max-w-xl mx-auto leading-relaxed">
                    Get paid, spend, and move money instantly with an account designed
                    for daily life — zero stress, zero hidden fees.
                </p>
                <button className="group mt-6 inline-flex items-center gap-2 rounded-full bg-primary text-white text-sm font-medium pl-6 pr-2 py-2 hover:opacity-90 transition-all duration-300">
                    <span>Open Current Account</span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white group-hover:translate-x-0.5 transition-transform duration-300">
                        <ArrowRight className="w-3.5 h-3.5 text-primary" />
                    </span>
                </button>
            </section>

            {/* Steps overview */}
            <section className="max-w-4xl mx-auto px-6">
                <div className="grid grid-cols-3 gap-4">
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center justify-center gap-3 rounded-3xl bg-[#EDEDF5AD] p-8 py-8 px-4 text-center"
                        >
                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-200 border border-white shadow-lg">
                                <step.icon className="w-4 h-4 text-[#141B4D]" />
                            </div>
                            <span className="text-xs font-medium text-[#141B4D]">
                                {step.label}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="mt-10">
                    <h2 className="text-lg font-semibold text-primary">
                        Open your account in 3 steps
                    </h2>
                    <p className="mt-2 text-sm primary leading-relaxed max-w-3xl">
                        Click "Open Current Account" and select Current Account as your
                        account type. Provide your BVN for instant verification, then
                        complete your personal and contact details. Upload your ID and
                        utility bill, review your details, and submit. You'll get a
                        reference number instantly.
                    </p>
                </div>
            </section>

            {/* Who can open an account */}
            <section className="max-w-5xl mx-auto px-6 mt-10">
                <div
                    className="rounded-xl p-8 md:p-15"
                    style={{
                        background:
                            "linear-gradient(120deg, #17143F 0%, #4B428E 55%, #7A70C2 100%)",
                    }}
                >
                    <h3 className="text-white text-2xl font-semibold mb-5">
                        Who can Open an account?
                    </h3>
                    <ul className="mt-2 p-5 space-y-3">
                        {eligibility.map((item, i) => (
                            <li
                                key={i}
                                className="flex items-start gap-2 text-sm text-white/85 leading-relaxed"
                            >
                                <span className="mt-1.5 h-1 w-1 rounded-full bg-white/70 shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Goldbucks banner */}
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative mx-auto mt-16 max-w-5xl px-4"
            >
                <motion.div
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#F6C568] to-[#C57A2E]"
                >
                    <div className="flex h-[280px] items-center justify-between sm:h-[300px]">
                        {/* Phone Mockup - Left */}
                        <motion.div
                            initial={{ x: -50, opacity: 0, rotate: -5 }}
                            whileInView={{ x: 0, opacity: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                delay: 0.8,
                                type: "spring",
                                stiffness: 100,
                            }}
                            className="hidden h-full items-center pl-8 sm:flex lg:pl-12"
                        >
                            <img
                                src="/mockupNobg.png"
                                alt="Goldbucks App Mockup"
                                className="pointer-events-none mt-5 mr-8 h-[calc(90%+3rem)] w-auto object-contain"
                            />
                        </motion.div>

                        {/* Text - Right */}
                        <div className="flex h-full max-w-md flex-col justify-between px-8 py-8 sm:px-12 sm:py-10">
                            <div>
                                <motion.h3
                                    initial={{ x: 20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="text-2xl font-semibold text-white"
                                >
                                    Everything Included By Default
                                </motion.h3>

                                <motion.p
                                    initial={{ x: 20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="mt-4 text-sm leading-relaxed text-white/85"
                                >
                                   Free Naira debit card, Internet & Mobile banking, Instant transfers, Bill payments, CBN-Licensed protection, Customer Support
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
                                    className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-white px-5 py-2.5 text-xs font-medium text-secondary hover:bg-gray-50"
                                >
                                    <IoLogoApple size={20} />
                                    Get on iPhone
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
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