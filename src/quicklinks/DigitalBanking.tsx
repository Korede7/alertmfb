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
    const [activeCard, setActiveCard] = useState<CardId>("credit");
    const [typedHeading, setTypedHeading] = useState("");
    const isActive = (id: CardId) => activeCard === id;
    



    // Refs for scroll animations
    const headerRef = useRef(null);
    const cardsRef = useRef(null);
    const featuresRef = useRef(null);
    const statsRef = useRef(null);

    const headerInView = useInView(headerRef, { once: true, amount: 0.2 });
    const cardsInView = useInView(cardsRef, { once: true, amount: 0.1 });
    const featuresInView = useInView(featuresRef, { once: true, amount: 0.2 });
    const statsInView = useInView(statsRef, { once: true, amount: 0.3 });

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
        <div className="max-w-6xl p-8 md:p-10 mx-auto font-sans">
            {/* Header */}
            <motion.div
                ref={headerRef}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : 30 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8"
            >
                <div>
                    <p className="text-[11px] tracking-[0.2em] font-bold text-[#e0a030] mb-3">
                        DIGITAL BANKING
                    </p>
                    <h1 className="text-xl md:text-4xl leading-[1.15] font-extrabold text-[#171338] mb-4">
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

                <div className="flex flex-col items-start md:items-end gap-5 pt-1">
                    <p className="text-sm text-[#171338] md:text-right leading-relaxed max-w-xs">
                        The Alert MFB app puts your entire bank in your pocket — built
                        for Nigeria&apos;s networks, designed for real life.
                    </p>
                    <button className="flex items-center gap-3 bg-[#171338] text-white text-sm font-medium pl-5 pr-1.5 py-1.5 rounded-full">
                        Open an account in minutes
                        <span className="w-7 h-7 rounded-full bg-white text-[#171338] flex items-center justify-center">
                            <ArrowRight size={14} />
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
                className="flex gap-4 mb-4 max-w-6xl mx-auto items-stretch"
            >
                {/* Personal */}
                <motion.div
                    role="button"
                    tabIndex={0}
                    onClick={() => setActiveCard("personal")}
                    onKeyDown={(e) => e.key === "Enter" && setActiveCard("personal")}
                    style={{ flexGrow: isActive("personal") ? 10 : 1, flexBasis: 0 }}
                    layout
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    whileHover={{ y: -2 }}
                    className={`relative rounded-2xl overflow-hidden h-80 md:h-85 p-5 flex flex-col justify-between cursor-pointer
            bg-gradient-to-br from-[#241a52] via-[#1a1440] to-[#0e0b22]
            transition-[flex-grow] duration-500 ease-in-out
            ${isActive("personal") ? "" : "min-w-[110px]"}`}
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
                                className="text-white font-semibold text-4xl md:text-2xl tracking-wide"
                                style={{
                                    writingMode: "vertical-rl",
                                    transform: "rotate(180deg)",
                                }}
                            >
                                Personal
                            </span>
                        </div>
                    )}

                    {/* Expanded content */}
                    <FadeIn active={isActive("personal")} className="flex flex-col justify-between h-full">
                        <div>
                            <h3 className="text-white font-semibold text-base mb-1">
                                Personal Banking
                            </h3>
                            <p className="text-[#c9c4e8] text-xs leading-relaxed max-w-md">
                                Take complete control of your finances. Save smarter, spend securely, and grow your money with our seamless mobile banking tools.
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="bg-white/10 rounded-lg px-5 py-8 flex-1">
                                <p className="text-white text-xs font-semibold mb-0.5">
                                    Instant Digital Banking
                                </p>
                                <p className="text-[#c9c4e8] text-[11px] leading-snug">
                                    Open an account in minutes,
                                    get a debit card, and make
                                    lightning-fast transfers on
                                    our mobile app.
                                </p>
                            </div>
                            <div className="bg-white/10 rounded-lg px-5 py-8 flex-1">
                                <p className="text-white text-xs font-semibold mb-0.5">
                                    Alert Kolo-Ajo Savings
                                </p>
                                <p className="text-[#c9c4e8] text-[11px] leading-snug">
                                    Automate your savings with
                                    daily or weekly contributions
                                    to hit your personal financial
                                    goals faster.
                                </p>
                            </div>
                            <span className="w-10 h-10 shrink-0 self-end rounded-full  bg-white flex items-center justify-center">
                                <ArrowRight size={14} className="text-[#171338]" />
                            </span>
                        </div>
                    </FadeIn>
                </motion.div>

                {/* Business */}
                <motion.div
                    role="button"
                    tabIndex={0}
                    onClick={() => setActiveCard("business")}
                    onKeyDown={(e) => e.key === "Enter" && setActiveCard("business")}
                    style={{ flexGrow: isActive("business") ? 10 : 1, flexBasis: 0 }}
                    layout
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    whileHover={{ y: -2 }}
                    className={`relative rounded-2xl overflow-hidden h-80 md:h-85 p-5 flex flex-col justify-between cursor-pointer
            bg-gradient-to-br from-[#c9922e] via-[#dba647] to-[#f0cf94]
            transition-[flex-grow] duration-500 ease-in-out
            ${isActive("business") ? "" : "min-w-[110px]"}`}
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
                                className="text-white font-semibold text-4xl md:text-2xl tracking-wide"
                                style={{
                                    writingMode: "vertical-rl",
                                    transform: "rotate(180deg)",
                                }}
                            >
                                Business
                            </span>
                        </div>
                    )}

                    {/* Expanded content */}
                    <FadeIn active={isActive("business")} className="flex flex-col justify-between h-full">
                        <div>
                            <h3 className="text-white font-semibold text-base mb-1">
                                Business
                            </h3>
                            <p className="text-white/90 text-xs leading-relaxed max-w-md">
                                Streamline your operations and manage cash flow effortlessly with a powerful business account built for modern African merchants and SMEs.
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="bg-black/10 rounded-lg px-5 py-8 flex-1">
                                <p className="text-white text-xs font-semibold mb-0.5">
                                    Instant Business Accounts:
                                </p>
                                <p className="text-white/90 text-[11px] leading-snug">
                                    register your business, open
                                    your account online, and
                                    receive client payments instantly.
                                </p>
                            </div>
                            <div className="bg-black/10 rounded-lg px-5 py-8 flex-1">
                                <p className="text-white text-xs font-semibold mb-0.5">
                                    Alert POS Terminals:
                                </p>
                                <p className="text-white/90 text-[11px] leading-snug">
                                    Never miss a sale. Get reliable,
                                    high-uptime POS hardware with
                                    competitive transaction rates for
                                    your physical storefront.
                                </p>
                            </div>
                            <span className="w-10 h-10 shrink-0 self-end rounded-full  bg-white flex items-center justify-center">
                                <ArrowRight size={14} className="text-[#171338]" />
                            </span>
                        </div>
                    </FadeIn>
                </motion.div>

                {/* Credit & Loans */}
                <motion.div
                    role="button"
                    tabIndex={0}
                    onClick={() => setActiveCard("credit")}
                    onKeyDown={(e) => e.key === "Enter" && setActiveCard("credit")}
                    style={{ flexGrow: isActive("credit") ? 10 : 1, flexBasis: 0 }}
                    layout
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    whileHover={{ y: -2 }}
                    className={`relative rounded-2xl overflow-hidden h-80 md:h-85 bg-[#1a1542] p-5 flex flex-col justify-between cursor-pointer
            transition-[flex-grow] duration-500 ease-in-out
            ${isActive("credit") ? "" : "min-w-[110px]"}`}
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
                                className="text-white font-semibold text-4xl md:text-2xl tracking-wide"
                                style={{
                                    writingMode: "vertical-rl",
                                    transform: "rotate(180deg)",
                                }}
                            >
                                Credit &amp; Loans
                            </span>
                        </div>
                    )}

                    {/* Expanded content */}
                    <FadeIn active={isActive("credit")} className="relative z-10 flex flex-col justify-between h-full">
                        <div>
                            <h3 className="text-white font-semibold text-base mb-1">
                                Credit &amp; Loans
                            </h3>
                            <p className="text-[#c9c4e8] text-xs leading-relaxed max-w-md">
                                Don&apos;t let cash flow hold you back. Access flexible, fast,
                                and collateral-friendly funding designed to scale your
                                ambitions.
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="bg-white/10 rounded-lg px-5 py-8 flex-1">
                                <p className="text-white text-xs font-semibold mb-0.5">
                                    Micro &amp; Mini Loans:
                                </p>
                                <p className="text-[#c9c4e8] text-[11px] leading-snug">
                                    Quick working capital from ₦300,000 to ₦1,000,000 for temp
                                    jobs only (operating running smoothly).
                                </p>
                            </div>
                            <div className="bg-white/10 rounded-lg px-5 py-8 flex-1">
                                <p className="text-white text-xs font-semibold mb-0.5">
                                    SME Financing
                                </p>
                                <p className="text-[#c9c4e8] text-[11px] leading-snug">
                                    Scale your enterprise with larger needs and cash flow
                                    backing from ₦500,000 to ₦1,000,000.
                                </p>
                            </div>
                            <span className="w-10 h-10 shrink-0 self-end rounded-full  bg-white flex items-center justify-center">
                                <ArrowRight size={14} className="text-[#171338]" />
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
                className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
            >
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: featuresInView ? 1 : 0, x: featuresInView ? 0 : -20 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-[#f6f6fa] rounded-xl p-4 flex flex-col gap-3"
                >
                    <span className="w-8 h-8 rounded-md bg-[#f6f6fa]/90 shadow-sm flex items-center justify-center text-[#171338]">
                        <Shield size={16} />
                    </span>
                    <div>
                        <p className="font-semibold text-[#171338] text-sm mb-1">
                            Secure &amp; Regulated
                        </p>
                        <p className="text-xs text-gray-500 leading-relaxed">
                            Licensed by the CBN, deposits launched by the NDDC, and
                            protected by banks&apos; grade encryption.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : -20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-[#f6f6fa] rounded-xl p-4 flex flex-col gap-3"
                >
                    <span className="w-8 h-8 rounded-md bg-white shadow-sm flex items-center justify-center text-[#171338]">
                        <Headset size={16} />
                    </span>
                    <div>
                        <p className="font-semibold text-[#171338] text-sm mb-1">
                            Customer-First Banking
                        </p>
                        <p className="text-xs text-gray-500 leading-relaxed">
                            Real humans, fair fees, and expert advice to help you thrive.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: featuresInView ? 1 : 0, x: featuresInView ? 0 : 20 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-[#f6f6fa] rounded-xl p-4 flex flex-col gap-3"
                >
                    <span className="w-8 h-8 rounded-md bg-white shadow-sm flex items-center justify-center text-[#171338]">
                        <Smartphone size={16} />
                    </span>
                    <div>
                        <p className="font-semibold text-[#171338] text-sm mb-1">
                            Digital-First Experience
                        </p>
                        <p className="text-xs text-gray-500 leading-relaxed">
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
                className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-6"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: statsInView ? 1 : 0, scale: statsInView ? 1 : 0.9 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                >
                    <div className="flex items-center gap-2 mb-2">

                        <h1 className="text-xs text-primary">App Store Rating</h1>
                    </div>
                    <p className="text-xl font-bold text-primary flex items-center gap-2">
                        <span className="w-2.5 h-2.5 bg-red-500" />
                        <h2 className="text-5xl font-semibold text-[#171338]">{rating.toFixed(1)}</h2>
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: statsInView ? 1 : 0, scale: statsInView ? 1 : 0.9 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                >
                    <div className="flex items-center gap-2 mb-2">

                        <h1 className="text-xs text-primary">Customers Served</h1>
                    </div>
                    <p className="text-xl font-bold text-primary flex items-center gap-2">
                        <span className="w-2.5 h-2.5 bg-gray-400" />
                        <h2 className="text-5xl font-semibold text-[#171338]">{customers >= 1000 ? `${Math.round(customers/1000)}k+` : customers}</h2>
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: statsInView ? 1 : 0, scale: statsInView ? 1 : 0.9 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                >
                    <div className="flex items-center gap-2 mb-2">

                        <h1 className="text-xs text-primary">Customer Satisfaction (NPS-based)</h1>
                    </div>
                    <p className="text-xl sm:text-2xl font-bold text-primary flex items-center gap-2">
                        <span className="w-2.5 h-2.5 bg-green-400" />
                        <h2 className="text-5xl font-semibold text-[#171338]">{satisfaction}%</h2>
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default DigitalBanking;