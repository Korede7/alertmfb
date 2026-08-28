import axios from "axios";

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;

console.log("STRAPI URL:", STRAPI_URL);

export const getBlogs = async () => {
    const response = await axios.get(
        `${STRAPI_URL}/api/blogs?populate=*`
    );

    console.log("FULL STRAPI BLOGS RESPONSE:", response.data);

    return response.data.data;
};

export const getBlogBySlug = async (slug: string) => {
    try {
        console.log("FETCHING BLOG SLUG:", slug);

        const response = await axios.get(
            `${STRAPI_URL}/api/blogs`,
            {
                params: {
                    "filters[slug][$eq]": slug,
                    populate: "*",
                },
            }
        );

        console.log(
            "FULL STRAPI SINGLE BLOG RESPONSE:",
            response.data
        );

        console.log(
            "BLOG RESULTS:",
            response.data.data
        );

        if (!response.data.data || response.data.data.length === 0) {
            return null;
        }

        return response.data.data[0];

    } catch (error) {
        console.error("GET BLOG BY SLUG ERROR:", error);
        throw error;
    }
};

