import { motion } from "framer-motion";
import AvailableRoles from "../../components/AvailableRoles";
import JoinUs from "./JoinUs";
import FindABranch from "../../components/FindABranch";
import FAQ from "../../components/FAQ";

const careers = [
  {
    image: "/career1.jpg",
    quote:
      "Working at Alert has completely transformed my design workflow",
    name: "John Davis",
    role: "Sales Director",
  },
  {
    image: "/career2.jpg",
    quote:
      "Working at Alert has completely transformed my design workflow",
    name: "John Davis",
    role: "Sales Director",
  },
  {
    image: "/career3.jpg",
    quote:
      "Working at Alert has completely transformed my design workflow",
    name: "John Davis",
    role: "Sales Director",
  },
  {
    image: "/career4.jpg",
    quote:
      "Working at Alert has completely transformed my design workflow",
    name: "John Davis",
    role: "Sales Director",
  },
  {
    image: "/career5.jpg",
    quote:
      "Working at Alert has completely transformed my design workflow",
    name: "John Davis",
    role: "Sales Director",
  },
];

const CareerPage = () => {
  return (
    <section className="w-full overflow-hidden bg-white py-12 sm:py-16 md:py-20">
      {/* Header */}
      <div className="mx-auto flex max-w-4xl flex-col items-center px-5 text-center pt-20">
        {/* Eyebrow */}
        <span className="mb-4 text-[9px] font-semibold tracking-[0.55em] text-secondary sm:text-[10px]">
          CAREERS
        </span>

        {/* Heading */}
        <h1 className="max-w-[760px] text-lg font-semibold leading-[1.05] tracking-[-0.04em] text-primary sm:text-3xl md:text-[38px] lg:text-[32px]">
          Come join a team that's redefining the
          <br className="hidden sm:block" />
          banking experience for millions of people
          <br className="hidden sm:block" />
          in emerging markets
        </h1>
      </div>

      {/* Cards - Infinite Scroll */}
      <div className="mt-12 w-full px-5 overflow-hidden">
        <motion.div
          className="flex gap-3"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{
            width: "max-content",
          }}
        >
          {/* First set */}
          {careers.map((career, index) => (
            <div
              key={`first-${index}`}
              className="relative aspect-[215/255] w-[calc(50vw-10px)] sm:w-[calc(33.333vw-10px)] md:w-[calc(20vw-10px)] min-w-[120px] max-w-[415px] overflow-hidden rounded-[15px] bg-gray-200 flex-shrink-0"
            >
              {/* Image */}
              <img
                src={career.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#17104B] via-[#24175C]/5 via-55% to-transparent" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                {/* Quote */}
                <p className="mb-5 max-w-[220px] text-[12px] font-normal leading-[1.25] tracking-[0.02em] text-white/95 sm:text-[10px]">
                  "{career.quote}"
                </p>

                {/* Bottom information */}
                <div className="flex items-end justify-between gap-2">
                  <div className="flex min-w-0 items-center gap-3 rounded-full bg-[#483d64]/80 px-1 py-0.5 pr-5 backdrop-blur-md shadow-lg">
                    {/* Logo Circle */}
                    <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white">
                      <img
                        src="/logo2.jpg"
                        alt="Alert MFB Logo"

                        className="object-cover"
                      />
                    </div>

                    {/* Text */}
                    <span className="truncate text-xs font-normal text-white tracking-wide">
                      Alert MFB
                    </span>
                  </div>

                  {/* Person */}
                  <div className="text-right">
                    <p className="whitespace-nowrap text-[9px] font-medium text-white sm:text-[15px]">
                      {career.name}
                    </p>

                    <p className="whitespace-nowrap text-[7px] text-white/75 sm:text-[8px]">
                      {career.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {careers.map((career, index) => (
            <div
              key={`second-${index}`}
              className="relative aspect-[215/255] w-[calc(50vw-10px)] sm:w-[calc(33.333vw-10px)] md:w-[calc(20vw-10px)] min-w-[120px] max-w-[415px] overflow-hidden rounded-[15px] bg-gray-200 flex-shrink-0"
            >
              {/* Image */}
              <img
                src={career.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#17104B] via-[#24175C]/5 via-55% to-transparent" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                {/* Quote */}
                <p className="mb-5  max-w-[220px] text-[12px] font-normal leading-[1.25] text-white/95 sm:text-[10px]">
                  "{career.quote}"
                </p>

                {/* Bottom information */}
                <div className="flex items-end justify-between gap-2">
                   <div className="flex min-w-0 items-center gap-3 rounded-full bg-[#483d64]/80 px-1 py-0.5 pr-5 backdrop-blur-md shadow-lg">
                    {/* Logo Circle */}
                    <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white">
                      <img
                        src="/logo2.jpg"
                        alt="Alert MFB Logo"

                        className="object-cover"
                      />
                    </div>

                    {/* Text */}
                    <span className="truncate text-xs font-normal text-white tracking-wide">
                      Alert MFB
                    </span>
                  </div>

                  {/* Person */}
                  <div className="text-right">
                    <p className="whitespace-nowrap text-[9px] font-normal text-white sm:text-[15px]">
                      {career.name}
                    </p>

                    <p className="whitespace-nowrap text-[7px] text-white/75 sm:text-[8px]">
                      {career.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <AvailableRoles/>
      <JoinUs/>
      <FindABranch/>
      <FAQ/>
    </section>
  );
};

export default CareerPage;