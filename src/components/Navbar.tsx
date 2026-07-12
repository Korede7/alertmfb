"use client";

import { useEffect, useState } from "react";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type NavbarProps = {
    theme: {
        textClass: string;
        buttonClass: string;
        bgClass: string;
    };
};

const Navbar = ({ theme }: NavbarProps) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);

        // run once on mount in case the page loads already scrolled
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [mobileMenuOpen]);

    return (
        <nav
            className={`w-full fixed left-0 top-0 z-50 transition-colors duration-300 ${scrolled ? "bg-white shadow-sm" : "bg-transparent"
                }`}
        >
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">

                {/* Left */}
                <div className="flex items-center gap-8 sm:gap-10 lg:gap-14">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="flex items-center rounded-full shadow-xs bg-gray-200/30 pr-8 pl-0 py-">
                            {/* Logo Circle */}
                            <div className={`flex h-[40px] w-[40px] items-center justify-center rounded-full shadow-sm ${theme.textClass === "text-white" ? "bg-white" : "bg-primary"}`}>
                                <img
                                    src={theme.textClass === "text-white" ? "/logo2.jpg" : "/logo.jpg"}
                                    alt="Alert MFB"
                                    className="h-10 w-10 object-contain rounded-full"
                                />
                            </div>

                            {/* Text */}
                            <span className={`ml-3 text-md tracking-tight ${theme.textClass}`}>
                                Alert MFB
                            </span>
                        </div>
                    </div>

                    {/* Left Links - hidden on mobile, visible on lg */}
                    <div className="hidden items-center gap-9 lg:flex">
                        <button className={`flex items-center gap-1 text-[12px] font-medium ${theme.textClass}`}>
                            Personal Banking
                            <ChevronDown size={13} />
                        </button>

                        <button className={`flex items-center gap-1 text-[12px] font-medium ${theme.textClass}`}>
                            Business Banking
                            <ChevronDown size={13} />
                        </button>
                    </div>
                </div>

                {/* Right Side - Desktop */}
                <div className="hidden items-center gap-8 lg:flex lg:gap-12">

                    {/* Right Links */}
                    <div className="flex items-center gap-6 lg:gap-9">
                        <button className={`flex items-center gap-1 text-[12px] font-medium ${theme.textClass}`}>
                            Loans
                            <ChevronDown size={13} />
                        </button>

                        <button className={`flex items-center gap-1 text-[12px] font-medium ${theme.textClass}`}>
                            About Us
                            <ChevronDown size={13} />
                        </button>

                        <button className={`text-[12px] font-medium ${theme.textClass}`}>
                            Help & Support
                        </button>
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center gap-3">
                        {/* Join Alert */}
                        <button
                            className={`h-11 rounded-full border px-8 text-[15px] font-medium cursor-pointer transition-transform duration-300 hover:scale-105 ${theme.buttonClass}`}
                        >
                            Join Alert
                        </button>

                        {/* Sign In */}
                        <button className={`flex h-11.5 items-center rounded-full pl-7 pr-1 cursor-pointer text-[15px] font-medium transition-transform duration-300 hover:scale-105  ${theme.textClass === "text-white" ? "bg-white text-primary hover:bg-[#f8f8f8]" : "bg-primary text-white hover:bg-[#100b33]"}`}>
                            <span>Sign In</span>

                            <span className={`ml-5 flex h-10 w-10 items-center justify-center rounded-full ${theme.textClass === "text-white" ? "bg-primary text-white" : "bg-white text-primary"}`}>
                                <ArrowRight size={18} strokeWidth={2.5} />
                            </span>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className={`lg:hidden p-2 rounded-lg transition ${theme.textClass}`}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

            </div>

            {/* Mobile Menu - Slide in from left */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                            className="fixed inset-0 bg-black/50 lg:hidden z-40"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", stiffness: 90, damping: 20, mass: 0.8 }}
                            className={`fixed top-0 left-0 h-full w-80 max-w-[80%] z-50 lg:hidden shadow-2xl transition-colors duration-300 ${scrolled ? "bg-white" : "bg-white/95 backdrop-blur-sm"
                                }`}
                        >
                            <div className="flex flex-col h-full p-6 pt-20 overflow-y-auto">
                                {/* Close button inside menu */}
                                <button
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 transition"
                                >
                                    <X size={24} className="text-[#23235A]" />
                                </button>

                                {/* Mobile Links */}
                                <div className="flex flex-col space-y-1">
                                    <button className={`flex items-center gap-1 text-sm font-medium ${theme.textClass === "text-white" ? "text-[#23235A]" : theme.textClass} py-3 px-4 rounded-lg hover:bg-gray-50 transition`}>
                                        Personal Banking
                                        <ChevronDown size={13} />
                                    </button>

                                    <button className={`flex items-center gap-1 text-sm font-medium ${theme.textClass === "text-white" ? "text-[#23235A]" : theme.textClass} py-3 px-4 rounded-lg hover:bg-gray-50 transition`}>
                                        Business Banking
                                        <ChevronDown size={13} />
                                    </button>

                                    <button className={`flex items-center gap-1 text-sm font-medium ${theme.textClass === "text-white" ? "text-[#23235A]" : theme.textClass} py-3 px-4 rounded-lg hover:bg-gray-50 transition`}>
                                        Loans
                                        <ChevronDown size={13} />
                                    </button>

                                    <button className={`flex items-center gap-1 text-sm font-medium ${theme.textClass === "text-white" ? "text-[#23235A]" : theme.textClass} py-3 px-4 rounded-lg hover:bg-gray-50 transition`}>
                                        About Us
                                        <ChevronDown size={13} />
                                    </button>

                                    <button className={`text-sm font-medium ${theme.textClass === "text-white" ? "text-[#23235A]" : theme.textClass} py-3 px-4 rounded-lg hover:bg-gray-50 transition`}>
                                        Help & Support
                                    </button>
                                </div>

                                {/* Divider */}
                                <div className="my-6 border-t border-gray-200" />

                                {/* Mobile Buttons */}
                                <div className="flex flex-col gap-3">
                                    <button className={`h-11 rounded-full border px-8 text-[15px] font-medium transition-transform hover:scale-105 ${theme.buttonClass === "border-white text-white hover:bg-white/10" ? "border-[#1A1B67] text-[#1A1B67]" : theme.buttonClass}`}>
                                        Join Alert
                                    </button>

                                    <button className={`flex h-11.5 items-center justify-center rounded-full pl-7 pr-1 text-[15px] font-medium transition ${theme.textClass === "text-white" ? "bg-white text-[#150F45] hover:bg-[#f8f8f8]" : "bg-[#150F45] text-white hover:bg-[#100b33]"}`}>
                                        <span>Sign In</span>
                                        <span className={`ml-5 flex h-10 w-10 items-center justify-center rounded-full ${theme.textClass === "text-white" ? "bg-[#E8912D] text-white" : "bg-white text-[#E8912D]"}`}>
                                            <ArrowRight size={18} strokeWidth={2.5} />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;