import React, { useMemo, useState, useRef, useEffect } from "react";
import { Info, Download, ArrowRight } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

const formatNaira = (value: number) =>
  `₦${Math.round(value).toLocaleString("en-NG")}`;

/* ------------------------------------------------------------------ */
/*  Small reusable pieces                                             */
/* ------------------------------------------------------------------ */

interface FieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  prefix?: string;
  suffix?: string;
}

const Field: React.FC<FieldProps> = ({ label, value, prefix, suffix }) => (
  <div>
    <label className="mb-2 flex items-center gap-1.5 text-[13px] font-semibold text-primary">
      {label}
    </label>
    <div className="flex items-center justify-between rounded-xl border border-[#eceaf6]  px-4 py-3.5">
      <span className="text-[15px] font-semibold text-[#1a1a3c]">
        {prefix}
        {value}
        {suffix}
      </span>
      <Info className="h-6 w-6 text-gray-400" strokeWidth={2} />
    </div>
  </div>
);

interface SliderProps {
  min: number;
  max: number;
  value: number;
  onChange: (v: number) => void;
  minLabel: string;
  maxLabel: string;
}

const Slider: React.FC<SliderProps> = ({ min, max, value, onChange, minLabel, maxLabel }) => {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="mt-4">
      <div className="relative flex h-4 items-center">
        <div className="absolute h-4 w-full rounded-full border border-[#eceaf6] bg-gradient-to-r from-[#0B0844] via-[#0B0844]/30 to-white/90" />
        <div
          className="absolute h-4 rounded-full bg-[#2b2a4a]"
          style={{ width: `${pct}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="loan-slider absolute w-full appearance-none bg-transparent"
          style={{ ["--thumb-pos" as any]: `${pct}%` }}
        />
      </div>
      <div className="mt-2 flex justify-between text-[12px] text-[#9b98b4]">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Hero graphic    */
/* ------------------------------------------------------------------ */

const RateGraphic: React.FC<{ animationProgress: number }> = ({ animationProgress }) => (
  <div
    className="relative flex h-full w-full items-end justify-center gap-6 overflow-hidden rounded-3xl px-8 pb-8 pt-10"
    style={{
  background: `
    radial-gradient(
      circle at 0% 0%,
      rgba(255, 255, 255, 0.42) 0%,
      rgba(255, 255, 255, 0.29) 22%,
      transparent 45%
    ),
    linear-gradient(
      135deg,
      #1B146B 0%,
      #140F5E 30%,
      #0B0844 65%,
      #100d42 100%
    )
  `,
}}
  >
    {/* Bar 1 */}
    <div className="relative flex flex-col items-center">
      <span className="mb-2 text-lg font-semibold text-white">{Math.round(10 * animationProgress)}%</span>
      <span className="mb-6 -mt-2 text-[10px] text-white/50">Interest</span>

      {/* Outline */}
      <div
        className="relative p-[2px] transition-all duration-300"
        style={{
          height: `${80 * animationProgress}px`,
          width: "88px",
          clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)",
          background:
            "linear-gradient(to bottom, rgba(255,255,255,.9) 0%, rgba(255, 255, 255, 0.17) 35%, rgba(255,255,255,0) 65%)",
        }}
      >
        {/* Fill */}
        <div
          className="h-full w-full transition-all duration-300"
          style={{
            clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)",
            background:
              "linear-gradient(to top, rgba(168, 167, 186, 0.29), rgba(255, 255, 255, 0.3))",
          }}
        />
      </div>
    </div>

    {/* Bar 2 */}
    <div className="relative flex flex-col items-center">
      <span className="mb-2 text-lg font-semibold text-[#FFC100]">{Math.round(25 * animationProgress)}%</span>
      <span className="mb-6 -mt-2 text-[10px] text-[#FFC100]">
        Principal
      </span>

      {/* Outline */}
      <div
        className="relative p-[2px] transition-all duration-300"
        style={{
          height: `${160 * animationProgress}px`,
          width: "88px",
          clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)",
          background:
            "linear-gradient(to bottom, rgb(228, 196, 101) 0%, rgba(255, 191, 0, 0.11) 35%, rgba(255,193,0,0) 65%)",
        }}
      >
        {/* Fill */}
        <div
          className="h-full w-full transition-all duration-300"
          style={{
            clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)",
            background:
              "linear-gradient(to top, rgba(11, 8, 68, 0.34), rgba(202, 144, 28, 0.42))",
          }}
        />
      </div>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Image placeholder — swap the <img src> below with your own photo  */
/* ------------------------------------------------------------------ */

const PhotoPlaceholder: React.FC = () => (
  <div className="relative flex h-[450px] w-full items-end overflow-hidden rounded-3xl bg-[#dcdcec]">
    <img src="/getstarted30.png" alt="" className="absolute inset-0 h-full w-full object-cover" />
    {/* brand mark, top-left */}
    <div className="absolute left-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full  shadow-sm">
      <img src="/logo2.jpg" className="h-full w-full rounded-full bg-[#1a1a3c]" alt="" />
    </div>

    {/* bottom gradient + caption */}
    <div className="relative z-10 w-full bg-gradient-to-t from-black via-purple-950 to-transparent p-5 pt-16">
      <p className="text-[15px] font-light text-white">
        Your monthly repayment,
        <br />
        total interest,
        <br />
        and effective annual rate
      </p>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Main component                                                    */
/* ------------------------------------------------------------------ */

const LoanCalculator: React.FC = () => {
  const [amount, setAmount] = useState(20000);
  const [rate, setRate] = useState(24);
  const [tenor, setTenor] = useState(12);
  const [animationProgress, setAnimationProgress] = useState(0);
  const graphicRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && animationProgress === 0) {
          // Trigger animation
          let progress = 0;
          const interval = setInterval(() => {
            progress += 0.01;
            if (progress >= 1) {
              progress = 1;
              clearInterval(interval);
            }
            setAnimationProgress(progress);
          }, 20);
        }
      },
      { threshold: 0.3 }
    );

    if (graphicRef.current) {
      observer.observe(graphicRef.current);
    }

    return () => {
      if (graphicRef.current) {
        observer.unobserve(graphicRef.current);
      }
    };
  }, [animationProgress]);

  const { monthly, totalRepayable, effectiveRate, totalInterest } = useMemo(() => {
    const monthlyRate = rate / 100 / 12;
    const n = tenor;
    const m =
      monthlyRate === 0
        ? amount / n
        : (amount * monthlyRate * Math.pow(1 + monthlyRate, n)) /
        (Math.pow(1 + monthlyRate, n) - 1);
    const total = m * n;
    const eff = (Math.pow(1 + monthlyRate, 12) - 1) * 100;
    return {
      monthly: m,
      totalRepayable: total,
      effectiveRate: eff,
      totalInterest: total - amount,
    };
  }, [amount, rate, tenor]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-[#f6f5fb] to-[#e6e1f5]">


      <div className="mx-auto max-w-4xl px-6 py-16">
        {/* header */}
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-[0.4em] text-secondary">
            Loan Calculator
          </span>
          <h1 className="mt-3 text-lg font-semibold leading-tight text-primary sm:text-[38px]">
            See the numbers before you commit
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-[14px] text-primary sm:text-[15px]">
            Your monthly repayment, total interest, and effective annual rate —
            calculated in real time, no registration needed.
          </p>
        </div>

        {/* body */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,280px)_1fr]">
          {/* left: images */}
          <div className="flex flex-col gap-6">
            <div className="aspect-square" ref={graphicRef}>
              <RateGraphic animationProgress={animationProgress} />
            </div>
            <div className="aspect-[4/5]">
              <PhotoPlaceholder />
            </div>
          </div>

          {/* right: calculator card */}
          <div className="rounded-2xl bg-white p-7 shadow-[0_20px_60px_-15px_rgba(40,30,90,0.15)] sm:p-9">
            <div className="space-y-7">
              <div>
                <Field
                  label="Loan Amount (₦)"
                  value={amount.toLocaleString("en-NG")}
                  onChange={() => { }}
                  prefix="₦"
                />
                <Slider
                  min={50000}
                  max={5000000}
                  value={amount}
                  onChange={setAmount}
                  minLabel="₦50,000"
                  maxLabel="₦5,000,000"
                />
              </div>

              <Field
                label="Interest Rate (% p.a.)"
                value={String(rate)}
                onChange={(v) => setRate(Number(v) || 0)}
              />

              <div>
                <Field
                  label="Tenor (months)"
                  value={String(tenor)}
                  onChange={() => { }}
                />
                <Slider
                  min={1}
                  max={84}
                  value={tenor}
                  onChange={setTenor}
                  minLabel="1 month"
                  maxLabel="84 months"
                />
              </div>

              {/* results */}
              <div className="rounded-2xl bg-gray px-5 py-1">
                <Row label="Monthly Repayment" value={formatNaira(monthly)} highlight />
                <Row label="Total Repayable" value={formatNaira(totalRepayable)} />
                <Row
                  label="Effective Annual Rate"
                  value={`${effectiveRate.toFixed(1)}%`}
                />
                <Row label="Total Interest" value={formatNaira(totalInterest)} last />
              </div>
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="flex items-center gap-2 rounded-full  px-6 py-3 text-[14px] font-medium text-primary border border-primary transition hover:bg-primary hover:text-white cursor-pointer hover:bg-gray-100">
            <Download className="h-4 w-4 text-primary" />
            Download Amortisation Schedule
          </button>
           <button className="  flex cursor-pointer items-center gap-3 rounded-full bg-primary py-1.5 pl-6 pr-2 text-sm font-medium text-white transition hover:bg-[#0F0C4A]">
              Apply For The Loan

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary transition group-hover:translate-x-1">
                <ArrowRight className="h-4 w-4" />
              </span>
            </button>
        </div>
      </div>

      <style>{`
        .loan-slider {
          height: 16px;
          cursor: pointer;
        }
        .loan-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 9999px;
          background: #1a1a3c;
          border: 3px solid #ffffff;
          box-shadow: 0 1px 4px rgba(0,0,0,0.25);
          margin-top: 0px;
        }
        .loan-slider::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 9999px;
          background: #1a1a3c;
          border: 3px solid #ffffff;
          box-shadow: 0 1px 4px rgba(0,0,0,0.25);
        }
        .loan-slider::-webkit-slider-runnable-track {
          background: transparent;
        }
        .loan-slider::-moz-range-track {
          background: transparent;
        }
      `}</style>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Results row                                                       */
/* ------------------------------------------------------------------ */

const Row: React.FC<{ label: string; value: string; highlight?: boolean; last?: boolean }> = ({
  label,
  value,
  highlight,
  last,
}) => (
  <div
    className={`flex items-center justify-between py-3.5 ${last ? "" : "border-b-2 border-[#e9e7f3]/80"
      }`}
  >
    <span className="text-[13px] text-[#8a87a3]">{label}</span>
    <span
      className={`text-[14px] font-semibold ${highlight ? "text-[#e0a53f]" : "text-[#1a1a3c]"
        }`}
    >
      {value}
    </span>
  </div>
);

export default LoanCalculator;