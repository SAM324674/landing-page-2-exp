"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  id:number
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  // 💡 ADDED: State to track the currently active item for video playback
  const [activeItem, setActiveItem] = useState(0); 

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      // Ensure height is updated when data changes (e.g., component mounts)
      setHeight(rect.height);
    }
  }, [ref, data.length]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Adjust offset to capture the items clearly in the viewport
    offset: ["start 10%", "end 50%"], 
  });

  // --- Framer Motion Logic for Vertical Line ---
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  // ---------------------------------------------

  // 💡 ADDED: Hook to monitor scroll progress and update the active item
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (data.length === 0) return;

    // Calculate the progress range for each item
    const progressPerItem = 1 / data.length;
    
    // Determine which item's scroll range the user is currently in
    let newActiveItem = Math.floor(latest / progressPerItem);
    
    // Clamp the active item to the last index when scrolling to the end
    if (latest >= 1) {
      newActiveItem = data.length - 1;
    }

    // Update the state only if the active item index has changed
    if (newActiveItem !== activeItem && newActiveItem < data.length) {
      setActiveItem(newActiveItem);
    }
  });

  // 💡 ADDED: Effect to control video playback based on active item
  useEffect(() => {
    // 1. Stop and reset all videos
    for (let i = 0; i < data.length; i++) {
      const videoElement = document.getElementById(`timeline-video-${i}`) as HTMLVideoElement | null;
      if (videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0; // Reset video to start
      }
    }

    // 2. Play the video for the active item
    const activeVideoElement = document.getElementById(`timeline-video-${activeItem}`) as HTMLVideoElement | null;
    if (activeVideoElement) {
      // Browsers require video to be muted and playsInline for programmatic autoplay
      activeVideoElement.play().catch(error => {
        console.error("Video playback failed (Ensure videos are muted and playsInline):", error);
      });
    }

  }, [activeItem, data.length]);
  // ---------------------------------------------

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Changelog from my journey
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
          a timeline of my journey.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={item.id}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div 
                  // 💡 Added conditional styling to highlight the active circle
                  className={`h-4 w-4 rounded-full p-2 transition-colors duration-500 ${
                    index === activeItem 
                      ? "bg-purple-500 border border-purple-500" 
                      : "bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700"
                  }`} 
                />
              </div>
              <h3 
                // 💡 Added conditional styling to highlight the active title
                className={`hidden md:block text-xl md:pl-20 md:text-5xl font-bold transition-colors duration-500 ${
                  index === activeItem
                    ? "text-black dark:text-white"
                    : "text-neutral-500 dark:text-neutral-500"
                }`}
              >
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 
                // 💡 Added conditional styling to highlight the active mobile title
                className={`md:hidden block text-2xl mb-4 text-left font-bold transition-colors duration-500 ${
                  index === activeItem
                    ? "text-black dark:text-white"
                    : "text-neutral-500 dark:text-neutral-500"
                }`}
              >
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};