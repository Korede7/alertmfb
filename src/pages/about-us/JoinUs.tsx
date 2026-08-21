import { ArrowRight, ArrowRightFromLine } from "lucide-react";

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
      <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-16">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <span className="mb-4 text-[13px] font-semibold tracking-[0.55em] text-secondary">
            JOIN US
          </span>

          <h1 className="max-w-[560px] text-2xl font-semibold leading-[1.15] tracking-[-0.03em] text-primary sm:text-4xl md:text-[45px]">
            Build the bank Nigeria needs.
            <br />
            From the Inside.
          </h1>

          <p className="mt-4 max-w-[580px] text-[13px] leading-relaxed text-primary">
            We hire people who are genuinely bothered by the gap between what
            banking is in Nigeria and what it could be. If that's you — and
            if you're excellent at what you do — you belong here.
          </p>
        </div>

        {/* Hero image */}
        <div className="mt-10 overflow-hidden rounded-2xl">
          <img
            src="/career.jpg"
            alt="career"
            className="h-[250px] w-full object-cover sm:h-[300px] md:h-[480px]"
          />
        </div>

        {/* Process card */}
        <div className="mt-6 rounded-3xl  bg-white shadow-lg p-5 sm:p-6">
          {/* Steps */}
          <div className="grid grid-cols-1 sm:grids-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center gap-3 rounded-3xl bg-gray p-8 py-8 px-4 text-center"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-300 border border-white text-primary shadow-lg">
                  <ArrowRightFromLine className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-normal text-primary mt-3">
                  {step.label}
                </h3>
              </div>
            ))}
          </div>

          {/* What to expect */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-primary">
              What to expect after you apply
            </h3>
            <p className="mt-1.5 text-[12.5px] text-primary">
              We try to be respectful of your time and honest about where you
              stand.
            </p>
          </div>
        </div>

        {/* Bottom split section */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Left: copy + CTA */}
          <div className="flex flex-col justify-between rounded-2xl  p-6">
            <div>
              <h3 className="text-2xl font-semibold leading-snug text-primary">
                Build your career with
                <br />
                Alert MFB with bonuses
              </h3>

              <ul className="mt-4 space-y-1.5">
                {perks.map((perk, index) => (
                  <li
                    key={index}
                    className="text-[12.5px] text-primary"
                  >
                    • {perk}
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              className="mt-6 flex w-fit items-center gap-2.5 rounded-full bg-secondary py-2.5 pl-4 pr-2 text-[12.5px] font-medium text-white"
            >
              Send a Speculative Application
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                <ArrowRight className="h-3.5 w-3.5 text-secondary" />
              </span>
            </button>
          </div>

          {/* Right: decorative gradient panel */}
          <div className="relative min-h-[220px] overflow-hidden rounded-2xl  sm:min-h-0">
           <img src="/pics1.jpg" alt="" />
          </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 max-w-3xl mx-auto pt-10">
          {/* Join as a Partner */}
          <div className="bg-white rounded-2xl p-4 shadow-lg transition-all duration-300">
            {/* Application Area */}
            <div className="bg-gray rounded-2xl h-[140px] flex flex-col items-center justify-center mb-9">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-300 border border-white text-primary shadow-lg mb-5">
                <ArrowRightFromLine size={18} />
              </span>

              <span className="text-[10px] text-primary">
                Start Your Application
              </span>
            </div>

            {/* Content */}
            <div className="px-1">
              <h3 className="text-[20px] font-semibold text-primary mb-3">
                Join as a partner
              </h3>

              <p className="text-[11px] leading-[1.6] text-primary mb-4">
                Explore our infrastructure and reach to power your business
                dreams
              </p>

              {/* Button */}
              <button
                type="button"
                className="mt-6 flex w-fit items-center gap-2.5 rounded-full bg-secondary py-1.5 pl-4 pr-2 text-[12.5px] font-medium text-white"
              >
                Join Now
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                  <ArrowRight className="h-3.5 w-3.5 text-secondary" />
                </span>
              </button>
            </div>
          </div>

          {/* Join the Dream Makers */}
          <div className="bg-white rounded-2xl p-4 shadow-lg transition-all duration-300">
            {/* Application Area */}
            <div className="bg-gray rounded-2xl h-[140px] flex flex-col items-center justify-center mb-9">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-300 border border-white text-primary shadow-lg mb-5">
                <ArrowRightFromLine size={18} />
              </span>

              <span className="text-[10px] text-primary">
                Start Your Application
              </span>
            </div>

            {/* Content */}
            <div className="px-1">
              <h3 className="text-[20px] font-semibold text-primary mb-3">
                Join the dream makers
              </h3>

              <p className="text-[11px] leading-[1.6] text-primary mb-4">
                Thousands of people are building impactful businesses because
                of the work we do at Alert MFB. You can too.
              </p>

              {/* Button */}
              <button
                type="button"
                className="mt-6 flex w-fit items-center gap-2.5 rounded-full bg-secondary py-1.5 pl-4 pr-2 text-[12.5px] font-medium text-white"
              >
                Join Now
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                  <ArrowRight className="h-3.5 w-3.5 text-secondary" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default JoinUs;