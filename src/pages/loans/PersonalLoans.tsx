import { ArrowRight, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const PersonalLoans = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger on next frame so the initial (hidden) state paints first
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const navItems = [
    { label: "Personal Loans", active: true },
    { label: "Salary Advance" },
    { label: "SME Loans" },
    { label: "Asset Finance" },
    { label: "Business Loans" },
    { label: "Loan Calculator" },
  ];

  // Find the active item label
  const activeLabel = navItems.find(item => item.active)?.label || navItems[0].label;

  // Shared transition helper: fade + slight rise, staggered by index
  const fadeUp = () =>
    `transition-all duration-700 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
    }`;

  const fadeUpStyle = (delayMs: number) => ({
    transitionDelay: `${delayMs}ms`,
  });

  return (
    <section className="relative w-full overflow-hidden rounded-[28px] bg-white">
      {/* Background image */}
      <div
        className={`relative min-h-[500px] w-full bg-cover bg-[center_20%] sm:min-h-[600px] lg:min-h-[620px] transition-transform duration-[3400ms] ease-out ${mounted ? "scale-100" : "scale-125"
          }`}
        style={{
          backgroundImage: "url('/loanBg2.jpg')",
        }}
      >
        {/* Hero copy */}
        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-5 pt-10 text-center sm:px-8 sm:pt-16 lg:px-10 lg:pt-20">
          <h1
            className={`max-w-3xl text-[32px] font-semibold leading-tight tracking-[-0.04em] text-primary sm:text-[38px] lg:text-[44px] ${fadeUp()}`}
            style={fadeUpStyle(0)}
          >
            The Financial Support you can count on
          </h1>

          <p
            className={`mt-4 max-w-xl text-[15px] leading-relaxed text-primary sm:text-base ${fadeUp()}`}
            style={fadeUpStyle(120)}
          >
            Every goal deserves the right support. Get fast, flexible loans
            tailored to your needs—with a team that's committed to helping you
            every step of the way.
          </p>

          <div
            className={`mt-6 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row ${fadeUp()}`}
            style={fadeUpStyle(240)}
          >
            <button className="group mx-auto  flex cursor-pointer items-center gap-3 rounded-full bg-primary py-1.5 pl-6 pr-2 text-sm font-medium text-white transition hover:bg-[#0F0C4A]">
              Start Loan Application

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary transition group-hover:translate-x-1">
                <ArrowRight className="h-4 w-4" />
              </span>
            </button>

            <button className="w-full group mx-auto  rounded-full border border-primary  py-2.5 text-sm  pl-6 pr-6 text-sm  font-medium text-primary transition  sm:w-auto">
              Calculate Repayments
            </button>
          </div>
        </div>

        {/* Bottom nav - Dropdown on mobile, pill on desktop */}
        <div
          className={`absolute bottom-16 left-0 right-0 z-10 flex justify-center px-4 ${fadeUp()}`}
          style={fadeUpStyle(360)}
        >
          {/* Mobile Dropdown */}
          <div className="w-full max-w-[280px] sm:hidden">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex w-full items-center justify-between rounded-xl bg-white/50 px-4 py-2.5 text-[13px] font-medium text-[#141852] shadow-lg shadow-black/5 backdrop-blur-sm transition hover:bg-white/70"
            >
              <span>{activeLabel}</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                strokeWidth={2.5}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute left-0 right-0 top-full mt-1 overflow-hidden rounded-xl bg-white/95 shadow-xl backdrop-blur-sm">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      setIsDropdownOpen(false);
                      // Handle navigation here
                    }}
                    className={`w-full px-4 py-2.5 text-left text-[13px] font-medium transition ${item.active
                        ? "bg-primary text-white"
                        : "text-[#141852]/80 hover:bg-[#141852]/5"
                      }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Pill */}
          <nav className="hidden max-w-6xl flex-wrap items-center justify-center gap-2 rounded-xl bg-white/50 p-2 shadow-lg shadow-black/5 backdrop-blur-sm sm:flex">
            {navItems.map((item) => (
              <button
                key={item.label}
                className={
                  item.active
                    ? "rounded-md bg-primary px-4 py-2 text-[13px] font-medium whitespace-nowrap text-white"
                    : "rounded-md px-4 py-2 text-[13px] font-medium whitespace-nowrap text-[#141852]/80 transition hover:bg-white/60"
                }
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Footer strip */}
      <div
        className={`flex bottom-40 flex-col items-center justify-between gap-4 border-t border-[#141852]/10 px-5 py-2 text-center text-[11px] text-[#141852]/60 sm:px-6 lg:flex-row lg:text-left ${fadeUp()}`}
        style={fadeUpStyle(480)}
      >
        <p className="max-w-3xl">
          Alert MicroFinance Bank Limited is licensed by the Central Bank of
          Nigeria (CBN). Deposits are insured by the NDIC.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 lg:justify-end">
          <a href="#" className="hover:text-[#141852]">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-[#141852]">
            Terms &amp; Conditions
          </a>
          <a href="#" className="hover:text-[#141852]">
            Cookie Policy
          </a>
          <a href="#" className="hover:text-[#141852]">
            AML/CFT Disclosure
          </a>
        </div>
      </div>
    </section>
  );
};

export default PersonalLoans;