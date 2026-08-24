import { Search } from "lucide-react";

const categories = [
    "All",
    "Business Tips",
    "Education Series",
    "Impact Stories",
    "News",
    "People",
    "Product Updates",
    "People",
];

const stories = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    tag: "News",
    date: "June 25th, 2026",
    title:
        "Meet the DreamMaker: Korede Duyile, The Product Designer Intern at Alert MFB",
    author: "Peter Moses, Lagos",
}));


const Blog = () => {
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
                        <p className="mb-4 text-[9px] font-medium tracking-[0.55em] text-secondary sm:text-[10px] mt-8 mb-8">
                            OTHER NEWS &amp; BLOGS
                        </p>

                        <h1 className="text-lg mb-5 font-semibold leading-none tracking-tight text-[#150F3C] sm:text-[34px]">
                            All Stories
                        </h1>

                        <p className="mt-2 text-[10px] leading-[1.4] text-primary sm:text-[11px]">
                            Everything you need to know, about everything we do.
                        </p>
                    </div>
                    {/* Search */}
                    <div className="flex w-full max-w-[320px] items-center gap-2 sm:w-[320px]">
                        {/* Input */}
                        <div className="flex h-11 min-w-0 flex-1 items-center gap-2 rounded-md bg-white px-3">
                            <Search
                                className="h-3 w-3 shrink-0 text-slate-400"
                                strokeWidth={2}
                            />

                            <input
                                type="text"
                                placeholder="Search news"
                                className="w-full bg-transparent text-sm text-primary placeholder:text-primary font-light focus:outline-none"
                            />
                        </div>

                        {/* Search Button */}
                        <button className="h-11 shrink-0 rounded-md bg-primary px-4 text-sm font-light text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#241a5c]">
                            Search
                        </button>
                    </div>
                </div>

                {/* Filter pills */}
                <div className="mt-18 flex justify-center mb-18">
                    <div className="inline-flex max-w-6xl flex-wrap items-center justify-center gap-1.5 rounded-md bg-gray p-2 shadow-[0_2px_8px_rgba(21,15,60,0.05)]">
                        {categories.map((cat, i) => (
                            <button
                                key={`${cat}-${i}`}
                                className={
                                    i === 0
                                        ? "rounded-lg bg-primary px-3 py-1.5 text-sm font-light text-white"
                                        : "rounded-lg px-3 py-1.5 text-sm font-light text-primary transition-all duration-200 hover:bg-white hover:text-[#150F3C]"
                                }
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Story grid */}
                <div className="mt-8 grid grid-cols-1 gap-x-5 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
                    {stories.map((story) => (
                        <article
                            key={story.id}
                            className="group cursor-pointer"
                        >
                            {/* Image */}
                            <div
                                className="relative flex h-[200px] w-full items-center justify-center overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 group-hover:-translate-y-1 sm:h-[220px] mb-5"
                                style={{
                                    background:
                                        "linear-gradient(135deg, #29235E 0%, #494382 75%, #7771A4 100%)",
                                }}
                            >
                                <img src="/group2.jpg" alt="" />
                            </div>

                            {/* Meta */}
                            <div className="mt-4.5 flex items-center justify-between gap-2">
                                <span className="text-xs font-medium text-secondary">
                                    {story.tag}
                                </span>

                                <span className="text-[10px] text-gray-400">
                                    {story.date}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="mt-3.5 max-w-[240px] text-sm font-semibold leading-[1.5] text-primary transition-colors duration-200 group-hover:text-[#3A3170] group-hover:underline">
                                {story.title}
                            </h3>

                            {/* Author */}
                            <p className="mt-3 text-xs text-gray-400">
                                by {story.author}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;