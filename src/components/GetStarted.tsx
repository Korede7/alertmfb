import { Apple } from "lucide-react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { motion, type Variants } from "framer-motion";

const GetStarted = () => {
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
        <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 overflow-hidden">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    <motion.p
                        variants={itemVariants}
                        className="text-secondary text-[10px] sm:text-xs font-semibold tracking-[0.45em] sm:tracking-[0.8em] mb-3"
                    >
                        GET STARTED
                    </motion.p>

                    <motion.h2
                        variants={itemVariants}
                        className="text-primary text-2xl sm:text-3xl md:text-5xl font-medium mb-4 leading-tight px-2"
                    >
                        Bank Smart, Bank Alert.
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-primary text-sm sm:text-base mb-8 max-w-md sm:max-w-xl mx-auto px-2"
                    >
                        Get started with smart and seamless digital banking with Alert MFB
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 sm:mb-10 w-full"
                    >
                        <motion.button
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-[#241c52] transition-colors cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Apple size={16} className="fill-white" />
                            <span>Get on iPhone</span>
                        </motion.button>

                        <motion.button
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-primary text-sm font-medium px-6 py-3 rounded-full border border-[#171238]/20 hover:bg-[#171238]/5 transition-colors cursor-pointer"
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
                        className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-200 w-full h-[240px] sm:h-[300px] md:h-[380px] flex items-center justify-center text-gray-400 text-sm"
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
                            className="absolute left-3 sm:left-8 md:left-14 top-1/2 -translate-y-1/2 w-[120px] h-[120px] sm:w-[170px] sm:h-[170px] md:w-[220px] md:h-[220px] rounded-xl sm:rounded-2xl p-1.5 sm:p-2 bg-white/30 backdrop-blur-sm shadow-xl flex items-center justify-center"
                            variants={floatVariants}
                            animate="animate"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src="/getstarted2.jpg"
                                className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
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