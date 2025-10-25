"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useState } from "react";
import pic from '../../public/Netflix.svg'
import { Button } from "./ui/button";

export default function Testimonial1() {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  interface StatItem {
    percentage: string;
    logo: string;
    label: string;
    isIncrease: boolean;
    className: string;
  }
  const stats: StatItem[] = [
    {
      percentage: "80%",
      label: "manual payment tasks",
      isIncrease: false,
      logo: "/Netflix.svg",
      className: 'w-[150px] h-[33.97px]'
    },
    {
      percentage: "30%",
      label: "international fees",
      isIncrease: false,
      logo: "/Disnep.svg",
      className: 'w-[150px] h-[81.55px]'
    },
    {
      percentage: "25%",
      label: "payment reconciliation",
      isIncrease: false,
      logo: "/EpicGames.svg",
      className: 'w-[57px] h-[66.15px]'
    },
    {
      percentage: "$100K",
      label: "saved per year",
      isIncrease: true,
      logo: "/amazonLogo.svg",
      className: 'w-[150px] h-[42.8px]'
    },

    {
      percentage: "$100K",
      label: "saved per year",
      isIncrease: true,
      logo: "/Google.svg",
      className: 'w-[150px] h-[49px]'
    },
    {
      percentage: "$100K",
      label: "saved per year",
      isIncrease: true,
      logo: "/SpotifyLogo.svg",
      className: 'w-[150px] h-[47.4px]'
    },
  ];
  function cn(...classes: Array<string | false | null | undefined>): string {
    return classes.filter(Boolean).join(' ');
  }
  return (
    <div className="bg-background w-full px-[5rem] place-content-center  py-10 relative space-y-10">
      <div className="w-full flex justify-center mb-[2rem]">
        <h1 className="text-[24px] font-[600] tracking-[-3%] leading-[100%]">Trusted by the world's most creative studios</h1>
      </div>
      
      <div className="w-full mx-auto space-y-6">
        {/* First Row - 6 logos */}
        <div className="grid grid-cols-3 gap-4 bg-neutral-100 min-w-full border  mx-auto px-8 py-8  rounded-md  min-h-[120px]">
          {stats.slice(0, 3).map((stat, index) => (
            <div
              key={stat?.label + index}
              className="flex gap-4 pl-6 relative justify-center items-center "
            >
              {index !== 0 && (
                <div className="w-0.5 h-12 border border-dashed border-neutral-200 absolute left-0" />
              )}
              <div className="w-full h-full group flex items-center justify-center min-h-[100px]">
                <img
                  src={`${stat?.logo}`}
                  alt="company logo"
                  className={`${stat.className} object-contain grayscale mx-auto translate-y-0 group-hover:-translate-y-12 opacity-100 group-hover:opacity-0 transition-all duration-300 ease-out max-w-[120px] max-h-[60px]`}
                />
                <div className="absolute left-0 top-8 opacity-0 flex flex-col items-center justify-center w-full group-hover:-top-3.5 group-hover:opacity-100 transition-all duration-300 ease-out">
                  <div className="flex items-center justify-center gap-2 relative">
                    {stat.isIncrease ? (
                      <ArrowUp className="md:w-6 md:h-6 w-4 h-4 text-green-500" />
                    ) : (
                      <ArrowDown className="md:w-6 md:h-6 w-4 h-4 text-gray-800" />
                    )}
                    <span className="md:text-3xl text-xl font-semibold text-gray-800">
                      {stat.percentage}
                    </span>
                  </div>
                  <p className="text-gray-800 text-xs text-center capitalize">
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 6 logos (duplicated) */}
        <div className="grid grid-cols-3 gap-4 bg-neutral-100 w-full mx-auto px-8 py-8 border rounded-md border-neutral-200 min-h-[120px]">
          {stats.slice(3, 6).map((stat, index) => (
            <div
              key={stat?.label + index + 6}
              className="flex gap-4 pl-6 relative justify-center items-center"
            >
              {index !== 0 && (
                <div className="w-0.5 h-12 border border-dashed border-neutral-200 absolute left-0" />
              )}
              <div className="w-full h-full group flex items-center justify-center min-h-[100px]">
                <img
                  src={`${stat?.logo}`}
                  alt="company logo"
                  className={`${stat.className} object-contain grayscale mx-auto translate-y-0 group-hover:-translate-y-12 opacity-100 group-hover:opacity-0 transition-all duration-300 ease-out max-w-[120px] max-h-[60px]`}
                />
                <div className="absolute left-0 top-8 opacity-0 flex flex-col items-center justify-center w-full group-hover:-top-3.5 group-hover:opacity-100 transition-all duration-300 ease-out">
                  <div className="flex items-center justify-center gap-2 relative">
                    {stat.isIncrease ? (
                      <ArrowUp className="md:w-6 md:h-6 w-4 h-4 text-green-500" />
                    ) : (
                      <ArrowDown className="md:w-6 md:h-6 w-4 h-4 text-gray-800" />
                    )}
                    <span className="md:text-3xl text-xl font-semibold text-gray-800">
                      {stat.percentage}
                    </span>
                  </div>
                  <p className="text-gray-800 text-xs text-center capitalize">
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons - one purple with white text, one white with purple text */}
      <div className="flex justify-center gap-[30px] h-auto w-full">
        <Button
          className="inline-flex items-center justify-center w-[160px] h-[56px] px-[32px] py-[16px] rounded-[10px] border-none bg-gradient-to-r from-[#a855f7] to-[#c084fc] hover:from-[#9333ea] hover:to-[#a855f7] text-white font-[600] text-[16px] flex-none leading-[150%] tracking-[0%] transition-all duration-300"
        >
          Talk to Sales
        </Button>

        <Button
          className="inline-flex items-center justify-center rounded-[10px] bg-white hover:bg-gray-50 text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#c084fc] font-[600] text-[16px] px-[32px] py-[16px] w-[162px] h-[56px] flex-none leading-[150%] tracking-[0%] border-2 border-[#a855f7] transition-all duration-300"
        >
          Read Stories
        </Button>
      </div>
    </div>
  );
}
