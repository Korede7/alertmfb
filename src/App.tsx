import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import OurProducts from "./pages/OurProducts";
import DigitalBanking from "./quicklinks/DigitalBanking";

const defaultTheme = {
  textClass: "text-[#17145D]",
  buttonClass: "border-[#17145D] text-[#17145D]",
  bgClass: "bg-white",
};

const App = () => {
  const [activeTheme, setActiveTheme] = useState(defaultTheme);
  const [isHomeActive, setIsHomeActive] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsHomeActive(window.scrollY === 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isHomeActive) {
      setActiveTheme(defaultTheme);
    }
  }, [isHomeActive]);

  const handleThemeChange = (theme: typeof defaultTheme) => {
    if (isHomeActive) {
      setActiveTheme(theme);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar theme={isHomeActive ? activeTheme : defaultTheme} />
      <Homepage onThemeChange={handleThemeChange} />
      <OurProducts />
      <DigitalBanking/>
    </div>
  );
};

export default App;
