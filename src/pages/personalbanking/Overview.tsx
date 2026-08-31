import { IoLogoApple } from "react-icons/io";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { BsMenuButtonWide } from "react-icons/bs";
// +1 307 800 0643

const Overview = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState("current-account");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const segmentedNav = [
        {
            label: "Current Account",
            id: "current-account"
        },
        {
            label: "Savings Account",
            id: "savings-account"
        },
        {
            label: "Internet & Mobile Banking",
            id: "internet-mobile-banking"
        },
        {
            label: "Fixed Deposit",
            id: "fixed-deposits"
        },
        {
            label: "Cards",
            id: "cards"
        },
        {
            label: "Kolo Ajo",
            id: "kolo-ajo"
        }
    ];

    // scroll function
    const scrollToSection = (id: string) => {
        setActiveTab(id);
        setIsDropdownOpen(false);
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    useEffect(() => {
        const sections = segmentedNav.map((item) =>
            document.getElementById(item.id)
        );

        const handleScroll = () => {
            const scrollPosition = window.scrollY + 180;

            for (const section of sections) {
                if (!section) continue;

                const top = section.offsetTop;
                const bottom = top + section.offsetHeight;

                if (scrollPosition >= top && scrollPosition < bottom) {
                    setActiveTab(section.id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // initialize

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (isDropdownOpen && !target.closest('.dropdown-container')) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isDropdownOpen]);

    return (
        <div className="pt-20 sm:pt-24 min-h-screen bg-white overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-10 items-center">
                    {/* Left column */}
                    <div className={`pt-4 lg:pt-12 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                        }`}>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1] sm:leading-[0.95] font-semibold tracking-[-1.5px] sm:tracking-[-2px] lg:tracking-[-2.5px] text-primary">
                            Banking made
                            <br />
                            for Real life.
                        </h1>

                        <p className="mt-4 sm:mt-6 lg:mt-8 max-w-full lg:max-w-[420px] text-sm sm:text-base lg:text-[17px] leading-6 sm:leading-7 text-primary">
                            Whether you are saving for rent, growing a deposit, or just want
                            a simple account that works — Alert MFB has a product for it.
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.5,
                                ease: "easeOut",
                            }}
                            className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
                        >
                            <motion.button
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.7,
                                }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.96 }}
                                className="flex items-center gap-2 rounded-full bg-primary px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 font-medium text-white text-[10px] sm:text-xs lg:text-sm transition-all duration-300 hover:opacity-90 hover:shadow-lg w-full sm:w-auto justify-center"
                            >
                                <IoLogoApple className="h-4 w-4 sm:h-5 sm:w-5" />
                                Get on iPhone
                            </motion.button>

                            <motion.button
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.85,
                                }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.96 }}
                                className="flex items-center gap-2 rounded-full border border-[#141B4D]/20 px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 text-[10px] sm:text-xs lg:text-sm font-medium text-[#141B4D] transition-all duration-300 hover:bg-[#141B4D]/5 hover:shadow-lg w-full sm:w-auto justify-center"
                            >
                                <IoLogoGooglePlaystore className="h-4 w-4 sm:h-5 sm:w-5" />
                                Get on Android
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* Right column — image */}
                    <div className={`relative flex justify-center lg:justify-end pt-6 sm:pt-8 lg:pt-12 transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                        }`}>
                        <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[410px] h-[300px] sm:h-[340px] md:h-[370px] lg:h-[400px] mx-auto lg:mx-0">

                            {/* Background */}
                            <svg
                                className="absolute bottom-0 left-0 w-full h-[90%] transition-all duration-[2000ms] delay-500 ease-out"
                                viewBox="0 0 410 380"
                                preserveAspectRatio="none"
                                style={{
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible ? "translateY(8%)" : "translateY(0%)",
                                }}
                            >
                                <defs>
                                    <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#17143F" />
                                        <stop offset="35%" stopColor="#2C275F" />
                                        <stop offset="70%" stopColor="#4C468C" />
                                        <stop offset="100%" stopColor="#706DA5" />
                                    </linearGradient>

                                    <radialGradient id="glow1" cx="16%" cy="82%" r="35%">
                                        <stop offset="0%" stopColor="rgba(255,255,255,.28)" />
                                        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                                    </radialGradient>

                                    <radialGradient id="glow2" cx="72%" cy="10%" r="28%">
                                        <stop offset="0%" stopColor="rgba(255,255,255,.16)" />
                                        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                                    </radialGradient>
                                </defs>


                                <path
                                    d="M48 0H362Q410 0 410 48V332Q410 380 362 380H48Q0 380 0 332C0 250 20 150 48 48Q52 0 96 0Z"
                                    fill="url(#heroGradient)"
                                />

                                <path
                                    d="M72 0H362Q410 0 410 48V332Q410 380 362 380H62Q0 380 0 318C0 288 12 235 24 178C38 114 54 52 72 0Z"
                                    fill="url(#glow1)"
                                />

                                <path
                                    d="M72 0H362Q410 0 410 48V332Q410 380 362 380H62Q0 380 0 318C0 288 12 235 24 178C38 114 54 52 72 0Z"
                                    fill="url(#glow2)"
                                />
                            </svg>

                            {/* Image - overlapping from bottom */}
                            <div className="absolute bottom-0 right-0" style={{ height: "115%" }}>
                                <img
                                    src="/banker.png"
                                    alt="Banking app illustration"
                                    className="absolute bottom-0 right-0 w-auto max-w-none object-contain transition-all duration-1000 delay-700 ease-out"
                                    style={{
                                        height: "100%",
                                        clipPath: "polygon(12% 0%, 88% 0%, 100% 100%, 0% 100%)",
                                        transform: isVisible ? "translateY(6%)" : "translateY(15%)",
                                        zIndex: 2,
                                        opacity: isVisible ? 1 : 0,
                                    }}
                                />
                            </div>

                            {/* App badge - positioned absolutely with floating animation */}
                            <div className={`absolute top-10 sm:top-16 md:top-20 lg:top-26 -right-4 sm:-right-8 md:-right-12 lg:-right-15 z-20 transition-all duration-700 delay-500 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                                } `}>
                                <div className="flex items-center rounded-full shadow-lg bg-gray-300/40 backdrop-blur-md pr-2 sm:pr-3 lg:pr-4 p-0.5 border border-white/20 w-28 sm:w-32 md:w-36 lg:w-40">
                                    {/* Logo Circle */}
                                    <div className="flex h-7 w-7 sm:h-8 sm:w-8 lg:h-9 lg:w-9 items-center justify-center rounded-full">
                                        <img
                                            src="/logo2.jpg"
                                            alt="Alert MFB"
                                            className="h-7 w-7 sm:h-8 sm:w-8 lg:h-9 lg:w-9 object-fit rounded-full"
                                        />
                                    </div>

                                    {/* Text */}
                                    <span className="ml-1.5 sm:ml-2 text-[10px] sm:text-xs lg:text-sm font-medium text-white">
                                        Alert MFB
                                    </span>
                                </div>
                            </div>

                            <div
                                className={`absolute -bottom-1 -left-3 sm:-left-4 md:-left-5 lg:-left-6 xl:-left-13 bg-white/80 text-center rounded-2xl backdrop-blur-md shadow-xl p-2.5 sm:p-3 lg:p-3.5 w-28 sm:w-32 md:w-36 lg:w-38 space-y-1 sm:space-y-1.5 z-10 transition-all duration-700 delay-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                                    } animate-float-delayed`}
                            >
                                <div className="group w-full rounded-md bg-[#E0A63A] px-2 sm:px-3 py-1 sm:py-1.5 text-[8px] sm:text-[9px] lg:text-[10px] font-medium text-white shadow-md">
                                    <div className="flex items-center justify-center gap-1">
                                        <span>
                                            Loans
                                        </span>
                                    </div>
                                </div>
                                <div className="group w-full rounded-md bg-white/90 px-2 sm:px-3 py-1 sm:py-1.5 text-[8px] sm:text-[9px] lg:text-[10px] font-medium text-primary shadow-md">
                                    <div className="flex items-center justify-center gap-1">
                                        <span>
                                            Savings
                                        </span>
                                    </div>
                                </div>

                                <div className="group w-full rounded-md bg-white/90 px-2 sm:px-3 py-1 sm:py-1.5 text-[8px] sm:text-[9px] lg:text-[10px] font-medium text-primary shadow-md">
                                    <div className="flex items-center justify-center gap-1">
                                        <span>
                                            Cards
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Segmented nav - Desktop (hidden on mobile) */}
                <div
                    className={`hidden  md:block fixed bottom-3 sm:bottom-4 md:bottom-15 left-1/2 z-30 w-auto max-w-5xl -translate-x-1/2 transition-all duration-1000 delay-900 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <LayoutGroup>
                        <div className="relative flex items-center gap-1.5 sm:gap-2 rounded-xl backdrop-blur-md bg-white/40 shadow-sm p-1.5 sm:p-2">
                            {segmentedNav.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="relative flex-shrink-0 cursor-pointer rounded-xl px-2.5 sm:px-3 md:px-4 lg:px-5 py-1.5 sm:py-2 md:py-2.5 text-[10px] sm:text-xs md:text-sm font-medium whitespace-nowrap"
                                >
                                    {activeTab === item.id && (
                                        <motion.div
                                            layoutId="active-pill"
                                            className="absolute inset-0 rounded-lg bg-primary"
                                            transition={{
                                                type: "spring",
                                                stiffness: 500,
                                                damping: 35,
                                            }}
                                        />
                                    )}

                                    <span
                                        className={`relative z-10 transition-colors duration-300 ${activeTab === item.id
                                            ? "text-white"
                                            : "text-primary"
                                            }`}
                                    >
                                        {item.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </LayoutGroup>
                </div>

                {/* Segmented nav - Mobile Dropdown (visible only on mobile) */}
                <div
                    className={`md:hidden p-5 fixed bottom-3 sm:bottom-4 left-1/2 z-30 w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] max-w-md -translate-x-1/2 transition-all duration-1000 delay-900 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        } dropdown-container`}
                >
                    <div className="relative">
                        {/* Dropdown Trigger */}
                        <motion.button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full flex items-center justify-between rounded-xl bg-primary backdrop-blur-xl border border-white/60 shadow-sm px-4 py-3 text-sm font-medium text-primary transition-all duration-300 hover:shadow-md"
                        >
                            <motion.span
                                className="flex items-center gap-2 text-white"
                                animate={{
                                    scale: isDropdownOpen ? 1.05 : 1
                                }}
                                transition={{ duration: 0.2 }}
                            >
                                <BsMenuButtonWide size={18} />
                                Quick Links
                            </motion.span>
                            <motion.div
                                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                                transition={{
                                    duration: 0.4,
                                    ease: "easeInOut"
                                }}
                            >
                                <ChevronDown size={18} />
                            </motion.div>
                        </motion.button>

                        {/* Dropdown Menu */}
                        <AnimatePresence>
                            {isDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeOut",
                                        staggerChildren: 0.05,
                                        delayChildren: 0.05
                                    }}
                                    className="absolute bottom-full mb-2 left-0 right-0 rounded-xl bg-[#EDEDF5]/95 backdrop-blur-xl border border-white/60 shadow-xl p-1.5 max-h-[60vh] overflow-y-auto"
                                >
                                    {segmentedNav.map((item, index) => (
                                        <motion.button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                duration: 0.2,
                                                delay: index * 0.05
                                            }}
                                            whileHover={{
                                                scale: 1.02,
                                                backgroundColor: activeTab === item.id ? "#171338" : "rgba(23, 19, 56, 0.05)"
                                            }}
                                            whileTap={{ scale: 0.98 }}
                                            className={`w-full text-left rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${activeTab === item.id
                                                ? "bg-primary text-white"
                                                : "text-primary hover:bg-primary/10"
                                                }`}
                                        >
                                            {item.label}
                                        </motion.button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 sm:mt-0 z-10 flex h-auto w-full flex-col gap-2 bg-gray px-4 py-2 text-[10px] text-primary backdrop-blur-sm sm:h-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:text-xs lg:px-10">
                <p className="text-center sm:text-left">
                    © Alert Microfinance Bank Limited is licensed by the Central Bank of Nigeria (CBN). Deposits are insured by the NDIC.
                </p>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
                    <a href="#" className="hover:text-[#17145D] transition">Privacy Policy</a>
                    <a href="#" className="hover:text-[#17145D] transition">Terms & Conditions</a>
                    <a href="#" className="hover:text-[#17145D] transition">Cookie Policy</a>
                    <a href="#" className="hover:text-[#17145D] transition">AML/CFT Disclosure</a>
                </div>
            </div>
        </div>
    );
};

export default Overview;