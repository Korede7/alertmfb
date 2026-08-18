import { ArrowRight, ArrowRightFromLine } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const OurPurpose = () => {
    const [headerInView, setHeaderInView] = useState(false);
    const [missionInView, setMissionInView] = useState(false);
    const [valuesInView, setValuesInView] = useState(false);
    const [ctaInView, setCtaInView] = useState(false);

    const headerRef = useRef(null);
    const missionRef = useRef(null);
    const valuesRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target === headerRef.current) {
                        setHeaderInView(entry.isIntersecting);
                    }
                    if (entry.target === missionRef.current) {
                        setMissionInView(entry.isIntersecting);
                    }
                    if (entry.target === valuesRef.current) {
                        setValuesInView(entry.isIntersecting);
                    }
                    if (entry.target === ctaRef.current) {
                        setCtaInView(entry.isIntersecting);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        if (headerRef.current) observer.observe(headerRef.current);
        if (missionRef.current) observer.observe(missionRef.current);
        if (valuesRef.current) observer.observe(valuesRef.current);
        if (ctaRef.current) observer.observe(ctaRef.current);

        return () => observer.disconnect();
    }, []);

    // Animation variants with proper types
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut" as const
            }
        }
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -60 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut" as const
            }
        }
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 60 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut" as const
            }
        }
    };

    const scaleUp = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: "easeOut" as const
            }
        }
    };

    const staggerChildren = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const childFadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const
            }
        }
    };

    return (
        <div className="w-full bg-white flex justify-center py-10 pt-20 sm:py-16 sm:pt-24 lg:py-20 lg:pt-28">
            <div className="w-full max-w-4xl px-6">
                {/* Header */}
                <motion.div
                    ref={headerRef}
                    initial="hidden"
                    animate={headerInView ? "visible" : "hidden"}
                    variants={fadeInUp}
                    className="text-center mb-8"
                >
                    <motion.p
                        variants={childFadeUp}
                        className="text-sm font-medium tracking-[0.4em] mb-3 text-secondary mb-4"
                    >
                        OUR PURPOSE
                    </motion.p>
                    <motion.h1
                        variants={childFadeUp}
                        className="text-lg sm:text-5xl leading-4 font-semibold mb-3 text-primary mb-5"
                    >
                        Mission. Vision. Values.
                    </motion.h1>
                    <motion.p
                        variants={childFadeUp}
                        className="text-xs sm:text-sm text-primary"
                    >
                        Not on a wall. In every decision we make.
                    </motion.p>
                </motion.div>

                {/* Mission / Vision cards */}
                <motion.div
                    ref={missionRef}
                    initial="hidden"
                    animate={missionInView ? "visible" : "hidden"}
                    variants={staggerChildren}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 max-w-3xl mx-auto pt-10"
                >
                    {/* Mission */}
                    <motion.div
                        variants={fadeInLeft}
                        whileHover={{
                            y: -8,
                            boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                            transition: { duration: 0.3 },
                        }}
                        className="bg-white shadow-lg p-5 rounded-2xl transition-all duration-300"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="bg-gray rounded-2xl h-[140px] flex flex-col items-center justify-center mb-10"
                        >
                            <motion.span
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-300 border border-white text-primary shadow-lg mb-5"
                            >
                                <ArrowRightFromLine size={16} className="sm:w-5 sm:h-5" />
                            </motion.span>

                            <span className="text-[10px] text-gray-400">
                                Start Your Application
                            </span>
                        </motion.div>
                        <motion.h3
                            variants={childFadeUp}
                            className="text-2xl font-semibold mb-3"
                        >
                            Our Mission
                        </motion.h3>
                        <motion.p
                            variants={childFadeUp}
                            className="text-[10px] leading-snug text-primary"
                        >
                            To make honest, accessible banking the everyday reality for
                            Nigerians — not the exception. We measure success by how many
                            people we serve well, not just how many people we serve.
                        </motion.p>
                    </motion.div>

                    {/* Vision */}
                    <motion.div
                        variants={fadeInRight}
                        whileHover={{
                            y: -8,
                            boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                            transition: { duration: 0.3 },
                        }}
                        className="bg-white shadow-lg p-5 rounded-2xl transition-all duration-300"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="bg-gray rounded-2xl h-[140px] flex flex-col items-center justify-center mb-10"
                        >
                            <motion.span
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-300 border border-white text-primary shadow-lg mb-5"
                            >
                                <ArrowRightFromLine size={16} className="sm:w-5 sm:h-5" />
                            </motion.span>
                            <span className="text-[10px] text-gray-400">
                                Start Your Application
                            </span>
                        </motion.div>
                        <motion.h3
                            variants={childFadeUp}
                            className="text-2xl font-semibold mb-3"
                        >
                            Our Vision
                        </motion.h3>
                        <motion.p
                            variants={childFadeUp}
                            className="text-[10px] leading-snug text-primary"
                        >
                            To be the most trusted microfinance bank in Nigeria by 2030 —
                            known for digital innovation, genuine care, and a product range
                            that grows with every customer at every stage of life.
                        </motion.p>
                    </motion.div>
                </motion.div>

                {/* Core Values */}
                <motion.div
                    ref={valuesRef}
                    initial="hidden"
                    animate={valuesInView ? "visible" : "hidden"}
                    variants={scaleUp}
                    className="mb-6 w-full overflow-hidden rounded-2xl bg-gradient-to-r from-[#0B0844] to-[#473E82] px-4 pt-5 sm:px-5 sm:pt-8 max-w-3xl mx-auto"
                >
                    <motion.h3
                        variants={childFadeUp}
                        className="mb-4 text-center text-sm font-medium text-white sm:mb-5 sm:text-base"
                    >
                        Our Core Values
                    </motion.h3>

                    <motion.div
                        variants={staggerChildren}
                        className="mx-auto grid h-[125px] w-full max-w-[500px] grid-cols-[0.75fr_1.03fr_1.28fr_0.64fr_0.87fr] items-end gap-2.5 sm:h-[127px]"
                    >
                        {[
                            { label: "Integrity", h: 107 },
                            { label: "Transparency", h: 127 },
                            { label: "Customer Priority", h: 107 },
                            { label: "Ethics", h: 127 },
                            { label: "Excellence", h: 107 },
                        ].map((item) => (
                            <motion.div
                                key={item.label}
                                variants={childFadeUp}
                                whileHover={{
                                    scale: 1.08,
                                    y: -5,
                                    transition: { duration: 0.2 },
                                }}
                                className="flex min-w-0 items-start justify-center rounded-t-xl px-1 pt-5"
                                style={{
                                    height: `${item.h}px`,
                                    background:
                                        "linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.35) 45%, rgba(255,255,255,0.08) 100%)",
                                }}
                            >
                                <span className="text-center text-[9px] font-medium leading-tight text-[#0B0844] sm:text-[10px]">
                                    {item.label}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    ref={ctaRef}
                    initial="hidden"
                    animate={ctaInView ? "visible" : "hidden"}
                    variants={fadeInUp}
                    whileHover={{
                        boxShadow: "0 8px 40px rgba(0,0,0,0.1)",
                        transition: { duration: 0.3 },
                    }}
                    className="
        flex flex-col sm:flex-row
        items-stretch sm:items-center
        justify-between
        gap-5 sm:gap-6
        rounded-2xl
        p-5 sm:p-5 md:p-6
        bg-white
        shadow-[0_2px_20px_rgba(0,0,0,0.06)]
        w-full
        max-w-3xl
        mx-auto
    "
                >
                    <motion.div
                        variants={childFadeUp}
                        className="min-w-0 flex-1"
                    >
                        <motion.p
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                            className=" text-[9px] sm:text-[10px] font-semibold tracking-[0.25em] sm:tracking-[0.40em] mb-1 text-secondary"
                        >
                            JOIN 100,000 NIGERIANS
                        </motion.p>

                        <motion.h4
                            className="text-base sm:text-lg md:text-xl font-bold tracking-[0.02em] mb-2 sm:mb-3 leading-snug text-primary"
                        >
                            Bank with people who want
                            <br className="" />
                            <span className="sm:inline"> the best for you.</span>
                        </motion.h4>

                        <p className="text-[9px] sm:text-[10px] text-gray-400">
                            Bank Smart, Bank Alert.
                        </p>
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className=" group shrink-0 self-start sm:self-center mt-0 inline-flex items-center justify-center gap-2 rounded-full bg-secondary text-white text-xs sm:text-sm font-medium pl-5 sm:pl-6 pr-2 py-2 hover:opacity-90 transition-all duration-300 whitespace-nowrap"
                    >
                        <span>Open an account</span>

                        <span
                            className="flex h-6 w-6 items-center justify-center rounded-full bg-white group-hover:translate-x-0.5  transition-transform duration-300"
                        >
                            <ArrowRight className="w-3.5 h-3.5 text-secondary" />
                        </span>
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default OurPurpose;