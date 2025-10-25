import { PromptInputBox } from "@/components/ai-prompt-box";
import { HeroSection } from "@/components/hero-section-1";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { MusicCard } from "@/components/card-6";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";
import HoverFooter from "@/components/footer-7";
import { FeaturesCard } from "@/components/card-21";
import PricingSection from "@/components/pricing-section";
import { Montserrat } from "next/font/google";
// import { Accordion } from "@/components/ui/accordion";
import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { Plus } from "lucide-react";
import ClientCompany from "@/components/LandingPage/ClientCompany";
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
import Header from "@/components/navbar";
import { HeroWave } from "@/components/ai-input-hero";
import Testimonial1 from "@/components/testimonial-1";
import { PillsTabs } from "@/components/PillTabs";
import CircularGalleryDemo from "@/components/FeaturesCarousel1";
import FeatureCircularGallery from "@/components/FeaturesCarousel1";
import { FeatureSection } from "@/components/LandingPage/FeatureSection";
import { PricingTable } from "@/components/pricing-table";
import LatestUpdates from "@/components/LatestUpdates";
import FAQ1 from "@/components/faq-monocrhome";
import { WavePath } from "@/components/wave-path";
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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-background">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className={`flex-1 w-full flex flex-col items-center`}>
        {/* Hero Section */}

        <AnimatedGroup className="w-full">

          <div className="w-full left-0 bg-background backdrop-blur-sm flex flex-col items-center">
            {/* <HeroSection /> */}
            <HeroWave />
          </div>

        </AnimatedGroup>
        <div className="w-full absolute h-[5rem] bg-gradient-to-b from-transparent to-background top-[42rem]" />
        {/* Client Companies */}
        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: { staggerChildren: 0.004, delayChildren: 0.75 },
              },
            },
            ...transitionVariants,
          }}
          className="w-full mt-[8rem]">
          <Testimonial1 />
        </AnimatedGroup>

        {/* Used By Millions of Creators */}
        <div className="w-full overflow-hidden flex flex-col justify-center items-center space-y-10 mt-[5.3rem]">
          <h1 className="text-foreground text-4xl font-bold">Powering the World's Best Story Tellers</h1>
          <CreatorCarousel />
        </div>


        {/* Features Section */}
        <section className="flex flex-col items-center w-full  mt-[5.3rem] py-16   ">
          <div className="bg-gradient-to-t from-[#d19fff]/50  to-transparent w-full space-y-10">
            <div className="text-center w-full space-y-4">
              <h1 className="text-4xl font-bold">One agent. Total audio production </h1>
              <p className="text-lg text-muted-foreground">
                Our conversational AI generates, engineers, and masters everything. See the specific tools and features Wubble deploys for your workflow.
              </p>
            </div>
            <div className="w-full ">
              <PillsTabs />
            </div>
          </div>

          <FeatureCircularGallery />



        </section>

        {/* Features Section */}
        <section className="w-full  flex flex-col items-center justify-center  space-y-8 ">
          <div className="w-[95%]">
            <FeatureSection />
          </div>
          <div className=" w-[100%] overflow-hidden ">
            <FeaturesCarousel2 />
          </div>


        </section>


        {/* Collaborate */}

        <section className="w-[85%] h-[566px] flex justify-between items-center my-[5rem] gap-[50px]">
          <Card className="h-full">
            <div className="w-[650px] h-full">

            </div>
          </Card>
          <div className="flex-col flex gap-[30px] w-[590px]">
            <h1 className="font-[600] text-[40px] leading-[100%] tracking-[-3%] text-foreground">Direct your audio, together.</h1>
            <p className="text-[20px] text-muted-foreground font-[500]">
              Invite directors, producers, clients, and editors to review, comment, and guide your AI agent—all in one place, all in real-time.
            </p>
            <Button className="bg-primary text-[16px] font-[600] text-primary-foreground leading-[150%] tracking-[0%] w-[230px] h-[56px]">Start Free Teams Trial</Button>

          </div>

        </section>

        {/* Discover More Products */}
        <section className="flex flex-col items-center w-full overflow-hidden mt-[7rem]">
          <h1 className="text-4xl font-bold">Discover More Features</h1>
          <DiscoverMore />
        </section>
        {/* Pricing Section */}
        <section className="w-[85%] px-4 mt-[2rem]">
          <h1 className="text-4xl font-bold text-center -mb-10">A Perfect Fit For Everyone</h1>
          <PricingSection />
        </section>
        {/*Latest Updates */}
        <div className="w-[90%] overflow-hidden">
          <LatestUpdates />

        </div>
        {/* FAQ Section */}
        <section className="w-[90%] px-4 space-y-8  ">
          <h1 className="text-[40px]  font-[400] text-center">Frequently asked questions</h1>
          <FAQ1 />
        </section>
        <AnimatedGroup className="w-full flex flex-col items-center h-[25rem]">

          {/* <WavePath /> */}
          <div className="flex w-[70vw] flex-col items-center space-y-10">
            <WavePath className="mb-10" />
            <div className="flex w-full flex-col items-end">
              <div className="flex ">
                <p className="text-muted-foreground mt-2 text-sm">World of Art</p>
                <p className="text-foreground/80 ml-8 w-3/4 text-2xl md:text-4xl">
                  Experience the emotions of artists through their works. Let the
                  beauty of art inspire you and fill your soul.
                </p>
              </div>
            </div>
            <Button>Get Started for Free</Button>
          </div>
        </AnimatedGroup>
      </main>

      {/* Footer */}
      <div className="p-3">
        <HoverFooter />
      </div>

    </div>
  );
}
