import React from 'react'
import GalleryHoverCarousel from './gallery-hover-carousel';

const DiscoverMore = () => {
  return (
     <GalleryHoverCarousel heading="Discover More Products" items={discoverMoreProducts}/>
  )
}

export default DiscoverMore

export const discoverMoreProducts = [
  {
    id: 1,
    title: "Wubble Studio",
    description:
      "Your main creation hub — compose, refine, and download your soundtrack in one seamless chat-based workspace.",
    buttonText: "Open Studio",
     url: "#",
  },
  {
    id: 2,
    title: "Wubble Templates",
    description:
      "Kickstart your project with ready-to-use musical templates — from cinematic scores to upbeat ads, podcasts, and reels.",
    buttonText: "Browse Templates",
     url: "#",
  },
  {
    id: 3,
    title: "Wubble Tracks Library",
    description:
      "Explore a galaxy of royalty-free tracks. Filter by mood, genre, or use case — and customize any track instantly.",
    buttonText: "Explore Library",
     url: "#",
  },
  {
    id: 4,
    title: "Wubble Mixer",
    description:
      "Fine-tune every beat. Adjust tempo, layer instruments, and perfect transitions — no software installs needed.",
    buttonText: "Launch Mixer",
     url: "#",
  },
  {
    id: 5,
    title: "Wubble VoiceSync",
    description:
      "Synchronize vocals or spoken content with your background music. Perfect for creators, brands, and educators.",
    buttonText: "Try VoiceSync",
     url: "#",
  },
  {
    id: 6,
    title: "Wubble Campaigns",
    description:
      "Tailor music for marketing, ads, and social content. Automate soundtrack generation aligned with your campaign tone.",
    buttonText: "Plan a Campaign",
     url: "#",
  },
  {
    id: 7,
    title: "Wubble Teams",
    description:
      "Collaborate in real-time. Invite teammates, manage projects, and co-compose tracks across borders.",
    buttonText: "Start Team Trial",
     url: "#",
  },
  {
    id: 8,
    title: "Wubble Learn",
    description:
      "Master the art of music storytelling. Step-by-step lessons, templates, and case studies from industry creators.",
    buttonText: "Start Learning",
     url: "#",
  },
  {
    id: 9,
    title: "Wubble Analytics",
    description:
      "Track how your sound performs across videos, campaigns, and platforms — understand what resonates.",
    buttonText: "View Insights",
     url: "#",
  },
  {
    id: 10,
    title: "Wubble Integrations",
    description:
      "Connect your favorite tools — YouTube, Notion, Canva, or Adobe. Import visuals, export sound.",
    buttonText: "Explore Integrations",
     url: "#",
  },
  {
    id: 11,
    title: "Wubble Licensing Hub",
    description:
      "Handle your usage rights effortlessly. Access all your royalty-free licenses in one secure dashboard.",
    buttonText: "Open Hub",
     url: "#",
  },
  {
    id: 12,
    title: "Wubble Mobile",
    description:
      "Create music on the go. Voice ideas, describe moods, and generate sound from your phone.",
    buttonText: "Get the App",
     url: "#",
  },
];


