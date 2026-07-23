import { ArrowRight } from "lucide-react";

const KoloAjo = () => {
  return (
    <div className="w-full min-h-screen bg-[#e9e9f2] flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs sm:text-sm font-bold tracking-[0.4em] text-secondary mb-4">
            KOLO AJO
          </p>
          <h1 className="text-lg sm:text-4xl md:text-5xl font-semibold text-primary leading-tight mb-4">
            Save for what matters most at
            <br className="hidden sm:block" /> your own pace
          </h1>
          <p className="text-sm sm:text-base text-primary">
            Set a goal, choose how often you save, and let Kolo quietly build your money in the background.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-sm p-6 sm:p-10 mb-15">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: copy */}
            <div>
              <p className="text-primary font-semibold text-base sm:text-lg leading-snug mb-6">
                Start with as little as ₦100 per contribution. Withdrawals before your
                goal date are allowed up to twice a month.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Real-time balance and transaction history",
                  "Two-Factor Authentication (OTP via SMS/Email)",
                  "Download statements as PDF",
                  "10-minute inactivity auto-logout for your security",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-primary"
                  >
                    <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <button className="inline-flex items-center gap-3 bg-secondary transition-colors text-white font-semibold text-sm rounded-full pl-6 pr-2 py-2">
                Start your Kolo Savings
                <span className="bg-white rounded-full p-1.5 flex items-center justify-center">
                  <ArrowRight size={16} className="text-[#e8940c]" />
                </span>
              </button>
            </div>

            {/* Right: image placeholder — swap the src below with your own image */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#f6e9c9] to-[#f0dca0] flex items-center justify-center">
              {/*
                Replace this <img> src with your preferred image.
                e.g. <img src="/your-image.jpg" alt="Kolo Ajo savings" className="w-full h-full object-cover" />
              */}
              <img
                src="/pics1.jpg"
                alt="Kolo Ajo savings"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KoloAjo;