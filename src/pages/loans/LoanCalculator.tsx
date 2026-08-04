import React, { useMemo, useState } from "react";
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
    <label className="mb-2 flex items-center gap-1.5 text-[13px] font-medium text-[#3d3a5c]">
      {label}
    </label>
    <div className="flex items-center justify-between rounded-xl border border-[#eceaf6] bg-[#f7f6fc] px-4 py-3.5">
      <span className="text-[15px] font-semibold text-[#1a1a3c]">
        {prefix}
        {value}
        {suffix}
      </span>
      <Info className="h-4 w-4 text-[#b7b4cf]" strokeWidth={2} />
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
        <div className="absolute h-[3px] w-full rounded-full bg-[#e6e4f2]" />
        <div
          className="absolute h-[3px] rounded-full bg-[#2b2a4a]"
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
/*  Hero graphic (replaces the top image — bar chart illustration)    */
/* ------------------------------------------------------------------ */

const RateGraphic: React.FC = () => (
  <div className="relative flex h-full w-full items-end justify-center gap-6 overflow-hidden rounded-3xl bg-gradient-to-br from-[#2c2a52] via-[#332f5c] to-[#413c78] px-8 pb-8 pt-10">
    {/* bar 1 */}
    <div className="relative flex flex-col items-center">
      <span className="mb-2 text-sm font-semibold text-white">10%</span>
      <span className="mb-2 -mt-2 text-[10px] text-white/50">Interest</span>
      <div className="h-24 w-16 rounded-t-md bg-white/10" />
    </div>
    {/* bar 2 */}
    <div className="relative flex flex-col items-center">
      <span className="mb-2 text-sm font-semibold text-[#f5b93e]">25%</span>
      <span className="mb-2 -mt-2 text-[10px] text-white/50">Principal</span>
      <div className="h-40 w-16 rounded-t-md bg-gradient-to-t from-[#4a4580] to-[#f5b93e]/70 outline outline-1 outline-[#f5b93e]/40" />
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Image placeholder — swap the <img src> below with your own photo  */
/* ------------------------------------------------------------------ */

const PhotoPlaceholder: React.FC = () => (
  <div className="relative flex h-full w-full items-end overflow-hidden rounded-3xl bg-[#dcdcec]">
    {/*
      Replace this block with:
      <img src="/your-image.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
    */}
    <div className="absolute inset-0 flex items-center justify-center text-[13px] font-medium text-[#8b88a8]">
      Your image here
    </div>

    {/* brand mark, top-left */}
    <div className="absolute left-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm">
      <div className="h-3.5 w-3.5 rounded-full bg-[#1a1a3c]" />
    </div>

    {/* bottom gradient + caption */}
    <div className="relative z-10 w-full bg-gradient-to-t from-black/70 via-black/10 to-transparent p-5 pt-16">
      <p className="text-[15px] font-medium leading-snug text-white">
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
      {/* top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-[#6fa8f8] via-[#8f8bf0] to-[#b98bf0]" />

      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* header */}
        <div className="text-center">
          <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#e0a53f]">
            Loan Calculator
          </span>
          <h1 className="mt-3 text-[34px] font-bold leading-tight text-[#171736] sm:text-[38px]">
            See the numbers before you commit
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-[14px] text-[#7a7891]">
            Your monthly repayment, total interest, and effective annual rate —
            calculated in real time, no registration needed.
          </p>
        </div>

        {/* body */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,280px)_1fr]">
          {/* left: images */}
          <div className="flex flex-col gap-6">
            <div className="aspect-square">
              <RateGraphic />
            </div>
            <div className="aspect-[4/5]">
              <PhotoPlaceholder />
            </div>
          </div>

          {/* right: calculator card */}
          <div className="rounded-3xl bg-white p-7 shadow-[0_20px_60px_-15px_rgba(40,30,90,0.15)] sm:p-9">
            <div className="space-y-7">
              <div>
                <Field
                  label="Loan Amount (₦)"
                  value={amount.toLocaleString("en-NG")}
                  onChange={() => {}}
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
                  onChange={() => {}}
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
              <div className="rounded-2xl bg-[#f7f6fc] px-5 py-1">
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
          <button className="flex items-center gap-2 rounded-full border border-[#e2e0ee] bg-white px-6 py-3 text-[14px] font-medium text-[#1a1a3c] shadow-sm transition hover:bg-[#f7f6fc]">
            <Download className="h-4 w-4" />
            Download Amortisation Schedule
          </button>
          <button className="flex items-center gap-3 rounded-full bg-[#1a1a3c] px-6 py-3 text-[14px] font-medium text-white transition hover:bg-[#252552]">
            Apply for this loan
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
              <ArrowRight className="h-3.5 w-3.5" />
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
    className={`flex items-center justify-between py-3.5 ${
      last ? "" : "border-b border-[#e9e7f3]"
    }`}
  >
    <span className="text-[13px] text-[#8a87a3]">{label}</span>
    <span
      className={`text-[14px] font-semibold ${
        highlight ? "text-[#e0a53f]" : "text-[#1a1a3c]"
      }`}
    >
      {value}
    </span>
  </div>
);

export default LoanCalculator;