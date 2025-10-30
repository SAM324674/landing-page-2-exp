"use client"
import React from 'react'
import SideBarLayout from '../SideBarLayout'
import { AudioLines, BarChart2, BookMarked, BoomBox, Ear, Globe, Megaphone, Mic, Music, PlaneTakeoff, Speaker, Video } from 'lucide-react'
import FancyButton from '@/components/shiny-button'
import { ResourceCards } from '@/components/WidgetCard'
import { WideContentCard } from '@/components/WideContenrCard'
import { PotraitCard } from '@/components/PotraitCard'
import { motion } from "framer-motion";
import { MusicCard } from '@/components/MusicCard'
import { BentoGrid, BentoGridItem } from '@/components/bento-grid'
import { Carousel, CarouselContent, CarouselItem, CarouselNavigation } from '@/components/ui/carousel'
import { CarouselGridSlide } from '@/components/CarouselGridSlide'
import { AnimatedSearchBar } from '@/components/animated-search-bar'
import { ExpandableCard } from '@/components/expandable-card'


const chunkArray = (arr: any[], size: number) => {
  const chunkedArr = [];
  for (let i = 0; i < arr.length; i += size) {
    chunkedArr.push(arr.slice(i, i + size));
  }
  return chunkedArr;
};

// Use this for any list that needs the 2-row layout (5 columns * 2 rows = 10 items)
const getTwoRowChunks = (itemsArray: any[]) => {
  const ITEMS_PER_SLIDE = 10;
  return chunkArray(itemsArray, ITEMS_PER_SLIDE);
};


// Animation variants for the container to orchestrate children animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Animation variants for each card item
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const TemplateCardItems = [
  {
    iconSrc: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-tRfo11d3TVT3JA1CtlD6iR8HZCvIQM.png&w=320&q=75",
    title: "SOPs",
    line: "29 April 2025",
    href: "#",
  },
  {
    iconSrc: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-fs2N6IIs4VkGZQpjrS17tAgnWBFkbl.png&w=320&q=75",
    title: "Contracts",
    line: "29 April 2025",
    href: "#",
  },
  {
    iconSrc: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-uqbQgvm8wfMxwP35nXRvS4ZteqmoCU.png&w=320&q=75",
    title: "Templates",
    line: "29 April 2025",
    href: "#",
  },
  {
    iconSrc: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-vSXxF8u21GdIWRr8AtFn5sK74jIZN8.png&w=320&q=75",
    title: "Policies",
    line: "29 April 2025",
    href: "#",
  },
  {
    iconSrc: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-OcGyav7XXTTVq0fDXxzmOVek6Noq7s.png&w=320&q=75",
    title: "Knowledge Base",
    line: "29 April 2025",
    href: "#",
  },
  {
    iconSrc: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-5zVOONIN28dJticozuMBCoSEjaw6VA.png&w=320&q=75",
    title: "Archive",
    line: "29 April 2025",
    href: "#",
  },
  {
    iconSrc: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-tRfo11d3TVT3JA1CtlD6iR8HZCvIQM.png&w=320&q=75",
    title: "SOPs",
    line: "29 April 2025",
    href: "#",
  },
  {
    iconSrc: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-fs2N6IIs4VkGZQpjrS17tAgnWBFkbl.png&w=320&q=75",
    title: "Contracts",
    line: "29 April 2025",
    href: "#",
  },
  {
    iconSrc: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-uqbQgvm8wfMxwP35nXRvS4ZteqmoCU.png&w=320&q=75",
    title: "Templates",
    line: "29 April 2025",
    href: "#",
  },
  {
    iconSrc: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-vSXxF8u21GdIWRr8AtFn5sK74jIZN8.png&w=320&q=75",
    title: "Policies",
    line: "29 April 2025",
    href: "#",
  },
  {
    iconSrc: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-OcGyav7XXTTVq0fDXxzmOVek6Noq7s.png&w=320&q=75",
    title: "Knowledge Base",
    line: "29 April 2025",
    href: "#",
  },
  {
    iconSrc: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-5zVOONIN28dJticozuMBCoSEjaw6VA.png&w=320&q=75",
    title: "Archive",
    line: "29 April 2025",
    href: "#",
  },
]

