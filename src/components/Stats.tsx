import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface Stat {
    title: string;
    value: string;
    dotColor: string;
    numericValue: number;
    suffix: string;
}

interface StatItemProps {
    stat: Stat;
    isInView: boolean;
    index: number;
}

const stats: Stat[] = [
    {
        title: "Total Assets",
        value: "₦44B+",
        dotColor: "bg-rose-500",
        numericValue: 44,
        suffix: "B+"
    },
    {
        title: "Deposits",
        value: "₦28B+",
        dotColor: "bg-teal-400",
        numericValue: 28,
        suffix: "B+"
    },
    {
        title: "Customers Served",
        value: "37k+",
        dotColor: "bg-gray-200",
        numericValue: 37,
        suffix: "k+"
    },
    {
        title: "Loans Disbursed",
        value: "₦110B+",
        dotColor: "bg-amber-500",
        numericValue: 110,
        suffix: "B+"
    },
]

const Stats = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [isInView, controls]);

    return (
        <motion.div
            ref={sectionRef}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.15,
                        delayChildren: 0.2,
                    }
                }
            }}
            className="relative h-[160px] overflow-hidden border-b-2  bg-gradient-to-br from-[#0B0844] to-[#473E82]"
        >
            {/* Animated background particles */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-white/10"
                        style={{
                            width: Math.random() * 60 + 20,
                            height: Math.random() * 60 + 20,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, 20, 0],
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: Math.random() * 4 + 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Logo overlay  */}
            <div className="pointer-events-none absolute -inset-20 pr-20 flex items-center overflow-hidden opacity-14">
                <img 
                    src="/logo0.png" 
                    alt="Logo" 
                    className="h-[180%] w-[180%] object-contain object-left"
                />
            </div>

            <div className="relative mx-auto grid h-full max-w-6xl grid-cols-2 items-center gap-y-6 px-5 sm:grid-cols-4 pl-20 sm:pl-15 lg:pl-35">
                {stats.map((stat, index) => (
                    <StatItem key={index} stat={stat} isInView={isInView} index={index} />
                ))}
            </div>
        </motion.div>
    )
}

const StatItem: React.FC<StatItemProps> = ({ stat, isInView, index }) => {
    const [count, setCount] = useState<number>(0);
    const itemRef = useRef<HTMLDivElement>(null);
    const isItemInView = useInView(itemRef, { once: false, amount: 0.5 });

    useEffect(() => {
        if (isItemInView || isInView) {
            const duration = 2500;
            const steps = 60;
            const stepTime = duration / steps;
            const increment = stat.numericValue / steps;
            let current = 0;
            let step = 0;

            const timer = setInterval(() => {
                step++;
                current += increment;
                if (step >= steps) {
                    current = stat.numericValue;
                    clearInterval(timer);
                }
                setCount(Math.round(current));
            }, stepTime);

            return () => clearInterval(timer);
        } else {
            setCount(0);
        }
    }, [isItemInView, isInView, stat.numericValue]);

    return (
        <motion.div
            ref={itemRef}
            variants={{
                hidden: { 
                    opacity: 0, 
                    y: 30,
                    scale: 0.95,
                },
                visible: { 
                    opacity: 1, 
                    y: 0,
                    scale: 1,
                    transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                    }
                }
            }}
            className="relative"
        >
            <motion.div
                className="mb-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
            >
                <span className="relative text-xs font-normal text-gray-300">
                    {stat.title}
                </span>
            </motion.div>

            <motion.div 
                className="flex items-center gap-2"
              
                transition={{ type: "spring", stiffness: 300 }}
            >
                <motion.span 
                    className={`h-2.5 w-2.5 shrink-0 ${stat.dotColor}`}
                    animate={{
                        scale: isItemInView || isInView ? [0, 1.5, 1] : 0,
                        opacity: isItemInView || isInView ? 1 : 0,
                    }}
                    transition={{
                        delay: 0.3 + index * 0.1,
                        duration: 0.6,
                        ease: "easeOut",
                    }}
                />
                
                <div className="relative">
                    <motion.span 
                        className="text-2xl font-medium text-white sm:text-4xl"
                        animate={{
                            opacity: isItemInView || isInView ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        ₦
                    </motion.span>
                    <motion.span 
                        className="text-2xl font-medium text-white sm:text-4xl"
                        animate={{
                            opacity: isItemInView || isInView ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        {isItemInView || isInView ? count.toLocaleString() : '0'}
                    </motion.span>
                    <motion.span 
                        className="text-2xl font-medium text-white sm:text-4xl"
                        animate={{
                            opacity: isItemInView || isInView ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        {stat.suffix}
                    </motion.span>

                </div>
            </motion.div>
        </motion.div>
    );
}

export default Stats;