import { ArrowRight, ArrowRightFromLine } from "lucide-react";
import { motion } from "framer-motion";
import { IoLogoApple } from "react-icons/io";
import { IoLogoGooglePlaystore } from "react-icons/io5";


const features = [
  {
    title: "Individual Logins",
    body: "Every team member signs in with their own credentials — no shared passwords.",
  },
  {
    title: "Dual Authorisation",
    body: "Set a payment threshold above which two Authorisers must both approve.",
  },
  {
    title: "Instant Revocation",
    body: "Remove a user's access in seconds — no need to change account passwords.",
  },
  {
    title: "Real-time Alerts",
    body: "Each user receives SMS and email alerts for actions tied to their role.",
  },
  {
    title: "Unlimited Team Members",
    body: "Add as many users as your business needs, at no additional cost.",
  },
  {
    title: "Dedicated Onboarding",
    body: "Our business team helps you configure roles correctly from day one.",
  },
];

const UserManagement = () => {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 100% 0%, #d9d3f2 0%, #ffffff 45%)",
      }}
    >
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        {/* ---- Hero ---- */}
        <div className="text-center">
          <p
            className="text-xs font-medium tracking-[0.4em] text-secondary">
            USER MANAGEMENT
          </p>

          <h1
            className="mt-4 text-3xl sm:text-4xl md:text-[2.65rem] font-medium leading-tight tracking-tight text-primary">
            Complete control over who does what
            <br className="hidden sm:block" /> in your business account.
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm text-primary">
            Add team members, define exactly what they can see or do, and
            approve every sensitive action — all from your Business Internet
            Banking dashboard.
          </p>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-[#151349] pl-4 sm:pl-6 pr-2 py-2 text-xs sm:text-sm font-medium text-white hover:bg-[#1d1a5e] transition-colors mt-4"
          >
            <span className="whitespace-nowrap">Login to Manage Users</span>
            <motion.span
              whileHover={{ x: 4 }}
              className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white text-primary transition group-hover:translate-x-1 flex-shrink-0"
            >
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </motion.span>
          </motion.button>
        </div>

        {/* ---- Promo banner ---- */}
        <div
          className="relative mt-16 grid grid-cols-1 gap-8 overflow-hidden rounded-3xl px-12 py-6 sm:px-6 md:grid-cols-2 md:items-center"
          style={{
            background: "linear-gradient(120deg, #c4883f 0%, #e2e06a 100%)",
          }}
        >
          <div>
            <p className="text-xl font-bold text-white">Goldbuchs</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/90">
              Goldbuchs is your all-in-one investment platform. From Target
              savings, Group Investments, Lock funds and Fixed savings —
              build your wealth with confidence.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <button className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-white px-3 sm:px-4 py-2 text-[11px] sm:text-xs font-semibold text-secondary">
                <IoLogoApple size={18} />
                Get on iPhone
              </button>

              <button className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/70 px-3 sm:px-4 py-2 text-[11px] sm:text-xs font-semibold text-white">
                <IoLogoGooglePlaystore size={18} />
                Get on Android
              </button>
            </div>
          </div>

          {/* Phone mockup image */}
          <div className="hidden sm:flex justify-center md:justify-center lg:justify-end items-center">
            <div className="relative top-[25px] md:translate-x-[-30px] lg:translate-x-0 w-72 sm:w-80 md:w-96 items-center justify-center">
              <img
                src="/mockupNobg.png"
                alt=""
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* ---- Feature grid ---- */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-start gap-3 rounded-3xl bg-gray px-4 py-8"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white bg-gradient-to-br from-gray-100 to-gray-300 text-primary shadow-lg">
                <ArrowRightFromLine size={20} />
              </span>

              <p className="text-sm font-medium text-primary">
                {feature.title}
              </p>

              <p className="text-xs leading-relaxed text-primary">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserManagement;