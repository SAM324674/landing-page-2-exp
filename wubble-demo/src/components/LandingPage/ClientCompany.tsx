import React from 'react'
import { Logos3 } from '../logos3';
import Cisco from '../../../public/CiscoLogo.svg'
import { Button } from '../ui/button';
// import { Button } from '../liquid-glass-button';

const ClientCompany = () => {
    const demoData = {
        heading: "Trusted by these companies",
        logos: [
            {
                id: "logo-1",
                description: "Cisco",
                image: "./CiscoLogo.svg",
                className: "h-[5rem] w-auto",
            },
            {
                id: "logo-2",
                description: "Twillo",
                image: "TwilioLogo.svg",
                className: "h-[5rem] w-auto",
            },
            {
                id: "logo-3",
                description: "Epic Games",
                image: "Epic-GamesLogos.svg",
                className: "h-[5rem] w-auto",
            },
            {
                id: "logo-1",
                description: "Cisco",
                image: "./CiscoLogo.svg",
                className: "h-[5rem] w-auto",
            },
            {
                id: "logo-2",
                description: "Twillo",
                image: "TwilioLogo.svg",
                className: "h-[5rem] w-auto",
            },
            {
                id: "logo-3",
                description: "Epic Games",
                image: "Epic-GamesLogos.svg",
                className: "h-[5rem] w-auto",
            },
            {
                id: "logo-1",
                description: "Cisco",
                image: "./CiscoLogo.svg",
                className: "h-[5rem] w-auto",
            },
            {
                id: "logo-2",
                description: "Twillo",
                image: "TwilioLogo.svg",
                className: "h-[5rem] w-auto",
            },
            {
                id: "logo-3",
                description: "Epic Games",
                image: "Epic-GamesLogos.svg",
                className: "h-[5rem] w-auto",
            },


        ],
    };
    return (
        <div className='w-full flex  flex-col items-center'>
            <Logos3 {...demoData} />
            <div className='flex gap-7'>
                <Button className=' relative overflow-hidden text-white font-semibold
    bg-gradient-to-l from-[#6a5ae7] to-[#d622ef]
    bg-[length:200%_200%] bg-left
    transition-all duration-500 ease-in-out
    hover:bg-right
    rounded-full w-[7rem] p-3'>Talk to Sales</Button>
                <Button className='bg-gray-500 rounded-full w-[7rem] p-3 hover:text-white hover:bg-gray-700'>Read Stories</Button>
            </div>
        </div>
    )
}

export default ClientCompany