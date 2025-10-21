import React from 'react'
import GalleryHoverCarousel from './gallery-hover-carousel';
import img from '../../public/Waveform.jpg'
// interface GalleryHoverCarouselItem {
//   id: number | string;
//   title: string;
//   summary?: string;

//   buttonText?: string;
//   url: string;
//   image: string;
// }
const DiscoverMore = () => {
  return (
    <GalleryHoverCarousel heading="Discover More Products" items={discoverMoreProducts} />
  )
}

export default DiscoverMore

export const discoverMoreProducts = [
  {
    id: 1,
    title: "Wubble Studio",
    summary:
      "Your main creation hub — compose, refine, and download your soundtrack in one seamless chat-based workspace.",
    buttonText: "Open Studio",
    url: "#",
    image: '/Waveform.jpg',
      Caption: "Reel generator"
  },
  {
    id: 2,
    title: "Wubble Templates",
    summary:
      "Kickstart your project with ready-to-use musical templates — from cinematic scores to upbeat ads, podcasts, and reels.",
    buttonText: "Browse Templates",
    url: "#",
    image: '/Waveform.jpg',
    Caption: "Auto - captioning "
  },
  {
    id: 3,
    title: "Wubble Tracks Library",
    summary:
      "Explore a galaxy of royalty-free tracks. Filter by mood, genre, or use case — and customize any track instantly.",
    buttonText: "Explore Library",
    url: "#",
    image: '/Waveform.jpg',
     Caption: "A/B Audio tester"
  },
  {
    id: 4,
    title: "Wubble Mixer",
    summary:
      "Fine-tune every beat. Adjust tempo, layer instruments, and perfect transitions — no software installs needed.",
    buttonText: "Launch Mixer",
    url: "#",
    image: '/Waveform.jpg',
    Caption: "AI Audio cleaner"
  },
  {
    id: 5,
    title: "Wubble VoiceSync",
    summary:
      "Synchronize vocals or spoken content with your background music. Perfect for creators, brands, and educators.",
    buttonText: "Try VoiceSync",
    url: "#",
    image: '/Waveform.jpg',
     Caption: "A/B Audio tester"
  },
  {
    id: 6,
    title: "Wubble Campaigns",
    summary:
      "Tailor music for marketing, ads, and social content. Automate soundtrack generation aligned with your campaign tone.",
    buttonText: "Plan a Campaign",
    url: "#",
    image: '/Waveform.jpg',
    Caption: "A/B Audio tester"

  },
  {
    id: 7,
    title: "Wubble Teams",
    summary:
      "Collaborate in real-time. Invite teammates, manage projects, and co-compose tracks across borders.",
    buttonText: "Start Team Trial",
    url: "#",
    image: '/Waveform.jpg',
     Caption: "AI Audio cleaner"
  },
  {
    id: 8,
    title: "Wubble Learn",
    summary:
      "Master the art of music storytelling. Step-by-step lessons, templates, and case studies from industry creators.",
    buttonText: "Start Learning",
    url: "#",
    image: '/Waveform.jpg',
    Caption: "Auto - captioning "

  },
  {
    id: 9,
    title: "Wubble Analytics",
    summary:
      "Track how your sound performs across videos, campaigns, and platforms — understand what resonates.",
    buttonText: "View Insights",
    url: "#",
    image: '/Waveform.jpg'
  },
  {
    id: 10,
    title: "Wubble Integrations",
    summary:
      "Connect your favorite tools — YouTube, Notion, Canva, or Adobe. Import visuals, export sound.",
    buttonText: "Explore Integrations",
    url: "#",
    image: '/Waveform.jpg'
  },
  {
    id: 11,
    title: "Wubble Licensing Hub",
    summary:
      "Handle your usage rights effortlessly. Access all your royalty-free licenses in one secure dashboard.",
    buttonText: "Open Hub",
    url: "#",
    image: '/Waveform.jpg'
  },
  {
    id: 12,
    title: "Wubble Mobile",
    summary:
      "Create music on the go. Voice ideas, describe moods, and generate sound from your phone.",
    buttonText: "Get the App",
    url: "#",
    image: '/Waveform.jpg'
  },
];


