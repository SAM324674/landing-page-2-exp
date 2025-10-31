import SideBarLayout from "@/app/(routes)/SideBarLayout"
import { AuthShowcase } from "@/components/auth-showcase"
import { AnimatedModal } from "@/components/ui/animated-modal"
import { Button } from "@/components/ui/button"
import { MagneticLink, MagneticProps } from "@/components/ui/magnetic"
import Switch, { SwitchControl } from "@/components/ui/switch"
import { MoveRight } from "dicons"
import { Book, BookMarked, Box, ChevronsLeftRightEllipsis, CircleDollarSign, Code2, HelpCircle, KeyRound, MoveLeft, Music4, Plus } from "lucide-react"
const QUICK_LINKS = [
    {
        label: 'Create an API key',
        link: '#',
        icon:<KeyRound/>
        
    },
    {
        label: 'Browse documentation',
        link: '#' ,
        icon:<Book/>  
    },
    {
        label: 'Pricing Overview',
        link: '#',
        icon:<CircleDollarSign/>
    },
    {
        label: 'Playground',
        link: '#',
        icon:<Code2/>
    },
    {
        label: 'Usage & Billing',
        link: '#',
        icon:<BookMarked/>
    },
    {
        label: 'Get Help',
        link: '#',
        icon:<HelpCircle/>
    },
    
];

const APIPage = () => {
    console.log("Switch imported as:", Switch);

    return (
        <div>
            <SideBarLayout>
                <main className=' p-4  w-full flex flex-col items-center space-y-4 pb-10'>
                    <div className='flex justify-start w-[95%] mt-[2rem] font-bold text-3xl'>
                        <h1>Developer Overview</h1>
                    </div>
                    <div className="w-[98%] rounded-xl bg-gray-400 p-4 px-8">
                        <AuthShowcase />
                    </div>
                    <div className="w-[95%]">
                        <h1 className="text-xl font-bold mt-4 mb-3 ">Quick Links</h1>
                        <div className="grid grid-cols-3 gap-4 w-full">
                        {QUICK_LINKS.map((link) => (
                            <MagneticLink key={link.label} link={link.link} >
                               <div className="flex items-center justify-start w-full">
                                <p className="w-[4rem] flex justify-center items-center">{link.icon}</p>
                                 <div className="flex">{link.label}</div>
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