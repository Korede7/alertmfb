// src/layouts/MainLayout.tsx

import { Outlet } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";



export type ThemeState = {
    textClass: string;
    buttonClass: string;
    bgClass: string;
};

const defaultTheme = {
    textClass: "text-primary",
    buttonClass: "border-[#17145D] text-primary",
    bgClass: "bg-white",
};





const HomeLayout = () => {
    const [isHomeTop, setIsHomeTop] = useState(true);
    const [theme, setTheme] = useState(defaultTheme);
    const changeTheme = useCallback((newTheme: typeof defaultTheme) => {
        if (isHomeTop) {
            setTheme(newTheme);
        }
    }, [isHomeTop]);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== "/") {
            setTheme(defaultTheme);
        }
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            const atTop = window.scrollY === 0;

            setIsHomeTop(atTop);

            if (!atTop) {
                setTheme(defaultTheme);
            }
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    return (
        <>
            <Navbar theme={theme} />

            <Outlet
                context={{
                    theme,
                    setTheme: changeTheme,
                }}
            />

            <Footer />
        </>
    );
};

export default HomeLayout;