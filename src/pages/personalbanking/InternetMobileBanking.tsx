import { ArrowRightFromLine } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import { IoLogoApple } from 'react-icons/io';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { easeOut, motion, useAnimation, useInView } from 'framer-motion';

interface ImagePlaceholderProps {
    label?: string;
    image: string;
    className?: string;
}

// Scroll animation hook
const useScrollAnimation = () => {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, {
        once: true,
        amount: 0.15,
        margin: "-50px"
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return { ref, controls, inView };
};

// Animation variants - premium banking style
const fadeInUp = {
    hidden: {
        opacity: 0,
        y: 50,
        scale: 0.98
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.7,
            ease: easeOut
        }
    }
};

const fadeInDown = {
    hidden: {
        opacity: 0,
        y: -30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: easeOut
        }
    }
};

const slideInLeft = {
    hidden: {
        opacity: 0,
        x: -60
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: easeOut
        }
    }
};

const slideInRight = {
    hidden: {
        opacity: 0,
        x: 60
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: easeOut
        }
    }
};

const scaleIn = {
    hidden: {
        opacity: 0,
        scale: 0.9
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: easeOut
        }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.2
        }
    }
};

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
    image,
    className = "",
}) => {
    const { ref, controls } = useScrollAnimation();

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={scaleIn}
            className={`flex items-center justify-center rounded-3xl p-3 ${className}`}
        >
            <motion.img
                src={image}
                alt=""
                className="h-full w-full object-cover rounded-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
            />
        </motion.div>
    );
};

const ArrowIcon: React.FC<{ colorClass?: string }> = ({ colorClass = 'stroke-indigo-950' }) => (
    <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        className={colorClass}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
    </svg>
);

const CircleArrow: React.FC<{ bgClass?: string; strokeClass?: string }> = ({
    bgClass = 'bg-white',
    strokeClass = 'stroke-indigo-950',
}) => (
    <motion.span
        className={`inline-flex items-center justify-center w-6 h-6 rounded-full flex-shrink-0 ${bgClass}`}
        whileHover={{ scale: 1.15, rotate: 90 }}
        transition={{ duration: 0.3 }}
        whileTap={{ scale: 0.9 }}
    >
        <ArrowIcon colorClass={strokeClass} />
    </motion.span>
);

const bullets: string[] = [
    'Real-time balance and transaction history',
    'Two-Factor Authentication (OTP via SMS/Email)',
    'Download statements as PDF',
    '10-minute inactivity auto-logout for your security',
];

const appFeatures: string[] = ['Transfers', 'Bills & Payments', 'Savings', 'Security', 'Cards', 'Loans'];

const FeaturePill = ({ label }: { label: string }) => {
    const { ref, controls } = useScrollAnimation();

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInUp}
            className="flex w-fit items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm"
            style={{
                boxShadow: "0 4px 16px 0 rgba(8, 27, 51, 0.05)"
            }}
        >
            <motion.span
                className="flex h-7 w-7 items-center justify-center rounded-full rounded-full bg-gradient-to-br from-gray-100 to-gray-300 border border-white text-primary shadow-lg shadow-md"
                style={{
                    boxShadow: "0 4px 16px 0 rgba(8, 27, 51, 0.14)"
                }}
            >
                <ArrowRightFromLine className="h-3.5 w-3.5 text-primary" />
            </motion.span>

            <span className="whitespace-nowrap text-[12px] font-medium text-primary">
                {label}
            </span>
        </motion.div>
    );
};

