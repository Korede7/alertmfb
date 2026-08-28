import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard";
import { getBlogs } from "../../services/blogService";

interface Blog {
    id: number;
    Title: string;
    slug?: string;
    date: string;
    readTime?: string;
    autor: string;
    category: string;
    Image?: {
        id: number;
        url: string;
        alternativeText?: string;
    }[];
}

const categories = [
    "All",
    "Business Tips",
    "Education Series",
    "Impact Stories",
    "News",
    "People",
    "Product Updates",
];

const Blog = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setLoading(true);

                const data = await getBlogs();

                console.log("STRAPI BLOGS:", data);

                setBlogs(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error("Error fetching blogs:", error);
                setBlogs([]);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    const filteredBlogs = blogs.filter((blog) => {
        const matchesSearch =
            blog.Title.toLowerCase().includes(
                search.toLowerCase()
            );

        const matchesCategory =
            activeCategory === "All" ||
            blog.category === activeCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="relative min-h-screen overflow-hidden bg-white pt-24 sm:pt-28 space-y-8 pb-20">

            {/* Ambient gradient */}
            <div
                className="pointer-events-none absolute -right-48 -top-48 h-[600px] w-[600px] rounded-full opacity-50 blur-3xl"
                style={{
                    background:
                        "radial-gradient(circle at center, #4b4384 0%, #E9E7F5 75%, transparent 78%)",
                }}
            />

            <div className="relative mx-auto w-full max-w-5xl px-6 sm:px-8 lg:px-10">

                {/* Header */}
                <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">

                    {/* Heading */}
                    <div className="max-w-[430px]">
                        <p className="mb-8 mt-8 text-[9px] font-medium tracking-[0.55em] text-secondary sm:text-[10px]">
                            OTHER NEWS &amp; BLOGS
                        </p>

                        <h1 className="mb-5 text-lg font-semibold leading-none tracking-tight text-[#150F3C] sm:text-[34px]">
                            All Stories
                        </h1>

                        <p className="mt-2 text-[10px] leading-[1.4] text-primary sm:text-[11px]">
                            Everything you need to know, about everything we do.
                        </p>
                    </div>

                    {/* Search */}
                    <div className="flex w-full max-w-[320px] items-center gap-2 sm:w-[320px]">

                        <div className="flex h-11 min-w-0 flex-1 items-center gap-2 rounded-md bg-white px-3">
                            <Search
                                className="h-4 w-4 shrink-0 text-primary"
                                strokeWidth={2}
                            />

                            <input
                                type="text"
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                                placeholder="Search news"
                                className="w-full bg-transparent text-sm font-light text-primary placeholder:text-primary focus:outline-none"
                            />
                        </div>

                        <button
                            type="button"
                            className="h-11 shrink-0 rounded-md bg-primary px-4 text-sm font-light text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#241a5c]"
                        >
                            Search
                        </button>
                    </div>
                </div>

                {/* Categories */}
                <div className="mt-18 mb-18 flex justify-center">

                    {/* Desktop */}
                    <div className="hidden max-w-6xl flex-wrap items-center justify-center gap-1.5 rounded-md bg-white p-2 shadow-[0_2px_8px_rgba(21,15,60,0.05)] lg:flex">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() =>
                                    setActiveCategory(cat)
                                }
                                className={
                                    activeCategory === cat
                                        ? "rounded-lg bg-primary px-3 py-1.5 text-sm font-light text-white"
                                        : "rounded-lg px-3 py-1.5 text-sm font-light text-primary transition-all duration-200 hover:bg-[#F5F4FA]"
                                }
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Mobile + Tablet */}
                    <div className="w-full overflow-x-auto px-4 lg:hidden">
                        <div className="flex min-w-max gap-2 rounded-md bg-white p-2 shadow-[0_2px_8px_rgba(21,15,60,0.05)]">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() =>
                                        setActiveCategory(cat)
                                    }
                                    className={
                                        activeCategory === cat
                                            ? "whitespace-nowrap rounded-full bg-primary px-4 py-2 text-xs font-light text-white"
                                            : "whitespace-nowrap rounded-full border border-gray-200 px-4 py-2 text-xs font-light text-primary transition-all duration-200 hover:bg-gray-50"
                                    }
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Loading */}
                {loading && (
                    <div className="py-20 text-center text-sm text-gray-400">
                        Loading stories...
                    </div>
                )}

                {/* Empty */}
                {!loading && filteredBlogs.length === 0 && (
                    <div className="py-20 text-center text-sm text-gray-400">
                        No stories found.
                    </div>
                )}

                {/* Story grid */}
                {!loading && filteredBlogs.length > 0 && (
                    <div className="mt-8 grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 sm:gap-y-20 lg:grid-cols-3">
                        {filteredBlogs.map((blog) => (
                            <BlogCard
                                key={blog.id}
                                blog={blog}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blog;