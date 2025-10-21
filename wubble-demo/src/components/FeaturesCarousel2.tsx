'use client';
import React from 'react'
import img from '../../public/music.jpg'
import { Headset, Music, Video } from 'lucide-react';
import {
    Stories,
    StoriesContent,
    Story,
    StoryFeature,
    StoryOverlay,
    StoryImage,
} from '@/components/stories-features-carousel';
// import { CarouselNavigation } from './carousel';
// import { CarouselNext, CarouselPrevious } from './ui/carousel';
const stories = [
    {
        id: 1,
        icon: <Video />,
        featureName: "Video",
        img: "/Vlogs.jpg",
    },
    {
        id: 2,
        icon: <Music />,
        featureName: "Music",
        img: "/music.jpg",
    },
    {
        id: 3,
        icon: <Headset />,
        featureName: "Gaming",
        img: "/Gaming.jpg",
    },
    {
        id: 4,
        icon: <Headset />,
        featureName: "Gaming",
        img: "/Gaming.jpg",
    },
    {
        id: 5,
        icon: <Video />,
        featureName: "Video",
        img: "/Vlogs.jpg",
    },
    {
        id: 6,
        icon: <Music />,
        featureName: "Music",
        img: "/music.jpg",
    },
    {
        id: 7,
        icon: <Headset />,
        featureName: "Gaming",
        img: "/Gaming.jpg",
    },
    {
        id: 8,
        icon: <Music />,
        featureName: "Music",
        img: "/music.jpg",
    },
    {
        id: 9,
        icon: <Video />,
        featureName: "Video",
        img: "/Vlogs.jpg",
    },
    {
        id: 10,
        icon: <Music />,
        featureName: "Music",
        img: "/music.jpg",
    },
];
const FeaturesCarousel2 = () => {
    return (
        <Stories showNavigation className='w-[95%] '>
            <StoriesContent>
                {stories.map((story) => (
                    <Story className="aspect-[3/4] w-[200px]" key={story.id}>
                        <StoryImage src={story.img} alt='img' />
                        <StoryOverlay />
                        <StoryFeature icon={story.icon} featureName={story.featureName} />
                    </Story>
                ))}
            </StoriesContent>
           
        </Stories>
    )
}

export default FeaturesCarousel2