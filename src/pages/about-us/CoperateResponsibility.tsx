import { useState, useEffect, useRef } from "react";
import { ArrowRight} from "lucide-react";
import { motion, useAnimation, useInView, type Variants, AnimatePresence } from "framer-motion";
import { cards } from "../../utils";


// Scroll animation variants with proper typing
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

const cardExpandVariants: Variants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { 
        scale: 1, 
        opacity: 1,
        transition: { 
            duration: 0.7, 
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
        opacity: 1, 
        scale: 1, 
        y: 0,
        transition: { 
            duration: 0.4, 
            ease: [0.22, 1, 0.36, 1]
        }
    },
    exit: { 
        opacity: 0, 
        scale: 0.9, 
        y: 20,
        transition: { 
            duration: 0.3, 
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

const CoperateResponsibility = () => {
    const [expanded, setExpanded] = useState<number | null>(2);
    const [isMobile, setIsMobile] = useState(false);
    const [selectedCard, setSelectedCard] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { 
        once: true, 
        amount: 0.1,
        margin: "-50px"
    });

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    const toggleExpand = (index: number) => {
        setExpanded((prev) => (prev === index ? null : index));
    };

    const openModal = (index: number, e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedCard(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCard(null);
    };

    // Desktop: horizontal expand via column widths
    const getGridStyle = () => {
        if (isMobile || expanded === null) return undefined;

        const cols = [1, 1, 1];
        cols[expanded] = 3;

        return {
            gridTemplateColumns: `${cols[0]}fr ${cols[1]}fr ${cols[2]}fr`,
        };
    };

    return (
        <>
            <motion.div 
                ref={ref}
                initial="hidden"
                animate={controls}
                className="w-full bg-white py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden"
            >
                <div className="max-w-5xl mx-auto">

                    {/* Eyebrow + Heading + Copy */}
                    <motion.div 
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start mb-10 sm:mb-12"
                    >
                        <motion.div variants={fadeInLeft} className="min-w-0">
                            <motion.p
                                variants={fadeInUp}
                                className="text-[9px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.4em] mb-3 sm:mb-4 text-secondary"
                            >
                                CORPORATE RESPONSIBILITY
                            </motion.p>

                            <motion.h1
                                variants={fadeInUp}
                                className="text-xl sm:text-2xl md:text-4xl font-semibold leading-[1.15] sm:leading-tight text-primary"
                            >
                                We bank on Nigeria
                                <br />
                                because we believe
                                <br />
                                in Nigeria
                            </motion.h1>
                        </motion.div>

                        <motion.div 
                            variants={fadeInRight}
                            className="flex flex-col items-start md:items-end text-left md:text-right min-w-0"
                        >
                            <motion.p
                                variants={fadeInUp}
                                className="text-xs sm:text-sm leading-relaxed max-w-sm mb-5 sm:mb-6 text-primary"
                            >
                                Banking doesn&apos;t happen in isolation from community. Alert
                                MFB invests in the financial wellbeing of the communities we
                                serve — not as a PR exercise, but because it makes our
                                customers stronger.
                            </motion.p>

                            <motion.button
                                variants={fadeInUp}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ duration: 0.2 }}
                                className="flex items-center gap-2 sm:gap-3 pl-4 sm:pl-6 pr-2 py-2 rounded-full text-white text-xs sm:text-sm font-semibold bg-primary whitespace-nowrap"
                            >
                                Read our CSR Impact Reports

                                <motion.span 
                                    whileHover={{ x: 4 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex items-center justify-center rounded-full w-7 h-7 sm:w-8 sm:h-8 bg-white shrink-0"
                                >
                                    <ArrowRight size={15} className="text-primary" />
                                </motion.span>
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Cards */}
                    <motion.div
                        variants={staggerContainer}
                        className={
                            isMobile
                                ? "flex flex-col gap-3"
                                : "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-[1fr_1fr_3fr] gap-3 sm:gap-4 transition-[grid-template-columns] duration-300 ease-in-out"
                        }
                        style={getGridStyle()}
                    >
                        {cards.map((card, index) => {
                            const isExpanded = expanded === index;

                            return (
                                <motion.div
                                    key={card.title}
                                    variants={cardExpandVariants}
                                    whileHover={!isMobile && !isExpanded ? { 
                                        scale: 1.02,
                                        transition: { duration: 0.3 }
                                    } : {}}
                                    onClick={() => toggleExpand(index)}
                                    className="relative rounded-2xl overflow-hidden flex flex-col cursor-pointer transition-all duration-300 ease-in-out min-w-0 w-full
                                    "
                                    style={{
                                        backgroundImage: `url(${card.bgImage})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        height: isMobile
                                            ? isExpanded
                                                ? "440px"
                                                : "84px"
                                            : undefined,
                                    }}
                                >
                                    {isExpanded ? (
                                        <>
                                            {/* Expanded content (shared mobile/desktop) */}
                                            <motion.div 
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.5, delay: 0.1 }}
                                                className="relative z-10 h-full flex flex-col min-h-0"
                                            >
                                                {index !== 2 && (
                                                    <motion.div 
                                                        initial={{ y: 20, opacity: 0 }}
                                                        animate={{ y: 0, opacity: 1 }}
                                                        transition={{ duration: 0.5, delay: 0.2 }}
                                                        className="px-5 sm:px-6 md:px-8 pt-5 sm:pt-6 md:pt-8 pb-3 sm:pb-4"
                                                    >
                                                        <h3 className="text-white font-bold text-xl sm:text-2xl mb-2 sm:mb-3 leading-tight">
                                                            {card.title}
                                                        </h3>

                                                        <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-md">
                                                            {card.paragraph}
                                                        </p>
                                                    </motion.div>
                                                )}

                                                {index === 2 && (
                                                    <motion.div 
                                                        initial={{ y: 20, opacity: 0 }}
                                                        animate={{ y: 0, opacity: 1 }}
                                                        transition={{ duration: 0.5, delay: 0.2 }}
                                                        className="px-5 sm:px-6 md:px-8 pt-5 sm:pt-6 md:pt-8 pb-3 sm:pb-4"
                                                    >
                                                        <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-md">
                                                            {card.paragraph}
                                                        </p>
                                                    </motion.div>
                                                )}

                                                <motion.div 
                                                    initial={{ y: 30, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ duration: 0.6, delay: 0.3 }}
                                                    className="relative flex-1 mx-2 mb-2 rounded-xl overflow-hidden min-h-0"
                                                >
                                                    <div className="absolute inset-0" />

                                                    <motion.div 
                                                        initial={{ y: 20, opacity: 0 }}
                                                        animate={{ y: 0, opacity: 1 }}
                                                        transition={{ duration: 0.5, delay: 0.4 }}
                                                        className="absolute left-3 right-14 sm:left-4 sm:right-16 md:left-6 md:right-24 bottom-3 sm:bottom-4 md:bottom-6"
                                                    >
                                                        <div className="rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 text-white text-[10px] sm:text-xs leading-relaxed bg-white/20 backdrop-blur-sm">
                                                            {card.caption}
                                                        </div>
                                                    </motion.div>

                                                    <motion.button
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        transition={{ duration: 0.2 }}
                                                        onClick={(e) => openModal(index, e)}
                                                        className="absolute right-3 sm:right-4 md:right-6 bottom-3 sm:bottom-4 md:bottom-6 flex items-center justify-center rounded-full w-9 h-9 sm:w-10 sm:h-10 bg-white shrink-0 cursor-pointer"
                                                    >
                                                        <ArrowRight
                                                            size={17}
                                                            className="text-primary"
                                                        />
                                                    </motion.button>
                                                </motion.div>
                                            </motion.div>
                                        </>
                                    ) : isMobile ? (
                                        <>
                                            {/* Collapsed - mobile: horizontal bar */}
                                            <motion.div 
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.3 }}
                                                className="relative z-10 h-full flex items-center justify-between px-4 sm:px-5"
                                            >
                                                <h3 className="text-white font-bold text-sm sm:text-base leading-snug pr-3">
                                                    {card.title}
                                                </h3>
                                                <motion.span 
                                                    whileHover={{ x: 4 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="flex items-center justify-center rounded-full w-8 h-8 bg-white/90 shrink-0"
                                                >
                                                    <ArrowRight size={15} className="text-primary" />
                                                </motion.span>
                                            </motion.div>
                                        </>
                                    ) : (
                                        <>
                                            {/* Collapsed - desktop: vertical rotated text */}
                                            <motion.div 
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.3 }}
                                                className="relative z-10 h-full flex items-center justify-center px-3 sm:px-4 py-6 sm:py-8"
                                            >
                                                <motion.h3
                                                    whileHover={{ scale: 1.05 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="text-white font-bold text-base sm:text-lg leading-snug whitespace-nowrap"
                                                    style={{
                                                        writingMode: "vertical-rl",
                                                        transform: "rotate(180deg)",
                                                    }}
                                                >
                                                    {card.title}
                                                </motion.h3>
                                            </motion.div>
                                        </>
                                    )}
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </motion.div>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && selectedCard !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm"
                        onClick={closeModal}
                    >
                        <motion.div
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >

                            {/* Modal Content */}
                            <div className="p-6 sm:p-8 md:p-10">
                                 <motion.p
                                variants={fadeInUp}
                                className="text-[9px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.4em] mb-3 sm:mb-4 text-secondary text-center"
                            >
                                CORPORATE RESPONSIBILITY
                            </motion.p>
                                {/* Title and Image side by side */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                                    {/* Title on the left */}
                                    <div className="flex items-center">
                                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary leading-tight">
                                            {cards[selectedCard].modalTitle}
                                        </h2>
                                    </div>
                                    
                                    {/* Image on the right */}
                                    <div 
                                        className="w-full h-40 sm:h-48 md:h-56 rounded-2xl bg-cover bg-center"
                                        style={{
                                            backgroundImage: `url(${cards[selectedCard].bgImage})`,
                                        }}
                                    />
                                </div>

                                {/* Content paragraphs */}
                                <div className="space-y-4">
                                    {cards[selectedCard].modalContent.map((paragraph, idx) => (
                                        <p key={idx} className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>

                                {/* Contact & Support Us button */}
                               <motion.button
                                variants={fadeInUp}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ duration: 0.2 }}
                                className="flex items-center gap-2 sm:gap-3 pl-4 sm:pl-6 pr-2 py-2 rounded-full text-white text-xs sm:text-sm font-medium bg-primary whitespace-nowrap mt-5"
                            >
                                Contact and Support Us

                                <motion.span 
                                    whileHover={{ x: 4 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex items-center justify-center rounded-full w-7 h-7 sm:w-8 sm:h-8 bg-white shrink-0"
                                >
                                    <ArrowRight size={15} className="text-primary" />
                                </motion.span>
                            </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default CoperateResponsibility;