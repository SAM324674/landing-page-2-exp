"use client"
import Image from "next/image"
import pic from '../../public/Gaming.jpg'
import React from 'react';

import { CircularGallery, GalleryItem } from '@/components/circular-gallery';
import { ThreeDPhotoCarousel } from "./ui/3d-carousel";
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




const galleryData: GalleryItem[] = [
    {
        title: "Cultural Localization",
        photo: {
            url: "/Gaming.jpg",
            text: "",
            pos: '47% 35%',

        },
        Description: "Auto-balance voice, music, and SFX for perfect clarity."
    },
    {
        photo: {
            url: "/Gaming.jpg",
            text: "",
            pos: '47% 35%',

        },
        title: "Intelligent Mixing",
        Description: "Auto-balance voice, music, and SFX for perfect clarity."
    },
    {
        photo: {
            url: "/Gaming.jpg",
            text: "",
            pos: '47% 35%',

        },
        title: "Brand Voice Cloning",
        Description: "Securely clone and deploy your spokesperson's voice."
    },
    {
        photo: {
            url: "/Gaming.jpg",
            text: "",
            pos: '47% 35%',

        },
        title: "Cultural Localization",
        Description: "Mock up and test multiple audio ideas in minutes."
    },
    {
        photo: {
            url: "/Gaming.jpg",
            text: "",
            pos: '47% 35%',

        },
        title: "Intelligent Mixing",
        Description: "Auto-balance voice, music, and SFX for perfect clarity."
    },
    {
        photo: {
            url: "/Gaming.jpg",
            text: "",
            pos: '47% 35%',

        },
        title: "Brand Voice Cloning",
        Description: "Securely clone and deploy your spokesperson's voice."
    },
    {
        photo: {
            url: "/Gaming.jpg",
            text: "",
            pos: '47% 35%',

        },
        title: "Cultural Localization",
        Description: "Mock up and test multiple audio ideas in minutes."
    },
    {
        photo: {
            url: "/Gaming.jpg",
            text: "",
            pos: '47% 35%',

        },
        title: "Intelligent Mixing",
        Description: "Auto-balance voice, music, and SFX for perfect clarity."
    },
    {
        photo: {
            url: "/Gaming.jpg",
            text: "",
            pos: '47% 35%',

        },
        title: "Brand Voice Cloning",
        Description: "Securely clone and deploy your spokesperson's voice."
    }

];

const FeatureCircularGallery = () => {
    return (
        // This outer container provides the scrollable height
        <div className="  relative  w-full h-[50rem] overflow-hidden  bg-gradient-to-t from-[#d19fff]/80  via-[#d19fff]/60 to-[#d19fff]/50 text-foreground">

               
                   
                        <ThreeDPhotoCarousel cards={galleryData} />
              
          
              
            <div className="absolute h-[8rem] w-full  z-20 -bottom-[4rem] bg-gradient-to-t  from-white via-white to-transparent " />
        </div>
    );
};


export default FeatureCircularGallery
