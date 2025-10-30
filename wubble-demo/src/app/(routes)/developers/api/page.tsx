import React from 'react'
import SideBarLayout from '../../SideBarLayout'
import { AuthShowcase } from '@/components/auth-showcase'
import { Book, BookMarked, CircleDollarSign, Code2, HelpCircle, KeyRound } from 'lucide-react';
import { MagneticLink } from '@/components/ui/magnetic';

type QuickLink = {
    label: string;
    link: string;
    icon?: React.ReactNode;
};


const SOCIAL_LINKS: QuickLink[] = [
    {
        label: 'Create an API key',
        link: '#',
        icon: <KeyRound />
    },
    {
        label: 'Browse documentation',
        link: '#',
        icon: <Book />
    },
    {
        label: 'Pricing Overview',
        link: '#',
        icon: <CircleDollarSign />
    },
    {
        label: 'Playground',
        link: '#',
        icon: <Code2 />
    },
    {
        label: 'Usage & Billing',
        link: '#',
        icon: <BookMarked />
    },
    {
        label: 'Get Help',
        link: '#',
        icon: <HelpCircle />
    },
];

const APIPage = () => {
    return (
        <div>
            <SideBarLayout>
                <main className=' p-4  w-full flex flex-col items-center space-y-4 pb-10'>
                    <div className='flex justify-start w-[95%] mt-[2rem] font-bold text-3xl'>
                        <h1>Developer's Overview</h1>
                    </div>
                    <div className='w-[95%]  rounded-xl bg-gray-200 border p-6'>
                        <AuthShowcase />

                    </div>
                    <div className='flex flex-col w-[90%] text-2xl font-bold'>
                        <h1 className=''>Quicklinks</h1>
                        <div className="grid grid-cols-3 gap-3 items-center justify-start space-x-3 mt-3">
                            {SOCIAL_LINKS.map((link) => (
                                <MagneticLink key={link.label} link={link.link}>
                                    <div className='flex items-center  w-full'>
                                        <div className='w-[10rem]'>{link.icon}</div>
                                        <p>{link.label}</p>
                                    </div>
                                </MagneticLink>
                            ))}
                        </div>
                    </div>
                </main>
            </SideBarLayout>
        </div>
    )
}

export default APIPage