const PopularVoicesItems = [
  {
    iconSrc: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-tRfo11d3TVT3JA1CtlD6iR8HZCvIQM.png&w=320&q=75",
    title: "SOPs",
    line: "29 April 2025",
    href: "#",
  },
  {
    iconSrc: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-fs2N6IIs4VkGZQpjrS17tAgnWBFkbl.png&w=320&q=75",
    title: "Contracts",
    line: "29 April 2025",
    href: "#",
  },
  {
    iconSrc: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-uqbQgvm8wfMxwP35nXRvS4ZteqmoCU.png&w=320&q=75",
    title: "Templates",
    line: "29 April 2025",
    href: "#",
  },
  {
    iconSrc: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-vSXxF8u21GdIWRr8AtFn5sK74jIZN8.png&w=320&q=75",
    title: "Policies",
    line: "29 April 2025",
    href: "#",
  },
  {
    iconSrc: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-OcGyav7XXTTVq0fDXxzmOVek6Noq7s.png&w=320&q=75",
    title: "Knowledge Base",
    line: "29 April 2025",
    href: "#",
  },
  {
    iconSrc: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-5zVOONIN28dJticozuMBCoSEjaw6VA.png&w=320&q=75",
    title: "Archive",
    line: "29 April 2025",
    href: "#",
  },
  {
    iconSrc: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-tRfo11d3TVT3JA1CtlD6iR8HZCvIQM.png&w=320&q=75",
    title: "SOPs",
    line: "29 April 2025",
    href: "#",
  },


]

const JustAddedItems = [
  {
    iconSrc: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-tRfo11d3TVT3JA1CtlD6iR8HZCvIQM.png&w=320&q=75",
    title: "SOPs",
    line: "29 April 2025",
    href: "#",
  },
  {
    iconSrc: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-fs2N6IIs4VkGZQpjrS17tAgnWBFkbl.png&w=320&q=75",
    title: "Contracts",
    line: "29 April 2025",
    href: "#",
  },
  {
    iconSrc: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-uqbQgvm8wfMxwP35nXRvS4ZteqmoCU.png&w=320&q=75",
    title: "Templates",
    line: "29 April 2025",
    href: "#",
  },
  {
    iconSrc: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-vSXxF8u21GdIWRr8AtFn5sK74jIZN8.png&w=320&q=75",
    title: "Policies",
    line: "29 April 2025",
    href: "#",
  },
  {
    iconSrc: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-OcGyav7XXTTVq0fDXxzmOVek6Noq7s.png&w=320&q=75",
    title: "Knowledge Base",
    line: "29 April 2025",
    href: "#",
  },
  {
    iconSrc: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-5zVOONIN28dJticozuMBCoSEjaw6VA.png&w=320&q=75",
    title: "Archive",
    line: "29 April 2025",
    href: "#",
  },
  {
    iconSrc: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-tRfo11d3TVT3JA1CtlD6iR8HZCvIQM.png&w=320&q=75",
    title: "SOPs",
    line: "29 April 2025",
    href: "#",
  },

]


