import React from 'react';
import {
	CodeIcon,
	Grid2x2PlusIcon,
	GlobeIcon,
	LayersIcon,
	UserPlusIcon,
	Users,
	Star,
	FileText,
	Shield,
	RotateCcw,
	Handshake,
	Leaf,
	HelpCircle,
	DollarSign,
	BarChart,
	PlugIcon,
	MenuIcon,
	XIcon,
	Megaphone,
	Film,
	Gamepad2,
	Video,
	Podcast,
	Hotel,
	Brain,
	Mic,
	Music,
	Volume2,
	Book,
	CreditCard,
	FileCode,
	LifeBuoy,
	Building,
	Heart,
	BadgeDollarSign,
	Microscope,
	BookOpenTextIcon,
	Newspaper,
} from 'lucide-react';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from '@/components/sheet';
import { Button } from '@/components/ui/button';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuTrigger,
	NavigationMenuLink,
	type NavItemType,
	NavGridCard,
	NavSmallItem,
	NavLargeItem,
	NavItemMobile,
} from '@/components/navigation-menu';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

// Solutions Links
export const solutionsLinks: NavItemType[] = [
	{
		title: 'For Marketing & Advertising',
		href: '#',
		description: 'Create compelling audio for campaigns',
		icon: Megaphone,
	},
	{
		title: 'For Film & TV',
		href: '#',
		description: 'Professional audio production for media',
		icon: Film,
	},
	{
		title: 'For Game Developers',
		href: '#',
		description: 'Dynamic game audio and soundscapes',
		icon: Gamepad2,
	},
	{
		title: 'For Creators',
		href: '#',
		description: 'Audio tools for content creators',
		icon: Video,
	},
	{
		title: 'For Podcasters',
		href: '#',
		description: 'Professional podcast production',
		icon: Podcast,
	},
	{
		title: 'For Hospitality',
		href: '#',
		description: 'Ambient audio for venues',
		icon: Hotel,
	},
];

// Features Links
export const featuresLinks: NavItemType[] = [
	{
		title: 'AI Sound Engineer',
		href: '#',
		description: 'Professional audio engineering powered by AI',
		icon: Brain,
	},
	{
		title: 'Voice (TTS, Cloning, ADR)',
		href: '#',
		description: 'Text-to-speech, voice cloning, and ADR',
		icon: Mic,
	},
	{
		title: 'Music (Generation, Mixing, Scoring)',
		href: '#',
		description: 'Complete music production suite',
		icon: Music,
	},
	{
		title: 'SFX (Generation, Foley, Mixing)',
		href: '#',
		description: 'Sound effects creation and mixing',
		icon: Volume2,
	},
];

// Developers Links
export const developersLinks: NavItemType[] = [
	{
		title: 'Docs',
		href: '#',
		description: 'Complete documentation',
		icon: Book,
	},
	{
		title: 'Pricing',
		href: '#',
		description: 'View pricing plans',
		icon: CreditCard,
	},
	{
		title: 'API Reference',
		href: '#',
		description: 'API documentation',
		icon: FileCode,
	},
	{
		title: 'Get Help',
		href: '#',
		description: 'Support and assistance',
		icon: LifeBuoy,
	},
];

// Compare Pricing Links
export const pricingLinks: NavItemType[] = [
	{
		title: 'Pro',
		href: '#',
		description: 'For individual professionals',
		icon: Star,
	},
	{
		title: 'Teams',
		href: '#',
		description: 'For collaborative teams',
		icon: Users,
	},
	{
		title: 'Enterprise',
		href: '#',
		description: 'For large organizations',
		icon: Building,
	},
	{
		title: 'Nonprofit',
		href: '#',
		description: 'Special pricing for nonprofits',
		icon: Heart,
	},
];

export const companyLinks: NavItemType[] = [
	{
		title: 'Pricing',
		href: '#',
		description: 'Learn more about our story and team',
		icon: DollarSign,
	},
	{
		title: 'Help Center',
		href: '#',
		icon: HelpCircle,
		description: 'Find answers to your questions',
	},
	{
		title: 'Blog',
		href: '#',
		description: 'Understand how we operate',
		icon: BookOpenTextIcon,
	},
	{
		title: 'Case Studies',
		href: '#',
		description: 'How we protect your information',
		icon: Microscope,
	},
	{
		title: 'News Room',
		href: '#',
		description: 'Details about refunds and cancellations',
		icon:Newspaper,
	},
	
	
	
];

export default function Header() {
	return (
		<div className="fixed z-50 top-3 w-full px-4">
			{/* <div
				aria-hidden="true"
				className={cn(
					'absolute inset-0 -z-10 size-full',
					'bg-[radial-gradient(color-mix(in_oklab,--theme(--color-foreground/.2)30%,transparent)_2px,transparent_2px)]',
					'bg-[size:12px_12px]',
				)}
			/> */}

			<div className="bg-background/50 backdrop-blur-lg sticky top-2 z-50 mx-auto  w-full border p-3  rounded-lg">
				<div className="flex h-full items-center justify-around">
					<div className="flex items-center gap-2">
						<Grid2x2PlusIcon className="size-6" />
						<p className="font-mono text-lg font-bold">Wubble</p>
					</div>
					<DesktopMenu />

					<div className="flex items-center gap-[30px]">
						<Button className='text-[16px] w-[95px] h-[48px] leading-[150%] tracking-[0%] bg-[#a855f7] text-primary-foreground hover:bg-primary/90 rounded-[10px] py-[12px] px-[24px] font-[600]'>Log In</Button>
                        <Button className='w-[107px] h-[48px] py-[12px] px-[24px] text-[16px] rounded-[10px] leading-[150%] font-[600] bg-white border-2 border-[#a855f7] text-[#a855f7] hover:bg-primary/5'>Sign Up</Button>
						<MoileNav />
					</div>
				</div>
			</div>
		</div>
	);
}

