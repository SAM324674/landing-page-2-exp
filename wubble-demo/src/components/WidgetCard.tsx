"use client"
import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils"; // Your utility for merging class names
import { CarouselItem } from "./ui/carousel";

// Define the type for each card item
export interface ResourceCardItem {
  iconSrc?: string;
  title: string;
  line: string;
  href: string;
}

// Define the props for the main grid component
interface ResourceCardsProps {
  item: ResourceCardItem;
  index:number;
  className?: string;
}

// Animation variants for the container to orchestrate children animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Animation variants for each card item
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const ResourceCards = ({ item, index, className }: ResourceCardsProps) => {
  return (

    <>
      {/* <div className={`${className}`}> */}
     
        
          <motion.a
            key={index}
            href={item.href}
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className={`group block  ${className}`}
            target="_blank"
            rel="noopener noreferrer"

          >
            <div className={cn("flex flex-col justify-center items-center rounded-lg border p-3 border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-md w-full h-full")}>
              <div className="flex w-full" >
                <div className="flex items-center justify-around  w-full gap-4">
                  <img src={item.iconSrc} alt={`${item.title} icon`} className="h-10 w-10" />
                  <div>
                    <h3 className="text-sm font-semibold text-card-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.line}
                    </p>
                  </div>
                </div>
                {/* <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" /> */}
              </div>
            </div>
          </motion.a>


     
      {/* </div> */}

    </>
  );
};