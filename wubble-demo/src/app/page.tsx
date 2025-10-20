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
import FeaturesCarousel from "@/components/LandingPage/FeaturesCarousel";
import { Button } from "@/components/ui/button";
import ShaderCanvas from "@/components/kaleidoscopic-orb-mesh-1";
import LiquidCrystalBackground from "@/components/liquid-neon-shader";
import MusicSectionCarousel from "@/components/MusicSectionCarousel";
import AuroraWaves from "@/components/aurora-waves";
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
    title: "What makes Origin UI different?",
    content:
      "Origin UI focuses on developer experience and performance. Built with TypeScript, it offers excellent type safety, follows accessibility standards, and provides comprehensive documentation with regular updates.",
  },
  {
    id: "2",
    title: "How can I customize the components?",
    content:
      "Use our CSS variables for global styling, or className and style props for component-specific changes. We support CSS modules, Tailwind, and dark mode out of the box.",
  },
  {
    id: "3",
    title: "Is Origin UI optimized for performance?",
    content:
      "Yes, with tree-shaking, code splitting, and minimal runtime overhead. Most components are under 5KB gzipped.",
  },
  {
    id: "4",
    title: "How accessible are the components?",
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

          <div className="w-full absolute top-0 left-0 bg-black/50 backdrop-blur-sm h-[40rem]">
            <HeroSection />
          </div>
        </AnimatedGroup>


        {/* Prompt Input */}
        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: { staggerChildren: 0.05, delayChildren: 0.75 },
              },
            },
            ...transitionVariants,
          }}
          className="relative z-30 w-full flex justify-center -mt-[13rem]"
        >
          <PromptInputBox />
        </AnimatedGroup>

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
          className="w-full ">
          <ClientCompany />
        </AnimatedGroup>

        {/* Used By Millions of Creators */}
        <div className=" w-full overflow-hidden flex flex-col justify-center items-center space-y-10 ">
          <h1 className="text-white text-4xl font-bold">Used By millions of the best creators</h1>
          <FeaturesCarousel />
          <Button className="bg-gradient-to-l from-[#6a5ae7] to-[#d622ef] rounded-full">Get Started</Button>
        </div>


        {/* Music Section */}
        <section className="flex flex-col items-center w-full space-y-12">
          <div className="text-center max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold">Dive into our ocean of music</h1>
            <p className="text-lg text-muted-foreground">
              Explore our galaxy of royalty-free music, curated for all your content needs.
              Use our existing tracks and customize them to your style.
            </p>
          </div>

          <Tabs defaultValue="gaming" className="w-full max-w-6xl ">
            <div className="w-full flex justify-center items-center">
              <TabsList className="flex justify-center items-center flex-wrap gap-2 mb-6 h-[3rem] bg-gray-700/50  " shape="pill">
                <TabsTrigger value="gaming" className="text-lg data-[state=active]:text-white data-[state=active]:bg-gradient-to-l data-[state=active]:from-[#6a5ae7]  data-[state=active]:to-[#d622ef] " >Gaming</TabsTrigger>
                <TabsTrigger value="Podcast" className="text-lg data-[state=active]:text-white data-[state=active]:bg-gradient-to-l data-[state=active]:from-[#6a5ae7] data-[state=active]:to-[#d622ef] ">Podcast</TabsTrigger>
                <TabsTrigger value="Content" className="text-lg data-[state=active]:text-white data-[state=active]:bg-gradient-to-l data-[state=active]:from-[#6a5ae7] data-[state=active]:to-[#d622ef] ">Content</TabsTrigger>
                <TabsTrigger value="Marketing" className="text-lg data-[state=active]:text-white data-[state=active]:bg-gradient-to-l  data-[state=active]:from-[#6a5ae7] data-[state=active]:to-[#d622ef] ">Marketing</TabsTrigger>
                <TabsTrigger value="Movies" className="text-lg data-[state=active]:text-white data-[state=active]:bg-gradient-to-l data-[state=active]:from-[#6a5ae7] data-[state=active]:to-[#d622ef] ">Movies</TabsTrigger>
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
          <section className=" space-y-5 w-full h-[20rem] px-[10rem]  flex justify-between rounded-md  bg-gradient-to-t from-[#6a5ae7]/50 to-transparent  ">
           
            <div className="flex flex-col  space-y-[2rem]">
              <h1 className="text-4xl font-bold">Wubble Chat Studio</h1>
              <p className="w-[25rem]">Bring your music ideas to life through conversation. Type your vision, get compositions instantly, and refine them in real time.</p>
              
            </div>
              <Button className="bg-gradient-to-l from-[#6a5ae7] to-[#d622ef] mt-11">Open studio</Button>  
{/*             
           <div className="border"> <AuroraWaves /></div> */}
            {/* <div className="absolute z-0 top-[40rem] w-full"/>   */}
          </section>
          <MusicSectionCarousel />
        </section>

        {/* Features Section */}
        <section className="w-full max-w-6xl px-4 space-y-8">
          {/* <h1 className="text-4xl font-bold text-center">Features</h1> */}
          <div className="">
            <FeatureSection />

          </div>
        </section>

        {/* Pricing Section */}
        <section className="w-full max-w-6xl px-4 space-y-8">
          <h1 className="text-4xl font-bold text-center">Plans</h1>
          <PricingSection />
        </section>

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
      </main>

      {/* Footer */}
      <div className="p-3">
        <Footer7 />
      </div>

    </div>
  );
}
