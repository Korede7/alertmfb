import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { IoLogoApple } from "react-icons/io";
import { IoLogoGooglePlaystore } from "react-icons/io5";

type ThemeState = {
  textClass: string;
  buttonClass: string;
  bgClass: string;
};

type HomepageProps = {
  onThemeChange: (theme: ThemeState) => void;
};

const images = [
  { src: "/heroBg2.jpg", textClass: "text-[#17145D]", buttonClass: "border-[#17145D] text-[#17145D]", bgClass: "bg-white", buttonClass2: "border-white text-[#17145D] bg--[#17145D]" },
  { src: "/heroBg24.jpg", textClass: "text-white", buttonClass: "border-white text-white", bgClass: "bg-[#17145D]", buttonClass2: "border-=white text-[#17145D] bg-white" },
];

const Homepage = ({ onThemeChange }: HomepageProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    // 10 seconds interval change
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 12000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const activeImage = images[activeIndex];
    onThemeChange({
      textClass: activeImage.textClass,
      buttonClass: activeImage.buttonClass,
      bgClass: activeImage.bgClass,
    });
  }, [activeIndex, onThemeChange]);

  const activeImage = images[activeIndex];

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

  // Dropdown animation variants
  const dropdownVariants: Variants = {
    hidden: { opacity: 0, y: -20, scale: 0.9, transition: { duration: 0.2, ease: "easeInOut" } },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: "easeOut", staggerChildren: 0.05, delayChildren: 0.05 } },
    exit: { opacity: 0, y: -20, scale: 0.9, transition: { duration: 0.2, ease: "easeInOut" } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20, rotateX: -10 },
    visible: { opacity: 1, x: 0, rotateX: 0, transition: { duration: 0.25, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Image Carousel with Zoom */}
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImage.src}
            variants={smokeZoomVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${activeImage.src}')`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% auto",
              backgroundAttachment: "scroll",
            }}
          />
        </AnimatePresence>
      </div>

      {/* Shifting Ethereal "Smoke" Overlay */}
      {/* Using a shifting dynamic gradient with high blur to simulate passing clouds/smoke */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0) 50%)",
            "radial-gradient(circle at 80% 70%, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0) 60%)",
            "radial-gradient(circle at 40% 80%, rgba(255,255,255,0.12) 0%, rgba(0,0,0,0) 50%)",
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0) 50%)"
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 pointer-events-none z-[2] mix-blend-screen backdrop-blur-[1px]"
      />



      {/* Hero Content Container */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center px-4 pt-20 text-center sm:px-8 sm:pt-24 lg:pt-28"
      >
        <motion.h1
          key={`title-${activeIndex}`}
          initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={`mt-6 max-w-4xl text-2xl font-bold leading-[1.05] tracking-[-2px] ${activeImage.textClass} sm:mt-8 sm:text-4xl lg:text-6xl`}
        >
          Banking That Moves at the
          <br />
          Speed of Your Growth
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
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 px-2 sm:mt-10 sm:gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex h-11 items-center gap-2 rounded-full px-5 text-sm transition sm:h-12 sm:px-7 ${activeIndex === 0 ? "bg-[#17145D] text-white hover:bg-[#100d46]" : "bg-white text-[#17145D] hover:bg-white/90"}`}
          >
            <IoLogoApple size={18} />
            <span className="text-sm font-medium">Get on iPhone</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex h-11 items-center gap-2 rounded-full border bg-transparent px-5 text-sm transition hover:bg-white/10 sm:h-12 sm:px-7 ${activeIndex === 0 ? "border-[#17145D] text-[#17145D]" : "border-white text-white"}`}
          >
            <IoLogoGooglePlaystore size={18} />
            <span className="text-sm font-medium">Get on Android</span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Floating Navigation - Desktop */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="hidden md:flex absolute bottom-25 left-1/2 z-10 w-auto max-w-5xl -translate-x-1/2 flex-col items-center gap-3 rounded-2xl bg-white/10 p-2 shadow-2xl backdrop-blur-md sm:bottom-24 sm:flex-row sm:gap-0"
      >
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/20 sm:mr-2">
          <img src="/logo2.jpg" className="h-10 w-10 rounded-lg object-contain" alt="Alert MFB Logo" />
        </div>

        <div className={`flex items-center gap-3 justify-center sm:gap-2 ${activeImage.bgClass} p-1 rounded-xl flex-wrap sm:flex-nowrap`}>
          {["Our Products", "Digital Banking", "Point of Sale", "Cards", "SME Loans"].map((text) => (
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              key={text}
              className={`whitespace-nowrap cursor-pointer px-3 py-2 text-xs sm:text-sm font-medium rounded-lg border border-white/30 transition hover:bg-white/20 ${activeImage.textClass}`}
            >
              {text}
            </motion.button>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="ml-0 whitespace-nowrap cursor-pointer rounded-xl bg-white px-4 py-2.5 text-xs font-medium border border-white/30 hover:bg-white/30 transition backdrop-blur-sm sm:ml-2 sm:px-6 sm:py-3 sm:text-sm"
        >
          Goldbucks
        </motion.button>
      </motion.div>

      {/* Floating Navigation - Mobile */}
      <div className="md:hidden absolute bottom-20 left-1/2 z-10 w-[calc(100%-1.5rem)] max-w-xs -translate-x-1/2">
        <button
          onClick={() => setNavOpen(!navOpen)}
          className={`w-full rounded-2xl bg-white/10 backdrop-blur-sm p-3 shadow-2xl flex items-center justify-between ${activeImage.textClass} transition-all duration-300 hover:bg-white/20`}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/20">
              <img src="/logo2.jpg" className="h-8 w-8 rounded-lg object-contain" alt="Alert MFB Logo" />
            </div>
            <span className="text-sm font-medium">Quick Links</span>
          </div>
          <motion.div animate={{ rotate: navOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown size={20} />
          </motion.div>
        </button>

        <AnimatePresence>
          {navOpen && (
            <motion.div
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mt-2 rounded-2xl bg-white/10 backdrop-blur-sm p-2 shadow-2xl overflow-hidden border border-white/10"
            >
              <div className={`flex flex-col ${activeImage.bgClass} p-1 rounded-xl gap-0.5`}>
                {["Our Products", "Digital Banking", "Point of Sale", "Cards", "SME Loans"].map((text) => (
                  <motion.button
                    variants={itemVariants}
                    key={text}
                    className={`w-full text-left px-4 py-3 text-sm font-medium rounded-lg border border-white/30 transition hover:bg-white/20 ${activeImage.textClass}`}
                  >
                    {text}
                  </motion.button>
                ))}
                <motion.button variants={itemVariants} className={`w-full text-left px-4 py-3 text-sm font-medium rounded-xl bg-white/20 hover:bg-white/30 transition backdrop-blur-sm ${activeImage.textClass}`}>
                  Goldbucks
                </motion.button>
              </div>
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