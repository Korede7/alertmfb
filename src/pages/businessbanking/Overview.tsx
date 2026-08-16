import { ArrowRight, ShieldCheck, } from "lucide-react";
import { useState, useEffect } from "react";
import dashboardImg from "../../assets/dashboard.png";


const NAVY = "#0B0844";

const navItems = [
  { id: "business-reports", label: "Business Reports" },
  { id: "bulk-transfers", label: "Bulk Transfers" },
  { id: "pos-payment", label: "POS & Payment Solutions" },
  { id: "cards", label: "Cards" },
  { id: "business-loans", label: "Business Loans" },
  { id: "user-management", label: "User Management" },
];

const Overview = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState<string | null>("business-reports");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveNavItem(visibleEntry.target.id);
        }
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.7],
        rootMargin: "-20% 0px -40% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (id: string) => {
    setActiveNavItem(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (

    <div className="min-h-screen w-full flex flex-col sm:pb-16 md:pb-20 bg-white transition-all duration-300">


      {/* ---------------- Hero ---------------- */}
      <div className={`pt-20 sm:pt-16 md:pt-40 lg:pt-20 pb-12 sm:pb-16 px-4 sm:px-6 text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1
          className="text-xl sm:text-2xl md:text-2xl lg:text-4xl font-semibold text-primary leading-tight max-w-3xl mx-auto mt-10 sm:mt-3 md:mt-4 text-center"
        >
          Banking built for Nigerian Businesses
        </h1>
        <p className="mt-5 sm:mt-4 text-primary max-w-3xl mx-auto text-sm sm:text-base leading-relaxed font-normal">
          From sole proprietors to established corporates — accounts, loans,
          payments and trade finance designed around how Nigerian businesses
          really operate.
        </p>


        {/* ---------------- Hero Buttons ---------------- */}
        <div className="relative mt-5 sm:mt-3 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">

          {/* Subtle deep-purple glow behind buttons */}
          <div
            className="absolute left-1/2 top-1/2 -z-10 h-24 w-[90%] -translate-x-1/2 -translate-y-1/2 blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(0, 7, 67, 0.14) 0%, rgba(21, 0, 88, 0.67) 30%, transparent 55%)",
            }}
          />

          <button
            className="w-full sm:w-auto flex items-center justify-center gap-3 pl-6 pr-1.5 py-1.5 rounded-full text-white text-xs sm:text-sm font-medium bg-primary"
          >
            Open a Business Account

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-primary transition group-hover:translate-x-1">
              <ArrowRight className="h-4 w-4" />
            </span>
          </button>

          <button
            className="w-full sm:w-auto px-6 py-2 sm:py-2 rounded-full bg-white text-xs sm:text-sm font-medium text-primary"
          >
            Business Internet Banking Login
          </button>
        </div>
      </div>

      {/* ---------------- Dashboard  ---------------- */}
        <div className={`relative  bottom-10 mx-auto h-[250px] sm:h-[250px] lg:h-[340px] w-full max-w-5xl rounded-lg sm:rounded-xl md:rounded-2xl  sm:p-1.5 px-4 sm:px-6 md:px-10 overflow-hidden transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <img src={dashboardImg} alt="Dashboard" loading="eager" className="w-full h-fit sm:h-[475px] object-cover object-center" />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-[#ffffff] via-[#ffffff]/30 to-transparent" /> */}
      </div>



      {/* ---------------- Footer ---------------- */}
      <div className={`border-t border-gray-100 bg-[#EDEDF5] mt-auto z-50 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-1 sm:py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between md:items-center md:justify-between items-center justify-between gap-4 sm:gap-6 text-[10px] sm:text-[11px] text-gray-500">
          <div className="flex items-start sm:items-center gap-2">
            <ShieldCheck size={12} className="text-gray-400 shrink-0 mt-0.5 sm:mt-0" />
            <span className="text-xs">Alert Microfinance Bank Limited is licensed by the Central Bank of Nigeria (CBN). Deposits are insured by the NDIC.</span>
          </div>
          <div className="flex flex-col gap-3 sm:gap-4 text-xs sm:flex-row sm:items-center sm:justify-between md:items-center md:justify-between items-center text-center">
            <span >Privacy Policy</span>
            <span>Terms &amp; Conditions</span>
            <span>Cookie Policy</span>
            <span>AML/CFT Disclosure</span>
          </div>
        </div>
      </div>



      {/* Fixed Navigation bar */}
      <div
        className={`backdrop-blur-sm bg-white/10 fixed bottom-15 left-1/2 -translate-x-1/2 flex items-center gap-3 sm:gap-4 md:gap-6 px-4 sm:px-6 py-3 sm:py-4 text-[11px] sm:text-xs font-medium text-gray-600 shadow-lg rounded-md sm:rounded-lg max-w-[90vw] sm:max-w-xl md:max-w-4xl lg:max-w-7xl whitespace-nowrap overflow-x-auto transition-all duration-1000 delay-500 z-50 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        style={{ backgroundColor: "#ffffff86" }}
      >
        {navItems.map((item) => {
          const isActive = activeNavItem === item.id;

          return (
            <span
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 ease-out flex-shrink-0 ${isActive ? "text-white" : "text-gray-600 hover:text-gray-900"}`}
              style={{
                backgroundColor: isActive ? NAVY : "transparent",
                boxShadow: isActive ? "0 8px 20px rgba(11, 8, 68, 0.2)" : "none",
                transform: isActive ? "translateY(-1px) scale(1.02)" : "translateY(0) scale(1)",
                transition: "all 0.3s ease, transform 0.25s ease, background-color 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              {item.label}
            </span>
          );
        })}
      </div>
    </div>


  );
};

export default Overview;