import { ArrowRight, ArrowRightFromLine } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
    { label: "Prepare & Upload your CSV file" },
    { label: "Upload & Preview your CSV file" },
    { label: "Authoriser reviews and approves" },
    { label: "Funds are Disbursed" },
];

const scenarios = [
    "Payroll & Commission Payments",
    "Vendor & Supplier Payments",
    "Agents & Distributor Payouts",
    "Grants & Welfare Disbursements",
    "Intercompany Transfers",
];

// Animation variants with proper Framer Motion typing
const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const }
    }
};

const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" as const }
    }
};

const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" as const }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
};

const BulkTransfers = () => {
    return (
        <div
            className="relative w-full overflow-hidden"
            style={{
                background:
                    "radial-gradient(circle at 100% 0%, #8272c6 0%, #ffffff 35%)",
            }}
        >
            <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16 md:py-20">
                {/* ---- Hero ---- */}
                <motion.div
                    className="text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                >
                    <motion.p
                        className="text-xs font-medium tracking-[0.4em] text-secondary"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        BULK TRANSFERS
                    </motion.p>

                    <motion.h1
                        className="mt-4 text-2xl sm:text-3xl md:text-[2.65rem] font-medium leading-tight tracking-tight text-primary"
                        variants={fadeInUp}
                    >
                        Pay 500 vendors, suppliers or staff in
                        <br className="hidden sm:block" /> the same time it takes to pay
                        one.
                    </motion.h1>

                    <motion.p
                        className="mx-auto mt-4 max-w-xl text-sm text-primary px-4 sm:px-0"
                        variants={fadeInUp}
                        transition={{ delay: 0.2 }}
                    >
                        Internet Banking, our mobile app, USSD for feature phones, and a
                        Security Centre that keeps it all safe.
                    </motion.p>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-[#151349] pl-4 sm:pl-6 pr-2 py-2 text-xs sm:text-sm font-medium text-white hover:bg-[#1d1a5e] transition-colors mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <span className="whitespace-nowrap">Login to Internet Banking</span>
                        <motion.span
                            whileHover={{ x: 4 }}
                            className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white text-primary transition group-hover:translate-x-1 flex-shrink-0"
                        >
                            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </motion.span>
                    </motion.button>
                </motion.div>

                {/* ---- Scenario + image ---- */}
                <motion.div
                    className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 bg-white p-4 sm:p-6 md:p-8 rounded-xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUp}
                    transition={{ delay: 0.2 }}
                >
                    <motion.div variants={fadeInLeft}>
                        <motion.h2
                            className="text-xl sm:text-2xl font-medium leading-snug text-primary"
                            variants={fadeInUp}
                        >
                            Built for every high-volume
                            <br className="hidden xs:block" /> payment scenario
                        </motion.h2>

                        <motion.ul
                            className="mt-5 space-y-2.5"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {scenarios.map((item) => (
                                <motion.li
                                    key={item}
                                    className="flex items-start gap-2 text-sm text-primary"
                                    variants={fadeInRight}
                                >
                                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary text-primary" />
                                    {item}
                                </motion.li>
                            ))}
                        </motion.ul>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-2 sm:gap-3 self-start sm:self-center rounded-full bg-[#D99A3E] pl-4 sm:pl-5 pr-2 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-[#c98c30] transition-colors whitespace-nowrap w-auto mt-4"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <span>Try Bulk Transfer</span>
                            <motion.span
                                whileHover={{ x: 4 }}
                                className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-white flex-shrink-0"
                            >
                                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-secondary" />
                            </motion.span>
                        </motion.button>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl bg-white order-first lg:order-last"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <div className="flex flex-col items-center gap-2 text-slate-400 w-full h-full">
                            <img src="/pics1.jpg" alt="" className="w-full h-full object-cover" />
                        </div>
                    </motion.div>
                </motion.div>

                {/* ---- Process steps ---- */}
                <motion.div
                    className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-3 sm:p-4 md:p-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                >
                    {steps.map((step) => (
                        <motion.div
                            key={step.label}
                            className="flex flex-col items-center gap-2 sm:gap-3 rounded-3xl bg-gray px-2 sm:px-3 md:px-4 py-6 sm:py-8 md:py-10 text-center"
                            variants={fadeInUp}
                          
                        >
                            <motion.span
                                className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-300 border border-white text-primary shadow-lg"
                              
                            >
                                <ArrowRightFromLine size={16} className="sm:w-5 sm:h-5" />
                            </motion.span>
                            <span className="text-[10px] sm:text-xs font-medium text-primary leading-tight">
                                {step.label}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* ---- Footer copy ---- */}
                <motion.div
                    className="mt-10 sm:mt-12 md:mt-14"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                >
                    <motion.h3
                        className="text-base sm:text-lg font-medium text-primary"
                        variants={fadeInUp}
                    >
                        From spreadsheet to settled payments in four steps
                    </motion.h3>
                    <motion.p
                        className="mt-2 max-w-3xl text-xs sm:text-sm leading-relaxed text-primary px-2 sm:px-0"
                        variants={fadeInUp}
                        transition={{ delay: 0.2 }}
                    >
                        Log in to Business Internet Banking, navigate to Bulk Transfers,
                        and upload your file. The system validates every row and flags
                        any errors before you proceed. Approved batches are processed
                        immediately during banking hours, with each recipient receiving
                        an SMS notification on settlement.
                    </motion.p>
                </motion.div>
            </div>
        </div>
    );
};

export default BulkTransfers;