const allActions = [
  {
    id: "1",
    label: "Book tickets",
    icon: <PlaneTakeoff className="h-4 w-4 text-blue-500" />,
    description: "Operator",
    short: "⌘K",
    end: "Agent",
  },
  {
    id: "2",
    label: "Summarize",
    icon: <BarChart2 className="h-4 w-4 text-orange-500" />,
    description: "gpt-4o",
    short: "⌘cmd+p",
    end: "Command",
  },
  {
    id: "3",
    label: "Screen Studio",
    icon: <Video className="h-4 w-4 text-purple-500" />,
    description: "gpt-4o",
    short: "",
    end: "Application",
  },
  {
    id: "4",
    label: "Talk to Jarvis",
    icon: <AudioLines className="h-4 w-4 text-green-500" />,
    description: "gpt-4o voice",
    short: "",
    end: "Active",
  },
  {
    id: "5",
    label: "Translate",
    icon: <Globe className="h-4 w-4 text-blue-500" />,
    description: "gpt-4o",
    short: "",
    end: "Command",
  },
];
const BentoGridItems = [
  {

    header: (
      <img
        src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
        alt="Abstract gradient background for notifications"
        className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
    ),
    className: "md:col-span-1",
  },
  {

    header: (
      <img
        src="https://images.unsplash.com/photo-1542435503-956c469947f6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
        alt="Person working on a laptop with documents"
        className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
    ),
    className: "md:col-span-2",
  },
  {

    header: (
      <img
        src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
        alt="A calendar with events and plans"
        className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
    ),
    className: "md:col-span-2",
  },
  {

    header: (
      <img
        src="https://plus.unsplash.com/premium_photo-1683121718643-fb18d2668d53?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFpfGVufDB8fDB8fHww"
        alt="Abstract visualization of an AI neural network"
        className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
    ),
    className: "md:col-span-1",
  },
  {

    header: (
      <img
        src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
        alt="Abstract gradient background for notifications"
        className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
    ),
    className: "md:col-span-2",
  },
  {

    header: (
      <img
        src="https://images.unsplash.com/photo-1542435503-956c469947f6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
        alt="Person working on a laptop with documents"
        className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
    ),
    className: "md:col-span-1",
  },
  {

    header: (
      <img
        src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
        alt="A calendar with events and plans"
        className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
    ),
    className: "md:col-span-2",
  },
  {

    header: (
      <img
        src="https://plus.unsplash.com/premium_photo-1683121718643-fb18d2668d53?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFpfGVufDB8fDB8fHww"
        alt="Abstract visualization of an AI neural network"
        className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
    ),
    className: "md:col-span-1",
  },
];

const soundEffectChunks = getTwoRowChunks(TemplateCardItems);

const templateChunks = getTwoRowChunks(TemplateCardItems);

