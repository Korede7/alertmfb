import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

type Item = {
    title: string;
    subtitle: string;
    path?: string
};

type Props = {
    label: string;
    id: string;
    items: Item[];
    theme: {
        textClass: string;
    };
    activeDropdown: string | null;
    toggleDropdown: (id: string) => void;
};

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.08,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 12,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.35,
            ease: "easeOut" as const,
        },
    },
};

export default function NavDropdown({
    label,
    id,
    items,
    theme,
    activeDropdown,
    toggleDropdown,
}: Props) {
    const navigate = useNavigate()
    return (
        <div className="relative">
            <button
                onClick={() => toggleDropdown(id)}
                className={`inline-flex items-center gap-1 whitespace-nowrap text-[11px] sm:text-xs md:text-xs lg:text-xs font-medium cursor-pointer transition-colors duration-300 ${activeDropdown === id ? "text-yellow-700" : theme.textClass
                    }`}
            >
                {label}

                <ChevronDown
                    size={13}
                    className={`transition-all duration-300 ${activeDropdown === id ? "rotate-180 text-secondary" : ""
                        }`}
                />
            </button>

            <AnimatePresence>
                {activeDropdown === id && (
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -22 }}
                        transition={{ duration: 0.25 }}
                        className="absolute left-0 top-[42px] w-[560px] rounded-[24px] bg-white p-5 shadow-[0_20px_70px_rgba(0,0,0,0.12)] z-50"
                    >
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="show"
                            className="grid grid-cols-2 gap-x-12 gap-y-4"
                        >
                            {items.map((item) => (
                                <motion.button
                                    key={item.title}
                                    variants={itemVariants}
                                    whileHover={{ x: 4 }}
                                    transition={{ duration: 0.2 }}
                                    onClick={() => {
                                        if (item.path) {
                                            navigate(item.path);
                                            toggleDropdown(id); // close dropdown after navigating
                                        }
                                    }}
                                    className="w-full text-left group/item cursor-pointer hover:bg-gray-100 p-3 rounded-lg"
                                >
                                    <h4 className="text-[14px] font-semibold text-primary group-hover/item:text-primary transition-colors duration-200">
                                        {item.title}
                                    </h4>

                                    <p className="mt-1 text-[12px] text-gray-400">
                                        {item.subtitle}
                                    </p>
                                </motion.button>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}