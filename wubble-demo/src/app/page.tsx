import { PromptInputBox } from "@/components/ai-prompt-box";
import { HeroSection } from "@/components/hero-section-1";
import { Header } from "@/components/navbar";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { MusicCard } from "@/components/card-6";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";
import { Footer7 } from "@/components/footer-7";
import { BlogCard } from "@/components/card-21";
import PricingSection from "@/components/pricing-section";
// import { Accordion } from "@/components/ui/accordion";
import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { Plus } from "lucide-react";
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
    <div className="flex flex-col min-h-screen font-sans">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-1 w-full flex flex-col items-center space-y-32">
        {/* Hero Section */}
        <HeroSection />

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
          className="w-full border flex justify-center"
        >
          <PromptInputBox />
        </AnimatedGroup>

        {/* Music Section */}
        <section className="flex flex-col items-center w-full space-y-12">
          <div className="text-center max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold">Dive into our ocean of music</h1>
            <p className="text-lg text-muted-foreground">
              Explore our galaxy of royalty-free music, curated for all your content needs.
              Use our existing tracks and customize them to your style.
            </p>
          </div>

          <Tabs defaultValue="gaming" className="w-full max-w-6xl">
            <TabsList className="flex justify-center flex-wrap gap-2 mb-6" shape="pill">
              <TabsTrigger value="gaming">Gaming</TabsTrigger>
              <TabsTrigger value="Podcast">Podcast</TabsTrigger>
              <TabsTrigger value="Content">Content</TabsTrigger>
              <TabsTrigger value="Marketing">Marketing</TabsTrigger>
              <TabsTrigger value="Movies">Movies</TabsTrigger>
            </TabsList>

            {["gaming", "Podcast", "Content", "Marketing", "Movies"].map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {MusicList.map((music, index) => (
                    <MusicCard key={index} imageUrl={music.img} songTitle={music.songTitle} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* Blogs Section */}
        <section className="w-full max-w-6xl px-4 space-y-8">
          <h1 className="text-4xl font-bold text-center">Blogs</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {BlogList.map((blog, index) => (
              <BlogCard key={index} imageUrl={blog.img} />
            ))}
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
