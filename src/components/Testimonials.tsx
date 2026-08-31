import { ArrowRight, Star } from "lucide-react";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

type Testimonial = {
    quote: string;
    name: string;
    role: string;
    initial: string;
};

const TestimonialCard = ({ quote, name, role, initial }: Testimonial) => {
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <motion.div
            className="bg-primary rounded-2xl p-6 flex flex-col justify-between h-full w-[340px] shrink-0"
            variants={cardVariants}
            whileHover={{
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                transition: { duration: 0.3 }
            }}
        >
            <div>
                <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={13} className="fill-[#D98A0E] text-secondary" />
                    ))}
                </div>
                <p className="text-white text-sm leading-relaxed">"{quote}"</p>
            </div>
            <div className="flex items-center gap-3 mt-5">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#171238] text-xs font-semibold">
                    {initial}
                </div>
                <div>
                    <p className="text-white text-xs font-medium">{name}</p>
                    <p className="text-white/50 text-[11px]">{role}</p>
                </div>
            </div>
        </motion.div>
    );
};

// Marquee lane: scrolls its cards horizontally on a continuous loop.
// The track is duplicated once so the loop is seamless, and the lane
// clips with overflow-hidden so it can never drift over the image next to it.
const MarqueeRow = ({
    cards,
    direction = "left",
    duration = 10,
}: {
    cards: Testimonial[];
    direction?: "left" | "right";
    duration?: number;
}) => {
    return (
        <div className="relative w-full h-65 overflow-hidden">
            <div
                className="flex gap-4 w-max h-full"
                style={{
                    animation: `${direction === "left" ? "marquee-left" : "marquee-right"} ${duration}s linear infinite`,
                }}
            >
                {cards.map((t, i) => (
                    <TestimonialCard key={`${t.name}-${i}`} {...t} />
                ))}
            </div>
        </div>
    );
};

