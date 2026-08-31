import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import card3 from "/card3.png"
import card2 from "/card2.png"
import card1 from "/card1.png"
import { BsBank } from "react-icons/bs";

const cards = [
    {
        title: "Naira / Debit Card",
        features: [
            "POS & online payments",
            "ATM withdrawals nationwide",
            "Contactless payments",
            "Full control via app",
        ],
        image: card3,
        gradient: "linear-gradient(160deg, #EDE9DF 0%, #50514b 45%,#070707 100%)",
        glowColor: "purple"
    },
    {
        title: "International Debit Card",
        features: [
            "Online forex payments",
            "Travel-ready, chip & PIN",
            "Use anywhere Visa/Mastercard is accepted",
            "Activate international use in-app",
        ],
        image: card2,
        gradient: "linear-gradient(160deg, #DFBB54 0%, #9a813e 45%, #8B5B0B 100%)",
        glowColor: "blue"
    },
    {
        title: "Prepaid Card",
        features: [
            "Great for budget control",
            "Safe for online shopping",
            "Reloadable anytime",
            "No bank account required to gift",
        ],
        image: card1,
        gradient: "linear-gradient(160deg, #B2B2B0 0%, #8d8d8d 45%, #444443 100%)",
        glowColor: "green"
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
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);


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

    // Glow color mappings
    const glowColors = {
        purple: "bg-purple-500/10",
        blue: "bg-blue-500/10",
        green: "bg-green-500/10"
    };

    return (
        <section className="bg-gray py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
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
                    className="text-secondary text-[10px] sm:text-xs font-medium tracking-[0.5em] sm:tracking-[0.7em] mb-2 sm:mb-3"
                >
                    CARDS
                </motion.p>

                {/* Animated heading */}
                <motion.h2
                    variants={itemVariants}
                    className="text-primary text-xl sm:text-2xl md:text-3xl lg:text-6xl font-semibold mb-3 sm:mb-4"
                >
                    A card for every way you pay
                </motion.h2>

                {/* Animated description */}
                <motion.p
                    variants={itemVariants}
                    className="text-primary text-[sm] sm:text-[18px] font-medium md:text-base max-w-xs sm:max-w-lg mx-auto mb-6 sm:mb-8 px-2"
                >
                    From everyday spending to international payments and budgeting,
                    Alert MFB cards give you full control.
                </motion.p>

                {/* Animated button */}
                <motion.button
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex h-10 sm:h-12 items-center rounded-full bg-primary pl-4 sm:pl-6 pr-1.5 sm:pr-2 text-white transition-all duration-300 hover:bg-[#241c52] hover:shadow-xl group"
                >
                    <span className="text-white font-medium tracking-[-0.02em] text-xs sm:text-sm">
                        Order a Card
                    </span>

                    <motion.span
                        className="ml-3 sm:ml-5 flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white"
                        whileHover={{ rotate: 12 }}
                        transition={{ duration: 0.2 }}
                    >
                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-primary" strokeWidth={2.5} />
                    </motion.span>
                </motion.button>

                {/* Cards grid with staggered animations */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-left"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            onHoverStart={() => setHoveredCard(index)}
                            onHoverEnd={() => setHoveredCard(null)}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                            }}
                            transition={{ duration: 0.3 }}
                            className="relative rounded-2xl mt-4 sm:mt-6 p-4 sm:p-5 h-[340px] sm:h-[370px] md:h-[390px] overflow-hidden"
                            style={{
                                background: card.gradient,
                            }}
                        >
                            {/* Title */}
                            <motion.h3
                                whileHover={{ scale: 1.05 }}
                                className="text-white text-sm sm:text-md font-semibold text-right mb-3 sm:mb-5"
                            >
                                {card.title}
                            </motion.h3>
                            {/* Card Image */}
                            <div className="flex justify-center mb-3 sm:mb-4 mt-0 sm:mt-1">
                                <motion.img
                                    src={card.image}
                                    alt={card.title}
                                    animate={
                                        hoveredCard === index
                                            ? {
                                                scale: index === 0 ? 1.3 : 1.3,
                                                x: window.innerWidth < 640 ? 30 : 55,
                                                y: window.innerWidth < 640 ? 40 : 75,
                                                rotate: index === 0 ? 0 : 0,
                                            }
                                            : {
                                                scale: 1,
                                                x: 0,
                                                y: 0,
                                                rotate: 0,
                                            }
                                    }
                                    transition={{
                                        duration: 0.8,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className={`w-4/5 sm:w-3/4 h-auto object-contain mt-4 sm:mt-7.5 ${index === 0
                                            ? "drop-shadow-[0_8px_25px_rgba(168,85,247,0.4)] scale-105"
                                            : index === 1
                                                ? "drop-shadow-[0_8px_25px_rgba(59,130,246,0.4)] scale-105"
                                                : "drop-shadow-[0_8px_25px_rgba(16,185,129,0.4)] scale-105"
                                        }`}
                                    style={{
                                        ...(index === 0 && {
                                            filter: "brightness(1.05) contrast(1.05)",
                                        }),
                                        ...(index === 1 && {
                                            filter: "brightness(1.1) saturate(1.1)",
                                        }),
                                        ...(index === 2 && {
                                            filter: "brightness(1.05) saturate(0.95)",
                                        }),
                                        transformOrigin: "center center",
                                    }}
                                />
                                {[
                                    {
                                        text: "Premium Banking",
                                        color: "border-green-400 text-green-400",
                                    },
                                    {
                                        text: "Worldwide Access",
                                        color: "border-blue-400 text-blue-400",
                                    },
                                    {
                                        text: "Budget Friendly",
                                        color: "border-amber-400 text-amber-400",
                                    },
                                ][index] && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={
                                                hoveredCard === index
                                                    ? {
                                                        opacity: 1,
                                                        y: [0, -6, 0],
                                                    }
                                                    : {
                                                        opacity: 0,
                                                        y: 10,
                                                    }
                                            }
                                            transition={{
                                                opacity: { duration: 0.25 },
                                                y: {
                                                    duration: 2.5,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                },
                                            }}
                                            className={`absolute top-10 sm:top-12 md:top-16 left-3 sm:left-4 md:left-5 z-30 rounded-full bg-white/10 px-2 sm:px-3 py-0.5 sm:py-1 backdrop-blur-md border ${[
                                                "border-white text-white",
                                                "border-white text-white",
                                                "border-white text-white",
                                            ][index]
                                                }`}
                                        >
                                            <span className="text-[7px] sm:text-[8px] md:text-[9px] font-medium uppercase tracking-[0.15em] sm:tracking-[0.2em] flex items-center">
                                                <BsBank className="mr-1 sm:mr-2 text-[8px] sm:text-[10px]" />
                                                {
                                                    [
                                                        "Premium Banking",
                                                        "Worldwide Access",
                                                        "Budget Friendly",
                                                    ][index]
                                                }
                                            </span>
                                        </motion.div>
                                    )}
                            </div>


                            {/* Features */}
                            <motion.ul
                                animate={
                                    hoveredCard === index
                                        ? {
                                            y: -8,
                                        }
                                        : {
                                            y: 0,
                                        }
                                }
                                transition={{ duration: 0.35 }}
                                className={`space-y-0.5 sm:space-y-1 text-white text-[8px] sm:text-[9px] md:text-[10px] leading-3 sm:leading-4 mb-3 sm:mb-5 absolute bottom-2 sm:bottom-3 left-3 sm:left-4 md:left-5 z-20`}
                            >
                                {card.features.map((f) => (
                                    <motion.li
                                        key={f}
                                        variants={featureVariants}
                                        animate={
                                            hoveredCard === index
                                                ? {
                                                    fontWeight: 700,
                                                    x: 1,
                                                }
                                                : {
                                                    fontWeight: 400,
                                                    x: 1,
                                                }
                                        }
                                        transition={{ duration: 0.25 }}
                                    >
                                        • {f}
                                    </motion.li>
                                ))}
                            </motion.ul>

                            {/* Glow Effects - Different for each card */}
                            <motion.div
                                className={`absolute -top-20 -right-20 w-32 sm:w-40 h-32 sm:h-40 ${glowColors[card.glowColor as keyof typeof glowColors]} rounded-full blur-2xl`}
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
                                className={`absolute -bottom-20 -left-20 w-32 sm:w-40 h-32 sm:h-40 ${glowColors[card.glowColor as keyof typeof glowColors]} rounded-full blur-2xl`}
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
                    className="mt-6 sm:mt-8 md:mt-10 bg-white rounded-2xl px-3 sm:px-4 py-3 sm:py-4 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    // whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            // whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                            className="text-center"
                        >
                            <motion.p
                                className="text-primary text-xl sm:text-[40px] md:text-[40px] font-semibold"
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
                                className="text-[#f4a54b] text-[9px] sm:text-[14px] font-normal"
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