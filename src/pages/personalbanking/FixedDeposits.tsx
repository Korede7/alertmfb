import { useMemo, useState, useEffect, useRef } from "react";
import { Info, ArrowRight, ArrowRightFromLine } from "lucide-react";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const TENORS = [
  { label: "30 Days", days: 30, rate: 9.5 },
  { label: "60 Days", days: 60, rate: 10.8 },
  { label: "90 Days", days: 90, rate: 11.5 },
  { label: "180 Days", days: 180, rate: 13.0 },
  { label: "270 Days", days: 270, rate: 14.3 },
  { label: "365 Days", days: 365, rate: 15.8 },
];

const MIN_PRINCIPAL = 50_000;
const MAX_PRINCIPAL = 5_000_000;

const naira = (n: number) =>
  `₦${Math.round(n).toLocaleString("en-NG")}`;

// ---------------------------------------------------------------------------
// Intersection Observer Hook
// ---------------------------------------------------------------------------

const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return { ref, isVisible };
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const FixedDeposits = () => {
  const [principal, setPrincipal] = useState(20000);
  const [tenorIndex, setTenorIndex] = useState(2); // 90 Days
  const [tenorOpen, setTenorOpen] = useState(false);

  const tenor = TENORS[tenorIndex];

  const { interestEarned, maturityAmount, effectiveYield } = useMemo(() => {
    const interest = principal * (tenor.rate / 100) * (tenor.days / 365);
    return {
      interestEarned: interest,
      maturityAmount: principal + interest,
      effectiveYield: (interest / principal) * 100,
    };
  }, [principal, tenor]);

  // Animation refs
  const heroAnimation = useScrollAnimation();
  const tableAnimation = useScrollAnimation();
  const calculatorAnimation = useScrollAnimation();
  const stepsAnimation = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-3 sm:px-4 py-4 sm:py-8">
        {/* ---------------------------------------------------------- Hero */}
        <div 
          ref={heroAnimation.ref}
          className={`text-center transition-all duration-1000 ease-out ${
            heroAnimation.isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-[10px] font-semibold tracking-[10px] text-secondary">
            FIXED DEPOSITS
          </p>
          <h1 className="mt-2 text-2xl sm:text-6xl font-semibold  text-primary">
            Grow your money.
            <br />
            Guaranteed Returns
          </h1>
          <p className="mx-auto mt-3  text-[16px] text-primary px-3 sm:px-0">
            Lock in a competitive rate for a fixed tenor and watch your money
            grow — with zero market risk.
          </p>

          <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#0D1533] py-2 pl-5 pr-2 text-xs font-medium text-white transition hover:bg-[#182252] hover:scale-105 active:scale-95">
            Start a Fixed Deposit
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform group-hover:rotate-45">
              <ArrowRight className="h-3 w-3 text-primary" />
            </span>
          </button>
        </div>

        {/* ---------------------------------------------------------- Table */}
        <div 
          ref={tableAnimation.ref}
          className={`mt-8 overflow-hidden text-left px-2 sm:px-0 transition-all duration-1000 ease-out delay-300 ${
            tableAnimation.isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mt-6 grid sm:grid-cols-[2fr_2fr] bg-gray px-3 sm:px-4 py-2 text-[13px] font-medium">
            <span className="text-primary">Tenor</span>
            <span className="text-primary">Interest rates (p.a)</span>
          </div>
          {TENORS.map((t, i) => (
            <div
              key={t.label}
              className={`grid grid-cols-2 px-2 sm:px-3 py-4.5 sm:py-3 text-xs ${
                i !== TENORS.length - 1 ? "border-b border-slate-100" : ""
              } transition-all duration-500 hover:bg-slate-50/50`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <span className="text-primary mb-6">{t.label}</span>
              <span className="text-primary text-left">
                {t.rate.toFixed(1)}% p.a
              </span>
            </div>
          ))}
        </div>

        <div className={`mt-3 inline-flex items-center gap-1.5 rounded-lg bg-gray px-2.5 py-1.5 text-[10px] text-primary mx-2 sm:mx-0 transition-all duration-700 delay-500 ${
          tableAnimation.isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-5"
        }`}>
          <Info className="h-3 w-3 flex-shrink-0" />
          Minimum Deposit Amount: {naira(MIN_PRINCIPAL)}
        </div>

        {/* -------------------------------------------------- Image + Calc */}
        <div 
          ref={calculatorAnimation.ref}
          className={`mt-6 grid gap-4 sm:grid-cols-[1fr_2fr] px-2 sm:px-0 transition-all duration-1000 ease-out delay-700 ${
            calculatorAnimation.isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Image card */}
          <div
            className="relative flex min-h-[240px] sm:min-h-[500px] flex-col justify-end overflow-hidden rounded-2xl p-4 bg-cover bg-center bg-repeat transition-transform duration-500 hover:scale-[1.02]"
            style={{
              backgroundImage: "url('/getstarted30.png')",
            }}
          >
            <div className="absolute left-3 top-3 z-10 flex h-8 w-10 items-center justify-center rounded-full">
              <img src="/logo2.jpg" className="rounded-full" alt="Logo" />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1533] via-[#0D1533]/20 to-transparent" />

            <div className="relative z-10 text-white">
              <p className="text-[10px] text-white tracking-[0.2em]">Principal + Tenor + Rate</p>
              <p className="text-sm font-semibold tracking-[0.1em]">= Maturity Amount</p>
            </div>
          </div>

          {/* Calculator card */}
          <div className="rounded-xl  border border-slate-100 p-6 sm:p-6 shadow-lg space-y-6 max-w-2xl transition-all duration-500 hover:shadow-md">
            <p className="text-[10px] font-medium text-center tracking-[0.4em] text-secondary mb-4 p-1">
              FIXED DEPOSIT CALCULATOR
            </p>

            {/* Principal input */}
            <div className="mt-3">
              <div className="mb-2.5 flex items-center gap-1.5 text-[11px] text-primary font-medium">
                Principal Amount (₦)
              </div>
              <div className="relative w-full mb-3">
                <input
                  type="text"
                  value={naira(principal)}
                  onChange={(e) => {
                    const val = Number(e.target.value.replace(/[^\d]/g, ""));
                    if (!Number.isNaN(val)) {
                      setPrincipal(Math.min(MAX_PRINCIPAL, Math.max(0, val)));
                    }
                  }}
                  className="w-full rounded-lg border border-slate-200 px-3 py-3 pr-8 text-xs font-medium text-[#0D1533] outline-none focus:border-[#0D1533] transition-all duration-300 focus:shadow-md"
                />

                <Info className="absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-500 pointer-events-none" />
              </div>

              <input
                type="range"
                min={MIN_PRINCIPAL}
                max={MAX_PRINCIPAL}
                step={1000}
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                className="mt-3 h-3 w-full cursor-pointer appearance-none rounded-full bg-gradient-to-r from-gray-800 via-gray-400 to-white transition-all duration-300 hover:h-4 shadow-sm"
              />
              <div className="mt-1 flex justify-between text-[12px] text-slate-400">
                <span>{naira(MIN_PRINCIPAL)}</span>
                <span>{naira(MAX_PRINCIPAL)}</span>
              </div>
            </div>

            {/* Tenor select */}
            <div className="mt-4">
              <div className="mb-1.5 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] gap-1.5 sm:gap-0">
                <span className="text-primary font-medium">Tenor</span>
                <span className="text-primary px-3 py-1 text-[10px] bg-[#F5F5F9] font-light rounded-md transition-all duration-300 hover:bg-[#EDEDF5]">
                  Available rate <span className="font-semibold text-primary">{tenor.rate.toFixed(1)}% p.a</span>
                </span>
              </div>
              <div className="relative">
                <button
                  onClick={() => setTenorOpen((o) => !o)}
                  className="flex w-full items-center justify-between rounded-lg border border-slate-200 px-3 py-3 text-xs font-medium text-[#0D1533] transition-all duration-300 hover:border-slate-300 hover:shadow-sm"
                >
                  {tenor.label}
                  <Info className={`h-3.5 w-3.5 text-slate-400 transition-transform duration-300 ${tenorOpen ? "rotate-180" : ""}`} />
                </button>
                {tenorOpen && (
                  <div className="absolute z-20 mt-1 w-full overflow-hidden rounded-lg border border-slate-100 bg-white shadow-lg animate-in slide-in-from-top-2 duration-200">
                    {TENORS.map((t, i) => (
                      <button
                        key={t.label}
                        onClick={() => {
                          setTenorIndex(i);
                          setTenorOpen(false);
                        }}
                        className="flex w-full items-center justify-between px-3 py-1.5 text-left text-xs hover:bg-slate-50 transition-colors duration-200"
                      >
                        <span>{t.label}</span>
                        <span className="text-slate-400">
                          {t.rate.toFixed(1)}% p.a
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Summary */}
            <div className="mt-4 rounded-xl space-y-6 border-t border-slate-100 bg-gray p-3 sm:p-5 pt-4 sm:pt-5 text-xs">
              <div className="flex items-center justify-between border-b border-gray-400 pb-3 transition-all duration-300 hover:pl-2">
                <span className="text-primary font-light">Maturity Amount</span>
                <span className="font-semibold text-secondary">
                  {naira(maturityAmount)}
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between border-b border-gray-400 pb-3 transition-all duration-300 hover:pl-2">
                <span className="text-primary font-light">Interest Earned</span>
                <span className="font-medium text-[#0D1533]">
                  {naira(interestEarned)}
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between border-b border-gray-400 pb-3 transition-all duration-300 hover:pl-2">
                <span className="text-primary font-light">Effective Yield</span>
                <span className="font-medium text-[#0D1533]">
                  {effectiveYield.toFixed(2)}%
                </span>
              </div>
              <p className="mt-2 text-[10px] leading-relaxed text-slate-400">
                Rate indicative only. Actual rates may vary based on prevailing
                market conditions.
              </p>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div 
          ref={stepsAnimation.ref}
          className={`shadow-lg bg-white p-3 sm:p-4 mt-4 rounded-2xl mx-2 sm:mx-0 transition-all duration-1000 ease-out delay-1000 ${
            stepsAnimation.isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}
         >
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2">
          {[
            "Choose your amount & tenor",
            "Fund from an existing account",
            "Receive your Certificate of Deposit",
          ].map((label, index) => (
            <div
              key={label}
              className="flex flex-col items-center gap-4 rounded-2xl py-7 bg-gray px-3 py-4 text-center"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-300 border border-white text-primary shadow-lg ">
                <ArrowRightFromLine className="h-3 w-3 text-[#0D1533]" />
              </span>
              <span className="text-[12px] font-medium text-primary">
                {label}
              </span>
            </div>
          ))}
        </div>

        <h2 className="mt-6 text-center text-base font-semibold text-primary sm:text-left">
          Three Simple Steps to Open Fixed Deposit Amount
        </h2>
        <p className="mt-1.5 text-center text-[12px] leading-relaxed text-slate-500 sm:text-left">
          Step 1: Use the calculator above to find a tenor that matches your
          goal. Step 2: Transfer from your Current or Savings account, or via
          bank transfer and the last step: A digital certificate will be
          issued immediately and can be downloaded as a PDF.
        </p>
        </div>
      </div>
    </div>
  );
};

export default FixedDeposits;