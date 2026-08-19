import { ArrowUpRight, ArrowRight } from "lucide-react";

const steps = [
  { label: "Application" },
  { label: "Initial Interview" },
  { label: "Skills Assessment" },
  { label: "Offer & Onboarding" },
];

const perks = [
  "Health Insurance",
  "Performance Bonuses",
  "Inclusive Culture",
  "Growth paths",
];

const JoinUs = () => {
  return (
    <div className="w-full bg-white">
      {/* Top accent bar */}
      <div className="h-1 w-full bg-secondary" />

      <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-16">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <span className="mb-4 text-[10px] font-semibold tracking-[0.55em] text-secondary">
            JOIN US
          </span>

          <h1 className="max-w-[560px] text-2xl font-semibold leading-[1.15] tracking-[-0.03em] text-primary sm:text-3xl md:text-[34px]">
            Build the bank Nigeria needs.
            <br />
            From the Inside.
          </h1>

          <p className="mt-4 max-w-[480px] text-[13px] leading-relaxed text-primary/60">
            We hire people who are genuinely bothered by the gap between what
            banking is in Nigeria and what it could be. If that's you — and
            if you're excellent at what you do — you belong here.
          </p>
        </div>

        {/* Hero image */}
        <div className="mt-10 overflow-hidden rounded-2xl">
          <img
            src="/join-us-hero.jpg"
            alt="Two colleagues reviewing work together on a laptop"
            className="h-[220px] w-full object-cover sm:h-[280px] md:h-[320px]"
          />
        </div>

        {/* Process card */}
        <div className="mt-6 rounded-2xl bg-[#FAFAFC] p-5 sm:p-6">
          {/* Steps */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 rounded-xl bg-[#F0EEF8] p-4"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
                <span className="h-8 w-8 rounded-full bg-[#DAD7E8]" />
                <span className="text-[12px] font-medium text-primary">
                  {step.label}
                </span>
              </div>
            ))}
          </div>

          {/* What to expect */}
          <div className="mt-6">
            <h3 className="text-[15px] font-semibold text-primary">
              What to expect after you apply
            </h3>
            <p className="mt-1.5 text-[12.5px] text-primary/60">
              We try to be respectful of your time and honest about where you
              stand.
            </p>
          </div>
        </div>

        {/* Bottom split section */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Left: copy + CTA */}
          <div className="flex flex-col justify-between rounded-2xl bg-[#FAFAFC] p-6">
            <div>
              <h3 className="text-[17px] font-semibold leading-snug text-primary">
                Build your career with
                <br />
                Alert MFB with bonuses
              </h3>

              <ul className="mt-4 space-y-1.5">
                {perks.map((perk, index) => (
                  <li
                    key={index}
                    className="text-[12.5px] text-primary/60"
                  >
                    • {perk}
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              className="mt-6 flex w-fit items-center gap-2.5 rounded-full bg-secondary py-2.5 pl-4 pr-2 text-[12.5px] font-medium text-white transition-colors hover:bg-secondary/90"
            >
              Send a Speculative Application
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </button>
          </div>

          {/* Right: decorative gradient panel */}
          <div className="relative min-h-[220px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#FCE7B8] via-[#F7D488] to-[#F3C568] sm:min-h-0">
            <div className="absolute -right-6 -top-6 h-40 w-40 rotate-12 rounded-[40px] bg-white/25 blur-sm" />
            <div className="absolute bottom-0 right-8 h-48 w-24 rotate-[18deg] rounded-[40px] bg-white/20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;