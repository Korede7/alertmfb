import { ArrowRight, ArrowRightFromLine } from "lucide-react";
import { motion } from "framer-motion";

const SavingsAccount = () => {
    const features = [
        {
            icon: ArrowRightFromLine,
            title: "Competitive Interest Rate",
            description: "Earn up to 8.5% p.a. on your savings"
        },
        {
            icon: ArrowRightFromLine,
            title: "Mobile App Control",
            description: "Full control from the Alert MFB app"
        },
        {
            icon: ArrowRightFromLine,
            title: "Instant Access, No lock in",
            description: "Withdraw your money anytime, no penalties"
        }
    ];

    const eligibility = [
        "Individuals, students and master traders aged 18+",
        "Minors can be enrolled via a guardian-operated account",
        "No minimum income requirement",
        "Valid BVN and means of ID"
    ];

    return (
        <div className="w-full bg-white">
            {/* Hero Section */}
            <section className="max-w-3xl mx-auto text-center px-6 pt-16 pb-10">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-[11px] font-semibold tracking-[10px] text-secondary inline-block"
                >
                    SAVINGS ACCOUNT
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="mt-3 text-4xl md:text-6xl font-semibold text-primary leading-tight"
                >
                    Earn While You Save
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mt-4 text-sm text-primary max-w-xl mx-auto leading-relaxed"
                >
                    A simple savings account with a competitive interest rate, instant access, and full control from the Alert MFB app.
                </motion.p>
                <motion.button
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group mt-6 inline-flex items-center gap-2 rounded-full bg-primary text-white text-sm font-medium pl-6 pr-2 py-2 hover:opacity-90 transition-all duration-300"
                >
                    <span>Open Savings Account</span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white group-hover:translate-x-0.5 transition-transform duration-300">
                        <ArrowRight className="w-3.5 h-3.5 text-primary" />
                    </span>
                </motion.button>
            </section>

            {/* Why customers choose this account */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="max-w-4xl mx-auto px-6 mt-10"
            >
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-semibold text-primary mb-4"
                >
                    Why customers choose this account
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-sm text-primary leading-relaxed max-w-3xl mb-8"
                >
                    Click "Open Current Account" and select Current Account as your account type. Provide your BVN for instant verification, then complete your personal and contact details. Upload your ID and utility bill, review your details, and submit. You'll get a reference number instantly.
                </motion.p>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            whileHover={{ y: -4, transition: { duration: 0.3 } }}
                            className="flex flex-col items-center justify-center gap-3 rounded-3xl bg-gray p-8 py-8 px-4 text-center"
                        >
                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-300 border border-white text-primary shadow-lg">
                                <feature.icon className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="text-sm font-semibold text-[#141B4D]">
                                {feature.title}
                            </h3>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>

            {/* Who can Open an account */}
            <motion.section
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="max-w-5xl mx-auto px-6 mt-16"
            >
                <div
                    className="rounded-xl p-8 md:p-15 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                    style={{
                        background:
                            "linear-gradient(120deg, #0e0c2d 0%, #282353 55%, #7A70C2 100%)",
                    }}
                >
                    {/* Left side - Text content */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-white text-2xl font-semibold mb-5"
                        >
                            Who can Open an account?
                        </motion.h3>
                        <motion.ul
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.1
                                    }
                                }
                            }}
                            className="mt-2 p-5 space-y-3"
                        >
                            {eligibility.map((item, i) => (
                                <motion.li
                                    key={i}
                                    variants={{
                                        hidden: { opacity: 0, x: -20 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                    whileHover={{ x: 6, transition: { duration: 0.2 } }}
                                    className="flex items-start gap-2 text-sm text-white/85 leading-relaxed"
                                >
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.3,
                                            delay: i * 0.05,
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

                    {/* Right side - Image */}
                    <div className="flex justify-center items-center">

                        <img
                            src="/group.png"
                            className="w-full  object-cover"
                        />
                    </div>
                </div>
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="max-w-5xl mx-auto px-6 mt-12"
            >
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 rounded-[22px] bg-white px-8 py-8 md:px-12 " 
                style={{
                    boxShadow: "0 4px 16px 0 rgba(8, 27, 51, 0.05)"
                }}>

                    {/* Left */}
                    <div>
                        <p className="text-[10px] font-medium tracking-[0.8em] uppercase text-secondary">
                            Current Rate
                        </p>

                        <div className="mt-3 flex items-end gap-2">
                            <h2 className="text-xl md:text-3xl leading-none font-medium text-primary">
                                8.5%
                            </h2>

                            <span className="mb-2 text-xl font-semibold text-primary">
                                p.a.
                            </span>
                        </div>

                        <p className="mt-3 text-[12px] text-[#69738F]">
                            Interest is calculated daily and credited automatically every
                            month.
                        </p>
                    </div>

                    {/* Right */}
                    <motion.button
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group mt-6 inline-flex items-center gap-2 rounded-full bg-secondary text-white text-sm font-medium pl-6 pr-2 py-2 hover:opacity-90 transition-all duration-300"
                    >
                        <span>Calculate My Growth</span>
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white group-hover:translate-x-0.5 transition-transform duration-300">
                            <ArrowRight className="w-3.5 h-3.5 text-secondary" />
                        </span>
                    </motion.button>
                </div>
            </motion.section>

            {/* Spacer for bottom */}
            <div className="h-20" />
        </div>
    );
};

export default SavingsAccount;