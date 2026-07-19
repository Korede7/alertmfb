import { ArrowRight, ArrowRightFromLine } from "lucide-react";
import { motion } from "framer-motion";

const reports = [
    {
        title: "Account Statements",
        description:
            "Full transaction history for any date range, exportable as PDF or CSV. Bank-ready for auditors, investors, and loan applications.",
    },
    {
        title: "Cash Flow Summary",
        description:
            "See money in, money out, and net position by week or month. Spot seasonal patterns and cash gaps before they become a problem.",
    },
    {
        title: "Payroll Reports",
        description:
            "Per-pay-run breakdown: who was paid, how much, on what date, and the narration sent to each recipient. Reconcile to the cent.",
    },
    {
        title: "Bulk Transfer Logs",
        description:
            "Status of every batch: approved by whom, how many succeeded, how many failed, and why.",
    },
    {
        title: "Audit Trail Exports",
        description:
            "A timestamped log of every user action — logins, approvals, rejections, user changes — for compliance and board reporting.",
    },
    {
        title: "Payroll Reports",
        description:
            "Per-pay-run breakdown: who was paid, how much, on what date, and the narration sent to each recipient. Reconcile to the cent.",
    },
];

const BusinessReport = () => {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-6xl px-6">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.55em] text-secondary">
                        Business Reports
                    </p>

                    <h2 className="mx-auto max-w-3xl text-md sm:text-[44px] font-medium leading-[1.08] tracking-[-0.04em] text-primary">
                        Every number your business needs,
                        <br />
                        exactly when you need it.
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#5F6485]">
                        Real-time account data, downloadable statements, cash flow
                        summaries, and audit-ready transaction reports — all in one
                        dashboard.
                    </p>

                    <button className="group mx-auto mt-9 flex cursor-pointer items-center gap-3 rounded-full bg-primary py-1.5 pl-6 pr-2 text-sm font-medium text-white transition hover:bg-[#0F0C4A]">
                        Login to View Reports

                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary transition group-hover:translate-x-1">
                            <ArrowRight className="h-4 w-4" />
                        </span>
                    </button>
                </motion.div>

                {/* Cards */}
                <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {reports.map((report, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.55,
                                delay: index * 0.08,
                            }}
                            whileHover={{
                                y: -8,
                                transition: { duration: 0.25 },
                            }}
                            className="group relative overflow-hidden rounded-3xl border border-[#F1F1F8] bg-[#F8F8FD] p-6"
                        >
                            {/* Icon */}
                            <div className="mb-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 border border-white text-primary shadow-xl">
                                <ArrowRightFromLine className="h-4 w-4 transition group-hover:translate-x-1" />
                            </div>

                            <h3 className="text-[17px] font-medium text-primary">
                                {report.title}
                            </h3>

                            <p className="mt-3 text-[13px] leading-6 text-gray-500">
                                {report.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BusinessReport;