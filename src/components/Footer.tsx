import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { IoIosMailOpen, IoLogoApple } from "react-icons/io";
import { motion } from "framer-motion";
import { FiFacebook } from "react-icons/fi";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const personalBanking = [
    "Current Account",
    "Savings Account",
    "Fixed Deposit",
    "Kolo Savings",
    "Cards",
];

const businessLoans = [
    "Business Banking",
    "Loans",
    "Apply for a Loan",
    "Calculations",
    "Digital Banking",
];

const company = ["About Us", "Leadership", "Careers", "News & Blog", "Contact Us"];

const getTheApp = ["App Store", "Google Play"];

const legal = ["Privacy Policy", "Regulatory Disclosures"];

const bottomLinks = ["Privacy", "Terms", "Cookies", "NDIC", "AML/CFT"];

const socials = [FaXTwitter, FaInstagram, FiFacebook, FaLinkedinIn];

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut" as const,
        },
    },
};

const bannerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut" as const,
        },
    },
};

const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut" as const,
        },
    },
};

const subscribeVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut" as const,
        },
    },
};

const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.3,
            ease: "easeOut" as const,
        },
    },
};

const FooterColumn = ({ title, items }: { title: string; items: string[] }) => (
    <motion.div variants={itemVariants}>
        <h4 className="text-sm font-semibold tracking-wide text-primary mb-4">
            {title.toUpperCase()}
        </h4>
        <ul className="flex flex-col gap-3">
            {items.map((item) => (
                <motion.li
                    key={item}
                    whileHover={{ x: 5 }}
                    className="text-sm text-primary hover:text-[#181A52] cursor-pointer transition-colors"
                >
                    {item}
                </motion.li>
            ))}
        </ul>
    </motion.div>
);

const Footer = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="w-full bg-white px-6 py-10"
        >
            <div className="max-w-6xl mx-auto">
                {/* Purple gradient banner */}
                <motion.div
                    variants={bannerVariants}
                    className="relative mb-16 h-[400px] overflow-hidden rounded-[28px]"
                    style={{
                        background:
                            "linear-gradient(180deg, #52449D 0%, #2A1F5C 55%, #171033 100%)",
                    }}
                >
                    {/* Top Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff20_0%,transparent_60%)]" />

                    {/* Decorative Cards */}
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="absolute left-16 bottom-0 h-30 w-30 rounded-t-xl bg-white/5 backdrop-blur-sm"
                    />

                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                        className="absolute left-[28%] top-6 h-30 w-30 rounded-xl bg-white/5 backdrop-blur-sm"
                    />

                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                        className="absolute right-[28%] top-6 h-30 w-30 rounded-xl bg-white/5 backdrop-blur-sm"
                    />

                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
                        className="absolute right-16 bottom-0 h-30 w-30 rounded-t-xl bg-white/5 backdrop-blur-sm"
                    />

                    {/* Center Glow */}
                    <div className="absolute left-1/2 top-20 h-48 w-[500px] -translate-x-1/2 rounded-full bg-[#6A59C8]/20 blur-3xl" />

                    {/* Content */}
                    <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
                        <h2 className="text-4xl font-semibold text-white md:text-5xl">
                            Bank Smart, Bank Alert.
                        </h2>

                        <p className="mt-3 max-w-lg text-sm text-white/70">
                            Everything you need to move, save and grow your money, in one app.
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <button className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1A1240] transition hover:scale-105">
                                <IoLogoApple className="h-6 w-6 text-primary" />
                                Get on iPhone
                            </button>

                            <button className="flex items-center gap-2 rounded-full border border-white/50 bg-transparent px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10">
                                <IoLogoGooglePlaystore className="h-6 w-6 text-white" />
                                Get on Android
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Heading + subscribe */}
                <motion.div
                    variants={containerVariants}
                    className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10"
                >
                    <motion.div variants={headerVariants}>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-[30px] font-medium text-primary mb-5"
                        >
                            Let&apos;s Build Your Financial Future
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="text-xs font-medium text-primary tracking-[0.5px]"
                        >
                            By subscribing, you agree to receive communications from Alert MFB
                            and accept the{" "}
                            <span className="underline cursor-pointer">Privacy Policy</span>.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        variants={subscribeVariants}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center bg-gray rounded-full pl-1 pr-1 py-1 w-full max-w-[400px] shadow-sm"
                    >
                        <span className="rounded-full bg-primary p-2.5 ml-0.5">
                            <IoIosMailOpen size={16} className="text-white" />
                        </span>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="outline-none text-sm text-primary placeholder:text-gray-400 flex-1 min-w-0 px-2"
                        />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-[#6d61e0] transition-colors whitespace-nowrap mr-0.5"
                        >
                            Subscribe
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Links grid */}
                <motion.div
                    variants={containerVariants}
                    className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-10"
                >
                    {/* Brand column */}
                    <motion.div variants={itemVariants} className="col-span-2 md:col-span-1">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center gap-2 mb-8"
                        >
                            <div className="w-8 h-8 rounded-full flex">
                                <img src="/logo3.png" className="h-7 w-10" alt="" />
                            </div>
                            <div className="ml-1">
                                <p className="text-primary font-medium text-md leading-none">
                                    Alert MFB
                                </p>
                                <p className="text-[8px] tracking-wide text-primary leading-none tracking-[0.4em] mt-1">
                                    BANK SMART, BANK ALERT
                                </p>
                            </div>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-xs primary leading-relaxed mb-4"
                        >
                            Empowering Nigerians, one account at a time. Licensed by the
                            Central Bank of Nigeria.
                        </motion.p>
                        <motion.div
                            variants={containerVariants}
                            className="flex items-center gap-2 mt-2"
                        >
                            {socials.map((Icon, i) => (
                                <motion.span
                                    key={i}
                                    variants={socialVariants}
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-8 h-8 rounded-full bg-[#F3F3F8] flex items-center justify-center text-[#181A52] cursor-pointer hover:bg-[#e9e9f2] transition-colors"
                                >
                                    <Icon size={13} />
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>

                    <FooterColumn title="Personal Banking" items={personalBanking} />
                    <FooterColumn title="Business & Loans" items={businessLoans} />
                    <FooterColumn title="Company" items={company} />
                    <div>
                        <FooterColumn title="Get The App" items={getTheApp} />
                        <div className="mt-5">
                            <FooterColumn title="Legal" items={legal} />
                        </div>
                    </div>
                </motion.div>

                {/* Bottom bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="border-t border-primary pt-5 flex flex-col md:flex-row items-center justify-between gap-3"
                >
                    <p className="text-xs text-primary">
                        © 2026 Alert Microfinance Bank Limited. All rights reserved.
                    </p>
                    <div className="flex items-center gap-5">
                        {bottomLinks.map((link) => (
                            <motion.span
                                key={link}
                                whileHover={{ y: -2 }}
                                className="text-xs text-primary hover:text-[#181A52] cursor-pointer transition-colors"
                            >
                                {link}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Footer;