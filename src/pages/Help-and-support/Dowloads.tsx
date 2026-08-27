import { FileText, ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";

interface Document {
  name: string;
  size: string;
  category: string;
}

const documents: Document[] = [
  {
    name: "Individual Account Opening Form",
    size: "PDF · 240 KB",
    category: "Account Forms",
  },
  {
    name: "Business Account Opening Form",
    size: "PDF · 240 KB",
    category: "Account Forms",
  },
  {
    name: "Mandate & Signatory Change Form",
    size: "PDF · 240 KB",
    category: "Account Forms",
  },
  {
    name: "Account Closure Request Form",
    size: "PDF · 240 KB",
    category: "Account Forms",
  },
  {
    name: "Personal Loan Application Form",
    size: "PDF · 240 KB",
    category: "Loan Forms",
  },
  {
    name: "SME Loan Application Form",
    size: "PDF · 240 KB",
    category: "Loan Forms",
  },
  {
    name: "Asset Finance Application Form",
    size: "PDF · 240 KB",
    category: "Account Forms",
  },
  {
    name: "Direct Debit Mandate Form",
    size: "PDF · 240 KB",
    category: "Account Forms",
  },
];

const Downloads = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

  const handleDownload = (e: React.MouseEvent<HTMLButtonElement>, document: Document) => {
    e.stopPropagation();
    const button = e.currentTarget;
    
    // Add loading animation
    button.classList.add("animate-spin-once");
    setTimeout(() => {
      button.classList.remove("animate-spin-once");
    }, 600);
    
    // Simulate download
    console.log(`Downloading: ${document.name}`);
  };

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-[#F8F8FC] px-4 mt-30 sm:px-6 sm:py-16 md:py-20"
    >
      <div className="mx-auto w-full max-w-4xl">
        <div className="flex flex-col gap-[15px]">
          {documents.map((document, index) => (
            <div 
              key={index}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-500 ease-out"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className="
                  flex
                  h-[31px]
                  w-full
                  items-center
                  rounded-[7px]
                  bg-white
                  px-3
                  shadow-[0_1px_3px_rgba(11,8,68,0.02)]
                  transition-all
                  duration-300
                  hover:shadow-[0_4px_12px_rgba(11,8,68,0.06)]
                  sm:h-[61px]
                  group
                  relative
                  overflow-hidden
                "
              >
                {/* Subtle shimmer effect on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"></div>

                {/* Document name */}
                <div className="flex min-w-0 flex-1 items-center gap-1">
                  <FileText
                    className="h-[14px] w-[14px] shrink-0 text-primary transition-transform duration-300 group-hover:scale-110 sm:h-[18px] sm:w-[18px]"
                    strokeWidth={2.5}
                  />

                  <span className="truncate text-[7px] font-light leading-none text-primary transition-colors duration-300 group-hover:text-primary/80 sm:text-[14px]">
                    {document.name}
                  </span>
                </div>

                {/* File information */}
                <div className="flex shrink-0 items-center gap-2">
                  <span
                    className="
                      rounded-full
                      bg-[#F7F7FB]
                      px-2
                      py-[6px]
                      text-[13px]
                      font-normal
                      leading-none
                      text-[#9A9AAF]
                      transition-all
                      duration-300
                      group-hover:bg-primary/5
                    "
                  >
                    {document.size}
                  </span>

                  <span className="hidden text-[13px] font-normal leading-none text-[#8D8DA3] transition-colors duration-300 group-hover:text-primary/70 sm:block">
                    {document.category}
                  </span>
                </div>

                {/* Download */}
                <button
                  type="button"
                  aria-label={`Download ${document.name}`}
                  onClick={(e) => handleDownload(e, document)}
                  className="
                    ml-2
                    flex
                    h-[22px]
                    w-[22px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-primary
                    text-white
                    transition-all
                    duration-300
                    hover:scale-110
                    hover:opacity-90
                    active:scale-95
                    relative
                    overflow-hidden
                  "
                >
                  {/* Ripple effect on click */}
                  <span className="absolute inset-0 rounded-full bg-white opacity-0 transition-opacity duration-300 group-active:opacity-20"></span>
                  <ArrowDown
                    className="h-[10px] w-[10px] transition-transform duration-300 group-hover:translate-y-0.5"
                    strokeWidth={2.5}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
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

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animate-on-scroll.animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        @keyframes spinOnce {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
          100% { transform: rotate(0deg); }
        }

        .animate-spin-once {
          animation: spinOnce 0.3s ease-in-out;
        }

        /* Pulse animation for download button */
        .download-pulse {
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        /* Hover animation for the entire card */
        .group:hover .file-icon {
          transform: scale(1.1);
        }

        /* Scrollbar styling for smooth scrolling */
        .smooth-scroll {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  );
};

export default Downloads;