"use client"
import Image from "next/image"
import pic from '../../public/Gaming.jpg'
import React from 'react';

import { CircularGallery, GalleryItem } from '@/components/circular-gallery';
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
    <div className="w-full bg-background text-foreground" style={{ height: '500vh' }}>
      {/* This inner container sticks to the top while scrolling */}
      <div className="w-full h-screen sticky top-0 flex flex-col items-center justify-center overflow-hidden">
        <div className="text-center mb-8 absolute top-16 z-10">
          <h1 className="text-4xl font-bold">Animal Gallery</h1>
          <p className="text-muted-foreground">Scroll to rotate the gallery</p>
        </div>
        <div className="w-full h-full">
          <CircularGallery items={galleryData} />
        </div>
      </div>
    </div>
  );
};

export default FeatureCircularGallery
