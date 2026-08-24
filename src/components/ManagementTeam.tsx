import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { teamMembers } from "../utils";

const ManagementTeam = () => {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.97,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut" as const,
            },
        },
    };

    const imageVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeOut" as const,
            },
        },
    };

    const contentVariants = {
        hidden: {
            opacity: 0,
            x: 25,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.7,
                delay: 0.12,
                ease: "easeOut" as const,
            },
        },
    };

    return (
        <section className="mt-16 min-h-screen overflow-hidden  px-4 py-10 sm:px-6 sm:py-14"   style={{
          background:
            "radial-gradient(70% 50% at 100% 10%, rgba(143, 112, 200, 0.93) 0%, rgba(217, 196, 255, 0.1) 55%)",
        }}>

            {/* Header */}
            <motion.div
                className="mx-auto mb-8 text-center"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                <p className="pb-6 text-[9px] font-medium tracking-[0.4em] text-secondary sm:pb-8 sm:text-[10px] sm:tracking-[0.6em]">
                    MANAGEMENT TEAM
                </p>
            </motion.div>

            {/* Team Grid */}
            <motion.div
                className="mx-auto grid w-full max-w-4xl grid-cols-1 items-center gap-3 md:grid-cols-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    amount: 0.15,
                }}
            >
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        className="group flex h-[250px] w-full max-w-[450px] overflow-hidden rounded-xl border border-gray-200 bg-[#F3F3F8] shadow-[0_4px_20px_rgba(11,8,68,0.08)] transition-all duration-300 sm:mb-3 sm:h-[290px]"
                    >
                        {/* Image */}
                        <motion.div
                            className="h-full w-[58%] shrink-0 overflow-hidden p-1.5"
                            variants={imageVariants}
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                            />
                        </motion.div>

                        {/* Information */}
                        <motion.div
                            variants={contentVariants}
                            className="flex min-w-0 flex-1 flex-col justify-between bg-[#f5f5f9] px-2 py-3 sm:py-4"
                        >
                            <div>
                                <h3 className="text-[12px] font-medium leading-tight text-primary sm:text-sm">
                                    {member.name}
                                </h3>

                                <p className="mt-1 text-[8px] font-medium leading-tight text-primary sm:text-[9px]">
                                    {member.role}
                                </p>

                                <p className="mt-4 text-[9px] font-light italic leading-[1.45] tracking-[0.02em] text-primary opacity-50 sm:mt-8 sm:text-[10px]">
                                    {member.description}
                                </p>
                            </div>

                            {/* Profile Button */}
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    x: 2,
                                }}
                                whileTap={{
                                    scale: 0.96,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 20,
                                }}
                                className="flex w-fit items-center gap-1 rounded-full bg-secondary px-2 py-1 text-[11px] font-medium text-white sm:gap-1.5 sm:px-2.5 sm:py-1.5 sm:text-[12px]"
                            >
                                {member.btn}

                                <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white text-[#D98A0E] sm:h-4 sm:w-4">
                                    <ArrowRight className="h-2 w-2 sm:h-2.5 sm:w-2.5" />
                                </span>
                            </motion.button>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>

           
            {/* Bottom CTA */}
            <motion.div
                className="mx-auto mt-8 flex h-auto min-h-[320px] w-full max-w-4xl flex-col overflow-hidden rounded-xl bg-white shadow-[0_4px_20px_rgba(11,8,68,0.08)] sm:mt-10 sm:h-[250px] sm:min-h-0 sm:flex-row"
                initial={{
                    opacity: 0,
                    y: 60,
                    scale: 0.98,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                }}
                viewport={{
                    once: true,
                    amount: 0.2,
                }}
                transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                {/* CTA Text */}
                <motion.div
                    className="flex w-full flex-col justify-center px-5 py-6 sm:w-[58%] sm:px-8 sm:py-0"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 0.7,
                        delay: 0.15,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <h3 className="text-base font-semibold text-[#0B0844] sm:text-lg">
                        Think you belong on this team?
                    </h3>

                    <p className="mt-2 text-[10px] leading-relaxed text-gray-500 sm:text-xs">
                        Join our growing team and help us build
                        <br className="hidden sm:block" />
                        the future of financial services.
                    </p>

                    <motion.button
                        whileHover={{
                            scale: 1.05,
                            x: 2,
                        }}
                        whileTap={{
                            scale: 0.96,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 20,
                        }}
                        className="mt-4 flex w-fit items-center gap-1.5 rounded-full bg-[#D98A0E] px-3 py-1.5 text-[9px] font-medium text-white sm:mt-4 sm:px-3.5 sm:text-[10px]"
                    >
                        View Open Roles

                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white text-[#D98A0E] sm:h-5 sm:w-5">
                            <ArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                        </span>
                    </motion.button>
                </motion.div>

                {/* CTA Graphic */}
                <motion.div
                    className="relative h-[280px] w-full overflow-hidden bg-white p-2.5 sm:h-full sm:w-[42%] sm:p-3"
                    initial={{
                        opacity: 0,
                        x: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.9,
                        delay: 0.25,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <motion.img
                        src="/card.jpg"
                        alt=""
                        className="h-full w-full rounded-lg object-cover"
                        initial={{ scale: 1.08 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1.1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ManagementTeam;