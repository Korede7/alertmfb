import { ArrowRight, ArrowRightFromLine } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";

type LoanKey = "personal" | "salary" | "sme" | "asset" | "business";

type LoanContent = {
    key: LoanKey;
    label: string;
    title: string;
    subtitle: string;
    description: string;
    ctaLabel: string;
    stats: Array<{ label: string; value: string }>;
    whyItWorks: string[];
    documents: string[];
    audience: string[];
    imageSrc: string;
    imageAlt: string;
};

const loanContent: Record<LoanKey, LoanContent> = {
    personal: {
        key: "personal",
        label: "Personal Loans",
        title: "Personal Loans",
        subtitle: "For when life doesn't wait for payday.",
        description:
            "Whether it's a medical emergency, a home renovation, a school fee, or simply closing a cash-flow gap — a Personal Loan from Alert MFB gives you access to up to ₦5,000,000 with a decision in as little as 24 hours.",
        ctaLabel: "Apply for a Personal Loan",
        stats: [
            { label: "Amount", value: "₦50,000 – ₦5,000,000" },
            { label: "Tenor", value: "3 - 36 Months" },
            { label: "Rate", value: "From 24% p.a" },
            { label: "Decision", value: "24 - 48 Hours" },
        ],
        whyItWorks: [
            "No collateral required for amounts up to ₦500,000",
            "BVN-verified, no branch visit needed to start",
            "Equal monthly instalments so you can plan around it",
            "Repay early with no penalty — just tell us",
        ],
        documents: [
            "Valid government ID (NIN, Voter's Card, Passport or Driver's Licence)",
            "3-6 months bank statement",
            "Employer letter (for salaried applicants)",
            "Proof of address (utility bill not older than 3 months)",
        ],
        audience: ["Salaried Employees", "Self Employed Individuals"],
        imageSrc: "/frame1.jpg",
        imageAlt: "Personal Loans",
    },
    salary: {
        key: "salary",
        label: "Salary Advance",
        title: "Salary Advance",
        subtitle: "Your salary, but earlier",
        description:
            "Need a short bridge before month-end? Salary Advance gives salaried Alert MFB customers access to up to 50% of their monthly salary — today — repaid automatically when your salary lands.",
        ctaLabel: "Apply for Salary Advance",
        stats: [
            { label: "Amount", value: "Up to 50% of monthly salary" },
            { label: "Tenor", value: "30 days" },
            { label: "Rate", value: "From 18% p.a" },
            { label: "Decision", value: "Same Day" },
        ],
        whyItWorks: [
            "No paperwork — eligibility confirmed instantly from your salary history",
            "Repaid automatically from your next salary credit",
            "Available multiple times once previous advance is settled",
        ],
        documents: [
            "Your salary must be domiciled with Alert MFB",
            "Most recent payslip",
            "Valid government ID",
        ],
        audience: ["Salaried Employees with Alert MFB accounts"],
        imageSrc: "/salaryPics.jpg",
        imageAlt: "Salary Advance",
    },
    sme: {
        key: "sme",
        label: "SME Loans",
        title: "SME Loans",
        subtitle: "The capital your business has been waiting for.",
        description:
            "Designed specifically for small and growing Nigerian businesses — access financing from ₦500,000 to ₦50,000,000 to restock, expand, upgrade equipment, or manage working capital.",
        ctaLabel: "Apply for an SME Loan",
        stats: [
            { label: "Amount", value: "₦500,000 – ₦50,000,000" },
            { label: "Tenor", value: "6 - 60 Months" },
            { label: "Rate", value: "From 22% p.a" },
            { label: "Decision", value: "48 - 72 Hours" },
        ],
        whyItWorks: [
            "Structured repayments matched to your revenue cycle",
            "No need to disrupt your cash reserves to grow",
            "Can be combined with Trade Finance for import/export",
        ],
        documents: [
            "CAC registration documents",
            "6–12 months business bank statement",
            "Means of ID for all signatories",
            "Brief business plan or cash-flow summary",
        ],
        audience: ["Small and medium-sizedbusinesses"],
        imageSrc: "/smeLoan.jpg",
        imageAlt: "SME Loans",
    },
    asset: {
        key: "asset",
        label: "Asset Finance",
        title: "Asset Finance",
        subtitle: "Acquire what your business needs. Pay from what it earns.",
        description:
            "Fund the purchase of equipment, vehicles, machinery, or technology without depleting your working capital — repayments are spread over the asset's useful life so your cash flow stays healthy.",
        ctaLabel: "Apply For Asset Finance",
        stats: [
            { label: "Amount", value: "₦1,000,000 – ₦100,000,000" },
            { label: "Tenor", value: "12 - 84 Months" },
            { label: "Rate", value: "From 20% p.a" },
            { label: "Decision", value: "3 - 5 working days" },
        ],
        whyItWorks: [
            "Repayment structured around the asset's earning potential",
            "Works for vehicles, industrial equipment, medical equipment, tech, and more",
            "Full ownership transfers to you at end of tenor",
        ],
        documents: [
            "Proforma invoice for the asset",
            "Valid ID & BVN",
            "Business or personal bank statement (6 months)",
            "Down payment confirmation",
        ],
        audience: ["Businesses & Individualsacquiring assets"],
        imageSrc: "/man.png",
        imageAlt: "Asset Finance",
    },
    business: {
        key: "business",
        label: "Business Loans",
        title: "Business Loans",
        subtitle: "Serious capital for serious ambitions.",
        description:
            "For established businesses ready to make a significant move — whether that's expansion, acquisition, trade, infrastructure, or managing a large contract — Business Loans from ₦5,000,000 to ₦500,000,000.",
        ctaLabel: "Apply for a Business Loan",
        stats: [
            { label: "Amount", value: "₦5,000,000 – ₦500,000,000" },
            { label: "Tenor", value: "12 - 60 Months" },
            { label: "Rate", value: "From 21% p.a" },
            { label: "Decision", value: "3 - 7 working days" },
        ],
        whyItWorks: [
            "Dedicated credit officer from application to disbursement",
            "Can be structured as term loan, revolving credit, or overdraft facility",
            "Collateral may be required above certain thresholds",
        ],
        documents: [
            "CAC Certificate & MEMART",
            "12 months business bank statement",
            "Audited financials (for amounts above ₦10M)",
            "Board resolution (for LLCs)",
        ],
        audience: ["Established businesseswith 12+ months of trading history"],
        imageSrc: "/pics1.jpg",
        imageAlt: "Business Loans",
    },
};

