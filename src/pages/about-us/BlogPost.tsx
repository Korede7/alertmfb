import { ArrowLeft } from "lucide-react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { LiaLinkedin } from "react-icons/lia";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getBlogBySlug } from "../../services/blogService";

interface StrapiText {
    type: string;
    text: string;
}

interface StrapiBlock {
    type: string;
    children?: StrapiText[];
}

interface StrapiImage {
    id: number;
    name: string;
    alternativeText?: string;
    url: string;
    width?: number;
    height?: number;
}

interface Blog {
    id: number;
    documentId?: string;
    Title: string;
    slug: string;
    date: string;
    readTime?: string;
    autor: string;
    category: string;
    content: StrapiBlock[];
    Image?: StrapiImage[];
}

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
    const { slug } = useParams<{ slug: string }>();

    const [post, setPost] = useState<Blog | null>(null);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        const fetchPost = async () => {
            if (!slug) {
                console.error("NO SLUG FOUND IN URL");
                setLoading(false);
                return;
            }

            try {
                console.log("URL SLUG:", slug);

                const data = await getBlogBySlug(slug);

                console.log("BLOG DATA RECEIVED:", data);

                if (!data) {
                    console.error(
                        "No blog found for slug:",
                        slug
                    );

                    setPost(null);
                    return;
                }

                setPost(data);

            } catch (error) {
                console.error(
                    "Error fetching blog post:",
                    error
                );

                setPost(null);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [slug]);



    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-white">
                <p className="text-sm font-light text-primary">
                    Loading article...
                </p>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
                <h1 className="text-xl font-semibold text-primary">
                    Article not found
                </h1>

                <Link
                    to="/about-us/news-blog"
                    className="mt-4 text-sm text-secondary hover:underline"
                >
                    Back to News & Blogs
                </Link>
            </div>
        );
    }



    const imagePath = post.Image?.[0]?.url;

    const image = imagePath
        ? `${import.meta.env.VITE_STRAPI_URL}${imagePath}`
        : "/group2.jpg";


    const formattedDate = post.date
        ? new Date(post.date).toLocaleDateString("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
        })
        : "";

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

                            {/* Category */}
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

                            {/* Date + Read time */}
                            <div className="mt-4 flex items-center gap-2 text-[10px] font-light text-gray-400">
                                <span>{formattedDate}</span>

                                <span className="h-1 w-1 rounded-full bg-gray-400" />

                                <span>
                                    {post.readTime || "5 mins read"}
                                </span>
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
                            {post.Title}
                        </motion.h1>

                        {/* Hero image */}
                        <motion.div
                            className="mt-8 h-[265px] w-full overflow-hidden  sm:h-[320px] lg:h-[380px]"
                            variants={imageReveal}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.35 }}
                        >
                            <motion.img
                                src={image}
                                alt={
                                    post.Image?.[0]?.alternativeText ||
                                    post.Title
                                }
                                className="h-full w-full object-contain"
                                initial={{ scale: 1.06 }}
                                animate={{ scale: 1 }}
                                whileHover={{ scale: 1.025 }}
                                transition={{
                                    duration: 1.2,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                onError={(e) => {
                                    e.currentTarget.src = "/group2.jpg";
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
                            <span className="text-xs">
                                by {post.autor}
                            </span>

                            <span className="h-1 w-1 rounded-full bg-gray-400" />

                            <div className="flex items-center gap-2">

                                {/* Twitter */}
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
                                    <BsTwitter size={12} />
                                </motion.a>

                                {/* Instagram */}
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
                                    <BsInstagram size={12} />
                                </motion.a>

                                {/* Facebook */}
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
                                    <FaFacebook size={12} />
                                </motion.a>

                                {/* LinkedIn */}
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
                                    <LiaLinkedin size={12} />
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

                            {post.content?.length > 0 ? (
                                post.content.map((block, index) => {

                                    const text =
                                        block.children
                                            ?.map((child) => child.text)
                                            .join("") || "";

                                    if (!text.trim()) {
                                        return (
                                            <div
                                                key={index}
                                                className="h-4"
                                            />
                                        );
                                    }

                                    return (
                                        <motion.p
                                            key={index}
                                            variants={paragraphAnimation}
                                            className="mb-6"
                                        >
                                            {text}
                                        </motion.p>
                                    );
                                })
                            ) : (
                                <motion.p
                                    variants={paragraphAnimation}
                                    className="mb-6"
                                >
                                    This article does not have any content yet.
                                </motion.p>
                            )}

                        </motion.div>

                        {/* Bottom image */}

                        <motion.div
                            className="mt-2 sm:mt-2 h-[350px] w-full overflow-hidden rounded-[20px] sm:h-[360px] lg:h-[500px]"
                            variants={imageReveal}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                        >
                            <motion.div
                                className=" h-[365px] w-full overflow-hidden  sm:h-[420px] lg:h-[480px]"
                                variants={imageReveal}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.35 }}
                            >
                                <motion.img
                                    src={image}
                                    alt={
                                        post.Image?.[0]?.alternativeText ||
                                        post.Title
                                    }
                                    className="h-full w-full object-contain"
                                    initial={{ scale: 1.06 }}
                                    animate={{ scale: 1 }}
                                    whileHover={{ scale: 1.025 }}
                                    transition={{
                                        duration: 1.2,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                />
                            </motion.div>
                        </motion.div>

                    </article>
                </div>
            </main>
        </motion.div>
    );
};

export default BlogPost;