const InternetMobileBanking: React.FC = () => {
    const heroRef = useRef(null);
    const heroControls = useAnimation();
    const heroInView = useInView(heroRef, { once: true, amount: 0.1 });

    useEffect(() => {
        if (heroInView) {
            heroControls.start("visible");
        }
    }, [heroControls, heroInView]);

    return (
        <div className="bg-gradient-to-tr from-white via-white to-violet-300 px-4 sm:px-6 lg:px-8 py-10 sm:py-16 overflow-x-hidden">
            <div className="max-w-5xl mx-auto">
                {/* Hero */}
                <motion.div
                    ref={heroRef}
                    initial="hidden"
                    animate={heroControls}
                    variants={staggerContainer}
                    className="text-center mb-12"
                >
                    <motion.p
                        variants={fadeInDown}
                        className="text-[11px] font-medium tracking-[10px] uppercase text-secondary mb-3"
                    >
                        Internet Banking
                    </motion.p>

                    <motion.h1
                        variants={fadeInUp}
                        className="text-3xl sm:text-6xl font-semibold text-primary leading-tight mb-4"
                    >
                        Your whole Bank in
                        <br />
                        your Pocket
                    </motion.h1>

                    <motion.p
                        variants={fadeInUp}
                        className="text-sm text-primary  mx-auto mb-6 leading-relaxed"
                    >
                        Internet Banking, our mobile app, USSD for feature phones, and a Security Centre that
                        keeps it all safe.
                    </motion.p>

                    <motion.button
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2.5 bg-primary text-white text-sm font-semibold rounded-full pl-5 pr-1.5 py-1.5"
                    >
                        Login to Internet Banking
                        <CircleArrow bgClass="bg-white" strokeClass="stroke-indigo-950" />
                    </motion.button>
                </motion.div>

                {/* Full banking from your browser */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                    className="bg-white/90 rounded-[20px] p-6 sm:p-8 flex flex-col lg:flex-row gap-8 items-center mb-6"
                >
                    {/* Left: copy */}
                    <motion.div
                        variants={slideInLeft}
                        className="w-full lg:flex-1 relative h-64 sm:h-72 lg:h-64"
                    >
                        <motion.h2
                            variants={fadeInUp}
                            className="text-xl sm:text-[27px] font-bold text-primary mb-4"
                        >
                            Full Banking, right from
                            <br />
                            your Browser
                        </motion.h2>

                        <motion.ul
                            variants={staggerContainer}
                            className="text-xs text-primary leading-loose list-disc pl-4 mb-6 space-y-0.5"
                        >
                            {bullets.map((b, index) => (
                                <motion.li
                                    key={b}
                                    variants={fadeInUp}
                                    custom={index}
                                >
                                    {b}
                                </motion.li>
                            ))}
                        </motion.ul>

                        <motion.button
                            variants={fadeInUp}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2.5 bg-secondary text-white text-xs font-semibold rounded-full pl-4 pr-1.5 py-1.5"
                        >
                            Start Internet Banking
                            <CircleArrow bgClass="bg-white" strokeClass="stroke-amber-500" />
                        </motion.button>
                    </motion.div>

                    {/* Right: image + floating UI cards */}
                    <motion.div
                        variants={slideInRight}
                        className="flex-1 min-w-[100px] relative h-95"
                        animate={{
                            y: [0, -8, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }}
                    >
                        <ImagePlaceholder
                            image='/pics1.jpg'
                            label=""
                            className="w-full h-full"
                        />
                    </motion.div>
                </motion.div>

                {/* Mobile app section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={staggerContainer}
                    className="rounded-[26px] bg-gray px-5 sm:px-8 lg:px-12 py-8 overflow-hidden"
                >
                    <div className="grid grid-cols-1 xl:grid-cols-[340px_1fr_360px] gap-10 xl:gap-3 items-center">
                        {/* Phone */}
                        <motion.div
                            variants={scaleIn}
                            className="relative flex justify-center lg:justify-start"
                            animate={{
                                y: [0, -8, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut"
                            }}
                        >
                            <motion.img
                                src="/mockup2.png"
                                alt="Alert Mobile App"
                                className="w-[240px] sm:w-[300px] lg:w-[360px] xl:w-[480px] h-auto object-contain xl:-mb-26"
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>

                        {/* Feature Pills */}
                        <motion.div
                            variants={staggerContainer}
                            className="flex flex-col gap-3 mt-6 xl:mt-8 xl:-ml-9 items-center xl:items-start"
                        >
                            {/* First */}
                            <motion.div variants={fadeInUp} className="flex" >
                                <FeaturePill label={appFeatures[0]} />
                            </motion.div>

                            {/* Second */}
                            <motion.div variants={fadeInUp} className="flex">
                                <FeaturePill label={appFeatures[1]} />
                            </motion.div>

                            {/* Remaining */}
                            <motion.div
                                variants={staggerContainer}
                                className="grid grid-cols-2 gap-3 w-fit mx-auto xl:mx-0"
                            >
                                {appFeatures.slice(2).map((label) => (
                                    <motion.div key={label} variants={fadeInUp}>
                                        <FeaturePill label={label} />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            variants={slideInRight}
                            className="text-center xl:text-left"
                        >
                            <motion.h2
                                variants={fadeInUp}
                                className="text-xl sm:text-2xl font-bold text-primary mt-5 mb-8"
                            >
                                The Alert MFB Mobile App
                            </motion.h2>

                            <motion.p
                                variants={fadeInUp}
                                className="mt-10 xl:mt-10 max-w-xs xl:max-w-sm mx-auto xl:mx-0 text-base sm:text-[17px] leading-5 text-primary"
                            >
                                Everything from account management to bill
                                payments, savings goals, card controls,
                                loans and support — in one app.
                            </motion.p>

                            <motion.div
                                variants={staggerContainer}
                                className="mt-10 xl:mt-15 flex flex-wrap justify-center xl:justify-start gap-4"
                            >
                                <motion.button
                                    variants={fadeInUp}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-medium text-white transition hover:scale-105"
                                >
                                    <IoLogoApple className="text-xl" />
                                    Get on iPhone
                                </motion.button>

                                <motion.button
                                    variants={fadeInUp}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-2 rounded-full border border-secondary px-6 py-3 text-sm font-medium text-secondary transition hover:bg-secondary hover:text-white hover:scale-105"
                                >
                                    <IoLogoGooglePlaystore className="text-lg" />
                                    Get on Android
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default InternetMobileBanking;