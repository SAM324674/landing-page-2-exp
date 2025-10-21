"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselItem,
  CarouselNavigation,
  useCarousel,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

interface GalleryHoverCarouselItem {
  id: string;
  title: string;
  summary: string;
  button: string;
  url: string;
  image: string;
  w: string;
}


//  Hook to track scroll state

function useCarouselScrollState() {
  const carousel = useCarousel();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carousel) return;
    const { index, itemsCount } = carousel;
    setCanScrollPrev(index > 0);
    setCanScrollNext(index < itemsCount - 3);
  }, [carousel?.index, carousel?.itemsCount]);

  return { canScrollPrev, canScrollNext };
}


// Main Component

export default function GalleryHoverCarousel({
  heading = "Featured Projects",
  items = [
    {
      id: "item-1",
      title: "Hero: Empower creators with Wubble",
      summary: "Main call-to-action to explore your learning or creation hub.",
      button: "Explore Wubble Studio",
      url: "#",
      image: "/Blog 1.avif",
      w: "18rem"
    },
    {
      id: "item-2",
      title: "Wubble Chat Studio",
      summary:
        "Interactive chat-based music generation interface.",
      button: "Open Studio",
      url: "#",
      image: "/Blog 1.avif",
      w: "10rem"
    },
    {
      id: "item-3",
      title: "Hero: Empower creators with Wubble",
      summary:
        "Main call-to-action to explore your learning or creation hub.",
      button: "Explore Wubble Studio",
      url: "#",
      image: "/Blog 1.avif",
      w: "18rem"
    },
    {
      id: "item-4",
      title: "Add Vocals & Instruments",
      summary:
        "Lets users layer vocals, instruments, or samples to their tracks for richer music creation",
      button: "Explore Wubble Studio",
      url: "#",
      image: "/Blog 1.avif",
      w: "18rem"
    },
    {
      id: "item-5",
      title: "Hero: Empower creators with Wubble",
      summary:
        "Main call-to-action to explore your learning or creation hub.",
      button: "Explore Wubble Studio",
      url: "#",
      image: "/Blog 1.avif",
      w: "18rem"
    },
    {
      id: "item-6",
      title: "Hero: Empower creators with Wubble",
      summary: "Main call-to-action to explore your learning or creation hub.",
      button: "Explore Wubble Studio",
      url: "#",
      image: "/Blog 1.avif",
      w: "18rem"
    },
  ],
}: {
  heading?: string;
  items?: GalleryHoverCarouselItem[];
}) {
  return (
    <section className="  bg-black w-[90%] ">
      <div className="container mx-auto px-6">
        {/* Heading + Controls */}
        {/* <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
          <div className="max-w-2xl">
            <h3 className="text-lg sm:text-xl lg:text-3xl font-medium text-white leading-relaxed">
              {heading}{" "}
              <span className="text-gray-500 text-sm sm:text-base lg:text-3xl">
                Explore our collection of innovative solutions and cutting-edge
                technologies designed to transform your business.
              </span>
            </h3>
          </div>
        </div> */}

        {/* Carousel */}
        <div className="w-full max-w-full flex justify-center">
          <Carousel className="relative w-full max-w-full">
            <CarouselInner items={items} />
          </Carousel>
        </div>
      </div>
    </section>
  );
}


function CarouselInner({ items }: { items: GalleryHoverCarouselItem[] }) {
  const carousel = useCarousel();
  const { canScrollPrev, canScrollNext } = useCarouselScrollState();

  return (
    <>
      {/* Navigation Buttons */}
      <div className="flex justify-end gap-2 mb-6">
        <button
          onClick={() => carousel?.setIndex(carousel.index - 1)}
          disabled={!canScrollPrev}
          className={`h-10 w-10 rounded-full flex justify-center items-center transition-colors ${canScrollPrev
            ? "bg-gray-300 hover:bg-gray-200 hover:text-white"
            : "bg-gray-200 opacity-50 cursor-not-allowed"
            }`}
        >
          <ChevronLeft className="h-4 w-4" color="black" />
        </button>
        <button
          onClick={() => carousel?.setIndex(carousel.index + 1)}
          disabled={!canScrollNext}
          className={`h-10 w-10 rounded-full flex justify-center items-center transition-colors ${canScrollNext
            ? "bg-gray-300 hover:bg-gray-200 hover:text-white"
            : "bg-gray-200 opacity-50 cursor-not-allowed"
            }`}
        >
          <ChevronRight className="h-4 w-4" color="black" />
        </button>
      </div>

      {/* Content */}
      <CarouselContent className="hide-scrollbar w-full max-w-full md:ml-4 md:-mr-4">
        {items.map((item) => (
          <CarouselItem key={item.id} className="ml-6 md:max-w-[350px]">
            <Link
              href={item.url}
              className="group block relative w-full h-[300px] md:h-[350px]"
            >
              <Card className="overflow-hidden rounded-xl h-full w-full">
                {/* Image */}
                <div className="relative h-full w-full transition-all duration-500 group-hover:h-1/2">
                  <Image
                    width={400}
                    height={300}
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover object-center"
                  />
                  {/* Fade overlay */}
                  <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Text */}
                <div className="absolute bottom-0 left-0 w-full px-4 py-3 transition-all duration-500 group-hover:h-1/2 bg-background/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex flex-col justify-center gap-3">
                  <h3 className="text-lg font-medium md:text-xl">{item.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base line-clamp-2">{item.summary}</p>
                  <div className="mt-3">
                    <Button
                      variant="outline"
                      className="border border-gray-200 transition-all duration-300 hover:scale-105 text-primary hover:text-primary/80 px-5 py-2 rounded-xl"
                    >
                      {item.button}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* <CarouselNavigation alwaysShow />
      <CarouselIndicator /> */}
    </>
  );
}
