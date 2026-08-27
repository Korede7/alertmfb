import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Downloads from "./Dowloads";

const categories = [
    "All",
    "Account Forms",
    "Loan Forms",
    "Business Forms",
    "Policies",
    "Rate Cards",
    "Annual Reports",
    "SWIFT Codes",
    "Financial Education",
];

const DownloadDocuments = () => {
    const [activeCategory, setActiveCategory] = useState(0);
    const [searchValue, setSearchValue] = useState("");
    const sectionRef = useRef(null);

    // Animation on scroll - fade in elements
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-in");
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll(".animate-on-scroll");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div>
            <section
                ref={sectionRef}
                className=" w-full bg-white px-5 pt-44 sm:px-8 sm:pt-48 md:pt-52 lg:px-10 overflow-y-auto"
            >
                <div className="mx-auto flex h-full w-full max-w-5xl flex-col">
                    {/* ================= HERO ================= */}
                    <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-10">
                        {/* Left */}
                        <div className="w-full md:max-w-[390px] animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
                            <p className="mb-4 text-[9px] font-medium tracking-[0.55em] text-secondary sm:text-[10px] animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 delay-100 ease-out">
                                DOWNLOAD DOCUMENTS
                            </p>

                            <h1 className="text-[29px] font-semibold leading-[1.08] tracking-[-0.04em] text-primary sm:text-[34px] md:text-[40px] lg:text-[40px] animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 delay-200 ease-out">
                                Every document you
                                <br />
                                might ever need from
                                <br />
                                Alert MFB — right here.
                            </h1>
                        </div>

                        {/* Right */}
                        <div className="w-full md:w-[245px] md:pb-0.5 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 ease-out">
                            <p className="mb-5 text-right text-[10px] font-light leading-[1.55] text-primary sm:text-[11px] md:text-[12px] animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 delay-400 ease-out">
                                Account forms, loan applications, policy documents,
                                <br className="hidden md:block" />
                                rate cards, and annual reports. Search or filter to
                                <br className="hidden md:block" />
                                find what you need.
                            </p>

                            {/* Search */}
                            <div className="flex w-full items-center gap-1.5 animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 delay-500 ease-out">
                                <div className="flex h-[37px] flex-1 items-center rounded-[8px] bg-[#F9F9FD] px-3 transition-all duration-300 hover:shadow-md focus-within:shadow-md sm:h-[42px] md:h-[47px]">
                                    <Search className="mr-2 h-[13px] w-[13px] shrink-0 text-[#77778A] transition-transform duration-300 group-hover:scale-110" />

                                    <input
                                        type="text"
                                        placeholder="Search Documents"
                                        value={searchValue}
                                        onChange={(e) => setSearchValue(e.target.value)}
                                        className="w-full bg-transparent text-[10px] font-light text-primary outline-none placeholder:text-[#9999AA] transition-all duration-300 sm:text-[11px] md:text-[12px]"
                                    />
                                </div>

                                <button
                                    type="button"
                                    onClick={() => {
                                        // Search animation
                                        const btn = document.getElementById("searchBtn");
                                        btn?.classList.add("animate-pulse-once");
                                        setTimeout(() => {
                                            btn?.classList.remove("animate-pulse-once");
                                        }, 600);
                                    }}
                                    id="searchBtn"
                                    className="h-[37px] rounded-[8px] bg-primary px-4 text-[10px] font-medium text-white transition-all duration-300 hover:opacity-90 hover:scale-105 active:scale-95 sm:h-[42px] md:h-[47px] sm:px-5"
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>

                   {/* ================= CATEGORY FILTER ================= */}
<div className="mt-18 w-full rounded-[8px] bg-[#F9F9FD] p-1.5 sm:mt-12 md:mt-16 lg:mt-30 animate-on-scroll opacity-0 translate--8 transition-all duration-700 delay-600 ease-out">
    {/* Categories wrapper with overflow */}
    <div className="relative w-full">
        {/* Scrollable container */}
        <div className="flex w-full items-center gap-3.5 overflow-x-auto scrollbar-hide">
            {categories.map((category, index) => (
                <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(index)}
                    className={`
                        relative
                        flex-shrink-0
                        whitespace-nowrap
                        rounded-[7px]
                        px-2.5
                        py-2.5
                        text-[8px]
                        font-normal
                        transition-all
                        duration-300
                        ease-out
                        sm:px-3
                        sm:text-[9px]
                        md:px-3.5
                        md:py-3
                        md:text-[9.5px]
                        lg:px-4
                        lg:text-[12px]
                        ${
                            index === activeCategory
                                ? "scale-105 bg-primary text-white shadow-sm"
                                : "text-primary hover:scale-105 hover:bg-white hover:shadow-sm"
                        }
                    `}
                    style={{
                        transitionDelay: `${index * 50}ms`,
                    }}
                >
                    {category}

                    {index === activeCategory && (
                        <span className="absolute -bottom-1 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-primary animate-pulse-slow" />
                    )}
                </button>
            ))}
        </div>
    </div>
</div>
                </div>

                <style>{`
                .animate-on-scroll {
                    opacity: 0;
                    transform: translateY(30px);
                    }
                    
                    .animate-on-scroll.animate-in {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                    }
                    
                    @keyframes fadeInUp {
                        from {
                            opacity: 0;
                            transform: translateY(30px);
                            }
                            to {
                                opacity: 1;
                                transform: translateY(0);
                                }
                                }
                                
                                @keyframes pulseOnce {
                                    0% { transform: scale(1); }
                                    50% { transform: scale(0.95); }
                                    100% { transform: scale(1); }
                                    }
                
                .animate-pulse-once {
                    animation: pulseOnce 0.3s ease-in-out;
                    }
                    
                    @keyframes pulseSlow {
                        0%, 100% { opacity: 1; }
                        50% { opacity: 0.5; }
                        }
                        
                        .animate-pulse-slow {
                    animation: pulseSlow 2s ease-in-out infinite;
                    }
                    
                    /* Hover animations for category items */
                    .category-item {
                        position: relative;
                        overflow: hidden;
                        }
                        
                        .category-item::after {
                            content: '';
                            position: absolute;
                            bottom: 0;
                            left: 50%;
                            width: 0;
                    height: 2px;
                    background: currentColor;
                    transition: all 0.3s ease;
                    transform: translateX(-50%);
                }
                
                .category-item:hover::after {
                    width: 60%;
                    }
                    
                    /* Scrollbar hide */
                    .scrollbar-hide {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                        }
                        .scrollbar-hide::-webkit-scrollbar {
                            display: none;
                            }
                            `}</style>
            </section>
            <Downloads />
        </div>
    );
};

export default DownloadDocuments;