function DesktopMenu() {
	return (
		<NavigationMenu className="hidden lg:block ">
			<NavigationMenuList className='gap-[20px] flex ml-[13rem]'>
				{/* Solutions Dropdown */}
				<NavigationMenuItem>
					<NavigationMenuTrigger className='cursor-pointer text-[16px] leading-[150%] font-[500] py-[12px] px-[24px] rounded-[10px]'>
						Solutions
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className="grid w-4xl md:grid-cols-2">
							<ul className="grid grow gap-4 p-4">
								{solutionsLinks.slice(0, 3).map((link) => (
									<li key={link.href}>
										<NavGridCard link={link} />
									</li>
								))}
							</ul>
							<ul className="grid grow gap-4 p-4">
								{solutionsLinks.slice(3).map((link) => (
									<li key={link.href}>
										<NavGridCard link={link} />
									</li>
								))}
							</ul>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
				
				{/* Features Dropdown */}
				<NavigationMenuItem>
					<NavigationMenuTrigger className='cursor-pointer text-[16px] leading-[150%] font-[500] py-[12px] px-[24px] rounded-[10px]'>
						Features
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-4 p-4 md:grid-cols-2 w-3xl">
							{featuresLinks.map((link) => (
								<li key={link.href}>
									<NavGridCard link={link} />
								</li>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				
				{/* Developers Dropdown */}
				<NavigationMenuItem>
					<NavigationMenuTrigger className='cursor-pointer text-[16px] leading-[150%] font-[500] py-[12px] px-[24px] rounded-[10px]'>
						Developers
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-4 p-4 md:grid-cols-2 w-3xl">
							{developersLinks.map((link) => (
								<li key={link.href}>
									<NavGridCard link={link} />
								</li>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				
				{/* Compare Pricing Dropdown */}
				<NavigationMenuItem>
					<NavigationMenuTrigger className='cursor-pointer text-[16px] leading-[150%] font-[500] py-[12px] px-[24px] rounded-[10px]'>
						Compare Pricing
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-4 p-4 md:grid-cols-2 w-3xl">
							{pricingLinks.map((link) => (
								<li key={link.href}>
									<NavGridCard link={link} />
								</li>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				
				{/* Resources Dropdown */}
				<NavigationMenuItem>
					<NavigationMenuTrigger className='cursor-pointer text-[16px] leading-[150%] font-[500] py-[12px] px-[24px] rounded-[10px]'>
						Resources
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className="w-3xl md:grid-cols-[1fr_.40fr]">
							<ul className="grid grid-cols-2 gap-4 p-4 md:border-r">
								{companyLinks.slice(0,2).map((link) => (
									<li key={link.href}>
										<NavGridCard link={link} className="min-h-36" />
									</li>
								))}
								<div className="col-span-2 grid grid-cols-3 gap-x-4">
									{companyLinks.slice(2, 5).map((link) => (
										<li key={link.href}>
											<NavLargeItem href={link.href} link={link} />
										</li>
									))}
								</div>
							</ul>
							<ul className="space-y-2 p-4">
								{companyLinks.slice(5, 10).map((link) => (
									<li key={link.href}>
										<NavLargeItem href={link.href} link={link} />
									</li>
								))}
							</ul>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

function MoileNav() {
	const sections = [
		{
			id: 'solutions',
			name: 'Solutions',
			list: solutionsLinks,
		},
		{
			id: 'features',
			name: 'Features',
			list: featuresLinks,
		},
		{
			id: 'developers',
			name: 'Developers',
			list: developersLinks,
		},
		{
			id: 'pricing',
			name: 'Compare Pricing',
			list: pricingLinks,
		},
		{
			id: 'resources',
			name: 'Resources',
			list: companyLinks,
		},
	];

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button size="icon" variant="ghost" className="rounded-full lg:hidden">
					<MenuIcon className="size-5" />
				</Button>
			</SheetTrigger>
			<SheetContent
				className="bg-background/95 supports-[backdrop-filter]:bg-background/80 w-full gap-0 backdrop-blur-lg"
				showClose={false}
			>
				<div className="flex h-14 items-center justify-end border-b px-4">
					<SheetClose asChild>
						<Button size="icon" variant="ghost" className="rounded-full">
							<XIcon className="size-5" />
							<span className="sr-only">Close</span>
						</Button>
					</SheetClose>
				</div>
				<div className="container grid gap-y-2 overflow-y-auto px-4 pt-5 pb-12">
					<Accordion type="single" collapsible>
						{sections.map((section) => (
							<AccordionItem key={section.id} value={section.id}>
								<AccordionTrigger className="capitalize hover:no-underline">
									{section.id}
								</AccordionTrigger>
								<AccordionContent className="space-y-1">
									<ul className="grid gap-1">
										{section.list.map((link) => (
											<li key={link.href}>
												<SheetClose asChild>
													<NavItemMobile item={link} href={link.href} />
												</SheetClose>
											</li>
										))}
									</ul>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</SheetContent>
		</Sheet>
	);
}
