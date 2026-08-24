import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";

interface BlogCardProps {
    tag: string;
    date: string;
    title: string;
    author: string;
    image?: string;
}

const BlogCard = ({
    tag,
    date,
    title,
    author,
    image = "/group2.jpg",
}: BlogCardProps) => {
    const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

    const postPath = ROUTES.ABOUT_US.BLOG_POST.replace(":slug", slug);

    return (
        <Link
            to={postPath}
            className="group block cursor-pointer"
        >
            {/* Image */}
            <div className="relative mb-5 flex h-[200px] w-full items-center justify-center overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 group-hover:-translate-y-1 sm:h-[220px]">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Meta */}
            <div className="mt-4.5 flex items-center justify-between gap-2">
                <span className="text-xs font-medium text-secondary">
                    {tag}
                </span>

                <span className="text-[10px] text-gray-400">
                    {date}
                </span>
            </div>

            {/* Title */}
            <h3 className="mt-3.5 max-w-[240px] text-sm font-semibold leading-[1.5] text-primary transition-colors duration-200 group-hover:text-[#3A3170] group-hover:underline">
                {title}
            </h3>

            {/* Author */}
            <p className="mt-3 text-xs text-gray-400">
                by {author}
            </p>
        </Link>
    );
};

export default BlogCard;