import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const cards = [
    {
        title: "Naira / Debit Card",
        features: [
            "POS & online payments",
            "ATM withdrawals nationwide",
            "Contactless payments",
            "Full control via app",
        ],
    },
    {
        title: "International Debit Card",
        features: [
            "Online forex payments",
            "Travel-ready, chip & PIN",
            "Use anywhere Visa/Mastercard is accepted",
            "Activate international use in-app",
        ],
    },
    {
        title: "Prepaid Card",
        features: [
            "Great for budget control",
            "Safe for online shopping",
            "Reloadable anytime",
            "No bank account required to gift",
        ],
    },
];

const stats = [
    { value: 99, label: "Downtime", suffix: "%" },
    { value: 24, label: "Card & Account Support", suffix: "/7" },
    { value: 100, label: "Secure & easy payment", suffix: "%" },
    { value: 99, label: "Compatibility with ATM and POS", suffix: "%" },
];

const Cards = () => {
    const [counts, setCounts] = useState(stats.map(() => 0));
    const statsRef = useRef(null);
    const isInView = useInView(statsRef, { once: true, margin: "-100px" });
    const [hasAnimated, setHasAnimated] = useState(false);

    // Animation for stats counters
    useEffect(() => {
        if (isInView && !hasAnimated) {
            setHasAnimated(true);
            // Animate each stat
            stats.forEach((stat, index) => {
                const target = stat.value;
                const duration = 2000;
                const steps = 60;
                const increment = target / steps;
                let current = 0;
                let step = 0;

                const timer = setInterval(() => {
                    step++;
                    current += increment;
                    if (step >= steps) {
                        current = target;
                        clearInterval(timer);
                    }
                    setCounts(prev => {
                        const newCounts = [...prev];
                        newCounts[index] = Math.round(current);
                        return newCounts;
                    });
                }, duration / steps);
            });
        }
    }, [isInView, hasAnimated]);

    // Variants for animations with proper typing
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

    const cardVariants: Variants = {
        hidden: { opacity: 0, scale: 0.9, y: 30 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const featureVariants: Variants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.3 },
        },
    };

    return (
        <section className="bg-[#eef0f7] py-20 px-6 overflow-hidden">
            <motion.div
                className="max-w-5xl mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                {/* Animated badge */}
                <motion.p
                    variants={itemVariants}
                    className="text-secondary text-xs font-medium tracking-[0.7em] mb-3"
                >
                    CARDS
                </motion.p>

                {/* Animated heading */}
                <motion.h2
                    variants={itemVariants}
                    className="text-primary text-4xl md:text-5xl font-medium mb-4"
                >
                    A card for every way you pay
                </motion.h2>

                {/* Animated description */}
                <motion.p
                    variants={itemVariants}
                    className="text-primary text-sm font-medium md:text-base max-w-md mx-auto mb-8"
                >
                    From everyday spending to international payments and budgeting,
                    Alert MFB cards give you full control.
                </motion.p>

                {/* Animated button */}
                <motion.button
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex h-12 items-center rounded-full bg-primary pl-6 pr-2 text-white transition-all duration-300 hover:bg-[#241c52] hover:shadow-xl group"
                >
                    <span className="text-white font-medium tracking-[-0.02em]">
                        Order a Card
                    </span>

                    <motion.span
                        className="ml-5 flex h-9 w-9 items-center justify-center rounded-full bg-white"
                        whileHover={{ rotate: 12 }}
                        transition={{ duration: 0.2 }}
                    >
                        <ArrowRight className="h-5 w-5 text-primary" strokeWidth={2.5} />
                    </motion.span>
                </motion.button>

                {/* Cards grid with staggered animations */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                            }}
                            transition={{ duration: 0.3 }}
                            className="relative rounded-2xl mt-6 p-6 h-95 flex flex-col justify-between overflow-hidden"
                            style={{
                                background:
                                    "linear-gradient(160deg, #4a3f8a 0%, #2c2560 45%, #150f30 100%)",
                            }}
                        >
                            <motion.h3
                                whileHover={{ scale: 1.05 }}
                                className="text-white text-base text-right font-semibold"
                            >
                                {card.title}
                            </motion.h3>
                            <ul className={`space-y-1.5 ${index < 2 ? 'list-disc list-inside' : ''}`}>
                                {card.features.map((f, idx) => (
                                    <motion.li
                                        key={f}
                                        variants={featureVariants}
                                        custom={idx}
                                        className={`text-white text-shadow text-xs leading-relaxed ${index < 2 ? 'pl-1' : ''
                                            }`}
                                        whileHover={{ x: 5, color: "#ffffff" }}
                                    >
                                        {f}
                                    </motion.li>
                                ))}
                            </ul>

                            {/* Animated glow effect */}
                            <motion.div
                                className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                            <motion.div
                                className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1,
                                }}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats with counters */}
                <motion.div
                    ref={statsRef}
                    className="mt-6 bg-white rounded-2xl shadow-xs px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <motion.p
                                className="text-[#171238] text-2xl md:text-3xl font-medium mb-1"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 100,
                                }}
                            >
                                {stat.label === "Card & Account Support" && stat.value === 24
                                    ? "24/7"
                                    : `${counts[index]}${stat.suffix}`}
                            </motion.p>
                            <motion.p
                                className="text-[#f4a54b] text-xs font-medium"
                                whileHover={{ color: "#d4893a" }}
                            >
                                {stat.label}
                            </motion.p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Cards;