import { useState } from "react";
import { Search, ChevronDown, ArrowRight } from "lucide-react";

const roles = [
    {
        role: "Business Relationship Manager (Abia)",
        team: "Enterprise Sales",
        office: "Abia, Nigeria",
    },
    {
        role: "Business Relationship Manager (Ebonyi)",
        team: "Enterprise Sales",
        office: "Ebonyi, Nigeria",
    },
    {
        role: "Business Relationship Manager (Ebonyi)",
        team: "Enterprise Sales",
        office: "Ebonyi, Nigeria",
    },
    {
        role: "Business Relationship Manager (Ebonyi)",
        team: "Enterprise Sales",
        office: "Ebonyi, Nigeria",
    },
    {
        role: "Business Relationship Manager (Ebonyi)",
        team: "Enterprise Sales",
        office: "Ebonyi, Nigeria",
    },
    {
        role: "Business Relationship Manager (Ebonyi)",
        team: "Enterprise Sales",
        office: "Ebonyi, Nigeria",
    },
];

// Simple stacked-stripe flag swatch (green / white / green) used next to office names
const NigeriaFlag = () => (
    <span className="inline-flex h-2.5 w-3.5 shrink-0 overflow-hidden rounded-[2px]">
        <span className="h-full w-1/3 bg-[#008751]" />
        <span className="h-full w-1/3 bg-white" />
        <span className="h-full w-1/3 bg-[#008751]" />
    </span>
);

const AvailableRoles = () => {
    const [search, setSearch] = useState("");

    return (
        <div className="w-full bg-white px-5 py-10 sm:px-8 md:px-10 pt-25">
            <div className="mx-auto max-w-4xl">
                {/* Filter bar */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    {/* Search input */}
                    <div className="flex flex-1 items-center gap-2.5 rounded-md bg-gray px-4 py-3">
                        <Search className="h-4 w-4 shrink-0 text-primary" />
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search role"
                            className="w-full bg-transparent text-[13px] text-primary placeholder:text-primary focus:outline-none"
                        />
                    </div>

                    {/* Team filter */}
                    <button
                        type="button"
                        className="flex flex-1 items-center justify-between rounded-md bg-gray px-4 py-3 text-[13px] text-primary"
                    >
                        All
                        <ChevronDown className="h-3.5 w-3.5 text-primary" />
                    </button>

                    {/* Office filter */}
                    <button
                        type="button"
                        className="flex flex-1 items-center justify-between rounded-md bg-gray px-4 py-3 text-[13px] text-primary"
                    >
                        All
                        <ChevronDown className="h-3.5 w-3.5 text-primary" />
                    </button>

                    {/* Search button */}
                    <button
                        type="button"
                        className="flex items-center justify-center gap-2 rounded-full bg-primary py-2 pl-5 pr-2 text-[13px] font-medium text-white transition-colors hover:bg-primary/90"
                    >
                        Search
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                            <ArrowRight className="h-3.5 w-3.5 text-primary" />
                        </span>
                    </button>
                </div>

                {/* Section heading */}
                <div className="mt-30 flex items-center gap-2.5">
                    <h2 className="text-[15px] font-semibold text-primary">
                        Available Roles
                    </h2>
                    <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-[10px] font-semibold text-white">
                        {roles.length}
                    </span>
                </div>

                {/* Table */}
                <div className="mt-8 overflow-hidden space-y-2">
                    {/* Table header */}
                    <div className="grid grid-cols-[1fr_1fr_1fr_auto] items-center gap-4 bg-[#F5F4F9] px-6 py-3.5">
                        <span className="text-[11px] font-medium text-primary/50">
                            Role
                        </span>
                        <span className="text-[11px] font-medium text-primary/50">
                            Team
                        </span>
                        <span className="text-[11px] font-medium text-primary/50">
                            Office
                        </span>
                        <span className="w-[74px]" />
                    </div>

                    {/* Table rows */}
                    {roles.map((item, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-[1fr_1fr_1fr_auto] items-center gap-4 border-t border-[#EDEBF5] px-6 py-4 transition-colors hover:bg-[#FAFAFC]"
                        >
                            <span className="truncate text-[13px] font-medium text-primary">
                                {item.role}
                            </span>
                            <span className="truncate text-[13px] text-primary/70">
                                {item.team}
                            </span>
                            <span className="flex items-center gap-2 truncate text-[13px] text-primary/70">
                                {item.office}
                                <NigeriaFlag />
                            </span>
                            <button
                                type="button"
                                className="flex w-[74px] items-center justify-center gap-1.5 rounded-full bg-[#F5F4F9] px-3.5 py-2 text-[12px] font-medium text-primary transition-colors hover:bg-[#EDEBF5]"
                            >
                                View
                                <ArrowRight className="h-3 w-3" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AvailableRoles;