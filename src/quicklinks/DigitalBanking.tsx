import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Headset, Smartphone, ArrowRight } from "lucide-react";

type CardId = "personal" | "business" | "credit";
const heading = "Discover the freedom of Banking on your terms";

/** Small helper that fades its children in once `active` becomes true. */
const FadeIn = ({
    active,
    children,
    className = "",
}: {
    active: boolean;
    children: React.ReactNode;
    className?: string;
}) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (active) {
            const t = setTimeout(() => setVisible(true), 120);
            return () => clearTimeout(t);
        }
        setVisible(false);
    }, [active]);

    if (!active) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 6 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className={`transition-opacity duration-500 ease-out ${visible ? "opacity-100" : "opacity-0"
                } ${className}`}
        >
            {children}
        </motion.div>
    );
};

const DigitalBanking = () => {
    const [activeCard, setActiveCard] = useState<CardId>("personal");
    const [typedHeading, setTypedHeading] = useState("");
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const isActive = (id: CardId) => activeCard === id;
    
    // Ref for the cards container to control scrolling behavior
    const cardsContainerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const autoPlayTimerRef = useRef<number | null>(null);

    // Refs for scroll animations
    const headerRef = useRef(null);
    const cardsRef = useRef(null);
    const featuresRef = useRef(null);
    const statsRef = useRef(null);

    const headerInView = useInView(headerRef, { once: true, amount: 0.2 });
    const cardsInView = useInView(cardsRef, { once: true, amount: 0.1 });
    const featuresInView = useInView(featuresRef, { once: true, amount: 0.2 });
    const statsInView = useInView(statsRef, { once: true, amount: 0.3 });

    // Card order for cycling
    const cardOrder: CardId[] = ["personal", "business", "credit"];

    // Auto-play function to cycle cards every 7 seconds
    const cycleToNextCard = () => {
        const currentIndex = cardOrder.indexOf(activeCard);
        const nextIndex = (currentIndex + 1) % cardOrder.length;
        setActiveCard(cardOrder[nextIndex]);
    };

    // Handle auto-play
    useEffect(() => {
        if (isAutoPlaying) {
            autoPlayTimerRef.current = window.setInterval(cycleToNextCard, 7000);
        } else {
            if (autoPlayTimerRef.current) {
                window.clearInterval(autoPlayTimerRef.current);
                autoPlayTimerRef.current = null;
            }
        }

        return () => {
            if (autoPlayTimerRef.current) {
                window.clearInterval(autoPlayTimerRef.current);
                autoPlayTimerRef.current = null;
            }
        };
    }, [isAutoPlaying, activeCard]);

    // Pause auto-play when user manually clicks a card
    const handleCardClick = (cardId: CardId) => {
        setActiveCard(cardId);
        setIsAutoPlaying(false);
        // Resume auto-play after 10 seconds of inactivity
        setTimeout(() => {
            setIsAutoPlaying(true);
        }, 10000);
    };

    // Handle scroll to switch cards
    useEffect(() => {
        const handleScroll = (e: WheelEvent) => {
            const container = cardsContainerRef.current;
            if (!container) return;

            // Check if we're scrolled to the cards section
            const rect = container.getBoundingClientRect();
            const isInView = rect.top <= window.innerHeight * 0.8 && rect.bottom >= window.innerHeight * 0.2;
            
            if (!isInView) return;

            // Determine scroll direction
            const direction = e.deltaY > 0 ? 1 : -1; // 1 = down, -1 = up
            
            const currentIndex = cardOrder.indexOf(activeCard);
            const isLastCard = currentIndex === cardOrder.length - 1;
            const isFirstCard = currentIndex === 0;

            // Pause auto-play on user interaction
            setIsAutoPlaying(false);
            setTimeout(() => {
                setIsAutoPlaying(true);
            }, 10000);

            // If scrolling down and not on last card, switch to next card
            if (direction === 1 && !isLastCard) {
                e.preventDefault();
                setActiveCard(cardOrder[currentIndex + 1]);
            }
            // If scrolling up and not on first card, switch to previous card
            else if (direction === -1 && !isFirstCard) {
                e.preventDefault();
                setActiveCard(cardOrder[currentIndex - 1]);
            }
            // If on last card and scrolling down, allow normal scroll
            else if (direction === 1 && isLastCard) {
                // Let the page scroll naturally
                return;
            }
            // If on first card and scrolling up, allow normal scroll
            else if (direction === -1 && isFirstCard) {
                // Let the page scroll naturally
                return;
            }
        };

        window.addEventListener("wheel", handleScroll, { passive: false });
        return () => window.removeEventListener("wheel", handleScroll);
    }, [activeCard]);

    // Stats counters (animate on scroll into view)
    const [rating, setRating] = useState<number>(0);
    const [customers, setCustomers] = useState<number>(0);
    const [satisfaction, setSatisfaction] = useState<number>(0);

    useEffect(() => {
        if (!statsInView) return;

        const duration = 4000; // ms
        const start = performance.now();
        const from = { r: 0, c: 0, s: 0 };
        const to = { r: 4.6, c: 37000, s: 98 };
        let raf = 0;

        const step = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            setRating(Number((from.r + (to.r - from.r) * t).toFixed(1)));
            setCustomers(Math.round(from.c + (to.c - from.c) * t));
            setSatisfaction(Math.round(from.s + (to.s - from.s) * t));

            if (t < 1) raf = requestAnimationFrame(step);
        };

        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, [statsInView]);

    useEffect(() => {
        if (!headerInView) return;

        setTypedHeading("");

        let index = 0;

        const interval = setInterval(() => {
            index++;
            setTypedHeading(heading.slice(0, index));

            if (index === heading.length) {
                clearInterval(interval);
            }
        }, 90); // typing speed

        return () => clearInterval(interval);
    }, [headerInView]);

    return (
        <div ref={sectionRef} className="w-full max-w-6xl px-4 sm:px-6 md:px-8 lg:p-10 mx-auto">
            {/* Header */}
            <motion.div
                ref={headerRef}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : 30 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start mb-6 lg:mb-8"
            >
                <div>
                    <p className="text-[10px] sm:text-[11px] tracking-[0.7em] sm:tracking-[0.9em] font-bold text-secondary mb-2 sm:mb-3">
                        DIGITAL BANKING
                    </p>
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-[1.15] font-extrabold text-[#171338] mb-3 sm:mb-4 min-h-[3.5rem] sm:min-h-[4.5rem]">
                        {typedHeading}
                        <motion.span
                            className="inline-block ml-1"
                            animate={{ opacity: [1, 0] }}
                            transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                        >
                            |
                        </motion.span>
                    </h1>
                </div>

                <div className="flex flex-col items-start lg:items-end gap-4 lg:gap-5 pt-0 lg:pt-1">
                    <p className="text-xs sm:text-sm text-[#171338] lg:text-right leading-relaxed max-w-full lg:max-w-xs">
                        The Alert MFB app puts your entire bank in your pocket — built
                        for Nigeria&apos;s networks, designed for real life.
                    </p>
                    <button className="flex items-center gap-2 sm:gap-3 bg-[#171338] text-white text-xs sm:text-sm font-medium pl-3 sm:pl-5 pr-1 py-1 sm:pr-1.5 sm:py-1.5 rounded-full whitespace-nowrap">
                        Open an account in minutes
                        <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white text-[#171338] flex items-center justify-center flex-shrink-0">
                            <ArrowRight size={14} className="sm:w-[14px] sm:h-[14px]" />
                        </span>
                    </button>
                </div>
            </motion.div>

            {/* Cards row */}
            <motion.div
                ref={cardsRef}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: cardsInView ? 1 : 0, y: cardsInView ? 0 : 40 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 max-w-6xl mx-auto items-stretch relative"
            >

                {/* Personal */}
                <motion.div
                    ref={cardsContainerRef}
                    role="button"
                    tabIndex={0}
                    onClick={() => handleCardClick("personal")}
                    onKeyDown={(e) => e.key === "Enter" && handleCardClick("personal")}
                    style={{ 
                        flexGrow: isActive("personal") ? 10 : 1, 
                        flexBasis: 0,
                        minHeight: isActive("personal") ? "320px" : "80px"
                    }}
                    layout
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    whileHover={{ y: -2 }}
                    className={`relative rounded-2xl overflow-hidden p-4 sm:p-6 md:p-8 flex flex-col justify-between cursor-pointer
            bg-gradient-to-br from-[#241a52] via-[#1a1440] to-[#0e0b22]
            transition-[flex-grow] duration-500 ease-in-out
            ${isActive("personal") ? "h-auto sm:h-80 md:h-85" : "h-[80px] sm:h-80 md:h-85 min-w-[60px] sm:min-w-[80px] md:min-w-[110px]"}`}
                >
                    <svg
                        className="absolute inset-0 w-full h-full opacity-25"
                        viewBox="0 0 400 200"
                        preserveAspectRatio="none"
                    >
                        <polygon points="120,0 400,0 400,200 250,200" fill="#382a7a" />
                        <polygon points="220,0 400,40 400,200 320,200" fill="#4b3aa0" />
                    </svg>
                    {/* Collapsed label */}
                    {!isActive("personal") && (
                        <div className="absolute inset-0 z-10 flex items-center justify-center">
                            <span
                                className="text-white font-semibold text-xl sm:text-2xl md:text-4xl tracking-wide"
                                style={{
                                    writingMode: window.innerWidth < 640 ? "horizontal-tb" : "vertical-rl",
                                    transform: window.innerWidth < 640 ? "none" : "rotate(180deg)",
                                }}
                            >
                                Personal
                            </span>
                        </div>
                    )}

                    {/* Expanded content */}
                    <FadeIn active={isActive("personal")} className="flex flex-col justify-between h-full w-full">
                        <div className="mb-3 sm:mb-0">
                            <h3 className="text-white font-semibold text-xl sm:text-2xl mb-1">
                                Personal Banking
                            </h3>
                            <p className="text-[#c9c4e8] text-xs leading-relaxed max-w-full sm:max-w-md">
                                Take complete control of your finances. Save smarter, spend securely, and grow your money with our seamless mobile banking tools.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mt-3 sm:mt-0">
                            <div className="bg-white/10 rounded-lg px-3 sm:px-5 py-4 sm:py-6 md:py-8 flex-1 w-full sm:w-auto">
                                <p className="text-white text-[10px] sm:text-xs font-semibold mb-0.5">
                                    Instant Digital Banking
                                </p>
                                <p className="text-[#c9c4e8] text-[10px] sm:text-[11px] leading-snug">
                                    Open an account in minutes,
                                    get a debit card, and make
                                    lightning-fast transfers on
                                    our mobile app.
                                </p>
                            </div>
                            <div className="bg-white/10 rounded-lg px-3 sm:px-5 py-4 sm:py-6 md:py-8 flex-1 w-full sm:w-auto">
                                <p className="text-white text-[10px] sm:text-xs font-semibold mb-0.5">
                                    Alert Kolo-Ajo Savings
                                </p>
                                <p className="text-[#c9c4e8] text-[10px] sm:text-[11px] leading-snug">
                                    Automate your savings with
                                    daily or weekly contributions
                                    to hit your personal financial
                                    goals faster.
                                </p>
                            </div>
                            <span className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 shadow-md self-end rounded-full bg-white flex items-center justify-center">
                                <ArrowRight size={16} className="sm:w-5 sm:h-5 text-[#171338]" />
                            </span>
                        </div>
                    </FadeIn>
                </motion.div>

                {/* Business */}
                <motion.div
                    role="button"
                    tabIndex={0}
                    onClick={() => handleCardClick("business")}
                    onKeyDown={(e) => e.key === "Enter" && handleCardClick("business")}
                    style={{ 
                        flexGrow: isActive("business") ? 10 : 1, 
                        flexBasis: 0,
                        minHeight: isActive("business") ? "320px" : "80px"
                    }}
                    layout
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    whileHover={{ y: -2 }}
                    className={`relative rounded-2xl overflow-hidden p-4 sm:p-6 md:p-8 flex flex-col justify-between cursor-pointer
            bg-gradient-to-br from-[#c9922e] via-[#dba647] to-[#f0cf94]
            transition-[flex-grow] duration-500 ease-in-out
            ${isActive("business") ? "h-auto sm:h-80 md:h-85" : "h-[80px] sm:h-80 md:h-85 min-w-[60px] sm:min-w-[80px] md:min-w-[110px]"}`}
                >
                    <svg
                        className="absolute inset-0 w-full h-full opacity-25"
                        viewBox="0 0 400 200"
                        preserveAspectRatio="none"
                    >
                        <polygon points="120,0 400,0 400,200 250,200" fill="#e4df40" />
                        <polygon points="220,0 400,40 400,200 320,200" fill="#e6b739d6" />
                    </svg>

                    {/* Collapsed label */}
                    {!isActive("business") && (
                        <div className="absolute inset-0 z-10 flex items-center justify-center">
                            <span
                                className="text-white font-semibold text-xl sm:text-2xl md:text-4xl tracking-wide"
                                style={{
                                    writingMode: window.innerWidth < 640 ? "horizontal-tb" : "vertical-rl",
                                    transform: window.innerWidth < 640 ? "none" : "rotate(180deg)",
                                }}
                            >
                                Business
                            </span>
                        </div>
                    )}

                    {/* Expanded content */}
                    <FadeIn active={isActive("business")} className="flex flex-col justify-between h-full w-full">
                        <div className="mb-3 sm:mb-0">
                            <h3 className="text-white font-semibold text-xl sm:text-2xl mb-1">
                                Business
                            </h3>
                            <p className="text-white/90 text-xs leading-relaxed max-w-full sm:max-w-md">
                                Streamline your operations and manage cash flow effortlessly with a powerful business account built for modern African merchants and SMEs.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mt-3 sm:mt-0">
                            <div className="bg-black/10 rounded-lg px-3 sm:px-5 py-4 sm:py-6 md:py-8 flex-1 w-full sm:w-auto">
                                <p className="text-white text-[10px] sm:text-xs font-semibold mb-0.5">
                                    Instant Business Accounts:
                                </p>
                                <p className="text-white/90 text-[10px] sm:text-[11px] leading-snug">
                                    Register your business, <br /> open
                                    your account online, and
                                    receive client payments instantly.
                                </p>
                            </div>
                            <div className="bg-black/10 rounded-lg px-3 sm:px-5 py-4 sm:py-6 md:py-8 flex-1 w-full sm:w-auto">
                                <p className="text-white text-[10px] sm:text-xs font-semibold mb-0.5">
                                    Alert POS Terminals:
                                </p>
                                <p className="text-white/90 text-[10px] sm:text-[11px] leading-snug">
                                    Never miss a sale. Get reliable,
                                    high-uptime POS hardware with
                                    competitive transaction rates for
                                    your physical storefront.
                                </p>
                            </div>
                            <span className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 shadow-md self-end rounded-full bg-white flex items-center justify-center">
                                <ArrowRight size={16} className="sm:w-5 sm:h-5 text-[#171338]" />
                            </span>
                        </div>
                    </FadeIn>
                </motion.div>

                {/* Credit & Loans */}
                <motion.div
                    role="button"
                    tabIndex={0}
                    onClick={() => handleCardClick("credit")}
                    onKeyDown={(e) => e.key === "Enter" && handleCardClick("credit")}
                    style={{ 
                        flexGrow: isActive("credit") ? 10 : 1, 
                        flexBasis: 0,
                        minHeight: isActive("credit") ? "320px" : "80px"
                    }}
                    layout
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    whileHover={{ y: -2 }}
                    className={`relative rounded-2xl overflow-hidden bg-[#1a1542] p-4 sm:p-6 md:p-8 flex flex-col justify-between cursor-pointer
            transition-[flex-grow] duration-500 ease-in-out
            ${isActive("credit") ? "h-auto sm:h-80 md:h-85" : "h-[80px] sm:h-80 md:h-85 min-w-[60px] sm:min-w-[80px] md:min-w-[110px]"}`}
                >
                    <svg
                        className="absolute inset-0 w-full h-full opacity-25"
                        viewBox="0 0 400 200"
                        preserveAspectRatio="none"
                    >
                        <polygon points="120,0 400,0 400,200 250,200" fill="#382a7a" />
                        <polygon points="220,0 400,40 400,200 320,200" fill="#4b3aa0" />
                    </svg>

                    {/* Collapsed label */}
                    {!isActive("credit") && (
                        <div className="absolute inset-0 z-10 flex items-center justify-center">
                            <span
                                className="text-white font-semibold text-xl sm:text-2xl md:text-4xl tracking-wide"
                                style={{
                                    writingMode: window.innerWidth < 640 ? "horizontal-tb" : "vertical-rl",
                                    transform: window.innerWidth < 640 ? "none" : "rotate(180deg)",
                                }}
                            >
                                Credit &amp; Loans
                            </span>
                        </div>
                    )}

                    {/* Expanded content */}
                    <FadeIn active={isActive("credit")} className="relative z-10 flex flex-col justify-between h-full w-full">
                        <div className="mb-3 sm:mb-0">
                            <h3 className="text-white font-semibold text-xl sm:text-2xl mb-1">
                                Credit &amp; Loans
                            </h3>
                            <p className="text-[#c9c4e8] text-xs leading-relaxed max-w-full sm:max-w-md">
                                Don&apos;t let cash flow hold you back. Access flexible, fast,
                                and collateral-friendly funding designed to scale your
                                ambitions.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mt-3 sm:mt-0">
                            <div className="bg-white/10 rounded-lg px-3 sm:px-5 py-4 sm:py-6 md:py-8 flex-1 w-full sm:w-auto">
                                <p className="text-white text-[10px] sm:text-xs font-semibold mb-0.5">
                                    Micro &amp; Mini Loans:
                                </p>
                                <p className="text-[#c9c4e8] text-[10px] sm:text-[11px] leading-snug">
                                    Quick working capital from ₦300,000 to ₦1,000,000 for temp
                                    jobs only (operating running smoothly).
                                </p>
                            </div>
                            <div className="bg-white/10 rounded-lg px-3 sm:px-5 py-4 sm:py-6 md:py-8 flex-1 w-full sm:w-auto">
                                <p className="text-white text-[10px] sm:text-xs font-semibold mb-0.5">
                                    SME Financing
                                </p>
                                <p className="text-[#c9c4e8] text-[10px] sm:text-[11px] leading-snug">
                                    Scale your enterprise with larger needs and cash flow
                                    backing from ₦500,000 to ₦1,000,000.
                                </p>
                            </div>
                            <span className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 self-end shadow-md rounded-full bg-white flex items-center justify-center">
                                <ArrowRight size={16} className="sm:w-5 sm:h-5 text-[#171338]" />
                            </span>
                        </div>
                    </FadeIn>
                </motion.div>
            </motion.div>

            {/* Feature cards */}
            <motion.div
                ref={featuresRef}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 30 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: featuresInView ? 1 : 0, x: featuresInView ? 0 : -20 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-[#f6f6fa] rounded-xl p-3 sm:p-4 flex flex-col gap-2 sm:gap-3 shadow-m"
                >
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-white shadow-sm flex items-center justify-center text-primary flex-shrink-0">
                        <Shield size={14} className="sm:w-4 sm:h-4" />
                    </span>
                    <div>
                        <p className="font-semibold text-[#171338] text-xs sm:text-sm mb-0.5 sm:mb-1">
                            Secure &amp; Regulated
                        </p>
                        <p className="text-[10px] sm:text-xs text-gray-500 leading-relaxed">
                            Licensed by the CBN, deposits launched by the NDDC, and
                            protected by banks&apos; grade encryption.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : -20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-[#f6f6fa] rounded-xl p-3 sm:p-4 flex flex-col gap-2 sm:gap-3"
                >
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-white shadow-sm flex items-center justify-center text-primary flex-shrink-0">
                        <Headset size={14} className="sm:w-4 sm:h-4" />
                    </span>
                    <div>
                        <p className="font-semibold text-[#171338] text-xs sm:text-sm mb-0.5 sm:mb-1">
                            Customer-First Banking
                        </p>
                        <p className="text-[10px] sm:text-xs text-gray-500 leading-relaxed">
                            Real humans, fair fees, and expert advice to help you thrive.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: featuresInView ? 1 : 0, x: featuresInView ? 0 : 20 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-[#f6f6fa] rounded-xl p-3 sm:p-4 flex flex-col gap-2 sm:gap-3 col-span-1 sm:col-span-2 lg:col-span-1"
                >
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-white shadow-sm flex items-center justify-center text-[#171338] flex-shrink-0">
                        <Smartphone size={14} className="sm:w-4 sm:h-4" />
                    </span>
                    <div>
                        <p className="font-semibold text-[#171338] text-xs sm:text-sm mb-0.5 sm:mb-1">
                            Digital-First Experience
                        </p>
                        <p className="text-[10px] sm:text-xs text-gray-500 leading-relaxed">
                            Open accounts, apply for loans and manage your money — all
                            online.
                        </p>
                    </div>
                </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
                ref={statsRef}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: statsInView ? 1 : 0, y: statsInView ? 0 : 30 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-4 sm:pt-6"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: statsInView ? 1 : 0, scale: statsInView ? 1 : 0.9 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="text-center sm:text-left"
                >
                    <div className="flex items-center justify-center sm:justify-start gap-2 mb-1 sm:mb-2">
                        <h1 className="text-[10px] sm:text-xs md:text-sm text-primary">App Store Rating</h1>
                    </div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary flex items-center justify-center sm:justify-start gap-2">
                        <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-red-500 animate-pulse rounded-full" />
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-primary">{rating.toFixed(1)}</h2>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: statsInView ? 1 : 0, scale: statsInView ? 1 : 0.9 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="text-center sm:text-left"
                >
                    <div className="flex items-center justify-center sm:justify-start gap-2 mb-1 sm:mb-2">
                        <h1 className="text-[10px] sm:text-xs md:text-sm text-primary">Customers Served</h1>
                    </div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary flex items-center justify-center sm:justify-start gap-2">
                        <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gray-400 animate-pulse rounded-full" />
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-primary">{customers >= 1000 ? `${Math.round(customers/1000)}k+` : customers}</h2>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: statsInView ? 1 : 0, scale: statsInView ? 1 : 0.9 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="text-center sm:text-left"
                >
                    <div className="flex items-center justify-center sm:justify-start gap-2 mb-1 sm:mb-2">
                        <h1 className="text-[8px] sm:text-[10px] md:text-sm text-primary">Customer Satisfaction (NPS-based)</h1>
                    </div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary flex items-center justify-center sm:justify-start gap-2">
                        <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-400 animate-pulse rounded-full" />
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-primary">{satisfaction}%</h2>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default DigitalBanking;