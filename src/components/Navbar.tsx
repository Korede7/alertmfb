import { useEffect, useState, useRef } from "react";
import { ChevronDown, ArrowRight, Menu, X, User, Building2, HandCoins, Info, LifeBuoy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { aboutUsMenu, businessBankingMenu, helpAndSupportMenu, loansMenu, personalBankingMenu } from "../utils";
import NavDropdown from "./NavDropDown";
import { Link, useNavigate } from "react-router-dom";

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
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileExpandedSections, setMobileExpandedSections] = useState<Set<string>>(new Set(['personal']));
    const navRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const toggleDropdown = (id: string) => {
        setActiveDropdown((prev) => (prev === id ? null : id));
    };

    const toggleMobileSection = (id: string) => {
        setMobileExpandedSections(prev => {
            const newSet = new Set(prev);
            // If clicking the same section, just toggle it (close if open)
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                // Close all sections first, then open the clicked one
                newSet.clear();
                newSet.add(id);
            }
            return newSet;
        });
    };

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                navRef.current &&
                !navRef.current.contains(event.target as Node)
            ) {
                setActiveDropdown(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const renderMobileSectionItems = (items: any[]) => {
        return items.map((item, index) => {
            const linkTo = item.link || item.path || "#";
            const label = item.title || item.label;

            if (item.onClick) {
                return (
                    <motion.button
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => {
                            item.onClick();
                            setMobileMenuOpen(false);
                        }}
                        className="group relative w-full rounded-xl py-2.5 px-4 text-left text-sm font-medium text-[#23235A] transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-50 hover:to-transparent hover:text-[#E8912D]"
                    >
                        <span className="relative block">{label}</span>
                        {item.subtitle && (
                            <span className="relative block text-xs text-gray-500 mt-0.5">{item.subtitle}</span>
                        )}
                        <motion.div 
                            className="absolute left-0 top-0 h-full w-1 rounded-r-full bg-[#E8912D] opacity-0 transition-opacity group-hover:opacity-100"
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                        />
                    </motion.button>
                );
            }

            return (
                <Link
                    key={index}
                    to={linkTo}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group relative block rounded-xl py-2.5 px-4 text-sm font-medium text-[#23235A] transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-50 hover:to-transparent hover:text-[#E8912D]"
                >
                    <span className="relative block">{label}</span>
                    {item.subtitle && (
                        <span className="relative block text-xs text-gray-500 mt-0.5">{item.subtitle}</span>
                    )}
                    <motion.div 
                        className="absolute left-0 top-0 h-full w-1 rounded-r-full bg-[#E8912D] opacity-0 transition-opacity group-hover:opacity-100"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                    />
                </Link>
            );
        });
    };

    const handleMobileNavigation = (path: string) => {
        navigate(path);
        setMobileMenuOpen(false);
    };

    return (
        <nav
            className={`w-full fixed left-0 top-0 z-50 transition-colors duration-300 ${
                scrolled ? "bg-white shadow-lg" : "bg-transparent"
            }`}
        >
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
                {/* Left */}
                <div className="flex items-center gap-8 sm:gap-10 lg:gap-14">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <motion.div 
                            className="flex items-center rounded-full shadow-xs bg-gray-200/30 pr-8 pl-0 cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <div
                                className={`flex h-[40px] w-[40px] items-center justify-center rounded-full shadow-sm ${
                                    theme.textClass === "text-white" ? "bg-white" : "bg-primary"
                                }`}
                            >
                                <img
                                    src={theme.textClass === "text-white" ? "/logo2.jpg" : "/logo.jpg"}
                                    alt="Alert MFB"
                                    className="h-10 w-10 object-contain rounded-full"
                                />
                            </div>
                            <span className={`ml-3 text-md tracking-tight ${theme.textClass}`}>
                                Alert MFB
                            </span>
                        </motion.div>
                    </Link>

                    {/* Desktop Nav */}
                    <div
                        ref={navRef}
                        className="hidden items-center gap-8 lg:flex lg:gap-12"
                    >
                        <div className="hidden flex items-center gap-40 lg:flex justify-between">
                            <span className="flex gap-6">
                                <NavDropdown
                                    label="Personal Banking"
                                    id="personal"
                                    items={personalBankingMenu}
                                    theme={theme}
                                    activeDropdown={activeDropdown}
                                    toggleDropdown={toggleDropdown}
                                />
                                <NavDropdown
                                    label="Business Banking"
                                    id="business"
                                    items={businessBankingMenu}
                                    theme={theme}
                                    activeDropdown={activeDropdown}
                                    toggleDropdown={toggleDropdown}
                                />
                            </span>
                            <span className="flex gap-9">
                                <NavDropdown
                                    label="Loans"
                                    id="Loans"
                                    items={loansMenu}
                                    theme={theme}
                                    activeDropdown={activeDropdown}
                                    toggleDropdown={toggleDropdown}
                                />
                                <NavDropdown
                                    label="About Us"
                                    id="about"
                                    items={aboutUsMenu}
                                    theme={theme}
                                    activeDropdown={activeDropdown}
                                    toggleDropdown={toggleDropdown}
                                />
                                <NavDropdown
                                    label="Help & Support"
                                    id="support"
                                    items={helpAndSupportMenu}
                                    theme={theme}
                                    activeDropdown={activeDropdown}
                                    toggleDropdown={toggleDropdown}
                                />
                            </span>
                        </div>
                    </div>
                </div>

                {/* Desktop Buttons */}
                <div className="hidden items-center gap-8 lg:flex lg:gap-12">
                    <div className="flex items-center gap-3">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`h-11 rounded-full border px-8 text-[15px] font-medium cursor-pointer transition-all duration-300 ${theme.buttonClass}`}
                        >
                            Join Alert
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`flex h-11.5 items-center rounded-full pl-7 pr-1 cursor-pointer text-[15px] font-medium transition-all duration-300 ${
                                theme.textClass === "text-white"
                                    ? "bg-white text-primary hover:bg-[#f8f8f8]"
                                    : "bg-primary text-white hover:bg-[#100b33]"
                            }`}
                        >
                            <span>Sign In</span>
                            <span
                                className={`ml-5 flex h-10 w-10 items-center justify-center rounded-full ${
                                    theme.textClass === "text-white"
                                        ? "bg-primary text-white"
                                        : "bg-white text-primary"
                                }`}
                            >
                                <ArrowRight size={18} strokeWidth={2.5} />
                            </span>
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <motion.button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    whileTap={{ scale: 0.85 }}
                    className={`lg:hidden p-2 rounded-lg transition relative`}
                >
                    {mobileMenuOpen ? (
                        <X size={24} className="text-[#23235A]" />
                    ) : (
                        <Menu size={24} className={theme.textClass} />
                    )}
                    {!mobileMenuOpen && (
                        <motion.span
                            className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-[#E8912D]"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    )}
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-30"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "-100%", opacity: 0 }}
                            transition={{ 
                                type: "spring", 
                                stiffness: 300, 
                                damping: 30,
                                mass: 0.8
                            }}
                            className="fixed top-0 left-0 h-full w-[320px] max-w-[85%] z-50 lg:hidden shadow-2xl"
                        >
                            <div className="flex flex-col h-full bg-white overflow-y-auto">
                                {/* Header with gradient */}
                                <div className="relative bg-gradient-to-r from-[#23235A] to-[#2d2d7a] p-6 pt-12 flex-shrink-0">
                                    <button
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                                    >
                                        <X size={20} className="text-white" />
                                    </button>
                                    
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                                            <img
                                                src="/logo2.jpg"
                                                alt="Alert MFB"
                                                className="h-10 w-10 object-contain rounded-full"
                                            />
                                        </div>
                                        <div>
                                            <h2 className="text-white font-bold text-lg">Alert MFB</h2>
                                            <p className="text-white/70 text-xs">Banking redefined</p>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Navigation Links */}
                                <div className="flex-1 p-4 space-y-1 overflow-y-auto">
                                    {[
                                        { id: 'personal', label: 'Personal Banking', icon: <User size={18} /> },
                                        { id: 'business', label: 'Business Banking', icon: <Building2 size={18} /> },
                                        { id: 'loans', label: 'Loans', icon: <HandCoins size={18} /> },
                                        { id: 'about', label: 'About Us', icon: <Info size={18} /> },
                                        { id: 'support', label: 'Help & Support', icon: <LifeBuoy size={18} /> }
                                    ].map((section, idx) => {
                                        const menuMap = {
                                            personal: personalBankingMenu,
                                            business: businessBankingMenu,
                                            loans: loansMenu,
                                            about: aboutUsMenu,
                                            support: helpAndSupportMenu
                                        };
                                        const items = menuMap[section.id as keyof typeof menuMap];

                                        return (
                                            <motion.div
                                                key={section.id}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: idx * 0.05 }}
                                                className="border-b border-gray-100 last:border-0"
                                            >
                                                <button
                                                    onClick={() => toggleMobileSection(section.id)}
                                                    className="flex items-center justify-between w-full py-3 px-3 rounded-xl hover:bg-orange-50/50 transition-all duration-300 group"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-[#E8912D]">{section.icon}</span>
                                                        <span className="text-sm font-semibold text-[#23235A] group-hover:text-[#E8912D] transition-colors">
                                                            {section.label}
                                                        </span>
                                                    </div>
                                                    <motion.div
                                                        animate={{ 
                                                            rotate: mobileExpandedSections.has(section.id) ? 180 : 0 
                                                        }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <ChevronDown size={16} className="text-[#23235A]" />
                                                    </motion.div>
                                                </button>
                                                
                                                <AnimatePresence mode="wait">
                                                    {mobileExpandedSections.has(section.id) && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="ml-6 pl-4 border-l-2 border-[#E8912D]/30 space-y-1 py-2">
                                                                {renderMobileSectionItems(items)}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </motion.div>
                                        );
                                    })}
                                </div>

                                {/* Bottom Actions */}
                                <div className="p-4 border-t border-gray-200 bg-gray-50 flex-shrink-0">
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="flex flex-col gap-3"
                                    >
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="h-11 rounded-full border-2 border-[#23235A] px-6 text-[15px] font-medium text-[#23235A] hover:bg-[#23235A] hover:text-white transition-all duration-300"
                                            onClick={() => handleMobileNavigation('/join')}
                                        >
                                            Join Alert
                                        </motion.button>

                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="flex h-12 items-center justify-center rounded-full pl-6 pr-1.5 text-[15px] font-medium bg-gradient-to-r from-[#23235A] to-[#2d2d7a] text-white hover:shadow-lg transition-all duration-300"
                                            onClick={() => handleMobileNavigation('/signin')}
                                        >
                                            <span>Sign In</span>
                                            <motion.span 
                                                className="ml-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#E8912D] text-white"
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <ArrowRight size={18} strokeWidth={2.5} />
                                            </motion.span>
                                        </motion.button>
                                    </motion.div>
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