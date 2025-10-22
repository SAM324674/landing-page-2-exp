import React from 'react'
import { Logos3 } from '../logos3';
import Cisco from '../../../public/Epic-GamesLogos.svg'
import { Button } from '../ui/button';
import Image from 'next/image';
import { WidthIcon } from '@radix-ui/react-icons';
// import { Button } from '../liquid-glass-button';

const ClientCompany = () => {
    const CompanyList = [
            {
                id: "logo-1",
                image: "./Netflix.svg",
                className: "h-[5rem] w-auto",
                width:90,
                height:100,
                border:' border-r-[3px] border-b-[3px]  '
            },
             {
                id: "logo-2",
                image: "./Disnep+.svg",
                width:100,
                height:100,
                border:' border-b-[3px] '
            },
             {
                id: "logo-3",
                image: "./Epic-GamesLogos.svg",
                width:35,
                height:50,
                border:' border-l-[3px] border-b-[3px] '
            },
             {
                id: "logo-4",
                image: "./Spotify.svg",
                width:120,
                height:150,
                border:' border-r-[3px]  '
            },
             {
                id: "logo-5",
                image: "./Google.svg",
                width:110,
                height:200,
                border:'  '
            },
             {
                id: "logo-6",
                image: "./amazonLogo.svg",
                width:110,
                height:200,
                border:' border-l-[3px] '
            },
    ]


        
    
    return (
        <div className='w-full flex  flex-col items-center space-y-12'>
            <h1 className='text-xl font-bold'>TRUSTED BY THE WORLD’S MOST CREATIVE STUDIOS</h1>
            <div className='grid grid-cols-3 w-[90%] border border-gray-800  '>
                {CompanyList.map((company,index)=>(
                    <div key={index+1} className={` ${company.border} border-gray-700 border-dotted flex justify-center w-full p-4 h-[8rem]`}>
                        <Image src={company.image} alt='img' width={company.width} height={company.height}/>
                    </div>
                ))}
                
            </div>
            <div className='w-[90%] border-l-[3px] border-r-[3px] border-gray-400/50 border-dotted absolute bottom-2 h-[2rem]'/>
            <div className='w-[90%] border-l-[3px] border-r-[3px] border-gray-400/50 border-dotted absolute top-10 h-[2rem]'/>
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