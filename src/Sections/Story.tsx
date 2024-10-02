import React, { useRef, useEffect, useState } from "react";
import background1 from "../assets/Pictures/Frame 1171275533 (1).png";
import background2 from "../assets/Pictures/Family.png";
import background3 from "../assets/Pictures/friends (1).png";
import CenterCon from "./Story/CenterCon";
import Section from "./Story/Section";

const Story = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAtEdge, setIsAtEdge] = useState({ start: true, end: false });

  const scrollToNext = () => {
    if (scrollRef.current) {
      const maxScroll =
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      const newScrollPosition = Math.min(
        scrollRef.current.scrollLeft + window.innerWidth,
        maxScroll
      );
      scrollRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToPrevious = () => {
    if (scrollRef.current) {
      const newScrollPosition = Math.max(
        scrollRef.current.scrollLeft - window.innerWidth,
        0
      );
      scrollRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setIsAtEdge({
          start: scrollLeft === 0,
          end: Math.abs(scrollWidth - clientWidth - scrollLeft) < 1,
        });
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const isScrollingRight = e.deltaY > 0;

        if (
          (isAtEdge.start && !isScrollingRight) ||
          (isAtEdge.end && isScrollingRight)
        ) {
          return;
        }

        e.preventDefault();
        const scrollAmount = isScrollingRight
          ? window.innerWidth
          : -window.innerWidth;
        const maxScroll = scrollWidth - clientWidth;
        const newScrollPosition = Math.max(
          0,
          Math.min(scrollLeft + scrollAmount, maxScroll)
        );
        scrollRef.current.scrollTo({
          left: newScrollPosition,
          behavior: "smooth",
        });
      }
    };

    const currentScrollRef = scrollRef.current;
    if (currentScrollRef) {
      currentScrollRef.addEventListener("scroll", handleScroll, {
        passive: true,
      });
      currentScrollRef.addEventListener("wheel", handleWheel, {
        passive: false,
      });
    }

    return () => {
      if (currentScrollRef) {
        currentScrollRef.removeEventListener("scroll", handleScroll);
        currentScrollRef.removeEventListener("wheel", handleWheel);
      }
    };
  }, [isAtEdge]);

  return (
    <div
      ref={scrollRef}
      className="h-screen w-screen flex flex-row overflow-x-scroll snap-x snap-mandatory"
    >
      <Section
        background={background1}
        topContent={<></>}
        middleContent={
          <CenterCon
            arrowLeft={scrollToPrevious}
            arrowRight={scrollToNext}
            content={{
              text: "Fluid has Internet access, so you can get up-to-date information from it.",
              title: "Time for Work",
            }}
          />
        }
        bottomContent={<></>}
      />
      <Section
        background={background2}
        topContent={<></>}
        middleContent={
          <CenterCon
            arrowLeft={scrollToPrevious}
            arrowRight={scrollToNext}
            content={{
              text: "You can use Fluid as an assistant to save time - and save your sanity.",
              title: "Time for Family",
            }}
          />
        }
        bottomContent={<></>}
      />
      <Section
        background={background3}
        topContent={<></>}
        middleContent={
          <CenterCon
            arrowLeft={scrollToPrevious}
            arrowRight={scrollToNext}
            content={{
              text: "Fluid easily integrates with your friends' calendars",
              title: "Time for Friends",
            }}
          />
        }
        bottomContent={<></>}
      />
    </div>
  );
};

export default Story;
