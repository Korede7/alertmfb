import { useState, useEffect } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
    id: number;
    question: string;
    answer?: string;
}

const faqItems: FAQItem[] = [
    {
        id: 1, question: "How do I update my account Information",
        answer:
            "Yes. Simply go to account settings, enter your new email and verify it securely",
    },
    {
        id: 2,
        question: "Can I change my email address?",
        answer:
            "Yes. Simply go to account settings, enter your new email and verify it securely",
    },
    {
        id: 3, question: "How do I update my account Information",
        answer:
            "Yes. Simply go to account settings, enter your new email and verify it securely",
    },
    {
        id: 4, question: "How do I update my account Information",
        answer:
            "Yes. Simply go to account settings, enter your new email and verify it securely",
    },
    {
        id: 5, question: "How do I update my account Information",
        answer:
            "Yes. Simply go to account settings, enter your new email and verify it securely",
    },
    {
        id: 6, question: "How do I update my account Information",
        answer:
            "Yes. Simply go to account settings, enter your new email and verify it securely",
    },
    {
        id: 7, question: "How do I update my account Information",
        answer:
            "Yes. Simply go to account settings, enter your new email and verify it securely",
    },
];

const FAQ = () => {
    const [openId, setOpenId] = useState<number | null>(2);
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        "/woman.png",
        "/man.png" 
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 10000); // Change every 10 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    const toggleItem = (id: number) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    // Animation variants with correct syntax
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
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

    const headerVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const,
            },
        },
    };

    const leftColumnVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const,
            },
        },
    };

    const accordionVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const,
            },
        },
    };

    const answerVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.3,
                ease: "easeInOut" as const,
            },
        },
        exit: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.2,
                ease: "easeInOut" as const,
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="w-full bg-white py-20 px-6 p-5"
        >
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    variants={headerVariants}
                    className="text-center mb-14"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="inline-block text-secondary font-semibold tracking-[0.8em] mb-3"
                    >
                        FAQ
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-xl md:text-5xl font-medium text-primary mb-4"
                    >
                        Frequently Asked Questions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-primary text-base"
                    >
                        Everything you need to know, explained clearly &amp; simply
                    </motion.p>
                </motion.div>

                {/* Content */}
                <motion.div
                    variants={containerVariants}
                    className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6"
                >
                    {/* Left column */}
                    <motion.div
                        variants={leftColumnVariants}
                        className="flex flex-col gap-6 mt-1 p-3"
                    >
                        {/* Image carousel */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="bg-gray block sm:hidden lg:block rounded-2xl overflow-hidden h-[400px] flex items-center justify-center relative"
                        >
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentImage}
                                    src={images[currentImage]}
                                    alt={`FAQ illustration ${currentImage + 1}`}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.7 }}
                                    className="w-full h-80 object-fit mt-20"
                                />
                            </AnimatePresence>
                            
                            {/* Image counter dots */}
                            {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImage(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                            currentImage === index
                                                ? "bg-white w-6"
                                                : "bg-white/50 hover:bg-white/70"
                                        }`}
                                        aria-label={`Go to image ${index + 1}`}
                                    />
                                ))}
                            </div> */}
                        </motion.div>

                        {/* Contact box */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -5,
                                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                            }}
                            className="bg-gray rounded-2xl p-6 transition-all duration-300"
                        >
                            <motion.h3
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="text-primary font-semibold text-base mb-3"
                            >
                                Do you have more questions?
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0.5 }}
                                viewport={{ once: true }}
                                className="text-primary text-sm leading-relaxed mb-5"
                            >
                                Our team will answer all your questions. We&apos;ll ensure a
                                quick response.
                            </motion.p>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.6 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-3 bg-primary text-white text-sm font-medium pl-5 pr-2 py-2 rounded-full hover:bg-[#22245e] transition-colors"
                            >
                                Contact us
                                <motion.span
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                    className="bg-white rounded-full w-7 h-7 flex items-center justify-center"
                                >
                                    <ArrowRight size={14} className="text-primary" />
                                </motion.span>
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Right column — accordion */}
                    <motion.div
                        variants={accordionVariants}
                        className="flex flex-col gap-3 space-y-1.5 p-4"
                    >
                        {faqItems.map((item, index) => {
                            const isOpen = openId === item.id;
                            return (
                                <motion.div
                                    key={item.id}
                                    variants={itemVariants}
                                    custom={index}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    whileHover={{
                                        scale: 1.01,
                                        transition: { duration: 0.2 },
                                    }}
                                    className="bg-gray rounded-2xl px-6 py-5 cursor-pointer transition-colors space-y-10"
                                    onClick={() => toggleItem(item.id)}
                                >
                                    <motion.div className="flex items-center justify-between gap-4">
                                        <div className="flex items-baseline gap-4">
                                            <motion.span
                                                initial={{ opacity: 0.4 }}
                                                whileHover={{ opacity: 1 }}
                                                className="text-primary opacity-40 text-md font-medium w-6 shrink-0"
                                            >
                                                {String(item.id).padStart(2, "0")}
                                            </motion.span>
                                            <motion.span
                                                whileHover={{ x: 5 }}
                                                className="text-[#181A52] font-semibold text-[15px]"
                                            >
                                                {item.question}
                                            </motion.span>
                                        </div>
                                        <motion.span
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="shrink-0 text-[#181A52]"
                                        >
                                            {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                                        </motion.span>
                                    </motion.div>

                                    <AnimatePresence>
                                        {isOpen && item.answer && (
                                            <motion.p
                                                variants={answerVariants}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                                className="text-gray-400 text-sm mt-3 pl-10 leading-relaxed"
                                            >
                                                {item.answer}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default FAQ;