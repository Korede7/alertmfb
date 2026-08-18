import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView, type Variants } from "framer-motion";

const awards = [
    {
        date: "January 25th, 2026",
        title: "BEST MFB IN WEST AFRICA",
        subtitle: "Ndifreke Awards 2026",
        image: "/award1.jpg",
    },
    {
        date: "January 25th, 2026",
        title: "MOST DISCIPLINED BANK",
        subtitle: "Global Insurance Awards 2024",
        image: "/getstarted.jpg",
    },
    {
        date: "January 25th, 2024",
        title: "BANK WITH HIGHEST LOAN DISBURSED",
        subtitle: "Network Funding Awards 2024",
        image: "/getstarted2.jpg",
    },
];

// Scroll animation variants
const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
            duration: 0.8, 
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
        opacity: 1, 
        x: 0,
        transition: { 
            duration: 0.8, 
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
        opacity: 1, 
        x: 0,
        transition: { 
            duration: 0.8, 
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        }
    }
};

const itemFadeIn: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
            duration: 0.6, 
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

const imageScaleVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
        scale: 1, 
        opacity: 1,
        transition: { 
            duration: 0.7, 
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

const Awards = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { 
        once: true, 
        amount: 0.1,
        margin: "-50px"
    });

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return (
        <motion.div 
            ref={ref}
            initial="hidden"
            animate={controls}
            className="w-full bg-white py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-10 lg:px-16"
        >
            <div className="max-w-5xl mx-auto">

                {/* Eyebrow + Heading + Subtext */}
                <motion.div 
                    variants={staggerContainer}
                    className="flex flex-col items-center text-center mb-10 sm:mb-14"
                >
                    <motion.p 
                        variants={fadeInUp}
                        className="text-[9px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.4em] mb-3 sm:mb-4 text-secondary"
                    >
                        AWARDS &amp; RECOGNITIONS
                    </motion.p>

                    <motion.h1 
                        variants={fadeInUp}
                        className="text-xl sm:text-4xl md:text-3xl font-semibold leading-tight text-primary mb-3 sm:mb-4"
                    >
                        What the Industry says about us
                    </motion.h1>

                    <motion.p 
                        variants={fadeInUp}
                        className="text-xs sm:text-sm leading-relaxed max-w-md text-primary"
                    >
                        Recognition we&apos;re proud of — but less proud of than what our customers say.
                    </motion.p>
                </motion.div>

                {/* Awards list + Image */}
                <motion.div 
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-start"
                >
                    {/* Left: awards list */}
                    <motion.div 
                        variants={fadeInLeft}
                        className="min-w-0"
                    >
                        {awards.map((award, index) => {
                            const isActive = index === activeIndex;

                            return (
                                <motion.button
                                    key={award.title}
                                    variants={itemFadeIn}
                                    type="button"
                                    onClick={() => setActiveIndex(index)}
                                    whileHover={{ 
                                        x: 8,
                                        transition: { duration: 0.2 }
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`
                                        w-full text-left
                                        grid grid-cols-[70px_1fr] sm:grid-cols-[90px_1fr]
                                        gap-3 sm:gap-6
                                        py-4 sm:py-5
                                        border-b
                                        cursor-pointer
                                        transition-opacity duration-300
                                        ${index === 0 ? "border-primary/10" : "border-primary/5"}
                                    `}
                                >
                                    <motion.span
                                        animate={{
                                            color: isActive ? "#0B0844" : "#d1d5db",
                                            scale: isActive ? 1.05 : 1,
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className={`
                                            text-[10px] sm:text-xs leading-snug pt-1
                                        `}
                                    >
                                        {award.date}
                                    </motion.span>

                                    <div>
                                        <motion.h3
                                            animate={{
                                                color: isActive ? "#0B0844" : "#d1d5db",
                                                scale: isActive ? 1.02 : 1,
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className={`
                                                text-lg sm:text-2xl md:text-[26px] font-medium leading-tight mb-1
                                            `}
                                        >
                                            {award.title}
                                        </motion.h3>
                                        <motion.p
                                            animate={{
                                                color: isActive ? "#D98A0E" : "#d1d5db",
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className={`
                                                text-[10px] sm:text-xs tracking-wide
                                            `}
                                        >
                                            {award.subtitle}
                                        </motion.p>
                                    </div>
                                </motion.button>
                            );
                        })}
                    </motion.div>

                    {/* Right: award image (swaps with active selection) */}
                    <motion.div 
                        variants={fadeInRight}
                        className="w-full md:w-[180px] lg:w-[210px] shrink-0 justify-self-center md:justify-self-end"
                    >
                        <motion.div 
                            variants={imageScaleVariants}
                            whileHover={{ 
                                scale: 1.03,
                                rotate: 1,
                                transition: { duration: 0.3 }
                            }}
                            className="rounded-2xl overflow-hidden aspect-[3/4] w-full bg-slate-900 relative shadow-2xl"
                        >
                            {awards.map((award, index) => (
                                <motion.img
                                    key={award.image}
                                    src={award.image}
                                    alt={award.title}
                                    initial={false}
                                    animate={{
                                        opacity: index === activeIndex ? 1 : 0,
                                        scale: index === activeIndex ? 1 : 0.95,
                                    }}
                                    transition={{ 
                                        duration: 0.5, 
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                    className={`
                                        absolute inset-0 w-full h-full object-cover
                                    `}
                                />
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Awards;