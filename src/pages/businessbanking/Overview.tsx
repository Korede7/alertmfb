import { ArrowRight, ShieldCheck, } from "lucide-react";
import { useState, useEffect } from "react";

const NAVY = "#1B1A3F";


const Overview = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState<string | null>(null);

  useEffect(() => {
    setIsLoaded(true);
    setActiveNavItem("business-reports"); // Set default active item
  }, []);

  const navItems = [
    { id: "business-reports", label: "Business Reports" },
    { id: "bulk-transfers", label: "Bulk Transfers" },
    { id: "pos-payment", label: "POS & Payment Solutions" },
    { id: "cards", label: "Cards" },
    { id: "business-loans", label: "Business Loans" },
    { id: "user-management", label: "User Management" },
  ];

  const handleNavClick = (id: string) => {
    setActiveNavItem(id);
    console.log("Clicked navigation item:", id);
    // Scroll to the section with matching ID
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (

    <div className="min-h-screen w-full bg-gradient-to-t from-white via-white/50 to-transparent flex flex-col pb-12 sm:pb-16 md:pb-20">
      {/* ---------------- Hero ---------------- */}
      <div className={`pt-10 sm:pt-16 md:pt-20 pb-12 sm:pb-16 px-4 sm:px-6 text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary leading-tight max-w-3xl mx-auto mt-10 sm:mt-3 md:mt-4"
        >
          Banking built for Nigerian Businesses
        </h1>
        <p className="mt-3 sm:mt-4 text-primary max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
          From sole proprietors to established corporates — accounts, loans,
          payments and trade finance designed around how Nigerian businesses
          really operate.
        </p>

        <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button
            className="w-full sm:w-auto flex items-center justify-center gap-3 pl-6 pr-2 py-2 rounded-full text-white text-xs sm:text-sm font-medium"
            style={{ backgroundColor: NAVY }}
          >
            Open a Business Account
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-primary transition group-hover:translate-x-1">
              <ArrowRight className="h-4 w-4" />
            </span>
          </button>
          <button className="w-full sm:w-auto px-6 py-2 sm:py-2 rounded-full border border-primary text-xs sm:text-sm font-medium text-primary ">
            Business Internet Banking Login
          </button>
        </div>
      </div>

      {/* ---------------- Dashboard  ---------------- */}
      <div className={`relative mx-auto w-full max-w-7xl rounded-lg sm:rounded-xl md:rounded-2xl p-1 sm:p-1.5 px-4 sm:px-6 md:px-10 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <img src="/dashboard.png" alt="" className="w-full" />
      </div>

      {/* ---------------- Footer ---------------- */}
      <div className={`border-t border-gray-100 bg-gray-100 mt-auto transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-1 sm:py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 text-[10px] sm:text-[11px] text-gray-500">
          <div className="flex items-start sm:items-center gap-2">
            <ShieldCheck size={12} className="text-gray-400 shrink-0 mt-0.5 sm:mt-0" />
            <span className="leading-relaxed">Alert Microfinance Bank Limited is licensed by the Central Bank of Nigeria (CBN). Deposits are insured by the NDIC.</span>
          </div>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <span >Privacy Policy</span>
            <span>Terms &amp; Conditions</span>
            <span>Cookie Policy</span>
            <span>AML/CFT Disclosure</span>
          </div>
        </div>
      </div>



      {/* Fixed Navigation bar */}
      <div
        className={`fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 sm:gap-4 md:gap-6 px-4 sm:px-6 py-3 sm:py-4 text-[11px] sm:text-xs font-medium text-gray-600 shadow-lg rounded-md sm:rounded-lg max-w-[90vw] sm:max-w-xl md:max-w-4xl lg:max-w-7xl whitespace-nowrap overflow-x-auto transition-all duration-1000 delay-500 z-50 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        style={{ backgroundColor: "#F4F3FB" }}
      >
        {navItems.map((item) => (
          <span
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 flex-shrink-0 ${activeNavItem === item.id
              ? "text-white"
              : "text-gray-600 hover:text-gray-900"
              }`}
            style={activeNavItem === item.id ? { backgroundColor: NAVY } : {}}
          >
            {item.label}
          </span>
        ))}
      </div>


    </div>


  );
};

export default Overview;