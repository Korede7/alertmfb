import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";

interface BlogImage {
    id: number;
    url: string;
    alternativeText?: string;
    width?: number;
    height?: number;
}

interface Blog {
    id: number;
    Title: string;
    slug?: string;
    date: string;
    readTime?: string;
    autor: string;
    category: string;
    content? : String
    Image?: BlogImage[];
}

interface BlogCardProps {
    blog: Blog;
}

const BlogCard = ({ blog }: BlogCardProps) => {
    const {
        Title,
        slug,
        date,
        autor,
        Image,
        category,
    } = blog;

    const postSlug =
        slug ||
        Title.toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");

    const postPath = ROUTES.ABOUT_US.BLOG_POST.replace(
        ":slug",
        postSlug
    );

    const strapiUrl = import.meta.env.VITE_STRAPI_URL;

    const image = Image?.[0]?.url
        ? `${strapiUrl}${Image[0].url}`
        : "/group2.jpg";

    return (
        <Link
            to={postPath}
            className="group block cursor-pointer p-3 py-6"
        >
            {/* Image */}
            <div className="relative mb-5 flex h-[320px] w-full items-center justify-center overflow-hidden rounded-2xl transition-transform duration-500 group-hover:-translate-y-1 sm:h-[250px]">
                <img
                    src={image}
                    alt={
                        Image?.[0]?.alternativeText ||
                        Title
                    }
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Meta */}
            <div className="mt-4.5 flex items-center justify-between gap-2">
                <span className="text-xs font-medium text-secondary">
                    {category}
                </span>

                <span className="text-[10px] text-gray-400">
                    {new Date(date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                    })}
                </span>
            </div>

            {/* Title */}
            <h3 className="mt-3.5 max-w-[240px] text-sm font-semibold leading-[1.5] text-primary transition-colors duration-200 group-hover:text-[#3A3170] group-hover:underline">
                {Title}
            </h3>

            {/* Author */}
            <p className="mt-3 text-xs text-gray-400">
                by {autor}
            </p>
        </Link>
    );
};

export default BlogCard;