const LoanProducts = () => {
    const [activeLoan, setActiveLoan] = useState<LoanKey>("personal");

    // Refs for scroll animation
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const whyRef = useRef<HTMLDivElement>(null);
    const audienceRef = useRef<HTMLDivElement>(null);
    const documentsRef = useRef<HTMLDivElement>(null);

    const headerInView = useInView(headerRef, { once: true, amount: 0.2 });
    const navInView = useInView(navRef, { once: true, amount: 0.2 });
    const whyInView = useInView(whyRef, { once: true, amount: 0.2 });
    const audienceInView = useInView(audienceRef, { once: true, amount: 0.2 });
    const documentsInView = useInView(documentsRef, { once: true, amount: 0.2 });

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    const navItems: Array<{ key: LoanKey; label: string }> = [
        { key: "personal", label: "Personal Loans" },
        { key: "salary", label: "Salary Advance" },
        { key: "sme", label: "SME Loans" },
        { key: "asset", label: "Asset Finance" },
        { key: "business", label: "Business Loans" },
    ];

    const activeContent = loanContent[activeLoan];

    const handleLoanSelect = (nextKey: LoanKey) => {
        if (nextKey === activeLoan) return;
        setActiveLoan(nextKey);
    };

    return (
        <section ref={sectionRef} className="w-full bg-white px-5 py-16 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-5xl">
                <motion.div
                    ref={headerRef}
                    initial="hidden"
                    animate={headerInView ? "visible" : "hidden"}
                    variants={fadeUpVariants}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex flex-col items-center text-center"
                >
                    <span className="text-[11px] font-semibold tracking-[0.25em] text-[#E8871E]">LOAN PRODUCTS</span>
                    <h2 className="mt-3 max-w-xl text-xl sm:text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#141852] sm:text-[32px]">
                        Get every kind of funding you need
                        <br />
                        All in one bank
                    </h2>
                </motion.div>

                <motion.div
                    ref={navRef}
                    initial="hidden"
                    animate={navInView ? "visible" : "hidden"}
                    variants={fadeUpVariants}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                    className="mt-6 w-full"
                >
                    <div className="overflow-x-auto scrollbar-hide">
                        <div className="mx-auto flex w-max min-w-full justify-center px-4">
                            <div className="flex items-center gap-2 rounded-full bg-gray p-2">
                                {navItems.map((item) => {
                                    const isActive = activeLoan === item.key;
                                    return (
                                        <button
                                            key={item.key}
                                            onClick={() => handleLoanSelect(item.key)}
                                            className={
                                                isActive
                                                    ? "cursor-pointer whitespace-nowrap rounded-full bg-secondary px-4 py-2 text-[13px] font-medium text-white transition"
                                                    : "cursor-pointer whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-medium text-primary transition hover:bg-[#141852]/5"
                                            }
                                        >
                                            {item.label}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="mt-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            ref={contentRef}
                            key={activeContent.key}
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -30, opacity: 0 }}
                            transition={{ duration: 0.45, ease: "easeOut" }}
                            className="overflow-hidden rounded-3xl bg-white shadow-[0_4px_40px_rgba(20,24,82,0.08)] transition-all duration-500 ease-out will-change-transform"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 mb-5">
                                <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                                    <div className="flex items-center gap-3">
                                        <div className=" flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 border border-white text-primary shadow-xl">
                                            <ArrowRightFromLine className="h-4 w-4 transition group-hover:translate-x-1" />
                                        </div>
                                        <div>
                                            <p className="text-[15px] font-semibold text-[#141852]">{activeContent.title}</p>
                                            <p className="text-[12px] text-primary font-medium">{activeContent.subtitle}</p>
                                        </div>
                                    </div>

                                    <p className="mt-5 text-[13.5px] leading-relaxed text-primary">{activeContent.description}</p>

                                    <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
                                        {activeContent.stats.map((stat) => (
                                            <div key={stat.label}>
                                                <p className="text-[11px] text-gray-400">{stat.label}</p>
                                                <p className="mt-0.5 text-[13px] font-medium text-primary">{stat.value}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                                        <button className="group mx-auto flex cursor-pointer items-center gap-3 rounded-full bg-secondary py-1.5 pl-6 pr-2 text-xs font-medium text-white transition hover:bg-[#0F0C4A]">
                                            {activeContent.ctaLabel}
                                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary transition group-hover:translate-x-1">
                                                <ArrowRight className="h-4 w-4 text-secondary" />
                                            </span>
                                        </button>
                                        <button className="rounded-full border border-[#141852]/15 px-5 py-2.5 text-sm font-medium text-[#141852] transition hover:bg-[#141852]/5">Calculate Repayments</button>
                                    </div>
                                </div>

                                <div className="relative min-h-[360px] overflow-hidden lg:min-h-full">
                                    <img src={activeContent.imageSrc} alt={activeContent.imageAlt} className="absolute inset-0 h-full w-full object-contain object-bottom" />
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-3">
                    <motion.div ref={whyRef} initial="hidden" animate={whyInView ? "visible" : "hidden"} variants={fadeUpVariants} transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }} className="rounded-2xl bg-gray p-6">
                        <p className="text-[13px] font-semibold text-primary">Why this loan works</p>
                        <ul className="mt-4 space-y-2.5">
                            {activeContent.whyItWorks.map((point) => (
                                <li key={point} className="flex gap-2 text-[12.5px] leading-relaxed text-primary">
                                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[#141852]/90" />
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div ref={audienceRef} initial="hidden" animate={audienceInView ? "visible" : "hidden"} variants={fadeUpVariants} transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }} className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-gray p-6 text-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 border border-white text-primary shadow-xl">
                            <ArrowRightFromLine className="h-4 w-4 transition group-hover:translate-x-1" />
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            {activeContent.audience.map((person) => (
                                <span key={person} className="rounded-full bg-white px-4 py-1.5 text-[12.5px] font-medium text-primary">{person}</span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div ref={documentsRef} initial="hidden" animate={documentsInView ? "visible" : "hidden"} variants={fadeUpVariants} transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }} className="rounded-2xl bg-gray p-6">
                        <p className="text-[13px] font-semibold text-primary">Documents you need</p>
                        <ul className="mt-4 space-y-2.5">
                            {activeContent.documents.map((doc) => (
                                <li key={doc} className="flex gap-2 text-[12.5px] leading-relaxed text-primary">
                                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[#141852]/40" />
                                    {doc}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LoanProducts;
