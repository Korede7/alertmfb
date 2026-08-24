import {
    ArrowLeft,
} from "lucide-react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { LiaLinkedin } from "react-icons/lia";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const posts = {
    "meet-the-dreammaker-korede-duyile": {
        category: "People",
        date: "July 02, 2026",
        readTime: "5 mins read",
        title:
            "Meet the DreamMaker: Korede Duyile. The Product Designer Intern at Alert MFB",
        author: "Peter Moses, Lagos",
        image: "/group2.jpg",
    },


};

const pageVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut" as const,
        },
    },
};

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 25,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut" as const,
        },
    },
};

const imageReveal = {
    hidden: {
        opacity: 0,
        scale: 1.04,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1.1,
            ease: "easeOut" as const,
        },
    },
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const paragraphAnimation = {
    hidden: {
        opacity: 0,
        y: 18,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            ease: "easeOut" as const,
        },
    },
};

const BlogPost = () => {
    const { slug } = useParams();

    const post =
        posts[slug as keyof typeof posts] ||
        posts["meet-the-dreammaker-korede-duyile"];

    return (
        <motion.div
            className="min-h-screen overflow-hidden bg-white pt-28 pb-24"
            variants={pageVariants}
            initial="hidden"
            animate="visible"
        >
            <main className="mx-auto w-full max-w-[970px] px-6 sm:px-8 lg:px-10">

                {/* Back */}
                <motion.div
                    className="mb-14 sm:mb-16"
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.1 }}
                >
                    <Link
                        to="/about-us/news-blog"
                        className="group inline-flex items-center gap-3 text-[11px] font-light text-primary transition-opacity duration-200 hover:opacity-60"
                    >
                        <motion.span
                            className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F0F0F6]"
                            whileHover={{
                                x: -4,
                                scale: 1.05,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 20,
                            }}
                        >
                            <ArrowLeft
                                size={13}
                                strokeWidth={1.8}
                            />
                        </motion.span>

                        Back
                    </Link>
                </motion.div>

                {/* Main post layout */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-8">

                    {/* Post meta */}
                    <motion.aside
                        className="order-2 lg:order-1"
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.2 }}
                    >
                        <div className="lg:pt-1">
                            <motion.span
                                className="inline-flex rounded-md bg-secondary px-4 py-3 text-[11px] font-light text-white"
                                whileHover={{
                                    y: -2,
                                    scale: 1.02,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20,
                                }}
                            >
                                {post.category}
                            </motion.span>

                            <div className="mt-4 flex items-center gap-2 text-[9px] font-light text-gray-400">
                                <span>{post.date}</span>

                                <span className="h-1 w-1 rounded-full bg-gray-400" />

                                <span>{post.readTime}</span>
                            </div>
                        </div>
                    </motion.aside>

                    {/* Content */}
                    <article className="order-1 lg:order-2">

                        {/* Title */}
                        <motion.h1
                            className="max-w-[690px] text-[27px] font-semibold leading-[1.08] tracking-[-0.04em] text-primary sm:text-[30px] lg:text-[34px]"
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.25 }}
                        >
                            {post.title}
                        </motion.h1>

                        {/* Hero image */}
                        <motion.div
                            className="mt-8 h-[265px] w-full overflow-hidden rounded-[20px] sm:h-[320px] lg:h-[380px]"
                            variants={imageReveal}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.35 }}
                        >
                            <motion.img
                                src="/group2.jpg"
                                alt="Alert MFB"
                                className="h-full w-full object-cover"
                                initial={{ scale: 1.06 }}
                                animate={{ scale: 1 }}
                                whileHover={{ scale: 1.025 }}
                                transition={{
                                    duration: 1.2,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            />
                        </motion.div>

                        {/* Author / social */}
                        <motion.div
                            className="mt-8 flex items-center gap-4 text-[9px] text-gray-400"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.5,
                            }}
                        >
                            <span>by {post.author}</span>

                            <span className="h-1 w-1 rounded-full bg-gray-400" />

                            <div className="flex items-center gap-2">

                                <motion.a
                                    href="#"
                                    aria-label="Twitter"
                                    className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F1F1F5] text-primary transition-colors hover:bg-[#E6E5EC]"
                                    whileHover={{
                                        y: -3,
                                        scale: 1.12,
                                    }}
                                    whileTap={{ scale: 0.92 }}
                                >
                                    <BsTwitter size={9} />
                                </motion.a>

                                <motion.a
                                    href="#"
                                    aria-label="Instagram"
                                    className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F1F1F5] text-primary transition-colors hover:bg-[#E6E5EC]"
                                    whileHover={{
                                        y: -3,
                                        scale: 1.12,
                                    }}
                                    whileTap={{ scale: 0.92 }}
                                >
                                    <BsInstagram size={9} />
                                </motion.a>

                                <motion.a
                                    href="#"
                                    aria-label="Facebook"
                                    className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F1F1F5] text-primary transition-colors hover:bg-[#E6E5EC]"
                                    whileHover={{
                                        y: -3,
                                        scale: 1.12,
                                    }}
                                    whileTap={{ scale: 0.92 }}
                                >
                                    <FaFacebook size={9} />
                                </motion.a>

                                <motion.a
                                    href="#"
                                    aria-label="LinkedIn"
                                    className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F1F1F5] text-primary transition-colors hover:bg-[#E6E5EC]"
                                    whileHover={{
                                        y: -3,
                                        scale: 1.12,
                                    }}
                                    whileTap={{ scale: 0.92 }}
                                >
                                    <LiaLinkedin size={9} />
                                </motion.a>

                            </div>
                        </motion.div>

                        {/* Article */}
                        <motion.div
                            className="mt-8 max-w-[690px] text-[11px] font-light leading-[1.75] text-primary sm:text-[12px] sm:leading-[1.8]"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.08,
                            }}
                        >

                            <motion.p variants={paragraphAnimation} className="mb-6">
                                <strong className="font-medium">
                                    Meet The DreamMaker
                                </strong>{" "}
                                is a series that spotlights the people behind
                                the work at Moniepoint. Each week, we introduce
                                you to a DreamMaker (as Moniepoint employees
                                are known), sharing what they do, the impact
                                they're making, and a few fun things you might
                                not know about them.
                            </motion.p>

                            <motion.p variants={paragraphAnimation} className="mb-2">
                                <strong className="font-medium">Nifemi:</strong>{" "}
                                Hi, hi, Uche, how are you doing today?
                            </motion.p>

                            <motion.p variants={paragraphAnimation} className="mb-2">
                                <strong className="font-medium">Uche:</strong>{" "}
                                I'm doing great, thanks for having me.
                            </motion.p>

                            <motion.p variants={paragraphAnimation} className="mb-2">
                                <strong className="font-medium">Nifemi:</strong>{" "}
                                Before we dive into the conversation, I have
                                some warm-up questions. Would you rather have
                                tea or coffee?
                            </motion.p>

                            <motion.p variants={paragraphAnimation} className="mb-2">
                                <strong className="font-medium">Uche:</strong>{" "}
                                Coffee, black.
                            </motion.p>

                            <motion.p variants={paragraphAnimation} className="mb-2">
                                <strong className="font-medium">Nifemi:</strong>{" "}
                                Would you rather be hot or cold?
                            </motion.p>

                            <motion.p variants={paragraphAnimation} className="mb-2">
                                <strong className="font-medium">Uche:</strong>{" "}
                                Cold, it's easier to manage than being hot.
                            </motion.p>

                            <motion.p variants={paragraphAnimation} className="mb-2">
                                <strong className="font-medium">Nifemi:</strong>{" "}
                                Lastly, would you rather stay at home with
                                everything you need or have the opportunity to
                                go out?
                            </motion.p>

                            <motion.p variants={paragraphAnimation} className="mb-2">
                                <strong className="font-medium">Uche:</strong>{" "}
                                Home, definitely.
                            </motion.p>

                            <motion.p variants={paragraphAnimation} className="mb-2">
                                <strong className="font-medium">Nifemi:</strong>{" "}
                                Another home buddy in the group chat.
                            </motion.p>

                            <motion.p variants={paragraphAnimation} className="mb-6">
                                <strong className="font-medium">Uche:</strong>{" "}
                                There is rice at home.
                            </motion.p>

                            <motion.p variants={paragraphAnimation} className="mb-2">
                                <strong className="font-medium">Nifemi:</strong>{" "}
                                Lol! So glad to have you here with us. Please
                                introduce yourself to us.
                            </motion.p>

                            <motion.p variants={paragraphAnimation} className="mb-6">
                                <strong className="font-medium">Uche:</strong>{" "}
                                Hi everyone, I'm Uche, a Compliance Business
                                Partner working in the Regulatory Compliance
                                and Control team here at Moniepoint.
                            </motion.p>

                            <motion.p variants={paragraphAnimation} className="mb-2">
                                <strong className="font-medium">Nifemi:</strong>{" "}
                                What's your day like as a Compliance Business
                                Partner?
                            </motion.p>

                            <motion.p variants={paragraphAnimation} className="mb-4">
                                <strong className="font-medium">Uche:</strong>{" "}
                                My day usually kicks off with a double
                                espresso, music playing in the background, and
                                a quick scan of overnight alerts; checking new
                                customer onboarding screenings to ensure
                                nothing slips past, a task that continues
                                throughout the day.
                            </motion.p>

                            <motion.p variants={paragraphAnimation} className="mb-4">
                                Once that's done, I move on to Transaction
                                Limit Requests received from customers and
                                business relationship managers. For example,
                                when a customer wants to increase their
                                transaction or daily limit, we ask for
                                credentials to move them to the next level,
                                let's say moving from 500,000 to 10 million,
                                20 million, or higher. The process involves
                                reviewing the customer and confirming their
                                details.
                            </motion.p>

                            <motion.p variants={paragraphAnimation} className="mb-4">
                                The afternoon is mostly spent keeping up with
                                onboarding alerts, attending to escalations
                                from other Compliance teams, brainstorming
                                with my team to resolve identified control
                                gaps and refining compliance processes.
                            </motion.p>

                            <motion.p variants={paragraphAnimation} className="mb-6">
                                I also serve as the primary Compliance contact
                                for the business teams around the country,
                                providing guidance and ensuring our operations
                                stay aligned with regulatory expectations. And
                                this is just a day when I don't have to go
                                into FBI mode.
                            </motion.p>

                            <motion.p variants={paragraphAnimation} className="mb-2">
                                <strong className="font-medium">Nifemi:</strong>{" "}
                                How do you manage your time during the day?
                            </motion.p>

                            <motion.p variants={paragraphAnimation} className="mb-6">
                                <strong className="font-medium">Uche:</strong>{" "}
                                I usually just list everything I need to get
                                done in the day, and then assign them priority
                                designations: low, medium, high, with high, of
                                course, being the most crucial, and then work
                                my way down the line.
                            </motion.p>

                            <motion.p variants={paragraphAnimation} className="mb-2">
                                <strong className="font-medium">Nifemi:</strong>{" "}
                                How long have you been at Moniepoint, and how
                                has that been?
                            </motion.p>

                            <motion.p variants={paragraphAnimation} className="mb-6">
                                <strong className="font-medium">Uche:</strong>{" "}
                                It's been almost a year (11 months), and
                                honestly, it feels like I've been here much
                                longer (in a good way). I've been lucky to have
                                a very supportive team; they've made a lot of
                                the hard work not seem so overwhelming. Special
                                shoutout to Cyril, Excel, Esther, Henry,
                                Abdulquadir, Nwachukwu, and, of course, my
                                manager, Olamide. They've been great.
                            </motion.p>

                            <motion.p variants={paragraphAnimation} className="mb-2">
                                <strong className="font-medium">Nifemi:</strong>{" "}
                                Glad you're having a great time here, and, of
                                course, a special shoutout to your team!
                            </motion.p>

                            <motion.p variants={paragraphAnimation} className="mb-2">
                                <strong className="font-medium">Nifemi:</strong>{" "}
                                Have you always wanted to do Compliance,
                                though?
                            </motion.p>

                            <motion.p variants={paragraphAnimation} className="mb-6">
                                <strong className="font-medium">Uche:</strong>{" "}
                                Hmmm, I think Compliance found me. So, I
                                studied law and worked as a litigator for about
                                seven years, after which I guess I was on the
                                lookout for a new challenge, and compliance
                                encompassed a lot of the elements I was already
                                familiar with, but from a new perspective.
                            </motion.p>

                            <motion.p variants={paragraphAnimation} className="mb-2">
                                <strong className="font-medium">Nifemi:</strong>{" "}
                                People say compliance can be boring because of
                                the structure that comes with it. What do you
                                do that makes the experience different for you?
                            </motion.p>

                            <motion.p variants={paragraphAnimation} className="mb-2">
                                <strong className="font-medium">Uche:</strong>{" "}
                                So, I guess anything can be boring depending on
                                how you look at it. For instance, a lot of
                                people find history boring, but I love history
                                so much that it informs pretty much all my
                                hobbies.
                            </motion.p>

                            <motion.p variants={paragraphAnimation}>
                                <strong className="font-medium">Nifemi:</strong>{" "}
                                Please indulge me. What are these hobbies?
                            </motion.p>

                        </motion.div>

                        {/* Bottom image */}
                        <motion.div
                            className="mt-16 h-[220px] w-full overflow-hidden rounded-[20px] sm:h-[260px] lg:h-[300px]"
                            variants={imageReveal}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                        >
                            <motion.div
                                className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#17134F] via-[#383369] to-[#8A87A7]"
                                whileHover={{
                                    scale: 1.01,
                                }}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            >
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.12),transparent_45%)]" />

                                <motion.div
                                    className="relative flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white shadow-sm sm:h-[70px] sm:w-[70px]"
                                    initial={{
                                        opacity: 0,
                                        scale: 0.8,
                                        rotate: -10,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        scale: 1,
                                        rotate: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.2,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                >
                                    <img
                                        src="/whiteLogo.png"
                                        alt="Alert MFB"
                                        className="h-8 w-8 object-contain sm:h-9 sm:w-9"
                                    />
                                </motion.div>
                            </motion.div>
                        </motion.div>

                    </article>
                </div>
            </main>
        </motion.div>
    );
};

export default BlogPost;