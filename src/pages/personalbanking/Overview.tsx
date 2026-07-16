import { IoLogoApple } from "react-icons/io";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { ChevronRight, Shield } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, LayoutGroup } from "framer-motion";

const Overview = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState("current-account");

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
        }
    ];

    // scroll function
    const scrollToSection = (id: string) => {
        setActiveTab(id);
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
            const scrollPosition = window.scrollY + 180; // offset for your fixed nav

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

    return (
        <div className="pt-24 min-h-screen bg-white overflow-hidden">
            <div className="max-w-5xl mx-auto px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-6 items-center ">
                    {/* Left column */}
                    <div className={`pt-4 lg:pt-12 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                        }`}>
                        <h1 className="text-4xl md:text-4xl lg:text-7xl leading-[0.95] font-semibold tracking-[-2.5px] text-primary">
                            Banking made
                            <br />
                            for Real life.
                        </h1>

                        <p className="mt-8 max-w-[420px] text-[17px] leading-7 text-primary">
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
                            className="mt-8 flex flex-wrap items-center gap-4"
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
                                className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:opacity-90 hover:shadow-lg"
                            >
                                <IoLogoApple className="h-5 w-5" />
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
                                className="flex items-center gap-2 rounded-full border border-[#141B4D]/20 px-6 py-3 text-sm font-medium text-[#141B4D] transition-all duration-300 hover:bg-[#141B4D]/5 hover:shadow-lg"
                            >
                                <IoLogoGooglePlaystore className="h-5 w-5" />
                                Get on Android
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* Right column — image */}
                    <div className={`relative flex justify-center lg:justify-end pt-8 lg:pt-12 transition-all bg-gradient-from-tr duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                        }`}>
                        <div className="relative w-[410px] h-[400px]">
                            {/* Gradient Background - moved down */}
                            <div
                                className="absolute inset-0 rounded-[48px] overflow-hidden transition-all duration-2000 delay-500 ease-out"
                                style={{
                                    clipPath: "polygon(16% 0%, 100% 0%, 100% 100%, 0% 100%)",
                                    background: `
  radial-gradient(circle at top left, rgba(255,255,255,0.22) 0%, transparent 35%),
  radial-gradient(circle at top right, rgba(255,255,255,0.18) 0%, transparent 30%),
  radial-gradient(circle at bottom right, rgba(255,255,255,0.12) 0%, transparent 32%),
  linear-gradient(135deg, #7A70C2 0%, #4B428E 45%, #17143F 100%)
`,
                                    transform: isVisible ? "translateY(8%)" : "translateY(0%)",
                                    height: "90%",
                                    top: "auto",
                                    bottom: 0,
                                    opacity: isVisible ? 1 : 0,
                                }}
                            />

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
                                {/* White fade overlay from top */}
                                <div
                                    className="absolute bottom-0 right-0 pointer-events-none"
                                    style={{
                                        height: "100%",
                                        width: "100%",
                                        clipPath: "polygon(12% 0%, 88% 0%, 100% 100%, 0% 100%)",
                                        background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 25%)",
                                        transform: isVisible ? "translateY(6%)" : "translateY(15%)",
                                        zIndex: 3,
                                        opacity: isVisible ? 1 : 0,
                                        transition: "all 1000ms ease-out 700ms",
                                    }}
                                />
                            </div>

                            {/* App badge - positioned absolutely with floating animation */}
                            <div className={`absolute top-26 -right-15 z-20 transition-all duration-700 delay-500 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                                } animate-float`}>
                                <div className="flex items-center rounded-full shadow-lg bg-gray-500/40 backdrop-blur-md pr-4 p-0.5 border border-white/20 w-40">
                                    {/* Logo Circle */}
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full">
                                        <img
                                            src="/logo2.jpg"
                                            alt="Alert MFB"
                                            className="h-9 w-9 object-fit rounded-full"
                                        />
                                    </div>

                                    {/* Text */}
                                    <span className="ml-2 text-sm font-medium text-white">
                                        Alert MFB
                                    </span>
                                </div>
                            </div>

                            <div
                                className={`absolute -bottom-1 -left-6 lg:-left-4 bg-white/80 text-center rounded-2xl backdrop-blur-md shadow-xl p-3.5 w-38 space-y-1.5 z-10 transition-all duration-700 delay-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                                    } animate-float-delayed`}
                            >
                                <button className="cursor-pointer group w-full rounded-md bg-white/90 px-3 py-1.5 text-[10px] font-medium text-primary transition-all duration-300 hover:scale-105 hover:bg-[#E0A63A] hover:text-white">
                                    <div className="flex items-center justify-center gap-1">
                                        <span className="transition-colors duration-300 group-hover:text-white">
                                            Loans
                                        </span>
                                        <ChevronRight className="w-2.5 h-2.5 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
                                    </div>
                                </button>
                                <button className="cursor-pointer group w-full rounded-md bg-white/90 px-3 py-1.5 text-[10px] font-medium text-primary transition-all duration-300 hover:scale-105 hover:bg-[#E0A63A] hover:text-white">
                                    <div className="flex items-center justify-center gap-1">
                                        <span className="transition-colors duration-300 group-hover:text-white">
                                            Savings
                                        </span>
                                        <ChevronRight className="w-2.5 h-2.5 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
                                    </div>
                                </button>

                                <button className=" cursor-pointer group w-full rounded-md bg-white/90 px-3 py-1.5 text-[10px] font-medium text-primary transition-all duration-300 hover:scale-105 hover:bg-[#E0A63A] hover:text-white">
                                    <div className="flex items-center justify-center gap-1">
                                        <span className="transition-colors duration-300 group-hover:text-white">
                                            Cards
                                        </span>
                                        <ChevronRight className="w-2.5 h-2.5 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Segmented nav */}
                <div
                    className={`fixed bottom-4 sm:bottom-6 left-1/2 z-50 w-[calc(100%-1.5rem)] sm:w-auto max-w-5xl -translate-x-1/2 transition-all duration-1000 delay-900 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <LayoutGroup>
                        <div className="relative flex items-center gap-2 rounded-xl bg-[#EDEDF5]/90 backdrop-blur-xl border border-white/60 shadow-sm p-2 overflow-x-auto scrollbar-hide">
                            {segmentedNav.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="relative flex-shrink-0 cursor-pointer rounded-xl px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium whitespace-nowrap"
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
            </div>


            {/* Footer */}
            <div className={`mt-40 border-t border-[#141B4D]/10 bg-[#FAFAFC] transition-all duration-1000 delay-1100 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}>
                <div className="w-full px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-1 text-[11px] text-[#141B4D]/70">
                    <div className="flex items-center gap-2 text-center sm:text-left">
                        <Shield className="w-3.5 h-3.5 shrink-0" />
                        <span>
                            Alert Microfinance Bank Limited is licensed by the Central Bank
                            of Nigeria (CBN). Deposits are insured by the NDIC.
                        </span>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 whitespace-nowrap">
                        <a href="#" className="hover:underline transition-all duration-300 hover:text-[#141B4D]">Privacy Policy</a>
                        <a href="#" className="hover:underline transition-all duration-300 hover:text-[#141B4D]">Terms &amp; Conditions</a>
                        <a href="#" className="hover:underline transition-all duration-300 hover:text-[#141B4D]">Cookie Policy</a>
                        <a href="#" className="hover:underline transition-all duration-300 hover:text-[#141B4D]">AML/CFT Disclosure</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;