const ExplorePage = () => {
  return (
    <div>
      <SideBarLayout>
        <main className=''>

          <div className='flex flex-col space-y-10 py-4'>
            <div className='h-[5rem] mt-6 flex justify-center items-center text-4xl font-bold'><h1>Step Into The World of Audio</h1></div>
            {/* ----------------------------search Bar----------------------------------------- */}
            <div className='w-full '>
              <AnimatedSearchBar actions={allActions} />
            </div>
            {/*----------------Icon Buttons------------------------*/}
            <div className=' w-full flex justify-evenly'>
              <FancyButton icon={<Megaphone fill='white' stroke='none' />}></FancyButton>
              <FancyButton icon={<Mic fill='gray' stroke='white' />}></FancyButton>
              <FancyButton icon={<BoomBox stroke="white" />}></FancyButton>
              <FancyButton icon={<Video fill='white' stroke='none' />}></FancyButton>
              <FancyButton icon={<BookMarked stroke='white' />}></FancyButton>
              <FancyButton icon={<Music stroke='white' />}></FancyButton>
              <FancyButton icon={<AudioLines stroke='white' />}></FancyButton>
              <FancyButton icon={<Ear stroke='white' />}></FancyButton>
            </div>
            {/*---------------- Explore Templates------------------ */}
            <div className='px-8 space-y-4'>
              <h1 className='text-xl font-bold'>Explore Templates</h1>
              <Carousel className='w-[87rem]'>                      {/*to be corrected*/}
                <CarouselContent>

                  {soundEffectChunks.map((chunk, index) => (
                    <CarouselItem key={index} className="basis-full pl-4">
                      {/* Use the new utility component here */}
                      <CarouselGridSlide
                        items={chunk}
                        className='h-[11rem]' // Total height for 2 rows
                      />
                    </CarouselItem>
                  ))}


                </CarouselContent>
                <CarouselNavigation />
              </Carousel>



            </div>
            {/* ------------------Based on Recent Projects------------------------- */}
            <div className='px-8 space-y-4'>
              <h1 className='text-xl font-bold'>Based on your recent projects</h1>
              <div className='flex'>
                <Carousel className='w-[87rem]'>
                  <CarouselContent className='w-full gap-4'>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <CarouselItem className='basis-1/3'>
                        <ExpandableCard component={
                       <WideContentCard key={index} imageUrl='https://plus.unsplash.com/premium_photo-1672046217997-4e40a3d7987d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHJ1bnxlbnwwfHwwfHx8MA%3D%3D?q=80&w=2542&auto=format&fit=crop' />

                        }><div className='h-[40rem]'></div></ExpandableCard>


                      </CarouselItem>
                    ))}

                  </CarouselContent>
                  <CarouselNavigation LastdisableLimit={3} />
                </Carousel>

              </div>
            </div>
            {/*------------------------- New To Wubble Start Here ---------------------------------*/}
            <div className='px-8 space-y-4'>
              <h1 className='text-xl font-bold'>New To Wubble? Start Here</h1>
              <div className='flex'>
                <Carousel className='w-[87rem]'>
                  <CarouselContent className='w-full gap-4'>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <CarouselItem className='basis-1/3'>
                        {/* <motion.div
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                          className=
                          "grid grid-cols-4 gap-3 sm:grid-cols-2 lg:grid-cols-5"

                        > */}

                        <WideContentCard key={index} imageUrl='https://plus.unsplash.com/premium_photo-1672046217997-4e40a3d7987d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHJ1bnxlbnwwfHwwfHx8MA%3D%3D?q=80&w=2542&auto=format&fit=crop' />


                        {/* </motion.div> */}
                      </CarouselItem>
                    ))}

                  </CarouselContent>
                  <CarouselNavigation LastdisableLimit={3} />
                </Carousel>

              </div>
            </div>
            {/* ----------------------Trending in Market --------------------*/}
            <div className='px-8 space-y-4 py-2'>
              <h1 className='text-xl font-bold'>Trending in Market</h1>
              <div className='flex'>
                <Carousel className='w-[87rem]'>
                  <CarouselContent className='w-full gap-4'>
                    {/* <div> */}
                    {Array.from({ length: 5 }).map((_, index) => (
                      <CarouselItem className='basis-1/5'>
                        <div className='w-full max-w-[250px] h-[350px]' key={index + 1}>
                          <PotraitCard imageUrl='https://images.unsplash.com/photo-1524675053444-52c3ca294ad2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGluZG9uZXNpYXxlbnwwfHwwfHx8MA%3D%3D?q=80&w=1887' />

                        </div>
                      </CarouselItem>
                    ))}

                    {/* </div> */}
                  </CarouselContent>
                  <CarouselNavigation LastdisableLimit={4} />
                </Carousel>

              </div>
              {/* <div className='flex gap-5'>
                {Array.from({ length: 5 }).map((_, index) => (
                  <div className='w-full max-w-[250px] h-[350px]' key={index + 1}>
                    <PotraitCard imageUrl='https://images.unsplash.com/photo-1524675053444-52c3ca294ad2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGluZG9uZXNpYXxlbnwwfHwwfHx8MA%3D%3D?q=80&w=1887' />

                  </div>
                ))}
              </div> */}

            </div>


            {/* -----------------------Popular voices right now-----------------------------*/}
            <div className='px-8 space-y-4'>
              <h1 className='text-xl font-bold'>Popular voices right now</h1>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className=
                " gap-3 "

              >
                <Carousel className='w-[87rem] '>
                  <CarouselContent>
                    {/* <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className=
                      "flex"

                    > */}
                    {PopularVoicesItems.map((item, index) => (
                      <CarouselItem className="rounded-md hover:rounded-md basis-1/4" key={index}>
                        <ResourceCards item={item} index={index} className='h-[5rem] w-[19.3rem]' />
                      </CarouselItem>

                    ))}
                    {/* </motion.div> */}
                  </CarouselContent>
                  <CarouselNavigation LastdisableLimit={4} />

                </Carousel>
              </motion.div>
            </div>


            {/*--------------------------- Music to match your vibe --------------------------------------------*/}
            <div className='px-8 space-y-4'>
              <h1 className='text-xl font-bold'>Music to match your vibe</h1>
              <div className='flex gap-3'>
                <Carousel className='w-[87rem]'>
                  <CarouselContent className='w-full gap-4'>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <CarouselItem className='basis-1/5'>
                        <div key={index}>
                          <MusicCard
                            title="Now Playing"
                            artist="Far Caspian"
                            songTitle="Let's Go Outside"
                            imageUrl="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          // onPlay={handlePlay}
                          />
                        </div>
                      </CarouselItem>
                    ))}

                  </CarouselContent>
                  <CarouselNavigation LastdisableLimit={4} />
                </Carousel>

              </div>
            </div>
            {/*---------------------------------- Sound Effects for you---------------------------------------------- */}
            <div className='px-8 space-y-4'>
              <h1 className='text-xl font-bold'>Sound Effects for you</h1>
              <Carousel className='w-[87rem]'>
                <CarouselContent>

                  {soundEffectChunks.map((chunk, index) => (
                    <CarouselItem key={index} className="basis-full pl-4">
                      {/* Use the new utility component here */}
                      <CarouselGridSlide
                        items={chunk}
                        className='h-[11rem]' // Total height for 2 rows
                      />
                    </CarouselItem>
                  ))}

                </CarouselContent>
                <CarouselNavigation />
              </Carousel>


            </div>
            {/*--------- Just Added -------------------*/}
            <div className='px-8 space-y-4'>
              <h1 className='text-xl font-bold'>Just added</h1>
              <Carousel className='w-[87rem]'>
                <CarouselContent>
                  {/* <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className=
                    "flex"

                  > */}
                  {JustAddedItems.map((item, index) => (
                    <CarouselItem className="rounded-md hover:rounded-md basis-1/4" key={index}>
                      <ResourceCards item={item} index={index} className='h-[8rem] w-[20rem]' />
                    </CarouselItem>

                  ))}
                  {/* </motion.div> */}
                </CarouselContent>
                <CarouselNavigation LastdisableLimit={4} />

              </Carousel>
            </div>
            {/* More assets for you */}
            <div className='px-8 space-y-4'>
              <h1 className='text-xl font-bold'>More assets for you</h1>
              <BentoGrid>
                {BentoGridItems.map((item, i) => (
                  <BentoGridItem
                    key={i}

                    header={item.header}
                    className={item.className}
                  />
                ))}
              </BentoGrid>
              {/* <ExpandableCard
                title="Digital Revolution"
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
                description="The Future of Technology"
                classNameExpanded="[&_h4]:text-black dark:[&_h4]:text-white [&_h4]:font-medium"
              >
                <h4>The Rise of Artificial Intelligence</h4>
                <p>
                  In the heart of Silicon Valley, a revolution is quietly unfolding.
                  Artificial Intelligence, once the stuff of science fiction, has become
                  the driving force behind the most transformative technologies of our
                  time. From autonomous vehicles navigating city streets to AI-powered
                  medical diagnostics saving lives, the boundaries between human and
                  machine intelligence are blurring in ways we never imagined possible.
                </p>
                <h4>The Quantum Computing Breakthrough</h4>
                <p>
                  Deep within the research labs of tech giants and universities,
                  scientists are racing to harness the power of quantum mechanics.
                  Quantum computers, with their ability to process information in
                  multiple states simultaneously, promise to solve problems that
                  would take classical computers millennia to crack. From drug
                  discovery to climate modeling, the applications are limitless.
                  The first commercially viable quantum computer could revolutionize
                  cryptography, financial modeling, and our understanding of the
                  universe itself.
                </p>
                <h4>The Internet of Everything</h4>
                <p>
                  Our world is becoming increasingly connected. Smart cities are
                  emerging, where traffic lights communicate with cars, streetlights
                  adjust based on pedestrian flow, and waste management systems
                  optimize collection routes in real-time. The Internet of Things
                  (IoT) is evolving into the Internet of Everything, creating a
                  seamless network of devices, sensors, and systems that work
                  together to make our lives more efficient and sustainable.
                </p>
                <h4>The Future of Human-Machine Collaboration</h4>
                <p>
                  As we stand on the precipice of this technological revolution,
                  the question isn't whether machines will replace humans, but
                  how we can best collaborate with them. Augmented reality is
                  enhancing our perception of the world, while brain-computer
                  interfaces are creating new ways for us to interact with
                  technology. The future belongs to those who can harness the
                  power of human creativity and machine precision, working
                  together to solve the greatest challenges facing humanity.
                </p>
              </ExpandableCard> */}
            </div>
          </div>
        </main>
      </SideBarLayout>
    </div >
  )
}

export default ExplorePage