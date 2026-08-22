import { ArrowRight } from "lucide-react";

const teamMembers = [
  {
    name: "Abraham Adeniyi",
    role: "Head, Internal Control & Compliance",
    image: "/abraham.jpg",
    description:
      "Our job is to make banking feel human again — clear about costs, fast when it counts, and genuinely useful for the people who have been told they’re not the right customer.",
    btn: "Meet Abraham",
  },
  {
    name: "Sarumi Rahman",
    role: "Head, Business Development",
    image: "/sarumi.jpg",
    description:
      "Our job is to make banking feel human again — clear about costs, fast when it counts, and genuinely useful for the people who have been told they’re not the right customer.",
    btn: "Meet Rahman",
  },
  {
    name: "Sixtus Oluigbo",
    role: "Alert Group, Head Credit & Risk",
    image: "/sixtus.jpg",
    description:
      "Our job is to make banking feel human again — clear about costs, fast when it counts, and genuinely useful for the people who have been told they’re not the right customer.",
    btn: "Meet Sixtus",
  },
  {
    name: "Omole Gabriel",
    role: "Chief Operating Officer",
    image: "/omole.jpg",
    description:
      "Our job is to make banking feel human again — clear about costs, fast when it counts, and genuinely useful for the people who have been told they’re not the right customer.",
    btn: "Meet Gabriel",
  },
  {
    name: "Damilare Alabi",
    role: "Chief Risk Officer",
    image: "/damilare.jpg",
    description:
      "Our job is to make banking feel human again — clear about costs, fast when it counts, and genuinely useful for the people who have been told they’re not the right customer.",
    btn: "Meet Damilare",
  },
  {
    name: "Emmanuel Ekpe",
    role: "Chief Finance Officer",
    image: "/emmanuel.jpg",
    description:
      "Our job is to make banking feel human again — clear about costs, fast when it counts, and genuinely useful for the people who have been told they’re not the right customer.",
    btn: "Meet Emmanuel",
  },
  {
    name: "Joy Ikelegbe",
    role: "Head, Human Resources",
    image: "/joy.jpg",
    description:
      "Our job is to make banking feel human again — clear about costs, fast when it counts, and genuinely useful for the people who have been told they’re not the right customer.",
    btn: "Meet Joy",
  },
  {
    name: "Ayomide Agbi",
    role: "Group Head Legal",
    image: "/ayomide.jpg",
    description:
      "Our job is to make banking feel human again — clear about costs, fast when it counts, and genuinely useful for the people who have been told they’re not the right customer.",
    btn: "Meet Ayomide",
  },
  {
    name: "Elizabeth Adeniyi",
    role: "Head of Operations",
    image: "/elizabeth.jpg",
    description:
      "Our job is to make banking feel human again — clear about costs, fast when it counts, and genuinely useful for the people who have been told they’re not the right customer.",
    btn: "Meet Elizabeth",
  },
  {
    name: "Rotimi Ajibade",
    role: "Group Head, Internal Audit",
    image: "/rotimi.jpg",
    description:
      "Strengthening controls, governance and operational effectiveness.",
    btn: "Meet Rotimi",
  },
];

const ManagementTeam = () => {
  return (
    <section className="mt-20 min-h-screen overflow-hidden bg-gradient-to-bl from-purple-200 via-white to-white px-4 py-12 sm:px-6 sm:py-16">
      {/* Header */}
      <div className="mx-auto mb-10 text-center">
        <p className="pb-8 text-[10px] font-medium tracking-[0.45em] text-secondary sm:pb-10 sm:text-[12px] sm:tracking-[0.7em]">
          MANAGEMENT TEAM
        </p>
      </div>

      {/* Team Grid */}
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 md:grid-cols-2 items-center gap-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="group flex h-[300px] w-full max-w-[500px] overflow-hidden rounded-xl border border-gray-200 bg-[#F3F3F8] shadow-[0_4px_20px_rgba(11,8,68,0.08)] transition-all duration-300 sm:h-[350px] sm:mb-4"
          >
            {/* Image */}
            <div className="h-full w-[60%] shrink-0 overflow-hidden p-2">
              <img
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover object-top"
              />
            </div>

            {/* Information */}
            <div className="flex min-w-0 flex-1 flex-col justify-between bg-[#f5f5f9] px-2 py-4 sm:py-5">
              <div>
                <h3 className="text-sm font-medium leading-tight text-primary sm:text-base">
                  {member.name}
                </h3>

                <p className="mt-1 text-[9px] font-medium leading-tight text-primary sm:text-[10px]">
                  {member.role}
                </p>

                <p className="mt-6 text-[10px] leading-[1.6] md:leading-[1.2] tracking-[0.03em] text-primary opacity-50 italic font-light sm:mt-15 sm:text-[12px] md:mt-15 lg:mt-20 ">
                  {member.description}
                </p>
              </div>

              {/* Profile Button */}
              <button className="flex w-fit items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1.5 text-[9px] font-medium text-white transition-all duration-200 hover:scale-105 sm:gap-2 sm:px-3 sm:text-[10px]">
                {member.btn}

                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white text-[#D98A0E] sm:h-5 sm:w-5">
                  <ArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

     {/* Bottom CTA */}
<div className="mx-auto mt-10 flex h-auto min-h-[280px] w-full max-w-5xl flex-col overflow-hidden rounded-xl bg-white shadow-[0_4px_20px_rgba(11,8,68,0.08)] sm:mt-12 sm:h-[180px] sm:flex-row">
  {/* CTA Text */}
  <div className="flex w-full flex-col justify-center px-6 py-8 sm:w-[58%] sm:px-10 sm:py-0">
    <h3 className="text-lg font-semibold text-[#0B0844] sm:text-xl">
      Think you belong on this team?
    </h3>

    <p className="mt-3 text-xs leading-relaxed text-gray-500 sm:text-sm">
      Join our growing team and help us build
      <br className="hidden sm:block" />
      the future of financial services.
    </p>

    <button className="mt-5 flex w-fit items-center gap-2 rounded-full bg-[#D98A0E] px-3.5 py-2 text-[11px] font-medium text-white transition-transform duration-200 hover:scale-105 sm:mt-6 sm:px-4 sm:text-xs">
      View Open Roles

      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#D98A0E] sm:h-6 sm:w-6">
        <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
      </span>
    </button>
  </div>

  {/* CTA Graphic */}
  <div className="relative h-[180px] w-full overflow-hidden bg-white p-3 sm:h-full sm:w-[42%] sm:p-4">
    <img
      src="/card.jpg"
      alt=""
      className="h-full w-full rounded-lg object-cover"
    />
  </div>
</div>
    </section>
  );
};

export default ManagementTeam;