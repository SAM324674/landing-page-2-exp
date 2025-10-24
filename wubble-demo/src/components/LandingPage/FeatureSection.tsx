import Image from "next/image";
import React from "react";
// Import the updated Timeline
import { Timeline } from "@/components/ui/timeline"; 


export function FeatureSection() {
  const data = [
    {
      id:1,
      title: "Conversational Engineering",
      description:"Go beyond generation. Conversationally guide Wubble to mix, master, and perform DAW-level edits on all your tracks.",
      content: (
        <div>
         
          <div className="gap-4">
            <video
              src={'./Video1.mp4'} 
              className="rounded-lg object-cover w-[570px] h-[566px]"
              loop 
              muted 
              playsInline 
              id="timeline-video-0" 
            />
          </div>
        </div>
      ),
    },
    { id:2,
      title: "Smart Collaboration",
      description:"Seamlessly collaborate with your team in real-time, making feedback and revisions easier than ever.",
      content: (
        <div>
          
          <div className="gap-4">
            <video
              src={'./Video2.mp4'} 
              className="rounded-lg object-cover w-[570px] h-[566px]"
              loop 
              muted 
              playsInline 
              id="timeline-video-1" 
            />
          </div>
        </div>
      ),
    },
    { id:3,
      title: "AI-Powered Insights",
      description:"Leverage advanced analytics to gain insights into your music trends and enhance decision-making.",
      content: (
        <div>
          {/* <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Automatic quality control, loudness normalization, and genre-specific mastering deployed instantly.
          </p> */}
          <div className="mb-8">
            <div className="gap-4">
              {/* ID: timeline-video-2 */}
              <video
                src={'./Video1.mp4'} 
                className="rounded-lg object-cover w-[570px] h-[566px]"
                loop 
                muted 
                playsInline 
                id="timeline-video-2" 
              />
            </div>
          </div>
        </div>
      ),
    },
    { id:4,
      title: "Customizable Workflows",
      description:"Tailor your experience with customizable workflows that adapt to your unique creative process.",
     content: (
        <div>
          {/* <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Automatic quality control, loudness normalization, and genre-specific mastering deployed instantly.
          </p> */}
          <div className="mb-8">
            <div className="gap-4">
              {/* ID: timeline-video-2 */}
              <video
                src={'./Video2.mp4'} 
                className="rounded-lg object-cover w-[570px] h-[566px]"
                loop 
                muted 
                playsInline 
                id="timeline-video-3" 
              />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      {/* Increased min-h to ensure the scroll animation has enough room for 4 items */}
      <div className="top-0 left-0 w-full min-h-[120rem]"> 
        <Timeline data={data} />
      </div>
    </div>
  );
}