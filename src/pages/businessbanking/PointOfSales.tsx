import { ArrowRight, ArrowRightFromLine } from "lucide-react";
import { motion, animate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

const leftStats = [
    { value: 1, decimals: 0, suffix: "M+", label: "Active Terminals" },
    { value: 10, decimals: 0, prefix: "₦", suffix: "M", label: "Processed Monthly" },
    { value: 99.9, decimals: 1, suffix: "%", label: "Success Rate" },
];

const rightStats = [
    { value: 0, decimals: 0, suffix: "%", label: "Hidden Fees" },
    { value: 99, decimals: 0, suffix: "%", label: "Security Rate" },
    { value: 4.9, decimals: 1, suffix: "/5", label: "Terminal Rating" },
];

const steps = [
    {
        label: "Apply via Business Internet Banking or at a branch",
    },
    {
        label: "Our team verifies and activates your terminal",
    },
    {
        label: "Start accepting payments",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

type CountUpProps = {
    value: number;
    decimals?: number;
    prefix?: string;
    suffix?: string;
    duration?: number;
};

// Slow, gentle count-up. Starts once the number scrolls into view.
const CountUp = ({ value, decimals = 0, prefix = "", suffix = "", duration = 2.4 }: CountUpProps) => {
    const [display, setDisplay] = useState((0).toFixed(decimals));
    const [started, setStarted] = useState(false);
    const motionValue = useMotionValue(0);

    useEffect(() => {
        if (!started) return;
        const controls = animate(motionValue, value, {
            duration,
            ease: "easeOut",
            onUpdate: (latest) => setDisplay(latest.toFixed(decimals)),
        });
        return () => controls.stop();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [started]);

    return (
        <motion.span
            onViewportEnter={() => setStarted(true)}
            viewport={{ once: true, amount: 0.6 }}
        >
            {prefix}
            {display}
            {suffix}
        </motion.span>
    );
};

const PointOfSales = () => {
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
                <motion.div
                    className="text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={staggerContainer}
                >
                    <motion.p
                        className="text-xs font-medium tracking-[0.4em] text-secondary"
                        variants={fadeUp}
                        transition={{ duration: 0.5 }}
                    >
                        POINT OF SALE
                    </motion.p>

                    <motion.h1
                        className="mt-4 text-2xl sm:text-3xl md:text-[2.65rem] font-medium leading-tight tracking-tight text-primary"
                        variants={fadeUp}
                        transition={{ duration: 0.5 }}
                    >
                        Accept payments everywhere your
                        <br className="hidden sm:block" /> customers are — in-store,
                        online,
                        <br className="hidden sm:block" /> or on the go.
                    </motion.h1>

                    <motion.p
                        className="mx-auto mt-4 max-w-xl text-sm text-primary"
                        variants={fadeUp}
                        transition={{ duration: 0.5 }}
                    >
                        Accept card and digital payments anywhere your business operates,
                        with same-day settlement options.
                    </motion.p>

                    <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-[#151349] pl-4 sm:pl-6 pr-2 py-2 text-xs sm:text-sm font-medium text-white hover:bg-[#1d1a5e] transition-colors mt-4"
                        >
                            <span className="whitespace-nowrap">Request your POS Termial</span>
                            <motion.span
                                whileHover={{ x: 4 }}
                                className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white text-primary transition group-hover:translate-x-1 flex-shrink-0"
                            >
                                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                            </motion.span>
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* ---- Stats + image ---- */}
                <motion.div
                    className="mt-16 grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_1.2fr_1fr]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                >
                    {/* Left stats */}
                    <motion.div
                        className="order-2 flex justify-around gap-6 md:order-1 md:flex-col md:justify-center md:gap-10 md:text-right"
                        variants={staggerContainer}
                    >
                        {leftStats.map((stat) => (
                            <motion.div
                                key={stat.label}
                                variants={fadeUp}
                                transition={{ duration: 0.5 }}
                            >
                                <p className="text-lg font-semibold sm:text-4xl text-primary">
                                    <CountUp
                                        value={stat.value}
                                        decimals={stat.decimals}
                                        prefix={stat.prefix}
                                        suffix={stat.suffix}
                                    />
                                </p>
                                <p className="mt-1 text-sm text-primary">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        className="order-1 md:order-2"
                        variants={{
                            hidden: { opacity: 0, scale: 0.92 },
                            visible: { opacity: 1, scale: 1 },
                        }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="relative mx-auto flex w-full max-w-3xl items-center justify-center">
                            <img
                                src="/pos.png"
                                alt="POS"
                                className="w-full max-w-[1200px] h-auto object-contain scale-125"
                            />
                        </div>
                    </motion.div>

                    {/* Right stats */}
                    <motion.div
                        className="order-3 flex justify-around gap-6 md:flex-col md:justify-center md:gap-10 md:text-left"
                        variants={staggerContainer}
                    >
                        {rightStats.map((stat) => (
                            <motion.div
                                key={stat.label}
                                variants={fadeUp}
                                transition={{ duration: 0.5 }}
                            >
                                <p className="text-lg font-semibold sm:text-4xl text-primary">
                                    <CountUp
                                        value={stat.value}
                                        decimals={stat.decimals}
                                        suffix={stat.suffix}
                                    />
                                </p>
                                <p className="mt-1 text-sm text-primary">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* ---- Process steps ---- */}
                <motion.div
                    className="mt-20 bg-white shadow-lg rounded-3xl p-8 max-w-3xl"
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h3 className="text-2xl font-semibold text-primary">
                        From application to first payment in three steps
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-primary">
                        Submit your business details, including your business account
                        number and the number of terminals or channels you need. For POS
                        terminals, delivery typically takes 2–5 business days within
                        Lagos; 5–10 days nationwide.
                    </p>

                    <motion.div
                        className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-3"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainer}
                    >
                        {steps.map((step) => (
                            <motion.div
                                key={step.label}
                                className="flex flex-col items-center gap-2 sm:gap-3 rounded-3xl bg-gray px-2 sm:px-3 md:px-4 py-6 sm:py-8 md:py-10 text-center"
                                variants={fadeUp}
                                transition={{ duration: 0.5 }}
                            >
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-300 border border-white text-primary">
                                    <ArrowRightFromLine size={20} />
                                </span>
                                <span className="text-xs font-medium text-primary ">
                                    {step.label}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default PointOfSales;