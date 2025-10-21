import { PromptInputBox } from "@/components/ai-prompt-box";
import { HeroSection } from "@/components/hero-section-1";
import { Header } from "@/components/navbar";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { MusicCard } from "@/components/card-6";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";
import { Footer7 } from "@/components/footer-7";
import { FeaturesCard } from "@/components/card-21";
import PricingSection from "@/components/pricing-section";
// import { Accordion } from "@/components/ui/accordion";
import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { Plus } from "lucide-react";
import ClientCompany from "@/components/LandingPage/ClientCompany";
import FeatureSection from "@/components/LandingPage/FeatureSection";
import { Button } from "@/components/ui/button";
import ShaderCanvas from "@/components/kaleidoscopic-orb-mesh-1";
import LiquidCrystalBackground from "@/components/liquid-neon-shader";
import MusicSectionCarousel from "@/components/MusicSectionCarousel";
import AuroraWaves from "@/components/aurora-waves";
import FeaturesCarousel from "@/components/FeaturesCarousel2";
import CreatorCarousel from "@/components/LandingPage/CreatorCarousel";
import { Card } from "@/components/ui/card";
import DiscoverMore from "@/components/DiscoverMore";
import FeaturesCarousel2 from "@/components/FeaturesCarousel2";
import FeaturesCarousel1 from "@/components/FeaturesCarousel1";
import { LatestUpdates } from "@/components/LatestUpdates";
const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

const MusicList = [
  { name: "Night Drives", img: "/NightDrives.avif", songTitle: "Night Drives" },
  { name: "Behind the Ice", img: "/BehindtheIce.avif", songTitle: "Behind The Ice" },
  { name: "Ocean Dreams", img: "/BehindtheIce.avif", songTitle: "Ocean Dreams" },
  { name: "Neon Nights", img: "/BehindtheIce.avif", songTitle: "Neon Nights" },
  { name: "Winter Roads", img: "/BehindtheIce.avif", songTitle: "Winter Roads" },
  { name: "City Lights", img: "/BehindtheIce.avif", songTitle: "City Lights" },
];

const BlogList = [
  { name: "Blog 1", img: "/Blog.avif" },
  { name: "Blog 2", img: "/Blog.avif" },
  { name: "Blog 3", img: "/Blog.avif" },
  { name: "Blog 4", img: "/Blog.avif" },
  { name: "Blog 5", img: "/Blog.avif" },
  { name: "Blog 6", img: "/Blog.avif" },
];




