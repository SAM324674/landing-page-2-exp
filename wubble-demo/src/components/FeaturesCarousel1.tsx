import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/carousel"
import Image from "next/image"
import pic from '../../public/Gaming.jpg'
import React from 'react'
import { Card, CardContent } from "./ui/card"
import { Item } from "@radix-ui/react-accordion"
import { Button } from "./ui/button"
const CarouselList = [
    {
        img: "/Gaming.jpg",
        title: "Cultural Localization",
        Description: "Mock up and test multiple audio ideas in minutes."
    },
    {
        img: "/Gaming.jpg",
        title: "Intelligent Mixing",
        Description: "Auto-balance voice, music, and SFX for perfect clarity."
    },
    {
        img: "/Gaming.jpg",
        title: "Brand Voice Cloning",
        Description: "Securely clone and deploy your spokesperson's voice."
    },
    {
        img: "/Gaming.jpg",
        title: "Cultural Localization",
        Description: "Mock up and test multiple audio ideas in minutes."
    },
    {
        img: "/Gaming.jpg",
        title: "Intelligent Mixing",
        Description: "Auto-balance voice, music, and SFX for perfect clarity."
    },
    {
        img: "/Gaming.jpg",
        title: "Brand Voice Cloning",
        Description: "Securely clone and deploy your spokesperson's voice."
    },
    {
        img: "/Gaming.jpg",
        title: "Cultural Localization",
        Description: "Mock up and test multiple audio ideas in minutes."
    },
    {
        img: "/Gaming.jpg",
        title: "Intelligent Mixing",
        Description: "Auto-balance voice, music, and SFX for perfect clarity."
    },
    {
        img: "/Gaming.jpg",
        title: "Brand Voice Cloning",
        Description: "Securely clone and deploy your spokesperson's voice."
    }
]

const FeaturesCarousel1 = () => {
    return (
        <div className="relative w-full overflow-hidden  ">
            
            <Carousel className="ml-[7rem] w-[85%]">
                <CarouselContent className="-ml-1">
                    {CarouselList.map((item, index) => (
                        <CarouselItem key={index} className="pl-5 md:basis-1/2 lg:basis-1/4">
                            <div className="p-1">
                                <Card className="overflow-hidden border border-gray-900 shadow-[#6a5ae7] shadow-xl">
                                    <CardContent className="flex flex-col items-center justify-center px-0 space-y-5 bg-gray-900 ">
                                        <div className="w-full rounded-xl overflow-hidden  mt-0  ">
                                            <img src={item.img} className=""/>
                                        </div>
                                        <div className="  w-full  space-y-2  p-3 rounded-md text-white">
                                                <h1 className="font-bold">{item.title}</h1>
                                                <p className="text-gray-400">{item.Description}</p>
                                                <Button className="bg-gray-500">View Feature</Button>
                                        </div>
                                        {/* <span className="text-2xl font-semibold">{index + 1}</span> */}
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious  className="text-black"/>
                <CarouselNext  className="text-black"/>
            </Carousel>
        </div>
    )
}

export default FeaturesCarousel1