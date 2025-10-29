// CarouselGridSlide.jsx (New Utility File)
"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ResourceCardItem, ResourceCards } from "./WidgetCard";

// Define the container variants once (reused from your code)
const containerVariants = { /* ... your variants ... */ }; 

interface CarouselGridSlideProps {
  items: ResourceCardItem[]; // Accepts the chunk array
  className?: string;
}

export const CarouselGridSlide = ({ items, className }: CarouselGridSlideProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      // KEY: This defines the two-row layout for this ONE carousel slide
      className={cn(
        "grid grid-rows-2 grid-flow-col gap-4",
        className 
      )}
    >
      {/* Map over the list and render the singular ResourceCards for each item */}
      {items.map((item, index) => (
        // ResourceCards remains singular, using the fixed size
        <ResourceCards 
          key={index}
          item={item} 
          index={index}
          className='h-[5rem] w-[16rem]' 
        />
      ))}
    </motion.div>
  );
};