const Testimonials = () => {
    // Image carousel state
    const images = [
        { src: "/testimonial2.jpg", alt: "Alert MFB customer using the app on her phone" },
        { src: "/testimonial1.jpg", alt: "Alert MFB customer checking his phone outdoors" },

    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Auto-slide images every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000); // 10 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    // Variants for animations
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
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

    const gridContainerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const gridItemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    // Carousel image variants
    const imageSlideVariants: Variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0,
            scale: 0.95,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 50 : -50,
            opacity: 0,
            scale: 0.95,
            transition: {
                duration: 0.6,
                ease: "easeIn",
            },
        }),
    };

    const allTestimonials: Testimonial[] = [
        {
            quote: "Opening my account took less than 10 minutes on my phone, I moved my salary account here within a month.",
            name: "Chidinma O.",
            role: "Savings Account · Lagos",
            initial: "C",
        },
        {
            quote: "Better rates than my old bank, and the certificate of deposit was ready the same week",
            name: "Ibrahim M.",
            role: "Savings Account · Lagos",
            initial: "I",
        },
        {
            quote: "The SME loan helped me restock my shop before the holidays. the agent explained every fee upfront and no surprises.",
            name: "Tunde A",
            role: "Savings Account · Lagos",
            initial: "T",
        },
        {
            quote: "The mobile app makes tracking my spending effortless, and support responds within minutes whenever I have a question.",
            name: "Amaka N.",
            role: "Current Account · Lagos",
            initial: "A",
        },
        {
            quote: "The staff made opening my business account simple, and I was able to start receiving payments the very same day.",
            name: "David E.",
            role: "Business Account · Abuja",
            initial: "D",
        },
        {
            quote: "I appreciate how easy it is to transfer money and pay my bills. Everything works smoothly without unnecessary delays.",
            name: "Blessing U.",
            role: "Current Account · Benin City",
            initial: "B",
        },
        {
            quote: "My fixed savings plan has helped me stay disciplined, and seeing the interest grow every month keeps me motivated.",
            name: "Hassan K.",
            role: "Fixed Savings · Kano",
            initial: "H",
        },
        {
            quote: "The customer support team was friendly and resolved my card issue much faster than I expected.",
            name: "Ngozi E.",
            role: "Savings Account · Enugu",
            initial: "N",
        },
        {
            quote: "Applying for a personal loan was straightforward, and the approval process was transparent from start to finish.",
            name: "Samuel J.",
            role: "Personal Loan · Ibadan",
            initial: "S",
        },
        {
            quote: "I've been using the mobile app daily for transfers and airtime purchases, and it's been reliable every single time.",
            name: "Amina B.",
            role: "Current Account · Port Harcourt",
            initial: "A",
        },
    ];

    const row1Cards: Testimonial[] = [
        allTestimonials[0],
        allTestimonials[1],
        allTestimonials[2],
        allTestimonials[3],
        allTestimonials[4],
        allTestimonials[5],
        allTestimonials[6],
        allTestimonials[7],
        allTestimonials[8],
        allTestimonials[9]
    ];

    const row2Cards: Testimonial[] = [
        allTestimonials[1],
        allTestimonials[2],
        allTestimonials[3],
        allTestimonials[4],
        allTestimonials[5],
        allTestimonials[6],
        allTestimonials[7],
        allTestimonials[8],
        allTestimonials[9]];

    return (
        <section className="bg-gradient-to-bl from-purple-100 via-white to-white py-20 px-6 overflow-hidden">
            <style>{`
                @keyframes marquee-left {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                @keyframes marquee-right {
                    from { transform: translateX(-50%); }
                    to { transform: translateX(0); }
                }
            `}</style>
            <div className="max-w-5xl mx-auto">
                <motion.div
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants}>
                        <motion.p
                            className="text-secondary text-xs font-medium tracking-[0.8em] mb-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            TESTIMONIALS
                        </motion.p>
                        <motion.h2
                            className="text-primary text-xl md:text-5xl font-semibold leading-[1]"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            Trusted Nationwide
                            <br />
                            by Individuals &
                            <br />
                            Businesses
                        </motion.h2>
                    </motion.div>

                    <motion.div
                        className="md:max-w-xs"
                        variants={itemVariants}
                    >
                        <motion.p
                            className="text-primary text-sm leading-relaxed mb-9 text-right md:text-right font-medium"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Real stories from Individuals and businesses who rely on Alert
                            MFB for fast, secure and seamless payments.
                        </motion.p>
                        <motion.div
                            className="flex justify-center md:justify-end"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <motion.button
                                className="inline-flex items-center gap-2 bg-primary text-white text-sm font-medium pl-6 pr-1.5 py-1.5 rounded-full hover:bg-[#241c52] transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span>Get Mobile App</span>
                                <motion.span
                                    className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#171238]"
                                    whileHover={{ rotate: 90 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ArrowRight size={16} />
                                </motion.span>
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="flex flex-col gap-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={gridContainerVariants}
                >
                    {/* Row 1: fixed image + marquee lane (cards scroll, image stays put) */}
                    <div className="flex flex-col md:flex-row gap-4 items-stretch">
                        <motion.div
                            className="w-full md:w-1/4 relative overflow-hidden rounded-2xl h-90 sm:h-65 shrink-0"
                            variants={gridItemVariants}
                        >
                            <AnimatePresence mode="wait" custom={currentImageIndex}>
                                <motion.img
                                    key={currentImageIndex}
                                    src={images[currentImageIndex].src}
                                    alt={images[currentImageIndex].alt}
                                    custom={currentImageIndex}
                                    variants={imageSlideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className="w-full h-full object-cover rounded-2xl"
                                    whileHover={{
                                        scale: 1.03,
                                        transition: { duration: 0.3 }
                                    }}
                                />
                            </AnimatePresence>
                        </motion.div>
                        <motion.div
                            className="flex-1 min-w-0"
                            variants={gridItemVariants}
                        >
                            <MarqueeRow cards={row1Cards} direction="left" duration={66} />
                        </motion.div>
                    </div>

                    {/* Row 2: marquee lane + fixed image */}
                    <div className="flex flex-col md:flex-row gap-4 items-stretch">
                        <motion.div
                            className="flex-1 min-w-0 order-2 md:order-1"
                            variants={gridItemVariants}
                        >
                            <MarqueeRow cards={row2Cards} direction="right" duration={66} />
                        </motion.div>
                        <motion.div
                            className="w-full md:w-1/4 relative overflow-hidden rounded-2xl h-90 sm:h-65  shrink-0 order-1 md:order-2"
                            variants={gridItemVariants}
                        >
                            <AnimatePresence mode="wait" custom={currentImageIndex}>
                                <motion.img
                                    key={currentImageIndex + 1}
                                    src={images[(currentImageIndex + 1) % images.length].src}
                                    alt={images[(currentImageIndex + 1) % images.length].alt}
                                    custom={currentImageIndex}
                                    variants={imageSlideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className="w-full h-full object-cover rounded-2xl"
                                    whileHover={{
                                        scale: 1.03,
                                        transition: { duration: 0.3 }
                                    }}
                                />
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;