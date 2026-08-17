import {
    ArrowRight,
    Users,
    ShieldCheck,
} from "lucide-react";

const Overview = () => {
    return (
        <section className="min-h-screen bg-white overflow-hidden pt-20 sm:pt-16 md:pt-40 lg:pt-20 pb-12 sm:pb-16 transition-all duration-300">
            {/* HERO */}
            <div className="relative min-h-[515px] lg:min-h-[590px]">
                {/* Main Content */}
                <div className="relative z-20 max-w-5xl mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-[43%_57%] min-h-[515px]">

                        {/* LEFT CONTENT */}
                        <div className="flex flex-col justify-center pt-12 lg:pt-0">
                            <div className="max-w-7xl">

                                <h1
                                   className="text-primary font-semibold tracking-[-0.045em] leading-[0.93] text-4xl sm:text-5xl lg:text-[52px]">Empowering <br /> Nigerians  <br />  One account at   <br />
                                    a time
                                </h1>

                                <p
                                    className=" mt-7 text-primary text-sm sm:text-[12px] leading-[1.45]  max-w-[325px]    "
                                >
                                    Alert Microfinance Bank is a CBN-licensed bank built on one
                                    conviction: that honest, accessible banking should be the
                                    default in Nigeria — not a privilege reserved for people who
                                    already have money.
                                </p>

                                {/* BUTTONS */}
                                <div className="flex items-center gap-3 mt-7">
                                    <button
                                        className=" group  flex items-center  gap-3  bg-primary text-white rounded-full  pl-4  pr-1  py-1  text-[10px]  font-medium  hover:bg-[#15105c]  transition-all "
                                    >
                                        <span>Open an account</span>

                                        <span
                                            className=" w-6 h-6 rounded-full bg-white text-[#0B0844] flex items-center justify-center group-hover:translate-x-0.5 transition-transfor  "
                                        >
                                            <ArrowRight size={12} strokeWidth={2.5} />
                                        </span>
                                    </button>

                                    <button
                                        className="flex  items-center  gap-2  rounded-full border  border-[#0B0844] text-[#0B0844]  px-4  py-2  text-[10px]  font-medium  hover:bg-[#0B0844]  hover:text-white  transition-all "
                                    >
                                        <Users size={12} strokeWidth={2.2} />
                                        <span>Join our team</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT IMAGE AREA */}
                       
<div className="relative min-h-[515px] overflow-visible">

    {/* BLUE BACKGROUND */}
    <div
        className="
            absolute
            z-0
            top-[52px]
            right-[-100px]
            w-[490px]
            h-[535px]
            rounded-tl-[28px]
            bg-primary
            overflow-hidden
        "
    >
        {/* Zoomed logo */}
        <div
            className="
                absolute
                inset-0
                z-0
                bg-no-repeat
                opacity-[0.05]
                pointer-events-none
            "
            style={{
                backgroundImage: "url('/whiteLogo.png')",
                backgroundSize: "180%",
                backgroundPosition: "center",
            }}
        />
    </div>

    {/* PERSON / ABOUT IMAGE */}
    
<div
    className="
        absolute 
        z-20
        -bottom-18
        left-[-45px]
        w-[500px]
        h-[615px]
        overflow-hidden
        pointer-events-none
    "
>
    <img
        src="/aboutImg.png"
        alt="Alert MFB"
        className="
            absolute
            w-[650px]
            h-auto
            
            left-0
            top-[90px]
        "
    />
</div>

    {/* FLOATING CARD */}
    <div
        className="
            absolute
            z-30
            top-[240px]
            right-[120px]
            w-[160px]
            h-[155px]
            bg-white
            rounded-[13px]
            shadow-[0_8px_30px_rgba(0,0,0,0.18)]
            border-[5px]
            border-[#d9d7e8]
            p-2
        "
    >
        <div className="h-full rounded-[7px] overflow-hidden">
            <img
                src="/getstarted2.jpg"
                alt=""
                className="w-full h-full object-cover"
            />
        </div>
    </div>
</div>
                    </div>
                </div>

                {/* BOTTOM NAVIGATION - FIXED */}
                <div
                    className="fixed z-50 bottom-8 left-1/2 -translate-x-1/2 w-[700px] max-w-[90%] h-[56px] bg-white/10 backdrop-blur-sm rounded-[12px] flex items-center justify-center px-2 gap-1"
                >
                    <button
                        className="h-[42px] px-4 rounded-[8px] bg-[#0B0844] text-white text-[11px] font-medium whitespace-nowrap hover:bg-[#15105c] transition-all"
                    >
                        Our Story
                    </button>

                    <button
                        className="px-4 text-[#0B0844] text-[11px] font-medium whitespace-nowrap hover:bg-[#f0f0f5] rounded-[6px] h-[36px] transition-all"
                    >
                        Management Team
                    </button>

                    <button
                        className="px-4 text-[#0B0844] text-[11px] font-medium whitespace-nowrap hover:bg-[#f0f0f5] rounded-[6px] h-[36px] transition-all"
                    >
                        Board of Directors
                    </button>

                    <button
                        className="px-4 text-[#0B0844] text-[11px] font-medium whitespace-nowrap hover:bg-[#f0f0f5] rounded-[6px] h-[36px] transition-all"
                    >
                        Awards
                    </button>

                    <button
                        className="px-4 text-[#0B0844] text-[11px] font-medium whitespace-nowrap hover:bg-[#f0f0f5] rounded-[6px] h-[36px] transition-all"
                    >
                        CSR
                    </button>

                    <button
                        className="px-4 text-[#0B0844] text-[11px] font-medium whitespace-nowrap hover:bg-[#f0f0f5] rounded-[6px] h-[36px] transition-all"
                    >
                        Careers
                    </button>

                    <button
                        className="px-4 text-[#0B0844] text-[11px] font-medium whitespace-nowrap hover:bg-[#f0f0f5] rounded-[6px] h-[36px] transition-all"
                    >
                        News & Blogs
                    </button>
                </div>
            </div>

            {/* FOOTER STRIP */}
            <div
                className=" h-[22px] bg-[#F0F0F5] border-t  border-[#dedee8] flex items-center  justify-between px-6  lg:px-10 text-[7px] text-[#262454] "
            >
                <p className="flex items-center gap-1">
                    <ShieldCheck size={8} />
                    Alert Microfinance Bank Limited is licensed by the Central Bank of
                    Nigeria (CBN). Deposits are insured by the NDIC.
                </p>

                <div className="hidden sm:flex items-center gap-4">
                    <span className="hover:underline cursor-pointer">
                        Privacy Policy
                    </span>

                    <span className="hover:underline cursor-pointer">
                        Terms & Conditions
                    </span>

                    <span className="hover:underline cursor-pointer">
                        Cookie Policy
                    </span>

                    <span className="hover:underline cursor-pointer">
                        AML/LOFT Disclosure
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Overview;