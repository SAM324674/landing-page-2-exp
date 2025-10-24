"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import  pic from '../../public/Blog 1.avif'
import { Component } from "./blog-posts";

interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  imageUrl: string;
}

interface Gallery6Props {
  heading?: string;
  demoUrl?: string;
  items?: GalleryItem[];
}

const items = [
  {
    id: 1,
    title: "Building Modern Web Applications with React",
    category: "Web Development",
    imageUrl: "/Blog1.avif",
    views: 2180,
    readTime: 8,
    rating: 5,
    href: "#",
  },
  {
    id: 2,
    title: "Understanding Computer Vision in AI",
    category: "Artificial Intelligence",
    imageUrl: "/Blog.avif",
    views: 1540,
    readTime: 6,
    rating: 4.7,
    href: "#",
  },
  {
    id: 3,
    title: "Automating Workflows with Machine Learning",
    category: "Data Science",
    imageUrl: "/Blog1.avif",
    views: 1875,
    readTime: 7,
    rating: 4.8,
    href: "#",
  },
  // {
  //   id: 4,
  //   title: "Predictive Analytics: Turning Data into Foresight",
  //   category: "Data Analytics",
  //   imageUrl: "/Blog.avif",
  //   views: 2410,
  //   readTime: 9,
  //   rating: 4.9,
  //   href: "#",
  // },
  // {
  //   id: 5,
  //   title: "Inside Neural Network Architectures",
  //   category: "Deep Learning",
  //   imageUrl: "/Blog1.avif",
  //   views: 1980,
  //   readTime: 10,
  //   rating: 5,
  //   href: "#",
  // },
];







const LatestUpdates = () => {
  return (
    <div>
      <Component
         title="Latest Updates"
         description=""
          backgroundLabel="BLOG"
          backgroundPosition="left"
          posts={items}
      />
    </div>
  )
}

export default LatestUpdates