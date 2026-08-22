import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { boards } from "../../utils";

const BoardOfDirectors = () => {
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
        <section className="mt-16 min-h-screen overflow-hidden bg-white  px-4 py-10 sm:px-6 sm:py-14">

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
                    BOARD OF DIRECTORS
                </p>
            </motion.div>

            {/* Heading */}
            <h1 className="mx-auto max-w-[760px] text-center text-lg font-semibold leading-[1.05] tracking-[-0.04em] text-primary sm:text-3xl md:text-[38px] lg:text-[32px]">
                Governance that holds us accountable
            </h1>

            {/* Description */}
            <motion.p
                className="mx-auto mt-4 mb-10 max-w-[500px] text-center text-[13px] leading-relaxed text-primary"
            >
                Our Board brings independence, experience, and a mandate to represent the interests of our
                customers and stakeholders.
            </motion.p>

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
                {boards.map((member, index) => (
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
                                className="flex w-fit items-center gap-1 rounded-full bg-secondary px-2 py-1 text-[8px] font-light text-white sm:gap-1.5 sm:px-2.5 sm:py-1.5 sm:text-[9px]"
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
        </section>
    );
};

export default BoardOfDirectors;