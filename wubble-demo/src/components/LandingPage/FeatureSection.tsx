import Image from "next/image";
import React from "react";
// Import the updated Timeline
import { Timeline } from "@/components/ui/timeline"; 


export function FeatureSection() {
  const data = [
    {
      id:1,
      title: "Conversational Engineering",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Describe your desired sound and our AI agent will instantly generate, mix, and master it to perfection.
          </p>
          <div className="gap-4">
            <video
              src={'./Video1.mp4'} 
              className="rounded-lg object-cover h-[30rem] w-full"
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
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Invite your team, directors, and clients to review and guide the AI agent in real-time.
          </p>
          <div className="gap-4">
            <video
              src={'./Video2.mp4'} 
              className="rounded-lg object-cover h-[30rem] w-full"
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
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Automatic quality control, loudness normalization, and genre-specific mastering deployed instantly.
          </p>
          <div className="mb-8">
            <div className="gap-4">
              {/* ID: timeline-video-2 */}
              <video
                src={'./Video1.mp4'} 
                className="rounded-lg object-cover h-[30rem] w-full"
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
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Integrate Wubble directly into your DAW, Unity, or video editor for seamless production.
          </p>
          <div className="mb-8">
            <div className="gap-4">
              {/* ID: timeline-video-3 */}
              <video
                src={'./Video2.mp4'} 
                className="rounded-lg object-cover h-[30rem] w-full"
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