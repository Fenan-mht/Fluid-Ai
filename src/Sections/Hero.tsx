import { useEffect, useState } from "react";
import { Mouse } from "lucide-react";
import logo from "../assets/Logo/logo (2).png";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);
  const [logoStyle, setLogoStyle] = useState({
    width: "240px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        // Small threshold for immediate transition
        setScrolled(true);
        setLogoStyle({
          width: "72px",
          top: "5%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        });
      } else {
        setScrolled(false);
        setLogoStyle({
          width: "240px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* First section */}
      <div
        className={`h-screen bg-black flex flex-col items-center justify-center ${
          scrolled ? "hidden" : ""
        }`}
      >
        <motion.img
          src={logo}
          alt="Logo"
          className="transition-all duration-300 h-auto"
          style={logoStyle}
        />
        <div className="absolute bottom-10 text-white">
          <div className="flex flex-col gap-3 items-center">
            <Mouse className="animate-pulse" size={30} />
            <p>Scroll down</p>
          </div>
        </div>
      </div>

      {/* Second section */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-black flex flex-col items-center justify-center text-white"
          >
            <motion.img
              src={logo}
              alt="Logo"
              className="absolute transition-all duration-300 h-auto"
              style={logoStyle}
            />
            <h2 className="text-3xl font-bold mb-4 mt-16">
              Welcome to Be-Long
            </h2>
            <p>This is the part with the gradient and more content.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
