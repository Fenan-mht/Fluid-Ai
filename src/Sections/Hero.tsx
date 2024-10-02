import React, { useEffect, useState, useRef } from "react";
import { Mouse } from "lucide-react";
import logo from "../assets/Logo/logo (2).png";
import { motion } from "framer-motion";
import background from "../assets/Pictures/Group 1171275346.png";
import image1 from "../assets/Pictures/Transition/To Do.png";
import image2 from "../assets/Pictures/Transition/Event.png";
import image3 from "../assets/Pictures/Transition/Tab1.png";
import image4 from "../assets/Pictures/Transition/Tab (1).png";
import image5 from "../assets/Pictures/Transition/Reservation.png";

const Hero: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hideFirstSection, setHideFirstSection] = useState(false);
  const [showImages, setShowImages] = useState(false);
  const firstSectionRef = useRef<HTMLDivElement>(null);
  const secondSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (firstSectionRef.current && secondSectionRef.current) {
        const firstRect = firstSectionRef.current.getBoundingClientRect();

        if (event.deltaY > 0 && firstRect.bottom > 0) {
          event.preventDefault();
          secondSectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (firstSectionRef.current && secondSectionRef.current) {
        const firstRect = firstSectionRef.current.getBoundingClientRect();
        const secondRect = secondSectionRef.current.getBoundingClientRect();

        const progress =
          1 - Math.max(0, Math.min(1, firstRect.bottom / window.innerHeight));
        setScrollProgress(progress);

        const shouldHideFirst = secondRect.top <= 0;
        setHideFirstSection(shouldHideFirst);

        const shouldShowImages = secondRect.top <= window.innerHeight * 0.5;
        setShowImages(shouldShowImages);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoScale = 1 - scrollProgress * 0.7;
  const logoY = scrollProgress * -45;
  const firstSectionOpacity = 1 - scrollProgress;

  return (
    <div className="relative">
      <div
        ref={firstSectionRef}
        className={`h-screen bg-black flex flex-col items-center justify-center sticky top-0 transition-opacity duration-300 ${
          hideFirstSection ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        style={{ opacity: hideFirstSection ? 0 : firstSectionOpacity }}
      >
        <motion.img
          src={logo}
          alt="Logo"
          className="transition-all duration-300 h-auto"
          style={{
            width: "",
            scale: logoScale,
            y: `${logoY}vh`,
          }}
        />
        <div className="absolute bottom-10 text-white">
          <div className="flex flex-col gap-3 items-center">
            <Mouse className="animate-pulse" size={30} />
            <p>Scroll down</p>
          </div>
        </div>
      </div>

      <div
        ref={secondSectionRef}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.0)" }}
        className="h-[120vh] bg-black flex flex-col items-center justify-center text-white relative"
      >
        <div className="h-[150vh] w-screen flex-shrink-0 snap-start">
          <div
            className="relative w-full h-full flex flex-col justify-between overflow-hidden"
            style={{
              minWidth: "100%",
            }}
          >
            <img
              src={background}
              alt="Background"
              className="absolute top-0 left-0 z-10 w-full h-full object-cover"
            />

            <motion.img
              src={logo}
              alt="Logo"
              className="absolute transition-all duration-300 h-auto z-20"
              style={{
                width: "72px",
                top: "8%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                opacity: scrollProgress,
              }}
            />

            <motion.img
              src={image1}
              alt="Image 1"
              className="absolute right-[15rem]"
              initial={{ x: "100%", opacity: 0 }}
              animate={{
                x: showImages ? "0%" : "100%",
                opacity: showImages ? 1 : 0,
              }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
              style={{
                top: "20%",
                zIndex: 50,
              }}
            />
            <motion.img
              src={image2}
              alt="Image 2"
              className="absolute right-20 h-auto w-[13%]"
              initial={{ x: "100%", opacity: 0 }}
              animate={{
                x: showImages ? "0%" : "100%",
                opacity: showImages ? 1 : 0,
              }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              style={{
                top: "30%",
                zIndex: 50,
              }}
            />
            <motion.img
              src={image3}
              alt="Image 3"
              className="absolute right-56 h-auto w-[9%]"
              initial={{ x: "100%", opacity: 0 }}
              animate={{
                x: showImages ? "0%" : "100%",
                opacity: showImages ? 1 : 0,
              }}
              transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
              style={{
                bottom: "52%",
                zIndex: 50,
              }}
            />
            <motion.img
              src={image4}
              alt="Image 4"
              className="absolute right-72 h-auto w-[7%]"
              initial={{ x: "100%", opacity: 0 }}
              animate={{
                x: showImages ? "0%" : "100%",
                opacity: showImages ? 1 : 0,
              }}
              transition={{ duration: 1.6, ease: "easeOut", delay: 0.4 }}
              style={{
                bottom: "45%",
                zIndex: 50,
              }}
            />
            <motion.img
              src={image5}
              alt="Image 5"
              className="absolute right-[30rem] w-[11%] h-auto"
              initial={{ x: "100%", opacity: 0 }}
              animate={{
                x: showImages ? "0%" : "100%",
                opacity: showImages ? 1 : 0,
              }}
              transition={{ duration: 1.8, ease: "easeOut", delay: 0.5 }}
              style={{
                top: "55%",
                zIndex: 50,
              }}
            />

            <motion.img
              src={image1}
              alt="Image 1 Left"
              className="absolute left-[15rem]"
              initial={{ x: "-100%", opacity: 0 }}
              animate={{
                x: showImages ? "0%" : "-100%",
                opacity: showImages ? 1 : 0,
              }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
              style={{
                top: "20%",
                zIndex: 50,
              }}
            />
            <motion.img
              src={image2}
              alt="Image 2 Left"
              className="absolute left-20 h-auto w-[13%]"
              initial={{ x: "-100%", opacity: 0 }}
              animate={{
                x: showImages ? "0%" : "-100%",
                opacity: showImages ? 1 : 0,
              }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              style={{
                top: "30%",
                zIndex: 50,
              }}
            />
            <motion.img
              src={image3}
              alt="Image 3 Left"
              className="absolute left-56 h-auto w-[9%]"
              initial={{ x: "-100%", opacity: 0 }}
              animate={{
                x: showImages ? "0%" : "-100%",
                opacity: showImages ? 1 : 0,
              }}
              transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
              style={{
                bottom: "52%",
                zIndex: 50,
              }}
            />
            <motion.img
              src={image4}
              alt="Image 4 Left"
              className="absolute left-72 h-auto w-[7%]"
              initial={{ x: "-100%", opacity: 0 }}
              animate={{
                x: showImages ? "0%" : "-100%",
                opacity: showImages ? 1 : 0,
              }}
              transition={{ duration: 1.6, ease: "easeOut", delay: 0.4 }}
              style={{
                bottom: "45%",
                zIndex: 50,
              }}
            />
            <motion.img
              src={image5}
              alt="Image 5 Left"
              className="absolute left-[30rem] w-[11%] h-auto"
              initial={{ x: "-100%", opacity: 0 }}
              animate={{
                x: showImages ? "0%" : "-100%",
                opacity: showImages ? 1 : 0,
              }}
              transition={{ duration: 1.8, ease: "easeOut", delay: 0.5 }}
              style={{
                top: "55%",
                zIndex: 50,
              }}
            />

            <div className="relative z-30 items-center justify-center flex flex-col gap-10 h-full">
              <h2 className="text-3xl font-bold mb-4">
                <img className="h-auto w-36" src={logo} alt="" />
              </h2>
              <div className="flex flex-col gap-5 w-full">
                <p className="text-6xl text-center">
                  Unlock Seamless <br /> Efficiency
                </p>
              </div>
              <button className="bg-white text-black w-[10%] py-3 rounded-full shadow-2xl shadow-white">
                Join Waitlist
              </button>
              <div className="h-[40vh]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
