import { useMemo, useState } from "react";
import { Info, ChevronDown, ArrowUpRight } from "lucide-react";

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
// Component
// ---------------------------------------------------------------------------

const FixedDeposits = () => {
  const [principal, setPrincipal] = useState(20_000);
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

  return (
    <div className="min-h-screen bg-white font-sans text-[#101B3D]">
      <div className="mx-auto max-w-3xl px-6 py-16">
        {/* ---------------------------------------------------------- Hero */}
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#B8672E]">
            FIXED DEPOSITS
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-[#0D1533] sm:text-[42px]">
            Grow your money.
            <br />
            Guaranteed Returns
          </h1>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-slate-500">
            Lock in a competitive rate for a fixed tenor and watch your money
            grow — with zero market risk.
          </p>

          <button className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#0D1533] py-2.5 pl-6 pr-2.5 text-sm font-medium text-white transition hover:bg-[#182252]">
            Start a Fixed Deposit
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </button>
        </div>

        {/* ---------------------------------------------------------- Table */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-100">
          <div className="grid grid-cols-2 bg-[#F3F3FA] px-6 py-3 text-[13px] font-medium text-slate-500">
            <span>Tenor</span>
            <span>Interest rates (p.a)</span>
          </div>
          {TENORS.map((t, i) => (
            <div
              key={t.label}
              className={`grid grid-cols-2 px-6 py-3.5 text-sm ${
                i !== TENORS.length - 1 ? "border-b border-slate-100" : ""
              }`}
            >
              <span className="text-[#0D1533]">{t.label}</span>
              <span className="font-medium text-[#0D1533]">
                {t.rate.toFixed(1)}% p.a
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#F3F3FA] px-3 py-2 text-xs text-slate-500">
          <Info className="h-3.5 w-3.5" />
          Minimum Deposit Amount: {naira(MIN_PRINCIPAL)}
        </div>

        {/* -------------------------------------------------- Image + Calc */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {/* Image card — swap the <img src> below for your own photo */}
          <div className="relative flex min-h-[380px] flex-col justify-end overflow-hidden rounded-2xl bg-[#0D1533] p-5">
            <div className="absolute left-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-[#0D1533]">
              A
            </div>

            {/* --- REPLACE THIS IMAGE --- */}
            <img
              src="/images/fixed-deposit-hero.jpg"
              alt="Replace with your preferred image"
              className="absolute inset-0 h-full w-full object-cover"
              onError={(e) => {
                // fallback so the layout still looks right before you add your image
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1533] via-[#0D1533]/10 to-transparent" />

            <div className="relative z-10 text-white">
              <p className="text-sm text-white/70">Principal + Tenor + Rate</p>
              <p className="text-lg font-semibold">= Maturity Amount</p>
            </div>
          </div>

          {/* Calculator card */}
          <div className="rounded-2xl border border-slate-100 p-5 shadow-sm">
            <p className="text-xs font-semibold tracking-[0.15em] text-[#B8672E]">
              FIXED DEPOSIT CALCULATOR
            </p>

            {/* Principal input */}
            <div className="mt-5">
              <div className="mb-1.5 flex items-center gap-1.5 text-xs text-slate-500">
                Principal Amount (₦)
                <Info className="h-3 w-3" />
              </div>
              <div className="relative">
                <input
                  type="text"
                  value={naira(principal)}
                  onChange={(e) => {
                    const val = Number(e.target.value.replace(/[^\d]/g, ""));
                    if (!Number.isNaN(val)) {
                      setPrincipal(
                        Math.min(MAX_PRINCIPAL, Math.max(0, val))
                      );
                    }
                  }}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-[#0D1533] outline-none focus:border-[#0D1533]"
                />
              </div>

              <input
                type="range"
                min={MIN_PRINCIPAL}
                max={MAX_PRINCIPAL}
                step={1000}
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                className="mt-4 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[#0D1533]"
              />
              <div className="mt-1 flex justify-between text-[11px] text-slate-400">
                <span>{naira(MIN_PRINCIPAL)}</span>
                <span>{naira(MAX_PRINCIPAL)}</span>
              </div>
            </div>

            {/* Tenor select */}
            <div className="mt-5">
              <div className="mb-1.5 flex items-center justify-between text-xs">
                <span className="text-slate-500">Tenor</span>
                <span className="text-[#B8672E]">
                  Available rate {tenor.rate.toFixed(1)}% p.a
                </span>
              </div>
              <div className="relative">
                <button
                  onClick={() => setTenorOpen((o) => !o)}
                  className="flex w-full items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-[#0D1533]"
                >
                  {tenor.label}
                  <ChevronDown className="h-4 w-4 text-slate-400" />
                </button>
                {tenorOpen && (
                  <div className="absolute z-20 mt-1 w-full overflow-hidden rounded-lg border border-slate-100 bg-white shadow-lg">
                    {TENORS.map((t, i) => (
                      <button
                        key={t.label}
                        onClick={() => {
                          setTenorIndex(i);
                          setTenorOpen(false);
                        }}
                        className="flex w-full items-center justify-between px-3 py-2 text-left text-sm hover:bg-slate-50"
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
            <div className="mt-5 space-y-3 border-t border-slate-100 pt-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Maturity Amount</span>
                <span className="font-semibold text-[#B8672E]">
                  {naira(maturityAmount)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Interest Earned</span>
                <span className="font-medium text-[#0D1533]">
                  {naira(interestEarned)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Effective Yield</span>
                <span className="font-medium text-[#0D1533]">
                  {effectiveYield.toFixed(2)}%
                </span>
              </div>
            </div>
            <p className="mt-3 text-[11px] leading-relaxed text-slate-400">
              Rate indicative only. Actual rates may vary based on prevailing
              market conditions.
            </p>
          </div>
        </div>

        {/* --------------------------------------------------------- Steps */}
        <div className="mt-10 grid grid-cols-3 gap-3">
          {[
            "Choose your amount & tenor",
            "Fund from an existing account",
            "Receive your Certificate of Deposit",
          ].map((label) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 rounded-xl bg-[#F7F7FB] px-3 py-6 text-center"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                <ArrowUpRight className="h-4 w-4 text-[#0D1533]" />
              </span>
              <span className="text-xs font-medium text-[#0D1533]">
                {label}
              </span>
            </div>
          ))}
        </div>

        <h2 className="mt-8 text-center text-lg font-bold text-[#0D1533] sm:text-left">
          Three Simple Steps to Open Fixed Deposit Amount
        </h2>
        <p className="mt-2 text-center text-xs leading-relaxed text-slate-500 sm:text-left">
          Step 1: Use the calculator above to find a tenor that matches your
          goal. Step 2: Transfer from your Current or Savings account, or via
          bank transfer and the last step: A digital certificate will be
          issued immediately and can be downloaded as a PDF.
        </p>
      </div>
    </div>
  );
};

export default FixedDeposits;