import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { IoLogoApple } from "react-icons/io";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

type ThemeState = {
  textClass: string;
  buttonClass: string;
  bgClass: string;
};
type LayoutContext = {
  theme: ThemeState;
  setTheme: React.Dispatch<React.SetStateAction<ThemeState>>;
};




const images = [
  { src: "/heroBg7.jpg", textClass: "text-primary", buttonClass: "border-primary text-primary hover:bg-gray-50", bgClass: "bg-white", buttonClass2: "border-white text-primary bg-primary" },
  { src: "/h.png", textClass: "text-white", buttonClass: "border-white text-white", bgClass: "bg-primary", buttonClass2: "border-white text-primary bg-white" },
];

const quickLinks = [
  { label: "Our Products", id: "our-products" },
  { label: "Digital Banking", id: "digital-banking" },
  { label: "Point of Sale", id: "point-of-sale" },
  { label: "Cards", id: "cards" },
  { label: "SME Loans", id: "sme-loans" },
];

const Homepage = () => {
  const { setTheme } = useOutletContext<LayoutContext>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate()




  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // 10 seconds interval change
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 12000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const activeImage = images[activeIndex];

    setTheme({
      textClass: activeImage.textClass,
      buttonClass: activeImage.buttonClass,
      bgClass: activeImage.bgClass,
    });
  }, [activeIndex, setTheme]);

  const activeImage = images[activeIndex];


  // scroll function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    console.log(`Looking for element with id: ${id}`, element); // Debug log

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.warn(`Element with id "${id}" not found`);
    }
  };
  // Pure ethereal fade & deep scale transition
  const smokeZoomVariants: Variants = {
    enter: {
      opacity: 0,
      scale: 1.15, // Starts slightly zoomed in
      filter: "blur(2px)" // Slight smoke distortion upon entry
    },
    center: {
      opacity: 1,
      scale: 1, // Slowly settles down
      filter: "blur(0px)",
      transition: {
        duration: 2.5, // Ultra-smooth long blend
        ease: "easeOut",
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95, // Recedes backward gently
      filter: "blur(8px)", // Dissolves like smoke
      transition: {
        duration: 2.5,
        ease: "easeInOut",
      }
    }
  };


  const dropdownVariants: Variants = {
    hidden: {
      opacity: 0,
      height: 0,
      y: -8,
      transition: {
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      y: -8,
      transition: {
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
        when: "afterChildren",
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20, rotateX: -10 },
    visible: { opacity: 1, x: 0, rotateX: 0, transition: { duration: 0.25, ease: "easeOut" } }
  };

  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-blue-300">

      {/* Background Image Carousel*/}
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImage.src}
            src={activeImage.src}
            variants={smokeZoomVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full object-cover" 
            style={{
              objectPosition: "center center", 
            }}
          />
        </AnimatePresence>
      </div>

      {/* Hero Content Container */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center px-4 pt-60 text-center sm:px-8 sm:pt-24 lg:pt-28 md:pt-80"
      >
        <motion.h1
          key={`title-${activeIndex}`}
          initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={`mt-6 max-w-4xl text-3xl font-semibold leading-[1.05] tracking-[-2px] ${activeImage.textClass} sm:mt-8 sm:text-4xl lg:text-6xl`}
        >
          Banking That Moves at the
          <br />
          Speed of Your Growth.
        </motion.h1>

        <motion.p
          key={`desc-${activeIndex}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className={`mt-6 max-w-2xl text-sm leading-7 ${activeImage.textClass} sm:mt-10 sm:text-base lg:text-lg`}
        >
          Join over 30,000 Nigerians choosing smarter business loans,
          reliable asset management, and secure everyday payments.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          key={`buttons-${activeIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-8 flex flex-row sm:flex-row items-center justify-center gap-3 px-2 sm:mt-10 sm:gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex h-11 items-center gap-2 rounded-full px-5 text-sm transition sm:h-12 sm:px-7 cursor-pointer ${activeIndex === 0 ? "bg-primary text-white hover:bg-[#100d46]" : "bg-white text-primary hover:bg-white/90 "}`}
          >
            <IoLogoApple size={20} />
            <span className="text-[10px] sm:text-sm font-medium">Get on iPhone</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex h-11 items-center gap-2 rounded-full border bg-transparent px-5 text-sm transition hover:bg-white/10 sm:h-12 sm:px-7 cursor-pointer ${activeIndex === 0 ? "border-primary text-primary" : "border-white text-white"}`}
          >
            <IoLogoGooglePlaystore size={20} />
            <span className="text-[10px] sm:text-sm font-medium">Get on Android</span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Floating Navigation Quick Links - Desktop */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="hidden md:flex fixed bottom-18 left-1/2 z-50 w-auto max-w-5xl -translate-x-1/2 flex-col items-center gap-3 rounded-2xl bg-white/10 p-2 shadow-2xl backdrop-blur-md sm:flex-row sm:gap-0"
      >
        <motion.button
          onClick={handleLogoClick}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex h-12 w-12 flex-shrink-0 items-center cursor-pointer justify-center rounded-xl bg-white/20 sm:mr-2"
        >
          <img src="/logo2.jpg" className="h-10 w-10 rounded-lg object-contain" alt="Alert MFB Logo" />
        </motion.button>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.2,
              },
            },
          }}
          className={`flex items-center gap-3 justify-center sm:gap-2 ${activeImage.bgClass} p-1 rounded-xl flex-wrap sm:flex-nowrap`}
        >
          {quickLinks.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              variants={{
                hidden: { y: 20, opacity: 0, scale: 0.9 },
                visible: { y: 0, opacity: 1, scale: 1 },
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`whitespace-nowrap cursor-pointer px-3 py-2 text-xs sm:text-sm font-medium rounded-lg border border-white/30 transition shadow-xs hover:bg-white/20 ${activeImage.textClass}`}
            >
              {item.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.button
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="ml-0 whitespace-nowrap cursor-pointer rounded-xl bg-white px-4 py-2.5 text-xs font-medium border border-white/30 hover:bg-white/30 transition backdrop-blur-sm sm:ml-2 sm:px-6 sm:py-3 sm:text-sm"
        >
          Goldbucks
        </motion.button>
      </motion.div>

      {/* Floating Navigation - Mobile */}
      <div className="md:hidden fixed bottom-6 left-1/2 z-20 w-[calc(100%-1.5rem)] max-w-xs -translate-x-1/2 text-center">
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onClick={() => setNavOpen(!navOpen)}
          className="w-full rounded-2xl bg-primary backdrop-blur-sm p-3 shadow-2xl flex items-center transition-all duration-300 hover:bg-white/20 "
        >
          {/* Left side */}
          <div className="flex-1 flex items-center justify-center relative">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-xl bg-white/20"
            >
              <img
                src="/logo2.jpg"
                className="h-8 w-8 rounded-lg object-contain"
                alt="Alert MFB Logo"
              />
            </motion.div>

            <span className="text-lg font-medium text-white">
              Quick Links
            </span>
          </div>

          {/* Right side */}
          <motion.div
            animate={{ rotate: navOpen ? 180 : 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut" // Added easeInOut to chevron rotation
            }}
          >
            <ChevronDown size={20} className="text-white" />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {navOpen && (
            <motion.div
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{
                duration: 0.3,
                ease: "easeInOut" // Added easeInOut to dropdown container
              }}
              className={`flex flex-col p-1 bg-white border border-gray-200 shadow-md rounded-xl gap-0.5 mt-3`}
            >
              {quickLinks.map((item) => (
                <motion.button
                  key={item.id}
                  variants={itemVariants}
                  onClick={() => {
                    setNavOpen(false);
                    requestAnimationFrame(() => scrollToSection(item.id));
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut" // Added easeInOut to individual items
                  }}
                  className={`w-full text-center px-4 py-3 text-sm font-medium rounded-lg border border-gray-200 mb-2 p-2`}
                >
                  {item.label}
                </motion.button>
              ))}

              <motion.button
                variants={itemVariants}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut" 
                }}
                className={`w-full px-4 py-3 text-sm font-medium rounded-xl bg-white/20 hover:bg-white/30 transition backdrop-blur-sm border border-gray-200 text-center `}
              >
                Goldbucks
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Sticky Footer */}
      <div className="absolute bottom-0 z-10 flex h-auto w-full flex-col gap-2 border-t border-white/20 bg-white/95 px-4 py-2 text-[10px] text-gray-700 backdrop-blur-sm sm:h-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:text-xs lg:px-10">
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
    </section>
  );
};

export default Homepage;