const items = [
  {
    id: "1",
    title: "How does the conversational AI sound engineer work?",
    content:
      "Origin UI focuses on developer experience and performance. Built with TypeScript, it offers excellent type safety, follows accessibility standards, and provides comprehensive documentation with regular updates.",
  },
  {
    id: "2",
    title: "Is the generated music and SFX copyright-free for commercial use?",
    content:
      "Use our CSS variables for global styling, or className and style props for component-specific changes. We support CSS modules, Tailwind, and dark mode out of the box.",
  },
  {
    id: "3",
    title: "How does the conversational AI sound engineer work?",
    content:
      "Yes, with tree-shaking, code splitting, and minimal runtime overhead. Most components are under 5KB gzipped.",
  },
  {
    id: "4",
    title: "How realistic is the voice cloning and is it secure?",
    content:
      "All components follow WAI-ARIA standards, featuring proper ARIA attributes, keyboard navigation, and screen reader support. Regular testing ensures compatibility with NVDA, VoiceOver, and JAWS.",
  },
  {
    id: "5",
    title: "Can I upload my own audio files for Wubble to mix, edit, and clean?",
    content:
      "All components follow WAI-ARIA standards, featuring proper ARIA attributes, keyboard navigation, and screen reader support. Regular testing ensures compatibility with NVDA, VoiceOver, and JAWS.",
  },
  {
    id: "6",
    title: "What do you mean by 'DAW-level' engineering?",
    content:
      "All components follow WAI-ARIA standards, featuring proper ARIA attributes, keyboard navigation, and screen reader support. Regular testing ensures compatibility with NVDA, VoiceOver, and JAWS.",
  },
  {
    id: "7",
    title: " How does Wubble integrate with my existing workflow (e.g., Unity, Premiere Pro)?",
    content:
      "All components follow WAI-ARIA standards, featuring proper ARIA attributes, keyboard navigation, and screen reader support. Regular testing ensures compatibility with NVDA, VoiceOver, and JAWS.",
  },
  {
    id: "8",
    title: " What's the difference between the Free, Pro, and Teams plans?",
    content:
      "All components follow WAI-ARIA standards, featuring proper ARIA attributes, keyboard navigation, and screen reader support. Regular testing ensures compatibility with NVDA, VoiceOver, and JAWS.",
  },
  {
    id: "8",
    title: " How does the Wubble API work?",
    content:
      "All components follow WAI-ARIA standards, featuring proper ARIA attributes, keyboard navigation, and screen reader support. Regular testing ensures compatibility with NVDA, VoiceOver, and JAWS.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-white">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-1 w-full flex flex-col items-center space-y-[5.3rem]">
        {/* Hero Section */}
        <div className="relative w-full h-[40rem]  ">
          <div className="absolute  w-full h-full ">
            <LiquidCrystalBackground
              speed={0.6}
              radii={[0.25, 0.18, 0.3]}
              smoothK={[0.2, 0.3]}

            />
          </div>
          {/* <div className="bg-gradient-to-b  from-10% from-black/80 to-90% to-[#100f10] w-full  backdrop-blur-3xl absolute h-[4rem]  top-[39rem] z-10"/> */}
        </div>
        <AnimatedGroup>

          <div className="w-full absolute top-0 left-0 bg-black/50 backdrop-blur-sm h-[40rem] flex flex-col items-center">
            <HeroSection />
            {/* Chat Box */}
            <PromptInputBox />
          </div>

        </AnimatedGroup>
        <div className="w-full absolute  h-[5rem] bg-gradient-to-b from-transparent to-black top-[35rem] " />
        {/* Client Companies */}
        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: { staggerChildren: 0.05, delayChildren: 0.75 },
              },
            },
            ...transitionVariants,
          }}
          className="w-full -mt-[11rem]  ">
          <ClientCompany />
        </AnimatedGroup>

        {/* Used By Millions of Creators */}
        <div className=" w-full overflow-hidden flex flex-col justify-center items-center space-y-10 ">
          <h1 className="text-white text-4xl font-bold">Used By millions of the best creators</h1>
          <CreatorCarousel />
          <Button className="bg-gradient-to-l from-[#6a5ae7] to-[#d622ef] rounded-full">Get Started</Button>
        </div>


        {/* Features Section */}
        <section className="flex flex-col items-center w-full space-y-10">
          <div className="text-center w-full space-y-4">
            <h1 className="text-4xl font-bold">One agent. Total audio production </h1>
            <p className="text-lg text-muted-foreground">
              Our conversational AI generates, engineers, and masters everything. See the specific tools and features Wubble deploys for your workflow.
            </p>
          </div>

          <Tabs defaultValue="Marketing & Ads" className="w-full max-w-6xl ">
            <div className="w-full flex justify-center items-center">
              <TabsList className="flex justify-center items-center flex-wrap gap-2 mb-6 h-[3rem] bg-gray-700/50  " shape="pill">
                <TabsTrigger value="Marketing & Ads" className="text-lg data-[state=active]:text-white data-[state=active]:bg-gradient-to-l data-[state=active]:from-[#6a5ae7]  data-[state=active]:to-[#d622ef] " >Marketing & Ads</TabsTrigger>
                <TabsTrigger value="Film & TV" className="text-lg data-[state=active]:text-white data-[state=active]:bg-gradient-to-l data-[state=active]:from-[#6a5ae7] data-[state=active]:to-[#d622ef] ">Film & Tv</TabsTrigger>
                <TabsTrigger value="Game dev" className="text-lg data-[state=active]:text-white data-[state=active]:bg-gradient-to-l data-[state=active]:from-[#6a5ae7] data-[state=active]:to-[#d622ef] ">Game dev</TabsTrigger>
                <TabsTrigger value="Hospitality" className="text-lg data-[state=active]:text-white data-[state=active]:bg-gradient-to-l  data-[state=active]:from-[#6a5ae7] data-[state=active]:to-[#d622ef] ">Hospitality</TabsTrigger>
                <TabsTrigger value="Creators" className="text-lg data-[state=active]:text-white data-[state=active]:bg-gradient-to-l data-[state=active]:from-[#6a5ae7] data-[state=active]:to-[#d622ef] ">Creators</TabsTrigger>
                <TabsTrigger value="Podcasts" className="text-lg data-[state=active]:text-white data-[state=active]:bg-gradient-to-l data-[state=active]:from-[#6a5ae7] data-[state=active]:to-[#d622ef] ">Podcasters</TabsTrigger>
              </TabsList>
            </div>

            {/* {["gaming", "Podcast", "Content", "Marketing", "Movies"].map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {MusicList.map((music, index) => (
                    <MusicCard key={index} imageUrl={music.img} songTitle={music.songTitle} />
                  ))}
                </div>
              </TabsContent>
            ))} */}
          </Tabs>
          <section className=" space-y-5 w-[90%] h-[20rem] px-[8rem]  flex justify-between items-center rounded-md  bg-gradient-to-t from-[#6a5ae7]/50 to-transparent  ">

            <div className="flex flex-col   space-y-[2rem] ">
              <h1 className="text-4xl font-bold">Go from brief to broadcast instantly</h1>
              <p className="w-[25rem]">Instantly concept, generate, mix, and localize entire audio campaigns.</p>

            </div>
            <Button className="bg-gradient-to-l from-[#6a5ae7] to-[#d622ef] mt-11">Open studio</Button>

          </section>
          <FeaturesCarousel1 />

        </section>

        {/* Features Section */}
        <section className="w-full flex justify-center  space-y-8">
          {/* <h1 className="text-4xl font-bold text-center">Features</h1> */}
          <div className="w-[90%]">
            <FeatureSection />
          </div>

        </section>
        <div className=" w-[100%] overflow-hidden">
          <FeaturesCarousel2 />
        </div>


        {/* Collaborate */}

        <section className="w-[90%] flex justify-between items-center my-[5rem] gap-[5rem]">
          <Card>
            <div className="w-[35rem] h-[20rem]">

            </div>
          </Card>
          <div className="w-[50%] flex-col flex space-y-14">
            <h1 className="text-3xl font-bold">Direct your audio, together.</h1>
            <p>
              Invite directors, producers, clients, and editors to review, comment, and guide your AI agent—all in one place, all in real-time.
            </p>
            <Button className="bg-gradient-to-l from-[#6a5ae7] to-[#d622ef] w-[10rem]">Start Free Trial</Button>

          </div>

        </section>

        {/* Discover More Products */}
        <section className="flex flex-col items-center w-full overflow-hidden">
          <h1 className="text-4xl font-bold">Discover More</h1>
          <DiscoverMore />
        </section>
        {/* Pricing Section */}
        <section className="w-full max-w-6xl px-4 space-y-8">
          <h1 className="text-4xl font-bold text-center">Plans</h1>
          <PricingSection />
        </section>
        {/*Latest Updates */}
        <div className="w-[90%] overflow-hidden">
          <LatestUpdates />

        </div>
        {/* FAQ Section */}
        <section className="w-full max-w-5xl px-4 space-y-8  ">
          <h1 className="text-4xl font-bold text-center">FAQs</h1>
          <Accordion type="single" collapsible className="w-full" defaultValue="3">
            {items.map((item) => (
              <AccordionItem value={item.id} key={item.id} className="py-2">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-2 text-left text-[15px] font-semibold leading-6 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                    {item.title}
                    <Plus
                      size={16}
                      strokeWidth={2}
                      className="shrink-0 opacity-60 transition-transform duration-200"
                      aria-hidden="true"
                    />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="pb-2 text-muted-foreground">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
        <AnimatedGroup className="w-full">

          <div className="h-[20rem] bg-gradient-to-l from-[#6a5ae7] to-[#d622ef] flex justify-center items-center flex-col w-full gap-[3rem]">
            <h1 className="text-3xl">Start Creating with Wubble</h1>
            <Button className="w-[10rem] bg-white text-black hover:text-white">Get Started For Free</Button>
          </div>
        </AnimatedGroup>
      </main>

      {/* Footer */}
      <div className="p-3">
        <Footer7 />
      </div>

    </div>
  );
}
