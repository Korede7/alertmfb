import { Apple } from "lucide-react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { motion, type Variants } from "framer-motion";

const GetStarted = () => {
    // Variants for animations
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    // Floating animation variants
    const floatVariants: Variants = {
        animate: {
            y: [0, -15, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    return (
        <section className="bg-white py-20 px-6 overflow-hidden">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    <motion.p
                        variants={itemVariants}
                        className="text-secondary text-xs font-semibold tracking-[0.8em] mb-3"
                    >
                        GET STARTED
                    </motion.p>
                    <motion.h2
                        variants={itemVariants}
                        className="text-primary text-xl md:text-5xl font-medium mb-4"
                    >
                        Bank Smart, Bank Alert.
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-primary text-sm md:text-base mb-8"
                    >
                        Get started with smart and seamless digital banking with Alert MFB
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex items-center justify-center gap-3 mb-10 flex-wrap"
                    >
                        <motion.button
                            className="inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-[#241c52] transition-colors cursor-pointer transition-transform duration-300 hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Apple size={16} className="fill-white" />
                            <span>Get on iPhone</span>
                        </motion.button>
                        <motion.button
                            className="inline-flex items-center gap-2 text-primary text-sm font-medium px-6 py-3 rounded-full border border-[#171238]/20 hover:bg-[#171238]/5 transition-colors cursor-pointer transition-transform duration-300 hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <IoLogoGooglePlaystore size={16} />
                            <span>Get on Android</span>
                        </motion.button>
                    </motion.div>

                    {/* Hero image */}
                    <motion.div
                        variants={itemVariants}
                        className="relative rounded-3xl overflow-hidden bg-gray-200 w-full h-[300px] md:h-[380px] flex items-center justify-center text-gray-400 text-sm"
                    >
                        <motion.img
                            src="/getstarted.jpg"
                            className="w-full h-full object-cover"
                            alt="Alert MFB banking app"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                        />

                        {/* Floating card */}
                        <motion.div
                            className="absolute left-4 sm:left-8 md:left-14 top-1/2 -translate-y-1/2 w-[150px] sm:w-[180px] md:w-[220px] h-[150px] sm:h-[180px] md:h-[220px] rounded-2xl p-2 bg-white/30 backdrop-blur-sm shadow-xl flex items-center justify-center"
                            variants={floatVariants}
                            animate="animate"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src="/getstarted2.jpg"
                                className="w-full h-full object-cover rounded-2xl"
                                alt="Alert MFB app interface"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default GetStarted;